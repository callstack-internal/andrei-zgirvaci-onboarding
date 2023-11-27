import '@testing-library/react-native/extend-expect';

import { server } from './server';

beforeAll(() => {
  jest.useFakeTimers();
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
