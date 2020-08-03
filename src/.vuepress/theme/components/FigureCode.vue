<template functional>
  <figure
    :aria-label="props.caption"
    class="figurecode teste-fig"
  >
    <slot name="content" />
    <slot name="copy" />
    <slot name="caption" />
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
