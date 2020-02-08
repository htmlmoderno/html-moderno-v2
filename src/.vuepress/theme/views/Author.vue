<template>
  <div class="home">
    <section>
      <presentation
        first-title="POSTS DO AUTOR"
        :second-title="$frontmatter.title"
        class="py-4"
      />
    </section>
    <main
      id="main"
      class="mt-24"
    >
      <section class="w-full layout-section">
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
      </section>
    </main>
  </div>
</template>

<script>
import Card from '@theme/components/Card'
import Presentation from '@theme/components/Presentation'
import { filterPosts, sortPostsByDate } from '@theme/utils'
import prepareCardPost from '@theme/utils/prepareCardPost'

export default {
  name: 'Category',
  components: {
    Presentation,
    Card
  },
  setup (_, { root }) {
    const allPosts = filterPosts(root.$site.pages)
    const postsByCurrentAuthor = allPosts.filter(page => page.frontmatter.author === root.$frontmatter.nickname)
    const posts = prepareCardPost(sortPostsByDate(postsByCurrentAuthor, true))

    return {
      posts
    }
  }
}
</script>

<style lang="scss"></style>
