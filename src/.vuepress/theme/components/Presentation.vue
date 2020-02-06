<template>
  <div class="presentation relative mt-24 sm:mt-40">
    <div class="relative z-20">
      <h1 class="font-medium w-full break-all sm:break-normal sm:w-3/4 lg:w-2/4">
        <span class="uppercase block mb-2 text-accent">
          {{ firstTitle }}
        </span>
        <span class="text-4xl">
          {{ secondTitle }}<span class="text-accent">.</span>
        </span>
      </h1>
    </div>
    <div class="presentation__pattern patterns absolute z-10 top-0 right-0 w-3/4">
      <vp-icon
        v-if="iconName"
        :name="iconName"
        class="presentation__icon absolute float-right hidden sm:block"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation',
  props: {
    firstTitle: String,
    secondTitle: String,
    iconName: String
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
