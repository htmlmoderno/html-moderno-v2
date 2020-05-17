<template>
  <section
    role="complementary"
    class="presentation relative mt-16 sm:mt-32"
  >
    <div class="relative z-20">
      <h1 class="font-bold w-full sm:w-3/4 lg:w-2/4">
        <span class="uppercase block mb-2 text-accent">
          {{ firstTitle }}
        </span>
        <span class="text-3xl sm:text-4xl">
          {{ secondTitle }}<span class="text-accent">.</span>
        </span>
      </h1>
      <span class="block text-xs">{{ moreInfo }}</span>
    </div>
    <div class="presentation__pattern patterns absolute z-10 top-0 right-0 w-10/12">
      <vp-icon
        v-if="iconName"
        :name="iconName"
        class="presentation__icon absolute float-right hidden sm:block"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Presentation',
  props: {
    firstTitle: String,
    secondTitle: String,
    iconName: String,
    moreInfo: String
  }
}
</script>

<style lang="scss">
.presentation {
  &__pattern {
    top: 60%;
    transform: translateY(-50%);
    height: 140%;

    @screen sm {
      height: 180%;
    }
  }

  &__icon {
    font-size: 100px;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }
}
</style>
