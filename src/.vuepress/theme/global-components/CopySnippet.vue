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
      type="button"
      class="copy-snippet__button p-4"
      aria-label="Copiar código"
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
import { ref } from '@vue/composition-api'
import { useClipboard } from 'vue-use-web'

export default {
  name: 'CopySnippet',
  setup (_, { refs }) {
    const copied = ref(false)
    const { write } = useClipboard()

    function copy () {
      write(refs.copySnippet.parentElement.querySelector('[class^="language-"]').textContent)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 5000)
    }

    return {
      copy,
      copied
    }
  }
}
</script>

<style lang="scss"></style>
