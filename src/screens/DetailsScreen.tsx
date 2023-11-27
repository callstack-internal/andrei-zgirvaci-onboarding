import React from 'react';
import { Text, View } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';

import { RootStackParamList } from '@/app/navigation';
import CityWeather from '@/components/CityWeather';
import Separator from '@/components/Separator';
import cities from '@/constants/cities';
import { createStyleSheet, useStyles } from '@/constants/styles';
import { fetchWeatherDataForCities } from '@/lib/weather';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
type DetailsScreenRouteProp = Props['route'];

export default function DetailsScreen() {
  const { styles, theme } = useStyles(stylesheet);

  const route = useRoute<DetailsScreenRouteProp>();

  const { cityId } = route.params;

  const { data: detailedCityWeatherData, isPending } = useQuery({
    queryKey: ['weather_data', 'all_cities'],
    queryFn: () => fetchWeatherDataForCities(cities),
    select: (citiesWeatherData) =>
      citiesWeatherData.find(
        (cityWeatherData) => cityWeatherData.cityId === cityId
      ),
  });

  if (isPending) {
    return <Text style={theme.components.centerText}>Loading...</Text>;
  }

  if (detailedCityWeatherData == null) {
    return (
      <Text style={theme.components.errorMessage}>
        Sorry, couldn't get weather data. Try again.
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.weatherContainer}>
        <CityWeather {...detailedCityWeatherData} />
      </View>

      <Separator />

      <View style={styles.weatherDetailsContainer}>
        <Text style={styles.weatherDetailsName}>Humidity</Text>

        <Text style={styles.weatherDetailsValue}>
          {detailedCityWeatherData.humidity} %
        </Text>
      </View>

      <Separator />

      <View style={styles.weatherDetailsContainer}>
        <Text style={styles.weatherDetailsName}>Pressure</Text>

        <Text style={styles.weatherDetailsValue}>
          {detailedCityWeatherData.pressure} hPa
        </Text>
      </View>

      <Separator />

      <View style={styles.weatherDetailsContainer}>
        <Text style={styles.weatherDetailsName}>Wind Speed</Text>

        <Text style={styles.weatherDetailsValue}>
          {detailedCityWeatherData.windSpeed} mph
        </Text>
      </View>

      <Separator />

      <View style={styles.weatherDetailsContainer}>
        <Text style={styles.weatherDetailsName}>Cloud Cover</Text>

        <Text style={styles.weatherDetailsValue}>
          {detailedCityWeatherData.cloudCover} %
        </Text>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  weatherContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: theme.safeMargins.horizontal,
  },
  weatherDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: theme.safeMargins.horizontal,
  },
  weatherDetailsName: {
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.4,
  },
  weatherDetailsValue: {
    fontSize: 16,
  },
}));
