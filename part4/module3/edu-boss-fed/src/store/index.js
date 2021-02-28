import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // try to load from local storage
    user: JSON.parse(window.localStorage.getItem('user') || null)
  },
  mutations: {
    // save user
    setUser (state, payload) {
      // transformed to object then save.
      state.user = JSON.parse(payload)
      // save to local storage
      window.localStorage.setItem('user', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
