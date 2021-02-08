import home from '@/static/data/home.json'
import global from '@/static/data/global.json'
import presse from '@/static/data/presse.json'
import event from '@/static/data/evenement.json'

export const state = () => ({
  home: [],
  global: [],
  presse: [],
})

export const mutations = {
  setGlobal(state, data) {
    state.global = data
  },
  setHome(state, data) {
    state.home = data
  },
  setPresse(state, data) {
    state.presse = data
  },
  setEvent(state, data) {
    state.event = data
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('setGlobal', global)
    commit('setHome', home)
    commit('setPresse', presse)
    commit('setEvent', event)
  },
}
