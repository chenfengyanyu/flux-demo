var React = require('react');
var Header = require('../layout/Header.react');
var Section = require('./Section.react');
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
        <Header title="欢迎"/>
        	<Section />
        <Footer/>
      </div>
    );
  },
});

module.exports = TestApp;