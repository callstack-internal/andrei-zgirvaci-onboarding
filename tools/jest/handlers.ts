import { http, HttpResponse } from 'msw';
import Config from 'react-native-config';

import { RAW_WEATHER_DATA } from './data';
import { server } from './server';

const OPEN_WEATHER_API_BASE_URL = Config.OPEN_WEATHER_API_BASE_URL;

export const setupSucceededRequestHandler = () => {
  server.use(
    http.get(`${OPEN_WEATHER_API_BASE_URL}/data/2.5/group`, () => {
      return HttpResponse.json(RAW_WEATHER_DATA, { status: 200 });
    })
  );
};

export const setupEmptyDataHandler = () => {
  server.use(
    http.get(`${OPEN_WEATHER_API_BASE_URL}/data/2.5/group`, () => {
      return HttpResponse.json({ list: [] }, { status: 200 });
    })
  );
};

export const setupFailedRequestHandler = () => {
  server.use(
    http.get(`${OPEN_WEATHER_API_BASE_URL}/data/2.5/group`, () => {
      return HttpResponse.json({}, { status: 500 });
    })
  );
};

export const setupFailedNetworkHandler = () => {
  server.use(
    http.get(`${OPEN_WEATHER_API_BASE_URL}/data/2.5/group`, () => {
      return HttpResponse.error();
    })
  );
};
