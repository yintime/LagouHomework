import React from 'react'
import { Link } from 'react-router-dom'

function Home(){
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
      <Link to="/list">jump to list</Link>
    </>
  )
}

export default Home