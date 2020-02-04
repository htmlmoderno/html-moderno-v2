import Card from '@/components/Card.vue'
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(Card)

describe('Card', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
