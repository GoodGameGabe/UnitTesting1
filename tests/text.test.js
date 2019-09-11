const text = require('../src/text');

test('it uppercased', () => {
  expect(text('ayy')).toBe('AYY');
});