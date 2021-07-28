import {Resources} from './resources'
import Databus from '../databus'
const databus = new Databus()
export default class ResourceLoader {
  constructor(){
    this.srcs = Resources
    this.maxCount = Object.keys(this.srcs).length
    this.count = 0
    this.loadResources()
  }
  loadResources(){
    // 创建多个新的图片对象
    // 给对象的src赋值
    // 需要存储所有的图片对象到一个对象中
    // 保证图片加载完成，然后才能进行游戏
    for(var k in this.srcs){
      databus.imgObj[k] = wx.createImage()
      databus.imgObj[k].src = this.srcs[k]
      databus.imgObj[k].onload = () => {
        // 判断是否所有图片都加载完成了
        this.count++
        // console.log('图片加载中('+this.count+'/'+this.maxCount+')')
        if(this.count >= this.maxCount) {
          // console.log('图片资源加载完成')
          databus.load = true
        }
      }
    }

  }
}