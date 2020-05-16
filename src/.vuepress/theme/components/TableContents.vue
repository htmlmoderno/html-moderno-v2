<template>
  <nav class="toc">
    <h2 class="text-2xl mb-12 font-bold">
      Índice<span class="text-accent">.</span>
    </h2>
    <ul class="toc__list">
      <li
        v-for="(header, index) in headers"
        :key="header.slug"
      >
        <span class="pr-3 text-gray-500 text-sm">{{ index > 9 ? index : `0${index + 1}` }}.</span>
        <!-- eslint-disable -->
        <a
          class="base-link text-lg"
          :href="`#${header.slug}`"
          :title="header.title"
          @click.prevent="scrollToHeader(`${header.slug}`)"
        >
        <!-- eslint-enable -->
          <span>{{ header.title }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TableContents',
  props: {
    headers: {
      type: Array,
      required: true
    }
  },
  setup (_, { root }) {
    function scrollToHeader (selector) {
      const el = document.getElementById(selector)
      let i = window.scrollY
      const int = setInterval(() => {
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: i })
        })
        i += 50
        if (i >= (el.offsetTop - 40)) clearInterval(int)
      }, 1)
    }

    return {
      scrollToHeader
    }
  }
}
</script>

<style lang="scss">
.toc {
  &__list {
    > li {
      @apply flex items-center;

      &:not(:last-child) {
        @apply mb-10;
      }
    }
  }
}
</style>
