var _ = require('lodash')._;

module.exports = {
    init: init
};

function init() {
    var channel = require('../../Utils/PostMessage').getInstance();

    channel.notify({
        method: 'iframeUrlChange',
        params: {
            href: window.location.href,
            type: 'normal'
        }
    });

    // Wrap pushState in iframe so we can put in a callback when it's updated
    window.history.pushState = _.wrap(window.history.pushState, function() {
        var args = Array.prototype.slice.apply(arguments),
            func = args.shift();

        // Invoke original pushState
        func.apply(this, args);
        // Add in our own code to update the state
        channel.notify({
            method: 'iframeUrlChange',
            params: {
                href: window.location.href,
                type: 'pushState'
            }
        });
    });

    // Hook into 'popstate' so we can catch when the back button is hit after a pushState
    window.addEventListener('popstate', function() {
        channel.notify({
            method: 'iframeUrlChange',
            params: {
                href: window.location.href,
                type: 'popState'
            }
        });
    });

    // Hook into 'hashchange' so we can catch when the URL change just for IE and Edge
    var ua = navigator.userAgent;
    var uamatch = ua.match(/(msie|trident|Edge(?=\/))\/?\s*([\d\.]+)/i);
    if (uamatch && uamatch[1] && ['msie','trident','edge'].indexOf(uamatch[1].toLowerCase()) !== -1) {
        window.addEventListener('hashchange', function () {
            channel.notify({
                method: 'iframeUrlChange',
                params: {
                    href: window.location.href,
                    type: 'hashChange'
                }
            });
        });
    }
}
