import fs from 'fs';
import path from 'path';
import getParsedObject from './getParsedObject';
import getDiffAST from './getDiffAST';
import render from './renderers';

const genDiff = (beforePath, afterPath, outputFormat = 'pretty') => {
  const beforeFile = fs.readFileSync(beforePath);
  const afterFile = fs.readFileSync(afterPath);

  const beforeFileType = path.extname(beforePath);
  const afterFileType = path.extname(afterPath);

  const beforeObject = getParsedObject(beforeFile, beforeFileType);
  const afterObject = getParsedObject(afterFile, afterFileType);

  const diffAST = getDiffAST(beforeObject, afterObject);

  return render(diffAST, outputFormat);
};

export default genDiff;
