var React = require('react');
var Header = require('../layout/Header.react');
var Footer = require('../layout/Footer.react');
var Button = require('../common/Button.react');

var Color = React.createClass({ 
  render: function() {
    return (
      <div>
      	<Header title="换肤"/>
      		<Button text="默 认" color="default"/>
          <Button text="蓝 色" color="blue"/>
          <Button text="红 色" color="red"/>
          <Button text="返 回" to="/"/>
        <Footer/>
      </div>
    );
  },
});

module.exports = Color;