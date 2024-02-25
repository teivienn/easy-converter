import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    borderWidth: 1,
    height: 100,
    borderColor: theme.colors.text,
    paddingHorizontal: 20,
  },
  container: {
    height: 100,
    marginHorizontal: 20,
    borderRadius: 30,
  },
  text: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
}));
