import request from '@/utils/request'

// 获取广告空间信息接口
export const getAllSpaces = data => {
  return request({
    method: 'GET',
    url: '/front/ad/space/getAllSpaces'
  })
}
