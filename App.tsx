import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UnistylesTheme } from 'react-native-unistyles';

import Navigator from '@/app/navigation';
import { theme } from '@/constants/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20,
    },
  },
});

function App() {
  return (
    <UnistylesTheme theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </QueryClientProvider>
    </UnistylesTheme>
  );
}

export default App;
