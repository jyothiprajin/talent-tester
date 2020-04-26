import TestService from '../api/service/TestService'
export const state = () => ({
  test: null
})

export const getters = {
  test(state) {
    return state.test
  }
}

export const mutations = {
  set(state, test) {
    state.test = test
  },
  unset(state) {
    state.test = null
  }
}

export const actions = {
  async getTest({ commit, state }, id) {
    if (!state.test || (state.test && state.test.id !== id)) {
      const test = (await TestService.get(id)).data
      commit('set', test)
    }
    return state.test
  }
}
