<template>
  <div class="category">
    <presentation
      first-title="TODOS OS POSTS"
      :second-title="`Categoria: ${$frontmatter.title}`"
      :icon-name="`cat-${$frontmatter.slug}`"
      class="py-4"
    />
    <the-main>
      <div class="w-full layout-section">
        <masonry
          v-show="posts.length"
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
        <div v-show="!posts.length">
          <span class="font-bold text-xl">
            <span
              role="img"
              aria-label="emoji carinha triste"
            >😔</span>
            Em breve teremos artigos para essa categoria.
          </span>
        </div>
      </div>
    </the-main>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

import Card from '@theme/components/Card'
import TheMain from '@theme/components/layout/TheMain'
import Presentation from '@theme/components/Presentation'
import { filterPosts, sortPostsByDate } from '@theme/utils'
import prepareCardPost from '@theme/utils/prepareCardPost'

export default {
  name: 'Category',
  components: {
    Card,
    TheMain,
    Presentation
  },
  setup (_, { root }) {
    const posts = ref([])
    const allPosts = filterPosts(root.$site.pages)

    watch(() => root.$route.path, () => {
      const postsByCurrentCategory = allPosts.filter(page => page.frontmatter.categories.includes(root.$frontmatter.slug))
      posts.value = prepareCardPost(sortPostsByDate(postsByCurrentCategory, true))
    }, {
      immediate: true
    })

    return {
      posts
    }
  }
}
</script>

<style lang="scss"></style>
