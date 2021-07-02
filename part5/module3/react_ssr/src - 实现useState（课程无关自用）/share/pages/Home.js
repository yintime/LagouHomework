import React from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

let state
function useState(initState){
  state = state?state:initState
  function setState(newState){
    console.log("newState:",newState)
    state = newState
    console.log(state)
    //render()
    ReactDOM.render(<Home />,document.getElementById('root'))
  }
  return [state,setState]
}



function Home(){
  const [count,setCount] = useState(1)

  const change = (e)=>{
    const element=document.getElementById("works")
    console.log(e.target)
    element.innerHTML="<div>Home changed</div>"
  }
  return (
    <>
      <div id="works" onClick={change}>
        Home works
      </div>
      {/* <Link to="/list">jump to list</Link> */}
      <div id="output">{count}</div>
      <button onClick={()=>setCount(count+1)}>+1</button>
    </>
  )
}

export default Home