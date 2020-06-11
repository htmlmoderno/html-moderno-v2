import { shallowMount } from '@vue/test-utils'

import SWUPopup from './SWUPopup.vue'

const wrapper = shallowMount(SWUPopup)

describe('SWUPopup', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
