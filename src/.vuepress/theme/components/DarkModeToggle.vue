<template>
  <button
    class="p-2"
    :aria-label="ariaLabel"
    @click="toggleDarkMode"
    @keydown.enter="toggleDarkMode"
  >
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
        setDarkMode()
      }
    })

    function prefersDark () {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    function setDarkMode () {
      localStorage.setItem('darkMode', 'on')
      document.documentElement.classList.add('mode-dark')
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#343743')
    }

    function removeDarkMode () {
      localStorage.removeItem('darkMode')
      document.documentElement.classList.remove('mode-dark')
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#F4F1EC')
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
