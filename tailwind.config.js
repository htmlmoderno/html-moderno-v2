module.exports = {
  theme: {
    extend: {
      colors: {
        accent: '#FF5733',
        dark: '#343743',
        textDark: '#E3E3E3',
        'dark-200': '#4e5161',
        light: '#F4F1EC',
        textLight: '#573E48',
        'light-200': '#ECE6DC',
        'cat-semantic': '#D9D2A4',
        'cat-a11y': '#FFB7A8',
        'cat-html5': '#FF886E',
        'cat-seo': '#D3EBEC',
        'cat-ux': '#DBDBDB',
        'cat-web-components': '#F2C549',
        'cat-web-performance': '#88DCCD',
        'cat-web-apis': '#FFD8B9',
        'cat-security': '#C7CEEA',
        'cat-videos': '#D84848 '
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
    textColor: ['dark', 'dark-hover', 'dark-active'],
    boxShadow: ['dark', 'dark-hover', 'dark-active', 'hover']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
