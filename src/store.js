import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 初始化用户
const state = {
  user: sessionStorage.getItem('user'),
  token: sessionStorage.getItem('token')
}

const mutations = {
  // 存token
  SET_TOKEN: (state, data) => {
    state.token = data
    sessionStorage.setItem('token', data)
  },
  // 存用户信息
  GET_USER: (state, data) => {
    state.user = data
    sessionStorage.setItem('user', data)
  },
  // 退出
  LOGOUT: (state) => {
    sessionStorage.removeItem('token')
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
