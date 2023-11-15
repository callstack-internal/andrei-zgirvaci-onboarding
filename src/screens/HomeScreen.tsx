import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import { ChevronRight } from 'lucide-react-native';
import FastImage from 'react-native-fast-image';

import cities from '@/constants/cities';
import { createStyleSheet, useStyles } from '@/constants/styles';

type WeatherItem = {
  id: string;
  iconName: string;
  cityName: string;
  description: string;
  temperature: number;
};

const DATA: WeatherItem[] = [
  {
    id: '1',
    iconName: '10d',
    cityName: 'New York',
    description: 'Raining',
    temperature: 55.2,
  },
];

function HomeScreen() {
  // const { styles } = useStyles(stylesheet);

  const renderItem = React.useCallback((props: { item: WeatherItem }) => {
    return <WeatherListItem {...props} />;
  }, []);

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
}

function WeatherListItem({
  item: { iconName: iconName, cityName, description, temperature },
}: {
  item: WeatherItem;
}) {
  const { styles } = useStyles(stylesheet);

  const weatherImageUrl = `https://openweathermap.org/img/wn/${iconName}@2x.png`;

  return (
    <View style={styles.weatherContainer}>
      <FastImage
        style={styles.weatherIcon}
        source={{
          uri: weatherImageUrl,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />

      <View>
        <Text style={styles.weatherCityName}>{cityName}</Text>
        <Text style={styles.weatherDescription}>{description}</Text>
      </View>

      <View style={styles.weatherTemperatureContainer}>
        <Text>{temperature} °F</Text>
      </View>

      <ChevronRight color="lightgray" size={30} />
    </View>
  );
}

function ListItemSeparator() {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.listItemSeparator} />;
}

export default HomeScreen;

const stylesheet = createStyleSheet((theme) => ({
  // container: {
  //   ...theme.components.container,
  //   paddingTop: 40,
  //   paddingBottom: 20,
  //   paddingHorizontal: 20,
  // },
  listItemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gainsboro',
  },
  // Weather List Item
  weatherContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
