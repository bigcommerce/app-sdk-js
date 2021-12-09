describe('Bigcommerce SDK Tests', function() {
    it('Should add Bigcommerce to window', function() {
        expect(window.Bigcommerce).toBeUndefined();
        require('./Bigcommerce');
        expect(window.Bigcommerce).toBeDefined();
    });

    it('Should properly Initialise API and Apps modules', function() {
        var Apps = require('./Apps'),
            API = require('./API'),
            Utils = require('./Utils');

        spyOn(Apps, 'init');
        spyOn(API, 'init');
        spyOn(Utils, 'init');

        require('./Bigcommerce');

        window.Bigcommerce.init();

        expect(Apps.init).toHaveBeenCalled();
        expect(API.init).toHaveBeenCalled();
        expect(Utils.init).toHaveBeenCalled();
    });
});
