var AppDispatcher = require('../../dispatcher/AppDispatcher');
var TestConstants = require('../../constants/test/TestConstants');

var TestActions = {
	create: function(text){
		AppDispatcher.dispatch({
      actionType: TestConstants.TEST_CREATE,
      text: text
    });
	},
	destory: function(id){
		AppDispatcher.dispatch({
			actionType: TestConstants.TEST_DESTROY,
			id: id
		})
	}

}

module.exports = TestActions;