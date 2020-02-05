<template>
  <div class="home">
    <section>
      <the-presentation
        first-title="HTML Moderno"
        second-title="Tornando o desenvolvimento web ainda mais interessante"
      />
      <div class="w-full sm:w-1/4 text-center mt-20">
        <span class="home__scroll-line relative inline-block bg-textLight dark:bg-textDark" />
      </div>
    </section>
    <main id="main">
      <section class="w-full layout-section">
        <masonry
          :cols="{default: 3, 1024: 2, 600: 1}"
          :gutter="50"
        >
          <div
            v-for="page in $pagination.pages"
            :key="page.key"
            class="mt-12"
          >
            <card :page="page" />
          </div>
        </masonry>
        <div
          v-show="$pagination.hasNext"
          class="flex w-full justify-center mt-20"
        >
          <!-- TODO: Estilizar paginação  -->
          <pagination />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  components: {
    Card: () => import('@theme/components/Card'),
    Pagination: () => import('@vuepress/plugin-blog/lib/client/components/Pagination'),
    ThePresentation: () => import('@theme/components/layout/ThePresentation')
  }
}
</script>

<style lang="scss">
.home__scroll-line {
  width: 2px;
  height: 30vh;
  &:before {
    @apply absolute bottom-0 rounded-full;
    background-color: inherit;
    content: '';
    width: 6px;
    height: 6px;
    left: -2px;
  }
}
</style>
