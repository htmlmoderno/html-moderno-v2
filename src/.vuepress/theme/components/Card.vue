<template>
  <div class="card n9m p-4">
    <div
      class="w-full rounded-lg overflow-hidden"
    >
      <img
        v-if="post.image.src"
        class="w-full"
        :src="post.image.src"
        :alt="post.image.alt"
      >
    </div>
    <div
      class="flex items-center text-xs mt-1 mb-2"
      :class="{ 'mt-3': post.image.src }"
    >
      <span class="uppercase"> {{ post.date }} </span>
      <span :class="`mx-2 text-cat-${post.category}`">//</span>
      <router-link
        tabindex="-1"
        :to="`/autores/${encodeURI(post.author.toLowerCase())}`"
        class="underline"
      >
        {{ post.author }}
      </router-link>
    </div>
    <h2 class="card-title mb-10 text-lg font-medium tracking-normal leading-tight">
      <router-link
        :to="post.to"
        class="hover:text-accent hover:underline"
      >
        <span class="sr-only">Acessar post: </span>
        {{ post.title }}
      </router-link>
    </h2>
    <div
      :to="post.to"
      class="card-bottom-link cursor-pointer flex items-center justify-between dark:dark-200"
      @click="$router.push(post.to)"
      @keydown.enter="$router.push(post.to)"
    >
      <div :class="`card-bottom-link__arrow relative border-cat-${post.category} bg-cat-${post.category}`" />
      <span
        aria-hidden="true"
        class="card-bottom-link__text text-xs text-right"
      >
        ACESSAR POST
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.card-title {
  > a:focus {
    outline: none;
  }

  &:focus-within ~ .card-bottom-link {
    @apply shadow-outline;
  }
}

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
