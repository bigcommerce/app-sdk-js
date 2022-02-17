import appsInit from './Apps';
import configService from './Common/config';
import utilInit from './Utils';

function init(options) {
    if (window.self === window.top) {
        return console.info('The Bigcommerce SDK-JS should not be loaded on page that is not within an iframe hosted in the Bigcommerce CP.');
    }

    configService.set(options);
    // Initialize apps and utilities
    utilInit();
    appsInit();
}

window.Bigcommerce = {
    init: init
};

if (window.bcAsyncInit !== undefined) {
    window.bcAsyncInit();
}
