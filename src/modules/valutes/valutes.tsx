import { useMemo, useState } from 'react';
import { SearchInput } from './ui/search-input';
import { ListRenderItem } from 'react-native';
import { ValuteCard } from './ui/valute-card';
import { useAllRates, useStore } from '../../lib/store';
import { Currencies } from '../../types';
import { currencies } from '../../lib/currencies/currencies';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { InfinityList } from '../../components/infinity-list';

const keyExtractor = ({ code, name }: { code: string; name: string }) =>
  `${code}-${name}`;

const renderItem: ListRenderItem<ValuteCardProps> = ({ item }) => (
  <ValuteCard {...item} />
);

type ValuteCardProps = {
  code: Currencies;
  name: string;
  value: number;
  Icon: number;
  selected: boolean;
};

export const Valutes = () => {
  const { styles } = useStyles(stylesheet);

  const [search, setSearch] = useState('');
  const rates = useAllRates((store) => store.rates);
  const selectedRates = useStore((store) => store.rates);

  const data = useMemo(() => {
    return Object.entries(rates || {}).map(([key, value]) => ({
      code: key as Currencies,
      name: currencies[key as Currencies].name,
      value: value.value,
      Icon: currencies[key as Currencies].Icon,
      selected: selectedRates.includes(key as Currencies),
    }));
  }, [rates, selectedRates]);

  const filteredData = useMemo(() => {
    if (!search) {
      return data;
    }

    return data.filter(
      ({ name, code }) =>
        name.toLowerCase().includes(search.toLowerCase()) ||
        code.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [data, search]);

  console.log('rerender');

  return (
    <>
      <SearchInput value={search} setValue={setSearch} />

      <InfinityList
        style={styles.scroll}
        contentContainerStyle={styles.container}
        itemHeight={60}
        keyExtractor={keyExtractor}
        data={filteredData}
        renderItem={renderItem}
      />
    </>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 30,
    flexGrow: 1,
  },
  scroll: {
    paddingTop: 16,
  },
}));
