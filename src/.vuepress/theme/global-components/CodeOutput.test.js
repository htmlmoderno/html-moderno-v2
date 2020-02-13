import { shallowMount } from '@vue/test-utils'
import CodeOutput from './CodeOutput.vue'



const wrapper = shallowMount(CodeOutput)

describe('CodeOutput', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
