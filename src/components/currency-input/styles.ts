import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    shadowColor: theme.colors.secondary,
  },
  name: {
    color: theme.colors.text,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: 10,
    backgroundColor: theme.colors.secondary,
    flex: 1,
    marginLeft: 10,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: theme.colors.text,
  },
  icon: {
    width: 25,
    height: 25,
  },
}));
