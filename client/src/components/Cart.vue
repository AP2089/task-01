<template>
  <div class="cart">
    <div class="cart__head">
      <CartSingle
        :item="selectedItem"
        :removeItem="removeItem"
        v-if="type === 'single'"
      />
      <CartMultiple
        :items="selectedItems"
        :removeItem="removeItem"
        :maxSize="maxSize"
        v-else
      />
    </div>
    <div class="cart__body">
      <CartList
        :items="listItems"
        :addItem="addItem"
      />
    </div>
  </div>
</template>

<script>
import CartMultiple from '@/components/CartMultiple';
import CartSingle from '@/components/CartSingle';
import CartList from '@/components/CartList';

export default {
  name: 'Cart',
  components: {
    CartMultiple,
    CartSingle,
    CartList
  },
  props: {
    type: String,
    selectedItems: Array,
    selectedItem: Object,
    listItems: Array,
    maxSize: Number,
    addItem: Function,
    removeItem: Function
  }
}
</script>

<style lang="scss" scoped>
.cart {
  &__head {
    margin-bottom: 15px;
  }
}
</style>