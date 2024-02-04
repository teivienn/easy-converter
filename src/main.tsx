import './lib/unistyles';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { RootNavigator } from './router/root-navigator';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SystemBars } from 'react-native-bars';
import { useStore } from './lib/store';
import { useEffect, useState } from 'react';
import { getRates } from './lib/api';

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
  const setRates = useStore((store) => store.setRates);

  useEffect(() => {
    const init = async () => {
      setRates(await getRates());

      setReady(true);
    };

    init();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
