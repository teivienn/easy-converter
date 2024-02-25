import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from '../../components/vertical-tab-view';
import { useState } from 'react';
import type { Route } from '../../components/vertical-tab-view/types';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Button } from '../../components/button';
import { CurrenciesPickerScreen } from './screens/currencies-picker-screen';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { translate } from '../../lib/i18n';

const renderScene = SceneMap({
  CurrenciesPicker: CurrenciesPickerScreen,
});

export const Currencies = () => {
  const layout = useWindowDimensions();
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'CurrenciesPicker', title: translate('about'), height: 80 },
  ]);

  const leftButton = () => (
    <Button onPress={goBack}>
      <Feather color={colors.text} name="chevron-left" size={24} />
    </Button>
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={layout}
      tabBarPosition="left"
      leftButton={leftButton}
      renderIcon={({ route, color }) => {
        if (route.key === 'CurrenciesPicker') {
          return <AntDesign name="info" color={color} size={18} />;
        }
        return null;
      }}
    />
  );
};
