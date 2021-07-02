import axios from "axios"
import { action, computed, flow, makeObservable, observable } from "mobx"
import Todo from "./Todo"

//处理todo的store类
//这里是类的定义 使用的时候需要实例化
export default class TodoStore {
  constructor() {
    this.todos = []
    this.filterCondition = "All"
    makeObservable(this,{
      todos:observable,
      addTodo:action.bound,
      loadTodos:flow,
      renameTodo:action.bound,
      unCompletedTodoCount:computed,
      removeTodo:action.bound,
      filterCondition:observable,
      changeFilterCondition:action.bound,
      filterTodos:computed,
      removeCompletedTodo:action.bound
    })
    this.loadTodos()
  }
  addTodo(title){
    this.todos.push(new Todo({title,id:this.generateTodoold()}))
  }
  renameTodo(id,newTitle){
    let index = this.todos.findIndex(todo => todo.id === id)
    this.todos[index].title = newTitle
    this.todos[index].isEditing = false
  }
  generateTodoold(){
    if(!this.todos.length) return 1
    return this.todos.reduce((id,todo)=>(id<todo.id?todo.id:id),0)+1
  }
  *loadTodos(){
    let response = yield axios.get("http://localhost:3005/api/todos")
    response.data.map(todo=>this.todos.push(new Todo(todo)))
  }
  get unCompletedTodoCount() {
    return this.todos.filter(todo => !todo.isCompleted).length
  }
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
  changeFilterCondition(condition) {
    this.filterCondition = condition
  }

  get filterTodos() {
    switch (this.filterCondition) {
      case "Active":
        return this.todos.filter(todo => !todo.isCompleted)
      case "Completed":
        return this.todos.filter(todo => todo.isCompleted)
      default:
        return this.todos
    }
  }

  removeCompletedTodo(){
    this.todos = this.todos.filter(todo => todo.isCompleted !== true)
  }
}


