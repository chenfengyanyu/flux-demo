var React = require('react');
var ButtonCss = require('../../../css/component/button.css');
var $ = require('jquery');

var Button = React.createClass({
	propTypes: {
		text: React.PropTypes.string.isRequired,
		to: React.PropTypes.string,
		color: React.PropTypes.string
	},

  changeColor: function(obj){
  	console.dir(obj);
  	if(!obj) return;
    var link = $('link')[1];
    $(link).attr('href','css/skins/'+obj+'.css');
    //重定向到当前页面，解决link替换css未及时更新问题
    location.href = '#/color';
    // require('../../../css/skins/'+obj+'.css');

    localStorage.setItem('skins-cur',obj);
  }, 

  gotoLink: function(to){
  	console.log(to);
  	location.href = to;
  },

  handleClick: function(){
  	var obj = this.props;
  	if(obj.color){
  		this.changeColor(obj.color);
  	}else if(obj.to){
  		this.gotoLink(obj);
  	}else{
  		return;
  	}
  },

  componentDidMount: function(){
  	var temp = localStorage.getItem('skins-cur');
  	if(!temp) return;
  	this.changeColor(temp);
  },

  render: function() {
  	return (
  		<div className="button" onClick={this.handleClick}>
  			{this.props.text}
  		</div>
    );
  },
});

module.exports = Button;
