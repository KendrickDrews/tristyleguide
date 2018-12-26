import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/about',
      name: 'about',      
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/siteMirror',
      name: 'siteMirror',      
      component: () => import(/* webpackChunkName: "about" */ './views/siteMirror.vue')
    },
    {
      path: '/components',
      name: 'components',     
      component: () => import(/* webpackChunkName: "about" */ './views/Components.vue')
    },
    {
      path: '/test',
      name: 'test',     
      component: () => import(/* webpackChunkName: "about" */ './views/Test4.vue')
    },
    {
      path: '/DMID',
      name: 'DMID',     
      component: () => import(/* webpackChunkName: "about" */ './pages/DMID/DMID.vue'),
      children: [
        {
          path: 'Home',
          name: 'DMIDHome',     
          component: () => import(/* webpackChunkName: "about" */ './pages/DMID/DMIDHome.vue')
        },
        {
          path: 'Training',
          name: 'Training', 
          component: () => import(/* webpackChunkName: "about" */ './pages/DMID/Training/trainingHome.vue'),        
        }
      ]
    },   
    
  ]
})
