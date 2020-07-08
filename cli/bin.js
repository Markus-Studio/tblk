#!/usr/bin/env node

const lib = require('../dist/src/lib');
const fs = require('fs');
const path = require('path');

const cwd = process.cwd();

const options = {
  files: [],
  sourceMap: true,
  typescript: false,
  outputDir: null
};

for (let i = 2; i < process.argv.length; ++i) {
  const arg = process.argv[i];
  if (arg === '-ts') {
    options.typescript = true;
  } else if (arg === '-no-source-map') {
    options.sourceMap = false;
  } else if (arg === '-o') {
    options.outputDir = process.argv[i + 1];
    // Consume the next arg as well.
    i += 1;
  } else {
    options.files.push(path.join(cwd, arg));
  }
}

function getBaseName(file) {
  const base = path.basename(file);
  if (base.endsWith('.blk')) return base.slice(0, -4);
  return base;
}

function getOutputPathFor(file) {
  const ext = options.typescript ? '.ts' : '.js';
  const filename = getBaseName(file) + ext;
  const dir = options.outputDir ? options.outputDir : path.dirname(file);
  return path.join(dir, filename);
}

for (const file of options.files) {
  const output = getOutputPathFor(file);
  const source = fs.readFileSync(file, 'utf-8');
  const out = lib.compileSource(source, {
    uri: file,
    mode: 'javascript',
    sourceMap: options.sourceMap,
    typescript: options.typescript,
  });
  fs.writeFileSync(output, out);
}
