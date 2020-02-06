import { shallowMount } from '@vue/test-utils'
import CardCategory from './CardCategory.vue'


const wrapper = shallowMount(CardCategory)

describe('CardCategory', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
