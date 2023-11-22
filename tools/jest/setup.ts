import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native-config', () => ({
  OPEN_WEATHER_API_BASE_URL: 'https://api.openweathermap.org',
  OPEN_WEATHER_API_KEY: 'a7d6ffec554893c131a6b88837279568',
}));

require('@shopify/flash-list/jestSetup');
