<template>
  <main
    id="main"
    class="page"
  >
    <article class="w-full layout-section">
      <div class="page__container">
        <Content />
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<style lang="scss">
.page {
  &__container {
    @apply w-full mx-auto;

    &--no-mt {
      @apply mt-0;
    }

    @screen md {
      @apply w-4/5;
    }

    @screen xl {
      @apply w-3/5;
    }
  }
}
</style>
