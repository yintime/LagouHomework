import { action, makeObservable, observable } from "mobx"

//todo项的类（数据原型类）
export default class Todo {
  constructor(todo) {
    this.id = todo.id
    this.title = todo.taskName || todo.title
    this.isCompleted = todo.isCompleted || false
    this.isEditing = false
    makeObservable(this,{
      title:observable,
      isCompleted:observable,
      isEditing:observable,
      modifyTodoIsCompleted:action.bound,
      modifyTodoTitle:action.bound
    })
  }
  modifyTodoIsCompleted(){
    this.isCompleted = !this.isCompleted
    //runInAction(()=>{this.isCompleted = !this.isCompleted})
  }
  modifyTodoTitle(){
    this.isEditing = !this.isEditing
  }
}
