<template>
  <div
    class="hm-newsletter n9m"
    :class="{
      'p-6 md:py-12 md:px-16': !small,
      'p-6': small
    }"
  >
    <div class="relative pb-2">
      <h2 class="text-3xl md:text-4xl relative z-20 sm:pl-8 font-medium">
        Newsletter<span class="text-accent font-medium">.</span>
      </h2>
      <div class="hm-newsletter__pattern patterns absolute z-10 top-0 left-0 w-full" />
    </div>
    <form
      class="flex flex-wrap items-end mt-12"
      @submit.prevent="submitNewsletter"
    >
      <div class="w-full lg:w-2/5 p-0 lg:pr-3">
        <label for="name">
          <span>Nome</span>
          <input
            id="name"
            v-model="name"
            class="n9m n9m--inner py-4 px-6 w-full placeholder-orange-600"
            placeholder="Seu nome"
            type="text"
            required
          >
        </label>
      </div>
      <div class="w-full lg:w-2/5 p-0 lg:pr-3 my-4 lg:my-0">
        <label for="email">
          <span>Email</span>
          <input
            id="email"
            v-model="email"
            class="n9m n9m--inner py-4 px-6 w-full placeholder-orange-600"
            placeholder="Seu email"
            type="email"
            required
          >
        </label>
      </div>
      <div class="w-full lg:w-1/5">
        <button
          type="submit"
          class="n9m w-full bg-accent text-white font-medium py-4"
          :class="{ 'px-3': small, 'px-6': !small }"
        >
          INSCREVER-SE
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import subscribeToMailchimp from 'vuepress-plugin-mailchimp/src/mailchimpSubscribe'

import { ref } from '@vue/composition-api'

export default {
  name: 'Newsletter',
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  setup (_, { root }) {
    const name = ref(null)
    const email = ref(null)

    async function submitNewsletter () {
      try {
        const res = await subscribeToMailchimp(email.value, { FNAME: name.value })
        if (res.result === 'error') throw new Error(res.msg)
      } catch (e) {
        console.log(e.message)
      }
    }
    return {
      name,
      email,
      submitNewsletter
    }
  }
}
</script>

<style lang="scss">
.hm-newsletter__pattern {
  height: 100%;
  top: 10px;
}

.hm-newsletter {
  h2 {
    @apply tracking-wider mb-0 z-20;
  }
}
</style>
