#!/usr/bin/env node

const lib = require('../dist/src/lib');
const fs = require('fs');
const path = require('path');

const cwd = process.cwd();

let output;
let files = [];
for (let i = 2; i < process.argv.length; ++i) {
  const arg = process.argv[i];
  if (arg === '-o') {
    output = process.argv[i + 1]
    // Consume the next arg as well.
    i += 1;
  } else {
    files.push(path.join(cwd, arg));
  }
}

function getBaseName(file) {
  const base = path.basename(file);
  if (base.endsWith('.blk')) return base.slice(0, -4);
  return base;
}

function getOutputPathFor(file) {
  const filename = getBaseName(file) + '.js';
  const dir = output ? output : path.dirname(file);
  return path.join(dir, filename);
}

for (const file of files) {
  const output = getOutputPathFor(file);
  const source = fs.readFileSync(file, 'utf-8');
  const out = lib.compileSource(source, {
    uri: file,
    iife: false,
    sourceMap: true
  });
  fs.writeFileSync(output, out);
}
