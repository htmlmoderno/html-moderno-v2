<template>
  <main
    id="main"
    class="single-post"
  >
    <article class="w-full layout-section">
      <div class="single-post__container single-post__container--no-mt">
        <h1 class="w-full text-3xl sm:text-4xl font-bold">
          {{ post.title }}<span class="text-accent">.</span>
        </h1>
        <div class="w-full flex items-center text-sm mt-4">
          <time
            :datetime="post.date.datetime"
            class="uppercase"
          >
            {{ post.date.short }}
          </time>
          <span :class="`mx-2 font-bold text-cat-${post.mainCategory}`">//</span>
          <div class="inline">
            <router-link
              :to="post.author.path"
              class="underline"
            >
              <span class="sr-only">Ver posts do autor</span>
              <span>{{ post.author.frontmatter.name }}</span>
            </router-link>
          </div>
        </div>
      </div>

      <figure
        v-if="post.cover && post.cover.path"
        :aria-label="post.cover.caption"
      >
        <responsive-picture
          :cover-name="post.cover.path"
          class="n9m block mt-12 w-full p-4"
        >
          <img
            class="w-full rounded-lg bg-light-200 inline-block"
            style="min-height: 400px;"
            :src="`${post.cover.path}.${post.cover.extension}`"
            :title="post.cover.alternativeText"
            :alt="post.cover.alternativeText"
          >
        </responsive-picture>
        <figcaption class="text-center mt-4 text-lightText">
          {{ post.cover.caption }}
        </figcaption>
      </figure>

      <table-contents
        class="single-post__container pb-6"
        :headers="post.headers"
      />

      <div class="single-post__container">
        <intersection-observer>
          <template v-slot:default="{ show }">
            <player
              v-if="show && post.audio"
              class="h-40"
              :class="{ 'h-auto': show }"
              :track="post.audio"
              :title="post.title"
            />
          </template>
        </intersection-observer>
      </div>

      <section class="single-post__container">
        <Content />
      </section>

      <section class="single-post__container single-post__box-share border-t border-light-200 dark:border-dark-200">
        <share-post />
      </section>

      <component
        :is="'script'"
        type="application/ld+json"
        v-html="schema.trim()"
      />

      <last-update class="single-post__container" />
      <comments class="single-post__container single-post__box-comment border-t border-light-200 dark:border-dark-200" />
      <web-mentions class="single-post__container single-post__box-comment border-t border-light-200 dark:border-dark-200" />
    </article>
  </main>
</template>

<script>
import ResponsivePicture from '@theme/components/ResponsivePicture'
import { getSlugPost } from '@theme/utils'
import { generateSchemaPost } from '@theme/utils/generateSchema'

export default {
  name: 'Post',
  components: {
    ResponsivePicture,
    TableContents: () => import(/* webpackChunkName: "TableContents" */ '@theme/components/TableContents'),
    Player: () => import(/* webpackChunkName: "Player" */ '@theme/components/Player'),
    WebMentions: () => import(/* webpackChunkName: "WebMentions" */ '@theme/components/WebMentions'),
    SharePost: () => import(/* webpackChunkName: "SharePost" */ '@theme/components/SharePost'),
    LastUpdate: () => import(/* webpackChunkName: "LastUpdate" */ '@theme/components/LastUpdate'),
    Comments: () => import(/* webpackChunkName: "Comment" */ '@theme/components/Comments')
  },
  setup (_, { root }) {
    const fm = root.$frontmatter
    const datePost = new Date(fm.date)
    const slug = getSlugPost(root.$route.fullPath)
    const author = root.$site.pages.find(page => page.frontmatter.nickname === fm.author)
    const post = {
      title: fm.title,
      audio: fm.audio || null,
      description: fm.description,
      author: author,
      mainCategory: fm.categories[0],
      updated_at: root.$page.lastUpdated,
      headers: [],
      date: {
        short: datePost.toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' }),
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

    const schema = generateSchemaPost({
      ...post,
      fullPath: root.$route.fullPath
    })

    return {
      post,
      schema
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
      @apply w-5/6;
    }

    @screen xl {
      @apply w-4/6;
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
