import type { ReactNode } from 'react';
import { Animated, type StyleProp, type ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = {
  label?: string;
  color: string;
  labelStyle: StyleProp<ViewStyle>;
  icon?: ReactNode | null;
};

export const TabBarLabel = ({ label, labelStyle, color, icon }: Props) => {
  const { styles } = useStyles(stylesheet);
  if (!label) {
    return null;
  }

  return (
    <Animated.View style={styles.container}>
      {icon}
      <Animated.Text
        style={[styles.label, icon ? styles.labelIcon : null, labelStyle, { color }]}
      >
        {label}
      </Animated.Text>
    </Animated.View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  label: {
    color: theme.colors.text,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  labelIcon: {
    marginTop: -5,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 30,
  },
}));
