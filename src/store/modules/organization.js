import Vue from 'vue'
const state = {
  list: []
}

const mutations = {
  SET_LIST: (state, list) => {
    state.list = list
  }
}

const actions = {
  getList ({commit}) {
    return Vue.iBox.http('organizations.list')().then(res => {
      console.log(res.data)
      commit('SET_LIST', res.data)
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
