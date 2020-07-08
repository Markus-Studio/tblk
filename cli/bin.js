#!/usr/bin/env node

const cli = require('../dist/src/cli');
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

function parseArguments() {
  if (process.argv[2] === '-config') {
    if (process.argv.length === 3) {
      console.error('-config requires the path to the config file.')
      process.exit(-1);
    } else if (process.argv.length > 4) {
      console.error('Unrecognized command line arguments after -config.')
      process.exit(-1);
    }
    const configPath = path.join(cwd, process.argv[3]);
    return {
      ...JSON.parse(fs.readFileSync(configPath)),
      root: path.dirname(configPath)
    };
  }

  const config = {
    include: [],
    root: cwd,
    outDir: null,
    compilerOptions: {
      sourceMap: true,
      typescript: false
    }
  };

  for (let i = 2; i < process.argv.length; ++i) {
    const arg = process.argv[i];
    if(arg === '-config') {
      console.error('-config cannot be used with other options.')
      process.exit(-1);
    } else if (arg === '-ts') {
      config.compilerOptions.typescript = true;
    } else if (arg === '-no-source-map') {
      config.compilerOptions.sourceMap = false;
    } else if (arg === '-o') {
      config.outDir = process.argv[i + 1];
      // Consume the next arg as well.
      i += 1;
    } else {
      config.include.push(arg);
    }
  }

  return config;
}

cli.run(parseArguments());
