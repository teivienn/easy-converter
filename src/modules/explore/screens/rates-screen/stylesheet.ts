import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: 13,
    flexGrow: 1,
    paddingBottom: 40,
  },
  scroll: {
    flex: 1,
  },
  column: {
    justifyContent: 'flex-start',
  },
  header: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  headerText: {
    textAlign: 'right',
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text,
  },
}));
