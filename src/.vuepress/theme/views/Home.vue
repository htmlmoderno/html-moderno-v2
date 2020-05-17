<template>
  <div class="home">
    <presentation
      first-title="HTML Moderno"
      second-title="Tornando o desenvolvimento web ainda mais interessante"
    />
    <the-main>
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
        <div
          v-show="getPosts.length > $themeConfig.pagination.perPage"
          class="flex w-full justify-center mt-20"
        >
          <router-link
            to="/posts/page/2"
            class="n9m n9m--active py-3 px-6 flex items-center"
          >
            <span class="text-xs mr-3">VER MAIS ARTIGOS</span>
            <vp-icon
              name="arrow-thin"
              class="text-accent text-3xl"
            />
          </router-link>
        </div>
      </section>
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
  name: 'Home',
  components: {
    Card,
    TheMain,
    Presentation
  },
  setup (_, { root }) {
    const getPosts = filterPosts(root.$site.pages)
    const getHomePosts = sortPostsByDate(getPosts).slice(0, root.$themeConfig.pagination.perPage)

    const posts = prepareCardPost(getHomePosts)
    console.log(posts)

    return {
      posts,
      getPosts
    }
  }
}
</script>

<style lang="scss"></style>
