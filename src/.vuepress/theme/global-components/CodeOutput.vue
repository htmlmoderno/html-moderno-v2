<template>
  <focus-lock :disabled="!isFullScreen">
    <div
      ref="output"
      class="output flex flex-wrap n9m overflow-hidden"
      :class="{ 'output--fullscreen': isFullScreen }"
    >
      <div class="output__header w-full flex justify-between px-6 py-2 bg-light-200 dark:bg-dark-800">
        <span class="output__browser-btns" />
        <div class="flex items-center text-xs text-light-700 dark:text-textDark">
          <span>
            {{ console ? 'CONSOLE' : 'OUTPUT' }}
          </span>
          <!-- eslint-disable -->
          <button
            type="button"
            class="ml-2 p-2"
            :title="ariaLabel"
            @click="setFullScreen"
          >
          <!-- eslint-enable -->
            <span class="sr-only">{{ ariaLabel }} {{ title }}</span>
            <vp-icon
              v-show="isFullScreen"
              class="text-xs"
              name="exit-fullscreen"
            />

            <vp-icon
              v-show="!isFullScreen"
              class="text-xs"
              name="fullscreen"
            />
          </button>
        </div>
      </div>

      <div
        class="output__body w-full px-6 pt-4 pb-2 bg-light dark:bg-dark dark:text-textDark"
        :style="`height: ${isFullScreen ? '100%' : height }`"
      >
        <iframe
          ref="outputIframe"
          :title="title"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen="true"
          scrolling="yes"
        >
          Your browser doesn't support iFrames.
        </iframe>
      </div>
    </div>
  </focus-lock>
</template>

<script>
import FocusLock from 'vue-focus-lock'

import { ref, onMounted, onUnmounted } from '@vue/composition-api'

export default {
  name: 'CodeOutput',
  components: {
    FocusLock
  },
  props: {
    selector: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    console: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '280px'
    }
  },
  setup ({ selector }, { root, refs }) {
    const isFullScreen = ref(false)
    const ariaLabel = isFullScreen.value ? 'Sair da tela cheia' : 'Ver em tela cheia'

    onMounted(() => {
      const snippet = document.querySelector(`${selector} > pre`)
      window.addEventListener('keydown', escFullScreen, true)
      root.$nextTick(() => {
        const iframeBody = refs.outputIframe.contentDocument.getElementsByTagName('body')[0]
        iframeBody.innerHTML = snippet.textContent
        if (localStorage.getItem('darkMode')) {
          iframeBody.style.color = '#e3e3e3'
        }
      })
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', escFullScreen, true)
    })

    function escFullScreen (e) {
      console.log('CodeOutput', e)
      if (e.key === 'Escape' && isFullScreen.value) setFullScreen()
    }

    function setFullScreen () {
      isFullScreen.value = !isFullScreen.value
      document.getElementsByTagName('body')[0].style.overflow = isFullScreen.value ? 'hidden' : 'auto'
    }

    return {
      ariaLabel,
      isFullScreen,
      escFullScreen,
      setFullScreen
    }
  }
}
</script>

<style lang="scss">
.output {
  &--fullscreen {
    @apply fixed z-50 top-0 left-0 w-full h-full mt-0 rounded-none shadow-none;
  }

  &__header {
    height: 50px;
  }

  &__browser-btns {
    @apply relative;
    &:before {
      @apply absolute left-0 rounded-full;
      top: 12px;
      content: '';
      width: 11px;
      height: 11px;
      background-color: #d1c1a7;
      box-shadow: 18px 0 0 0 #d1c1a7, 36px 0 0 0 #d1c1a7;
    }
  }
}
</style>
