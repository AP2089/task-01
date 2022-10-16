import { createStore } from 'vuex';
import cartOwn from './cartOwn';
import cartOffer from './cartOffer';

export default createStore({
  modules: {
    cartOwn,
    cartOffer
  }
})
