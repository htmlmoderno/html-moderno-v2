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
        <span class="pr-3 text-lightText text-sm">{{ index > 9 ? index : `0${index + 1}` }}.</span>
        <!-- eslint-disable -->
        <a
          class="base-link text-xl"
          :href="`#${header.slug}`"
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
