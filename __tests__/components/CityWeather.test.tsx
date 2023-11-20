import React from 'react';

import { render, screen } from '@testing-library/react-native';

import CityWeather from '@/components/CityWeather';
import { CityWeatherData } from '@/lib/weather';

describe('<CityWeather />', () => {
  it('renders correctly', () => {
    const props: CityWeatherData = {
      cityId: 703448,
      cityName: 'Kyiv',
      weatherCondition: 'Rainy',
      temperature: 100.12,
      weatherIconName: '01d',
      humidity: 45,
      pressure: 2031,
      windSpeed: 5.1,
      cloudCover: 3.1,
    };

    render(<CityWeather {...props} />);

    expect(screen.getByText('Kyiv')).toBeOnTheScreen();
    expect(screen.getByText('Rainy')).toBeOnTheScreen();
  });
});
