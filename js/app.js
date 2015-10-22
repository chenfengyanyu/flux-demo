var React = require('react');
var	ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var TestApp = require('./components/test/TestApp.react');
var Page = require('./components/test/Page.react');
var Get = require('./components/test/Get.react');
var NoMatch = require('./components/layout/NoMatch.react');

console.log(ReactRouter);

//参考：https://github.com/rackt/react-router
//定义路由
ReactDOM.render((
  <Router>
    <Route path="/" component={TestApp}/>
    <Route path="page" component={Page} />
    <Route path="get" component={Get} />
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('testapp'))

// var appRouter = (
// 	<Router>
//     <Route path="/" component={TestApp}>
//       <Route path="page" component={Page} />
//       <Route path="*" component={NoMatch}/>
//     </Route>
//   </Router>
// )

// Router.run(appRouter,function (Handler,state) {
//     ReactDOM.render(<Handler/>, document.getElementById('testapp'));
// });








