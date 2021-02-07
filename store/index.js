import data from '@/static/data/content.json'
export const state = () => ({
  content: [],
})

export const mutations = {
  setContent(state, data) {
    state.content = data
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('setContent', data)
  },
}
