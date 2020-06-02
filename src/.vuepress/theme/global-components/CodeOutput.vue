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
          aria-hidden="true"
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
import { ref, onMounted, onUnmounted } from '@vue/composition-api'
import FocusLock from 'vue-focus-lock'

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
    styleSelector: {
      type: String,
      default: ''
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
  setup ({ selector, styleSelector }, { root, refs }) {
    const isFullScreen = ref(false)
    const ariaLabel = isFullScreen.value ? 'Sair da tela cheia' : 'Ver em tela cheia'

    onMounted(() => {
      window.addEventListener('keydown', escFullScreen, true)
      root.$nextTick(() => {
        insertContent(refs.outputIframe, selector)
        insertStyle(refs.outputIframe, styleSelector)
      })
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', escFullScreen, true)
    })

    function escFullScreen (e) {
      if (e.key === 'Escape' && isFullScreen.value) setFullScreen()
    }

    function setFullScreen () {
      isFullScreen.value = !isFullScreen.value
      document.getElementsByTagName('body')[0].style.overflow = isFullScreen.value ? 'hidden' : 'auto'
    }

    function insertContent (iframe) {
      const snippet = document.querySelector(`${selector} > pre`)
      const iframeBody = iframe.contentDocument.getElementsByTagName('body')[0]
      iframeBody.innerHTML = snippet.textContent
    }

    function insertStyle (iframe, styleSelector) {
      let defaultStyle = `
        body {
          font-family: Roboto, Calibri, Arial;
          color: ${localStorage.getItem('colorMode') ? '#E3E3E3' : '#573E48'}
        }
      `
      if (styleSelector) {
        const elWithStyle = document.querySelector(`${styleSelector} > pre`)
        defaultStyle = `
          ${defaultStyle}
          ${elWithStyle ? elWithStyle.textContent : ''}
        `
      }
      const iframeHead = iframe.contentDocument.getElementsByTagName('head')[0]
      const styleElement = document.createElement('style')
      styleElement.innerHTML = defaultStyle
      iframeHead.appendChild(styleElement)
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
