/* eslint-disable react/no-unstable-nested-components */
import { FlatList, View } from 'react-native';
import { currencies } from '../../lib/currencies/currencies';
import { CurrencyInput } from '../../components/currency-input/currency-input';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { useLayoutEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ManageValutes } from './ui/manage-valutes';
import { useStore } from '../../lib/store';
import { Currencies } from '../../types';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

export const Converter = () => {
  const { setOptions } = useNavigation();
  const { height } = useReanimatedKeyboardAnimation();
  const { styles } = useStyles(stylesheet);

  console.log(height.value, 'height');

  const fakeView = useAnimatedStyle(
    () => ({
      height: Math.abs(height.value),
    }),
    [],
  );

  const rates = useStore((store) => store.rates);

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => <ManageValutes />,
    });
  }, [setOptions]);

  const data = useMemo(() => {
    return rates.map((key) => ({
      Icon: currencies[key].Icon,
      name: key as Currencies,
    }));
  }, [rates]);

  return (
    <View style={styles.view}>
      <FlatList
        style={styles.scroll}
        contentContainerStyle={styles.container}
        data={data}
        renderItem={({ item }) => (
          <CurrencyInput key={item.name} Icon={item.Icon} name={item.name} />
        )}
      />
      <Animated.View style={fakeView} />
    </View>
  );
};
