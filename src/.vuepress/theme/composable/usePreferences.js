import { watch } from '@vue/composition-api'

import { useLocalStorage } from '@theme/composable/useLocalStorage'

export default function usePrefereces () {
  const { value } = useLocalStorage('preferences')

  function init (val = value.value, old = {}) {
    if (!val) return
    toggleClass(val.font, old.font)
    toggleClassByObject(val.vision)
    toggleClassByObject(val.motion)
  }

  watch(() => value.value, init)

  function toggleClass (val, old) {
    if (old) document.body.classList.remove(old)
    document.body.classList.add(val)
  }

  function toggleClassByObject (data) {
    if (!data) return
    Object.keys(data).forEach(key => {
      document.body.classList.remove(key)
      if (data[key]) document.body.classList.add(key)
    })
  }

  return {
    init,
    value,
    toggleClass,
    toggleClassByObject
  }
}
