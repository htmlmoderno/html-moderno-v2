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
  colorMode: {
    defaultMode: 'light',
    className: 'mode-%cm',
    favicon: '#favicon',
    metaThemeColor: {
      light: '#f4f1ec',
      dark: '#343743'
    }
  },
  responsive: {
    active: true,
    extension: 'png',
    breakpoints: [480, 640, 800, 1024]
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
      },
      {
        label: 'Preferências',
        to: '/preferencias/'
      }
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
        link: 'https://twitter.com/htmlmoderno/?ref=website'
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
    mailto: 'htmlmoderno@gmail.com',
    copy: '&copy; HTML Moderno'
  },
  locales: {
    '/': {
      externalLinkTextSrOnly: 'Abre em uma nova janela'
    }
  }
}
