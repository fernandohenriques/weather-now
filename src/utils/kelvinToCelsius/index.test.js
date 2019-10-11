import kelvinToCelsius from './index';

describe('function kelvinToCelsius', () => {
  test('should return kelvin temperature in celsius degree', () => {
    const kelvin = 303.15;

    expect(kelvinToCelsius(kelvin)).toBe(30);
  });
});
