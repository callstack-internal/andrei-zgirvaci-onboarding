import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UnistylesTheme } from 'react-native-unistyles';

import Navigator from '@/app/navigation';
import { theme } from '@/constants/theme';

function App() {
  return (
    <UnistylesTheme theme={theme}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </UnistylesTheme>
  );
}

export default App;
