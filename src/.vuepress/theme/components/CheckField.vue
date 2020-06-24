<template>
  <div>
    <div class="radio-field__box-input relative w-4 self-center inline">
      <input
        :id="id"
        v-bind="$attrs"
        class="radio-field__input relative z-20 opacity-0"
        :value="val"
        :type="type"
        v-on="$listeners"
        @change="$emit('update', type === 'checkbox' ? $event.target.checked : $event.target.value)"
      >
      <span class="radio-field__square absolute w-4 h-4 z-10 left-0 rounded-sm border border-gray-600 border-solid block" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CheckField',

  inheritAttrs: false,

  model: {
    event: 'update'
  },

  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    val: {
      type: [String, Number, Boolean],
      default: false
    }
  }
}
</script>

<style lang="scss">
.radio-field {
  &__input {
    &:checked + .radio-field__square {
      &:before {
        transform: scale(1,1);
      }
    }
  }

  &__square {
    top: 2px;

    &:before {
      @apply absolute bg-accent;
      content: '';
      top: 2px;
      left: 2px;
      width: 10px;
      height: 10px;
      transform: scale(0,0);
      transition: transform .2s ease-in-out;
    }
  }
}
</style>
