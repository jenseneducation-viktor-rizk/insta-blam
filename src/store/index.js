import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: {
      sepia: 0,
      saturation: 0,
      brightness: 0,
      contrast: 0,
      exposure: 0
    }
  },
  mutations: {
    filterVal(state, filter) {
      state.filter = filter
    }
  },
  actions: {
    changeFilter(context, val) {
      context.commit('filterVal', val)
    }
  }
})
