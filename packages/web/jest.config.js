module.exports = {
  displayName: 'test',
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
  transform: {
    '^.+\\.js$': require.resolve('babel-jest'),
  },
  moduleNameMapper: {
    'styled-components': require.resolve(
      'styled-components/native/dist/styled-components.native.cjs',
    ),
    '^React$': require.resolve('react'),
  },
  setupFiles: [require.resolve('./test/setupFiles')],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)s?$',
};
