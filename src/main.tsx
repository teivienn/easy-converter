import './lib/unistyles';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { RootNavigator } from './router/root-navigator';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SystemBars } from 'react-native-bars';
import { useAllRates } from './lib/store';
import { useState } from 'react';
import { getRates } from './lib/api';
import { useMount } from './hooks/lifecycle';

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

    init();
  });

  if (!ready) {
    return null;
  }

  return (
    <KeyboardProvider statusBarTranslucent>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <RootNavigator />
        <SystemBars
          animated
          barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        />
      </NavigationContainer>
    </KeyboardProvider>
  );
};
