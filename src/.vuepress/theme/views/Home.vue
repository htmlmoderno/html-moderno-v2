<template>
  <div class="home">
    <section>
      <presentation
        first-title="HTML Moderno"
        second-title="Tornando o desenvolvimento web ainda mais interessante"
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
            v-for="post in getHomePosts"
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
    </main>
  </div>
</template>

<script>
import Presentation from '@theme/components/Presentation'
import { computed } from '@vue/composition-api'

export default {
  name: 'Home',
  components: {
    Presentation,
    Card: () => import('@theme/components/Card')
  },
  setup (_, { root }) {
    const getPosts = computed(() => root.$site.pages.filter(page => page.id === 'post'))
    const getHomePosts = computed(() => {
      if (getPosts.value.length) {
        return getPosts.value.sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        }).slice(0, root.$themeConfig.pagination.perPage)
      }
      return []
    })

    return {
      getPosts,
      getHomePosts
    }
  }
}
</script>

<style lang="scss"></style>
