require('dotenv').config()
const path = require('path')
const webpack = require('webpack')

const chainMarkdown = require('./config/chainMarkdown')
const head = require('./config/head')
const plugins = require('./config/plugins')
const postcss = require('./config/postcss')
const themeConfig = require('./config/themeConfig')

const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  base: '/',
  description: 'No HTML Moderno você fica atualizado com artigos e vídeos sobre o que tem de mais moderno em HTML5, semântica, acessibilidade, SEO, UX e performance web.',
  evergreen: true,
  head,
  themeConfig,
  plugins,
  serviceWorker: true,
  postcss,
  locales: {
    '/': {
      lang: 'pt-br',
      externalLinkTextSrOnly: 'abre em uma nova aba'
    }
  },
  chainMarkdown,
  configureWebpack () {
    return {
      plugins: [
        new webpack.EnvironmentPlugin({ ...process.env })
      ],
      resolve: {
        alias: {
          '@': resolve('.'),
          '@theme': resolve('./theme')
        }
      }
    }
  }
}
