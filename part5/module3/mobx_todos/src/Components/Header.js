import { useState } from 'react'
import { useRootStore } from '../Store'

function Header(){
  const[title,setTitle] = useState("")
  const { todoStore } = useRootStore()
  const{ addTodo } = todoStore
  return (
    <header className="header">
      <h1>todos</h1>
      <input 
      value = {title}
      onChange = { e=>setTitle(e.target.value) }
      onKeyUp={e=>{
        if(e.key!=="Enter") return
        addTodo(title)
        setTitle("")
      }} className='new-todo' placeholder="还有什么任务没完成" autoFocus ></input>
    </header>
  )
}


export default Header