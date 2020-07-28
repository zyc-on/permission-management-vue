import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

import user from './modules/user'
import menu from './modules/menu'
import role from './modules/role'

Vue.use(VueRouter)

const routes = [
  ...user,
  ...menu,
  ...role,
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    component: () => import('../layout/components/navbar')
  }
]

const router = new VueRouter({
  routes
})

export default router
