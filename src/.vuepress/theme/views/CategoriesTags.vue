<template>
  <div class="tags-page">
    <section>
      <presentation
        class="py-4"
        first-title="HTML Moderno"
        :second-title="$frontmatter.title"
      />
    </section>
    <the-main>
      <div class="w-full layout-section pb-0">
        <section
          v-for="category in getAllCategories"
          :key="category.key"
          class="tags-page-section"
        >
          <div class="w-full sm:w-1/3 lg:w-1/4 pr-0 sm:pr-12 lg:pr-20">
            <router-link :to="`/categorias/${category.frontmatter.slug}`">
              <card-category
                :label="category.title"
                :icon-name="`cat-${category.frontmatter.slug}`"
              />
            </router-link>
          </div>
          <div class="w-full mt-10 sm:mt-0 sm:w-2/3 lg:w-3/4">
            <div class="text-2xl font-medium">
              <span>Tags<span class="text-accent">.</span></span>
            </div>
            <ul
              v-show="category.frontmatter.tags_by_cat.length"
              class="tags-page-list"
            >
              <li
                v-for="tag in category.frontmatter.tags_by_cat"
                :key="tag"
                class="tags-page-list__item"
              >
                <router-link
                  class="tags-page-list__link"
                  :to="`/tags/${encodeURI(tag)}`"
                >
                  {{ tag }}
                </router-link>
              </li>
            </ul>
            <div
              v-show="!category.frontmatter.tags_by_cat.length"
              class="mt-8"
            >
              Sem tags até o momento.
            </div>
          </div>
        </section>
      </div>
    </the-main>
  </div>
</template>

<script>
import categoriesMixin from '@/theme/mixins/categories'
import CardCategory from '@theme/components/CardCategory'
import TheMain from '@theme/components/layout/TheMain'
import Presentation from '@theme/components/Presentation'

export default {
  name: 'CategoriesTags',
  components: {
    TheMain,
    Presentation,
    CardCategory
  },
  mixins: [categoriesMixin]
}
</script>

<style lang="scss">
.tags-page-section {
  @apply flex flex-wrap py-24;
  &:not(:last-child) {
    @apply border-b border-light-200;
  }
}

.mode-dark {
  .tags-page-section:not(:last-child) {
    @apply border-dark-200;
  }
}

.tags-page-list {
  @apply flex flex-wrap mt-10;

  &__item {
    @apply mr-6;
  }

  &__link {
    @apply inline font-medium rounded-full py-4 px-6 text-sm shadow-n9m-light bg-light;

    &:active {
      @apply shadow-inner-n9m-light;
    }
  }
}
</style>
