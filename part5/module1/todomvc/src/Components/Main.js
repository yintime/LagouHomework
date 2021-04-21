import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../store/actions/todo.actions'

class Main extends Component {
  componentDidMount(){
    // render之后调用
    this.props.load_todo()
  }

  removeTask(id){
    if(window.confirm('确定删除当前任务')){
      // console.log(id)
      // 触发删除指令
      this.props.remove_todo(id)
    }
    
  }

  modify_name(id,ev){
    // 切换状态
    this.props.modify_todo_edit({id:id,isEditing:false})
    // 修改数据
    this.props.modify_todo_name({id:id,taskName:ev.target.value})
  }
  render() {
    // console.log(this.props)
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {
            this.props.todos.map(item =>{
              let classes = []
              if(item.isCompleted) classes.push('completed')
              if(item.isEditing) classes.push('editing')
              return (
                <li key={item.id} className={classes.join('')}>
                  <div className="view">
                    <input className="toggle" type="checkbox" checked={item.isCompleted}
                      onChange={(e)=>{this.props.modify_todo({id:item.id,isCompleted: e.target.checked})}}/>
                    <label onDoubleClick={()=>{this.props.modify_todo_edit({id:item.id,isEditing:true})}}>{item.taskName}</label>
                    <button className="destroy" onClick={this.removeTask.bind(this,item.id)}></button>
                  </div>
                  <input className="edit" defaultValue={item.taskName} onBlur = {this.modify_name.bind(this,item.id)} />
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todoReducer.todos, state.todoReducer.filter)
})

const mapDispatchToProps = (dispatch) =>({
  ...bindActionCreators(todoActions,dispatch)
})

// 定义根据filter筛选出需要展示的数据
function filterTodos(todos,filter){
  switch(filter){
    case 'all':
      return todos
    case 'active':
      return todos.filter(todo => !todo.isCompleted)
    case 'completed':
        return todos.filter(todo => todo.isCompleted)
    default:
      console('过滤器触发默认异常')
      return todos
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)

// export default Main