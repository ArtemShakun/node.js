import { getArgs } from './helpers/args.js';
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from './services/log.service.js';
import {
  saveValues,
  TOKEN_DICTIONARY,
  getKeyValue,
} from './services/storage.service.js';
import { getWeather, getIcon } from './services/api.service.js';

const saveToken = async token => {
  if (!token.length) {
    printError('No token passed');
    return;
  }
  try {
    await saveValues(TOKEN_DICTIONARY.token, token);
    printSuccess('Token was saved');
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async city => {
  if (!city.length) {
    printError('No city passed');
    return;
  }
  try {
    await saveValues(TOKEN_DICTIONARY.city, city);
    printSuccess('City was saved');
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  const city = await getKeyValue(TOKEN_DICTIONARY.city);
  try {
    const weather = await getWeather(city);
    printWeather(weather, await getIcon(weather.weather[0].icon));
  } catch (e) {
    console.log(e.response?.data);
    if (e.response?.data?.cod === '404') {
      printError('The city name is incorrect');
    } else if (e.response?.data?.cod === 401) {
      printError('The token name is incorrect');
    } else {
      printError(e.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForcast();
};

initCLI();
