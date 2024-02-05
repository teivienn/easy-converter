import { TouchableOpacity, View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useStore } from '../../../lib/store';
import { Currencies } from '../../../types';

type ValuteCardProps = {
  code: Currencies;
  name: string;
  value: number;
  Icon: JSX.Element;
  selected: boolean;
};

export const ValuteCard = ({ Icon, code, name, selected }: ValuteCardProps) => {
  const { styles } = useStyles(stylesheet);
  const [setRate] = useStore((store) => [store.setRate]);

  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selected]}
      onPress={() => setRate(code)}
    >
      <View style={styles.row}>
        {Icon}
        <Text style={styles.code}>{code}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    shadowColor: theme.colors.secondary,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  code: {
    color: theme.colors.text,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  name: {
    flex: 1,
    color: theme.colors.text,
    opacity: 0.7,
    textAlign: 'right',
  },
  selected: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
}));
