import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { router } from './dmidroutes';
import routes from './routes'
import VueScrollactive from 'vue-scrollactive';
import 'es6-promise/auto';
import { store } from './store';
import mainLayout from './mainLayout.vue'
import './components/globals/_globals';
import './imgs/Icon_SVGs/global-icons/_globalIcons';
import './pages/DMID/CMS/_cms-globals.js';
import './pages/DMID/CRS/_crs-globals.js';
import './pages/DMID/DocLib/_doclib-globals.js';
import './pages/DMID/SR/_sr-globals.js';
import './pages/DMID/Training/_tr-globals.js';

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.use(VueScrollactive);
Vue.use(Vuex);
Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,  
    store,    
    router,
    mainLayout    
  },
  template: '<mainLayout></mainLayout>',
  components: {  
    mainLayout,      
  },
  //computed: {
  //  mainLayout () {
  //    return 'base-main'
  //  },
//
  //  ViewComponent () {
  //    const matchingView = routes[this.currentRoute]
  //    return matchingView
  //      //? require()
  //      ? require('./pages/' + matchingView + '.vue' )        
  //      : require('./pages/404.vue')        
  //  }
  //},
  //render (h) {
  //  return h(app)
  //}
}).$mount(app)

//window.addEventListener('popstate', () => {
//  app.currentRoute = window.location.pathname
//})
