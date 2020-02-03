<template>
  <button
    class="p-2" @click="toggleDarkMode"
    @keydown.enter="toggleDarkMode"
  >
    <vp-icon
      v-show="darkMode"
      title="Mudar para o modo light"
      width="20px"
      height="20px"
      name="day"
    />
    <vp-icon
      v-show="!darkMode"
      title="Mudar para o modo dark"
      width="20px"
      height="20px"
      name="night"
    />
  </button>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'

export default {
  name: 'DarkModeToggle',
  setup () {
    const darkMode = ref(false)

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
    }

    function removeDarkMode () {
      localStorage.removeItem('darkMode')
      document.documentElement.classList.remove('mode-dark')
    }

    function toggleDarkMode () {
      darkMode.value = !darkMode.value
      if (darkMode.value) return setDarkMode()
      removeDarkMode()
    }

    return {
      darkMode,
      toggleDarkMode
    }
  }
}
</script>

<style lang="scss"></style>
