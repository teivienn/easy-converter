import { createStackNavigator } from '@react-navigation/stack';
import { ParamList } from './types';
import { Explore } from '../modules/explore';
import { Settings } from '../modules/settings';
import { useStore } from '../lib/app-store';
import { Onboarding } from '../modules/onboarding';
import { Currencies } from '../modules/currencies';

const Stack = createStackNavigator<ParamList>();

export const RootNavigator = () => {
  const { onboard } = useStore();

  return (
    <Stack.Navigator
      initialRouteName={!onboard ? 'explore' : 'onboarding'}
      screenOptions={{
        headerShown: false,
      }}
    >
      {onboard && <Stack.Screen name="onboarding" component={Onboarding} />}
      <Stack.Screen name="explore" component={Explore} />
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen name="currencies" component={Currencies} />
    </Stack.Navigator>
  );
};
