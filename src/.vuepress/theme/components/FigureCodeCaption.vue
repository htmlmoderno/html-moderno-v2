<template functional>
  <figcaption
    class="figurecode__caption"
    v-html="`&lt;span class='sr-only'&gt;Code snippet:&lt;/span&gt; ${props.caption}`"
  />
</template>

<script>
export default {
  name: 'FigureCodeCaption',
  props: {
    caption: {
      type: String,
      required: true
    }
  }
}
</script>
