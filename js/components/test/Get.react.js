var React = require('react');
var Header = require('../layout/Header.react');
var Footer = require('../layout/Footer.react');
var BaseStore =  require("../../stores/BaseStore.js");

var Get = React.createClass({ 
  render: function() {
    var val = BaseStore.getUrlParams('name');
    return (
      <div>
        哟，传过来个：{val}
      </div>
    );
  },
});

module.exports = Get;