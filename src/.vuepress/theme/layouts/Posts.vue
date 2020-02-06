<template>
  <div class="posts">
    <section>
      <the-presentation
        first-title="HTML Moderno"
        second-title="Tornando o desenvolvimento web ainda mais interessante"
      />
      <div class="w-full sm:w-1/4 text-center mt-20">
        <span class="posts__scroll-line relative inline-block bg-textLight dark:bg-textDark" />
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
          v-show="$pagination.hasPrev || $pagination.hasNext"
          class="flex w-full justify-center mt-24"
        >
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
.posts {
  &__scroll-line {
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

  .pagination {
    @apply flex flex-wrap;

    > li {
      @apply p-2;
      > a {
        @apply py-2 px-4 rounded bg-light text-textLight shadow-n9m-light border-none;

        &:hover {
          @apply bg-light text-accent;
        }

        &:active {
          @apply text-accent shadow-inner-n9m-light;
        }
      }

      &.active {
        > a {
          @apply -mt-2 py-4 px-6 text-accent bg-light shadow-inner-n9m-light;
        }
      }

      &.disabled {
        > a {
          @apply text-light-200 #{!important};
        }
        > a:active, > a:focus {
          @apply text-accent bg-light shadow-n9m-light;
        }
      }
    }
  }

}
</style>
