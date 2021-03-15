module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    createDefaultProgram: true,
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },

  extends: [
    'airbnb-typescript/base',
  ],

  rules: {
    // JS
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',

    // TS
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
      },
    ],
  },

  parserOptions: {
    project: './tsconfig.json',
  },
};
