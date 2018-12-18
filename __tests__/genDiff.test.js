import fs from 'fs';
import genDiff from '../src';

const fixturesPath = './__tests__/__fixtures__/';

const normalizeString = str => str.replace(/(\r\n\t|\n|\r\t)/gm, '').replace(/\s/g, '');

test('test input JSON', () => {
  const beforeJSONPath = `${fixturesPath}before.json`;
  const afterJSONPath = `${fixturesPath}after.json`;

  // const resultJSONPath = `${fixturesPath}resultJSON.txt`;
  // const resultJSON = fs.readFileSync(resultJSONPath, 'utf8').replace('\n', '');
  // const programOutJSON = genDiff(beforeJSONPath, afterJSONPath, 'json');
  // expect(normalizeString(programOutJSON)).toBe(normalizeString(resultJSON));

  // const resultPrettyPath = `${fixturesPath}resultPretty.txt`;
  // const resultPretty = fs.readFileSync(resultPrettyPath, 'utf8');
  // const programOutPretty = genDiff(beforeJSONPath, afterJSONPath, 'pretty');
  // expect(normalizeString(programOutPretty)).toBe(normalizeString(resultPretty));
});

test('trees', () => {
  const beforeTreeJSONPath = `${fixturesPath}beforeTree.json`;
  const afterTreeJSONPath = `${fixturesPath}afterTree.json`;
  //
  // const resultTreeJSONPath = `${fixturesPath}resultTreeJSON.txt`;
  // const resultTreeJSON = fs.readFileSync(resultTreeJSONPath, 'utf8');
  // const programOutJSON = genDiff(beforeTreeJSONPath, afterTreeJSONPath, 'json');
  // expect(normalizeString(programOutJSON)).toBe(normalizeString(resultTreeJSON));

  const resultTreePrettyPath = `${fixturesPath}resultTreePretty.txt`;
  const resultTreePretty = fs.readFileSync(resultTreePrettyPath, 'utf8');
  const programOutPretty = genDiff(beforeTreeJSONPath, afterTreeJSONPath, 'pretty');
  expect(programOutPretty).toBe(normalizeString(resultTreePretty));
});
