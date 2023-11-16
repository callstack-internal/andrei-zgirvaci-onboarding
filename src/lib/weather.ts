import axios from 'redaxios';

export type CityWeatherData = {
  cityId: number;
  cityName: string;
  weatherCondition: string;
  temperature: number;
  weatherIconName: string;
};

export type DetailedCityWeatherData = CityWeatherData & {
  humidity: number;
  pressure: number;
  windSpeed: number;
  cloudCover: number;
};

const API_KEY = 'a7d6ffec554893c131a6b88837279568';

export async function fetchWeatherDataForCities(cities: number[]) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/group?id=${cities.join(
    ','
  )}&appid=${API_KEY}`;

  const response = await axios.get(apiUrl);

  const citiesWeatherData: CityWeatherData[] = [];

  response.data.list.forEach((item: any) => {
    const cityWeatherData = {
      cityId: item.id,
      cityName: item.name,
      weatherCondition: item.weather[0].main,
      temperature: item.main.temp,
      weatherIconName: item.weather[0].icon,
    };

    citiesWeatherData.push(cityWeatherData);
  });

  return citiesWeatherData;
}

export async function fetchWeatherDataForCity(cityId: number) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`;

  const response = await axios.get(apiUrl);

  const cityWeatherData: DetailedCityWeatherData = {
    cityId: response.data.id,
    cityName: response.data.name,
    weatherCondition: response.data.weather[0].main,
    temperature: response.data.main.temp,
    weatherIconName: response.data.weather[0].icon,
    humidity: response.data.main.humidity,
    pressure: response.data.main.pressure,
    windSpeed: response.data.wind.speed,
    cloudCover: response.data.clouds.all,
  };

  return cityWeatherData;
}
