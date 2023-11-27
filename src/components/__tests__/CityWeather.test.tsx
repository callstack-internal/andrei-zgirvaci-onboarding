import React from 'react';

import { render, screen } from '@testing-library/react-native';

import CityWeather from '@/components/CityWeather';
import { NORMALIZED_WEATHER_DATA } from '@/tools/jest/data';

describe('<CityWeather />', () => {
  test('should display the weather data', () => {
    render(<CityWeather {...NORMALIZED_WEATHER_DATA} />);

    expect(
      screen.getByText(NORMALIZED_WEATHER_DATA.cityName)
    ).toBeOnTheScreen();

    expect(
      screen.getByText(NORMALIZED_WEATHER_DATA.weatherCondition)
    ).toBeOnTheScreen();

    expect(
      screen.getByText(`${NORMALIZED_WEATHER_DATA.temperature} °C`)
    ).toBeOnTheScreen();

    const weatherIcon = screen.getByTestId('weather-icon');
    expect(weatherIcon.props.source.uri).toContain(
      NORMALIZED_WEATHER_DATA.weatherIconName
    );
  });
});
