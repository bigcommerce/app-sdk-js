describe('Common/config Tests', function() {
    var config;
    beforeEach(function() {
        require('../Bigcommerce');
        config = require('./config');
    });

    it('Should load default config', function() {
        expect(config.get().clientID).toBeDefined();
        expect(config.get().Apps).toBeDefined();
        expect(config.get().API).toBeDefined();
    });
});
