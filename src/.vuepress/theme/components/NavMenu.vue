<template>
  <div
    class="nav-menu fixed w-full h-full z-30 top-0 left-0 invisible opacity-0"
    :class="{ 'nav-menu--show': show }"
  >
    <div
      class="nav-menu__overlay z-20 w-full h-full top-0 left-0 fixed bg-overlay"
      aria-hidden="true"
      @click="$emit('onClose')"
      @keyup.enter="$emit('onClose')"
    />
    <section
      class="nav-menu__content fixed z-30 w-full h-full sm:w-1/2 md:w-4/12 top-0 bg-light dark:bg-dark overflow-auto px-6 md:p-12 py-16 shadow-md"
      :class="{ 'nav-menu__content--show': show }"
    >
      <FocusLock>
        <button
          aria-label="Fechar menu de navegação"
          class="absolute text-4xl px-4 top-0 left-0 mt-4 ml-2 md:ml-8"
          @click="$emit('onClose')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <nav
          aria-labelledby="title-nav-menu"
          class="mt-12"
        >
          <h2
            id="title-nav-menu"
            class="text-3xl font-bold mb-8"
          >
            Menu de Navegação
          </h2>

          <ul>
            <li
              v-for="(link, index) in $themeConfig.links.navMenu"
              :key="`nav-menu-item-${index}`"
            >
              <router-link
                :to="link.to"
                class="flex justify-between items-center py-4 border-b border-solid border-cat-semantica dark:border-dark-200 hover:underline"
                v-text="link.label"
              />
            </li>
          </ul>
        </nav>

        <nav
          aria-labelledby="title-nav-menu-social"
          class="mt-12"
        >
          <h2
            id="title-nav-menu-social"
            class="text-3xl font-bold mb-8"
          >
            Redes sociais
          </h2>

          <ul>
            <li
              v-for="(link, index) in $themeConfig.links.social"
              :key="`nav-menu-item-social-${index}`"
            >
              <a
                :href="link.link"
                class="flex justify-between items-center py-4 border-b border-solid border-cat-semantica dark:border-dark-200 hover:underline"
              >
                <span>
                  {{ link.label }}
                  <span class="sr-only">, abre em uma nova janela</span>
                </span>
                <vp-icon name="external-link" />
              </a>
            </li>
          </ul>
        </nav>
      </FocusLock>
    </section>
  </div>
</template>

<script>
import { watch } from '@vue/composition-api'
import FocusLock from 'vue-focus-lock'

export default {
  name: 'NavMenu',

  components: {
    FocusLock
  },

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  setup ({ show }, { emit }) {
    function escFullScreen (e) {
      if (e.key === 'Escape') {
        emit('onClose')
      }
    }

    function toggleOverflow (overflow) {
      document.body.style.overflow = overflow
    }

    watch('show', (val) => {
      if (val) return menuOpen()
      menuClose()
    }, { immediate: false })

    function menuOpen () {
      window.addEventListener('keydown', escFullScreen, true)
      toggleOverflow('hidden')
    }

    function menuClose () {
      window.removeEventListener('keydown', escFullScreen, true)
      toggleOverflow('auto')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  transition: visibility .3s .5s, opacity .3s .5s;
  &--show {
    visibility: visible;
    opacity: 1;
    transition: visibility .3s, opacity .3s;
  }
  &__content {
    will-change: right;
    max-width: 450px;
    right: -450px;
    transition: right .5s cubic-bezier(1,.01,.05,1);

    &--show {
      right: 0;
    }
  }
}
</style>
