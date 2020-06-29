<template>
  <section class="flex flex-wrap">
    <div class="w-full lg:w-3/12 lg:p-4 lg:bg-light-200 lg:dark:bg-dark-800">
      <h2 class="text-2xl mb-8 lg:mb-0 font-bold">
        Visão:
      </h2>
    </div>
    <div class="w-full lg:w-9/12 lg:pl-8">
      <ul class="flex flex-wrap">
        <!-- <li class="w-full md:w-auto mb-8 md:mb-0">
          <label
            class="n9m n9m--active px-6 py-4 block cursor-pointer"
            for="vision-contrast"
          >
            <div>
              <check-field
                id="vision-contrast"
                v-model="vision['pref-high-contrast']"
                name="vision-contrast"
                :checked="vision['pref-high-contrast']"
              >
                <span class="ml-2">Aumentar contraste</span>
              </check-field>
            </div>
          </label>
        </li> -->
        <li class="w-full md:w-auto">
          <label
            class="n9m n9m--active px-6 py-4 block cursor-pointer"
            for="vision-noShadows"
          >
            <div>
              <check-field
                id="vision-noShadows"
                v-model="vision['pref-no-shadows']"
                name="vision-noShadows"
                :checked="vision['pref-no-shadows']"
              >
                <span class="ml-2">Desabilitar sombras</span>
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

import usePreferences from '@theme/composable/usePreferences'

export default {
  name: 'VisionPreferencies',

  components: {
    CheckField: () => import(/* webpackChunkName: "CheckField" */ '@theme/components/CheckField')
  },

  setup () {
    const { toggleClassByObject } = usePreferences()

    const vision = ref({
      'pref-high-contrast': false,
      'pref-no-shadows': false
    })

    watch(vision, setVision, { deep: true })

    onMounted(() => {
      const pref = JSON.parse(localStorage.getItem('preferences'))
      if (pref && pref.vision) {
        vision.value = pref.vision
      }
    })

    function setVision (data) {
      const pref = JSON.parse(localStorage.getItem('preferences'))
      toggleClassByObject(data)
      localStorage.setItem('preferences', JSON.stringify({ ...pref, vision: data }))
    }

    return {
      vision
    }
  }
}
</script>
