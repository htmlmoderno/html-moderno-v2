<template>
  <button
    class="p-2"
    @click="toggleDarkTheme"
    @keydown.enter="toggleDarkTheme"
  >
    <vp-icon
      v-if="darkTheme"
      :title="a11y.dark_theme_title_on"
      class="text-textDark fill-current"
      width="20px"
      height="20px"
      name="day"
    />
    <vp-icon
      v-else
      :title="a11y.dark_theme_title_off"
      class="text-textLight fill-current"
      width="20px"
      height="20px"
      name="night"
    />
  </button>
</template>

<script>
import { ref, watch, onMounted } from '@vue/composition-api'

export default {
  name: 'DarkTheme',
  prop: {
    a11y: {
      type: Object,
      require: true
    }
  },
  setup () {
    const darkTheme = ref(false)

    watch(darkTheme, (darkTheme) => {
      if (darkTheme.value) return setDarkTheme()
      removeDarkTheme()
    })

    onMounted(() => {
      darkTheme.value = prefersDark() || !!localStorage.getItem('darkTheme') || false
    })

    function prefersDark () {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    function setDarkTheme () {
      localStorage.setItem('darkTheme', 'on')
      document.documentElement.classList.add('mode-dark')
    }

    function removeDarkTheme () {
      localStorage.removeItem('darkTheme')
      document.documentElement.classList.remove('mode-dark')
    }

    function toggleDarkTheme () {
      darkTheme.value = !darkTheme.value
    }

    return {
      darkTheme,
      toggleDarkTheme
    }
  }
}
</script>

<style lang="scss"></style>
