var React = require('react');
var Header = require('../layout/Header.react');
var Footer = require('../layout/Footer.react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ContentCss = require('../../../css/component/content.css');

var Page = React.createClass({ 
  render: function() {
    return (
      <div>
        <Header title="路由"/>
          <div id="content">
            <ul>
              <li><Link to='/'>首页</Link></li>
              <li><Link to='/page'>路由</Link></li>
              <li><Link to='/get?name=Jartto'>传个“Jartto”试试</Link></li>
              <li><Link to='/color'>换肤</Link></li>
              <li><Link to='/no'>其他</Link></li>
            </ul>
          </div>
        <Footer/>
      </div>
    );
  },
});

module.exports = Page;