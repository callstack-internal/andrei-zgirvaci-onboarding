import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigator from '@/app/navigation';

function App() {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}

export default App;
