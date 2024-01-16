import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import RootStack from '@/app/navigation';

import '@/app/unistyles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootStack />
    </QueryClientProvider>
  );
}

export default App;
