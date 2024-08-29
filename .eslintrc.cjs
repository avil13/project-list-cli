module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@avil13/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};
