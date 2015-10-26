var React = require('react');
var HeaderCss = require('../../../css/component/header.css');

var Header = React.createClass({
  render: function() {
  	var title = this.props.title;
  	return (
      <header id="header">
      	{title}
      </header>
    );
  },
});

module.exports = Header;
