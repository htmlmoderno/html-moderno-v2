import { shallowMount } from '@vue/test-utils'
import DarkModeToggle from './DarkModeToggle.vue'


const wrapper = shallowMount(DarkModeToggle, {
  stubs: {
    'vp-icon': '<span></span>'
  }
})

describe('DarkModeToggle', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Should contain a button.', () => {
    expect(wrapper.contains('button')).toBeTruthy()
  })
})
