<template>
  <div class="posts">
    <presentation
      :first-title="presentation.firstTitle"
      :second-title="presentation.secondTitle"
      :more-info="presentation.page"
    />
    <the-main>
      <div class="w-full layout-section">
        <masonry
          :cols="{default: 3, 1024: 2, 600: 1}"
          :gutter="50"
        >
          <div
            v-for="post in posts"
            :key="post.key"
            class="mt-12"
          >
            <card :post="post" />
          </div>
        </masonry>
        <div
          v-show="$pagination.hasPrev || $pagination.hasNext"
          class="flex w-full justify-center mt-24"
        >
          <pagination />
        </div>
      </div>
    </the-main>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import Pagination from '@vuepress/plugin-blog/lib/client/components/Pagination'

import Card from '@theme/components/Card'
import TheMain from '@theme/components/layout/TheMain'
import Presentation from '@theme/components/Presentation'
import prepareCardPost from '@theme/utils/prepareCardPost'

export default {
  name: 'Posts',
  components: {
    Presentation,
    TheMain,
    Card,
    Pagination
  },
  setup (_, { root }) {
    const presentation = computed(() => {
      const data = {
        post: {
          firstTitle: 'HTML Moderno',
          secondTitle: 'Todos os posts',
          page: root.$pagination ? `Página ${root.$pagination.paginationIndex + 1}` : ''
        },
        tag: {
          firstTitle: 'POSTS DA TAG',
          secondTitle: root.$currentTag ? `${root.$currentTag.key}` : '',
          page: root.$pagination ? `Página ${root.$pagination.paginationIndex + 1}` : ''
        }
      }
      return data[root.$route.meta.pid]
    })

    const posts = prepareCardPost(root.$pagination.pages)

    return {
      posts,
      presentation
    }
  }
}
</script>

<style lang="scss">
.posts {
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
