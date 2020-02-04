<template>
  <div class="global-layout container mx-auto">
    <the-heading />
    <component :is="layout" />
    <div class="py-16 sm:py-20 border-t border-solid border-light-200 dark:border-dark-200">
      <the-categories />
    </div>
    <div class="py-16 mb-10 sm:py-20 border-t border-solid border-light-200 dark:border-dark-200">
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
    TheCategories: () => import('@theme/components/layout/TheCategories'),
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
