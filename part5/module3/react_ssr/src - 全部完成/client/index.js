import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../share/routes'
import { Provider } from 'react-redux'
import store from './createStore'

//ReactDOM.hydrate 客户端二次渲染 为元素附加事件
//参数一：二次渲染的组件，
//参数二：二次渲染组件的位置

//<BrowserRouter>组件包裹renderRoutes实现客户端路由
//参数routes是路由规则数组，具体格式参见引入来源
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById('root')
  )