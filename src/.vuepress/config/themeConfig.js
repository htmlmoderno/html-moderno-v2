module.exports = {
  smoothScroll: true,
  webFontLoader: {
    google: {
      families: [process.env.GOOGLE_FONT]
    }
  },
  responsive: {
    active: true,
    breakpoints: [400, 640, 800]
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
        link: 'https://twitter.com/htmlmoderno/?ref=website'
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
