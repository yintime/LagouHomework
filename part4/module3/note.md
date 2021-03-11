# 注意点

1. 路由选项中'component'不要写成'components'，会导致组件为undefined.

2. 关于报错[Vue warn]: Property or method "XXX" is not defined on the instance but referenced during render.

>需要绑定的内容在渲染时没有找到（注意检查拼写）

3. 字符串startswith方法 注意拼写，中间有个s

4. json转urlencoded：qs组件 stringify(obj)方法
json转对象：JSON.parse(json)

5. async await 异步变同步

6. request请求回的数据为undefined的时 检查export 里是不是漏了return

7. 路由前置守卫处理之后务必有next()执行，不然不会发生跳转。（return next只是返回了next对象，并没有修改）

8. vue子组件根元素绑定原生响应事件需要在事件名后加(@click).native修饰符

9. 一定要先本地存用户信息 再路由跳转

10. forEach 不要写成 foreach

11. GET请求跟 params， POST请求跟 data

12. 从父组件接收的数据不一定要缓存在data里，如果确实需要缓存，不可同名