import { promises as fs } from 'fs';
import { join, basename, dirname, relative } from 'path';
import * as glob from 'glob';
import { PartialInfo, CompilerOptions } from './compiler';
import { compileSource } from './lib';
const mkdirp = require('mkdirp');

export interface Config {
  include: string[];
  root: string;
  outDir?: string;
  compilerOptions: {
    typescript: boolean;
    sourceMap: boolean;
  };
}

function getBaseName(file: string) {
  return basename(file, '.tblk');
}

export async function run(config: Config) {
  const cwd = process.cwd();
  const generatedDirs = new Set<string>();

  const { root } = config;
  const includePaths: Set<string> = new Set(
    (
      await Promise.all(
        config.include.map(pattern => globPromise(pattern, root))
      )
    )
      .flat()
      .map(path => join(root, path))
  );

  const partials: PartialInfo[] = [];
  const compileQueue: { path: string; output: string; partial: boolean }[] = [];

  const ext = config.compilerOptions.typescript ? '.ts' : '.js';
  // Maps each path to its output directory.
  const outDir = (path: string) =>
    config.outDir ? join(root, config.outDir) : dirname(path);

  for (const path of includePaths) {
    const base = getBaseName(path);
    const partialPath = join(outDir(path), base);
    const output = partialPath + ext;
    const partial = base.startsWith('_');

    compileQueue.push({ path, output, partial });

    if (partial) {
      partials.push({
        name: base.slice(1),
        path: partialPath,
        uri: path
      });
    }
  }

  async function compile(path: string, outputPath: string, partial: boolean) {
    console.log(
      `Generating file '${relative(cwd, outputPath)}' for template '${relative(
        cwd,
        path
      )}'`
    );

    const source = await fs.readFile(path, 'utf-8');
    const outDir = dirname(outputPath);

    const options: CompilerOptions = {
      mode: partial ? 'partial' : 'javascript',
      typescript: config.compilerOptions.typescript,
      sourceMap: config.compilerOptions.sourceMap,
      uri: path,
      partials: partials.map(info => {
        const path = relative(outDir, info.path);
        return {
          name: info.name,
          path: path.startsWith('.') ? path : './' + path,
          uri: info.path
        };
      })
    };

    const output = compileSource(source, options);

    if (!generatedDirs.has(outDir)) {
      await mkdirp(outDir);
      generatedDirs.add(outDir);
    }

    await fs.writeFile(outputPath, output);
  }

  await Promise.all(
    compileQueue.map(info => compile(info.path, info.output, info.partial))
  );
}

function globPromise(pattern: string, root: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(
      pattern,
      {
        cwd: root,
        root
      },
      (err, files) => {
        if (err) return void reject(err);
        resolve(files);
      }
    );
  });
}
