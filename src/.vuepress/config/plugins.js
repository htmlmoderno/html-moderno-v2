const md = require('markdown-it')()
const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

let caption = ''

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
  // https://vuepress.vuejs.org/plugin/official/plugin-pwa.html
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: false
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
        margin: 16,
        background: '#343743'
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
    'container',
    {
      type: 'figurecode',
      defaultTitle: '',
      render: (tokens, idx) => {
        const m = tokens[idx].info.trim().match(/^figurecode\s+(.*)$/)
        if (tokens[idx].nesting === 1) {
          caption = m ? md.utils.escapeHtml(m[1]) : ''
          return `
          <FigureCode caption="${caption}">
            <div class="figurecode__content" slot="content">
        `
        } else {
          return `
              <CopySnippet slot="copy" class="figurecode__copy" />
            </div>
            <FigureCodeCaption
              slot="caption"
              caption="${caption}"
            />
          </FigureCode>
        `
        }
      }
    }
  ],
  [
    'container',
    {
      type: 'obs',
      defaultTitle: '',
      before: () => '<div class="custom-block-obs n9m">',
      after: '</div>'
    }
  ],
  [
    'container',
    {
      type: 'bq',
      defaultTitle: '',
      before: () => '<blockquote class="custom-block-bq n9m">',
      after: '</blockquote>'
    }
  ]
]
