import { View, Text, Image } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import Input from 'react-native-currency-input';
import { Currencies } from '../../types';
import { useAllRates, useStore } from '../../lib/store';

type CurrencyInputProps = {
  Icon: number;
  name: Currencies;
};

export const CurrencyInput = ({ Icon, name }: CurrencyInputProps) => {
  const { styles, theme } = useStyles(stylesheet);
  const [main, setMain] = useStore((store) => [store.main, store.setMain]);
  const rate = useAllRates((store) => store.rates?.[name].value) || 1;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={Icon} style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          delimiter="."
          separator=","
          precision={2}
          minValue={0}
          value={main / rate}
          cursorColor={theme.colors.primary}
          onChangeValue={(v) => {
            if (v) {
              if (name === Currencies.RUB) {
                setMain(v);
              } else {
                setMain(v * rate);
              }
            }
          }}
          style={styles.input}
        />
      </View>
    </View>
  );
};
