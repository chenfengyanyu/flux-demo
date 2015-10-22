var React = require('react');
var	ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var TestApp = require('./components/test/TestApp.react');

ReactDOM.render(
  <TestApp />,
  document.getElementById('testapp')
);