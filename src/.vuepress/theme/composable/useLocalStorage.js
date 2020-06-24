import { ref, onMounted, onUnmounted } from '@vue/composition-api'

function parseValue (serializedVal) {
  let value = null
  try {
    value = JSON.parse(serializedVal)
  } catch {
    value = serializedVal
  }

  return value
}

export function useLocalStorage (key, def) {
  const value = ref(null)
  const init = () => {
    const serializedVal = localStorage.getItem(key)
    if (serializedVal !== null) {
      value.value = parseValue(serializedVal)
      return
    }

    value.value = def
  }

  let initialized = false

  // early init if possible.
  if (typeof window !== 'undefined') {
    init()
    initialized = true
  }

  function handler (e) {
    if (e.key === key) {
      value.value = e.newValue ? parseValue(e.newValue) : null
    }
  }

  onMounted(() => {
    if (!initialized) init()
    window.addEventListener('storage', handler, true)
  })

  onUnmounted(() => window.removeEventListener('storage', handler))

  return {
    value
  }
}
