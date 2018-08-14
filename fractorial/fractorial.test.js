const fractorial = require('./fractorial');

test('fractorial of 5', () => {
  expect(fractorial(5)).toBe(15);
});