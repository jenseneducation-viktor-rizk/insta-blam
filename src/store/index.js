import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: [
      {
        name: "Brightness",
        value: 0
      },
      {
        name: "Contrast",
        value: 0
      },
      {
        name: "Exposure",
        value: 0
      },
      {
        name: "Saturation",
        value: 0
      },
      {
        name: "Sepia",
        value: 0
      }
    ]
    
  },
  mutations: {
    filterVal(state, obj) {
      state.filter = state.filter.map(function(item) { return item.name == obj.name ? obj : item; });
    }
  },
  actions: {
    changeFilter(context, obj) {
      context.commit('filterVal', obj)
    }
  }
})
