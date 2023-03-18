module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'linebreak-style': 'off',
    'max-len': ['error', {
      code: 120, tabWidth: 2, ignoreStrings: true, ignoreTemplateLiterals: true,
    }],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'multiline-const', next: '*' }],
    '@typescript-eslint/no-empty-interface': 'off',
  },
};