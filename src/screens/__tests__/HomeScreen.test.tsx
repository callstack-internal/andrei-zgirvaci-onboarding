import { screen } from '@testing-library/react-native';

import cities from '@/constants/cities';
import {
  setupEmptyDataHandler,
  setupFailedNetworkHandler,
  setupFailedRequestHandler,
  setupSucceededRequestHandler,
} from '@/tools/jest/handlers';
import { renderScreen } from '@/tools/jest/utils';

import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {
  test('should display the entire list of cities', async () => {
    setupSucceededRequestHandler();

    renderScreen(HomeScreen, 'HomeScreen');

    const weatherIcons = await screen.findAllByTestId('weather-icon');
    expect(weatherIcons.length).toBe(cities.length);
  });

  test('should display an error message when weather data is empty', async () => {
    setupEmptyDataHandler();

    renderScreen(HomeScreen, 'HomeScreen');

    const errorMessage = await screen.findByText('No weather data');
    expect(errorMessage).toBeOnTheScreen();
  });

  test('should display an error message when weather data is wrong', async () => {
    setupFailedRequestHandler();

    renderScreen(HomeScreen, 'HomeScreen');

    const errorMessage = await screen.findByText(
      "Sorry, couldn't get weather data. Try again."
    );
    expect(errorMessage).toBeOnTheScreen();
  });

  test('should display an error message when weather data fails to fetch', async () => {
    setupFailedNetworkHandler();

    renderScreen(HomeScreen, 'HomeScreen');

    const errorMessage = await screen.findByText(
      "Sorry, couldn't get weather data. Try again."
    );
    expect(errorMessage).toBeOnTheScreen();
  });
});
