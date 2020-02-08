<template>
  <header class="flex pt-8 lg:pt-16">
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
      <div>
        <dark-mode-toggle />
      </div>
      <div class="sm:mx-4 sm:pr-3 border-r border-solid border-textLight dark:border-textDark">
        <button
          type="button"
          class="py-2 px-6 font-medium"
        >
          MENU
        </button>
      </div>
      <div>
        <button
          type="button"
          class="py-2 px-6 font-medium"
        >
          <span class="sr-only">Pesquisar no site</span>
          <vp-icon name="search" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeading',
  components: {
    DarkModeToggle: () => import('@theme/components/DarkModeToggle')
  }
}
</script>

<style lang="scss"></style>
