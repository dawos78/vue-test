import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import navbar from '../components/navbar.vue'
Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [

  {
    path: '',
    redirect: "/components/ChildRouterView",
    name: 'navbar',
    component: navbar
  },
  {
    path: '',
    redirect: "/component/ChildRouterView/fooster.vue",
    name: 'fooster',
    component: () => import('../components/fooster.vue')
  },
  {
    path: '',
    redirect: "/component/ChildRouterView/applayout",
    name: 'applayout',
    component: () => import('../components/applayout.vue')
  },
  {
    path: '/Home',  
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
