<template>
  <Transition
    name="loader"
  >
    <div
      class="loader"
      v-if="show"
    ></div>
  </Transition>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isLoading: [Boolean, Array]
  },
  computed: {
    show() {
      const propType = typeof this.isLoading;

      switch (propType) {
        case 'object':
          return this.isLoading.includes(true);
        case 'boolean':
          return this.isLoading;
        default:
          return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0,0,0,.1);

  &:before {
    display: block;
    content: '';
    width: 44px;
    height: 44px;
    border: 4px solid #000000;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  &-enter-active,
  &-leave-active {
    opacity: 1;
    transition: opacity .5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>