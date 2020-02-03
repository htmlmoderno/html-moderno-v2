<template>
  <div class="home">
    <section>
      <the-presentation
        firstTitle="HTML Moderno"
        secondTitle="Tornando o desenvolvimento web ainda mais interessante" />
      <div class="w-full sm:w-1/4 text-center mt-20">
        <span class="home__scroll-line relative inline-block bg-textLight dark:bg-textDark"></span>
      </div>
    </section>
    <main>
      AQUI VAI OS CARDS    
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    ThePresentation: () => import('@theme/components/layout/ThePresentation')
  }
}
</script>

<style lang="scss">
.home__scroll-line {
  width: 2px;
  height: 30vh;
  &:before {
    @apply absolute bottom-0 rounded-full;
    background-color: inherit;
    content: '';
    width: 6px;
    height: 6px;
    left: -2px;
  }
}
</style>
