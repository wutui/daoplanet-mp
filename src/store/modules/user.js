import Vue from 'vue'
const state = {
  count: 0,
  token: null,
  profile: null
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    wx.setStorageSync('token', token)
  },
  SET_PROFILE: (state, profile) => {
    state.profile = profile
  }
}

const actions = {
  login ({ commit }, params = {}) {
    return Vue.iBox.http('user.login', {
      account: {
        target: params.mobile,
        password: params.password
      }
    })().then(res => {
      console.log(res)
      commit('SET_TOKEN', res.data.access_token)
      return res
    })
  },
  register ({ commit }, params = {}) {
    return Vue.iBox.http('user.register', {
      phone: params.mobile,
      verifyCode: params.code,
      name: params.nickname,
      password: params.password
    })().then(res => {
      console.log(res)
      return res
    })
  },
  getProfile ({commit}) {
    return Vue.iBox.http('user.profile')().then(res => {
      console.log(res.data)
      commit('SET_PROFILE', res.data)
      return res
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
