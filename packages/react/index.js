module.exports = {
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:jsx-a11y/recommended'],
  globals: {
    process: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'], allow: 'as-needed' }],
  },
};
