<template>
  <MainLayout
    :isLoading="[isLoadingCartOwn, isLoadingCartOffer]"
  >
    <div class="center">
      <Alert
        :options="[
          {message: errorCartOwn, clear: setErrorCartOwn},
          {message: errorCartOffer, clear: setErrorcartOffer}
        ]"
      />
      <CartLayout>
        <template v-slot:left>
          <Cart
            :listItems="listItemsCartOwn"
            :selectedItems="selectedItemsCartOwn"
            :maxSize="maxSizeCartOwn"
            :addItem="addItemCartOwn"
            :removeItem="removeItemCartOwn"
          />
        </template>
        
        <template v-slot:right>
          <Cart
            :listItems="listItemsCartOffer"
            :selectedItem="selectedItemCartOffer"
            :addItem="addItemCartOffer"
            :removeItem="removeItemCartOffer"
            type="single"
          />
        </template>
      </CartLayout>
    </div>
  </MainLayout>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import MainLayout from '@/layouts/MainLayout';
import Cart from '@/components/Cart';
import CartLayout from '@/components/CartLayout';
import Alert from '@/components/ui/Alert';

export default {
  name: 'HomeView',
  components: {
    MainLayout,
    Cart,
    CartLayout,
    Alert
  },
  methods: {
    ...mapActions('cartOwn', {
      fetchItemsCartOwn: 'fetchItems',
      addItemCartOwn: 'addItem',
      removeItemCartOwn: 'removeItem',
    }),
    ...mapMutations('cartOwn', {
      setErrorCartOwn: 'setError'
    }),
    ...mapActions('cartOffer', {
      fetchItemsCartOffer: 'fetchItems',
      addItemCartOffer: 'addItem',
      removeItemCartOffer: 'removeItem',
    }),
    ...mapMutations('cartOffer', {
      setErrorcartOffer: 'setError'
    })
  },
  computed: {
    ...mapGetters('cartOwn', {
      listItemsCartOwn: 'listItems',
      selectedItemsCartOwn :'selectedItems',
      errorCartOwn: 'error',
      isLoadingCartOwn: 'isLoading',
      maxSizeCartOwn: 'maxSize'
    }),
    ...mapGetters('cartOffer', {
      listItemsCartOffer: 'listItems',
      selectedItemCartOffer :'selectedItem',
      errorCartOffer: 'error',
      isLoadingCartOffer: 'isLoading'
    })
  },
  mounted() {
    this.fetchItemsCartOwn();
    this.fetchItemsCartOffer();
  }
}
</script>
