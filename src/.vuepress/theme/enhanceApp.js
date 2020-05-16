import VueAnnouncer from '@vue-a11y/announcer'
import VueCompositionApi from '@vue/composition-api'
import LazyHydrate from 'vue-lazy-hydration'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
import VueMasonry from 'vue-masonry-css'
import VueSkipTo from 'vue-skip-to'

export default ({ Vue, router, isServer }) => {
  Vue.use(VueCompositionApi)
  Vue.use(VueMasonry)
  Vue.component('LazyYoutubeVideo', LazyYoutubeVideo)
  Vue.component('LazyHydrate', LazyHydrate)
  if (!isServer) {
    Vue.use(VueSkipTo)
    Vue.use(VueAnnouncer, {}, router)
  }
}
