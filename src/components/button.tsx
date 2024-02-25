import {
  Pressable,
  View,
  type PressableProps,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

export const Button = ({
  children,
  style,
  containerStyle,
  ...rest
}: Omit<PressableProps, 'android_ripple'> & {
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
        {...rest}
        style={style}
        android_ripple={{
          borderless: true,
          color: 'rgba(225, 223, 223, 0.32)',
        }}
      >
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});
