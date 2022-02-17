import { wrap } from 'lodash';
import messageService from '../../Utils/PostMessage';

export default function () {
    const channel = messageService.getInstance();

    channel.notify({
        method: 'iframeUrlChange',
        params: {
            href: window.location.href,
            type: 'normal'
        }
    });

    // Wrap pushState in iframe so we can put in a callback when it's updated
    window.history.pushState = wrap(window.history.pushState, (...args) => {
        const func = args.shift();
        // Invoke original pushState
        func(...args);
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
    window.addEventListener('popstate', () => {
        channel.notify({
            method: 'iframeUrlChange',
            params: {
                href: window.location.href,
                type: 'popState'
            }
        });
    });

    // Hook into 'hashchange' so we can catch when the URL change just for IE and Edge
    const ua = navigator.userAgent;
    const uamatch = ua.match(/(msie|trident|Edge(?=\/))\/?\s*([\d\.]+)/i);
    if (uamatch?.[1] && ['msie','trident','edge'].indexOf(uamatch[1].toLowerCase()) !== -1) {
        window.addEventListener('hashchange', () => {
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
