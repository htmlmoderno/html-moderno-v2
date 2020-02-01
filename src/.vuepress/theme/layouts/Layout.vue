<template>
  <component :is="view" />
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'Layout',
  setup (_, { root }) {
    const view = computed(() => root.$frontmatter.view || 'Home')

    return {
      view
    }
  }
}
</script>

<style lang="scss"></style>
