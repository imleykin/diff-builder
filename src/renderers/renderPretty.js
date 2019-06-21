const spacesInTab = 2;
const getIndent = depth => ' '.repeat(depth * spacesInTab);

const stringify = (value, depth) => {
  if (!(value instanceof Object)) {
    return value;
  }

  const items = JSON.stringify(value, null, spacesInTab)
    .split('\n')
    .slice(1, -1);
  return [
    '{',
    `${items.map(item => `${getIndent(depth + 1)}${item}`).join('\n')}`,
    `${getIndent(depth)}}`,
  ].join('\n');
};

const getPrettyNode = (node, depth = 1) => {
  const prettyRenderingMethods = {
    unchanged: ({ key, value }) => `${getIndent(depth + 1)}${key}: ${stringify(value, depth + 1)}`,
    deleted: ({ key, value }) => `${getIndent(depth)}- ${key}: ${stringify(value, depth + 1)}`,
    added: ({ key, value }) => `${getIndent(depth)}+ ${key}: ${stringify(value, depth + 1)}`,
    changed: ({ key, valueOld, valueNew }) => [
      `${getIndent(depth)}- ${key}: ${stringify(valueOld, depth + 1)}`,
      `${getIndent(depth)}+ ${key}: ${stringify(valueNew, depth + 1)}`,
    ].join('\n'),
    parent: ({ key, children }) => [
      `${getIndent(depth + 1)}${key}: {`,
      `${children.map(c => getPrettyNode(c, depth + 2)).join('\n')}`,
      `${getIndent(depth + 1)}}`,
    ].join('\n'),
  };

  return prettyRenderingMethods[node.type](node);
};

export default (ast) => {
  const result = ast.map(n => getPrettyNode(n));
  return `{\n${result.join('\n')}\n}`;
};
