const getDiffAST = (beforeObject, afterObject) => {
  const keysUnion = [...Object.keys(beforeObject), ...Object.keys(afterObject)]
    .filter((value, index, self) => self.indexOf(value) === index);

  console.log(beforeObject);
  console.log(afterObject);
  console.log(keysUnion);

  const resultAST = keysUnion.map((key) => {
    if (beforeObject[key] && !afterObject[key]) {
      return { key, type: 'deleted', value: beforeObject[key] };
    }

    if (!beforeObject[key] && afterObject[key]) {
      return { key, type: 'added', value: afterObject[key] };
    }

    if (afterObject[key] !== beforeObject[key]) {
      return {
        key, type: 'changed', valueOld: beforeObject[key], valueNew: afterObject[key],
      };
    }

    return { key, type: 'unchanged', value: afterObject[key] };
  });

  return resultAST;
};

export default getDiffAST;
