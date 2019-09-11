const link = require('../src/link');

test('text concatted correctly', () => {
  expect(link('www.', 'cartoon', '.com')).toBe('www.cartoon.com');
});