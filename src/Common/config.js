var _ = require('lodash')._,
    config = {
        API: {},
        Apps: {},
        clientID: '',
        onLogout: null,
        postMessage: {}
    };

module.exports = {
    set: function set(name, val) {
        if (name === undefined) {
            return;
        }

        if (typeof name === 'object') {
            config = _.assign(config, name);
        } else {
            var obj = config;
            name = name.split('.');
            while (name.length > 1) {
                obj = config[name.shift()];
            }

            obj[name.shift()] = val;
        }
    },
    get: function get(name) {
        if (name === undefined) {
            return config;
        } else {
            return name.split('.').reduce(function(c, x) {
                return c[x];
            }, config);
        }
    }
};
