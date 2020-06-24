<template>
  <section class="flex flex-wrap">
    <div class="w-full lg:w-3/12 lg:p-4 lg:bg-light-200 lg:dark:bg-dark-800">
      <h2 class="text-2xl mb-8 lg:mb-0 font-bold">
        Fonte de Leitura:
      </h2>
    </div>
    <div class="w-full lg:w-9/12 lg:pl-8">
      <ul class="flex flex-wrap">
        <li class="w-full md:w-auto mb-8 md:mb-0">
          <label
            class="n9m n9m--active px-6 py-4 block cursor-pointer"
            for="sintony"
          >
            <div>
              <check-field
                id="sintony"
                v-model="font"
                type="radio"
                name="font"
                val="sintony"
                :checked="font === 'sintony'"
              >
                <span class="ml-2">Sans serif (Sintony)</span>
              </check-field>
            </div>
          </label>
        </li>
        <li class="w-full md:w-auto mb-8 md:mb-0 md:ml-8">
          <label
            class="n9m n9m--active px-6 py-4 block cursor-pointer"
            for="dyslexic"
          >
            <div>
              <check-field
                id="dyslexic"
                v-model="font"
                type="radio"
                name="font"
                val="dyslexic"
                :checked="font === 'dyslexic'"
              >
                <span class="btn-font-dyslexic ml-2">Open dyslexic</span>
              </check-field>
            </div>
          </label>
        </li>
        <li class="w-full md:w-auto md:ml-8">
          <label
            class="n9m n9m--active px-6 py-4 block cursor-pointer"
            for="monospace"
          >
            <div>
              <check-field
                id="monospace"
                v-model="font"
                type="radio"
                name="font"
                val="monospace"
                :checked="font === 'monospace'"
              >
                <span class="btn-font-monospace ml-2">Monospace</span>
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
  name: 'FontReadingPreferencies',

  components: {
    CheckField: () => import('@theme/components/CheckField')
  },

  setup () {
    const font = ref(null)

    watch(font, setFontReading)

    onMounted(() => {
      const pref = JSON.parse(localStorage.getItem('preferences'))
      font.value = pref ? pref.font : 'sintony'
    })

    function setFontReading (val, old) {
      if (!val) return
      const body = document.body
      if (old) body.classList.remove(`font-${old}`)
      body.classList.add(`font-${val}`)
      const pref = JSON.parse(localStorage.getItem('preferences'))
      localStorage.setItem('preferences', JSON.stringify(pref ? { ...pref, font: val } : { font: val }))
    }

    return {
      font
    }
  }

}
</script>

<style scoped>
.btn-font-dyslexic {
  font-family: 'OpenDyslexic';
}

.btn-font-monospace {
  font-family: monospace;
}
</style>
