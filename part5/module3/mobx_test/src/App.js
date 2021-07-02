import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('counter')
@observer
class App extends Component{
  componentDidMount (){
    //const {getData,getData2}=this.props.counter
    // getData()
    // getData2()
  }
  render(){
    const { counter } = this.props
    return <div>
      <button onClick={counter.increment}>+</button>
      <span>{counter.count}</span>
      <button onClick={counter.decrement}>-</button>
      <span>计算count*10：{counter.getResult}</span>
{/*       <div>
        <span>异步方法一</span>
        {counter.users.map(
          user => (
            <div>
              <span>{user.id}</span>
              <span>{user.login}</span>
            </div>
          )
        )}
      </div> */}
{/*       <div>
        <span>异步方法二</span>
        {counter.users2.map(
          user => (
            <div>
              <span>{user.id}</span>
              <span>{user.login}</span>
            </div>
          )
        )}
      </div> */}
    </div>
  }
}

export default App;
