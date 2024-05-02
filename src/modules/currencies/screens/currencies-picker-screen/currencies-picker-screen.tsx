import { currencies } from '~/lib/currencies/currencies';
import { useStore } from '~/lib/app-store';
import { ObjectEntries } from '~/utils/object-entries';
import { InfinityList } from '~/components/core-ui/InfinityList';
import { useCallback } from 'react';
import { View, type ListRenderItem } from 'react-native';
import { CurrencySelectCard } from './components';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './stylesheet';

const keyExtractor = (data: (typeof currencies)[keyof typeof currencies]) => data.name;

export const CurrenciesPickerScreen = () => {
  const { currencies: selectedCurrencies, setCurrency } = useStore();
  const { styles } = useStyles(stylesheet);

  const data = ObjectEntries(currencies).map(([code, it]) => {
    return {
      ...it,
      code,
      selected: selectedCurrencies.includes(code),
    };
  });

  const renderItem = useCallback<ListRenderItem<(typeof data)[number]>>(
    ({ item }) => {
      return <CurrencySelectCard {...item} onSelect={setCurrency} />;
    },
    [setCurrency],
  );

  return (
    <InfinityList
      data={data}
      style={styles.scroll}
      contentContainerStyle={styles.container}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem}
      itemHeight={80}
    />
  );
};

export const ItemSeparatorComponent = () => {
  return <View style={style} />;
};

const style = {
  height: 10,
};
