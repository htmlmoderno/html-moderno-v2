<template>
  <section class="flex flex-wrap">
    <div class="w-full lg:w-3/12 lg:p-4 lg:bg-light-200 lg:dark:bg-dark-800">
      <h2 class="text-2xl mb-8 lg:mb-0 font-bold">
        Movimento:
      </h2>
    </div>
    <div class="w-full lg:w-9/12 lg:pl-8">
      <ul class="flex flex-wrap">
        <li class="w-full md:w-auto mb-8 md:mb-0">
          <label
            class="n9m n9m--active px-6 py-4 block cursor-pointer"
            for="reduce-animation"
          >
            <div>
              <check-field
                id="reduce-animation"
                v-model="motion['pref-reduce-motion']"
                name="reduce-animation"
                :checked="motion['pref-reduce-motion']"
              >
                <span class="ml-2">Reduzir animações</span>
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
  name: 'MotionPreferencies',

  components: {
    CheckField: () => import('@theme/components/CheckField')
  },

  setup () {
    const { toggleClassByObject } = usePreferences()

    const motion = ref({
      'pref-reduce-motion': false
    })

    watch(motion, setMotion, { deep: true })

    onMounted(() => {
      const pref = JSON.parse(localStorage.getItem('preferences'))
      if (pref && pref.motion) {
        motion.value = pref.motion
        return
      }
      motion.value['reduce-motion'] = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    })

    function setMotion (data) {
      const pref = JSON.parse(localStorage.getItem('preferences'))
      toggleClassByObject(data)
      localStorage.setItem('preferences', JSON.stringify({ ...pref, motion: data }))
    }

    return {
      motion
    }
  }
}
</script>
