import { createUnistyles } from 'react-native-unistyles';

import { theme } from './theme';

const breakpoints = {
  xs: 0,
};

export const { createStyleSheet, useStyles } = createUnistyles<
  typeof breakpoints,
  typeof theme
>(breakpoints);
