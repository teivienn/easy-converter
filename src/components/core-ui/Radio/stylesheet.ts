import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderRadius: 999,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.text,
  },
  check: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    width: 14,
    height: 14,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  span: {
    fontWeight: '500',
    color: theme.colors.text,
  },
}));
