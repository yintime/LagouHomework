import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 Element-ui
import ElementUI from 'element-ui'
// 引入 引入 Element-ui的主题文件
// import 'element-ui/lib/theme-chalk/index.css'
// 将Element 注册为Vue插件
import './styles/index.scss'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
