<template>
  <div class="global-layout container mx-auto">
    <the-heading />
    <component :is="layout" />
    <div class="mt-16 py-16 sm:mt-32 sm:py-32 border-t border-solid border-light-200">
      <newsletter />    
    </div>
    <the-footer />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/composition-api'

export default {
  name: 'GlobalLayout',
  components: {
    TheHeading: () => import('@theme/components/layout/TheHeading'),
    Newsletter: () => import('@theme/components/Newsletter'),
    TheFooter: () => import('@theme/components/layout/TheFooter')
  },
  setup (_, { root }) {
    const layout = computed(() => {
      if (!root.$page.path) return 'NotFound'
      if (root.$frontmatter.layout) return root.$frontmatter.layout
      return 'Layout'
    })

    onMounted(() => {
      import('webfontloader').then(module => {
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
