<template>
  <div class="share-post">
    <h2 class="text-2xl font-bold">
      Contamos com você<span class="text-accent">.</span>
    </h2>
    <div class="mt-2">
      <h3>
        Você pode nos ajudar compartilhando e/ou curtindo nossas redes sociais.
      </h3>

      <ul class="share-post__list mt-12 flex flex-wrap">
        <li
          v-for="social in socialLinks"
          :key="`social-link-${social.name}`"
        >
          <a
            :href="social.link"
            target="_blank"
            class="n9m n9m--active"
          >
            <span class="sr-only">Compartilhar o post no {{ social.name }}</span>
            <vp-icon :name="social.name" />
          </a>
        </li>
      </ul>

      <div class="mt-20">
        Obrigado pela sua leitura!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharePost',
  setup (_, { root }) {
    const currentURL = `${process.env.URL_BASE}${root.$route.fullPath}`
    const title = root.$frontmatter.title
    const description = root.$frontmatter.description

    const socialLinks = [
      {
        name: 'facebook',
        link: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`
      },
      {
        name: 'twitter',
        link: `https://twitter.com/share?url=${currentURL}&text=${encodeURI(title)}&via=htmlmoderno`
      },
      {
        name: 'linkedin',
        link: `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${encodeURI(title)}&summary=${encodeURI(description)}&source=website`
      },
      {
        name: 'whatsapp',
        link: `https://wa.me/?text=${encodeURI(title + ' - ' + currentURL)}`
      },
      {
        name: 'telegram',
        link: `https://telegram.me/share/url?url=${currentURL}&text=${encodeURI(title)}`
      },
      {
        name: 'email',
        link: `mailto:info@example.com?&subject=${encodeURI(title)}&body=${currentURL}`
      }
    ]

    return {
      socialLinks,
      description
    }
  }
}
</script>

<style lang="scss">
.share-post {
  &__list {
    > li {
      @apply mr-5 mb-5;
      > a {
        @apply rounded-full block text-2xl p-4;
      }
    }
  }
}
</style>
