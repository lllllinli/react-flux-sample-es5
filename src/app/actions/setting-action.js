'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    Constants     = require('../constants/constants'),
    Api           = require('../services/api'),
    SettingAction;

SettingAction = {
	loadConfig: function() {
		var promise = Api.getConfig();
		promise.done(function(res) {
			AppDispatcher.dispatch({
				actionType: Constants.LOAD_CONFIG,
				result: res
			});
		});
	}
};

module.exports = SettingAction;