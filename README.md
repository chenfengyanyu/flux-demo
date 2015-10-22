# flux-demo
- 使用flux框架和webpack打包工具创建的一个简单react示例
- 参考了flux官方todomvc例子
- 添加了路由控制
- 拆分了common公用库和layout布局库

##目标
>
1. 结构化react编程
2. 可扩展性
3. 整体依据功能划分，局部按照业务逻辑划分

##说明
- dispatcher:
Dispatcher 本质上就是一个事件系统。它负责广播事件和注册 callback。有且只有一个全局的 Dispatcher。

- Store响应事件:
在应用中，处理业务逻辑和数据交互

- action:
应用的DSL（Domian Specific Language)，领域特定语言，一种特化的，面向问题的语言

- view：
渲染应用组件树

##资源
- webpack官方文档  
http://webpack.github.io/docs/usage-with-gulp.html

- Flux官方文档    
http://facebook.github.io/flux/docs/overview.html#content

- 一个简单的示例  
https://github.com/coocssweb/easy-flux

- 轻松入门React和Webpack  
http://www.tuicool.com/articles/BrAVv2y

- Flux 傻瓜教程  
http://zhuanlan.zhihu.com/FrontendMagazine/19900243

- 学习reactjs  
http://my.oschina.net/ilivebox/blog/402813

- ReactRouter 使用指南  
http://undefinedblog.com/react-router/

- ReactRouter github地址  
https://github.com/rackt/react-router

- React-Router With Flux  
http://jaketrent.com/post/react-router-with-flux/

- 持续补充中～～～


##其他
> 以上为本人在学习中收集的资料，入个门应该够了。咳～咳，当然，你需要首先了解reactjs，要不你将很难发现flux架构的可贵之处。当然，flux是框架或是其他，这里就不在纠结了。  
入门哦，高手请自觉绕道！