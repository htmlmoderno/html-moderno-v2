<template>
  <div
    ref="copySnippet"
    class="copy-snippet flex items-center"
  >
    <span
      class="mr-2 opacity-0 transition-opacity duration-500"
      :class="{ 'opacity-100': copied }"
    >
      COPIADO
    </span>
    <button
      class="copy-snippet__button p-4"
      :aria-label="figcaptionText"
      @click="copy"
    >
      <vp-icon
        name="copy"
        class="text-lg text-textDark"
      />
      <span class="sr-only">
        COPIAR
      </span>
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import { useClipboard } from 'vue-use-web'

export default {
  name: 'CopySnippet',
  setup (_, { refs }) {
    const figcaptionText = ref(null)
    const copied = ref(false)
    const { write } = useClipboard()

    onMounted(() => {
      const caption = refs.copySnippet.parentElement.querySelector('figcaption')
      figcaptionText.value = `Copiar código ${caption ? caption.textContent : ''}`
    })

    function copy () {
      write(refs.copySnippet.parentElement.querySelector('[class^="language-"]').textContent)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 5000)
    }

    return {
      copy,
      copied,
      figcaptionText
    }
  }
}
</script>

<style lang="scss"></style>
