import { shallowMount } from '@vue/test-utils'

import ResponsivePicture from './ResponsivePicture.vue'

const wrapper = shallowMount(ResponsivePicture)

describe('ResponsivePicture', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
