const md = require('markdown-it')()
const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = [
  [
    // https://github.com/vuepressjs/vuepress-plugin-blog
    '@vuepress/blog',
    {
      sitemap: {
        hostname: process.env.URL_BASE
      },
      feed: {
        canonical_base: process.env.URL_BASE
      },
      comment: {
        service: 'disqus',
        shortname: 'htmlmoderno'
      },
      globalPagination: {
        lengthPerPage: process.env.PAGINATION_PER_PAGE
      },
      directories: [
        {
          id: 'post',
          title: 'Todos os posts - HTML Moderno',
          layout: 'Posts',
          itemLayout: 'Layout',
          dirname: 'posts',
          path: '/posts/',
          itemPermalink: '/posts/:slug',
          frontmatter: {
            announcer: 'Todos os posts %complementRoute%'
          },
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
      frontmatters: [
        {
          id: 'tag',
          keys: ['tag', 'tags'],
          title: 'Tag - HTML Moderno',
          scopeLayout: 'Posts',
          path: '/tags/',
          pagination: {
            layout: 'Posts',
            getPaginationPageTitle (pageNumber, key) {
              return `Tag: ${key} - HTML Moderno - página ${pageNumber}`
            }
          }
        }
      ]
    }
  ],
  // https://vuepress.github.io/en/plugins/clean-urls/
  [
    'vuepress-plugin-clean-urls',
    {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html'
    }
  ],
  // https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#install
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      popupComponent: 'SWUPopup',
      updatePopup: true
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
      componentsDir: resolve('../theme/views'),
      components: [
        {
          name: 'Posts',
          path: resolve('../theme/layouts/Posts')
        }
      ]
    }
  ],
  [
    // https://vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html
    '@vuepress/medium-zoom', {
      selector: '.content__default img',
      options: {
        margin: 16
      }
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
      baseURL: 'https://htmlmoderno.com.br',
      stripExtension: true
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
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'figurecode',
      defaultTitle: '',
      render: (tokens, idx) => {
        const m = tokens[idx].info.trim().match(/^figurecode\s+(.*)$/)
        if (tokens[idx].nesting === 1) {
          const caption = m ? md.utils.escapeHtml(m[1]) : ''
          return `
          <figure role="figure" aria-label="${caption}" class="figurecode">\n
            <figcaption class="figurecode__caption">
              ${caption}
            </figcaption>\n
            <div class="figurecode__content">\n
        `
        } else {
          return `
            </div>\n
            <copy-snippet class="figurecode__copy" />
          </figure>\n
        `
        }
      }
    }
  ]
]
