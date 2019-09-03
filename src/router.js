import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        const token = sessionStorage.getItem('token')
        if (token) {
          next()
        } else {
          next({
            path: '/login'
          })
        }
      },
      children: [
        {
          path: '/index',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/blog',
          component: () => import('@/views/blog/index.vue')
        },
        {
          path: '/resource',
          component: () => import('@/views/resource/index.vue')
        },
        {
          path: '/setting',
          component: () => import('@/views/setting/index.vue')
        },
        {
          path: '/',
          redirect: '/index'
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('@/views/Forget.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue')
    }
  ]
})
