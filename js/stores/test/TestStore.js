var AppDispatcher = require('../../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TestConstants = require('../../constants/test/TestConstants');
var assign = require('object-assign');//对象操作
var _ = require('underscore');//数组操作

var CHANGE_EVENT = 'change';
var _tests = [{id:'page1',text:'jartto'}];

function create(text){
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _tests.push({
    id: id,
    text: text
  });
}

function destory(id){
	_tests = _.filter(_tests,function(value){
      //console.log(value);
      return value.id !=id;
   })
}

var TestStore = assign({}, EventEmitter.prototype, {
	getAll: function(){
		return _tests;
	},
	emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text,id;

  switch(action.actionType) {
    case TestConstants.TEST_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        TestStore.emitChange();
      }
      break;

    case TestConstants.TEST_DESTROY:
    	id = action.id;
      destory(id);
      TestStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = TestStore;





















