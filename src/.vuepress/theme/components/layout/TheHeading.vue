<template>
  <header class="flex flex-wrap pt-8 lg:pt-16">
    <ClientOnly>
      <VueSkipTo label="Pular para o conteúdo principal" />
      <VueAnnouncer />
    </ClientOnly>
    <div class="flex w-full">
      <div class="w-3/12 md:w-1/3 lg:w-1/4">
        <router-link
          to="/"
          title="HTML Moderno"
        >
          <img
            class="inline"
            src="/images/html-moderno-logo.svg"
            alt="Logo HTML Moderno 4 quadrados laranja com 1 letra do HTML cada e símbolo universal de acessibilidade no centro"
          >
        </router-link>
      </div>
      <div class="w-9/12 md:w-2/3 lg:w-3/4 flex items-center justify-end">
        <div class="border-r dark:border-dark-200 border-textLight">
          <ClientOnly>
            <DarkMode
              v-bind="colorModeConfig"
              class="px-6 py-2"
              @click.native="resetDisqus"
            >
              <template v-slot:default="{ mode }">
                <vp-icon
                  :name="mode"
                  width="24px"
                  height="24px"
                />
              </template>
            </DarkMode>
          </ClientOnly>
        </div>
        <div class="hidden sm:block sm:w-2/3 lg:w-2/5 ml-8">
          <search-box
            ref="searchBox"
            class="n9m-search n9m--inner"
          />
        </div>
        <button
          class="ml-2 px-4 py-2 text-sm font-bold"
          aria-label="Abrir menu de navegaçãao"
          aria-controls="nav-menu"
          :disabled="isOpen"
          :aria-expanded="isOpen ? 'true' : 'false'"
          @click="onOpen"
        >
          MENU
        </button>
      </div>
    </div>
    <NavMenu
      id="nav-menu"
      :show="isOpen"
      @onClose="onClose"
    />
  </header>
</template>

<script>
import { DarkMode } from '@vue-a11y/dark-mode'
import { onMounted, ref, watch } from '@vue/composition-api'

import SearchBox from '@SearchBox'
import useDisclosure from '@theme/composable/useDisclosure'

export default {
  name: 'TheHeading',
  components: {
    DarkMode,
    SearchBox,
    NavMenu: () => import(/* webpackChunkName: "NavMenu" */ '@theme/components/NavMenu')
  },
  setup (_, { refs, root }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const colorModeConfig = ref(root.$themeConfig.colorMode)

    onMounted(() => refs.searchBox.$el.querySelector('input').setAttribute('aria-label', 'Pesquisar no site'))

    watch(() => root.$route, () => {
      if (isOpen.value) {
        onClose()
      }
    })

    watch(() => colorModeConfig, newConfig => {
      colorModeConfig.value = { ...newConfig }
    })

    function resetDisqus (e) {
      if (root.$disqus.reset) root.$disqus.reset()
    }

    return {
      isOpen,
      onOpen,
      onClose,
      resetDisqus,
      colorModeConfig
    }
  }
}
</script>

<style lang="scss"></style>
