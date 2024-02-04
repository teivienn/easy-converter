import { ScrollView } from 'react-native';
import { currencies } from '../../lib/currencies/currencies';
import { CurrencyInput } from '../../components/currency-input/currency-input';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';

export const Converter = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      {currencies.map(({ name, Icon }) => (
        <CurrencyInput key={name} Icon={Icon} name={name} />
      ))}
    </ScrollView>
  );
};
