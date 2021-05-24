import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

export default class Count extends Component {
  increment = ()=>{
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
  }
  
  decrement = ()=>{
    const {value} = this.selectNumber
    store.dispatch(createDecrementAction(value*1))
  }

  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch({type:'increment',data:value*1})
    }
  }

  incrementAsync = () =>{
    const {value} = this.selectNumber
    store.dispatch(createIncrementAsyncAction(value*1,500))
  }

  // 组件加载完成后HOOK
  componentDidMount(){
    //store订阅（store发生变化时，执行参数1的回调函数）
    store.subscribe(()=>
    { // 通过setState一个空对象，使React调用render() ！！！注意：这里参数空对象不可以省略！！！
      this.setState({})
    })
  }
  
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref = { c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
