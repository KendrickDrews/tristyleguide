import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { store } from './store'
import VueScrollactive from 'vue-scrollactive'
import 'es6-promise/auto'
import './components/globals/_globals'
import './imgs/Icon_SVGs/global-icons/_globalIcons.js'
import './pages/DMID/CMS/_cms-globals.js'
import './pages/DMID/CRS/_crs-globals.js'
import './pages/DMID/DocLib/_doclib-globals.js'
import './pages/DMID/SR/_sr-globals.js'
import './pages/DMID/Training/_tr-globals.js'

Vue.use(Vuex)
Vue.use(VueScrollactive)
Vue.config.productionTip = false

new Vue({
  router,
  data: {
    store
  },

  render: h => h(App)
}).$mount('#app')
