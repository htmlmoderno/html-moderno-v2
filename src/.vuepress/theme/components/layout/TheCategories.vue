<template>
  <div class="categories">
    <div class="flex flex-wrap justify-between items-center">
      <h2 class="w-full sm:w-1/2 text-center sm:text-left text-3xl md:text-4xl font-bold">
        Categorias<span class="text-accent">.</span>
      </h2>
      <div class="w-full sm:w-1/2 mt-10 sm:mt-0 justify-center sm:justify-end flex items-center">
        <vp-icon
          name="tag"
          class="text-xl mt-1"
        />
        <router-link
          to="/categorias"
          class="base-link ml-3 text-xs font-bold"
        >
          VER TODAS AS TAGS
        </router-link>
      </div>
    </div>
    <div class="mt-12">
      <ul class="categories-list flex flex-wrap">
        <li
          v-for="category in getCategories"
          :key="category.key"
        >
          <router-link
            class="block"
            :to="`/categorias/${category.frontmatter.slug}`"
            :aria-label="`Ver posts da categoria ${category.title.toLowerCase()}`"
          >
            <card-category
              :label="category.title"
              :icon-name="`cat-${category.frontmatter.slug}`"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Views from '@theme/utils/views'

export default {
  name: 'TheCategories',
  components: {
    CardCategory: () => import('@theme/components/CardCategory')
  },
  setup (_, { root }) {
    const getCategories = Views(root.$site.pages)
      .select('Category')
      .status()
      .orderBy()
      .get()

    return {
      getCategories
    }
  }
}
</script>

<style lang="scss">
.categories-list {
  margin-left: -50px;
}
.categories-list > li {
  @apply w-full;
  padding-left: 50px;
  padding-top: 50px;

  @screen sm {
    @apply w-1/3;
  }

  @screen lg {
    @apply w-1/4;
  }

  @screen xl {
    @apply w-1/5;
  }
}
</style>
