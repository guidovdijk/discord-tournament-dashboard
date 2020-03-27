import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Dashboard',
  //   component: Dashboard
  // },
  {
    path: '/',
    name: 'Tournaments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "Tournaments" */ '../views/Tournaments.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-active",
})

export default router