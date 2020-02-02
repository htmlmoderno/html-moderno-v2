import VueCompositionApi from '@vue/composition-api'

import WebFontLoader from 'webfontloader'

export default ({ Vue, isServer }) => {
  Vue.use(VueCompositionApi)
  if (!isServer) {
    WebFontLoader.load({
      google: {
        families: [process.env.VUE_APP_GOOGLE_FONT]
      }
    })
  }
}
