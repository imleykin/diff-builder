const getIndent = depth => '  '.repeat(depth);

const getPrettyNode = (node, depth = 1) => {
  const prettyRenderingMethods = [
    {
      type: 'unchanged',
      method: ({ key, value }) => `${depth}${getIndent(depth + 1)}${key}: ${JSON.stringify(value)}`,
    },
    {
      type: 'deleted',
      method: ({ key, value }) => `${depth}${getIndent(depth)}- ${key}: ${JSON.stringify(value)}`,
    },
    {
      type: 'added',
      method: ({ key, value }) => `${depth}${getIndent(depth)}+ ${key}: ${JSON.stringify(value)}`,
    },
    {
      type: 'changed',
      method: ({ key, valueOld, valueNew }) => `${depth}${getIndent(depth)}- ${key}: ${JSON.stringify(valueOld)}\n` +
        `${depth}${getIndent(depth)}+ ${key}: ${JSON.stringify(valueNew)}`,
    },
    {
      type: 'parent',
      method: ({ key, children }) => `${depth}${getIndent(depth + 1)}${key}:
${getIndent(depth + 1)}{
${children.map(c => getPrettyNode(c, depth + 1)).join('\n')}
${getIndent(depth + 1)}}`,
    },
  ];

  const { type: nodeType } = node;

  const getPrettyRenderingNode = prettyRenderingMethods.find(({ type }) => type === nodeType);

  return getPrettyRenderingNode.method(node);
};

export default ast => `{\n${ast.map(n => getPrettyNode(n)).join('\n')}\n}`;
