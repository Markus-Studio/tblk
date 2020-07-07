import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParserRuleContext } from 'antlr4ts';
import { SourceNode } from 'source-map';
import { TBLKParserVisitor } from '../grammar/TBLKParserVisitor';
import { splitLeadingBlank } from './utils';
import { SymbolTable } from './symbols';
import * as Parser from '../grammar/TBLKParser';

type ControlFlowItem = 'for' | 'if';

export class Compiler extends AbstractParseTreeVisitor<SourceNode>
  implements TBLKParserVisitor<SourceNode> {
  /** Used to check the correctness of open-close control-flow nodes. */
  protected controlFlowStack: ControlFlowItem[] = [];
  private symbols = new SymbolTable<string, null>();
  private usedElse = true;

  constructor(public source: string | null = null, public iife = true) {
    super();
  }

  /** Checks the head of the control-flow stack, throws error when:
   * a) Stack is empty.
   * b) Stack's head is not equal to the `expected` argument.
   *
   * @param expected The control-flow node kind expected to be at the top of
   * the stack.
   */
  protected check(expected: ControlFlowItem) {
    const length = this.controlFlowStack.length;
    if (length === 0) {
      throw new SyntaxError("Ran out of control-flow stack");
    } else {
      const actual = this.controlFlowStack[length - 1];
      if (actual !== expected) {
        throw new SyntaxError(
          `Parse error: Expected '${expected}' as control-flow stack head found '${actual}'.`
        );
      }
    }
  }

  /**
   * Tries to pop from the control-flow stack, operation fails if `check()`
   * throws.
   *
   * @param expected The expected value of the control-flow stack's head.
   * @see Compiler#check
   */
  protected pop(expected: ControlFlowItem) {
    this.check(expected);
    this.controlFlowStack.pop();
  }

  defaultResult() {
    return new SourceNode();
  }

  aggregateResult(aggregate: SourceNode, nextResult: SourceNode) {
    aggregate.add(nextResult);
    return aggregate;
  }

  visitDocument(context: Parser.DocumentContext) {
    const body = [
      // result, prefix
      "const w = new Writer();\n",
      // This function is used to write anything that might have line breaks.
      this.visitChildren(context),
      "w.flush();\n",
      "return w.result;\n",
    ];

    if (this.iife) {
      return new SourceNode(1, 0, "tng://internal", [
        "(function (Writer) { return function render($) {",
        ...body,
        "}})",
      ]);
    } else {
      return new SourceNode(1, 0, "tng://internal", [
        'const { Writer } = require("tblk");\n',
        "module.exports = function render($) {\n",
        ...body,
        "}",
      ]);
    }
  }

  visitRow(context: Parser.RowContext) {
    const segments = [...context.segment()];
    const sourceNode = this.text(context, []);
    let didWrote = false;

    if (segments.length === 0) {
      return this.text(context, "w.brk();\n");
    }

    if (isSpanSegment(segments[0])) {
      const first = segments.shift()!;
      const text = first.text;

      const willPrint = segments.some(seg => isSpanSegment(seg) || isPrintSegment(seg));
      didWrote = willPrint;

      if (segments.length === 0) {
        sourceNode.add(["w.result += ", JSON.stringify(text + "\n"), ";\n"]);
        return sourceNode;
      }

      const [prefix, rest] = splitLeadingBlank(text);

      didWrote = didWrote || !!rest;

      if (prefix && rest) {
        sourceNode.add(
          this.text(first, [
            "w.indent = " + JSON.stringify(prefix) + ";\n",
            "w.write(" + JSON.stringify(rest) + ");\n",
          ])
        );
      } else if (rest) {
        sourceNode.add(
          this.text(first, ["w.write(" + JSON.stringify(rest) + ");\n"])
        );
      } else if (willPrint) {
        sourceNode.add(
          this.text(first, ["w.indent = " + JSON.stringify(prefix) + ";\n"])
        );
      }
    } else {
      didWrote = segments.some(seg => isSpanSegment(seg) || isPrintSegment(seg));
    }

    for (const segment of segments) {
      sourceNode.add(this.visit(segment));
    }

    if (didWrote) {
      sourceNode.add("w.brk();\n");
    }

    return sourceNode;
  }

  visitSpan(context: Parser.SpanContext) {
    return this.text(context, "w.write(" + JSON.stringify(context.text) + ");\n");
  }

  visitPrint(context: Parser.PrintContext) {
    return this.text(context, ["w.write(", this.visitChildren(context), ");\n"]);
  }

  visitLoopBegin(context: Parser.LoopBeginContext) {
    this.controlFlowStack.push("for");
    const id = context.identifier()
    const expr = this.visit(context.expressionSequence());
    this.symbols.pushFrame();
    this.symbols.set(id.text, null);
    return this.text(context, [
      "for (const _",
      this.visit(id),
      " of ",
      expr,
      ") {\n",
    ]);
  }

  visitLoopEnd(context: Parser.LoopEndContext) {
    this.pop("for");
    this.symbols.popFrame();
    return this.text(context, "}\n");
  }

  visitIfBegin(context: Parser.IfBeginContext) {
    this.usedElse = false;
    this.controlFlowStack.push("if");
    return this.text(context, [
      "if (",
      this.visit(context.expressionSequence()),
      ") {\n",
    ]);
  }

  visitElseCmd(context: Parser.ElseCmdContext) {
    this.check('if');
    if (this.usedElse) throw new Error('`Else` is already used.');
    this.usedElse = true;
    return this.text(context, '} else {\n');
  }

  visitIfEnd(context: Parser.IfEndContext) {
    this.pop("if");
    return this.text(context, "}\n");
  }

  // ---------------------------------------- JS Expressions
  visitExpressionSequence(node: Parser.ExpressionSequenceContext) {
    const expressions = node
      .singleExpression()
      .map((child) => this.visit(child));
    const source = this.text(node, [expressions.shift()!]);
    for (const expression of expressions) {
      source.add(",");
      source.add(expression);
    }
    return source;
  }

  visitMemberIndexExpression(node: Parser.MemberIndexExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression()),
      "[",
      this.visit(node.expressionSequence()),
      "]",
    ]);
  }

  visitMemberDotExpression(node: Parser.MemberDotExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression()),
      ".",
      this.visit(node.identifierName()),
    ]);
  }

  visitArgumentsExpression(node: Parser.ArgumentsExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression()),
      this.visit(node.arguments()),
    ]);
  }

  visitArguments(node: Parser.ArgumentsContext) {
    const args = node.argument().map((child) => this.visit(child));
    const source = this.text(node, "(");
    for (let i = 0; i < args.length; ++i) {
      if (i > 0) {
        source.add(",");
      }
      source.add(args[i]);
    }
    source.add(")");
    return source;
  }

  visitTypeofExpression(node: Parser.TypeofExpressionContext) {
    return this.text(node, [
      'typeof ',
      this.visit(node.singleExpression()),
    ]);
  }

  visitUnaryPlusExpression(node: Parser.UnaryPlusExpressionContext) {
    return this.text(node, ['+', this.visit(node.singleExpression())]);
  }

  visitUnaryMinusExpression(node: Parser.UnaryMinusExpressionContext) {
    return this.text(node, ['-', this.visit(node.singleExpression())]);
  }

  visitBitNotExpression(node: Parser.BitNotExpressionContext) {
    return this.text(node, ['~', this.visit(node.singleExpression())]);
  }

  visitNotExpression(node: Parser.NotExpressionContext) {
    return this.text(node, ['-', this.visit(node.singleExpression())]);
  }

  visitPowerExpression(node: Parser.PowerExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      '**',
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitMultiplicativeExpression(node: Parser.MultiplicativeExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      node.children![1].text,
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitAdditiveExpression(node: Parser.AdditiveExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      node.children![1].text,
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitBitShiftExpression(node: Parser.BitShiftExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      node.children![1].text,
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitRelationalExpression(node: Parser.RelationalExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      node.children![1].text,
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitInstanceofExpression(node: Parser.InstanceofExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      ' instanceof ',
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitInExpression(node: Parser.InExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      ' in ',
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitEqualityExpression(node: Parser.EqualityExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      node.children![1].text,
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitBitAndExpression(node: Parser.BitAndExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      '&',
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitBitOrExpression(node: Parser.BitOrExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      '|',
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitLogicalAndExpression(node: Parser.LogicalAndExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      '&&',
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitLogicalOrExpression(node: Parser.LogicalOrExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      '||',
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitTernaryExpression(node: Parser.TernaryExpressionContext) {
    return this.text(node, [
      this.visit(node.singleExpression(0)),
      '?',
      this.visit(node.singleExpression(1)),
      ':',
      this.visit(node.singleExpression(1)),
    ]);
  }

  visitIdentifierExpression(node: Parser.IdentifierExpressionContext) {
    if (this.symbols.has(node.text)) {
      return this.text(node, "_" + node.text);
    }
    return this.text(node, "$." + node.text);
  }

  visitLiteralExpression(node: Parser.LiteralExpressionContext) {
    return this.text(node, node.text);
  }

  visitParenthesizedExpression(node: Parser.ParenthesizedExpressionContext) {
    return this.text(node, ["(" + this.visitChildren(node), ")"]);
  }

  visitIdentifierName(node: Parser.IdentifierNameContext) {
    return this.text(node, node.text);
  }

  visitIdentifier(node: Parser.IdentifierContext) {
    return this.text(node, node.text);
  }

  protected text(
    node: ParserRuleContext,
    chunk: string | SourceNode | (string | SourceNode)[]
  ) {
    return new SourceNode(
      node.start.line,
      node.start.charPositionInLine,
      this.source,
      chunk
    );
  }
}

function isSpanSegment(segment: Parser.SegmentContext): boolean {
  if (segment.childCount === 0) return false;
  return segment.getChild(0) instanceof Parser.SpanContext;
}

function isPrintSegment(segment: Parser.SegmentContext): boolean {
  if (segment.childCount === 0) return false;
  return segment.getChild(0) instanceof Parser.PrintContext;
}
