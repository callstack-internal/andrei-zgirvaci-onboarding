import { UnistylesRegistry } from 'react-native-unistyles';

import { lightTheme } from '../constants/theme';

const breakpoints = {
  xs: 0,
};

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
  light: typeof lightTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
})
  .addBreakpoints(breakpoints)
  .addConfig({
    adaptiveThemes: true,
  });
