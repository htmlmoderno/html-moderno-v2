<template>
  <div
    class="global-layout container mx-auto"
    dir="ltr"
  >
    <the-heading />
    <transition
      name="fade"
      mode="out-in"
      appear
    >
      <component :is="layout" />
    </transition>
    <the-footer />
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'

import TheHeading from '@theme/components/layout/TheHeading'
import usePreferences from '@theme/composable/usePreferences'
import NProgressMixin from '@theme/mixins/nProgress'

export default {
  name: 'GlobalLayout',

  components: {
    TheHeading,
    TheFooter: () => import(/* webpackChunkName: "TheFooter" */ '@theme/components/layout/TheFooter')
  },

  mixins: [NProgressMixin],

  setup (_, { root }) {
    const { init: initPreferences } = usePreferences()
    const layout = computed(() => {
      if (!root.$page.path) return 'NotFound'
      if (root.$frontmatter.layout) return root.$frontmatter.layout
      return 'Layout'
    })

    initPreferences()

    return {
      layout
    }
  }
}
</script>

<style lang="scss" src="@theme/styles/base.scss"></style>
<style src="@theme/styles/tailwind.css"></style>
