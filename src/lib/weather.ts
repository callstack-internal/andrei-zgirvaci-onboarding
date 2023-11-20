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
  baseURL: 'https://api.openweathermap.org/',
  headers: {
    'content-type': 'application/json',
  },
});

export async function fetchWeatherDataForCities(cities: number[]) {
  const response = await client.get('data/2.5/group', {
    params: {
      id: cities.join(','),
      appid: Config.OPEN_WEATHER_API_KEY,
    },
  });

  invariant(response.data.list != null, "Couldn't fetch data from OpenWeather");

  const citiesWeatherData: CityWeatherData[] = [];

  response.data.list.forEach((item: any) => {
    const cityWeatherData = {
      cityId: item.id,
      cityName: item.name,
      weatherCondition: item.weather[0].main,
      temperature: item.main.temp,
      weatherIconName: item.weather[0].icon,
      humidity: item.main.humidity,
      pressure: item.main.pressure,
      windSpeed: item.wind.speed,
      cloudCover: item.clouds.all,
    };

    citiesWeatherData.push(cityWeatherData);
  });

  return citiesWeatherData;
}
