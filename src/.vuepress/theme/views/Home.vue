<template>
  <div class="home">
    <section>
      <presentation
        first-title="HTML Moderno"
        second-title="Tornando o desenvolvimento web ainda mais interessante"
      />
      <div class="w-full sm:w-1/4 text-center mt-20">
        <span class="home__scroll-line relative inline-block bg-textLight dark:bg-textDark" />
      </div>
    </section>
    <main
      id="main"
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
        return getPosts.value.slice(0, root.$themeConfig.pagination.perPage).sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        })
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

<style lang="scss">
.home {
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
}
</style>
