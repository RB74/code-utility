const expect = require('expect');
const on = require('./on.js');

test('Testing on', () => {
  //For more information on all the methods supported by tape
  //Please go to https://github.com/substack/tape
  expect(typeof on === 'function').toBeTruthy();
});
