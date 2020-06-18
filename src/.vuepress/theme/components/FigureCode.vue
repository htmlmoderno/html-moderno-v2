<template functional>
  <figure
    :aria-label="props.caption"
    class="figurecode teste-fig"
  >
    <slot name="content" />
    <slot name="caption" />
    <slot name="copy" />
  </figure>
</template>

<script>
export default {
  name: 'FigureCode',
  props: {
    caption: {
      type: String,
      required: true
    }
  }
}
</script>
