import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    shadowColor: theme.colors.secondary,
  },
  name: {
    color: theme.colors.text,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: 10,
    backgroundColor: theme.colors.secondary,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    width: 220,
    color: theme.colors.text,
  },
}));
