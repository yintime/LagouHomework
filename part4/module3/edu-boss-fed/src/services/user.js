import request from '@/utils/request'
import qs from 'qs'
// import { Store } from 'vuex'

// 用户登录接口
export const login = data => {
  return request({
    method: 'POST',
    url: '/front/user/login',
    data: qs.stringify(data)
  })
}

// 用户基本信息接口
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/front/user/getInfo'
  })
}

// 分页查询用户信息 - 用户管理
export const getUserPages = data => {
  return request({
    method: 'POST',
    url: '/boss/user/getUserPages',
    data
  })
}

// 封禁用户（服务端关闭了权限，无法进行实际操作，如报错忽略即可）
export const forbidUser = userId => {
  return request({
    method: 'POST',
    url: '/boss/user/forbidUser',
    params: {
      userId
    }
  })
}

/* // 刷新 token 接口
export const refreshToken = () => {
  return request({
    method: 'POST',
    url: '/front/user/refresh_token',
    data: qs.stringify({
      refreshtoken: Store.state.user.refresh_token
    })
  })
} */
