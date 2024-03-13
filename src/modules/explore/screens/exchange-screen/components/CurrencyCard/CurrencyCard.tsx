import { View, Image, Text } from 'react-native';
import type { RatesModel } from '../../../../../../lib/rates-api/rates-model';
import { currencies } from '../../../../../../lib/currencies/currencies';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './stylesheet';
import { MaskedNumberInput } from '../../../../../../components/core-ui/MaskedNumberInput';

type CurrencyCardProps = {
  currencyRate: RatesModel;
  baseRate: number;
  setBaseRate: (value: number) => void;
};

export const CurrencyCard = ({
  currencyRate,
  baseRate,
  setBaseRate,
}: CurrencyCardProps) => {
  const { styles } = useStyles(stylesheet);
  const { code, rate, nominal } = currencyRate;

  const onChange = (value: number) => {
    setBaseRate((rate / nominal) * Number(value));
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={currencies[code].Icon} style={styles.icon} />
        <Text style={styles.name}>{code}</Text>
      </View>
      <MaskedNumberInput value={(nominal / rate) * baseRate} onChangeText={onChange} />
    </View>
  );
};
