import { PropsWithChildren } from 'react';
import {
  Pressable,
  useColorScheme,
  Platform,
  StyleSheet,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

const androidRipple = {
  borderless: true,
  foreground: true,
  radius: 20,
};

export const IconButton = ({
  children,
  disabled,
  style,
  ...rest
}: PropsWithChildren<
  Omit<PressableProps, 'android_ripple' | 'hitSlop'> & {
    style?: StyleProp<ViewStyle>;
  }
>) => {
  const scheme = useColorScheme();

  return (
    <Pressable
      disabled={disabled}
      accessibilityRole="button"
      style={[styles.container, disabled && styles.disabled, style]}
      android_ripple={{
        ...androidRipple,
        color: scheme === 'dark' ? 'rgba(255, 255, 255, .32)' : 'rgba(0, 0, 0, .32)',
      }}
      hitSlop={Platform.select({
        ios: undefined,
        default: { top: 16, right: 16, bottom: 16, left: 16 },
      })}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});
