<template functional>
  <div
    v-show="props.show"
    class="z-20 w-full h-full top-0 left-0 fixed bg-overlay"
    aria-hidden="true"
    v-on="listeners"
  />
</template>

<script>
export default {
  name: 'Overlay',

  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
