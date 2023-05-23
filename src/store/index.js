import { createStore } from 'vuex'

export default createStore({
  state:{
    accessToken: null
  },
  mutations:{
    setAccessToken(state, token){
        state.accessToken = token;
    },
    clearAccessToken(state){
        state.accessToken = null;
    }
  },
  actions: {
    login({ commit }, token) {
      commit('setAccessToken', token);
    },
    logout({ commit }) {
      commit('clearAccessToken');
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.accessToken !== null;
    }
  }
})