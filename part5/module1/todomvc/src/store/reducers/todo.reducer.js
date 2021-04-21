import { handleActions as creatActionReducer } from 'redux-actions'
import { modify_todo_name_success, modify_todo_edit_success, clear_todo_completed_success, load_todo_success,add_todo_success, remove_todo_success, modify_todo_success, modify_todo_filter } from '../actions/todo.actions'
const initialState = {
  todos: [],
  filter:'all'
}
export default creatActionReducer({
  [load_todo_success]:(state,action) =>({...state,todos:action.payload}),
  [add_todo_success]:(state,action) =>({...state,todos:[...state.todos,action.payload]}),
  [remove_todo_success]:(state,action) =>{
    let id = action.payload
    let index =state.todos.findIndex(todo => todo.id === id)
    let todos = JSON.parse(JSON.stringify(state.todos))
    todos.splice(index,1)
    return{ ...state,todos }
  },
  [modify_todo_success]:(state,action) => {
    let params = action.payload
    let index = state.todos.findIndex(todo => todo.id === params.id)
    let todos = JSON.parse(JSON.stringify(state.todos))
    todos[index].isCompleted = params.isCompleted
    return { ...state,todos }
  },
  [modify_todo_filter]:(state,action)=>{
    return {
      ...state,
      filter: action.payload
    }
  },
  [clear_todo_completed_success]:(state,action) =>{
    let todos = JSON.parse(JSON.stringify(state.todos))
    todos = todos.filter(todo=>!todo.isCompleted)
    return{ ...state,todos }
  },
  [modify_todo_edit_success]:(state,action) =>{
    let todos = JSON.parse(JSON.stringify(state.todos))
    let index = state.todos.findIndex(todo => todo.id === action.payload.id)
    todos[index].isEditing = action.payload.isEditing
    return {...state, todos }
  },
  [modify_todo_name_success]:(state,action)=>{
    let todos = JSON.parse(JSON.stringify(state.todos))
    let index = state.todos.findIndex(todo => todo.id === action.payload.id)
    todos[index].taskName = action.payload.taskName
    return {...state, todos }
  }
},initialState)

// 接收到指令之后对数据进行响应的处理