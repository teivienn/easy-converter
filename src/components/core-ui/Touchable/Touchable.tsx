import { type ForwardedRef, forwardRef, Children, type PropsWithChildren } from 'react';
import {
  Platform,
  View,
  Pressable as PressableNative,
  type PressableProps as PressableNativeProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { stylesheet } from './stylesheet';
import { getTouchableRippleColors } from './utils';
import { useStyles } from 'react-native-unistyles';

type PressableProps = Omit<PressableNativeProps, 'android_ripple' | 'style'>;

type TouchableRippleProps = PressableProps & {
  borderless?: boolean;
  rippleColor?: string;
  style?: StyleProp<ViewStyle>;
};

const TouchableBase = (
  {
    borderless = true,
    children,
    rippleColor,
    style,
    ...rest
  }: PropsWithChildren<TouchableRippleProps>,
  ref: ForwardedRef<View>,
) => {
  const { styles, theme } = useStyles(stylesheet);

  const { calculatedRippleColor } = getTouchableRippleColors({
    rippleColor,
    theme,
  });

  if (TouchableBase.supported) {
    const rippleConfig = {
      borderless,
      color: calculatedRippleColor,
      foreground: borderless,
    };

    return (
      <PressableNative
        android_ripple={rippleConfig}
        ref={ref}
        style={[borderless && styles.overflowHidden, style]}
        {...rest}
      >
        {Children.only(children)}
      </PressableNative>
    );
  }

  return (
    <PressableNative
      ref={ref}
      style={({ pressed }) => [
        borderless && styles.overflowHidden,
        pressed && {
          opacity: 0.8,
        },
        style,
      ]}
      testID="touchable"
      {...rest}
    >
      {Children.only(children)}
    </PressableNative>
  );
};

TouchableBase.supported = Platform.OS === 'android';

export const Touchable = forwardRef(TouchableBase);
