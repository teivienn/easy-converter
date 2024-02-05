import { useCallback, useMemo, useState } from 'react';
import { SearchInput } from './ui/search-input';
import { FlatList, ListRenderItem } from 'react-native';
import { ValuteCard } from './ui/valute-card';
import { useAllRates, useStore } from '../../lib/store';
import { Currencies } from '../../types';
import { currencies } from '../../lib/currencies/currencies';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const keyExtractor = ({ code }: { code: string }) => code;

type ValuteCardProps = {
  code: Currencies;
  name: string;
  value: number;
  Icon: JSX.Element;
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

  const renderItem = useCallback<ListRenderItem<ValuteCardProps>>(({ item }) => {
    return <ValuteCard {...item} />;
  }, []);

  return (
    <>
      <SearchInput value={search} setValue={setSearch} />

      <FlatList
        style={styles.scroll}
        contentContainerStyle={styles.container}
        keyExtractor={keyExtractor}
        data={filteredData}
        removeClippedSubviews
        renderItem={renderItem}
      />
    </>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 30,
    flexGrow: 1,
  },
  scroll: {
    backgroundColor: theme.colors.secondary,
    paddingTop: 16,
    flex: 1,
  },
}));
