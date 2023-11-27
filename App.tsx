import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UnistylesTheme } from 'react-native-unistyles';

import RootStack from '@/app/navigation';
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
        <RootStack />
      </QueryClientProvider>
    </UnistylesTheme>
  );
}

export default App;
