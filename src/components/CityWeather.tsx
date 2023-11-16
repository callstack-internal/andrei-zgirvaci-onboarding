import React from 'react';
import { Text, View } from 'react-native';

import FastImage from 'react-native-fast-image';

import { createStyleSheet, useStyles } from '@/constants/styles';
import { CityWeatherData } from '@/lib/weather';

export default function CityWeather({
  cityName,
  weatherCondition,
  temperature,
  weatherIconName,
}: CityWeatherData) {
  const { styles } = useStyles(stylesheet);

  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconName}@2x.png`;

  return (
    <View style={styles.weatherContainer}>
      <FastImage
        style={styles.weatherIcon}
        source={{
          uri: weatherIconUrl,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />

      <View>
        <Text style={styles.weatherCityName}>{cityName}</Text>
        <Text style={styles.weatherDescription}>{weatherCondition}</Text>
      </View>

      <View style={styles.weatherTemperatureContainer}>
        <Text>{temperature} °F</Text>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(() => ({
  weatherContainer: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherIcon: {
    height: '100%',
    aspectRatio: 1,
    marginRight: 5,
  },
  weatherCityName: {
    fontSize: 18,
  },
  weatherDescription: {
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.4,
  },
  weatherTemperatureContainer: {
    marginLeft: 'auto',
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'gainsboro',
  },
}));
