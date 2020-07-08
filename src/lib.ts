import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import btoa = require('btoa');
import { TBLKLexer } from '../grammar/TBLKLexer';
import { TBLKParser } from '../grammar/TBLKParser';
import { Compiler, CompilerOptions } from './compiler';
import { Writer } from './writer';

/**
 * A dynamically compiled/evaluated template.
 */
export type Template = (data?: Record<string, any>) => string;

const DEFAULT_OPTIONS: CompilerOptions = {
  uri: null,
  mode: 'iife',
  sourceMap: false,
  typescript: false,
  partials: null
};

// Re-export for documentation purposes.
export { CompilerOptions as CompileOptions };

/**
 * Compiles the template returning the generated source code, this is an
 * advanced API in most cases you might want to use {@link compile}.
 *
 * @param source The template source code.
 * @param options Options passed to the compiler.
 * ## Default Options
 * ```ts
 * {
 *  uri: null,
 *  mode: 'iife',
 *  sourceMap: false,
 *  typescript: false,
 *  partials: null
 * }
 * ```
 */
export function compileSource(
  source: string,
  options?: Partial<CompilerOptions>
): string {
  const OPTIONS: CompilerOptions = { ...DEFAULT_OPTIONS, ...options };

  const inputStream = new ANTLRInputStream(source);
  const lexer = new TBLKLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new TBLKParser(tokenStream);
  const tree = parser.document();
  const visitor = new Compiler(OPTIONS);
  const compiled = visitor.visit(tree);

  if (!OPTIONS.sourceMap) {
    return compiled.toString();
  }

  const { map, code } = compiled.toStringWithSourceMap();
  const sourceMap = btoa(map.toString());
  const withMap =
    code +
    '\n' +
    '//# sourceMappingURL=data:application/json;base64,' +
    sourceMap;
  return withMap;
}

/**
 * Dynamically compiles the template and returns a {@link Template} function,
 * you must prefer pre-compiling the template files, for faster bootstraps.
 *
 * # Example
 * ```ts
 * import { compile } from 'tblk';
 * const template = compile('Hello <% name %>!');
 * console.log(template({name: "World" }));
 * ```
 *
 * @param template The source code for the template.
 * @param options Options passed to the compiler.
 * `mode` and `typescript` options are ignored and the default values of `iife` and
 * `false` are used accordingly.
 */
export function compile(
  template: string,
  options?: Partial<CompilerOptions>
): Template {
  const source = compileSource(template, {
    ...options,
    mode: 'iife',
    typescript: false
  });
  return eval(source)(Writer);
}
