import { View } from 'react-native';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import { useAnimatedStyle } from 'react-native-reanimated';

export const KeyboardAware = () => {
  const { height } = useReanimatedKeyboardAnimation();

  const styles = useAnimatedStyle(
    () => ({
      height: Math.abs(height.value),
    }),
    [],
  );

  return <View style={styles} />;
};
