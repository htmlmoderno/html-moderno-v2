<template>
  <nav
    v-show="webmentions.length"
    class="webmentions"
  >
    <h2 class="text-2xl font-medium">
      Webmentions<span class="text-accent">.</span>
    </h2>

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
        >
          <div class="w-3/12 md:w-1/12 flex justify-center">
            <a
              :href="mention.author.url"
              :title="mention.author.name"
              :aria-label="`Ir para o site do ${mention.author.name}`"
              rel="nofollow"
            >
              <img
                class="rounded-full"
                :src="mention.author.photo"
                :alt="`Avatar de ${mention.author.name}`"
              >
            </a>
          </div>
          <div class="w-9/12 md:w-11/12 pl-3 md:pl-6">
            <span class="font-medium">
              {{ mention.author.name }}
            </span>
            <time
              :datetime="mention.published"
              class="text-gray-600 text-xs block sm:inline sm:ml-2"
            >
              {{ new Intl.DateTimeFormat('default', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(mention.published)) }}
            </time>
            <p
              class="text-sm mt-2"
              v-html="mention.content.html || mention.content.text"
            />
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useWindowSize } from 'vue-use-web'

import { ref, watch, computed } from '@vue/composition-api'

export default {
  name: 'WebMentions',
  setup (_, { root }) {
    const webmentions = ref([])
    const avatarLimits = ref(16)
    const urlFetch = root.$themeConfig.webmentions.endpoint.replace('#URLPOST#', root.$el.baseURI)

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
        '480': 7,
        '1024': 10,
        '1400': 14
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
      .catch(console.log)
    
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
      @apply flex mb-16;

      img {
        width: 80px;
      }

      a {
        @apply text-accent;
      }
    }
  }
}
</style>
