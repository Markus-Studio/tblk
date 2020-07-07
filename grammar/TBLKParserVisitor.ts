// Generated from TBLKParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MemberIndexExpressionContext } from "./TBLKParser";
import { MemberDotExpressionContext } from "./TBLKParser";
import { ArgumentsExpressionContext } from "./TBLKParser";
import { TypeofExpressionContext } from "./TBLKParser";
import { UnaryPlusExpressionContext } from "./TBLKParser";
import { UnaryMinusExpressionContext } from "./TBLKParser";
import { BitNotExpressionContext } from "./TBLKParser";
import { NotExpressionContext } from "./TBLKParser";
import { PowerExpressionContext } from "./TBLKParser";
import { MultiplicativeExpressionContext } from "./TBLKParser";
import { AdditiveExpressionContext } from "./TBLKParser";
import { BitShiftExpressionContext } from "./TBLKParser";
import { RelationalExpressionContext } from "./TBLKParser";
import { InstanceofExpressionContext } from "./TBLKParser";
import { InExpressionContext } from "./TBLKParser";
import { EqualityExpressionContext } from "./TBLKParser";
import { BitAndExpressionContext } from "./TBLKParser";
import { BitXOrExpressionContext } from "./TBLKParser";
import { BitOrExpressionContext } from "./TBLKParser";
import { LogicalAndExpressionContext } from "./TBLKParser";
import { LogicalOrExpressionContext } from "./TBLKParser";
import { TernaryExpressionContext } from "./TBLKParser";
import { IdentifierExpressionContext } from "./TBLKParser";
import { LiteralExpressionContext } from "./TBLKParser";
import { ParenthesizedExpressionContext } from "./TBLKParser";
import { DocumentContext } from "./TBLKParser";
import { PartialContext } from "./TBLKParser";
import { RowContext } from "./TBLKParser";
import { SegmentContext } from "./TBLKParser";
import { SpanContext } from "./TBLKParser";
import { PrintContext } from "./TBLKParser";
import { LoopBeginContext } from "./TBLKParser";
import { LoopEndContext } from "./TBLKParser";
import { IfBeginContext } from "./TBLKParser";
import { ElseCmdContext } from "./TBLKParser";
import { IfEndContext } from "./TBLKParser";
import { PartialBeginContext } from "./TBLKParser";
import { PartialEndContext } from "./TBLKParser";
import { PartialUseContext } from "./TBLKParser";
import { AssignmentContext } from "./TBLKParser";
import { ArgumentsContext } from "./TBLKParser";
import { ArgumentContext } from "./TBLKParser";
import { ExpressionSequenceContext } from "./TBLKParser";
import { SingleExpressionContext } from "./TBLKParser";
import { LiteralContext } from "./TBLKParser";
import { NumericLiteralContext } from "./TBLKParser";
import { IdentifierNameContext } from "./TBLKParser";
import { IdentifierContext } from "./TBLKParser";
import { ReservedWordContext } from "./TBLKParser";
import { KeywordContext } from "./TBLKParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TBLKParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TBLKParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDotExpression?: (ctx: MemberDotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeofExpression?: (ctx: TypeofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PowerExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpression?: (ctx: PowerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitShiftExpression?: (ctx: BitShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceofExpression?: (ctx: InstanceofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInExpression?: (ctx: InExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitXOrExpression?: (ctx: BitXOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.partial`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartial?: (ctx: PartialContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.row`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRow?: (ctx: RowContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegment?: (ctx: SegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.span`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpan?: (ctx: SpanContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint?: (ctx: PrintContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.loopBegin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopBegin?: (ctx: LoopBeginContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.loopEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopEnd?: (ctx: LoopEndContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.ifBegin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBegin?: (ctx: IfBeginContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.elseCmd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseCmd?: (ctx: ElseCmdContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.ifEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfEnd?: (ctx: IfEndContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.partialBegin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartialBegin?: (ctx: PartialBeginContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.partialEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartialEnd?: (ctx: PartialEndContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.partialUse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartialUse?: (ctx: PartialUseContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.expressionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSequence?: (ctx: ExpressionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.identifierName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierName?: (ctx: IdentifierNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.reservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedWord?: (ctx: ReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `TBLKParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;
}

