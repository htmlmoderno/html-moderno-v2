import VueAnnouncer from '@vue-a11y/announcer'
import VueCompositionApi from '@vue/composition-api'
import VueMasonry from 'vue-masonry-css'
import VueSkipTo from 'vue-skip-to'

export default ({ Vue, router, isServer }) => {
  Vue.use(VueCompositionApi)
  Vue.use(VueMasonry)
  if (!isServer) {
    Vue.use(VueSkipTo)
    Vue.use(VueAnnouncer, {}, router)
  }
}
