import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../store/actions/user.action'


function List({user,dispatch}){
  useEffect(() => {
    dispatch(fetchUser())
    return () => {
      //cleanup
    }
  }, [])
  return (
    <>
      <div onClick={()=>console.log('Hello')}>List page works</div>
      <ul>
        {user.map((item) =>  (<li key={item.id}>{item.name} </li>) )}
      </ul>
    </>
  )
}

export function loadData(store) {
  return store.dispatch(fetchUser())
}
const  mapStateToProps = state => ({user:state.user})

export default {
  component:connect(mapStateToProps)(List),
  loadData
} 