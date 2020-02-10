import { shallowMount } from '@vue/test-utils'
import Spinner from './Spinner.vue'


const wrapper = shallowMount(Spinner)

describe('Spinner', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
