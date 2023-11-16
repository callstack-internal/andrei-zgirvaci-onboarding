import React from 'react';
import { StyleSheet, View } from 'react-native';

import { createStyleSheet, useStyles } from '@/constants/styles';

export default function Separator() {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.listItemSeparator} />;
}

const stylesheet = createStyleSheet(() => ({
  listItemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gainsboro',
  },
}));
