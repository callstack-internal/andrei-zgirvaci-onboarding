import { screen } from '@testing-library/react-native';

import { NORMALIZED_WEATHER_DATA } from '@/tools/jest/data';
import {
  setupEmptyDataHandler,
  setupFailedNetworkHandler,
  setupFailedRequestHandler,
  setupSucceededRequestHandler,
} from '@/tools/jest/handlers';
import { renderScreen } from '@/tools/jest/utils';

import DetailsScreen from '../DetailsScreen';

describe('<DetailsScreen />', () => {
  test('should display the weather data', async () => {
    setupSucceededRequestHandler();

    renderScreen(DetailsScreen, 'DetailsScreen', {
      cityId: NORMALIZED_WEATHER_DATA.cityId,
    });

    const cityName = await screen.findByText(NORMALIZED_WEATHER_DATA.cityName);
    expect(cityName).toBeOnTheScreen();

    const weatherCondition = await screen.findByText(
      NORMALIZED_WEATHER_DATA.weatherCondition
    );
    expect(weatherCondition).toBeOnTheScreen();

    const temperature = await screen.findByText(
      `${NORMALIZED_WEATHER_DATA.temperature} °C`
    );
    expect(temperature).toBeOnTheScreen();

    const weatherIcon = await screen.findByTestId('weather-icon');
    expect(weatherIcon.props.source.uri).toContain(
      NORMALIZED_WEATHER_DATA.weatherIconName
    );

    const humidity = await screen.findByText(
      `${NORMALIZED_WEATHER_DATA.humidity} %`
    );
    expect(humidity).toBeOnTheScreen();

    const pressure = await screen.findByText(
      `${NORMALIZED_WEATHER_DATA.pressure} hPa`
    );
    expect(pressure).toBeOnTheScreen();

    const windSpeed = await screen.findByText(
      `${NORMALIZED_WEATHER_DATA.windSpeed} mph`
    );
    expect(windSpeed).toBeOnTheScreen();

    const cloudCover = await screen.findByText(
      `${NORMALIZED_WEATHER_DATA.cloudCover} %`
    );
    expect(cloudCover).toBeOnTheScreen();
  });

  test('should display an error message when weather data is empty', async () => {
    setupEmptyDataHandler();

    renderScreen(DetailsScreen, 'DetailsScreen', {
      cityId: NORMALIZED_WEATHER_DATA.cityId,
    });

    const errorMessage = await screen.findByText(
      "Sorry, couldn't get weather data. Try again."
    );
    expect(errorMessage).toBeOnTheScreen();
  });

  test('should display an error message when weather data is wrong', async () => {
    setupFailedRequestHandler();

    renderScreen(DetailsScreen, 'DetailsScreen', {
      cityId: NORMALIZED_WEATHER_DATA.cityId,
    });

    const errorMessage = await screen.findByText(
      "Sorry, couldn't get weather data. Try again."
    );
    expect(errorMessage).toBeOnTheScreen();
  });

  test('should display an error message when weather data fails to fetch', async () => {
    setupFailedNetworkHandler();

    renderScreen(DetailsScreen, 'DetailsScreen', {
      cityId: NORMALIZED_WEATHER_DATA.cityId,
    });

    const errorMessage = await screen.findByText(
      "Sorry, couldn't get weather data. Try again."
    );
    expect(errorMessage).toBeOnTheScreen();
  });
});
