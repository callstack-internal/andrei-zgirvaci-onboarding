import cities from '@/constants/cities';
import { fetchWeatherDataForCities } from '@/lib/weather';

describe('weather', () => {
  it('fetches data from the API', async () => {
    const result = await fetchWeatherDataForCities(cities);

    expect(result.length).toStrictEqual(cities.length);
  });
});
