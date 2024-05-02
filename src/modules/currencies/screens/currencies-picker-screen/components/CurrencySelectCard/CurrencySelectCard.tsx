import { Image, Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styleheet';
import { Touchable } from '~/components/core-ui/Touchable';
import type { CurrencyCodes } from '~/types';

type CurrencySelectCardProps = {
  name: string;
  Icon: number;
  selected: boolean;
  code: CurrencyCodes;
  onSelect: (code: CurrencyCodes) => void;
};

export const CurrencySelectCard = ({
  Icon,
  name,
  selected,
  code,
  onSelect,
}: CurrencySelectCardProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Touchable
      style={[styles.container, selected && styles.selected]}
      onPress={() => onSelect(code)}
    >
      <View style={styles.view}>
        <Image source={Icon} style={styles.icon} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </Touchable>
  );
};
