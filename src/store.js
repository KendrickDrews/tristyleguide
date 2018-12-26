import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    activeComponent: '',
    msg: 'testing01',
    DMIDSite: '',
    siteType: '',
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    isActiveComponent: function(state, component) {
      state.activeComponent = component
    },
    setMsg: function(state, msg) {
      state.msg = msg
    },
    setDMIDSubSite: function(state, subSite) {
      state.DMIDSite = subSite
    },
    setSiteType: function(state, type) {
      state.siteType = type
    }
  },
  actions: {

  }
})
