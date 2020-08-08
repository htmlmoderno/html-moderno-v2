<template>
  <div class="author">
    <presentation
      first-title="POSTS DO AUTOR"
      :second-title="$frontmatter.title"
      class="py-4"
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
      </div>
    </the-main>
  </div>
</template>

<script>
import Card from '@theme/components/Card'
import TheMain from '@theme/components/layout/TheMain'
import Presentation from '@theme/components/Presentation'
import { filterPosts, sortPostsByDate } from '@theme/utils'
import prepareCardPost from '@theme/utils/prepareCardPost'

export default {
  name: 'Author',
  components: {
    Card,
    TheMain,
    Presentation
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
