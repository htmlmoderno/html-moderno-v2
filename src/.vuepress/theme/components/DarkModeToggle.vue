<template>
  <!-- eslint-disable -->
  <button
    class="p-2"
    :aria-label="ariaLabel"
    @click="toggleDarkMode"
  >
  <!-- eslint-enable -->
    <vp-icon
      v-show="darkMode"
      :title="title.isDark"
      width="20px"
      height="20px"
      name="day"
    />
    <vp-icon
      v-show="!darkMode"
      :title="title.isLight"
      width="20px"
      height="20px"
      name="night"
    />
  </button>
</template>

<script>
import { ref, computed, onMounted } from '@vue/composition-api'

export default {
  name: 'DarkModeToggle',
  setup () {
    let themeColorMeta = null
    const darkMode = ref(false)
    const title = {
      isLight: 'Mudar para o modo dark',
      isDark: 'Mudar para o modo light'
    }
    const ariaLabel = computed(() => {
      return darkMode.value ? title.isDark : title.isLight
    })

    onMounted(() => {
      if (prefersDark() || !!localStorage.getItem('darkMode')) {
        darkMode.value = true
        themeColorMeta = document.querySelector('meta[name="theme-color"]')
        setDarkMode()
      }
    })

    function prefersDark () {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    function setThemeColor (color) {
      if (themeColorMeta) return themeColorMeta.setAttribute('content', color)
    }

    function toggleClass () {
      document.documentElement.classList.toggle('mode-dark')
    }

    function setDarkMode () {
      localStorage.setItem('darkMode', 'on')
      toggleClass()
      setThemeColor('#343743')
    }

    function removeDarkMode () {
      localStorage.removeItem('darkMode')
      toggleClass()
      setThemeColor('#F4F1EC')
    }

    function toggleDarkMode () {
      darkMode.value = !darkMode.value
      if (darkMode.value) return setDarkMode()
      removeDarkMode()
    }

    return {
      title,
      darkMode,
      ariaLabel,
      toggleDarkMode
    }
  }
}
</script>

<style lang="scss"></style>
