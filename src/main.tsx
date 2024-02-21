import './lib/unistyles';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { RootNavigator } from './router/root-navigator';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { useAllRates } from './lib/store';
import { useState } from 'react';
import { getRates } from './lib/api';
import { useMount } from './hooks/lifecycle';
import BootSplash from 'react-native-bootsplash';

const LightTheme: typeof DefaultTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#020203',
    background: '#ffffff',
  },
};

export const Main = () => {
  const scheme = useColorScheme();
  const [ready, setReady] = useState(false);
  const setRates = useAllRates((store) => store.setRates);

  useMount(() => {
    const init = async () => {
      setRates(await getRates());

      setReady(true);
    };

    init().finally(() => BootSplash.hide({ fade: true }));
  });

  if (!ready) {
    return null;
  }

  return (
    <KeyboardProvider statusBarTranslucent>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <RootNavigator />
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        />
      </NavigationContainer>
    </KeyboardProvider>
  );
};
