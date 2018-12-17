const getDiffAST = (beforeObject, afterObject) => {
  const keysUnion = [...Object.keys(beforeObject), ...Object.keys(afterObject)]
    .filter((value, index, self) => self.indexOf(value) === index);

  const resultAST = keysUnion.map((key) => {
    if ((key in beforeObject) && !(key in afterObject)) {
      console.log(`${key} deleted`);
      return { key, type: 'deleted', value: beforeObject[key] };
    }

    if (!(key in beforeObject) && (key in afterObject)) {
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
