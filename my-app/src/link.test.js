const link = require('./link');

test('got the second item lol', () => {
  expect(link('lmao', 'lol', 'ayy')).toBe('lol');
});