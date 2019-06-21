import yaml from 'js-yaml';
import ini from 'ini';

const parsingMethods = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.decode,
};

const getParsingMethod = (fileType) => {
  const parsingMethod = parsingMethods[fileType];

  if (!parsingMethod) {
    throw new Error('wrong file type');
  }

  return parsingMethod;
};

export default (fileBody, fileType) => getParsingMethod(fileType)(fileBody);
