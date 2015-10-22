var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var BaseConstants = require('../constants/BaseConstants');
var assign = require('object-assign');//对象操作

var CHANGE_EVENT = 'change';

//公共方法
var BaseStore = assign({}, EventEmitter.prototype, {
	//获取url参数值
	getUrlParams: function(p){
		var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {};
    for (var i = 0,j; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[p.toLowerCase()];
    if (typeof(returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
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
    case BaseConstants.URL_PARAMS:
      //console.log(action);
      break;

    default:
      // no op
  }
});


module.exports = BaseStore;

