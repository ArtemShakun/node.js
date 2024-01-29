import { homedir } from 'os';
import { promises } from 'fs';
import {
  join,
  basename,
  dirname,
  extname,
  relative,
  isAbsolute,
  resolve,
  sep,
} from 'path';

const filePath = join(homedir(), 'weather-data.json');

export const TOKEN_DICTIONARY = {
  token: 'token',
  city: 'city',
};

export const saveValues = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

export const getKeyValue = async key => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    let data = JSON.parse(file);
    return data[key];
  }
  return null;
};

const isExist = async path => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};
// console.log(basename(filePath), 'basename');
// console.log(dirname(filePath), 'dirname');
// console.log(extname(filePath), 'extname');
// console.log(relative(filePath, dirname(filePath)), 'relative');
// console.log(isAbsolute(filePath), 'isAbsolute');
// console.log(resolve('../'), 'resolve');
// console.log(sep);
