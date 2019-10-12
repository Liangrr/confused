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
        { path: '/index', component: () => import(/* webpackChunkName: "index" */'@/views/home/index.vue') }, // 首页
        // 博客
        { path: '/blog', component: () => import(/* webpackChunkName: "blog" */'@/views/blog/index.vue') }, // 博客首页
        { path: '/increase', component: () => import(/* webpackChunkName: "blog" */'@/views/blog/increase.vue') }, // 博客新增
        { path: '/show', name: 'show', component: () => import(/* webpackChunkName: "blog" */'@/views/blog/show.vue') }, // 博客展示
        // 数据管理
        { path: '/userList', meta: ['数据管理', '用户列表'], component: () => import(/* webpackChunkName: "data-manager" */ '@/views/manageData/userList.vue') }, // 用户列表
        { path: '/shopList', meta: ['数据管理', '商家列表'], component: () => import(/* webpackChunkName: "data-manager" */ '@/views/manageData/shopList.vue') }, // 商家列表
        { path: '/foodList', meta: ['数据管理', '食品列表'], component: () => import(/* webpackChunkName: "data-manager" */ '@/views/manageData/foodList.vue') }, // 食品列表
        { path: '/orderList', meta: ['数据管理', '订单列表'], component: () => import(/* webpackChunkName: "data-manager" */ '@/views/manageData/orderList.vue') }, // 订单列表
        { path: '/adminList', meta: ['数据管理', '管理员列表'], component: () => import(/* webpackChunkName: "data-manager" */ '@/views/manageData/adminList.vue') }, // 管理员列表
        // 添加数据
        { path: '/addShop', meta: ['添加数据', '添加商铺'], component: () => import(/* webpackChunkName: "add-data" */'@/views/addData/addShop.vue') }, // 添加商铺
        { path: '/addGoods', meta: ['添加数据', '添加商品'], component: () => import(/* webpackChunkName: "add-data" */'@/views/addData/addGoods.vue') }, // 添加商品

        { path: '/amap', meta: ['地图', '地图'], component: () => import(/* webpackChunkName: "index" */'@/views/amap/index.vue') }, // 地图
        { path: '/adminSet', meta: ['设置', '管理员设置'], component: () => import(/* webpackChunkName: "index" */'@/views/setting/adminSet.vue') }, // 管理员设置
        { path: '/explain', meta: ['说明', '说明'], component: () => import(/* webpackChunkName: "index" */'@/views/explain/explain.vue') }, // 说明
        { path: '/', redirect: '/index' }
      ]
    },
    { path: '/login', name: 'login', component: () => import(/* webpackChunkName: "index" */'@/views/Login.vue') },
    { path: '/forget', name: 'forget', component: () => import(/* webpackChunkName: "index" */'@/views/Forget.vue') },
    { path: '/register', name: 'register', component: () => import(/* webpackChunkName: "index" */'@/views/Register.vue') }
  ]
})
