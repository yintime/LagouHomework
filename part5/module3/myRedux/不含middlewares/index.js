/* 创建Store实例对象的函数
createStore(reducer,preloadedState,enhancer)
参数一:reducer 函数类型 参数(state,action) 将state根据action加工后返回
参数二：preloadedState 泛型 创建时的初始state
参数三[可选]：enhancer 函数类型 从调用者接收后根据需要进行增强createStore函数后返回一个函数再次接收(reducer,preloadedState)
{getState,dispatch,subscribe}
getState(),通过此方法向外返回State内容
dispatch(action)，通过此方法接收一个action，再通过reducer(currentState,action)进行数据操作
subscribe(fun),通过此方法接收一个*订阅者函数*，加入数组管理。
*/

function createStore(reducer, preloadedState, enhancer) {
  // 约束reducer参数类型
  if (typeof reducer !== 'function') throw new Error('reducer must be a function')
  //判断
  if (typeof enhancer !== 'undefined') {
    // 判断是不是一个函数
    if (typeof enhancer !== 'function') throw new Error('enhancer must be a function')
    //enhancer(createStore)返回一个增强后的函数 再次接收(reducer,preloadedState)
    return enhancer(createStore)(reducer,preloadedState)
    //如果有enhancer函数参数，那么以下将不被执行。上述语句执行完毕需要返回的是一个取代store的对象。
  }
  //存放State（实际数据）
  let currentState = preloadedState

  //存放*订阅者函数*
  //note:这里存放的是函数，即触发调用时，哪一个订阅者，进行怎样的对应操作
  let currentListeners = []
  function getState(){
    return currentState;
  }

  function dispatch(action){
    if(!isPlainObject (action)) throw new Error('action must be a plain object')
    if (action.type === undefined) throw new Error('action must have a property named type')
    currentState = reducer(currentState,action)
    //循环调用订阅者函数 即遍历执行订阅者函数 根据函数 执行每个订阅者要求的操作
    for (let i = 0; i < currentListeners.length;i++){
      // 获取订阅者函数
      const listener = currentListeners[i]
      // 调用执行订阅者函数（函数操作的内容是订阅者自己的定义的）
      listener()
    }
  }

  //订阅状态
  //note:listener参数是一个函数 即某个对象（订阅者）在State被action操作过后需要执行的操作（这里的操作可能是刷新数据，但也可以是其他的）
  function subscribe(listener) {
    currentListeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
// 判断obj参数是否是对象
function isPlainObject (obj) {
  // 排除基本数据类型
  if (typeof obj !== 'object' || obj === null)  return false
  // 区分数组和对象 顶层原型都是对象
  // 通过原型链 数组的原型不是对象（原型链更长）
  let proto = obj
  //let count = 0
  // 获取到obj的顶层原型
  while (Object.getPrototypeOf(proto) != null) {
    proto = Object.getPrototypeOf(proto)
    //count++
  }
  //console.log(count)
  //空数组的count是2 空对象的count是1
  return Object.getPrototypeOf(obj) === proto
}

