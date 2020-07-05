import VueAnnouncer from '@vue-a11y/announcer'
import VueSkipTo from '@vue-a11y/skip-to'
import VueCompositionApi from '@vue/composition-api'
import event from '@vuepress/plugin-pwa/lib/event'
import VueDisqus from 'vue-disqus'
import VueMasonry from 'vue-masonry-css'

import FigureCode from './components/FigureCode.vue'
import FigureCodeCaption from './components/FigureCodeCaption.vue'
import WarningOpenLinkNewWindow from './components/WarningOpenLinkNewWindow.vue'

export default ({ Vue, router, isServer }) => {
  if (process.env.NODE_ENV === 'production') {
    event.$on('sw-updated', e => e.skipWaiting().then(() => location.reload(true))) // Auto reload pwa
  }

  // built-in components
  Vue.component('WarningOpenLinkNewWindow', WarningOpenLinkNewWindow)
  Vue.component('FigureCode', FigureCode)
  Vue.component('FigureCodeCaption', FigureCodeCaption)

  Vue.use(VueCompositionApi)
  Vue.use(VueMasonry)
  Vue.use(VueDisqus, { shortname: process.env.DISQUS_SHORTNAME })

  if (!isServer) {
    Vue.use(VueSkipTo)
    Vue.use(VueAnnouncer, {
      complementRoute: 'foi carregada'
    }, router)
  }
}
