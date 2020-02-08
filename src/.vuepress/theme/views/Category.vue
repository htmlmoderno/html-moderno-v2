<template>
  <div class="category">
    <section>
      <presentation
        first-title="TODOS OS POSTS"
        :second-title="`Categoria: ${$frontmatter.title}`"
        :icon-name="`cat-${$frontmatter.slug}`"
        class="py-4"
      />
    </section>
    <main
      id="main"
      class="mt-24"
    >
      <section class="w-full layout-section">
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
          <span class="font-medium text-xl">
            <span
              role="img"
              aria-label="emoji carinha triste"
            >😔</span>
            Em breve teremos artigos para essa categoria.
          </span>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Card from '@theme/components/Card'
import Presentation from '@theme/components/Presentation'
import { filterPosts, sortPostsByDate } from '@theme/utils'
import prepareCardPost from '@theme/utils/prepareCardPost'
import { ref, watch } from '@vue/composition-api'

export default {
  name: 'Category',
  components: {
    Presentation,
    Card
  },
  setup (_, { root }) {
    const posts = ref([])
    const allPosts = filterPosts(root.$site.pages)

    watch('$route.path', () => {
      const postsByCurrentCategory = allPosts.filter(page => page.frontmatter.categories.includes(root.$frontmatter.slug))
      posts.value = prepareCardPost(sortPostsByDate(postsByCurrentCategory, true))
    })

    return {
      posts
    }
  }
}
</script>

<style lang="scss"></style>
