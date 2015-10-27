/* loader组件
** var Loader = require('../common/Loader.react');
** <Loader flag={this.state.loaderFlag}/>
*/

var React = require('react');
var ReactLoader = require('react-loader');

var Loader = React.createClass({
  
  render: function() {
    var options = {
      lines: 13,
      length: 15,
      width: 4,
      radius: 15,
      corners: 1,
      rotate: 0,
      direction: 1,
      color: '#000',
      speed: 1,
      trail: 60,
      shadow: false,
      hwaccel: false,
      zIndex: 2e9,
      top: '50%',
      left: '50%',
      scale: 0.8
    };
    return (
      <ReactLoader loaded={this.props.flag} options={options} className="spinner" />
    );
  }     
});

module.exports = Loader;

