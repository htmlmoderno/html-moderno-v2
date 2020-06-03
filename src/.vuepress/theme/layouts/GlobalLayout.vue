<template>
  <div class="global-layout container mx-auto">
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
import { computed, onMounted } from '@vue/composition-api'

import TheHeading from '@theme/components/layout/TheHeading'

export default {
  name: 'GlobalLayout',
  components: {
    TheHeading,
    TheFooter: () => import('@theme/components/layout/TheFooter')
  },
  setup (_, { root }) {
    const layout = computed(() => {
      if (!root.$page.path) return 'NotFound'
      if (root.$frontmatter.layout) return root.$frontmatter.layout
      return 'Layout'
    })

    onMounted(() => {
      import('webfontloader')
        .then(module => {
          module.default.load({ ...root.$themeConfig.webFontLoader })
        })
    })

    return {
      layout
    }
  }
}
</script>

<style lang="scss" src="@theme/styles/base.scss"></style>
<style src="@theme/styles/tailwind.css"></style>
