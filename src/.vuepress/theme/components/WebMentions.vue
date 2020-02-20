<template>
  <nav
    v-show="webmentions.length"
    class="webmentions"
  >
    <h2 class="text-2xl font-medium">
      ({{ webmentions.length }}) Webmentions<span class="text-accent">.</span>
    </h2>

    <meta
      itemprop="commentCount"
      :content="mentions.length"
    >

    <div class="webmentions-interact my-12">
      <div
        v-if="likes.length"
        class="flex flex-wrap items-center"
      >
        <div
          v-show="likes.length < avatarLimits"
          class="w-full font-medium mb-4 flex items-center"
        >
          <vp-icon
            name="like"
            class="mr-1 text-accent"
          />
          <span class="text-xs">LIKES</span>
        </div>
        <ul class="flex w-full sm:w-4/6 lg:w-9/12 webmentions-interact__list">
          <li
            v-for="(like, index) in likes.slice(0, avatarLimits)"
            :key="`like${index}`"
            :style="`left: ${35 * index}px`"
          >
            <a
              :href="like.author.url"
              :title="like.author.name"
              :aria-label="`Ir para o site do ${like.author.name}`"
              rel="nofollow"
            >
              <img
                class="rounded-full"
                :src="like.author.photo"
                :alt="`Avatar de ${like.author.name}`"
              >
            </a>
          </li>
        </ul>
        <div class="w-full sm:w-2/6 lg:w-3/12 mt-3 sm:mt-0 sm:text-right">
          <span
            v-show="likes.length > avatarLimits"
            class="text-sm"
          >
            +{{ likes.length - avatarLimits }} Gostaram disso
          </span>
        </div>
      </div>
      <div
        v-if="reposts.length"
        class="flex flex-wrap items-center mt-10"
      >
        <div
          v-show="reposts.length < avatarLimits"
          class="w-full font-medium mb-4 flex items-center"
        >
          <vp-icon
            name="share"
            class="mr-1 text-accent"
          />
          <span class="text-xs">COMPARTILHAMENTOS</span>
        </div>
        <ul class="flex w-full sm:w-4/6 lg:w-9/12 webmentions-interact__list">
          <li
            v-for="(repost, index) in reposts"
            :key="`repost${index}`"
            :style="`left: ${35 * index}px`"
          >
            <a
              :href="repost.author.url"
              :title="repost.author.name"
              :aria-label="`Ir para o site do ${repost.author.name}`"
              rel="nofollow"
            >
              <img
                class="rounded-full"
                :src="repost.author.photo"
                :alt="`Avatar de ${repost.author.name}`"
              >
            </a>
          </li>
        </ul>
        <div
          class="w-full sm:w-2/6 lg:w-3/12 mt-3 sm:mt-0 sm:text-right"
        >
          <span
            v-show="reposts.length > avatarLimits"
            class="text-sm"
          >
            +{{ reposts.length - avatarLimits }} Compartilharam
          </span>
        </div>
      </div>
    </div>

    <div class="webmentions-comments mt-24">
      <h3 class="text-xl mb-12">
        Comentários na web<span class="text-accent">.</span>
      </h3>
      <ul
        v-if="mentions.length"
        class="webmentions-comments__list"
      >
        <li
          v-for="(mention, index) in mentions"
          :key="`mention${index}`"
          class="mb-16"
        >
          <article
            class="flex flex-wrap"
            itemprop="comment"
            itemscope="itemscope"
            itemtype="https://schema.org/Comment"
            itemref="author-comment-image"
          >
            <div
              class="w-full flex items-center"
              itemprop="author"
              itemscope="itemscope"
              itemtype="https://schema.org/Person"
            >
              <a
                :href="mention.author.url"
                :title="mention.author.name"
                :aria-label="`Ir para o site do ${mention.author.name}`"
                rel="nofollow"
                itemprop="url"
              >
                <img
                  id="author-comment-image"
                  class="rounded-full"
                  itemprop="image"
                  :src="mention.author.photo"
                  :alt="`Avatar de ${mention.author.name}`"
                >
              </a>
              <p
                class="font-medium ml-4"
                itemprop="name"
              >
                {{ mention.author.name }}
              </p>
            </div>
            <div class="w-full mt-2">
              <p
                v-if="mention.content"
                itemprop="text"
                class="text-sm"
                v-html="mention.content.html || mention.content.text"
              />
              <time
                itemprop="datePublished"
                :datetime="mention.published"
                class="text-gray-600 text-xs"
              >
                {{ new Intl.DateTimeFormat('default', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(mention.published)) }}
              </time>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref, watch, computed } from '@vue/composition-api'
import { useWindowSize } from 'vue-use-web'

import fetch from 'node-fetch'

export default {
  name: 'WebMentions',
  setup (_, { root }) {
    const webmentions = ref([])
    const avatarLimits = ref(16)
    const urlFetch = root.$themeConfig.webmentions.endpoint.replace('#URLPOST#', `${process.env.URL_BASE}${root.$route.fullPath}`)

    const mentions = computed(() => {
      if (!webmentions.value.length) return []
      return webmentions.value.filter(item => {
        return ['mention-of', 'in-reply-to'].includes(item['wm-property'])
      })
    })

    const likes = computed(() => {
      if (!webmentions.value.length) return []
      return webmentions.value.filter(item => {
        return item['wm-property'] === 'like-of'
      })
    })

    const reposts = computed(() => {
      if (!webmentions.value.length) return []
      return webmentions.value.filter(item => {
        return item['wm-property'] === 'repost-of'
      })
    })

    const { width } = useWindowSize({ throttleMs: 100 })

    watch(width, val => responsiveAvatars(val))

    function responsiveAvatars (val) {
      const sizes = {
        480: 7,
        1024: 10,
        1400: 14
      }
      for (const size in sizes) {
        if (val < Number(size)) {
          avatarLimits.value = sizes[size]
          break
        }
        avatarLimits.value = 16
      }
    }

    fetch(urlFetch)
      .then(res => res.json())
      .then(res => {
        webmentions.value = res.children
      })

    return {
      likes,
      reposts,
      mentions,
      webmentions,
      avatarLimits
    }
  }
}
</script>

<style lang="scss">
.webmentions-interact {
  &__list {
    @apply relative;
    height: 50px;

    li {
      @apply absolute z-10;
      transition: transform .3s;
      width: 50px;

      &:hover {
        @apply z-20;
        transform: scale(1.5,1.5);
      }

      a {
        @apply block;
      }

      img {
        @apply w-full;
      }
    }
  }
}

.webmentions-comments {
  &__list {
    > li {
      img {
        width: 50px;
      }

      a {
        @apply text-accent;
      }
    }
  }
}
</style>
