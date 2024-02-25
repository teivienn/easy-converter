import './lib/unistyles';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { RootNavigator } from './router/root-navigator';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { StoreProvider } from './lib/app-store';

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
  return (
    <KeyboardProvider statusBarTranslucent>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <StoreProvider>
          <RootNavigator />
        </StoreProvider>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        />
      </NavigationContainer>
    </KeyboardProvider>
  );
};
