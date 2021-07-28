let instance
export default class Databus {
  constructor (){
    // 如果存在全局instance（类型是Databus） 则返回实例 （单例模式）
    if (instance) return instance
    instance = this
    this.canvas
    this.ctx
    this.imgObj = {}
    this.load = false
    this.speed = 2
    this.actors = []
    this.bird
    this.scence = 0
    this.score = 0
    this.max = 0
  }
  addActor(actor){
    this.actors.push(actor)
  }
  reset(){
    this.actors = []
    this.bird = null
    this.scence = 0
    this.speed = 2
    this.score = 0
  }
}