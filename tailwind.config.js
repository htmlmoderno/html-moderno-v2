module.exports = {
  theme: {
    extend: {
      colors: {
        textLight: '#573E48',
        textDark: '#E3E3E3',
        light: '#F4F1EC',
        'light-200': '#ECE6DC',
        dark: '#343743',
        accent: '#FF5733',
        semantic: '#F4F1DF',
        a11y: '#FFB7A8',
        html: '#FF886E',
        seo: '#D3EBEC',
        ux: '#ebebeb',
        webComponents: '#F2C549',
        webPerformance: '#88DCCD',
        webApi: '#FFD8B9',
        security: '#C7CEEA',
        videos: '#D84848 '
      },
      boxShadow: {
        'n9m-light': '-9px -9px 16px #fff, 9px 9px 16px #E0E0E0',
        'inner-n9m-light': 'inset 4px 4px 10px rgba(180, 167, 145, .3), inset -4px -4px 4px #fff',
        'n9m-dark': '-4px -4px 8px #454857, 9px 9px 16px #272931',
        'inner-n9m-dark': 'inset 7px 5px 18px #2A2C36, inset -4px -4px 4px #4d5060'
      }
    }
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
