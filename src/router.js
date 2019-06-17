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
      path: '/components',
      name: 'components',
      component: () => import( './views/Components.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import( './views/Test4.vue')
    },
    {
      path: '/DMID',
      name: 'DMID',
      component: () => import( './pages/DMID/DMID.vue'),
      children: [
        {
          path: 'Home',
          name: 'DMIDHome',
          component: () => import( './pages/DMID/DMIDHome.vue')
        },
        {
          path: 'CRS',
          name: 'CRS',
          component: () => import( './pages/DMID/CRS/CRSHome.vue'),
        },
        {
          path: 'Training',
          name: 'Training',
          component: () => import( './pages/DMID/Training/trainingHome.vue'),
        },
        {
          path: 'ServiceRequests',
          name: 'ServiceRequests',
          component: () => import( './pages/DMID/SR/serviceRequestsHome.vue'),
        },
        {
          path: 'ServiceRequestsFORM',
          name: 'ServiceRequests',
          component: () => import('./pages/DMID/SR/adHocTrainingRequestForm.vue'),
        },
        {
          path: 'Results',
          name: 'Results',
          component: () => import('./pages/DMID/Results/ResultsHome.vue'),
        },
      ]
    },

  ]
})

