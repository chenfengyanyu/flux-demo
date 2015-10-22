var React = require('react');
var TestAction =  require("../../actions/test/TestAction.js");

var Input = React.createClass({

  createItem: function(){
    var userInput = this.refs.user_input.value.trim();
    if(!userInput) return;

    TestAction.create(userInput);

    this.refs.user_input.value='';
  },

  render: function() {
    return (
      <div className="">
        <input type="text" ref="user_input" placeholder="请输入..."/>
        <a href="#" onClick={this.createItem}>添加</a>
      </div>
    );
  },
});

module.exports = Input;
