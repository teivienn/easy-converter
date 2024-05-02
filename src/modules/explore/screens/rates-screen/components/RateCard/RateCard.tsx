import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './stylesheet';
import { Image, Text, View } from 'react-native';
import type { RatesModel } from '~/lib/rates-api/rates-model';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { currencies } from '~/lib/currencies/currencies';

type RateCardProps = RatesModel;

type ChangeIconProps = {
  change: number;
};

const ChangeIcon = ({ change }: ChangeIconProps) => {
  const { theme, styles } = useStyles(stylesheet);

  if (change < 0) {
    return (
      <AntDesign name="caretdown" color={theme.colors.red} style={styles.rateIcon} />
    );
  }
  if (change > 0) {
    return (
      <AntDesign name="caretup" color={theme.colors.green} style={styles.rateIcon} />
    );
  }

  return <Text style={[styles.rateIcon, { color: theme.colors.text }]}>~</Text>;
};

export const RateCard = ({ code, change }: RateCardProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={currencies[code].Icon} style={styles.icon} />
        <Text style={styles.name}>{code}</Text>
      </View>

      <View style={styles.info}>
        <ChangeIcon change={change} />
        <Text style={styles.change}>{change.toFixed(4)}</Text>
      </View>
    </View>
  );
};
