<template>
  <div
    class="hm-newsletter n9m"
    :class="{
      'p-6 md:py-12 md:px-16': !small,
      'p-6': small
    }"
  >
    <div class="relative pb-2">
      <h2 class="text-3xl md:text-4xl relative z-20 sm:pl-8 font-bold">
        Newsletter<span class="text-accent font-bold">.</span>
      </h2>
      <div class="hm-newsletter__pattern patterns absolute z-10 top-0 left-0 w-full" />
    </div>
    <form
      class="flex flex-wrap items-end mt-12"
      v-bind="$attrs"
      @submit.prevent="submitNewsletter"
    >
      <div class="w-full lg:w-2/5 p-0 lg:pr-3">
        <label :for="`name-${random}`">
          <span>Nome</span>
          <input
            :id="`name-${random}`"
            v-model="name"
            class="n9m n9m--inner py-4 px-6 w-full"
            aria-label=" nome"
            type="text"
            required
          >
        </label>
      </div>
      <div class="w-full lg:w-2/5 p-0 lg:pr-3 my-4 lg:my-0">
        <label :for="`email-${random}`">
          <span>Email</span>
          <input
            :id="`email-${random}`"
            v-model="email"
            class="n9m n9m--inner py-4 px-6 w-full"
            aria-label="Digite seu email"
            type="email"
            required
          >
        </label>
      </div>
      <div class="w-full lg:w-1/5">
        <button
          type="submit"
          class="n9m w-full bg-accent dark:bg-cat-html-daily text-gray-900 font-bold py-4"
          :class="{ 'px-3': small, 'px-6': !small, 'opacity-50': isSubmitted }"
          :disabled="isSubmitted"
        >
          ENVIAR
          <span class="sr-only"> na Newsletter do HTMl Moderno</span>
        </button>
      </div>
    </form>
    <span
      v-show="message.result"
      class="hm-newsletter__msg inline-block rounded-lg text-sm mt-4 py-2 px-4"
      :class="{ 'hm-newsletter__msg--error': message.result === 'error' }"
      v-text="message.msg"
    />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import subscribeToMailchimp from 'vuepress-plugin-mailchimp/src/mailchimpSubscribe'

export default {
  name: 'Newsletter',
  inheritAttrs: false,
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  setup (_, { root }) {
    const name = ref(null)
    const email = ref(null)
    const message = ref({})
    const isSubmitted = ref(false)
    const random = Math.floor(Math.random() * 1000)

    async function submitNewsletter () {
      isSubmitted.value = true
      try {
        const res = await subscribeToMailchimp(email.value, { FNAME: name.value })
        isSubmitted.value = false
        message.value = res
      } catch (e) {
        isSubmitted.value = false
        message.value = { result: 'error', msg: e.message }
      }
    }
    return {
      name,
      email,
      random,
      message,
      isSubmitted,
      submitNewsletter
    }
  }
}
</script>

<style lang="scss">
.hm-newsletter {
  h2 {
    @apply mb-0 z-20;
  }

  &__pattern {
    height: 100%;
    top: 10px;
  }

  &__msg {
    @apply bg-green-200 text-green-900;

    &--error {
      @apply bg-red-200 text-red-800;
    }

    a {
      @apply underline;
    }
  }
}
</style>
