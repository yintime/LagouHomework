import { observer } from 'mobx-react'
import { useRootStore } from '../Store'

function Main () {
  const { todoStore } = useRootStore()
  const{ filterTodos,renameTodo,removeTodo } = todoStore
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        { 
          filterTodos.map(todo =>{
            let classes = []
            if(todo.isCompleted) classes.push('completed')
            if(todo.isEditing) classes.push('editing')
            return (
              <li key={todo.id} className={classes.join('')}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={todo.isCompleted}
                    onChange={()=>{todo.modifyTodoIsCompleted()}}/>
                  <label onDoubleClick={(e)=>{todo.modifyTodoTitle()}}>{todo.title}</label>
                  <button className="destroy" onClick={removeTodo.bind(null,todo.id)} ></button>
                </div>
                <input 
                className="edit" 
                defaultValue={todo.title} 
                onKeyUp={e=>{if(e.key==="Enter") renameTodo(todo.id,e.target.value)}}
                onBlur={e=>{renameTodo(todo.id,e.target.value)}}
                />
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}


export default observer(Main)

