import { shallowMount } from '@vue/test-utils'
import Comments from './Comments.vue'


const wrapper = shallowMount(Comments)

describe('Comments', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
