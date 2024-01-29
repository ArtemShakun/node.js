import chalk from 'chalk';

export const printError = error => {
  console.log(chalk.bgRed('ERROR') + ' ' + error);
};

export const printSuccess = message => {
  console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
};

export const printHelp = () => {
  console.log(`
  ${chalk.bgCyan('HELP')} 
  Without parameters - output weather
  -s [CITY] for set city
  -h for output help
  -t [API_KEY] for save token

  `);
};
