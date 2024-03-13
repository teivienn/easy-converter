import { Text } from 'react-native';
import type { ReactNode } from 'react';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { Touchable } from '../../../../components/core-ui/Touchable';

type ProviderButtonProps = {
  icon: ReactNode;
  text: string;
  onPress?: () => void;
};

export const ProviderButton = ({ onPress, text, icon }: ProviderButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Touchable onPress={onPress} style={styles.container}>
      <>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </>
    </Touchable>
  );
};
