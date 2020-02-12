module.exports = {
  smoothScroll: true,
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
  footer: {
    links: [
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
        label: 'Instagram',
        link: 'https://www.instagram.com/htmlmoderno/?ref=website'
      },
      {
        label: 'Presskit',
        link: 'https://github.com/htmlmoderno/press-kit'
      }
    ],
    mailto: 'contato@htmlmoderno.com.br',
    copy: '&copy; HTML Moderno'
  }
}
