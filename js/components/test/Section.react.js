var React = require('react');
var Input = require('./Input.react');
var List = require('./List.react');

var ContentCss = require('../../../css/component/content.css');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Section = React.createClass({
  render: function() {
    return (
      <div id="content">
        <Input />
        <List />
        <Link to='/page'>去看看路由！</Link>
      </div>
    );
  },
});

module.exports = Section;