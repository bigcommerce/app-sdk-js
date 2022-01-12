window.Bigcommerce = {
    init: init
};

function init(options) {
    if (window.self === window.top) {
        console.info('The Bigcommerce SDK-JS should not be loaded on page that is not within an iframe hosted in the Bigcommerce CP.');

        return;
    }

    var config = require('./Common/config');

    config.set(options);

    require('./Utils').init();
    require('./Apps').init();
    require('./API').init();
}

if (window.bcAsyncInit !== undefined) {
    window.bcAsyncInit();
}
