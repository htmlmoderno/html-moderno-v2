const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

console.log(resolve('../theme/views'))

module.exports = [
  // https://vuepress.vuejs.org/plugin/official/plugin-register-components.html
  [
    '@vuepress/register-components', {
      componentsDir: resolve('../theme/views')
    }
  ],
  [
    // https://vuepress.vuejs.org/plugin/official/plugin-search.html
    '@vuepress/search', {
      searchMaxSuggestions: 10
    },
  ],
  [
    // https://github.com/IOriens/vuepress-plugin-canonical
    'vuepress-plugin-canonical', {
      baseURL: 'https://htmlmoderno.com.br'
    }
  ],
  [
    // https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html
    '@vuepress/google-analytics', {
      'ga': 'UA-70393520-2'
    }
  ],
  [
    // https://github.com/vuepressjs/vuepress-plugin-blog
    '@vuepress/blog'
  ]
]
