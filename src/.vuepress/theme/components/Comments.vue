<template>
  <div class="comments">
    <h2 class="text-2xl mb-12 font-bold">
      Comentários<span class="text-accent">.</span>
    </h2>
    <div class="mt-12">
      <Disqus :lazy-config="{ root: null, rootMargin: '1000px', threshold: 0.5 }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments'
}
</script>
