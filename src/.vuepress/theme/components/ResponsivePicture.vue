<template>
  <picture>
    <template v-if="config.active">
      <source
        v-for="size in config.breakpoints"
        :key="size"
        :media="`(max-width: ${size}px)`"
        :srcset="sources[size]"
      >
    </template>
    <slot />
  </picture>
</template>

<script>
export default {
  name: 'ResponsivePicture',

  props: {
    coverName: {
      type: String,
      required: true
    },
    extension: {
      type: String,
      default: null
    }
  },

  setup (props, { root }) {
    const config = root.$themeConfig.responsive
    const sources = {}

    config.breakpoints.forEach(breakpoint => {
      sources[breakpoint] = `${props.coverName},w_${breakpoint}.${props.extension || config.extension}`
    })

    return {
      config,
      sources
    }
  }
}
</script>

<style lang="scss"></style>
