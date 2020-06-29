<template>
  <section class="flex flex-wrap">
    <div class="w-full lg:w-3/12 lg:p-4 lg:bg-light-200 lg:dark:bg-dark-800">
      <h2 class="text-2xl mb-8 lg:mb-0 font-bold">
        Tema:
      </h2>
    </div>
    <div class="w-full lg:w-9/12 lg:pl-8">
      <ul class="flex">
        <li>
          <label
            for="light"
            class="cursor-pointer"
          >
            <img
              src="@theme/assets/images/mode-light.png"
              alt="ilustração de um browser no tema claro"
            >
            <div class="text-center mt-3">
              <check-field
                id="light"
                v-model="theme"
                type="radio"
                name="theme"
                val="light"
                :checked="theme === 'light'"
              >
                <span class="ml-2">Claro</span>
              </check-field>
            </div>
          </label>
        </li>
        <li class="ml-8">
          <label
            for="dark"
            class="cursor-pointer"
          >
            <img
              src="@theme/assets/images/mode-dark.png"
              alt="ilustração de um browser no tema escuro"
            >
            <div class="text-center mt-3">
              <check-field
                id="dark"
                v-model="theme"
                type="radio"
                name="theme"
                val="dark"
                :checked="theme === 'dark'"
              >
                <span class="ml-2">Escuro</span>
              </check-field>
            </div>
          </label>
        </li>
        <li class="ml-8">
          <label
            for="system"
            class="cursor-pointer"
          >
            <img
              src="@theme/assets/images/mode-system.png"
              alt="ilustração de um browser com a mistura dos 2 temas, claro e escuro"
            >
            <div class="text-center mt-3">
              <check-field
                id="system"
                v-model="theme"
                type="radio"
                name="theme"
                val="system"
                :checked="theme === 'system'"
              >
                <span class="ml-2">Config. Sistema</span>
              </check-field>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { ref, watch, onMounted } from '@vue/composition-api'

export default {
  name: 'ThemePreferencies',

  components: {
    CheckField: () => import(/* webpackChunkName: "CheckField" */ '@theme/components/CheckField')
  },

  setup (_, { root }) {
    const theme = ref(null)

    watch(theme, val => setTheme(val))

    onMounted(() => {
      theme.value = localStorage.getItem('colorMode')
    })

    function setTheme (mode) {
      if (!mode) return
      Object.assign(root.$themeConfig.colorMode, { defaultMode: mode })
    }

    return {
      theme
    }
  }

}
</script>
