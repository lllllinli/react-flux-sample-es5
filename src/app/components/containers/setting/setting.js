'use strict';

var React         = require('react'),
    SettingAction = require('../../../actions/setting-action'),
    SettingStore  = require('../../../stores/setting-store'),
    actionMap,
    getStoreData,
    Setting;

getStoreData = function() {
	return {
		settingData: SettingStore.getData()
	}
};

actionMap = {
	getConfig: SettingAction.loadConfig
};

Setting = React.createClass({
	componentDidMount: function() {
		SettingStore.addChangeListener(this._onChange);
		actionMap.getConfig();
	},
	_onChange: function() {
		var data = getStoreData().settingData;
		this.props.onSetting(data);
	},
	render: function() {
		return (
		   <div>
		   </div>
		);
	}
});

module.exports = Setting;