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
        <div class="border-r border-textLight dark:border-textDark">
          <dark-mode-toggle class="px-6" />
        </div>
        <div class="w-2/4 ml-8">
          <search-box
            placeholder="Tecle 's' para pesquisar"
            class="n9m-search n9m--inner"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  name: 'TheHeading',
  components: {
    SearchBox,
    DarkModeToggle: () => import('@theme/components/DarkModeToggle')
  }
}
</script>

<style lang="scss"></style>
