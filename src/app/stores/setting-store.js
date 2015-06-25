'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    Constants = require('../constants/constants'),
    assign = require('object-assign');

var CHANGE_EVENT = 'change';

var data = {};

var SettingStore = assign({}, EventEmitter.prototype, {
	// custom
	getData:function() {
		return data;
	},
	setData:function(res) {
		data = res;
	},

	// common
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
	switch (action.actionType) {
		case Constants.LOAD_CONFIG:
			SettingStore.setData(action.result);
			SettingStore.emitChange();
			break;

		default:
		// no op
	}
});

module.exports = SettingStore;
