var React = require('react');
var ButtonCss = require('../../../css/component/button.css');
var $ = require('jquery');

var Button = React.createClass({
	getInitialState: function () {
    return {obj:this.props};
  },
  changeColor: function(color){
  	console.log(color);
  	if(!color) return;
    // require('../../../css/skins/'+color+'.css');
    var link = $('link')[1];
    $(link).attr('href','css/skins/'+color+'.css');
  }, 

  gotoLink: function(to){
  	console.log(to);
  	location.href = to;
  },

  emitFunction: function(obj){
  	var obj = this.props;
  	if(obj.color){
  		this.changeColor(obj.color);
  	}else if(obj.to){
  		this.gotoLink(obj.to);
  	}else{
  		return;
  	}
  },
  componentDidMount: function () {
    this.updateState(this.props);
  },

  componentWillReceiveProps: function (nextProps) {
    this.updateState(nextProps);
  },

  updateState: function (props) {
  	console.log('update');
  	this.setState({obj:''});
  },
  render: function() {
  	return (
  		<div className="button" onClick={this.emitFunction}>
  			{this.props.text}
  		</div>
    );
  },
});

module.exports = Button;
