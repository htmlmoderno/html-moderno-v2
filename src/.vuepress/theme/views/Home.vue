<template>
  <div class="home">
    <section>
      <the-presentation
        first-title="HTML Moderno"
        second-title="Tornando o desenvolvimento web ainda mais interessante"
      />
      <div class="w-full sm:w-1/4 text-center mt-20">
        <span class="home__scroll-line relative inline-block bg-textLight dark:bg-textDark" />
      </div>
    </section>
    <main>
      <section class="w-full py-16 sm:py-20">
        <masonry
          :cols="{default: 3, 1024: 2, 600: 1}"
          :gutter="50"
        >
          <div
            v-for="(item, index) in Array(11)"
            :key="index"
            class="mb-12"
          >
            <card :data="dataCard" />
          </div>
        </masonry>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Card: () => import('@theme/components/Card'),
    ThePresentation: () => import('@theme/components/layout/ThePresentation')
  },
  setup () {
    const dataCard = {
      title: 'Boas práticas de segurança para campos de senha',
      image: {
        src: '/images/posts/2020/02/fake-image.png',
        alt: 'descrição'
      },
      timeago: '1 mês atrás',
      to: '/post/alguma-coisa'
    }

    return {
      dataCard
    }
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
