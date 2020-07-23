
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    login(state,user){
      state.Authorization=user;
      localStorage.setItem('Authorization', user)
    }
  },
  actions: {
  },
  modules: {
  }
})
