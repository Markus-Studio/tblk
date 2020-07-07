import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import btoa = require("btoa");
import { TBLKLexer } from '../grammar/TBLKLexer';
import { TBLKParser} from '../grammar/TBLKParser';
import { Compiler } from './compiler';
import { Writer } from './writer';

export type Template = (data?: Record<string, any>) => string;

export type CompileOptions = {
  uri: string | null;
  iife: boolean;
  sourceMap: boolean;
}

const DEFAULT_OPTIONS: CompileOptions = {
  uri: null,
  iife: true,
  sourceMap: false
};

export { Writer };

export function compileSource(source: string, options?: Partial<CompileOptions>): string {
  const OPTIONS: CompileOptions = {...DEFAULT_OPTIONS, ...options};

  const inputStream = new ANTLRInputStream(source);
  const lexer = new TBLKLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new TBLKParser(tokenStream);
  const tree = parser.document();
  const visitor = new Compiler(OPTIONS.uri, OPTIONS.iife)
  const compiled = visitor.visit(tree);

  if (!OPTIONS.sourceMap) {
    return compiled.toString();
  }

  const {map, code} = compiled.toStringWithSourceMap();
  const sourceMap = btoa(map.toString());
  const withMap =
    code +
    "\n" +
    "//# sourceMappingURL=data:application/json;base64," +
    sourceMap;
  return withMap;
}

export function compile(template: string, options?: CompileOptions): Template {
  const source = compileSource(template, {...options, iife: true});
  return eval(source)(Writer);
}