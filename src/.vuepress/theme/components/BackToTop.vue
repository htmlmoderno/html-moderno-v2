<template>
  <div class="back-to-top">
    <!-- eslint-disable -->
    <a
      ref="arrowTop"
      class="back-to-top__link"
      :class="{ 'back-to-top__link--show': show, 'back-to-top__link--fire': fire }"
      @click="fired"
    >
    <!-- eslint-enable -->
      <vp-icon
        name="back-to-top-button"
        class="back-to-top__icon text-6xl"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',

  data () {
    return {
      show: false,
      fire: false
    }
  },

  mounted () {
    this.handleScrollEffectBackToTop()
  },

  beforeDestroy () {
    document.removeEventListener('scroll', this.setPanel, { passive: true })
  },

  methods: {
    fired () {
      this.fire = true
      window.scrollTo({ top: 0, behavior: 'auto' })
    },

    handleScrollEffectBackToTop () {
      this.setPanel()
      document.addEventListener('scroll', this.setPanel, { passive: true })
    },

    setPanel () {
      window.requestAnimationFrame(() => {
        setTimeout(() => {
          const diff = (document.documentElement.scrollHeight - document.documentElement.clientHeight) - 1500
          this.show = window.scrollY > diff
          if (window.scrollY === 0) {
            this.fire = false
          }
        }, 1000)
      })
    }
  }
}
</script>

<style lang="scss">
.back-to-top {
  position: relative;
  z-index: 99;

  &__link {
    position: fixed;
    border-radius: 50%;
    display: inline-block;
    transition: bottom .5s;
    right: 12vw;
    bottom: -300px;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    transition: all .5s;

    &--fire {
      animation: fire 1s linear infinite;
    }

    &--show {
      bottom: 300px;
      opacity: 1;
      visibility: visible;
    }
  }

  &__icon {
    display: inline-block;
    top: 2px;
  }
}

@keyframes fire {
  from {
   box-shadow: 0 30px 5px -10px #FF886E;
  }
  40% {
   box-shadow: 0 15px 5px -10px #FF5029;
  }
  60% {
   box-shadow: 0 30px 5px -10px #FF886E;
  }
  80% {
   box-shadow: 0 15px 5px -10px #FF5029;
  }
  to {
   box-shadow: 0 30px 5px -10px #FF886E;
  }
}
</style>
