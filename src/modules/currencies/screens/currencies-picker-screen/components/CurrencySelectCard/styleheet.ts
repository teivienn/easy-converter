import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  icon: {
    height: 30,
    width: 30,
  },
  container: {
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: 'transparent',
  },
  selected: {
    borderColor: theme.colors.text,
  },
  view: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  text: {
    color: theme.colors.text,
    flex: 1,
  },
}));
