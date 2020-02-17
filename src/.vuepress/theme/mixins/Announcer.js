// import Vue from 'vue'

// export default {
//   data () {
//     return {
//       announcerHasLoaded: false
//     }
//   },

//   mounted () {
//     import('vue-announcer').then(module => {
//       Vue.use(module.default)
//       this.announcerHasLoaded = true
//     })

//     this.$router.afterEach(() => {
//       setTimeout(() => {
//         this.$announcer.set(`${document.title.trim()} foi carregada`)
//       }, 2500)
//     })
//   }
// }

import { onMounted, ref } from '@vue/composition-api'
import Vue from 'vue'

export default {
  setup (_, { root }) {
    const announcerHasLoaded = ref(false)

    onMounted(() => {
      import('vue-announcer').then(module => {
        Vue.use(module.default)
        announcerHasLoaded.value = true
      })

      root.$router.afterEach(() => {
        setTimeout(() => {
          const customText = root.$themeConfig.announcer && root.$themeConfig.announcer.frontmatterKey
            ? root.$frontmatter[root.$themeConfig.announcer.frontmatterKey]
              .replace('%title%', document.title.trim())
              .replace('%complementRoute%', root.$themeConfig.announcer.complementRoute)
            : null
          const announcerText = customText || `${document.title.trim()} foi carregada`
          root.$announcer.set(announcerText)
        }, 2500)
      })
    })

    return {
      announcerHasLoaded
    }
  }
}
