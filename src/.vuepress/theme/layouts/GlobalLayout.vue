<template>
  <div>
    <the-heading />
    <component :is="layout" />
    <the-footer />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/composition-api'

export default {
  name: 'GlobalLayout',
  components: {
    TheHeading: () => import('@theme/components/layout/TheHeading'),
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
        module.default.load({
          google: {
            families: [process.env.VUE_APP_GOOGLE_FONT]
          }
        })
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
