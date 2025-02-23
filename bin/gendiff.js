#!/usr/bin/env node
import { Command } from 'commander';

import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .argument('<filepath1>', 'path to file1')
  .argument('<filepath2>', 'parth to file2')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });

program.parse(process.argv);
