require.config({
    baseUrl: 'scripts',
    paths: {
        app: 'app',
        jquery: 'Scripts/jquery-2.1.3',
        lodash: 'Scripts/lodash',
        loader: 'Scripts/loader',
        knockout: 'Scripts/knockout-3.3.0.debug',
        knockoutClassBindingProvider: 'Scripts/knockout-classBindingProvider',
    }
});
define(function (require) {
    // List dependencies here
    var loader = require('../Test');
    return function () {
    };
});
//# sourceMappingURL=require-config.js.map