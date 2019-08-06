import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Record from '@/views/Record.vue'

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
          path: '',
          // component: () => import('@/views/Record.vue')
          component: Record
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
