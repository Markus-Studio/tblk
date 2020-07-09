parser grammar TBLKParser;

options { tokenVocab=TBLKLexer; }

document    :   (row | partial)? (LINE_FEED (row | partial))* ;

partial     :   partialBegin LINE_FEED? (row LINE_FEED)* row? partialEnd ;
row         :   segment* ;

segment     :   span
            |   print
            |   loopBegin
            |   loopEnd
            |   ifBegin
            |   elseCmd
            |   ifEnd
            |   partialUse
            ;

span        :   TEXT ;
print       :   OPEN expressionSequence CLOSE ;
loopBegin   :   OPEN 'for' identifier 'in' expressionSequence loopFilter* CLOSE ;
loopEnd     :   OPEN '/for' CLOSE ;
loopFilter  :   FILTER expressionSequence ;
ifBegin     :   OPEN 'if' expressionSequence CLOSE ;
elseCmd     :   OPEN 'else' CLOSE ;
ifEnd       :   OPEN '/if' CLOSE ;
partialBegin:   OPEN 'function' identifier CLOSE ;
partialEnd  :   OPEN '/function' CLOSE ;
partialUse  :   OPEN '#' identifier assignment* CLOSE ;
assignment  :   identifier '=' singleExpression ;

arguments
    : '('(argument (',' argument)* ','?)?')'
    ;

argument
    : singleExpression
    | identifier
    ;

expressionSequence
    : singleExpression (',' singleExpression)*
    ;

singleExpression
    : singleExpression '[' expressionSequence ']'                           # MemberIndexExpression
    | singleExpression '.' identifierName                                   # MemberDotExpression
    | singleExpression arguments                                            # ArgumentsExpression
    | Typeof singleExpression                                               # TypeofExpression
    | '+' singleExpression                                                  # UnaryPlusExpression
    | '-' singleExpression                                                  # UnaryMinusExpression
    | '~' singleExpression                                                  # BitNotExpression
    | '!' singleExpression                                                  # NotExpression
    | <assoc=right> singleExpression '**' singleExpression                  # PowerExpression
    | singleExpression ('*' | '/' | '%') singleExpression                   # MultiplicativeExpression
    | singleExpression ('+' | '-') singleExpression                         # AdditiveExpression
    | singleExpression '??' singleExpression                                # CoalesceExpression
    | singleExpression ('<<' | '>>' | '>>>') singleExpression               # BitShiftExpression
    | singleExpression ('<' | '>' | '<=' | '>=') singleExpression           # RelationalExpression
    | singleExpression Instanceof singleExpression                          # InstanceofExpression
    | singleExpression In singleExpression                                  # InExpression
    | singleExpression ('==' | '!=' | '===' | '!==') singleExpression       # EqualityExpression
    | singleExpression '&' singleExpression                                 # BitAndExpression
    | singleExpression '^' singleExpression                                 # BitXOrExpression
    | singleExpression '|' singleExpression                                 # BitOrExpression
    | singleExpression '&&' singleExpression                                # LogicalAndExpression
    | singleExpression '||' singleExpression                                # LogicalOrExpression
    | singleExpression '?' singleExpression ':' singleExpression            # TernaryExpression
    | identifier                                                            # IdentifierExpression
    | literal                                                               # LiteralExpression
    | '(' expressionSequence ')'                                            # ParenthesizedExpression
    ;

literal
    : NullLiteral
    | BooleanLiteral
    | StringLiteral
    | numericLiteral
    ;

numericLiteral
    : DecimalLiteral
    | HexIntegerLiteral
    | OctalIntegerLiteral2
    | BinaryIntegerLiteral
    ;

identifierName
    : identifier
    | reservedWord
    ;

identifier
    : Identifier
    | Let
    | Async
    ;

reservedWord
    : keyword
    | NullLiteral
    | BooleanLiteral
    ;

keyword
    : Break
    | Do
    | Instanceof
    | Typeof
    | Case
    | Else
    | New
    | Var
    | Catch
    | Finally
    | Return
    | Void
    | Continue
    | For
    | Switch
    | While
    | Debugger
    | Function
    | This
    | With
    | Default
    | If
    | Throw
    | Delete
    | In
    | Try

    | Class
    | Enum
    | Extends
    | Super
    | Const
    | Export
    | Import
    | Implements
    | Let
    | Private
    | Public
    | Interface
    | Package
    | Protected
    | Static
    | Yield
    | Async
    | Await
    | From
    | As
    ;
