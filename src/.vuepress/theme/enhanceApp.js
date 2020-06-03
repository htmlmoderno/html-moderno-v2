import VueAnnouncer from '@vue-a11y/announcer'
import VueDarkMode from '@vue-a11y/dark-mode'
import VueCompositionApi from '@vue/composition-api'
import VueMasonry from 'vue-masonry-css'
import VueSkipTo from 'vue-skip-to'

export default ({ Vue, router, isServer }) => {
  Vue.use(VueCompositionApi)
  Vue.use(VueMasonry)

  if (process.env.NODE_ENV === 'development') {
    const VueAxe = require('vue-axe').default
    Vue.use(VueAxe, {
      delay: 2000
    })
  }

  if (!isServer) {
    Vue.use(VueSkipTo)
    Vue.use(VueAnnouncer, {}, router)
    Vue.use(VueDarkMode)
  }
}
