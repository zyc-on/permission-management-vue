import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'

import Home from '@/views/Home.vue'
import Layout from '@/views/Layout.vue'

import user from './modules/user'
import menu from './modules/menu'
import role from './modules/role'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: [
      ...user,
      ...menu,
      ...role,
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const permissions = JSON.parse(sessionStorage.getItem('permissions'))

    if (!permissions) {
      Message.error('请先登录！')
      next('/login')
    } else {
      const keys = permissions.map(e => e.authority.split(':')[1])
      keys.push('home')
      const index = keys.findIndex(key => key === 'permission')
      if (index >= 0) {
        keys[index] = 'menu'
      }

      const letGo = keys.some(key => to.path.includes(key))
      if (!letGo) {
        Message.error('权限不足，禁止访问！')
      }
      letGo ? next() : next(from.fullPath)
    }
  }
})

export default router
