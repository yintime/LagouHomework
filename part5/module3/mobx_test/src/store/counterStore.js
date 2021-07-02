// 1 创建store对象 存储默认状态0
// 2 将store放在全局中 组件可以访问的地方
// 3 让组件获取store中的状态 并将状态显示在组件中
import axios from 'axios'
import { action, makeObservable, observable, runInAction, flow, computed } from 'mobx'

class CountStore {
  constructor(){
    this.count = 0
    this.users = []
    this.users2 = []
    makeObservable(this,{
      count:observable,
      users:observable,
      users2:observable,
      increment:action.bound,
      decrement:action.bound,
      getData:action.bound,
      getData2:action.bound,
      getResult:computed
    })
  }

  increment () {
    this.count = this.count + 1
  }

  decrement () {
    this.count = this.count - 1
  }
  
  get getResult () {
    return this.count * 10 
  }

  
  //异步更新状态方法一：runInAction(()=>{状态更新语句})
  async getData () {
    let { data } = await axios.get('http://api.github.com/users')
    runInAction(()=>{this.users = data})
  }

  //异步更新状态方法二：flow(function*(){yield异步操作及状态更新语句})
  getData2 = flow(function*(){
    let { data } = yield axios.get('http://api.github.com/users')
    this.users2 = data
  })
 


}


const counter = new CountStore()
export default counter