import checkIdle from './CheckIdle';
import iframeUrlWatcher from './IframeUrlWatcher';
import logoutNotifier from './LogoutNotifier';

export default function () {
    // Load apps
    checkIdle();
    iframeUrlWatcher();
    logoutNotifier();
}
