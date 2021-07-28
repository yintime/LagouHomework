import Databus from '../databus'
const databus = new Databus()
export default class Score {
  constructor() {
    this.x = databus.canvas.width / 2
    this.y = 100
  }
  render() {
    databus.ctx.fillStyle = '#fff'
    databus.ctx.font = '40px Arial'
    databus.ctx.textAlign = 'center'
    databus.ctx.fillText(databus.score, this.x, this.y)
  }
}