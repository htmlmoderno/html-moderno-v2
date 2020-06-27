<template>
  <article class="card n9m p-4">
    <router-link
      :to="post.to"
      class="w-full block rounded-lg overflow-hidden"
      aria-hidden="true"
      tabindex="-1"
    >
      <img
        v-if="post.image.src"
        class="w-full"
        :src="post.image.src"
        :alt="post.image.alt"
      >
    </router-link>
    <h2
      class="card-title text-lg font-bold leading-tight"
      :class="{ 'mt-3': post.image.src }"
    >
      <router-link
        :to="post.to"
        class="hover:underline"
      >
        <span class="sr-only">Acessar post: </span>
        {{ post.title }}
      </router-link>
    </h2>
    <div class="flex items-center text-xs mb-8 mt-2">
      <span class="uppercase"> {{ post.date }} </span>
      <span :class="`mx-2 font-bold text-cat-${post.category}`">//</span>
      <router-link
        :to="`/autores/${encodeURI(post.author.toLowerCase())}`"
        class="underline"
      >
        <span class="sr-only">Colunista: </span> {{ post.author }}
      </router-link>
      <span :class="`mx-2 font-bold text-cat-${post.category}`">//</span>
      <DisqusCount
        :url="`${getUrlBase}${post.to}`"
        :identifier="post.to"
        v-text="'0 comments'"
      />
    </div>
    <router-link
      :to="post.to"
      class="card-bottom-link cursor-pointer flex items-center justify-between dark:dark-200"
      aria-hidden="true"
      tabindex="-1"
    >
      <div :class="`card-bottom-link__arrow relative border-cat-${post.category} bg-cat-${post.category}`" />
      <span
        aria-hidden="true"
        class="card-bottom-link__text text-xs text-right"
      >
        ACESSAR POST
      </span>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    getUrlBase () {
      return process.env.URL_BASE
    }
  }
}
</script>

<style lang="scss">
.card-bottom-link {
  &__arrow {
    width: calc(100% - 110px);
    height: 2px;
    transition: width .3s;

    &:after {
      @apply absolute block;
      content: '';
      top: 50%;
      transform: translateY(-50%);
      right: -10px;
      border: 5px solid transparent;
      border-left-color: inherit;
    }
  }

  &__text {
    width: 110px;
    transition: all .3s;
  }

  &:hover {
    .card-bottom-link__arrow {
      width: calc(100% - 135px);
    }

    .card-bottom-link__text {
      @apply pr-2;
      width: 135px;
    }
  }
}
</style>
