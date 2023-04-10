#!/usr/bin/env node

import { program } from 'commander';

  program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action(() => {
    console.log('');
    console.log('Examples:');
    console.log('  $ genDiff file1.json file2.json');
    console.log('  $ genDiff -f plain file1.yml file2.yml');
  });

program.parse();


