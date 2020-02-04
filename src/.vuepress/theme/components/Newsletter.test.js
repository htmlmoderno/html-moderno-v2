import Newsletter from '@/components/Newsletter.vue'
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(Newsletter)

describe('Newsletter', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
