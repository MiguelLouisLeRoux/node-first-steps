const chalk = require('chalk');
const greet = require('./greet');

const styledMessage = chalk.bgGreen.bgCyan(greet('Xola'));
console.log(styledMessage);


