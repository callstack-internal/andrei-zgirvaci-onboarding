import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react-native';
import { UnistylesTheme } from 'react-native-unistyles';

import { theme } from '@/constants/theme';

export function renderScreen(
  component: React.ComponentType,
  name: string,
  initialParams: {} | undefined = undefined
) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const Stack = createNativeStackNavigator();

  return render(
    <UnistylesTheme theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={name}
              component={component}
              initialParams={initialParams}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </UnistylesTheme>
  );
}
