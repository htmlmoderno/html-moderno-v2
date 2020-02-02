module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    'plugin:vue-a11y/base'
  ],
  plugins: [
    'vue-a11y',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
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
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module'
  }
}
