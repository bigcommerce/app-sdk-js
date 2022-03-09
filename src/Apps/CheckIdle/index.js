import messageService from '../../Utils/PostMessage';

export default function () {
    const timerSeconds = 1000 * 60 * 5; // Every 5 mins
    let timeoutInstance;

    function handlePing() {
        messageService.getInstance().notify({
            method: 'iAmNotIdle',
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

    checkIdle();
}
