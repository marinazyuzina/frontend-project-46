#!/usr/bin/env node

import genDiff from '../src/index.js';
import { program } from 'commander';

  program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
   console.log(genDiff(filepath1, filepath2)) 
  });

program.parse();


