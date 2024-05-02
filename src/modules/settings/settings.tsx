import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from '../../components/vertical-tab-view';
import { useState } from 'react';
import type { Route } from '../../components/vertical-tab-view/types';
import { useNavigation, useTheme } from '@react-navigation/native';
import { AboutScreen } from './screens/about-screen';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { translate } from '../../lib/i18n';
import { Touchable } from '../../components/core-ui/Touchable';
import { SettingsScreen } from './screens/settings-screen';

const renderScene = SceneMap({
  about: AboutScreen,
  settings: SettingsScreen,
});

export const Settings = () => {
  const layout = useWindowDimensions();
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'about', title: translate('about'), height: 80 },
    { key: 'settings', title: translate('settings'), height: 100 },
  ]);

  const leftButton = () => (
    <Touchable
      hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
      onPress={goBack}
      style={{
        borderRadius: 999,
        padding: 4,
      }}
    >
      <Feather color={colors.text} name="chevron-left" size={24} />
    </Touchable>
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
        if (route.key === 'about') {
          return <AntDesign name="info" color={color} size={18} />;
        }

        if (route.key === 'settings') {
          // Feather
          return <AntDesign name="setting" color={color} size={16} />;
        }
        return null;
      }}
    />
  );
};
