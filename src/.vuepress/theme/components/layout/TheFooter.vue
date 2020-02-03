<template>
  <footer class="footer flex flex-wrap py-12 px-0 lg:w-3/4 lg:mx-auto">
    <div class="w-full md:w-3/5 md:pr-16">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque porttitor lectus, malesuada consectetur metus hendrerit sed. Sed egestas commodo urna, ut feugiat felis malesuada vitae. Sed sollicitudin pulvinar sapien, vitae ullamcorper augue bibendum vitae. 
        </p>
        <p class="my-6">
          Nullam scelerisque id orci non blandit. Sed ex ligula, aliquet at ante sit amet, imperdiet venenatis leo. Cras vulputate arcu in sapien semper sollicitudin.
        </p>
      </div>
      <a
        href="mailto:contato@htmlmoderno.com.br"
        class="text-3xl md:text-4xl tracking-wider leading-none"
      >
        Entrar em contato<span class="text-accent font-medium">.</span>
      </a>
    </div>
    <div class="w-full mt-6 md:mt-0 md:w-2/5">
      <nav class="md:pl-4">
        <ul>
          <li
            v-for="(item, index) in nav"
            :key="`nav-footer-${index}`"
            class="mb-6"
          >
            <a
              :href="item.link"
              :title="item.label"
              class="base-link text-lg py-3 px-4 pl-0"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-full text-sm mt-20">
      &copy; HTML Moderno
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  setup () {
    const nav = [
      {
        label: 'Facebook page',
        link: 'https://www.facebook.com/htmlmoderno/?ref=website'
      },
      {
        label: 'Facebook group',
        link: 'https://www.facebook.com/groups/htmlmoderno/?ref=website'
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/htmlmoderno/?ref=website'
      },
      {
        label: 'Instagram',
        link: 'https://www.instagram.com/htmlmoderno/?ref=website'
      },
      {
        label: 'Presskit',
        link: 'https://github.com/htmlmoderno/press-kit'
      }
    ]

    return {
      nav
    }
  }
}
</script>

<style lang="scss"></style>
