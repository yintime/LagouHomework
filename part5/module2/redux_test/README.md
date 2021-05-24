# Redux_test

## 01 极简版

+ store.js

1. 使用redux中的createStore函数，创建一个store对象
2. crateStore调用时传入一个为其服务的reducer
3. 不要忘记export default

+  count_reducer.js

1. reducer 本质是一个函数，接收preState，action，返回加工后的State
2. reducer 两个作用： 初始化 和 加工
3. reducer被第一次调用时，是store自动触发，传递的preState是undefined

+ react 组件需要自己通过store.subscribe()中传入一个this.setState({})回调函数，来实现对state的动态订阅更新

## 02 异步action版

需求:当异步动作不想在组件里面实现 想交给action
安装:redux-thunk,并作为中间件参数配置在store中。
实现：创建异步action的返回值不再是一般对象，而是一个函数，在函数中写异步任务。异步任务最终执行一个同步action去操作数据。
备注:异步action不是必须。组件可以做异步操作。

## 03 react-redux

(1). 拆分成两个组件
  1). UI组件：只负责页面呈现与交互
  2). 容器组件：负责和redux通信
(2). 如何创建一个容器组件——react-redux的 connect函数
  connect(mapStateToProps,mapDispatchToProps)(UI组件)
    -mapStateToProps(state):映射状态，返回值是一个对象（{key:value}）
    -mapDispatchToProps(dispatch)：映射操作状态的方法，返回值是一个对象({[name]:()=>dispatch()})
  注意：容器组件的store是通过在父组调用时中通过props（store={store}）传入的。
  (4)mapDispatchToProps()可以替换成一个{key:string}形式的对象，react-redux会根据key自动dispatch对应string的action

## 04 优化

react-redux的优化作用
1.为mapDispatchToProps提供了对象写法，封装了dispatch
2.提供了Provider组件，封装了向子组件的传递store
`<Provider store={store} > </Provider>`
3.自动监听store变化并重新渲染组件
4.UI组件通过this.props.[name]读取和操作状态
5.UI组件可混写入容器组件文件中

## 总结 react与redux的融合使用（借助react-redux）

1. 定义一个不暴露的UI组件（只负责页面呈现与交互）
2. 通过connect将UI连接到一个包含了state以及操作state的方法的容器中export

```
export default connect(
  //state（键值对象）
  state => ({count:state}),
  //操作state的方法（键值对象，值可以是函数也可以是action名称的字符串）
  {
    add:createIncrementAction
  }
)
(CountUI)
```
