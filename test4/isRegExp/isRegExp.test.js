const expect = require('expect');
const isRegExp = require('./isRegExp.js');

test('Testing isRegExp', () => {
  //For more information on all the methods supported by tape
  //Please go to https://github.com/substack/tape
  expect(typeof isRegExp === 'function').toBeTruthy();
});