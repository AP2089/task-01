<template>
  <div class="cart-layout">
    <div class="cart-layout__row">
      <div class="cart-layout__col">
        <slot name="left"></slot>
      </div>
      <div class="cart-layout__col">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartLayout'
}
</script>

<style lang="scss" scoped>
.cart-layout {
  &__row {
    @media (min-width: 992px) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 20px;
      margin-left: -15px;
    }
  }

  &__col {
    @media (min-width: 992px) {
      width: 50%;
      padding-left: 15px;
    }

    @media (max-width: 991px) {
      margin-bottom: 15px;
    }
  }

  &__head {
    margin-bottom: 20px;
  }
}
</style>