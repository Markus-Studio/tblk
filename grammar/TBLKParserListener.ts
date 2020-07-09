// Generated from TBLKParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { CoalesceExpressionContext } from "./TBLKParser";
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
import { LoopFilterContext } from "./TBLKParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `TBLKParser`.
 */
export interface TBLKParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeofExpression?: (ctx: TypeofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PowerExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPowerExpression?: (ctx: PowerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PowerExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPowerExpression?: (ctx: PowerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CoalesceExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterCoalesceExpression?: (ctx: CoalesceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CoalesceExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitCoalesceExpression?: (ctx: CoalesceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitInExpression?: (ctx: InExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.partial`.
	 * @param ctx the parse tree
	 */
	enterPartial?: (ctx: PartialContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.partial`.
	 * @param ctx the parse tree
	 */
	exitPartial?: (ctx: PartialContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.row`.
	 * @param ctx the parse tree
	 */
	enterRow?: (ctx: RowContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.row`.
	 * @param ctx the parse tree
	 */
	exitRow?: (ctx: RowContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegment?: (ctx: SegmentContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegment?: (ctx: SegmentContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.span`.
	 * @param ctx the parse tree
	 */
	enterSpan?: (ctx: SpanContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.span`.
	 * @param ctx the parse tree
	 */
	exitSpan?: (ctx: SpanContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.print`.
	 * @param ctx the parse tree
	 */
	enterPrint?: (ctx: PrintContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.print`.
	 * @param ctx the parse tree
	 */
	exitPrint?: (ctx: PrintContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.loopBegin`.
	 * @param ctx the parse tree
	 */
	enterLoopBegin?: (ctx: LoopBeginContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.loopBegin`.
	 * @param ctx the parse tree
	 */
	exitLoopBegin?: (ctx: LoopBeginContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.loopEnd`.
	 * @param ctx the parse tree
	 */
	enterLoopEnd?: (ctx: LoopEndContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.loopEnd`.
	 * @param ctx the parse tree
	 */
	exitLoopEnd?: (ctx: LoopEndContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.loopFilter`.
	 * @param ctx the parse tree
	 */
	enterLoopFilter?: (ctx: LoopFilterContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.loopFilter`.
	 * @param ctx the parse tree
	 */
	exitLoopFilter?: (ctx: LoopFilterContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.ifBegin`.
	 * @param ctx the parse tree
	 */
	enterIfBegin?: (ctx: IfBeginContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.ifBegin`.
	 * @param ctx the parse tree
	 */
	exitIfBegin?: (ctx: IfBeginContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.elseCmd`.
	 * @param ctx the parse tree
	 */
	enterElseCmd?: (ctx: ElseCmdContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.elseCmd`.
	 * @param ctx the parse tree
	 */
	exitElseCmd?: (ctx: ElseCmdContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.ifEnd`.
	 * @param ctx the parse tree
	 */
	enterIfEnd?: (ctx: IfEndContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.ifEnd`.
	 * @param ctx the parse tree
	 */
	exitIfEnd?: (ctx: IfEndContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.partialBegin`.
	 * @param ctx the parse tree
	 */
	enterPartialBegin?: (ctx: PartialBeginContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.partialBegin`.
	 * @param ctx the parse tree
	 */
	exitPartialBegin?: (ctx: PartialBeginContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.partialEnd`.
	 * @param ctx the parse tree
	 */
	enterPartialEnd?: (ctx: PartialEndContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.partialEnd`.
	 * @param ctx the parse tree
	 */
	exitPartialEnd?: (ctx: PartialEndContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.partialUse`.
	 * @param ctx the parse tree
	 */
	enterPartialUse?: (ctx: PartialUseContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.partialUse`.
	 * @param ctx the parse tree
	 */
	exitPartialUse?: (ctx: PartialUseContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.identifierName`.
	 * @param ctx the parse tree
	 */
	enterIdentifierName?: (ctx: IdentifierNameContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.identifierName`.
	 * @param ctx the parse tree
	 */
	exitIdentifierName?: (ctx: IdentifierNameContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `TBLKParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `TBLKParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;
}

