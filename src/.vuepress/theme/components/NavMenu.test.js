import { shallowMount } from '@vue/test-utils'
import NavMenu from './NavMenu.vue'


const wrapper = shallowMount(NavMenu)

describe('NavMenu', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
