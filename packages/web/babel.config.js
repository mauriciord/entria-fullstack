module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-flow',
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'loadable-components/babel',
    'babel-plugin-styled-components',
    [
      'relay',
      {
        schema: 'data/schema.json',
      },
    ],
    'material-ui',
    'lodash',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
  ],
  env: {
    test: {
      presets: ['@babel/preset-flow', '@babel/preset-env', '@babel/preset-react'],
      plugins: [
        '@babel/plugin-transform-runtime',
        'dynamic-import-node',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
      ],
    },
  },
};
