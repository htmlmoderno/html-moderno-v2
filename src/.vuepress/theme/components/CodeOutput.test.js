import { shallowMount } from '@vue/test-utils'
import CodeCopy from './CodeCopy.vue'


const wrapper = shallowMount(CodeCopy)

describe('CodeCopy', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
