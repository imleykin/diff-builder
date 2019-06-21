const getDiffAST = (beforeObject, afterObject) => {
  const keysUnion = [...Object.keys(beforeObject), ...Object.keys(afterObject)]
    .filter((value, index, self) => self.indexOf(value) === index);

  const diffNodes = [
    {
      checkFunc: key => (key in beforeObject) && !(key in afterObject),
      getNode: key => ({ key, type: 'deleted', value: beforeObject[key] }),
    },
    {
      checkFunc: key => !(key in beforeObject) && (key in afterObject),
      getNode: key => ({ key, type: 'added', value: afterObject[key] }),
    },
    {
      checkFunc: key => (afterObject[key] instanceof Object)
       && (beforeObject[key] instanceof Object),
      getNode: key => ({ key, type: 'parent', children: getDiffAST(beforeObject[key], afterObject[key]) }),
    },
    {
      checkFunc: key => afterObject[key] !== beforeObject[key],
      getNode: key => ({
        key, type: 'changed', valueOld: beforeObject[key], valueNew: afterObject[key],
      }),
    },
    {
      checkFunc: key => afterObject[key] === beforeObject[key],
      getNode: key => ({ key, type: 'unchanged', value: afterObject[key] }),
    },
  ];

  return keysUnion.map((key) => {
    const { getNode } = diffNodes.find(({ checkFunc }) => checkFunc(key));
    return getNode(key);
  });
};

export default getDiffAST;
