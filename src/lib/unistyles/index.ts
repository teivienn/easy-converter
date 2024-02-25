import { UnistylesRegistry } from 'react-native-unistyles';

const light = {
  colors: {
    primary: '#673AB7',
    secondary: '#f7f9fc',
    background: '#ffffff',
    text: '#1E1E1E',
    border: 'rgb(216, 216, 216)',
    fabBg: '#673AB7',
  },
} as const;

const dark = {
  colors: {
    primary: '#673AB7',
    secondary: 'rgb(18, 18, 18)',
    background: 'rgb(1, 1, 1)',
    text: '#fcfcfc',
    border: 'rgb(39, 39, 41)',
    fabBg: '#ffffff',
  },
} as const;

type Theme = {
  light: typeof light;
  dark: typeof dark;
};

UnistylesRegistry.addThemes({ light, dark }).addConfig({
  adaptiveThemes: true,
});

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends Theme {}
}
