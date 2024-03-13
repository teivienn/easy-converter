import { createStyleSheet } from 'react-native-unistyles';

const borderRadius = 15;

export const stylesheet = createStyleSheet((theme) => ({
  statuses: {
    variants: {
      focused: {
        true: {
          borderColor: theme.input.border,
        },
        false: {
          borderColor: 'transparent',
        },
      },
    },
  },
  container: {
    borderRadius,
    borderWidth: 1,
    flex: 1,
    height: 50,
  },
  input: {
    fontSize: 16,
    borderRadius,
    textAlign: 'right',
    paddingHorizontal: 10,
    color: theme.colors.text,
    backgroundColor: theme.input.background,
  },
}));
