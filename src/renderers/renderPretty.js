const prettyRenderingMethods = [
  {
    type: 'unchanged',
    method: (key, value) => ` ${key}: ${value}`,
  },
  {
    type: 'deleted',
    method: (key, value) => ` - ${key}: ${value}`,
  },
  {
    type: 'added',
    method: (key, value) => ` + ${key}: ${value}`,
  },
  {
    type: 'changed',
    method: (key, valueNew, valueOld) => ` - ${key}: ${valueOld} \n + ${key}: ${valueNew}`,
  },
];

const getPrettyNode = (node) => {
  const {
    key, type: nodeType, value, valueOld, valueNew,
  } = node;

  const getPrettyRenderingNode = prettyRenderingMethods.find(({ type }) => type === nodeType);

  return getPrettyRenderingNode.method(
    key,
    (typeof value !== 'undefined' ? value : valueNew),
    valueOld,
  );
};

export default ast => (
  `{
  ${ast.map(getPrettyNode).join('\n')}
}`
);
