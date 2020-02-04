<template>
  <div class="newsletter n9m p-6 md:py-12 md:px-16">
    <div class="relative pb-2">
      <h2 class="text-3xl md:text-4xl relative z-20 sm:pl-8 font-medium">
        Newsletter<span class="text-accent font-medium">.</span>
      </h2>
      <div class="newsletter__pattern patterns absolute z-10 top-0 left-0 w-full" />
    </div>
    <form
      :action="$themeConfig.newsletter.action"
      class="flex flex-wrap items-end mt-12"
    >
      <div class="w-full lg:w-2/5 p-0 lg:pr-3">
        <label for="name">
          <span>Nome</span>
          <input
            id="name"
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
          class="n9m w-full bg-accent text-white font-medium py-4 px-6"
        >
          INSCREVER-SE
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>

<style lang="scss">
.newsletter {
  &__pattern {
    height: 100%;
    top: 10px;
  }
}
</style>
