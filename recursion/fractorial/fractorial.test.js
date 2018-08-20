const fractorial = require('./fractorial');

test('fractorial of 5', () => {
  expect(fractorial(7)).toBe(5040);
});

test('fractorial of 4', () => {
  expect(fractorial(4)).toBe(24);
});