import { NORMALIZED_WEATHER_DATA, RAW_WEATHER_DATA } from '@/tools/jest/data';

import { normalizeRawWeatherData } from '../weather';

describe('Weather Service', () => {
  test('should normalize raw weather data correctly', () => {
    const normalizedData = normalizeRawWeatherData(RAW_WEATHER_DATA.list[0]);

    expect(normalizedData).toStrictEqual(NORMALIZED_WEATHER_DATA);
  });
});
