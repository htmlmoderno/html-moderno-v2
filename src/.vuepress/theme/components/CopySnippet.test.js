import { shallowMount } from '@vue/test-utils'
import CopySnippet from './CopySnippet.vue'


const wrapper = shallowMount(CopySnippet)

describe('CopySnippet', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
