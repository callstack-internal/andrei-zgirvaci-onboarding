import { CityWeatherData } from '@/lib/weather';

export const NORMALIZED_WEATHER_DATA: CityWeatherData = {
  cityId: 703448,
  cityName: 'Kyiv',
  weatherCondition: 'Clouds',
  temperature: -2.98,
  weatherIconName: '04n',
  humidity: 83,
  pressure: 1022,
  windSpeed: 2.88,
  cloudCover: 96,
};

export const RAW_WEATHER_DATA = {
  cnt: 11,
  list: [
    {
      coord: { lon: 30.5167, lat: 50.4333 },
      sys: {
        country: 'UA',
        timezone: 7200,
        sunrise: 1700630566,
        sunset: 1700661927,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      main: {
        temp: -2.98,
        feels_like: -6.96,
        temp_min: -4.63,
        temp_max: -0.24,
        pressure: 1022,
        humidity: 83,
      },
      visibility: 10000,
      wind: { speed: 2.88, deg: 346 },
      clouds: { all: 96 },
      dt: 1700665746,
      id: 703448,
      name: 'Kyiv',
    },
    {
      coord: { lon: 34.8003, lat: 50.9216 },
      sys: {
        country: 'UA',
        timezone: 7200,
        sunrise: 1700629650,
        sunset: 1700660786,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      main: {
        temp: -4.12,
        feels_like: -9.01,
        temp_min: -4.12,
        temp_max: -4.12,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1002,
        humidity: 43,
      },
      visibility: 10000,
      wind: { speed: 3.6, deg: 331 },
      clouds: { all: 96 },
      dt: 1700665746,
      id: 692194,
      name: 'Sumy',
    },
    {
      coord: { lon: 21.0118, lat: 52.2298 },
      sys: {
        country: 'PL',
        timezone: 3600,
        sunrise: 1700633282,
        sunset: 1700663774,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      main: {
        temp: -2.24,
        feels_like: -6.28,
        temp_min: -3.12,
        temp_max: -1.21,
        pressure: 1025,
        humidity: 74,
      },
      visibility: 10000,
      wind: { speed: 3.09, deg: 290 },
      clouds: { all: 0 },
      dt: 1700665747,
      id: 756135,
      name: 'Warsaw',
    },
    {
      coord: { lon: 17.0333, lat: 51.1 },
      sys: {
        country: 'PL',
        timezone: 3600,
        sunrise: 1700633961,
        sunset: 1700665005,
      },
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
      ],
      main: {
        temp: -1.62,
        feels_like: -4.42,
        temp_min: -3.99,
        temp_max: -1,
        pressure: 1032,
        humidity: 88,
      },
      visibility: 10000,
      wind: { speed: 2.06, deg: 320 },
      clouds: { all: 20 },
      dt: 1700665760,
      id: 3081368,
      name: 'Wroclaw',
    },
    {
      coord: { lon: 14.4208, lat: 50.088 },
      sys: {
        country: 'CZ',
        timezone: 3600,
        sunrise: 1700634354,
        sunset: 1700665866,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 0.4,
        feels_like: -2.62,
        temp_min: -0.96,
        temp_max: 1.65,
        pressure: 1023,
        humidity: 87,
      },
      visibility: 10000,
      wind: { speed: 2.57, deg: 360 },
      clouds: { all: 100 },
      dt: 1700665749,
      id: 3067696,
      name: 'Prague',
    },
    {
      coord: { lon: 14.4743, lat: 48.9745 },
      sys: {
        country: 'CZ',
        timezone: 3600,
        sunrise: 1700634096,
        sunset: 1700666098,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 1.17,
        feels_like: 1.17,
        temp_min: 0.07,
        temp_max: 1.38,
        pressure: 1023,
        humidity: 83,
      },
      visibility: 10000,
      wind: { speed: 0.89, deg: 0 },
      clouds: { all: 100 },
      dt: 1700665749,
      id: 3077916,
      name: 'Ceske Budejovice',
    },
    {
      coord: { lon: 13.4105, lat: 52.5244 },
      sys: {
        country: 'DE',
        timezone: 3600,
        sunrise: 1700635183,
        sunset: 1700665522,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      main: {
        temp: 1.15,
        feels_like: -1.39,
        temp_min: -0.51,
        temp_max: 2.19,
        pressure: 1016,
        humidity: 69,
      },
      visibility: 10000,
      wind: { speed: 2.24, deg: 195 },
      clouds: { all: 0 },
      dt: 1700665750,
      id: 2950159,
      name: 'Berlin',
    },
    {
      coord: { lon: 11.5755, lat: 48.1374 },
      sys: {
        country: 'DE',
        timezone: 3600,
        sunrise: 1700634617,
        sunset: 1700666970,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 2.06,
        feels_like: 2.06,
        temp_min: 1,
        temp_max: 2.57,
        pressure: 1010,
        humidity: 88,
      },
      visibility: 10000,
      wind: { speed: 0.45, deg: 79 },
      clouds: { all: 99 },
      dt: 1700665752,
      id: 2867714,
      name: 'Munich',
    },
    {
      coord: { lon: 6.0834, lat: 50.7766 },
      sys: {
        country: 'DE',
        timezone: 3600,
        sunrise: 1700636516,
        sunset: 1700667707,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 5.2,
        feels_like: 5.2,
        temp_min: 4.58,
        temp_max: 6.08,
        pressure: 1027,
        humidity: 79,
      },
      visibility: 10000,
      wind: { speed: 0.89, deg: 296 },
      clouds: { all: 99 },
      dt: 1700665750,
      id: 3247449,
      name: 'Aachen',
    },
    {
      coord: { lon: -120.5015, lat: 47.5001 },
      sys: {
        country: 'US',
        timezone: -28800,
        sunrise: 1700666217,
        sunset: 1700698778,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      main: {
        temp: 1.64,
        feels_like: 1.64,
        temp_min: -1.08,
        temp_max: 7.03,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 965,
        humidity: 88,
      },
      visibility: 10000,
      wind: { speed: 1.01, deg: 303 },
      clouds: { all: 94 },
      dt: 1700666143,
      id: 5815135,
      name: 'Washington',
    },
    {
      coord: { lon: -74.006, lat: 40.7143 },
      sys: {
        country: 'US',
        timezone: -18000,
        sunrise: 1700653849,
        sunset: 1700688824,
      },
      weather: [{ id: 701, main: 'Mist', description: 'mist', icon: '50d' }],
      main: {
        temp: 10.06,
        feels_like: 9.39,
        temp_min: 8.24,
        temp_max: 11.69,
        pressure: 1006,
        humidity: 87,
      },
      visibility: 10000,
      wind: { speed: 4.92, deg: 293 },
      clouds: { all: 100 },
      dt: 1700666120,
      id: 5128581,
      name: 'New York',
    },
  ],
};