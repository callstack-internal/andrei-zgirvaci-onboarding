module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/tools/jest/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/tools/jest/setupTests.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};
