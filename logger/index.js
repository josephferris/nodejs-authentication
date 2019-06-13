'use strict';

const chalk = require('chalk');

const log = console.log;

const errorLogger = chalk.bold.red;
const warningLogger = chalk.keyword('orange');
const infoLogger = chalk.underline.bold.keyword('blue');

module.exports = {
  log,
  errorLogger,
  warningLogger,
  infoLogger,
};
