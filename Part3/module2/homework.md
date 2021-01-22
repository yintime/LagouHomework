# 模块三PART2

## 1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

>答：Webpack构建运行在node.js环境下，它的配置文件遵循CommonJS规范，webpack.config.js导出一个Object对象（或者导出一个Function，或者导出一个Promise函数，还可以导出一个数组包含多份配置）。Webpack从入口文件开始，识别出源码中的模块化导入语句，递归地找出所有依赖，然后把入口文件和所有依赖打包到一个单独的文件中(即一个chunk)，这就是所谓的模块打包。
关于DevServer：
DevServer用于提供HTTP服务、监听文件变化并实时刷新页面、支持SourceMap以方便调试。
>六个核心概念：
Entry，入口，这是Webpack执行构建的第一步，可理解为输入。
Module，模块，在Webpack中一切皆模块，一个模块即为一个文件。Webpack会从Entry开始递归找出所有的依赖模块。
Chunk，代码块，一个Chunk由多个模块组合而成，它用于代码合并与分割。
Loader，模块转换器，用于将模块的原内容按照需求转换成新内容。
Plugin，扩展插件，在Webpack构建过程的特定时机注入扩展逻辑，用来改变或优化构建结果。
Output，输出结果，源码在Webpack中经过一系列处理后而得出的最终结果。
>Webpack构建流程：
Webpack在启动后，会从Entry开始，递归解析Entry依赖的所有Module，每找到一个Module，就会根据Module.rules里配置的Loader规则进行相应的转换处理，对Module进行转换后，再解析出当前Module依赖的Module，这些Module会以Entry为单位进行分组，即为一个Chunk。因此一个Chunk，就是一个Entry及其所有依赖的Module合并的结果。最后Webpack会将所有的Chunk转换成文件输出Output。在整个构建流程中，Webpack会在恰当的时机执行Plugin里定义的逻辑，从而完成Plugin插件的优化任务。

## 2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

>答：
loader:
Loader用于对模块文件进行编译转换和加载处理，在module.rules数组中进行配置，它用于告诉Webpack在遇到哪些文件时使用哪些Loader去加载和转换。Loader还可以通过query string或object指定选项参数。
Loader相当于一个工作管道，其最后的结果必须是一段JS代码。多个Loader执行顺序是从后往前。
plugin:
Plugin用于扩展Webpack功能，解决除了资源加载以外的其他自动化工作，实现原理是在构建流程里注入钩子函数。在config文件的plugins数组中进行应用和配置。
plugin可以是一个函数或者是一个包含apply方法的对象。
根据业务需求在API文档中找到合适的钩子（类似找到合适的trigger，然后在trigger上绑定事件）。
>```
>Class myPlugin{
>   apply(compiler){
>     compiler.hooks.([hookName]).tap([插件名称：string]，fn(){
>       //这里写挂载函数实际执行部分 
>    })
>}
>```
