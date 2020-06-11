import { shallowMount } from '@vue/test-utils'

import SharePost from './SharePost.vue'

const wrapper = shallowMount(SharePost)

describe('SharePost', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
