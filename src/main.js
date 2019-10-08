import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Sider from './components/Sider.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAMap from 'vue-amap'

// 引进rem布局
// import remConfig from './utils/remConfig.js'
// remConfig()
import fun from './utils/common'
Vue.prototype.$fun = fun

Vue.use(ElementUI)
Vue.use(VueAMap)
Vue.component('Sider', Sider)

VueAMap.initAMapApiLoader({
  key: 'c07ea0acada7c478b690a1ee76abc414',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
