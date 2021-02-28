import axios from 'axios'
import store from '@/store'
// 局部引入element的 Message组件功能
import { Message } from 'element-ui'
import router from '@/router'
// import { refreshToken } from '@/services/user'
import qs from 'qs'

// crate 创建axios实例
const request = axios.create({
  // timeout: 2000
})

function getBaseURL (url) {
  if (url.startsWith('/boss')) {
    return 'http://eduboss.lagou.com'
  } else {
    return 'http://edufront.lagou.com'
  }
}

// request拦截器
request.interceptors.request.use(config => {
  // 根据config.url 的开头，来确定 baseURL
  config.baseURL = getBaseURL(config.url)
  // 统一设置 Token 信息
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
})

function redirectLogin () {
  // 跳转到登录页
  router.push({
    name: 'login',
    query: {
      // currentRoute 就是存储了路由信息的对象
      redirect: router.currentRoute.fullPath
    }
  })
}
// 存储是否 正在更新Token 的状态
let isRefreshing = false
// 存储因为等待刷新Token而挂起的请求
let requests = []

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 状态码 2XX 时, 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  if (error.response) {
    // 请求发送成功，响应接收完毕，但状态码为失败的情况
    const { status } = error.response
    let errorMessage = ''
    if (status === 400) {
      errorMessage = '请求参数错误'
    } else if (status === 401) {
      // 情况一：无token，跳转登录页
      if (!store.state.user) {
        router.push({
          name: 'login',
          query: {
            // currentRoute就是模块里的route
            redirect: router.currentRoute.fullPath
          }
        })
        return Promise.reject(error)
      }
      // Token过期错误 需要刷新Token
      // 检测token是否正在刷新
      // requests数组中存储的是匿名函数（动作）
      if (isRefreshing) {
        return requests.push(() => {
          request(error.config)
        })
      }
      isRefreshing = true
      // 发送请求 获取新的access token
      return request({
        method: 'POST',
        url: '/front/user/refresh_token',
        data: qs.stringify({
          refreshtoken: store.state.user.refresh_token
        })
      }).then(res => {
        // 返回情况一：刷新失败
        if (res.data.state !== 1) {
          // 清除无效的用户信息
          store.commit('setUser', null)
          redirectLogin()
          return Promise.reject(error)
        }
        // 返回情况二：刷新成功
        // 存储新的token
        store.commit('setUser', res.data.content)
        // 重新发送失败的请求
        requests.forEach(callback => callback())
        requests = []
        return request(error.config)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        isRefreshing = false
      })
    } else if (status === 403) {
      errorMessage = '没有权限，请联系管理员'
    } else if (status === 404) {
      errorMessage = '请求资源不存在'
    } else if (status >= 500) {
      errorMessage = '服务端错误，请联系管理员'
    }
    Message.error(errorMessage)
  } else if (error.request) {
    // 请求发送成功， 但是未收到响应
    Message.error(error.request)
  } else {
    // 意料之外的错误
    Message.error(error.message)
  }
  // 将本次请求的错误继续向后抛出， 让接受响应的处理函数进行操作
  return Promise.reject(error)
})

export default request
