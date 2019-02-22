'use strict';

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:import-order/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.'
  },
  plugins: [
    '@typescript-eslint',
    'import-order',
    'react-hooks',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js', '.jsx', '.ts', '.tsx',
        ],
      },
    }
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.spec.tsx'] },
    ],
    'import/prefer-default-export': false,
    'no-return-assign': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prop-types': false,
    'react-hooks/rules-of-hooks': 'error',
  },
};
