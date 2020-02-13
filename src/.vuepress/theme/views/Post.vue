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
      <div class="single-post__container single-post__container--no-mt">
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
        v-if="post.cover && post.cover.path"
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
          <div class="text-center text-sm mt-4 text-gray-600">
            {{ post.cover.caption }}
          </div>
        </figure>
      </section>

      <section class="single-post__container pb-6">
        <table-contents :headers="post.headers" />
      </section>

      <section class="single-post__container">
        <Content />
      </section>

      <section class="single-post__container single-post__box-share border-t border-solid border-light-200 dark:border-dark-200">
        <lazy-hydrate :when-visible="{ rootMargin: '100px' }">
          <share-post />
        </lazy-hydrate>
      </section>

      <section class="single-post__container single-post__box-comment border-t border-solid border-light-200 dark:border-dark-200">
        <lazy-hydrate :when-visible="{ rootMargin: '100px' }">
          <comments />
        </lazy-hydrate>
      </section>

      <section class="single-post__container single-post__box-comment border-t border-solid border-light-200 dark:border-dark-200">
        <web-mentions />
      </section>
    </article>
  </main>
</template>

<script>
import ResponsivePicture from '@theme/components/ResponsivePicture'
import TableContents from '@theme/components/TableContents'
import { getSlugPost } from '@theme/utils'
import { onMounted } from '@vue/composition-api'

export default {
  name: 'Post',
  components: {
    TableContents,
    ResponsivePicture,
    WebMentions: () => import('@theme/components/WebMentions'),
    SharePost: () => import('@theme/components/SharePost'),
    Comments: () => import('@theme/components/Comments')
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

    onMounted(() => {
      const anchors = document.querySelectorAll('.header-anchor')
      anchors.forEach(link => {
        link.setAttribute('aria-label', `Link âncora para: ${link.parentElement.textContent.replace('#', '').trim()}`)
      })
    })

    return {
      post
    }
  }
}
</script>

<style lang="scss">
.single-post {
  &__container {
    @apply w-full mx-auto mt-24;

    &--no-mt {
      @apply mt-0;
    }

    @screen md {
      @apply w-4/5;
    }

    @screen xl {
      @apply w-3/5;
    }
  }

  &__box-share {
    @apply mt-20 pt-16;
  }

  &__box-comment {
    @apply mt-16 pt-24;
  }
}
</style>
