import app from './http'
import render from './render'
import createStore from './createStore'
import routes from '../share/routes'
import { matchRoutes } from 'react-router-config'

app.get('*',(req,res)=>{
  const store = createStore()
  // 1. 请求地址 req.patch
  // 2. 获取路由配置信息
  // 3. 根据请求地址匹配出要渲染的组件的路由对象信息
  const promises =
  matchRoutes(routes,req.path).map(({route}) => {
    if (route.loadData) return route.loadData(store)
  })

  Promise.all(promises).then(()=>{
    res.send(render(req,store))
  })
})