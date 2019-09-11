const array = require('../src/array');

test('got the second item lol', () => {
  expect(array('lmao', 'lol', 'ayy')).toBe('lol');
});