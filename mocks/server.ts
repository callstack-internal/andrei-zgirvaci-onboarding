import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/native';

const OPEN_WEATHER_API_BASE_URL = 'https://api.openweathermap.org';

const handlers = [
  http.get(`${OPEN_WEATHER_API_BASE_URL}/data/2.5/group`, () => {
    return new HttpResponse(null, { status: 500 });
  }),
];

export const server = setupServer(...handlers);
