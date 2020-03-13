const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

const plugins = [
  tailwindcss('./tailwind.config.js'),
  autoprefixer()
]

if (process.env.NODE_ENV !== 'development') {
  plugins.push(
    require('@fullhuman/postcss-purgecss')({
      whitelist: ['html', 'body', 'h1', 'h2', 'h3', 'mode-dark'],
      whitelistPatterns: [/bg-cat-/],
      content: ['./src/.vuepress/**/*.vue'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  )
}

module.exports = {
  plugins
}
