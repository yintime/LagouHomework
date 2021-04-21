import axios from 'axios'
import { takeEvery, put} from 'redux-saga/effects'
import { modify_todo_name, modify_todo_name_success, modify_todo_edit, modify_todo_edit_success, clear_todo_completed, clear_todo_completed_success, load_todo_success, load_todo, add_todo, add_todo_success, remove_todo, remove_todo_success, modify_todo_success, modify_todo } from '../actions/todo.actions'

// 实现load_todo_data 获取数据同时传递新指令
function* load_todo_data(){
  let todoData = yield axios.get('/api/todos')
  // console.log(todoData)
  yield put(load_todo_success(todoData))
}
// 实现add_todo_data方法
function* add_todo_data(action){
  //完成异步操作
  let taskInfo = yield axios.post('/api/todos',{taskName: action.payload})
  // console.log(taskInfo)
  // 重新发送指令
  yield put(add_todo_success(taskInfo.task)) 
}

// 实现remove_todo_data
function* remove_todo_data(action){
  // console.log(action)
  let res = yield axios.delete('/api/todos',{params:{id:action.payload}})
  //重新发送指令
  yield put(remove_todo_success(res.tasks.id))
}

//实现modify_todo
function* modify_todo_data(action){
  // console.log(action)
  let params = action.payload
  yield axios.put('/api/todos/isCompleted',params)
  yield put(modify_todo_success(params)) 
}

//实现clear_todo_completed_data
function* clear_todo_completed_data(action){
  yield axios.delete('/api/todos/clearCompleted')
  yield put(clear_todo_completed_success())
}

//实现modify_todo_edit_data
function* modify_todo_edit_data(action){
  yield axios.put('/api/todos/isEditing',action.payload)
  yield put(modify_todo_edit_success(action.payload))
}

function* modify_todo_name_data(action){
  yield axios.put('/api/todos',action.payload)
  yield put(modify_todo_name_success(action.payload))
}

export default function* todoSaga(){
  yield takeEvery(load_todo,load_todo_data)
  yield takeEvery(add_todo,add_todo_data)
  yield takeEvery(remove_todo,remove_todo_data)
  yield takeEvery(modify_todo,modify_todo_data)
  yield takeEvery(clear_todo_completed,clear_todo_completed_data)
  yield takeEvery(modify_todo_edit,modify_todo_edit_data)
  yield takeEvery(modify_todo_name,modify_todo_name_data)
}
