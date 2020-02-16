module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    'plugin:vue-a11y/base'
  ],
  plugins: [
    'vue',
    'vue-a11y',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^vue/',
          'module',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module"
  }
}
