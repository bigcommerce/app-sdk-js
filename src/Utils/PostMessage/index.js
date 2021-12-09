/**
 * @overview This module uses JSChannel to create a connection between
 * itself and the parent window using postMessage.  We want to use it
 * as a singleton so that we only have one connection at any point in time.
 */
var channel,
    _ = require('lodash')._;

module.exports = {
    init: init,
    setInstance: setInstance,
    getInstance: getInstance
};

function init() {
    var defaultConfig = {
            window: parent.window,
            origin: '*',
            scope: 'bc'
        },
        postMessageConfig = require('../../Common/config').get('postMessage'),
        config = _.assign({}, defaultConfig, postMessageConfig);

    setInstance(require('jschannel').build(config));
}

function getInstance() {
    if (! channel) {
        throw new Error('postMessage needs to be initialized before it can be used.');
    }

    return channel;
}

function setInstance(_channel) {
    channel = _channel;
}
