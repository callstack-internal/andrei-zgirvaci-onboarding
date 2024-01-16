import React from 'react';
import { Pressable, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { RootStackParamList } from '@/app/navigation';
import CityWeather from '@/components/CityWeather';
import Separator from '@/components/Separator';
import cities from '@/constants/cities';
import { CityWeatherData, fetchWeatherDataForCities } from '@/lib/weather';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = Props['navigation'];

export default function HomeScreen() {
  const { styles, theme } = useStyles(stylesheet);

  const insets = useSafeAreaInsets();

  const {
    data: citiesWeatherData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['weather_data', 'all_cities'],
    queryFn: () => fetchWeatherDataForCities(cities),
  });

  const renderItem = React.useCallback((props: { item: CityWeatherData }) => {
    return <WeatherListItem {...props} />;
  }, []);

  if (isPending) {
    return <Text style={theme.components.centerText}>Loading...</Text>;
  }

  if (citiesWeatherData == null) {
    return (
      <Text style={theme.components.errorMessage}>
        Sorry, couldn't get weather data. Try again.
      </Text>
    );
  }

  return (
    <FlashList
      contentContainerStyle={styles.weatherListContentContainer(insets)}
      data={citiesWeatherData}
      refreshing={isPending}
      onRefresh={refetch}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
      ListEmptyComponent={EmptyListComponent}
      estimatedItemSize={70}
    />
  );
}

function EmptyListComponent() {
  const { theme } = useStyles(stylesheet);

  return <Text style={theme.components.errorMessage}>No weather data</Text>;
}

function WeatherListItem({ item }: { item: CityWeatherData }) {
  const { styles } = useStyles(stylesheet);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <Pressable
      style={styles.weatherListItemContainer}
      onPress={() => navigation.navigate('Details', { cityId: item.cityId })}
      testID={`weather-list-item-${item.cityName}`}
    >
      <CityWeather {...item} />

      <ChevronRight color="lightgray" size={30} />
    </Pressable>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  weatherListContentContainer: (insets: EdgeInsets) => ({
    paddingBottom: insets.bottom,
  }),
  weatherListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: theme.safeMargins.horizontal,
  },
}));
