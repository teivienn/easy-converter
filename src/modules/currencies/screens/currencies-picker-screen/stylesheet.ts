import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(() => ({
  container: {
    paddingHorizontal: 13,
    flexGrow: 1,
    paddingTop: 150,
    paddingBottom: 60,
  },
  scroll: {
    flex: 1,
  },
}));
