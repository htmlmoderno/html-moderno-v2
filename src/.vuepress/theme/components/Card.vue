<template>
  <div class="card n9m p-4">
    <div
      class="w-full rounded-lg overflow-hidden"
      :class="{ 'mb-6': !data.image.src }"
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

        <span
          v-else
          :class="`w-full h-3 block rounded-full bg-cat-${data.category}`"
        />
      </router-link>
    </div>
    <h2 class="mt-3 mb-10 text-lg font-medium tracking-normal leading-snug">
      <router-link
        :to="data.to"
        class="hover:text-accent"
      >
        {{ data.title }}
      </router-link>
    </h2>
    <div class="pt-4 border-t border-solid border-light-200 dark:dark-200">
      <span class="text-xs">{{ data.timeago }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup ({ page }) {
    const slug = page.path.replace(/\//g, '')
    const data = {
      title: page.title,
      category: '',
      image: {},
      timeago: '1 mês atrás',
      to: page.path
    }

    if (page.frontmatter.categories.length) {
      data.category = page.frontmatter.categories[0]
    }

    if (page.frontmatter.cover) {
      data.image = {
        src: `${page.frontmatter.cover[0].path}${slug}.${page.frontmatter.cover[0].extension}`,
        alt: page.frontmatter.cover[0].alternativeText
      }
    }

    return {
      data
    }
  }
}
</script>

<style lang="scss"></style>
