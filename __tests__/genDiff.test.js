import fs from 'fs';
import genDiff from '../src';

const fixturesPath = './__tests__/__fixtures__/';

test('basic test', () => {
  const resultPath = `${fixturesPath}result.txt`;
  const beforeJSONPath = `${fixturesPath}before.json`;
  const afterJSONPath = `${fixturesPath}after.json`;
  const result = fs.readFileSync(resultPath, 'utf8');

  expect(genDiff(beforeJSONPath, afterJSONPath)).toBe(result);
});
