import Channel from 'jschannel';
import configService from '../../Common/config';

/**
 * @overview This module uses JSChannel to create a connection between
 * itself and the parent window using postMessage.  We want to use it
 * as a singleton so that we only have one connection at any point in time.
 */
class PostMessage {
    channel;

    init() {
        const defaultConfig = {
            window: parent.window,
            origin: '*',
            scope: 'bc',
        };
        const postMessageConfig = configService.get('postMessage');
        const config = { ...defaultConfig, ...postMessageConfig };

        this.setInstance(Channel.build(config));
    }

    setInstance(channel) {
        this.channel = channel;
    }

    getInstance() {
        if (typeof this.channel === 'undefined') {
            throw new Error('postMessage needs to be initialized before it can be used.');
        }

        return this.channel;
    }
}

const messageService = new PostMessage();

export default messageService;

