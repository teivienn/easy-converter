import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Button } from './button';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  icon: string;
  onPress?: () => void;
};

export const Fab = ({ icon = 'plus', onPress }: Props) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <Button style={styles.button} containerStyle={styles.container} onPress={onPress}>
      <Feather name={icon} size={35} color={theme.colors.background} />
    </Button>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 20,
    backgroundColor: theme.colors.fabBg,
    right: 16,
    bottom: 20,
    elevation: 3,
    shadowColor: theme.colors.primary,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
