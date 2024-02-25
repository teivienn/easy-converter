import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 10,
    paddingHorizontal: 16,
    flexGrow: 1,
    paddingBottom: 30,
  },
  scroll: {
    paddingTop: 16,
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 22,
  },
  headerText: {
    textAlign: 'right',
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text,
  },
}));
