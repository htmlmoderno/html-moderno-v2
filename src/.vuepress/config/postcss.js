const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

const plugins = [
  tailwindcss('tailwind.config.js'),
  autoprefixer()
]

if (process.env.NODE_ENV !== 'development') {
  plugins.push(
    require('@fullhuman/postcss-purgecss')({
      whitelist: ['html', 'body', 'h1', 'h2', 'h3', 'mode-dark'],
      whitelistPatterns: [/bg-cat-/],
      content: ['**/*.vue'],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract (content) {
              return content.match(/[A-z0-9-:\/]+/g) || []
            }
          },
          extensions: ['vue']
        }
      ]
    })
  )
}

module.exports = {
  plugins
}
