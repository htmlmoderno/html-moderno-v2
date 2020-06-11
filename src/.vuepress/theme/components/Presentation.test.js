import { shallowMount } from '@vue/test-utils'

import Presentation from './Presentation.vue'

const wrapper = shallowMount(Presentation)

describe('Presentation', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
