var React = require('react');
var Header = require('../layout/Header.react');
var Footer = require('../layout/Footer.react');
var BaseStore =  require('../../stores/BaseStore.js');

var Loader = require('../common/Loader.react');
var Get = React.createClass({ 
  getInitialState: function(){
      return {
          loaderFlag : false
      }
  },
  hideLoader: function(){
    this.setState({
      loaderFlag: true
    })
  },
  render: function() {
    var val = BaseStore.getUrlParams('name');
    return (
      <div>
      	<Header title="传值"/>
      		<div id="content">
        		哟，传过来个：{val}
        	</div>
         <Loader flag={this.state.loaderFlag}/>
         <div onClick={this.hideLoader}>隐藏loader</div>
        <Footer/>
      </div>
    );
  },
});

module.exports = Get;