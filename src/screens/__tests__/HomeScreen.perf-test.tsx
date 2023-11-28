import React from 'react';

import { measurePerformance } from 'reassure';

import CityWeather from '@/components/CityWeather';
import { NORMALIZED_WEATHER_DATA } from '@/tools/jest/data';

describe('<CityWeather />', () => {
  test('should render the component without significant performance changes', async () => {
    measurePerformance(<CityWeather {...NORMALIZED_WEATHER_DATA} />);
  });
});
