<template>
  <div class="card n9m p-4">
    <div
      class="w-full rounded-lg overflow-hidden"
    >
      <router-link
        :to="data.to"
        class="hover:text-accent"
      >
        <img
          v-if="data.image.src"
          class="w-full"
          :src="data.image.src"
          :alt="data.image.alt"
        >
      </router-link>
    </div>
    <div
      class="flex items-center text-xs mt-1 mb-2"
      :class="{ 'mt-3': data.image.src }"
    >
      <span class="uppercase"> {{ data.date }} </span>
      <span :class="`mx-2 text-cat-${data.category}`">//</span>
      <router-link
        to="/autor/ktquez"
        class="underline"
      >
        Alan Ktquez
      </router-link>
    </div>
    <h2 class="mb-10 text-lg font-medium tracking-normal leading-tight">
      <router-link
        :to="data.to"
        class="hover:text-accent hover:underline"
      >
        {{ data.title }}
      </router-link>
    </h2>
    <router-link
      :to="data.to"
      class="card-bottom-link flex items-center justify-between dark:dark-200"
    >
      <div :class="`card-bottom-link__arrow relative border-cat-${data.category} bg-cat-${data.category}`" />
      <div class="card-bottom-link__text text-xs text-right">
        VER POST
      </div>
    </router-link>
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
  },
  setup ({ post }) {
    const slug = post.path.match(/(?<=\/posts\/)(.*?)(?=\/)/g)
    const data = {
      title: post.title,
      excerpt: post.frontmatter.excerpt,
      category: '',
      image: {},
      date: new Intl.DateTimeFormat('default', { month: 'short', day: 'numeric' }).format(new Date(post.frontmatter.date)),
      to: post.path
    }

    if (post.frontmatter.categories.length) {
      data.category = post.frontmatter.categories[0]
    }

    if (post.frontmatter.cover) {
      data.image = {
        src: `${post.frontmatter.cover[0].path}${slug}.${post.frontmatter.cover[0].extension}`,
        alt: post.frontmatter.cover[0].alternativeText
      }
    }

    return {
      data
    }
  }
}
</script>

<style lang="scss">
.card-bottom-link {
  &__arrow {
    width: calc(100% - 75px);
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
    width: 75px;
    transition: all .3s;
  }

  &:hover {
    .card-bottom-link__arrow {
      width: calc(100% - 90px);
    }

    .card-bottom-link__text {
      @apply pr-2;
      width: 90px;
    }
  }
}
</style>
