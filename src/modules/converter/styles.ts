import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 10,
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  scroll: {
    backgroundColor: theme.colors.secondary,
    paddingTop: 16,
    flex: 1,
  },
}));
