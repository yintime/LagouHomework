// 1. reducer的本质是个函数
// 2. reducer 函数会接到两个参数，分别为：之前的状态（preSate），动作对象（action）

const initState = 0

export default function countReducer(preState=initState,action){
  const {type,data} = action
  console.log(preState,action)
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return initState
  }
}