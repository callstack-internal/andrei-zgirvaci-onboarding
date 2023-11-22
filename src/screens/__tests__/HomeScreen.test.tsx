import { screen } from '@testing-library/react-native';

import cities from '@/constants/cities';
import {
  setupEmptyDataHandler,
  setupFailedNetworkHandler,
  setupFailedRequestHandler,
  setupSucceededRequestHandler,
} from '@/tools/jest/handlers';
import { renderScreen } from '@/tools/jest/render';

import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {
  it('it should render the entire list of cities', async () => {
    setupSucceededRequestHandler();

    renderScreen(HomeScreen, 'HomeScreen');

    const weatherIcons = await screen.findAllByTestId('weather-icon');
    expect(weatherIcons.length).toBe(cities.length);
  });

  it('it should render and empty list of cities', async () => {
    setupEmptyDataHandler();

    renderScreen(HomeScreen, 'HomeScreen');

    const errorMessage = await screen.findByText('No weather data');
    expect(errorMessage).toBeOnTheScreen();
  });

  it('it should display an error message when weather data is wrong', async () => {
    setupFailedRequestHandler();

    renderScreen(HomeScreen, 'HomeScreen');

    const errorMessage = await screen.findByText(
      "Sorry, couldn't get weather data. Try again."
    );
    expect(errorMessage).toBeOnTheScreen();
  });

  it('it should display an error message when weather data fails to fetch', async () => {
    setupFailedNetworkHandler();

    renderScreen(HomeScreen, 'HomeScreen');

    const errorMessage = await screen.findByText(
      "Sorry, couldn't get weather data. Try again."
    );
    expect(errorMessage).toBeOnTheScreen();
  });
});
