import { shallowMount } from '@vue/test-utils'

import TableContents from './TableContents.vue'

const wrapper = shallowMount(TableContents)

describe('TableContents', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
