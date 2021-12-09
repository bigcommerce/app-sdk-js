module.exports = {
    init: init
};

function init() {
    onLogoutSubscribe();

    function onLogoutSubscribe() {
        var channel = require('../../Utils/PostMessage').getInstance(),
            onLogout = require('../../Common/config').get('onLogout');

        if (typeof onLogout === 'function') {
            channel.bind('logout', function onLogoutCallback() {
                // Intentionally calling this function without params
                // to avoid exposing the jschannel
                onLogout();
            });
        }
    }
}
