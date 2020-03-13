import { onMounted, ref } from '@vue/composition-api'
import Vue from 'vue'

export default {
  setup (_, { root }) {
    const announcerHasLoaded = ref(false)
    const skipToHasLoaded = ref(false)

    onMounted(() => {
      import('vue-announcer')
        .then(module => {
          Vue.use(module.default, {}, root.$router)
          announcerHasLoaded.value = true
        })
      import('vue-skip-to')
        .then(module => {
          Vue.use(module.default)
          skipToHasLoaded.value = true
        })
    })

    return {
      skipToHasLoaded,
      announcerHasLoaded
    }
  }
}
