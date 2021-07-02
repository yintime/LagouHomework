import { observer } from 'mobx-react'
import { useRootStore } from '../Store'

function Footer () {
  const { todoStore } = useRootStore()
  const{ unCompletedTodoCount, filterCondition, changeFilterCondition, removeCompletedTodo } = todoStore
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompletedTodoCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <span onClick={()=>{changeFilterCondition("All")}}
          className={filterCondition==="All"?"selected":""}
          >All</span>
        </li>
        <li>
          <span onClick={()=>{changeFilterCondition("Active")}}
          className={filterCondition==="Active"?"selected":""}
          >Active</span>
        </li>
        <li>
          <span onClick={()=>{changeFilterCondition("Completed")}}
          className={filterCondition==="Completed"?"selected":""}
          >Completed</span>
        </li>
      </ul>
      <button className="clear-completed" onClick={removeCompletedTodo}>Clear completed</button>
    </footer>
  )
}

export default observer(Footer)
