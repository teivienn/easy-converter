import { type UnistylesTheme } from 'react-native-unistyles';

export const getTouchableRippleColors = ({
  rippleColor,
  theme,
}: {
  theme: UnistylesTheme;
  rippleColor?: string;
}) => {
  let calculatedRippleColor: string;

  if (rippleColor) {
    calculatedRippleColor = rippleColor;
  } else {
    calculatedRippleColor = theme.colors.rippleColor;
  }

  return {
    calculatedRippleColor,
  };
};
