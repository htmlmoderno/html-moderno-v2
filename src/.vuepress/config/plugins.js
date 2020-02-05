const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = [
  // https://github.com/ntnyq/vuepress-plugin-svg-icons
  [
    '@goy/svg-icons', {
      svgsDir: resolve('../theme/assets/sprite/svg')
    }
  ],
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
    }
  ],
  [
    // https://github.com/IOriens/vuepress-plugin-canonical
    'vuepress-plugin-canonical', {
      baseURL: 'https://htmlmoderno.com.br'
    }
  ],
  [
    // https://github.com/webmasterish/vuepress-plugin-minimal-analytics
    'minimal-analytics', {
      ga: 'UA-70393520-2'
    }
  ],
  [
    // https://github.com/vuepressjs/vuepress-plugin-blog
    '@vuepress/blog',
    {
      directories: [
        {
          id: 'post',
          dirname: 'posts',
          path: '/',
          itemPermalink: '/:slug'
        }
      ]
    }
  ],
  [
    'sitemap', {
      hostname: 'https://htmlmoderno.com.br'
    }
  ]
]
