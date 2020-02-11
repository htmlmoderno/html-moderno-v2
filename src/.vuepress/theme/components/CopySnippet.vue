<template>
  <div class="copy-snippet flex items-center">
    <span
      class="mr-2 opacity-0 transition-opacity duration-500"
      :class="{ 'opacity-100': copied }"
    >
      COPIADO
    </span>
    <button
      ref="copySnippet"
      class="copy-snippet__button p-4"
      :aria-labelledby="`${labelledbyId}_text ${labelledbyId}`"
      @click="copy"
      @keydown.enter="copy"
    >
      <vp-icon
        name="copy"
        class="text-lg text-textDark"
      />
      <span
        :id="`${labelledbyId}_text`"
        class="sr-only"
      >
        COPIAR
      </span>
    </button>
  </div>
</template>

<script>
import { useClipboard } from 'vue-use-web'

import { ref, onMounted } from '@vue/composition-api'

export default {
  name: 'CopySnippet',
  setup (_, { refs }) {
    const labelledbyId = ref(null)
    const copied = ref(false)
    const { write } = useClipboard()

    onMounted(() => {
      labelledbyId.value = refs.copySnippet.parentElement.previousElementSibling.getAttribute('id')
    })

    function copy () {
      write(refs.copySnippet.previousElementSibling.textContent)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 5000)
    }

    return {
      copy,
      copied,
      labelledbyId
    }
  }
}
</script>

<style lang="scss"></style>
