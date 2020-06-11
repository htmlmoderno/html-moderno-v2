import { shallowMount } from '@vue/test-utils'

import BackToTop from './BackToTop.vue'

const wrapper = shallowMount(BackToTop)

describe('BackToTop', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
