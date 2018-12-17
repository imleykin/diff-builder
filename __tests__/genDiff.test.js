import fs from 'fs';
import genDiff from '../src';

const fixturesPath = './__tests__/__fixtures__/';

test('test input JSON', () => {
  const beforeJSONPath = `${fixturesPath}before.json`;
  const afterJSONPath = `${fixturesPath}after.json`;

  const resultJSONPath = `${fixturesPath}resultJSON.txt`;
  const resultJSON = fs.readFileSync(resultJSONPath, 'utf8').replace('\n', '');
  expect(genDiff(beforeJSONPath, afterJSONPath, 'json')).toBe(resultJSON);

  const resultPrettyPath = `${fixturesPath}resultPretty.txt`;
  const resultPretty = fs.readFileSync(resultPrettyPath, 'utf8');
  expect(genDiff(beforeJSONPath, afterJSONPath, 'pretty')).toBe(resultPretty);
});
