import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  iconContainer: {
    alignItems: 'center',
    paddingTop: 80,
  },
  welcomeMessageTitle: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: theme.colors.text,
  },
  welcomeMessage: {
    paddingTop: 30,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    opacity: 0.62,
    color: theme.colors.text,
    paddingHorizontal: 30,
  },
  groupContainer: {
    paddingBottom: 120,
    flex: 1,
    justifyContent: 'flex-end',
    gap: 15,
  },
  container: {
    flex: 1,
  },
}));
