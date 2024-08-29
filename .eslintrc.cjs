/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
import eslintConfigPrettier from "eslint-config-prettier";

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@avil13/eslint-config',
    // 'plugin:vitest/recommended',
    // 'plugin:vitest-globals/recommended',
    eslintConfigPrettier,
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
