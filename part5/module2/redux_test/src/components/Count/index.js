import React, { Component } from 'react'


export default class Count extends Component {
  increment = ()=>{
    const {value} = this.selectNumber
    this.props.add(value*1)
  }
  
  decrement = ()=>{
    const {value} = this.selectNumber
    this.props.decrement(value*1)

  }

  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    const count = this.props.count
    if( count % 2 === 1){
      this.props.add(value*1)
    }
  }

  incrementAsync = () =>{
    const {value} = this.selectNumber
    this.props.addAsync(value*1,1000)
  }

  // 组件加载完成后HOOK
  componentDidMount(){
    
  }
  
  render() {
    console.log('props',this.props)
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
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
