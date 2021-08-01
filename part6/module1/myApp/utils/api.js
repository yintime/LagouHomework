const BASE_URL = "https://devapi.qweather.com/v7"

const KEY = '300d4f92e63a4c508c2a28518481269e'

const request = ( url, method, data ) => {
  data.key = KEY
  return new Promise((resolve, reject) => {
    wx.request({
      method:method,
      url: url,
      data:data,
      header:{
        'content-type':'application/json'
      },
      success(res){
        resolve(res.data)
      },
      fail(err) {
        console.log('请求数据失败')
        reject(err)
      }
    })
  })
}

module.exports = {
  threedays:(data) =>{
    return request(BASE_URL + '/weather/3d', 'get', data)
  }
}