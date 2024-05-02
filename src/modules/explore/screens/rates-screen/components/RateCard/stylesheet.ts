import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    // borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: theme.colors.inputBackground,
  },
  icon: {
    width: 15,
    height: 15,
  },
  name: {
    color: theme.colors.text,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  rateIcon: {
    marginRight: 5,
    opacity: 0.8,
  },
  change: {
    color: theme.colors.text,
    opacity: 0.8,
  },
}));
