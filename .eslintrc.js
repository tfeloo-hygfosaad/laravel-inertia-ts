module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue-scoped-css/vue3-recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'html',
    'vue',
    'vuejs-accessibility',
    'vue-scoped-css',
  ],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.vue'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'global-require': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', {
      code: 120, tabWidth: 2, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true,
    }],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'multiline-const', next: '*' }],
  },
};
