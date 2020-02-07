const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = [
  [
    // https://github.com/vuepressjs/vuepress-plugin-blog
    '@vuepress/blog',
    {
      sitemap: {
        hostname: 'https://htmlmoderno.com.br'
      },
      feed: {
        canonical_base: 'https://htmlmoderno.com.br'
      },
      globalPagination: {
        lengthPerPage: process.env.PAGINATION_PER_PAGE
      },
      directories: [
        {
          id: 'post',
          title: 'Todos os posts - HTML Moderno',
          layout: 'Posts',
          dirname: 'posts',
          path: '/posts/',
          itemPermalink: '/posts/:slug',
          pagination: {
            layout: 'Posts',
            prevText: '<<',
            nextText: '>>',
            getPaginationPageTitle (pageNumber) {
              return `Todos os posts - HTML Moderno - página ${pageNumber}`
            }
          }
        }
      ],
      comment: {
        service: 'disqus',
        shortname: 'htmlmoderno'
      }
    }
  ],
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
    'mailchimp', {
      endpoint: process.env.MAILCHIMP_ENDPOINT
    }
  ]
]
