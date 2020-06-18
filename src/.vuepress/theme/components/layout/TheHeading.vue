<template>
  <header class="flex flex-wrap pt-8 lg:pt-16">
    <ClientOnly>
      <VueSkipTo />
      <VueAnnouncer />
    </ClientOnly>
    <div class="flex w-full">
      <div class="w-3/12 md:w-1/3 lg:w-1/4">
        <router-link to="/">
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
            >
              <title>HTML Moderno</title>
              <defs />
              <path
                fill="#f4f1ec"
                d="M3 3h22v23H3zM33 3h22v23H33zM34 34h22v23H34zM3 34h22v23H3z"
              />
              <g fill="#ff6f4b">
                <path d="M27.07 28.87H1.8a1.8 1.8 0 01-1.8-1.8V1.8A1.8 1.8 0 011.8 0h25.27a1.8 1.8 0 011.8 1.8v25.27a1.8 1.8 0 01-1.8 1.8zm-10.23-12.6v6.48h5.2V6.14h-5.2v5.98h-4.96V6.14h-5.2v16.6h5.2v-6.47h4.95zM27.07 60H1.8A1.8 1.8 0 010 58.2V32.93a1.8 1.8 0 011.8-1.8h25.27a1.8 1.8 0 011.8 1.8V58.2a1.8 1.8 0 01-1.8 1.8zm-7.78-14.4v8.27h5.18v-16.6h-6.35l-3.57 9.96-3.66-9.97H4.51v16.61h5.2V45.6l2.57 8.28h4.45zM58.2 28.87H32.93a1.8 1.8 0 01-1.8-1.8V1.8a1.8 1.8 0 011.8-1.8H58.2A1.8 1.8 0 0160 1.8v25.27a1.8 1.8 0 01-1.8 1.8zM38.53 6.13v4.13h4.36v12.48h5.2V10.26h4.42V6.13zM58.2 60H32.93a1.8 1.8 0 01-1.8-1.8V32.93a1.8 1.8 0 011.8-1.8H58.2a1.8 1.8 0 011.8 1.8V58.2a1.8 1.8 0 01-1.8 1.8zM40.5 37.26v16.61h10.23v-3.94h-5.02V37.26z" />
              </g>
              <path
                fill="#ff6f4b"
                d="M29.47 22.18a7.71 7.71 0 017.8 7.63 7.71 7.71 0 01-7.8 7.62 7.71 7.71 0 01-7.8-7.62 7.71 7.71 0 017.8-7.63z"
              />
              <path
                fill="#f4f1ec"
                d="M29.76 22a8.1 8.1 0 00-8.26 7.94 8.1 8.1 0 008.26 7.93 8.1 8.1 0 008.27-7.93A8.1 8.1 0 0029.76 22zm-.12 1.58a1.05 1.05 0 011.07 1.02 1.07 1.07 0 01-2.14 0 1.05 1.05 0 011.07-1.02zm4.63 3.31l-3.18.39v3.05l1.54 4.94a.57.57 0 01-.43.7.6.6 0 01-.74-.4l-1.57-4.5h-.49l-1.45 4.6a.6.6 0 01-.78.31.6.6 0 01-.38-.75l1.34-4.85v-3.1l-2.93-.39a.52.52 0 01-.48-.56.55.55 0 01.6-.49l3.56.3h1.55l3.8-.3a.53.53 0 11.04 1.05z"
              />
            </svg>
          </h1>
        </router-link>
      </div>
      <div class="w-9/12 md:w-2/3 lg:w-3/4 flex items-center justify-end">
        <div class="border-r dark:border-dark-200 border-textLight">
          <ClientOnly>
            <DarkMode
              class-name="mode-%cm"
              :meta-theme-color="{
                light: '#f4f1ec',
                dark: '#343743'
              }"
              favicon="#favicon"
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
import { onMounted, watch } from '@vue/composition-api'

import SearchBox from '@SearchBox'
import NavMenu from '@theme/components/NavMenu'
import useDisclosure from '@theme/composable/useDisclosure'

export default {
  name: 'TheHeading',
  components: {
    NavMenu,
    DarkMode,
    SearchBox
  },
  setup (_, { refs, root }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    onMounted(() => refs.searchBox.$el.querySelector('input').setAttribute('aria-label', 'Pesquisar no site'))

    watch('$route', () => {
      if (isOpen.value) {
        onClose()
      }
    })

    function resetDisqus (e) {
      if (root.$disqus.reset) root.$disqus.reset()
    }

    return {
      isOpen,
      onOpen,
      onClose,
      resetDisqus
    }
  }
}
</script>

<style lang="scss"></style>
