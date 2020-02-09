<template>
  <main
    id="#main"
    class="single-post"
  >
    <article
      class="w-full layout-section"
      itemscope="itemscope"
      itemprop="blogPost"
      itemtype="https://schema.org/BlogPosting"
    >
      <meta
        itemprop="mainEntityOfPage"
        :content="$route.fullPath"
      >
      <div class="single-post__container">
        <h1
          class="w-full text-3xl sm:text-4xl font-medium"
          itemprop="name headline"
        >
          {{ post.title }}<span class="text-accent">.</span>
        </h1>
        <meta
          itemprop="description"
          :content="post.description"
        >
        <div class="w-full flex items-center text-xs mt-4">
          <time
            :datetime="post.date.datetime"
            itemprop="datePublished"
            class="uppercase"
          >
            {{ post.date.short }}
          </time>
          <meta
            itemprop="dateModified"
            :content="post.updated_at"
          >
          <span :class="`mx-2 text-cat-${post.mainCategory}`">//</span>
          <div
            class="inline"
            itemprop="author"
            itemscope="itemscope"
            itemtype="https://schema.org/Person"
          >
            <router-link
              :to="post.author.path"
              class="underline"
              itemprop="url"
            >
              <span class="sr-only">Ver posts do autor</span>
              <span itemprop="name">{{ post.author.frontmatter.name }}</span>
            </router-link>
          </div>
        </div>
      </div>
      <section
        v-if="post.cover"
        itemprop="image"
        itemscope="itemscope"
        itemtype="https://schema.org/ImageObject"
      >
        <figure
          role="figure"
          :aria-label="post.cover.caption"
        >
          <responsive-picture
            :cover-name="post.cover.path"
            class="n9m block mt-12 w-full p-4"
          >
            <img
              class="w-full inline rounded-lg"
              itemprop="url"
              :src="`${post.cover.path}.${post.cover.extension}`"
              :title="post.cover.alternativeText"
              :alt="post.cover.alternativeText"
            >
          </responsive-picture>
          <div class="text-center text-xs mt-4 text-gray-500 italic tracking-wider">
            {{ post.cover.caption }}
          </div>
        </figure>
      </section>

      <section class="single-post__container mt-24">
        <table-contents :headers="post.headers" />
      </section>

      <section class="single-post__container mt-24">
        <newsletter :small="true" />
      </section>

      <section class="single-post__container mt-24">
        <comment />
      </section>
    </article>
  </main>
</template>

<script>
import ResponsivePicture from '@theme/components/ResponsivePicture'
import TableContents from '@theme/components/TableContents'
import { getSlugPost } from '@theme/utils'

export default {
  name: 'Post',
  components: {
    TableContents,
    ResponsivePicture,
    Comment: () => import('@vuepress/plugin-blog/lib/client/components/Comment'),
    newsletter: () => import('@theme/components/Newsletter')
  },
  setup (_, { root }) {
    const fm = root.$frontmatter
    const datePost = new Date(fm.date)
    const slug = getSlugPost(root.$route.fullPath)
    const author = root.$site.pages.find(page => page.frontmatter.nickname === fm.author)
    const post = {
      title: fm.title,
      description: fm.description,
      author: author,
      mainCategory: fm.categories[0],
      updated_at: root.$page.lastUpdated,
      headers: [],
      date: {
        short: new Intl.DateTimeFormat('default', { month: 'short', day: 'numeric' }).format(datePost),
        datetime: fm.date
      },
      cover: {}
    }

    if (root.$page.headers && root.$page.headers.length) {
      post.headers = root.$page.headers.filter(header => header.level < 3)
    }

    if (fm.cover) {
      post.cover = {
        ...fm.cover[0],
        path: `${fm.cover[0].path}${slug}`
      }
    }

    console.log(post)

    return {
      post
    }
  }
}
</script>

<style lang="scss">
.single-post {
  .single-post__container {
    @apply w-full mx-auto;

    @screen md {
      @apply w-4/5;
    }

    @screen xl {
      @apply w-3/5;
    }
  }
}
</style>
