import { shallowMount } from '@vue/test-utils'
import WebMentions from './WebMentions.vue'


const wrapper = shallowMount(WebMentions)

describe('WebMentions', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
