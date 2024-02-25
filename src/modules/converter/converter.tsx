// /* eslint-disable react/no-unstable-nested-components */
// import { FlatList, Text, View } from 'react-native';
// import { currencies } from '../../lib/currencies/currencies';
// import { CurrencyInput } from '../../components/currency-input/currency-input';
// import { useStyles } from 'react-native-unistyles';
// import { stylesheet } from './styles';
// import { useCallback, useLayoutEffect, useMemo } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { ManageValutes } from './ui/manage-valutes';
// import { useStore } from '../../lib/store';
// import { CurrencyCodes } from '../../types';
// import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
// import Animated, { useAnimatedStyle } from 'react-native-reanimated';
// import { EmptyList } from './ui/empty-list';
// import { useUpdateRates } from '../../hooks/useUpdateRates';
// import { useVerticalTabViewContext } from '../../components/vertical-tab-view';
// import { translate } from '../../lib/i18n';
// import { Fab } from '../../components/fab';

// export const Converter = () => {
//   const { setOptions, navigate } = useNavigation();
//   const { height } = useReanimatedKeyboardAnimation();
//   const { styles } = useStyles(stylesheet);
//   const { loading, refetch } = useUpdateRates();
//   const { headerHeight } = useVerticalTabViewContext();

//   const fakeView = useAnimatedStyle(
//     () => ({
//       height: Math.abs(height.value),
//     }),
//     [],
//   );

//   const rates = useStore((store) => store.rates);

//   useLayoutEffect(() => {
//     setOptions({
//       headerRight: () => <ManageValutes />,
//     });
//   }, [setOptions]);

//   const data = useMemo(() => {
//     return rates.map((key) => ({
//       Icon: currencies[key].Icon,
//       name: key as CurrencyCodes,
//     }));
//   }, [rates]);

//   const renderHeader = useCallback(() => {
//     return (
//       <View style={[styles.header, { height: headerHeight - 20 }]}>
//         <Text style={styles.headerText}>{translate('exchange-screen.title')}</Text>
//       </View>
//     );
//   }, [headerHeight, styles.header, styles.headerText]);

//   const openCurrenciesPicker = () => {
//     navigate('currencies');
//   };

//   return (
//     <View style={styles.view}>
//       <FlatList
//         refreshing={loading}
//         onRefresh={refetch}
//         style={[styles.scroll]}
//         ListHeaderComponent={renderHeader}
//         ListEmptyComponent={<EmptyList />}
//         contentContainerStyle={styles.container}
//         data={data}
//         renderItem={({ item }) => (
//           <CurrencyInput key={item.name} Icon={item.Icon} name={item.name} />
//         )}
//       />
//       <Fab icon="plus" onPress={openCurrenciesPicker} />
//       <Animated.View style={fakeView} />
//     </View>
//   );
// };
