#!/usr/bin/env node

import program from 'commander';

program
  .version('0.1.0', '-V, --version')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => {
    console.log(program.format, program.firstConfig, secondConfig);
  })
  .parse(process.argv);
