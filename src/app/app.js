'use strict';

var React = require('react'),
    Setting = require('./components/containers/setting/setting'),
    ExampleApp;

ExampleApp = React.createClass({
    _onSetting(data) {
      console.log('ExampleApp fun..', data);
    },
    render: function() {
        return (
           <div>
               App
                <Setting onSetting={this._onSetting}/>
           </div>
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);