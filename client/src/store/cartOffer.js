import axios from '../axios';

export default {
  namespaced: true,
  state: {
    urlList: '/products-offer',
    urlSelected: '/products-offer-selected',
    listItems: [],
    selectedItem: {},
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
    setSelectedItem(state, payload) {
      state.selectedItem = payload;
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

        const [listItems, selectedItem] = await Promise.all([
          axios.get(state.urlList, {
            params: {
              _limit: state.limit
            }
          }),
          axios.get(state.urlSelected)
        ]);

        commit('setListItems', listItems.data);
        commit('setSelectedItem', {...selectedItem.data[0]});
        commit('setIsLoading', false);
      } catch ({message}) {
        commit('setError', message);
        commit('setIsLoading', false);
      }
    },
    async addItem({state, commit}, payload) {
      try {
        if (state.isLoading || payload.selected) return;

        commit('setError', '');
        commit('setIsLoading', true);

        const selectedItemId = state.selectedItem.id;

        const promises = [
          axios.patch(`${state.urlList}/${payload.id}`, {selected: true}),
          axios.post(state.urlSelected, {...payload, selected: true})
        ];

        if (selectedItemId) {
          promises.push(
            axios.patch(`${state.urlList}/${selectedItemId}`, {selected: false}),
            axios.delete(`${state.urlSelected}/${selectedItemId}`)
          )
        }

        const [listItem, selectedItem] = await Promise.all(promises);

        if (selectedItemId) {
          commit('setListUpdateItem', {...state.selectedItem, selected: false});
        }

        commit('setListUpdateItem', listItem.data);
        commit('setSelectedItem', selectedItem.data);
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
          axios.delete(`${state.urlSelected}/${payload.id}`)
        ]);

        commit('setListUpdateItem', listItem.data);
        commit('setSelectedItem', {});
        commit('setIsLoading', false);
      } catch ({message}) {
        commit('setError', message);
        commit('setIsLoading', false);
      }
    }
  },
  getters: {
    listItems: (state) => state.listItems,
    selectedItem: (state) => state.selectedItem,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error
  }
}