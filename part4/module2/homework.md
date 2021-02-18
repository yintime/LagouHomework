# 简答题

1. 父传子有哪些方式

>通过子组件的props选项接收父组件的传值。父组件通过属性绑定向子组件注入数据。
>EventBus可以实现包括父传子在内的任意组件之间的数据传递。
>发送数据的组件触发bus事件($emit)，接受的组件给bus注册对应事件($on)。

2. 子传父有哪些方式

>子向父传值需要通过自定义事件实现。子组件可以使用 $emit 触发父组件的自定义事件。数据可以作为事件参数传递给父组件。
>EventBus可以实现包括子传父在内的任意组件之间的数据传递。
>发送数据的组件触发bus事件($emit)，接受的组件给bus注册对应事件($on)。

3. 如何让 CSS 只在当前组件中起作用

>在style标签中添加scoped属性
>```<!-- Add "scoped" attribute to limit CSS to this component only -->
><style scoped>
>
></style>
>```

4. keep-alive 的作用是什么

>主要用于保留组件状态或避免组件重新渲染
>用法：使用`<keep-alive><\keep-alive>`包裹动态组件
>include属性用于指定哪些组件会被缓存，具有多种设置方式。

5. vue中如何获取DOM

>Vue.js  2.0版本中。我们通过给元素绑定ref=“XXX”，然后通过`this.$refs.XXX`或者`this.refs['XXX']`来获取

6. 请说出 Vue CLI 项目中src目录每个文件夹的文件的用法

>assets文件夹是存放静态资源；
>components是存放项目组件；
>router是定义路由相关的配置;
>view视图；
>app.vue是一个应用根主组件；
>main.js是入口文件

7. 单页面应用的优缺点

>优点：前后端分离开发，提高了开发效率。业务场景切换时，局部更新结构。用户体验好，更接近本地应用。
>缺点：不利于SEO。初次首屏加载速度慢。页面复杂度比较高。

8. `$router`和`$route`的区别

>$router是VueRouter的实例对象,包含了一些路由的跳转方法，钩子函数等
>$route是路由信息对象，里面主要包含路由的一些基本信息，包括name、meta、path、hash、query、params、fullPath、matched、redirectedFrom

9.  怎么定义 vue-router 的动态路由? 怎么获取传过来的值？

>定义路由规则时， 将路径中的某个部分使用 `:` 进行标记， 即可设置为动态路由。
>设置为动态路由后， 动态部分为任意内容均跳转到同一组件。
>: 部分对应的信息称为路径参数， 存储在 vm.$route.params 中。

10. vue-router有几种模式，分别是什么

>Hash模式和History 方式模式
>Hash模式:通过 hashchange 事件监听 hash 变化， 并进行网页内容更新。
>特点总结：
>• Hash 方式兼容性好。
>• 地址中具有 #， 不太美观。
>• 前进后退功能较为繁琐。
>History 方式:采用 HTML5 提供的新功能实现前端路由。在操作时需要通过 history.pushState() 变更 URL并执行对应操作。
>缺点：刷新操作会发出服务端请求，需要后端解决。
