import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        const token = sessionStorage.getItem('token')
        if (token) {
          next()
        } else {
          next({ path: '/login' })
        }
      },
      children: [
        { path: '/index', component: () => import('@/views/home/index.vue') }, // 首页
        { path: '/blog', component: () => import('@/views/blog/index.vue') }, // 博客首页
        { path: '/increase', component: () => import('@/views/blog/increase.vue') }, // 博客新增
        { path: '/show', name: 'show', component: () => import('@/views/blog/show.vue') }, // 博客展示
        { path: '/resource', component: () => import('@/views/resource/index.vue') }, // 资源
        { path: '/amap', component: () => import('@/views/amap/index.vue') }, // 地图
        { path: '/setting', component: () => import('@/views/setting/index.vue') }, // 设置
        { path: '/', redirect: '/index' }
      ]
    },
    { path: '/login', name: 'login', component: () => import('@/views/Login.vue') },
    { path: '/forget', name: 'forget', component: () => import('@/views/Forget.vue') },
    { path: '/register', name: 'register', component: () => import('@/views/Register.vue') }
  ]
})
