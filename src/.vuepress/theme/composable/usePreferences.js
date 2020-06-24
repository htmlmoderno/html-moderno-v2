import { watch } from '@vue/composition-api'

import { useLocalStorage } from '@theme/composable/useLocalStorage'

export default function usePrefereces () {
  const { value } = useLocalStorage('preferences')

  function init (val = value.value, old = {}) {
    if (!val) return
    setFont(val.font, old.font)
    setByObject(val.vision, old.vision)
    setByObject(val.motion, old.motion)
  }

  watch(() => value.value, init)

  function setFont (val, old) {
    if (old) document.body.classList.remove(`font-${old}`)
    document.body.classList.add(`font-${val}`)
  }

  function setByObject (data) {
    if (!data) return
    Object.keys(data).forEach(key => {
      document.body.classList.remove(key)
      if (data[key]) document.body.classList.add(key)
    })
  }

  return {
    init,
    value,
    setFont,
    setByObject
  }
}
