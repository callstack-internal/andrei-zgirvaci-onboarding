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
      temperature: 10.12,
      weatherIconName: '01d',
      humidity: 45,
      pressure: 2031,
      windSpeed: 5.1,
      cloudCover: 3.1,
    };

    render(<CityWeather {...props} />);

    const img = screen.getByTestId('weather-icon');

    expect(screen.getByText('Kyiv')).toBeOnTheScreen();
    expect(screen.getByText('Rainy')).toBeOnTheScreen();
    expect(screen.getByText('10.12 °C')).toBeOnTheScreen();
    expect(img.props.source.uri).toContain(props.weatherIconName);
  });
});
