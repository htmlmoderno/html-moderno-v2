import DarkTheme from '@/components/DarkTheme.vue'
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(DarkTheme, {
  stubs: {
    'vp-icon': '<span></span>'
  }
})

describe('DarkTheme', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Should contain a button.', () => {
    expect(wrapper.contains('button')).toBeTruthy()
  })
})
