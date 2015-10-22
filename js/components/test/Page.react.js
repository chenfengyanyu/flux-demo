var React = require('react');
var Header = require('../layout/Header.react');
var List = require('./List.react');
var Footer = require('../layout/Footer.react');
var TestStore =  require("../../stores/test/TestStore.js");

var TestApp = React.createClass({
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

	componentDidMount: function() {
    TestStore.addChangeListener(this.storeChanged);
  },

  componentWillUnmount: function() {
    TestStore.removeChangeListener(this.storeChanged);
  },
  
  render: function() {
    return (
      <div>
        <Header />
          page页，测试路由
        	<List />
        <Footer/>
      </div>
    );
  },
});

module.exports = TestApp;