import renderPretty from './renderPretty';

const renderingMethods = {
  json: JSON.stringify,
  pretty: renderPretty,
};

const getRenderingMethod = (outputFormat) => {
  const renderingMethod = renderingMethods[outputFormat];

  if (!renderingMethod) {
    throw new Error('wrong output format');
  }

  return renderingMethod;
};

export default (ast, outputFormat) => getRenderingMethod(outputFormat)(ast);
