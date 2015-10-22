var React = require('react');
var Header = require('../layout/Header.react');
var Footer = require('../layout/Footer.react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Page = React.createClass({ 
  render: function() {
    return (
      <div>
        <Header />
          page页，测试路由
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/page'>路由</Link></li>
            <li><Link to='/get?name=jartto' params={{user: "jartto"}}>传个值试试</Link></li>
            <li><Link to='/no'>其他</Link></li>
          </ul>
          
        <Footer/>
      </div>
    );
  },
});

module.exports = Page;