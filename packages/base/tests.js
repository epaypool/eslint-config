module.exports = {
  files: ['**/*.spec.ts', 'test/**', 'mock/**'],
  rules: {
    'func-names': 'off',
    'no-unused-expressions': 'off',
    'no-console': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
