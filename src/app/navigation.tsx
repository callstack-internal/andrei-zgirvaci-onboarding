import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '@/screens/DetailsScreen';
import HomeScreen from '@/screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { cityId: number };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function Navigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Weather' }}
        />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
