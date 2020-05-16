module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    '@vue/standard',
    'plugin:vue/recommended',
    'plugin:vuejs-accessibility/recommended'
  ],
  plugins: [
    'vue',
    'vuejs-accessibility',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^(@vue|vue)/',
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
