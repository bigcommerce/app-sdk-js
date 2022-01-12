
module.exports = {
    init: init
};

function init() {
    var timeoutInstance,
        timerSeconds = 1e3 * 60 * 5; // Every 5 mins

    checkIdle();

    function handlePing() {
        require('../../Utils/PostMessage').getInstance().notify({
            method: 'iAmNotIdle'
        });
        document.removeEventListener('mousemove', handlePing);
        document.removeEventListener('keydown', handlePing);
        // Clear out the current instance just in case it might have been triggered twice.
        clearTimeout(timeoutInstance);
        checkIdle();
    }

    function checkIdle() {
        timeoutInstance = setTimeout(function checkIdleTimeout() {
            document.addEventListener('mousemove', handlePing);
            document.addEventListener('keydown', handlePing);
        }, timerSeconds);
    }
}
