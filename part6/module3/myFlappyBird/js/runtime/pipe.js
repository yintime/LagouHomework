import Databus from '../databus'
const databus = new Databus()

export default class Pipe {
  constructor () {
    this.image1 = databus.imgObj.pipe_down
    this.image2 = databus.imgObj.pipe_up
    this.x = databus.canvas.width
    this.y1 = 0
    this.w = this.image1.width
    this.h1 = Math.floor(Math.random()*(300-200+1))+200
    this.door = Math.floor(Math.random()*(130-100+1))+100
    this.y2 = this.h1 + this.door
    this.h2 = databus.canvas.height - this.y2 - databus.imgObj.land.height
    this.sy1 = this.image1.height - this.h1
    this.noPass = true
    databus.addActor(this)
  }
  update(){
    this.x -= databus.speed
    if (this.x <= -this.w){
      this.die()
      //console.log(databus.actors.length)
    }
    // 小鸟碰撞检测盒
    const birdL = databus.bird.x + 6
    const birdR = databus.bird.x + 40
    const birdT = databus.bird.y + 10
    const birdB = databus.bird.y + 40
    // 管子碰撞检测盒
    this.lX = this.x
    this.rX = this.x + this.w
    this.tY1 = this.h1
    this.bY2 = this.y2
      // 碰撞判断
    if(birdR >= this.lX && birdL <= this.rX && (birdT <= this.tY1 || birdB >= this.bY2 )){
      databus.scence = 2
    }
    if (birdL >= this.rX && this.noPass) {
      databus.score++
      this.noPass = false
    }
  }
  render() {
    databus.ctx.drawImage(this.image1,0,this.sy1,this.w,this.h1,this.x,this.y1,this.w,this.h1)
    databus.ctx.drawImage(this.image2,0,0,this.w,this.h2,this.x,this.y2,this.w,this.h2)
  }
  die(){
    databus.actors = databus.actors.filter(item =>{
      return item !== this
    })
  }
}