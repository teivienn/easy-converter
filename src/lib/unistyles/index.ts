import Color from 'color';
import { UnistylesRegistry, useStyles } from 'react-native-unistyles';

const light = {
  input: {
    background: Color('#7444FD').alpha(0.05).rgb().toString(),
    border: '#7444FD',
    cursor: '#7444FD',
  },
  components: {
    fab: {
      rippleColor: 'rgba(225, 223, 223)',
    },
  },
  colors: {
    rippleColor: 'rgba(225, 223, 223)',
    inputBackground: Color('#7444FD').alpha(0.05).rgb().toString(),
    primary: '#673AB7',
    secondary: '#f7f9fc',
    background: '#ffffff',
    text: '#1E1E1E',
    border: 'rgb(216, 216, 216)',
    fabBg: '#673AB7',
    red: 'red',
    green: 'green',
  },
} as const;

const dark = {
  input: {
    background: Color('#D9CCFF').alpha(0.12).rgb().toString(),
    border: '#ffffff',
    cursor: '#ffffff',
  },
  components: {
    fab: {
      rippleColor: Color('rgb(18, 18, 18)').alpha(0.5).rgb().toString(),
    },
  },
  colors: {
    rippleColor: 'rgba(225, 223, 223, 0.32)',
    inputBackground: Color('#D9CCFF').alpha(0.12).rgb().toString(),
    primary: '#673AB7',
    secondary: 'rgb(18, 18, 18)',
    background: 'rgb(1, 1, 1)',
    text: '#fcfcfc',
    border: 'rgb(39, 39, 41)',
    fabBg: '#ffffff',
    red: 'red',
    green: 'green',
  },
} as const;

type Theme = {
  light: typeof light;
  dark: typeof dark;
};

UnistylesRegistry.addThemes({ light, dark }).addConfig({
  adaptiveThemes: true,
});

export const useTheme = () => {
  return useStyles().theme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends Theme {}

  export type UnistylesTheme = UnistylesThemes[keyof UnistylesThemes];
}
