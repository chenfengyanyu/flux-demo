var React = require('react');
var TestAction =  require('../../actions/test/TestAction.js');
var TestStore =  require('../../stores/test/TestStore.js');
var ListCss = require('../../../css/component/list.css');

var List = React.createClass({
  removeItem: function(id){
    TestAction.destory(id);
  },

  render: function() {
    var items = TestStore.getAll();
    var elements = items.map(function(item,i){
        return (
            <li key={'test'+i}><span>{item.text}</span> , <span onClick={this.removeItem.bind(this,item.id)}>删除</span></li>
        )
    }.bind(this));
    return (
      <div>
        <ul id="test">
          {elements}
        </ul>
      </div>
    );
  },
});

module.exports = List;