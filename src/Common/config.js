const defaultConfig = {
    Apps: {},
    clientID: '',
    onLogout: null,
    postMessage: {},
};

class CommonConfig {
    constructor(config) {
        this.config = config;
    }

    set(name) {
        if (typeof name === 'undefined' || typeof name !== 'object') return;

        this.config = { ...this.config, ...name };
    }

    get(name) {
        if (typeof name === 'undefined') {
            return this.config;
        }

        return name.split('.').reduce((c, x) => c[x], this.config);
    }
}

const configService = new CommonConfig(defaultConfig);

export default configService;
