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


//理解：形参middlewares是一个函数数组，所以这里的...的结果其实是f1()f2()
function applyMiddleware(...middlewares){
  return function (createStore) {
    return function(reducer,preloadedState){
      //创建store实例对象
      const store = createStore(reducer,preloadedState)
      //低配版store（从store中复制了两个方法）
      //这个低配版的目的是在多个中间件的叠加过程中提供副本环境
      const middlewareAPI = {
        getState: store.getState,
        dispatch: store.dispatch
      }
      //调用中间件的第一层函数 传递低配版store
      const chain = middlewares.map(middleware =>middleware(middlewareAPI))
      //这里的chain的类型是一个函数数组 compose(...chain)部分是完成多个中间件的组合
      const dispatch = compose(...chain)(store.dispatch)
      // console.log(compose(...chain));
      // console.log('---------');
      // console.log(compose(...chain)(store.dispatch));
      //将最终强化后的dispatch，在真正要使用的store对象中return
      return {
        ...store,
        dispatch
      }
    }
  }
}
//函数理解：compose 组成，构成 这个函数的目的就是多个中间件的组合器 将多个中间件形成一个enhancer
//这样就回到之前的enhancer的理解上
//形参理解：中间件的核心是在强化dispatch，因此形参是dispatch，返回的函数角色上也是dispatch
function compose(){
  const funcs = [...arguments]
  return function (dispatch) {
    for (let i = funcs.length -1; i>=0;i--){
      dispatch = funcs[i](dispatch)
    }

    // for (let i = 0; i<=funcs.length -1;i++){
    //   dispatch = funcs[i](dispatch)
    // }
    //以上代码也已可以执行  并没有出现视频中提到的logger中的next拿不到thunk函数的情况

    //疑问：这里中间件的compose顺序真的必须是从后往前吗？从使用上来说，多个中间件的顺序也不会影响函数执行的结果吧（在中间件功能不相互覆盖的前提下）...
    return dispatch
  }
}

//函数目标：实现通过例如actions.increment()触发dispatch({type:'increment'})
//思路:需要把所有要用到的action对象和dispath方法通过参数传入,最后整合成一个actions对象返回出去
function bindActionCreators(actionCreators,dispatch){
  const boundActionCreators = {}
  for (let key in actionCreators){
    //思路：需要得到形如 bindActionCreators[key] = {dispatch(actionCreators[key])}
    //形如{(fn(key){})(key)}
    (function(key){
        boundActionCreators[key] = function(){
          dispatch(actionCreators[key]())
        }
      })(key)
      // 这里的最后的key才是循环条件的key
/*     console.log(key,(
      function(key){
        boundActionCreators[key] = function(){
          dispatch(actionCreators[key]())
        }
      }
    )) */
  }
  
  //boundActionCreators['test']= function(){dispatch(increment())}
  
  //console.log('生成了boundActionCreators：',boundActionCreators)

  return boundActionCreators
}

//函数位置：替代单独的reducer
//作用：从多个reducer中找出对单独的reducer并执行，将reducer返回的新的State在内部整合更新后，向外返回
function combineReducers(reducers){
  //检查reducer类型 必须是函数
  const reducerKeys = Object.keys(reducers)
  for (let i = 0; i<reducerKeys.length; i++){
    let key = reducerKeys[i]
    if (typeof reducers[key] !== 'function') throw new Error('reducer must be a function')
  }
  //调用小reducer，收集返回，更新整合后在向外返回
  return function(state,action){
    const nextState={}
    const reducerKeys = Object.keys(reducers)
    for (let i = 0; i<reducerKeys.length; i++){
      const key = reducerKeys[i]
      const reducer = reducers[key]
      const preStateForKey = state[key]
      nextState[key] = reducer(preStateForKey,action)
    }
    //console.log('@',nextState)
    return nextState
  }

}
