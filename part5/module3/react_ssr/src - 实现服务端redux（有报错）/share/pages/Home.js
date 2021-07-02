import React from 'react'
import { Link } from 'react-router-dom'

function Home(){
  return (
    <>
      <div onClick={()=>console.log('Hello')}>
        Home works
      </div>
      <Link to="/list">jump to list</Link>
    </>
  )
}

export default Home