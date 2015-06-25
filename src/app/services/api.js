'use strict';

var Api = {
	getConfig: function() {
		var url = './app//data/config.json',
		    promise = $.ajax({
			    url: url,
			    dataType: 'json'
		    });
		return promise;
	}
};

module.exports = Api;