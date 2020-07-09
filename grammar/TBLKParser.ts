// Generated from TBLKParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TBLKParserListener } from "./TBLKParserListener";
import { TBLKParserVisitor } from "./TBLKParserVisitor";


export class TBLKParser extends Parser {
	public static readonly COMMENT = 1;
	public static readonly OPEN = 2;
	public static readonly LINE_FEED = 3;
	public static readonly TEXT = 4;
	public static readonly NOT_END = 5;
	public static readonly CLOSE = 6;
	public static readonly LOOP_END = 7;
	public static readonly IF_END = 8;
	public static readonly LET_END = 9;
	public static readonly FUNCTION_END = 10;
	public static readonly HASH = 11;
	public static readonly FILTER = 12;
	public static readonly OpenBracket = 13;
	public static readonly CloseBracket = 14;
	public static readonly OpenParen = 15;
	public static readonly CloseParen = 16;
	public static readonly Comma = 17;
	public static readonly QuestionMark = 18;
	public static readonly Colon = 19;
	public static readonly Dot = 20;
	public static readonly Plus = 21;
	public static readonly Minus = 22;
	public static readonly BitNot = 23;
	public static readonly Not = 24;
	public static readonly Multiply = 25;
	public static readonly Divide = 26;
	public static readonly Modulus = 27;
	public static readonly Coalesce = 28;
	public static readonly Power = 29;
	public static readonly RightShiftArithmetic = 30;
	public static readonly LeftShiftArithmetic = 31;
	public static readonly RightShiftLogical = 32;
	public static readonly LessThan = 33;
	public static readonly MoreThan = 34;
	public static readonly LessThanEquals = 35;
	public static readonly GreaterThanEquals = 36;
	public static readonly Equals_ = 37;
	public static readonly NotEquals = 38;
	public static readonly IdentityEquals = 39;
	public static readonly IdentityNotEquals = 40;
	public static readonly BitAnd = 41;
	public static readonly BitXOr = 42;
	public static readonly BitOr = 43;
	public static readonly And = 44;
	public static readonly Or = 45;
	public static readonly Assignment = 46;
	public static readonly NullLiteral = 47;
	public static readonly BooleanLiteral = 48;
	public static readonly DecimalLiteral = 49;
	public static readonly HexIntegerLiteral = 50;
	public static readonly OctalIntegerLiteral2 = 51;
	public static readonly BinaryIntegerLiteral = 52;
	public static readonly BigHexIntegerLiteral = 53;
	public static readonly BigOctalIntegerLiteral = 54;
	public static readonly BigBinaryIntegerLiteral = 55;
	public static readonly BigDecimalIntegerLiteral = 56;
	public static readonly Break = 57;
	public static readonly Do = 58;
	public static readonly Instanceof = 59;
	public static readonly Typeof = 60;
	public static readonly Case = 61;
	public static readonly Else = 62;
	public static readonly New = 63;
	public static readonly Var = 64;
	public static readonly Catch = 65;
	public static readonly Finally = 66;
	public static readonly Return = 67;
	public static readonly Void = 68;
	public static readonly Continue = 69;
	public static readonly For = 70;
	public static readonly Switch = 71;
	public static readonly While = 72;
	public static readonly Debugger = 73;
	public static readonly Function = 74;
	public static readonly This = 75;
	public static readonly With = 76;
	public static readonly Default = 77;
	public static readonly If = 78;
	public static readonly Throw = 79;
	public static readonly Delete = 80;
	public static readonly In = 81;
	public static readonly Try = 82;
	public static readonly As = 83;
	public static readonly From = 84;
	public static readonly Class = 85;
	public static readonly Enum = 86;
	public static readonly Extends = 87;
	public static readonly Super = 88;
	public static readonly Const = 89;
	public static readonly Export = 90;
	public static readonly Import = 91;
	public static readonly Async = 92;
	public static readonly Await = 93;
	public static readonly Implements = 94;
	public static readonly Let = 95;
	public static readonly Private = 96;
	public static readonly Public = 97;
	public static readonly Interface = 98;
	public static readonly Package = 99;
	public static readonly Protected = 100;
	public static readonly Static = 101;
	public static readonly Yield = 102;
	public static readonly Identifier = 103;
	public static readonly StringLiteral = 104;
	public static readonly WhiteSpaces = 105;
	public static readonly LineTerminator = 106;
	public static readonly RULE_document = 0;
	public static readonly RULE_partial = 1;
	public static readonly RULE_row = 2;
	public static readonly RULE_segment = 3;
	public static readonly RULE_span = 4;
	public static readonly RULE_print = 5;
	public static readonly RULE_loopBegin = 6;
	public static readonly RULE_loopEnd = 7;
	public static readonly RULE_loopFilter = 8;
	public static readonly RULE_ifBegin = 9;
	public static readonly RULE_elseCmd = 10;
	public static readonly RULE_elseIfCmd = 11;
	public static readonly RULE_ifEnd = 12;
	public static readonly RULE_partialBegin = 13;
	public static readonly RULE_partialEnd = 14;
	public static readonly RULE_partialUse = 15;
	public static readonly RULE_assignment = 16;
	public static readonly RULE_arguments = 17;
	public static readonly RULE_argument = 18;
	public static readonly RULE_expressionSequence = 19;
	public static readonly RULE_singleExpression = 20;
	public static readonly RULE_literal = 21;
	public static readonly RULE_numericLiteral = 22;
	public static readonly RULE_identifierName = 23;
	public static readonly RULE_identifier = 24;
	public static readonly RULE_reservedWord = 25;
	public static readonly RULE_keyword = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "partial", "row", "segment", "span", "print", "loopBegin", 
		"loopEnd", "loopFilter", "ifBegin", "elseCmd", "elseIfCmd", "ifEnd", "partialBegin", 
		"partialEnd", "partialUse", "assignment", "arguments", "argument", "expressionSequence", 
		"singleExpression", "literal", "numericLiteral", "identifierName", "identifier", 
		"reservedWord", "keyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'<%'", undefined, undefined, undefined, "'%>'", 
		"'/for'", "'/if'", "'/let'", "'/function'", "'#'", "'|>'", "'['", "']'", 
		"'('", "')'", "','", "'?'", "':'", "'.'", "'+'", "'-'", "'~'", "'!'", 
		"'*'", "'/'", "'%'", "'??'", "'**'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", 
		"'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", "'|'", 
		"'&&'", "'||'", "'='", "'null'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'break'", "'do'", 
		"'instanceof'", "'typeof'", "'case'", "'else'", "'new'", "'var'", "'catch'", 
		"'finally'", "'return'", "'void'", "'continue'", "'for'", "'switch'", 
		"'while'", "'debugger'", "'function'", "'this'", "'with'", "'default'", 
		"'if'", "'throw'", "'delete'", "'in'", "'try'", "'as'", "'from'", "'class'", 
		"'enum'", "'extends'", "'super'", "'const'", "'export'", "'import'", "'async'", 
		"'await'", "'implements'", "'let'", "'private'", "'public'", "'interface'", 
		"'package'", "'protected'", "'static'", "'yield'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENT", "OPEN", "LINE_FEED", "TEXT", "NOT_END", "CLOSE", 
		"LOOP_END", "IF_END", "LET_END", "FUNCTION_END", "HASH", "FILTER", "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "Comma", "QuestionMark", "Colon", 
		"Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", "Modulus", 
		"Coalesce", "Power", "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", 
		"LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals_", 
		"NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", "BitXOr", 
		"BitOr", "And", "Or", "Assignment", "NullLiteral", "BooleanLiteral", "DecimalLiteral", 
		"HexIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", "BigHexIntegerLiteral", 
		"BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", "BigDecimalIntegerLiteral", 
		"Break", "Do", "Instanceof", "Typeof", "Case", "Else", "New", "Var", "Catch", 
		"Finally", "Return", "Void", "Continue", "For", "Switch", "While", "Debugger", 
		"Function", "This", "With", "Default", "If", "Throw", "Delete", "In", 
		"Try", "As", "From", "Class", "Enum", "Extends", "Super", "Const", "Export", 
		"Import", "Async", "Await", "Implements", "Let", "Private", "Public", 
		"Interface", "Package", "Protected", "Static", "Yield", "Identifier", 
		"StringLiteral", "WhiteSpaces", "LineTerminator",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TBLKParser._LITERAL_NAMES, TBLKParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TBLKParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TBLKParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return TBLKParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TBLKParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TBLKParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TBLKParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 54;
				this.row();
				}
				break;

			case 2:
				{
				this.state = 55;
				this.partial();
				}
				break;
			}
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TBLKParser.LINE_FEED) {
				{
				{
				this.state = 58;
				this.match(TBLKParser.LINE_FEED);
				this.state = 61;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 59;
					this.row();
					}
					break;

				case 2:
					{
					this.state = 60;
					this.partial();
					}
					break;
				}
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partial(): PartialContext {
		let _localctx: PartialContext = new PartialContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TBLKParser.RULE_partial);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.partialBegin();
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 69;
				this.match(TBLKParser.LINE_FEED);
				}
				break;
			}
			this.state = 77;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 72;
					this.row();
					this.state = 73;
					this.match(TBLKParser.LINE_FEED);
					}
					}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 80;
				this.row();
				}
				break;
			}
			this.state = 83;
			this.partialEnd();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public row(): RowContext {
		let _localctx: RowContext = new RowContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TBLKParser.RULE_row);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 85;
					this.segment();
					}
					}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TBLKParser.RULE_segment);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.span();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.print();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 93;
				this.loopBegin();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 94;
				this.loopEnd();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 95;
				this.ifBegin();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 96;
				this.elseCmd();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 97;
				this.elseIfCmd();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 98;
				this.ifEnd();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 99;
				this.partialUse();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public span(): SpanContext {
		let _localctx: SpanContext = new SpanContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TBLKParser.RULE_span);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(TBLKParser.TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public print(): PrintContext {
		let _localctx: PrintContext = new PrintContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TBLKParser.RULE_print);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(TBLKParser.OPEN);
			this.state = 105;
			this.expressionSequence();
			this.state = 106;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopBegin(): LoopBeginContext {
		let _localctx: LoopBeginContext = new LoopBeginContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TBLKParser.RULE_loopBegin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(TBLKParser.OPEN);
			this.state = 109;
			this.match(TBLKParser.For);
			this.state = 110;
			this.identifier();
			this.state = 111;
			this.match(TBLKParser.In);
			this.state = 112;
			this.expressionSequence();
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TBLKParser.FILTER) {
				{
				{
				this.state = 113;
				this.loopFilter();
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 119;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopEnd(): LoopEndContext {
		let _localctx: LoopEndContext = new LoopEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TBLKParser.RULE_loopEnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(TBLKParser.OPEN);
			this.state = 122;
			this.match(TBLKParser.LOOP_END);
			this.state = 123;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopFilter(): LoopFilterContext {
		let _localctx: LoopFilterContext = new LoopFilterContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TBLKParser.RULE_loopFilter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(TBLKParser.FILTER);
			this.state = 126;
			this.expressionSequence();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifBegin(): IfBeginContext {
		let _localctx: IfBeginContext = new IfBeginContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TBLKParser.RULE_ifBegin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(TBLKParser.OPEN);
			this.state = 129;
			this.match(TBLKParser.If);
			this.state = 130;
			this.expressionSequence();
			this.state = 131;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseCmd(): ElseCmdContext {
		let _localctx: ElseCmdContext = new ElseCmdContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TBLKParser.RULE_elseCmd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(TBLKParser.OPEN);
			this.state = 134;
			this.match(TBLKParser.Else);
			this.state = 135;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseIfCmd(): ElseIfCmdContext {
		let _localctx: ElseIfCmdContext = new ElseIfCmdContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TBLKParser.RULE_elseIfCmd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(TBLKParser.OPEN);
			this.state = 138;
			this.match(TBLKParser.Else);
			this.state = 139;
			this.match(TBLKParser.If);
			this.state = 140;
			this.expressionSequence();
			this.state = 141;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifEnd(): IfEndContext {
		let _localctx: IfEndContext = new IfEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TBLKParser.RULE_ifEnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(TBLKParser.OPEN);
			this.state = 144;
			this.match(TBLKParser.IF_END);
			this.state = 145;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partialBegin(): PartialBeginContext {
		let _localctx: PartialBeginContext = new PartialBeginContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TBLKParser.RULE_partialBegin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(TBLKParser.OPEN);
			this.state = 148;
			this.match(TBLKParser.Function);
			this.state = 149;
			this.identifier();
			this.state = 150;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partialEnd(): PartialEndContext {
		let _localctx: PartialEndContext = new PartialEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TBLKParser.RULE_partialEnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(TBLKParser.OPEN);
			this.state = 153;
			this.match(TBLKParser.FUNCTION_END);
			this.state = 154;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partialUse(): PartialUseContext {
		let _localctx: PartialUseContext = new PartialUseContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TBLKParser.RULE_partialUse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(TBLKParser.OPEN);
			this.state = 157;
			this.match(TBLKParser.HASH);
			this.state = 158;
			this.identifier();
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (TBLKParser.Async - 92)) | (1 << (TBLKParser.Let - 92)) | (1 << (TBLKParser.Identifier - 92)))) !== 0)) {
				{
				{
				this.state = 159;
				this.assignment();
				}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 165;
			this.match(TBLKParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TBLKParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.identifier();
			this.state = 168;
			this.match(TBLKParser.Assignment);
			this.state = 169;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TBLKParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(TBLKParser.OpenParen);
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TBLKParser.OpenParen) | (1 << TBLKParser.Plus) | (1 << TBLKParser.Minus) | (1 << TBLKParser.BitNot) | (1 << TBLKParser.Not))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (TBLKParser.NullLiteral - 47)) | (1 << (TBLKParser.BooleanLiteral - 47)) | (1 << (TBLKParser.DecimalLiteral - 47)) | (1 << (TBLKParser.HexIntegerLiteral - 47)) | (1 << (TBLKParser.OctalIntegerLiteral2 - 47)) | (1 << (TBLKParser.BinaryIntegerLiteral - 47)) | (1 << (TBLKParser.Typeof - 47)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (TBLKParser.Async - 92)) | (1 << (TBLKParser.Let - 92)) | (1 << (TBLKParser.Identifier - 92)) | (1 << (TBLKParser.StringLiteral - 92)))) !== 0)) {
				{
				this.state = 172;
				this.argument();
				this.state = 177;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 173;
						this.match(TBLKParser.Comma);
						this.state = 174;
						this.argument();
						}
						}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TBLKParser.Comma) {
					{
					this.state = 180;
					this.match(TBLKParser.Comma);
					}
				}

				}
			}

			this.state = 185;
			this.match(TBLKParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TBLKParser.RULE_argument);
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.singleExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TBLKParser.RULE_expressionSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.singleExpression(0);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TBLKParser.Comma) {
				{
				{
				this.state = 192;
				this.match(TBLKParser.Comma);
				this.state = 193;
				this.singleExpression(0);
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, TBLKParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TBLKParser.Typeof:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 200;
				this.match(TBLKParser.Typeof);
				this.state = 201;
				this.singleExpression(23);
				}
				break;
			case TBLKParser.Plus:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 202;
				this.match(TBLKParser.Plus);
				this.state = 203;
				this.singleExpression(22);
				}
				break;
			case TBLKParser.Minus:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 204;
				this.match(TBLKParser.Minus);
				this.state = 205;
				this.singleExpression(21);
				}
				break;
			case TBLKParser.BitNot:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 206;
				this.match(TBLKParser.BitNot);
				this.state = 207;
				this.singleExpression(20);
				}
				break;
			case TBLKParser.Not:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 208;
				this.match(TBLKParser.Not);
				this.state = 209;
				this.singleExpression(19);
				}
				break;
			case TBLKParser.Async:
			case TBLKParser.Let:
			case TBLKParser.Identifier:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 210;
				this.identifier();
				}
				break;
			case TBLKParser.NullLiteral:
			case TBLKParser.BooleanLiteral:
			case TBLKParser.DecimalLiteral:
			case TBLKParser.HexIntegerLiteral:
			case TBLKParser.OctalIntegerLiteral2:
			case TBLKParser.BinaryIntegerLiteral:
			case TBLKParser.StringLiteral:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 211;
				this.literal();
				}
				break;
			case TBLKParser.OpenParen:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 212;
				this.match(TBLKParser.OpenParen);
				this.state = 213;
				this.expressionSequence();
				this.state = 214;
				this.match(TBLKParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 278;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 276;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 218;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 219;
						this.match(TBLKParser.Power);
						this.state = 220;
						this.singleExpression(18);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 221;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 222;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TBLKParser.Multiply) | (1 << TBLKParser.Divide) | (1 << TBLKParser.Modulus))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 223;
						this.singleExpression(18);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 224;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 225;
						_la = this._input.LA(1);
						if (!(_la === TBLKParser.Plus || _la === TBLKParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 226;
						this.singleExpression(17);
						}
						break;

					case 4:
						{
						_localctx = new CoalesceExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 227;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 228;
						this.match(TBLKParser.Coalesce);
						this.state = 229;
						this.singleExpression(16);
						}
						break;

					case 5:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 230;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 231;
						_la = this._input.LA(1);
						if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (TBLKParser.RightShiftArithmetic - 30)) | (1 << (TBLKParser.LeftShiftArithmetic - 30)) | (1 << (TBLKParser.RightShiftLogical - 30)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 232;
						this.singleExpression(15);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 233;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 234;
						_la = this._input.LA(1);
						if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TBLKParser.LessThan - 33)) | (1 << (TBLKParser.MoreThan - 33)) | (1 << (TBLKParser.LessThanEquals - 33)) | (1 << (TBLKParser.GreaterThanEquals - 33)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 235;
						this.singleExpression(14);
						}
						break;

					case 7:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 236;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 237;
						this.match(TBLKParser.Instanceof);
						this.state = 238;
						this.singleExpression(13);
						}
						break;

					case 8:
						{
						_localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 239;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 240;
						this.match(TBLKParser.In);
						this.state = 241;
						this.singleExpression(12);
						}
						break;

					case 9:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 242;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 243;
						_la = this._input.LA(1);
						if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (TBLKParser.Equals_ - 37)) | (1 << (TBLKParser.NotEquals - 37)) | (1 << (TBLKParser.IdentityEquals - 37)) | (1 << (TBLKParser.IdentityNotEquals - 37)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 244;
						this.singleExpression(11);
						}
						break;

					case 10:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 245;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 246;
						this.match(TBLKParser.BitAnd);
						this.state = 247;
						this.singleExpression(10);
						}
						break;

					case 11:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 248;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 249;
						this.match(TBLKParser.BitXOr);
						this.state = 250;
						this.singleExpression(9);
						}
						break;

					case 12:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 251;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 252;
						this.match(TBLKParser.BitOr);
						this.state = 253;
						this.singleExpression(8);
						}
						break;

					case 13:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 254;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 255;
						this.match(TBLKParser.And);
						this.state = 256;
						this.singleExpression(7);
						}
						break;

					case 14:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 257;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 258;
						this.match(TBLKParser.Or);
						this.state = 259;
						this.singleExpression(6);
						}
						break;

					case 15:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 260;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 261;
						this.match(TBLKParser.QuestionMark);
						this.state = 262;
						this.singleExpression(0);
						this.state = 263;
						this.match(TBLKParser.Colon);
						this.state = 264;
						this.singleExpression(5);
						}
						break;

					case 16:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 266;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 267;
						this.match(TBLKParser.OpenBracket);
						this.state = 268;
						this.expressionSequence();
						this.state = 269;
						this.match(TBLKParser.CloseBracket);
						}
						break;

					case 17:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 271;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 272;
						this.match(TBLKParser.Dot);
						this.state = 273;
						this.identifierName();
						}
						break;

					case 18:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TBLKParser.RULE_singleExpression);
						this.state = 274;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 275;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TBLKParser.RULE_literal);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TBLKParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 281;
				this.match(TBLKParser.NullLiteral);
				}
				break;
			case TBLKParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this.match(TBLKParser.BooleanLiteral);
				}
				break;
			case TBLKParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 283;
				this.match(TBLKParser.StringLiteral);
				}
				break;
			case TBLKParser.DecimalLiteral:
			case TBLKParser.HexIntegerLiteral:
			case TBLKParser.OctalIntegerLiteral2:
			case TBLKParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 284;
				this.numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TBLKParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			_la = this._input.LA(1);
			if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (TBLKParser.DecimalLiteral - 49)) | (1 << (TBLKParser.HexIntegerLiteral - 49)) | (1 << (TBLKParser.OctalIntegerLiteral2 - 49)) | (1 << (TBLKParser.BinaryIntegerLiteral - 49)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TBLKParser.RULE_identifierName);
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 289;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 290;
				this.reservedWord();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TBLKParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			_la = this._input.LA(1);
			if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (TBLKParser.Async - 92)) | (1 << (TBLKParser.Let - 92)) | (1 << (TBLKParser.Identifier - 92)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TBLKParser.RULE_reservedWord);
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TBLKParser.Break:
			case TBLKParser.Do:
			case TBLKParser.Instanceof:
			case TBLKParser.Typeof:
			case TBLKParser.Case:
			case TBLKParser.Else:
			case TBLKParser.New:
			case TBLKParser.Var:
			case TBLKParser.Catch:
			case TBLKParser.Finally:
			case TBLKParser.Return:
			case TBLKParser.Void:
			case TBLKParser.Continue:
			case TBLKParser.For:
			case TBLKParser.Switch:
			case TBLKParser.While:
			case TBLKParser.Debugger:
			case TBLKParser.Function:
			case TBLKParser.This:
			case TBLKParser.With:
			case TBLKParser.Default:
			case TBLKParser.If:
			case TBLKParser.Throw:
			case TBLKParser.Delete:
			case TBLKParser.In:
			case TBLKParser.Try:
			case TBLKParser.As:
			case TBLKParser.From:
			case TBLKParser.Class:
			case TBLKParser.Enum:
			case TBLKParser.Extends:
			case TBLKParser.Super:
			case TBLKParser.Const:
			case TBLKParser.Export:
			case TBLKParser.Import:
			case TBLKParser.Async:
			case TBLKParser.Await:
			case TBLKParser.Implements:
			case TBLKParser.Let:
			case TBLKParser.Private:
			case TBLKParser.Public:
			case TBLKParser.Interface:
			case TBLKParser.Package:
			case TBLKParser.Protected:
			case TBLKParser.Static:
			case TBLKParser.Yield:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 295;
				this.keyword();
				}
				break;
			case TBLKParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 296;
				this.match(TBLKParser.NullLiteral);
				}
				break;
			case TBLKParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 297;
				this.match(TBLKParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TBLKParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (TBLKParser.Break - 57)) | (1 << (TBLKParser.Do - 57)) | (1 << (TBLKParser.Instanceof - 57)) | (1 << (TBLKParser.Typeof - 57)) | (1 << (TBLKParser.Case - 57)) | (1 << (TBLKParser.Else - 57)) | (1 << (TBLKParser.New - 57)) | (1 << (TBLKParser.Var - 57)) | (1 << (TBLKParser.Catch - 57)) | (1 << (TBLKParser.Finally - 57)) | (1 << (TBLKParser.Return - 57)) | (1 << (TBLKParser.Void - 57)) | (1 << (TBLKParser.Continue - 57)) | (1 << (TBLKParser.For - 57)) | (1 << (TBLKParser.Switch - 57)) | (1 << (TBLKParser.While - 57)) | (1 << (TBLKParser.Debugger - 57)) | (1 << (TBLKParser.Function - 57)) | (1 << (TBLKParser.This - 57)) | (1 << (TBLKParser.With - 57)) | (1 << (TBLKParser.Default - 57)) | (1 << (TBLKParser.If - 57)) | (1 << (TBLKParser.Throw - 57)) | (1 << (TBLKParser.Delete - 57)) | (1 << (TBLKParser.In - 57)) | (1 << (TBLKParser.Try - 57)) | (1 << (TBLKParser.As - 57)) | (1 << (TBLKParser.From - 57)) | (1 << (TBLKParser.Class - 57)) | (1 << (TBLKParser.Enum - 57)) | (1 << (TBLKParser.Extends - 57)) | (1 << (TBLKParser.Super - 57)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (TBLKParser.Const - 89)) | (1 << (TBLKParser.Export - 89)) | (1 << (TBLKParser.Import - 89)) | (1 << (TBLKParser.Async - 89)) | (1 << (TBLKParser.Await - 89)) | (1 << (TBLKParser.Implements - 89)) | (1 << (TBLKParser.Let - 89)) | (1 << (TBLKParser.Private - 89)) | (1 << (TBLKParser.Public - 89)) | (1 << (TBLKParser.Interface - 89)) | (1 << (TBLKParser.Package - 89)) | (1 << (TBLKParser.Protected - 89)) | (1 << (TBLKParser.Static - 89)) | (1 << (TBLKParser.Yield - 89)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 20:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 18);

		case 1:
			return this.precpred(this._ctx, 17);

		case 2:
			return this.precpred(this._ctx, 16);

		case 3:
			return this.precpred(this._ctx, 15);

		case 4:
			return this.precpred(this._ctx, 14);

		case 5:
			return this.precpred(this._ctx, 13);

		case 6:
			return this.precpred(this._ctx, 12);

		case 7:
			return this.precpred(this._ctx, 11);

		case 8:
			return this.precpred(this._ctx, 10);

		case 9:
			return this.precpred(this._ctx, 9);

		case 10:
			return this.precpred(this._ctx, 8);

		case 11:
			return this.precpred(this._ctx, 7);

		case 12:
			return this.precpred(this._ctx, 6);

		case 13:
			return this.precpred(this._ctx, 5);

		case 14:
			return this.precpred(this._ctx, 4);

		case 15:
			return this.precpred(this._ctx, 26);

		case 16:
			return this.precpred(this._ctx, 25);

		case 17:
			return this.precpred(this._ctx, 24);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03l\u0131\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x03\x02\x05\x02;\n\x02\x03\x02\x03\x02\x03\x02\x05\x02@\n\x02\x07" +
		"\x02B\n\x02\f\x02\x0E\x02E\v\x02\x03\x03\x03\x03\x05\x03I\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x07\x03N\n\x03\f\x03\x0E\x03Q\v\x03\x03\x03\x05\x03T" +
		"\n\x03\x03\x03\x03\x03\x03\x04\x07\x04Y\n\x04\f\x04\x0E\x04\\\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05g\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x07\bu\n\b\f\b\x0E\bx\v\b\x03\b\x03\b\x03\t" +
		"\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xA3\n\x11\f\x11" +
		"\x0E\x11\xA6\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x07\x13\xB2\n\x13\f\x13\x0E\x13\xB5\v\x13" +
		"\x03\x13\x05\x13\xB8\n\x13\x05\x13\xBA\n\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x05\x14\xC0\n\x14\x03\x15\x03\x15\x03\x15\x07\x15\xC5\n\x15\f\x15" +
		"\x0E\x15\xC8\v\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\xDB\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16" +
		"\u0117\n\x16\f\x16\x0E\x16\u011A\v\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x05\x17\u0120\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0126\n\x19" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u012D\n\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x02\x02\x03*\x1D\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02\x02\n\x03" +
		"\x02\x1B\x1D\x03\x02\x17\x18\x03\x02 \"\x03\x02#&\x03\x02\'*\x03\x023" +
		"6\x05\x02^^aaii\x03\x02;h\x02\u014B\x02:\x03\x02\x02\x02\x04F\x03\x02" +
		"\x02\x02\x06Z\x03\x02\x02\x02\bf\x03\x02\x02\x02\nh\x03\x02\x02\x02\f" +
		"j\x03\x02\x02\x02\x0En\x03\x02\x02\x02\x10{\x03\x02\x02\x02\x12\x7F\x03" +
		"\x02\x02\x02\x14\x82\x03\x02\x02\x02\x16\x87\x03\x02\x02\x02\x18\x8B\x03" +
		"\x02\x02\x02\x1A\x91\x03\x02\x02\x02\x1C\x95\x03\x02\x02\x02\x1E\x9A\x03" +
		"\x02\x02\x02 \x9E\x03\x02\x02\x02\"\xA9\x03\x02\x02\x02$\xAD\x03\x02\x02" +
		"\x02&\xBF\x03\x02\x02\x02(\xC1\x03\x02\x02\x02*\xDA\x03\x02\x02\x02,\u011F" +
		"\x03\x02\x02\x02.\u0121\x03\x02\x02\x020\u0125\x03\x02\x02\x022\u0127" +
		"\x03\x02\x02\x024\u012C\x03\x02\x02\x026\u012E\x03\x02\x02\x028;\x05\x06" +
		"\x04\x029;\x05\x04\x03\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02:;\x03\x02" +
		"\x02\x02;C\x03\x02\x02\x02<?\x07\x05\x02\x02=@\x05\x06\x04\x02>@\x05\x04" +
		"\x03\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@B\x03\x02\x02\x02A<\x03\x02" +
		"\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\x03\x03" +
		"\x02\x02\x02EC\x03\x02\x02\x02FH\x05\x1C\x0F\x02GI\x07\x05\x02\x02HG\x03" +
		"\x02\x02\x02HI\x03\x02\x02\x02IO\x03\x02\x02\x02JK\x05\x06\x04\x02KL\x07" +
		"\x05\x02\x02LN\x03\x02\x02\x02MJ\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03" +
		"\x02\x02\x02OP\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02RT\x05" +
		"\x06\x04\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x05" +
		"\x1E\x10\x02V\x05\x03\x02\x02\x02WY\x05\b\x05\x02XW\x03\x02\x02\x02Y\\" +
		"\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\x07\x03\x02\x02" +
		"\x02\\Z\x03\x02\x02\x02]g\x05\n\x06\x02^g\x05\f\x07\x02_g\x05\x0E\b\x02" +
		"`g\x05\x10\t\x02ag\x05\x14\v\x02bg\x05\x16\f\x02cg\x05\x18\r\x02dg\x05" +
		"\x1A\x0E\x02eg\x05 \x11\x02f]\x03\x02\x02\x02f^\x03\x02\x02\x02f_\x03" +
		"\x02\x02\x02f`\x03\x02\x02\x02fa\x03\x02\x02\x02fb\x03\x02\x02\x02fc\x03" +
		"\x02\x02\x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02g\t\x03\x02\x02\x02hi" +
		"\x07\x06\x02\x02i\v\x03\x02\x02\x02jk\x07\x04\x02\x02kl\x05(\x15\x02l" +
		"m\x07\b\x02\x02m\r\x03\x02\x02\x02no\x07\x04\x02\x02op\x07H\x02\x02pq" +
		"\x052\x1A\x02qr\x07S\x02\x02rv\x05(\x15\x02su\x05\x12\n\x02ts\x03\x02" +
		"\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03\x02" +
		"\x02\x02xv\x03\x02\x02\x02yz\x07\b\x02\x02z\x0F\x03\x02\x02\x02{|\x07" +
		"\x04\x02\x02|}\x07\t\x02\x02}~\x07\b\x02\x02~\x11\x03\x02\x02\x02\x7F" +
		"\x80\x07\x0E\x02\x02\x80\x81\x05(\x15\x02\x81\x13\x03\x02\x02\x02\x82" +
		"\x83\x07\x04\x02\x02\x83\x84\x07P\x02\x02\x84\x85\x05(\x15\x02\x85\x86" +
		"\x07\b\x02\x02\x86\x15\x03\x02\x02\x02\x87\x88\x07\x04\x02\x02\x88\x89" +
		"\x07@\x02\x02\x89\x8A\x07\b\x02\x02\x8A\x17\x03\x02\x02\x02\x8B\x8C\x07" +
		"\x04\x02\x02\x8C\x8D\x07@\x02\x02\x8D\x8E\x07P\x02\x02\x8E\x8F\x05(\x15" +
		"\x02\x8F\x90\x07\b\x02\x02\x90\x19\x03\x02\x02\x02\x91\x92\x07\x04\x02" +
		"\x02\x92\x93\x07\n\x02\x02\x93\x94\x07\b\x02\x02\x94\x1B\x03\x02\x02\x02" +
		"\x95\x96\x07\x04\x02\x02\x96\x97\x07L\x02\x02\x97\x98\x052\x1A\x02\x98" +
		"\x99\x07\b\x02\x02\x99\x1D\x03\x02\x02\x02\x9A\x9B\x07\x04\x02\x02\x9B" +
		"\x9C\x07\f\x02\x02\x9C\x9D\x07\b\x02\x02\x9D\x1F\x03\x02\x02\x02\x9E\x9F" +
		"\x07\x04\x02\x02\x9F\xA0\x07\r\x02\x02\xA0\xA4\x052\x1A\x02\xA1\xA3\x05" +
		"\"\x12\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03" +
		"\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03" +
		"\x02\x02\x02\xA7\xA8\x07\b\x02\x02\xA8!\x03\x02\x02\x02\xA9\xAA\x052\x1A" +
		"\x02\xAA\xAB\x070\x02\x02\xAB\xAC\x05*\x16\x02\xAC#\x03\x02\x02\x02\xAD" +
		"\xB9\x07\x11\x02\x02\xAE\xB3\x05&\x14\x02\xAF\xB0\x07\x13\x02\x02\xB0" +
		"\xB2\x05&\x14\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02\xB3" +
		"\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5" +
		"\xB3\x03\x02\x02\x02\xB6\xB8\x07\x13\x02\x02\xB7\xB6\x03\x02\x02\x02\xB7" +
		"\xB8\x03\x02\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9\xAE\x03\x02\x02\x02\xB9" +
		"\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x07\x12\x02\x02\xBC" +
		"%\x03\x02\x02\x02\xBD\xC0\x05*\x16\x02\xBE\xC0\x052\x1A\x02\xBF\xBD\x03" +
		"\x02\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0\'\x03\x02\x02\x02\xC1\xC6\x05" +
		"*\x16\x02\xC2\xC3\x07\x13\x02\x02\xC3\xC5\x05*\x16\x02\xC4\xC2\x03\x02" +
		"\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02" +
		"\x02\x02\xC7)\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\b\x16\x01" +
		"\x02\xCA\xCB\x07>\x02\x02\xCB\xDB\x05*\x16\x19\xCC\xCD\x07\x17\x02\x02" +
		"\xCD\xDB\x05*\x16\x18\xCE\xCF\x07\x18\x02\x02\xCF\xDB\x05*\x16\x17\xD0" +
		"\xD1\x07\x19\x02\x02\xD1\xDB\x05*\x16\x16\xD2\xD3\x07\x1A\x02\x02\xD3" +
		"\xDB\x05*\x16\x15\xD4\xDB\x052\x1A\x02\xD5\xDB\x05,\x17\x02\xD6\xD7\x07" +
		"\x11\x02\x02\xD7\xD8\x05(\x15\x02\xD8\xD9\x07\x12\x02\x02\xD9\xDB\x03" +
		"\x02\x02\x02\xDA\xC9\x03\x02\x02\x02\xDA\xCC\x03\x02\x02\x02\xDA\xCE\x03" +
		"\x02\x02\x02\xDA\xD0\x03\x02\x02\x02\xDA\xD2\x03\x02\x02\x02\xDA\xD4\x03" +
		"\x02\x02\x02\xDA\xD5\x03\x02\x02\x02\xDA\xD6\x03\x02\x02\x02\xDB\u0118" +
		"\x03\x02\x02\x02\xDC\xDD\f\x14\x02\x02\xDD\xDE\x07\x1F\x02\x02\xDE\u0117" +
		"\x05*\x16\x14\xDF\xE0\f\x13\x02\x02\xE0\xE1\t\x02\x02\x02\xE1\u0117\x05" +
		"*\x16\x14\xE2\xE3\f\x12\x02\x02\xE3\xE4\t\x03\x02\x02\xE4\u0117\x05*\x16" +
		"\x13\xE5\xE6\f\x11\x02\x02\xE6\xE7\x07\x1E\x02\x02\xE7\u0117\x05*\x16" +
		"\x12\xE8\xE9\f\x10\x02\x02\xE9\xEA\t\x04\x02\x02\xEA\u0117\x05*\x16\x11" +
		"\xEB\xEC\f\x0F\x02\x02\xEC\xED\t\x05\x02\x02\xED\u0117\x05*\x16\x10\xEE" +
		"\xEF\f\x0E\x02\x02\xEF\xF0\x07=\x02\x02\xF0\u0117\x05*\x16\x0F\xF1\xF2" +
		"\f\r\x02\x02\xF2\xF3\x07S\x02\x02\xF3\u0117\x05*\x16\x0E\xF4\xF5\f\f\x02" +
		"\x02\xF5\xF6\t\x06\x02\x02\xF6\u0117\x05*\x16\r\xF7\xF8\f\v\x02\x02\xF8" +
		"\xF9\x07+\x02\x02\xF9\u0117\x05*\x16\f\xFA\xFB\f\n\x02\x02\xFB\xFC\x07" +
		",\x02\x02\xFC\u0117\x05*\x16\v\xFD\xFE\f\t\x02\x02\xFE\xFF\x07-\x02\x02" +
		"\xFF\u0117\x05*\x16\n\u0100\u0101\f\b\x02\x02\u0101\u0102\x07.\x02\x02" +
		"\u0102\u0117\x05*\x16\t\u0103\u0104\f\x07\x02\x02\u0104\u0105\x07/\x02" +
		"\x02\u0105\u0117\x05*\x16\b\u0106\u0107\f\x06\x02\x02\u0107\u0108\x07" +
		"\x14\x02\x02\u0108\u0109\x05*\x16\x02\u0109\u010A\x07\x15\x02\x02\u010A" +
		"\u010B\x05*\x16\x07\u010B\u0117\x03\x02\x02\x02\u010C\u010D\f\x1C\x02" +
		"\x02\u010D\u010E\x07\x0F\x02\x02\u010E\u010F\x05(\x15\x02\u010F\u0110" +
		"\x07\x10\x02\x02\u0110\u0117\x03\x02\x02\x02\u0111\u0112\f\x1B\x02\x02" +
		"\u0112\u0113\x07\x16\x02\x02\u0113\u0117\x050\x19\x02\u0114\u0115\f\x1A" +
		"\x02\x02\u0115\u0117\x05$\x13\x02\u0116\xDC\x03\x02\x02\x02\u0116\xDF" +
		"\x03\x02\x02\x02\u0116\xE2\x03\x02\x02\x02\u0116\xE5\x03\x02\x02\x02\u0116" +
		"\xE8\x03\x02\x02\x02\u0116\xEB\x03\x02\x02\x02\u0116\xEE\x03\x02\x02\x02" +
		"\u0116\xF1\x03\x02\x02\x02\u0116\xF4\x03\x02\x02\x02\u0116\xF7\x03\x02" +
		"\x02\x02\u0116\xFA\x03\x02\x02\x02\u0116\xFD\x03\x02\x02\x02\u0116\u0100" +
		"\x03\x02\x02\x02\u0116\u0103\x03\x02\x02\x02\u0116\u0106\x03\x02\x02\x02" +
		"\u0116\u010C\x03\x02\x02\x02\u0116\u0111\x03\x02\x02\x02\u0116\u0114\x03" +
		"\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118" +
		"\u0119\x03\x02\x02\x02\u0119+\x03\x02\x02\x02\u011A\u0118\x03\x02\x02" +
		"\x02\u011B\u0120\x071\x02\x02\u011C\u0120\x072\x02\x02\u011D\u0120\x07" +
		"j\x02\x02\u011E\u0120\x05.\x18\x02\u011F\u011B\x03\x02\x02\x02\u011F\u011C" +
		"\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02" +
		"\u0120-\x03\x02\x02\x02\u0121\u0122\t\x07\x02\x02\u0122/\x03\x02\x02\x02" +
		"\u0123\u0126\x052\x1A\x02\u0124\u0126\x054\x1B\x02\u0125\u0123\x03\x02" +
		"\x02\x02\u0125\u0124\x03\x02\x02\x02\u01261\x03\x02\x02\x02\u0127\u0128" +
		"\t\b\x02\x02\u01283\x03\x02\x02\x02\u0129\u012D\x056\x1C\x02\u012A\u012D" +
		"\x071\x02\x02\u012B\u012D\x072\x02\x02\u012C\u0129\x03\x02\x02\x02\u012C" +
		"\u012A\x03\x02\x02\x02\u012C\u012B\x03\x02\x02\x02\u012D5\x03\x02\x02" +
		"\x02\u012E\u012F\t\t\x02\x02\u012F7\x03\x02\x02\x02\x17:?CHOSZfv\xA4\xB3" +
		"\xB7\xB9\xBF\xC6\xDA\u0116\u0118\u011F\u0125\u012C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TBLKParser.__ATN) {
			TBLKParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TBLKParser._serializedATN));
		}

		return TBLKParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public row(): RowContext[];
	public row(i: number): RowContext;
	public row(i?: number): RowContext | RowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowContext);
		} else {
			return this.getRuleContext(i, RowContext);
		}
	}
	public partial(): PartialContext[];
	public partial(i: number): PartialContext;
	public partial(i?: number): PartialContext | PartialContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartialContext);
		} else {
			return this.getRuleContext(i, PartialContext);
		}
	}
	public LINE_FEED(): TerminalNode[];
	public LINE_FEED(i: number): TerminalNode;
	public LINE_FEED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TBLKParser.LINE_FEED);
		} else {
			return this.getToken(TBLKParser.LINE_FEED, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_document; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartialContext extends ParserRuleContext {
	public partialBegin(): PartialBeginContext {
		return this.getRuleContext(0, PartialBeginContext);
	}
	public partialEnd(): PartialEndContext {
		return this.getRuleContext(0, PartialEndContext);
	}
	public LINE_FEED(): TerminalNode[];
	public LINE_FEED(i: number): TerminalNode;
	public LINE_FEED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TBLKParser.LINE_FEED);
		} else {
			return this.getToken(TBLKParser.LINE_FEED, i);
		}
	}
	public row(): RowContext[];
	public row(i: number): RowContext;
	public row(i?: number): RowContext | RowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowContext);
		} else {
			return this.getRuleContext(i, RowContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_partial; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterPartial) {
			listener.enterPartial(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitPartial) {
			listener.exitPartial(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitPartial) {
			return visitor.visitPartial(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowContext extends ParserRuleContext {
	public segment(): SegmentContext[];
	public segment(i: number): SegmentContext;
	public segment(i?: number): SegmentContext | SegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentContext);
		} else {
			return this.getRuleContext(i, SegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_row; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterRow) {
			listener.enterRow(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitRow) {
			listener.exitRow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitRow) {
			return visitor.visitRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public span(): SpanContext | undefined {
		return this.tryGetRuleContext(0, SpanContext);
	}
	public print(): PrintContext | undefined {
		return this.tryGetRuleContext(0, PrintContext);
	}
	public loopBegin(): LoopBeginContext | undefined {
		return this.tryGetRuleContext(0, LoopBeginContext);
	}
	public loopEnd(): LoopEndContext | undefined {
		return this.tryGetRuleContext(0, LoopEndContext);
	}
	public ifBegin(): IfBeginContext | undefined {
		return this.tryGetRuleContext(0, IfBeginContext);
	}
	public elseCmd(): ElseCmdContext | undefined {
		return this.tryGetRuleContext(0, ElseCmdContext);
	}
	public elseIfCmd(): ElseIfCmdContext | undefined {
		return this.tryGetRuleContext(0, ElseIfCmdContext);
	}
	public ifEnd(): IfEndContext | undefined {
		return this.tryGetRuleContext(0, IfEndContext);
	}
	public partialUse(): PartialUseContext | undefined {
		return this.tryGetRuleContext(0, PartialUseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_segment; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitSegment) {
			return visitor.visitSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpanContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(TBLKParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_span; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterSpan) {
			listener.enterSpan(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitSpan) {
			listener.exitSpan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitSpan) {
			return visitor.visitSpan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_print; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterPrint) {
			listener.enterPrint(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitPrint) {
			listener.exitPrint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitPrint) {
			return visitor.visitPrint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopBeginContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public For(): TerminalNode { return this.getToken(TBLKParser.For, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public In(): TerminalNode { return this.getToken(TBLKParser.In, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	public loopFilter(): LoopFilterContext[];
	public loopFilter(i: number): LoopFilterContext;
	public loopFilter(i?: number): LoopFilterContext | LoopFilterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LoopFilterContext);
		} else {
			return this.getRuleContext(i, LoopFilterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_loopBegin; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterLoopBegin) {
			listener.enterLoopBegin(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitLoopBegin) {
			listener.exitLoopBegin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitLoopBegin) {
			return visitor.visitLoopBegin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopEndContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public LOOP_END(): TerminalNode { return this.getToken(TBLKParser.LOOP_END, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_loopEnd; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterLoopEnd) {
			listener.enterLoopEnd(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitLoopEnd) {
			listener.exitLoopEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitLoopEnd) {
			return visitor.visitLoopEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopFilterContext extends ParserRuleContext {
	public FILTER(): TerminalNode { return this.getToken(TBLKParser.FILTER, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_loopFilter; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterLoopFilter) {
			listener.enterLoopFilter(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitLoopFilter) {
			listener.exitLoopFilter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitLoopFilter) {
			return visitor.visitLoopFilter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfBeginContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public If(): TerminalNode { return this.getToken(TBLKParser.If, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_ifBegin; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterIfBegin) {
			listener.enterIfBegin(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitIfBegin) {
			listener.exitIfBegin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitIfBegin) {
			return visitor.visitIfBegin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseCmdContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public Else(): TerminalNode { return this.getToken(TBLKParser.Else, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_elseCmd; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterElseCmd) {
			listener.enterElseCmd(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitElseCmd) {
			listener.exitElseCmd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitElseCmd) {
			return visitor.visitElseCmd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfCmdContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public Else(): TerminalNode { return this.getToken(TBLKParser.Else, 0); }
	public If(): TerminalNode { return this.getToken(TBLKParser.If, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_elseIfCmd; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterElseIfCmd) {
			listener.enterElseIfCmd(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitElseIfCmd) {
			listener.exitElseIfCmd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitElseIfCmd) {
			return visitor.visitElseIfCmd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfEndContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public IF_END(): TerminalNode { return this.getToken(TBLKParser.IF_END, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_ifEnd; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterIfEnd) {
			listener.enterIfEnd(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitIfEnd) {
			listener.exitIfEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitIfEnd) {
			return visitor.visitIfEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartialBeginContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public Function(): TerminalNode { return this.getToken(TBLKParser.Function, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_partialBegin; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterPartialBegin) {
			listener.enterPartialBegin(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitPartialBegin) {
			listener.exitPartialBegin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitPartialBegin) {
			return visitor.visitPartialBegin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartialEndContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public FUNCTION_END(): TerminalNode { return this.getToken(TBLKParser.FUNCTION_END, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_partialEnd; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterPartialEnd) {
			listener.enterPartialEnd(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitPartialEnd) {
			listener.exitPartialEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitPartialEnd) {
			return visitor.visitPartialEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartialUseContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TBLKParser.OPEN, 0); }
	public HASH(): TerminalNode { return this.getToken(TBLKParser.HASH, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(TBLKParser.CLOSE, 0); }
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_partialUse; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterPartialUse) {
			listener.enterPartialUse(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitPartialUse) {
			listener.exitPartialUse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitPartialUse) {
			return visitor.visitPartialUse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Assignment(): TerminalNode { return this.getToken(TBLKParser.Assignment, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_assignment; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(TBLKParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TBLKParser.CloseParen, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TBLKParser.Comma);
		} else {
			return this.getToken(TBLKParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_arguments; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_argument; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TBLKParser.Comma);
		} else {
			return this.getToken(TBLKParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(TBLKParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(TBLKParser.CloseBracket, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterMemberIndexExpression) {
			listener.enterMemberIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitMemberIndexExpression) {
			listener.exitMemberIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitMemberIndexExpression) {
			return visitor.visitMemberIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(TBLKParser.Dot, 0); }
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterMemberDotExpression) {
			listener.enterMemberDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitMemberDotExpression) {
			listener.exitMemberDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitMemberDotExpression) {
			return visitor.visitMemberDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterArgumentsExpression) {
			listener.enterArgumentsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitArgumentsExpression) {
			listener.exitArgumentsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitArgumentsExpression) {
			return visitor.visitArgumentsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	public Typeof(): TerminalNode { return this.getToken(TBLKParser.Typeof, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitTypeofExpression) {
			return visitor.visitTypeofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public Plus(): TerminalNode { return this.getToken(TBLKParser.Plus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitUnaryPlusExpression) {
			return visitor.visitUnaryPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(TBLKParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(TBLKParser.BitNot, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(TBLKParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Power(): TerminalNode { return this.getToken(TBLKParser.Power, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CoalesceExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Coalesce(): TerminalNode { return this.getToken(TBLKParser.Coalesce, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterCoalesceExpression) {
			listener.enterCoalesceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitCoalesceExpression) {
			listener.exitCoalesceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitCoalesceExpression) {
			return visitor.visitCoalesceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.RightShiftLogical, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitBitShiftExpression) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceofExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Instanceof(): TerminalNode { return this.getToken(TBLKParser.Instanceof, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterInstanceofExpression) {
			listener.enterInstanceofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitInstanceofExpression) {
			listener.exitInstanceofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitInstanceofExpression) {
			return visitor.visitInstanceofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public In(): TerminalNode { return this.getToken(TBLKParser.In, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterInExpression) {
			listener.enterInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitInExpression) {
			listener.exitInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitInExpression) {
			return visitor.visitInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equals_(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Equals_, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.NotEquals, 0); }
	public IdentityEquals(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.IdentityEquals, 0); }
	public IdentityNotEquals(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.IdentityNotEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(TBLKParser.BitAnd, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitXOr(): TerminalNode { return this.getToken(TBLKParser.BitXOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterBitXOrExpression) {
			listener.enterBitXOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitBitXOrExpression) {
			listener.exitBitXOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitBitXOrExpression) {
			return visitor.visitBitXOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(TBLKParser.BitOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(TBLKParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(TBLKParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(TBLKParser.QuestionMark, 0); }
	public Colon(): TerminalNode { return this.getToken(TBLKParser.Colon, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(TBLKParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TBLKParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_literal; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.DecimalLiteral, 0); }
	public HexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.HexIntegerLiteral, 0); }
	public OctalIntegerLiteral2(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.OctalIntegerLiteral2, 0); }
	public BinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.BinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_identifierName; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterIdentifierName) {
			listener.enterIdentifierName(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitIdentifierName) {
			listener.exitIdentifierName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitIdentifierName) {
			return visitor.visitIdentifierName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Identifier, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Let, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Async, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_identifier; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Break, 0); }
	public Do(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Do, 0); }
	public Instanceof(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Instanceof, 0); }
	public Typeof(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Typeof, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Case, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Else, 0); }
	public New(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.New, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Var, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Catch, 0); }
	public Finally(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Finally, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Return, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Void, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Continue, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.For, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Switch, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.While, 0); }
	public Debugger(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Debugger, 0); }
	public Function(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Function, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.This, 0); }
	public With(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.With, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Default, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.If, 0); }
	public Throw(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Throw, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Delete, 0); }
	public In(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.In, 0); }
	public Try(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Try, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Class, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Enum, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Extends, 0); }
	public Super(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Super, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Const, 0); }
	public Export(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Export, 0); }
	public Import(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Import, 0); }
	public Implements(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Implements, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Let, 0); }
	public Private(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Private, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Public, 0); }
	public Interface(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Interface, 0); }
	public Package(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Package, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Protected, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Static, 0); }
	public Yield(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Yield, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Async, 0); }
	public Await(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.Await, 0); }
	public From(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.From, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(TBLKParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TBLKParser.RULE_keyword; }
	// @Override
	public enterRule(listener: TBLKParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: TBLKParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TBLKParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


