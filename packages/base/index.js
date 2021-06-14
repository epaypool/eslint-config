/* eslint-env es6 */
const testOverrides = require('./tests.js');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jest', 'promise', 'sonarjs', 'no-use-extend-native'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:no-use-extend-native/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',
    //TODO: fix all errors in the code to enable default
    'sonarjs/cognitive-complexity': ['error', 44],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
      },
    ],
  },
  ignorePatterns: ['**/dist/**'],
  overrides: [testOverrides],
};
