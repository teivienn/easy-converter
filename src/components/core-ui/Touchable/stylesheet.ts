import { createStyleSheet } from 'react-native-unistyles';
import { StyleSheet } from 'react-native';

export const stylesheet = createStyleSheet(() => ({
  overflowHidden: {
    overflow: 'hidden',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
}));
