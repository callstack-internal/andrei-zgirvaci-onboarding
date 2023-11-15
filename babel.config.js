module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/app': './src/app',
          '@/components': './src/components',
          '@/constants': './src/constants',
          '@/lib': './src/lib',
          '@/screens': './src/screens',
          '@/store': './src/store',
          '@/utils': './src/utils',
        },
      },
    ],
  ],
};
