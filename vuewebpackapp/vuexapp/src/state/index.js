import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 666
  },
  mutations: {
    increase(state) {
      state.num++
    },
    decrease(state) {
      state.num -= 20
    }
  },
  actions: {
    deAction(context) {
      context.commit('decrease')
    }
  },
  getters: {
    getNum(state) {
      return state.num > 600 ? state.num : 600
    }
  }
})
