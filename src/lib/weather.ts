import Config from 'react-native-config';
import axios from 'redaxios';
import invariant from 'tiny-invariant';

export type CityWeatherData = {
  cityId: number;
  cityName: string;
  weatherCondition: string;
  temperature: number;
  weatherIconName: string;
  humidity: number;
  pressure: number;
  windSpeed: number;
  cloudCover: number;
};

const client = axios.create({
  baseURL: Config.OPEN_WEATHER_API_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  params: {
    appid: Config.OPEN_WEATHER_API_KEY,
  },
});

export async function fetchWeatherDataForCities(cities: number[]) {
  const response = await client.get('/data/2.5/group', {
    params: {
      id: cities.join(','),
      units: 'metric',
    },
  });

  invariant(response.data.list != null, "Couldn't fetch data from OpenWeather");

  const citiesWeatherData: CityWeatherData[] = response.data.list.map(
    normalizeRawWeatherData
  );

  return citiesWeatherData;
}

export function normalizeRawWeatherData(data: any): CityWeatherData {
  return {
    cityId: data.id,
    cityName: data.name,
    weatherCondition: data.weather[0].main,
    temperature: data.main.temp,
    weatherIconName: data.weather[0].icon,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: data.wind.speed,
    cloudCover: data.clouds.all,
  };
}
