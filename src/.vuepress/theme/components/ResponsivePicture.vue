<template>
  <picture>
    <source
      v-for="size in config.breakpoints"
      v-show="config.active"
      :key="size"
      :media="`(max-width: ${size}px)`"
      :srcset="sources[size]"
    >
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
