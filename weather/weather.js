import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveValues } from './services/storage.service.js';

const saveToken = async token => {
  try {
    await saveValues('token', token);
    printSuccess('Token was saved');
  } catch (error) {
    printError(error.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    printSuccess(s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  // output weather
};

initCLI();
