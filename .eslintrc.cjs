const stylistic = require('@stylistic/eslint-plugin')
const custom = stylistic.configs.customize({
  indent: 2,
  semi: true,
  jsx: true,
});

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn'],
    ...custom.rules,
     '@stylistic/semi': ["warn", "always", { "omitLastInOneLineBlock": true}],
     '@stylistic/jsx-tag-spacing': ['off']
  },
}
