var React = require('react');
var Input = require('./Input.react');
var List = require('./List.react');

var Section = React.createClass({
  render: function() {
    return (
      <div>
        <Input />
        <List />
      </div>
    );
  },
});

module.exports = Section;