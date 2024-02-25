import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from '../../components/vertical-tab-view';
import { useState } from 'react';
import type { Route } from '../../components/vertical-tab-view/types';
import { ExchangeIcon } from '../../assets/icons/exchange';
import { SettingsIcon } from '../../assets/icons/settings';
import { RatesIcon } from '../../assets/icons/rates';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Button } from '../../components/button';
import { translate } from '../../lib/i18n';
import { ExchangeScreen } from './screens/exchange-screen';
import { RatesScreen } from './screens/rates-screen';

const renderScene = SceneMap({
  exchange: ExchangeScreen,
  rates: RatesScreen,
});

export const Explore = () => {
  const layout = useWindowDimensions();
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'exchange', title: translate('exchange'), height: 100 },
    { key: 'rates', title: translate('rates'), height: 70 },
  ]);

  const leftButton = () => (
    <Button onPress={() => navigate('settings')}>
      <SettingsIcon color={colors.text} height={20} />
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
        if (route.key === 'exchange') {
          return (
            <ExchangeIcon color={color} style={{ transform: [{ rotate: '-90deg' }] }} />
          );
        }

        if (route.key === 'rates') {
          return (
            <RatesIcon color={color} style={{ transform: [{ rotate: '-90deg' }] }} />
          );
        }
        return null;
      }}
    />
  );
};
