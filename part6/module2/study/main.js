import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import uView from 'uview-ui'
Vue.use(uView)
//设置文件访问基础地址
Vue.prototype.BaseFileURL='http://ts.lagou.uieee.com/api/v2/files/'

//引入公用组件nuiNavBar
import uniNavBar from '@/components/uniNavBar.vue'
Vue.component('uni-nav-bar',uniNavBar)
// 引入公用组件 登陆模块
import login from "@/components/login.vue";
Vue.component("login", login);
// 引入公用组件 分享组件
import gotoShare from "@/components/gotoShare.vue";
Vue.component("goto-share", gotoShare);
import store from '@/store/index.js'
Vue.prototype.$store = store


App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()
