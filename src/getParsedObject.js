const parsingMethods = {
  '.json': JSON.parse,
};

const getParsingMethod = (fileType) => {
  const parsingMethod = parsingMethods[fileType];

  if (!parsingMethod) {
    throw new Error('wrong file type');
  }

  return parsingMethod;
};

export default (fileBody, fileType) => getParsingMethod(fileType)(fileBody);
