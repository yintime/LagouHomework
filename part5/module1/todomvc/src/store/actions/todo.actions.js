import { createAction } from 'redux-actions'
// 获取todo列表
export const load_todo = createAction('load_todo') 
export const load_todo_success = createAction('load_todo_success') 

// 新增todo项
export const add_todo = createAction('add_todo')
export const add_todo_success = createAction('add_todo_success')

// 删除todo项
export const remove_todo = createAction('remove')
export const remove_todo_success = createAction('remove_todo_success')

// 修改todo项（完成/未完成）
export const modify_todo = createAction('modify')
export const modify_todo_success = createAction('modify_todo_success')

// 筛选指令
export const modify_todo_filter = createAction('modify_todo_filter')

// 清楚已完成任务
export const clear_todo_completed = createAction('clear_todo_completed')
export const clear_todo_completed_success = createAction('clear_todo_completed_success')

// 任务名称修改指令
export const modify_todo_edit = createAction('modify_todo_edit')
export const modify_todo_edit_success = createAction('modify_todo_edit_success')

// 任务名称确认指令
export const modify_todo_name = createAction('modify_todo_name')
export const modify_todo_name_success = createAction('modify_todo_name_success')
/*
  01 发送请求获取数据 load_todo
  02 当异步操作后触发新的指令 load_todo_success
*/