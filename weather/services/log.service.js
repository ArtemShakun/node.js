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

export const printWeather = (resp, icon) => {
  // console.log(icon);
  console.log(`
  ${chalk.bgYellowBright('Weather')} 
  Weather in the city: ${resp.name}
  ${icon}  ${resp.weather[0].description}
  Temperature: ${resp.main.temp} (feels like as: ${resp.main.feels_like})
  Humidity: ${resp.main.humidity}%
  Wind speed: ${resp.wind.speed} m/s
  `);
};
