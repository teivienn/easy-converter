import React, { useCallback, useMemo } from 'react';
import { View, useWindowDimensions, type ListRenderItem } from 'react-native';
import { InfinityList } from '~/components/core-ui/InfinityList';
import { useStore } from '~/lib/app-store';
import type { RatesModel } from '~/lib/rates-api/rates-model';
import { CurrencyCodes, RatesProvider } from '~/types';
import { RateCard } from './components/RateCard';
import { Text } from 'react-native';
import { useVerticalTabViewContext } from '~/components/vertical-tab-view';
import { translate } from '~/lib/i18n';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './stylesheet';

const keyExtractor = (item: RatesModel) => item.code;
const column = 3;
const margin = 14;

export const RatesScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { rates, provider } = useStore();
  const dimensions = useWindowDimensions();
  const { headerHeight } = useVerticalTabViewContext();

  const SIZE = useMemo(
    () => (dimensions.width - 70 - 16 - column * margin) / column,
    [dimensions.width],
  );

  const data = useMemo(
    () =>
      Object.values(CurrencyCodes)
        .filter((code) => {
          if (RatesProvider.CBRF === provider) {
            return code !== CurrencyCodes.RUB;
          }

          return code !== CurrencyCodes.BYN;
        })
        .map((code) => {
          return rates[code];
        })
        .filter((it) => it !== undefined),
    [provider, rates],
  );

  const renderItem = useCallback<ListRenderItem<RatesModel>>(
    ({ item }) => (
      <View style={{ width: SIZE }}>
        <RateCard {...item} />
      </View>
    ),
    [SIZE],
  );

  return (
    <>
      <InfinityList
        data={data}
        ListHeaderComponent={
          <View style={[styles.header, { height: headerHeight }]}>
            <Text style={styles.headerText}>
              {translate(`providers.${provider.toLowerCase()}`)}
            </Text>
          </View>
        }
        columnWrapperStyle={[styles.column, { columnGap: margin }]}
        numColumns={column}
        style={styles.scroll}
        contentContainerStyle={[styles.container, { rowGap: margin }]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        itemHeight={40}
      />
    </>
  );
};
