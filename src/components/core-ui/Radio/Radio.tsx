import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './stylesheet';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type RadioProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
  disabled?: boolean;
};

export const Radio = ({ value, onChange, label, disabled }: RadioProps) => {
  const animated = useSharedValue(value ? 1 : 0);
  const { theme, styles } = useStyles(stylesheet);

  useEffect(() => {
    animated.value = withTiming(value ? 1 : 0, { duration: 300 });
  }, [value, animated]);

  const animatedCheckStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animated.value,
      [0, 1],
      [theme.colors.secondary, theme.colors.text],
    ),
  }));

  const onUpdateValue = () => {
    if (disabled) {
      return;
    }
    onChange(!value);
  };

  return (
    <View style={[styles.view, disabled && styles.disabled]}>
      <AnimatedPressable style={[styles.container]} onPress={onUpdateValue}>
        <Animated.View style={[styles.check, animatedCheckStyle]} />
      </AnimatedPressable>
      <Text suppressHighlighting style={styles.span} onPress={onUpdateValue}>
        {label}
      </Text>
    </View>
  );
};
