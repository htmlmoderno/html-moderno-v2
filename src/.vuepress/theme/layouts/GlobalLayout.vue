<template>
  <div
    class="global-layout container mx-auto"
    itemscope
    itemtype="https://schema.org/WebPage"
  >
    <meta
      itemprop="name"
      content="HTML Moderno"
    >
    <meta
      itemprop="alternateName"
      content="HTML Moderno"
    >
    <meta
      itemprop="url"
      content="https://htmlmoderno.com.br/"
    >

    <the-heading />
    <component :is="layout" />
    <section
      v-show="$frontmatter.view !== 'CategoriesTags'"
      id="categories"
      class="layout-section layout-section--border-top dark:border-dark-200"
    >
      <the-categories />
    </section>
    <section
      id="newsletter"
      class="layout-section layout-section--border-top dark:border-dark-200"
    >
      <newsletter />
    </section>
    <the-footer />
  </div>
</template>

<script>
import TheHeading from '@theme/components/layout/TheHeading'
import { computed, onMounted } from '@vue/composition-api'

export default {
  name: 'GlobalLayout',
  components: {
    TheHeading,
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

<style src="vue-lazy-youtube-video/dist/style.css"></style>
<style lang="scss" src="@theme/styles/base.scss"></style>
<style src="@theme/styles/tailwind.css"></style>
