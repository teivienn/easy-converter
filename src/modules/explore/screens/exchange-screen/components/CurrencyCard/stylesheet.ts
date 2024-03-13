import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  icon: {
    width: 30,
    height: 30,
  },
  name: {
    color: theme.colors.text,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '400',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
