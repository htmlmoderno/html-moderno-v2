import VueCompositionApi from '@vue/composition-api'
import LazyHydrate from 'vue-lazy-hydration'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
import VueMasonry from 'vue-masonry-css'
import VueSkipTo from 'vue-skip-to'

export default ({ Vue, router }) => {
  Vue.use(VueCompositionApi)
  Vue.use(VueMasonry)
  Vue.use(VueSkipTo)
  Vue.component('LazyYoutubeVideo', LazyYoutubeVideo)
  Vue.component('LazyHydrate', LazyHydrate)
}
