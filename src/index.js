import { readFileSync } from 'fs';
import _ from 'lodash';

const getDataParsed = (path) => {
    const data = readFileSync(path, {encoding:'utf8', flag:'r'});
    return JSON.parse(data);
};

const compareValues = (key, file1, file2) => {
    if (Object.hasOwn(file1, key) === Object.hasOwn(file2, key)) {
      if (file1.key === file2.key) {
        return file1[key];
      }
     // как вернуть оба значения, если ключ есть в обоих объектах, но с разными значениями?
    }
  if (Object.hasOwn(file1, key) && !Object.hasOwn(file2, key)) {
    return file1[key];
  }
return file2[key];
};

const genDiff = (filepath1, filepath2) => {

const data1 = getDataParsed(filepath1);
const data2 = getDataParsed(filepath2);

const keys1 = Object.keys(data1);
const keys2 = Object.keys(data2);
const keys =_.sortBy(_.union(keys1, keys2));

const result = keys.reduce((acc, key) => {
acc[key] = compareValues(key, data1, data2);
return acc;
}, {});
return result;
};

export default genDiff;