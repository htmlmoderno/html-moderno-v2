<template>
  <header class="flex flex-wrap pt-8 lg:pt-16">
    <ClientOnly>
      <VueSkipTo />
      <VueAnnouncer />
    </ClientOnly>
    <div class="flex w-full">
      <div class="w-3/12 md:w-1/2">
        <router-link to="/">
          <img
            class="inline"
            src="/images/html-moderno-logo.svg"
            alt="Logo do HTML Moderno 4 quadrados laranja com 1 letra do HTML cada mais símbolo universal acessibilidade no centro"
            title="HTML Moderno"
          >
        </router-link>
      </div>
      <div class="w-9/12 md:w-1/2 flex items-center justify-end">
        <div class="border-r dark:border-dark-200 border-textLight">
          <ClientOnly>
            <VueDarkMode
              class-name="mode-%cm"
              class="px-6 py-2"
            >
              <template v-slot="{ mode }">
                <vp-icon
                  :name="mode"
                  width="24px"
                  height="24px"
                />
              </template>
            </VueDarkMode>
          </ClientOnly>
        </div>
        <div class="w-2/4 ml-8">
          <search-box
            ref="searchBox"
            placeholder="Tecle 's' para pesquisar"
            class="n9m-search n9m--inner"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { onMounted } from '@vue/composition-api'

import SearchBox from '@SearchBox'

export default {
  name: 'TheHeading',
  components: {
    SearchBox
  },
  setup (_, { refs }) {
    onMounted(() => refs.searchBox.$el.querySelector('input').setAttribute('aria-label', 'Pesquisar no site'))

    return {}
  }
}
</script>

<style lang="scss"></style>
