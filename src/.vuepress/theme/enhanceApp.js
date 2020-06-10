import VueAnnouncer from '@vue-a11y/announcer'
import VueCompositionApi from '@vue/composition-api'
import VueDisqus from 'vue-disqus'
import VueMasonry from 'vue-masonry-css'
import VueSkipTo from 'vue-skip-to'

import FigureCode from './components/FigureCode.vue'
import FigureCodeCaption from './components/FigureCodeCaption.vue'
import WarningOpenLinkNewWindow from './components/WarningOpenLinkNewWindow.vue'

export default ({ Vue, router, isServer }) => {
  // built-in components
  Vue.component('WarningOpenLinkNewWindow', WarningOpenLinkNewWindow)
  Vue.component('FigureCode', FigureCode)
  Vue.component('FigureCodeCaption', FigureCodeCaption)

  Vue.use(VueCompositionApi)
  Vue.use(VueMasonry)
  Vue.use(VueDisqus, { shortname: 'htmlmodernotest' })

  if (!isServer) {
    Vue.use(VueSkipTo)
    Vue.use(VueAnnouncer, {}, router)
  }
}
