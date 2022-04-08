import configService from '../../Common/config';
import messageService from '../../Utils/PostMessage';

export default function () {
    const channel = messageService.getInstance();
    const onLogout = configService.get('onLogout');

    if (typeof onLogout === 'function') {
        channel.bind('logout', () => {
            // Intentionally calling this function without params to avoid exposing the jschannel
            onLogout();
        });
    }
}
