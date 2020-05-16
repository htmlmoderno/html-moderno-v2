<template>
  <div class="comments">
    <h2 class="text-2xl mb-12 font-bold">
      Comentários<span class="text-accent">.</span>
    </h2>
    <div class="mt-12">
      <comment />
    </div>
  </div>
</template>

<script>
import Comment from '@vuepress/plugin-blog/lib/client/components/Comment'
export default {
  name: 'Comments',
  components: {
    Comment
  }
}
</script>

<style lang="scss"></style>
