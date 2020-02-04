<template>
  <div class="categories">
    <div class="flex flex-wrap justify-between items-center">
      <h2 class="w-full sm:w-1/2 text-center sm:text-left text-3xl md:text-4xl font-medium">
        Categorias<span class="text-accent">.</span>
      </h2>
      <div class="w-full sm:w-1/2 mt-10 sm:mt-0 justify-center sm:justify-end flex items-center">
        <vp-icon
          name="tag"
          class="text-xl mt-1"
        />
        <router-link
          to="/"
          class="base-link ml-3 text-xs font-medium"
        >
          VER TODAS AS TAGS
        </router-link>
      </div>
    </div>
    <div class="mt-12">
      <ul class="categories-list flex flex-wrap">
        <li
          v-for="category in categories"
          :key="category.label"
        >
          <router-link :to="category.to">
            <card-category
              :label="category.label"
              :icon-name="category.icon"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCategories',
  components: {
    CardCategory: () => import('@theme/components/CardCategory')
  },
  setup (_, { root }) {
    const categoryPage = root.$site.pages.find(page => page.frontmatter.view === 'CategoriesTags')
    const categories = categoryPage ? categoryPage.frontmatter.categories : []

    return {
      categories
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
