import axios from '../axios';

export default {
  namespaced: true,
  state: {
    urlList: '/products-own',
    urlSelected: '/products-own-selected',
    listItems: [],
    selectedItems: [],
    maxSize: 6,
    isLoading: false,
    error: '',
    limit: 20
  },
  mutations: {
    setListItems(state, payload) {
      state.listItems = payload;
    },
    setListUpdateItem(state, payload) {
      state.listItems = state.listItems.map((item) => {
        if (item.id === payload.id) {
          item = payload;
        }

        return item;
      });
    },
    setSelectedItems(state, payload) {
      state.selectedItems = payload;
    },
    setSelectedAddItem(state, payload) {
      state.selectedItems = [
        ...state.selectedItems,
        payload
      ];
    },
    setSelectedRemoveItem(state, payload) {
      state.selectedItems = state.selectedItems.filter((item) => (
        item.id !== payload.id
      ));
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    async fetchItems({state, commit}) {
      try {
        if (state.isLoading) return;

        commit('setError', '');
        commit('setIsLoading', true);

        const [listItems, selectedItems] = await Promise.all([
          axios.get(state.urlList, {
            params: {
              _limit: state.limit
            }
          }),
          axios.get(state.urlSelected)
        ]);

        commit('setListItems', listItems.data);
        commit('setSelectedItems', selectedItems.data);
        commit('setIsLoading', false);
      } catch ({message}) {
        commit('setError', message);
        commit('setIsLoading', false);
      }
    },
    async addItem({state, commit}, payload) {
      try {
        if (state.isLoading || payload.selected || state.selectedItems.length === state.maxSize) return;

        commit('setError', '');
        commit('setIsLoading', true);

        const [listItem, selectedItem] = await Promise.all([
          axios.patch(`${state.urlList}/${payload.id}`, {selected: true}),
          axios.post(state.urlSelected, {...payload, selected: true})
        ]);

        commit('setListUpdateItem', listItem.data);
        commit('setSelectedAddItem', selectedItem.data);
        commit('setIsLoading', false);
      } catch ({message}) {
        commit('setError', message);
        commit('setIsLoading', false);
      }
    },
    async removeItem({state, commit}, payload) {
      try {
        if (state.isLoading) return;

        commit('setError', '');
        commit('setIsLoading', true);

        const [listItem] = await Promise.all([
          axios.patch(`${state.urlList}/${payload.id}`, {selected: false}),
          axios.delete(`${state.urlSelected}/${payload.id}`),
        ]);

        commit('setListUpdateItem', listItem.data);
        commit('setSelectedRemoveItem', payload);
        commit('setIsLoading', false);
      } catch ({message}) {
        commit('setError', message);
        commit('setIsLoading', false);
      }
    }
  },
  getters: {
    listItems: (state) => state.listItems,
    selectedItems: (state) => state.selectedItems,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
    maxSize: (state) => state.maxSize
  }
}