const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.ts',
          '.svg',
          '.ios.js',
          '.ios.ts',
          '.android.js',
          '.android.ts',
          '.json',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
        ],
        alias: {
          '~': path.resolve(__dirname, 'src'),
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
