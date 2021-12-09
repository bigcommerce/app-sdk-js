module.exports = {
    init: init
};

function init() {
    require('./CheckIdle').init();
    require('./IframeUrlWatcher').init();
    require('./LogoutNotifier').init();
}
