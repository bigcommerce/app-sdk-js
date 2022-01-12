if (window._ === undefined) {
    throw new Error('Missing dependency on Lodash.js');
}

module.exports = {
    _: window._
};
