import { StyleSheet, type ListRenderItem } from 'react-native';
import { useStore } from '../../../../lib/app-store';
import { useCallback, useMemo, useState } from 'react';
import { CurrencyCard } from './components/CurrencyCard';
import { Fab } from '../../../../components/fab';
import { useNavigation } from '@react-navigation/native';
import { InfinityList } from '../../../../components/core-ui/InfinityList';
import { ItemSeparatorComponent } from './components/ItemSeparatorComponent';
import type { RatesModel } from '~/lib/rates-api/rates-model';

const keyExtractor = (item: RatesModel) => item.code;

export const ExchangeScreen = () => {
  const { rates, currencies } = useStore();
  const { navigate } = useNavigation();

  const [baseRate, setBaseRate] = useState(0);

  const data = useMemo(() => {
    return currencies
      .map((key) => {
        return rates[key];
      })
      .filter((it) => it !== undefined);
  }, [currencies, rates]);

  const renderItem = useCallback<ListRenderItem<RatesModel>>(
    ({ item }) => (
      <CurrencyCard currencyRate={item} baseRate={baseRate} setBaseRate={setBaseRate} />
    ),
    [baseRate],
  );

  console.log(data, 'data');

  return (
    <>
      <InfinityList
        itemHeight={70}
        style={styles.scroll}
        contentContainerStyle={styles.container}
        data={data}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
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
