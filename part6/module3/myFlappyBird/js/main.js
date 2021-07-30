import Databus from './databus'
import ResourceLoader from './base/resourceLoader'
import Background from './runtime/background'
import Land from './runtime/land'
import Pipe from './runtime/pipe'
import Bird from './player/bird'
import Score from './player/score'
import Over from './player/over'
import Panel from './player/panel'
const databus = new Databus()
wx.setPreferredFramesPerSecond(30)

export default class Main {
  constructor(){
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext('2d')
    this.aniId = 0
    databus.canvas = this.canvas
    databus.ctx = this.ctx
    this.resource = new ResourceLoader
    this.status = false
    this.loop()
    this.bindEvent()
  }
  init(){
    //截流
    if(this.status) return 
    this.status = true
    databus.reset()
    this.bg = new Background()
    this.land = new Land()
    this.bird = new Bird()
    this.score = new Score()
    this.over = null
    this.bg.render()
    this.land.render()
  }
  update(){
    databus.ctx.clearRect(0,0,databus.canvas.width,databus.canvas.height)
    databus.actors.forEach(actor =>{
      actor.update()
      actor.render()
    })
    this.score.render()
  }
  loop(){
    //开启定时器
    //曾经遇到过requestAnimationFrame返回值是定值（9999）的情况 原因未知
    this.aniId = requestAnimationFrame(()=>{
      //console.log(test)
      //判断是否加载完成
      if (databus.load) {
        //进行场景判断
        if (databus.scence === 0){
          this.init()
        } else
        if (databus.scence === 1){
          if(this.aniId % 100 === 0) {
            const pipe = new Pipe()
          }
        } else
        if (databus.scence === 2){
          //游戏结束逻辑
          databus.speed = 0
          databus.bird.wing = 0

          if (!this.over) {
            this.over = new Over()
            this.panel = new Panel()
          }
          if (databus.score > databus.max) {
            databus.max = databus.score
          }
        }
        
        this.update()
      }
      //this.aniId++
      //console.log(test)
      this.loop()
    })
  }
  bindEvent(){
    wx.onTouchStart((result) => {
      if (databus.scence === 0) {
        this.bird.bindFly()
        databus.scence = 1
        console.log('start')
      } else if (databus.scence === 1) {
        this.bird.bindFly()
      } else if (databus.scence === 2 ) {
        console.log('game over')
        databus.scence = 0
        this.status = false
      } 
    })
  }
}