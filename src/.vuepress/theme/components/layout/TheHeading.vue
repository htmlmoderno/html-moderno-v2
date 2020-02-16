<template>
  <header class="flex flex-wrap pt-8 lg:pt-16">
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
        <div class="border-r border-solid border-textLight dark:border-textDark">
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
    <nav class="header-menu w-full max-w-full flex p-2 justify-start sm:justify-end overflow-auto sm:overflow-hidden">
      <h2 class="sr-only">
        Menu de navegação
      </h2>
      <ul class="flex mt-4 relative p-2">
        <li
          v-for="link in $themeConfig.menu.links"
          :key="link.label"
          class="text-xs mr-4 last:mr-0"
        >
          <router-link
            :to="link.to"
            class="block n9m n9m--active py-3 px-4 font-medium hover:text-accent"
          >
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </nav>
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

<style lang="scss">
.header-menu {
  > ul {
    transition: all .5s;
    width: 200vw;

    @screen sm {
      width: auto;
    }

    > li {
      width: max-content;
    }
  }
}
</style>
