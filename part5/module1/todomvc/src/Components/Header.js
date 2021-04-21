import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../store/actions/todo.actions'

class Header extends Component {
  addTodo = (ev) => {
    if(ev.keyCode === 13){
      // 获取输入框内容
      let taskName = ev.target.value
      if(taskName.trim().length===0){
        alert('请输入任务名称')
        return
      }

      // 触发新增
      this.props.add_todo(taskName)
      // 清空文本
      ev.target.value = ''
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input onKeyUp={this.addTodo} className='new-todo' placeholder="还有什么任务没完成" autoFocus ></input>
      </header>
    )
  }
}

//组件与store
const mapStateToProps = (state) =>({
  todos: state.todoReducer.todos
})
//组件与dispatch
const mapDispatchToProps = (dispatch) =>({
  ...bindActionCreators(todoActions,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)