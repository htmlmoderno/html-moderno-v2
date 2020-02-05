<template>
  <div class="card-category n9m n9m--active flex flex-wrap px-4 py-10 justify-center items-center">
    <vp-icon
      :name="iconName"
      class="card-category__icon"
    />
    <div class="w-full text-center">
      <span :class="`bg-${iconName} inline-block mt-8 mb-4 rounded-lg h-3 w-1/3`" />
    </div>
    <span class="text-center font-medium">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'CardCategory',
  props: {
    label: String,
    iconName: {
      type: String,
      default: 'semantic'
    }
  }
}
</script>

<style lang="scss">
.card-category {
  &__icon {
    font-size: 80px;
  }
}
</style>
