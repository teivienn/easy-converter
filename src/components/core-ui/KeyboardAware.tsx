import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

export const KeyboardAware = () => {
  const { height } = useReanimatedKeyboardAnimation();

  const styles = useAnimatedStyle(
    () => ({
      height: Math.abs(height.value),
    }),
    [],
  );

  return <Animated.View style={styles} />;
};
