module.exports = {
  smoothScroll: true,
  searchPlaceholder: 'Tecle "s" para pesquisar',
  pagination: {
    perPage: process.env.PAGINATION_PER_PAGE
  },
  webFontLoader: {
    google: {
      families: [process.env.GOOGLE_FONT]
    }
  },
  responsive: {
    active: true,
    extension: 'png',
    breakpoints: [400, 640, 800, 1024]
  },
  webmentions: {
    active: true,
    endpoint: 'https://webmention.io/api/mentions.jf2?target=#URLPOST#'
  },
  announcer: {
    frontmatterKey: 'announcer',
    complementRoute: 'foi carregada'
  },
  links: {
    navMenu: [
      {
        label: 'Home',
        to: '/'
      },
      {
        label: 'Sobre',
        to: '/sobre/'
      },
      {
        label: 'Posts',
        to: '/posts/'
      },
      {
        label: 'Categorias',
        to: '/categorias/'
      }
      // {
      //   label: 'Acessibilidade',
      //   to: '/acessibilidade/'
      // }
    ],
    social: [
      {
        label: 'Facebook page',
        link: 'https://www.facebook.com/htmlmoderno/?ref=website'
      },
      {
        label: 'Facebook group',
        link: 'https://www.facebook.com/groups/htmlmoderno/?ref=website'
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/htmlmoderno/?ref=website',
        rel: 'me'
      },
      {
        label: 'Youtube',
        link: 'https://www.youtube.com/channel/UCByMpqccsCqL42LMzKIMnBg/?ref=website'
      }
    ],
    footer: [
      {
        label: 'RSS Feed',
        link: 'https://htmlmoderno.com.br/rss.xml'
      },
      {
        label: 'Presskit',
        link: 'https://github.com/htmlmoderno/press-kit'
      }
    ]
  },
  footer: {
    mailto: 'contato@htmlmoderno.com.br',
    copy: '&copy; HTML Moderno'
  },
  locales: {
    '/': {
      externalLinkTextSrOnly: 'Abre em uma nova janela'
    }
  }
}
