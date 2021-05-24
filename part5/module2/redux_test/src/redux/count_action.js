
//同步action 返回对象为object
export const createIncrementAction = data => ({type:'increment',data})
export const createDecrementAction = data => ({type:'decrement',data})
// 异步action 返回对象为函数 理解记忆:异步任务需要在函数中运行
// 异步action中一般调用同步action 异步action 不是必须要用的
export const createIncrementAsyncAction = (data,time) => {
  return (dispatch) => {
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    },time)
  }
}
