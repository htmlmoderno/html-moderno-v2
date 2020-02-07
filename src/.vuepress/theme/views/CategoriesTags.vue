<template>
  <div class="tags-page">
    <section>
      <presentation
        first-title="HTML Moderno"
        :second-title="$frontmatter.title"
      />
    </section>
    <main
      id="main"
      class="mt-24"
    >
      <div class="w-full layout-section pb-0">
        <section
          v-for="category in $frontmatter.categories"
          :key="category.slug"
          class="tags-page-section"
        >
          <div class="w-full sm:w-1/3 lg:w-1/4 pr-0 sm:pr-12 lg:pr-20">
            <router-link :to="category.to">
              <card-category
                :label="category.label"
                :icon-name="`cat-${category.slug}`"
              />
            </router-link>
          </div>
          <div class="w-full sm:w-2/3 lg:w-3/4">
            <div class="text-2xl font-medium">
              <span>Tags<span class="text-accent">.</span></span>
            </div>
            <ul class="tags-page-list">
              <li
                v-for="tag in category.tags"
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
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import CardCategory from '@theme/components/CardCategory'
import Presentation from '@theme/components/Presentation'

export default {
  name: 'CategoriesTags',
  components: {
    Presentation,
    CardCategory
  }
}
</script>

<style lang="scss">
.tags-page-section {
  @apply flex flex-wrap py-24;
  &:not(:last-child) {
    @apply border-b border-solid border-light-200;
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
