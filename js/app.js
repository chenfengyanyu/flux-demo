var React = require('react'),
	ReactDOM = require('react-dom');

var TestApp = require('./components/test/TestApp.react');

ReactDOM.render(
  <TestApp />,
  document.getElementById('testapp')
);