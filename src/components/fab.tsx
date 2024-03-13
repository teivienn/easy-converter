import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Feather from 'react-native-vector-icons/Feather';
import { Touchable } from './core-ui/Touchable';

type Props = {
  icon: string;
  onPress?: () => void;
};

export const Fab = ({ icon = 'plus', onPress }: Props) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <Touchable
      rippleColor={theme.components.fab.rippleColor}
      style={styles.button}
      onPress={onPress}
    >
      <Feather name={icon} size={35} color={theme.colors.background} />
    </Touchable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  button: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 20,
    backgroundColor: theme.colors.fabBg,
    right: 16,
    bottom: 20,
    elevation: 3,
    shadowColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
