module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:vue-a11y/base'
  ],
  plugins: [
    'vue-a11y',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'no-console': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^vue/',
          '/^@vue/',
          'module',
          '/^@\//',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
