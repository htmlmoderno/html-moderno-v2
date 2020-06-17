<template functional>
  <!-- eslint-disable vuejs-accessibility/no-redundant-roles -->
  <figure
    role="figure"
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
