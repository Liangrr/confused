import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Sider from './components/Sider.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.headers.common['Authorization'] = 'lrr'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('Sider', Sider)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
