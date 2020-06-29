<template>
  <footer>
    <section
      v-if="$frontmatter.view !== 'CategoriesTags'"
      id="categories"
      class="layout-section layout-section--border-top dark:border-dark-200"
    >
      <the-categories />
    </section>
    <section
      id="newsletter"
      class="layout-section layout-section--border-top dark:border-dark-200"
    >
      <newsletter aria-label="Faça parte e assine a nossa newsletter" />
    </section>
    <section class="footer flex flex-wrap pb-12 px-0 lg:w-3/4 lg:mx-auto">
      <h2 class="sr-only">
        Sobre o HTML Moderno
      </h2>
      <div class="w-full md:w-3/5 md:pr-16 text-lg">
        <div>
          <p>
            Somos um site sobre desenvolvimento web focado no HTML e suas vertentes como semântica, acessibilidade, SEO, UX e etc.
          </p>
          <p class="my-6">
            A palavra moderno nesse caso não se remete a algo novo especificamente, mas uma forma de desenvolver para web nos tempos atuais sem negligenciar os padrões e boas práticas que o HTML traz para a web...
          </p>
        </div>
        <a
          :href="`mailto:${$themeConfig.footer.mailto}`"
          class="my-12 block sm:my-0 text-3xl md:text-4xl leading-none font-bold hover:underline dark:text-cat-html-daily"
        >
          Entrar em contato<span class="text-accent">.</span>
        </a>
      </div>
      <div class="w-full md:mt-0 md:w-2/5">
        <nav class="md:pl-12 lg:pl-24">
          <ul>
            <li
              v-for="(item, index) in links"
              :key="`nav-footer-${index}`"
              class="mb-6"
            >
              <a
                :href="item.link"
                :title="item.label"
                :rel="item.label === 'Twitter' ? 'me noopener' : 'noopener'"
                target="_blank"
                class="footer__link base-link"
              >
                {{ item.label }} <span class="sr-only">, abre em uma nova janela.</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="w-full text-sm mt-20"
        v-html="$themeConfig.footer.copy"
      />
    </section>
    <back-to-top />
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  components: {
    BackToTop: () => import(/* webpackChunkName: "BackToTop" */ '@theme/components/BackToTop'),
    TheCategories: () => import(/* webpackChunkName: "TheCategories" */ '@theme/components/layout/TheCategories')
  },
  setup (_, { root }) {
    const links = [...root.$themeConfig.links.social, ...root.$themeConfig.links.footer]

    return {
      links
    }
  }
}
</script>

<style lang="scss">
.footer {
  &__link {
    @apply py-3 px-4 pl-0 pb-0 text-lg;
  }
}
</style>
