<template>
  <div class="card n9m p-4">
    <div class="w-full rounded-lg overflow-hidden">
      <router-link
        :to="data.to"
        class="hover:text-accent"
      >
        <img
          class="w-full"
          :src="data.image.src"
          :alt="data.image.alt"
        >
      </router-link>
    </div>
    <h2 class="mt-3 mb-10 text-lg font-medium">
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
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
