import { StyleSheet, View } from 'react-native';
import { useStore } from '../../../../lib/app-store';
import { useMemo, useState } from 'react';
import { CurrencyCard } from './components/CurrencyCard';
import { Fab } from '../../../../components/fab';
import { useNavigation } from '@react-navigation/native';
import { InfinityList } from '../../../../components/core-ui/InfinityList';

export const ExchangeScreen = () => {
  const { rates, currencies } = useStore();
  const { navigate } = useNavigation();

  const [baseRate, setBaseRate] = useState(0);

  const data = useMemo(() => {
    return currencies.map((key) => {
      return rates[key];
    });
  }, [currencies, rates]);

  return (
    <>
      <InfinityList
        itemHeight={70}
        style={styles.scroll}
        contentContainerStyle={styles.container}
        data={data}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <CurrencyCard
            currencyRate={item}
            baseRate={baseRate}
            setBaseRate={setBaseRate}
          />
        )}
      />
      <Fab onPress={() => navigate('currencies')} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    flexGrow: 1,
  },
  scroll: {
    paddingTop: 150,
    flex: 1,
  },
});
