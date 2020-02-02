<template>
  <div>
    <header>
      <h1>Header</h1>
    </header>
    <component :is="layout" />
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'GlobalLayout',
  computed: {
    layout () {
      if (!this.$page.path) return 'NotFound'
      if (this.$frontmatter.layout) return this.$frontmatter.layout
      return 'Layout'
    }
  }
}
</script>

<style lang="scss" src="@theme/styles/base.scss"></style>
<style src="@theme/styles/tailwind.css"></style>
