import '@testing-library/react-native/extend-expect';

import { server } from './server';

beforeAll(() => server.listen());

beforeEach(() => jest.useFakeTimers());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
