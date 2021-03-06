import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    activeComponent: '',
    DMIDSite: '',
    siteType: '',
    siteTitle: '',
    mainMenu: true
  },
  mutations: {
    isActiveComponent: function (state, component) {
      state.activeComponent = component
    },
    setDMIDSubSite: function (state, subSite) {
      state.DMIDSite = subSite
    },
    setSiteType: function (state, type) {
      state.siteType = type
    },
    isSiteTitle: function (state, stateTitle) {
      state.siteTitle = stateTitle
    },
    mainMenuStatus: function (state, menuStatus) {
      state.mainMenu = menuStatus
    }
  },
  actions: {

  }
})
