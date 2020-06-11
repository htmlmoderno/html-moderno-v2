import { shallowMount } from '@vue/test-utils'

import Newsletter from './Newsletter.vue'

const wrapper = shallowMount(Newsletter)

describe('Newsletter', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
