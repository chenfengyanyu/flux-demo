var React = require('react');
var TestStore =  require("../../stores/test/TestStore.js");
var TestAction =  require("../../actions/test/TestAction.js");

var Input = React.createClass({
  getInitialState: function(){
      return {
          isUpdate : false
      }
  },

  storeChanged: function(){
      this.setState({
          isUpdate : !this.state.isUpdate
      });
  },

  createItem: function(){
  	var userInput = this.refs.user_input.value.trim();
  	if(!userInput) return;

  	TestAction.create(userInput);

  	this.refs.user_input.value='';
  },

  removeItem: function(id){
  	TestAction.destory(id);
  },

  componentDidMount: function() {
    TestStore.addChangeListener(this.storeChanged);
  },

  componentWillUnmount: function() {
    TestStore.removeChangeListener(this.storeChanged);
  },

  render: function() {
  	var items = TestStore.getAll();
    var elements = items.map(function(item,i){
        return (
            <li><span>{item.text}</span> , <span onClick={this.removeItem.bind(this,item.id)}>删除</span></li>
        )
    }.bind(this));
  	return (
      <div className="">
        <input type="text" ref="user_input" placeholder="请输入..."/>
        <a href="#" onClick={this.createItem}>添加</a>
        <ul>
	      	{elements}
	      </ul>
      </div>
    );
  },
});

module.exports = Input;
