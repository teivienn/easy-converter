import { Text } from 'react-native';
import { Button } from '../../../../components/button';
import type { ReactNode } from 'react';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';

type ProviderButtonProps = {
  icon: ReactNode;
  text: string;
  onPress?: () => void;
};

export const ProviderButton = ({ onPress, text, icon }: ProviderButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Button onPress={onPress} style={styles.button} containerStyle={styles.container}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};
