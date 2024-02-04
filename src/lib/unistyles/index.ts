import { UnistylesRegistry } from 'react-native-unistyles';

const light = {
  colors: {
    primary: '#673AB7',
    secondary: '#f7f9fc',
    background: '#ffffff',
    text: '#1E1E1E',
  },
} as const;

const dark = {
  colors: {
    primary: '#673AB7',
    secondary: '#1E1E1E',
    background: 'rgb(1, 1, 1)',
    text: '#fcfcfc',
  },
} as const;

type Theme = {
  light: typeof light;
  dark: typeof dark;
};

UnistylesRegistry.addThemes({ light, dark }).addConfig({
  adaptiveThemes: true,
  initialTheme: 'light',
});

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends Theme {}
}
