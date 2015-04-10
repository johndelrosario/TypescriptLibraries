require.config({
    baseUrl: 'scripts',
    paths: {
        app: 'app',
        jquery: 'jquery/jquery-2.1.3',
        lodash: 'lodash/lodash',
        knockout: 'knockout/knockout-3.3.0.debug',
        'knockout-classbinding-provider': 'knockout/knockout-classbinding-provider',
        'moment': 'moment/moment',
        'bootstrap-datepicker': '../bootstrap-datepicker/js/bootstrap-datepicker',
        'utilities': '../dev-utils/utilities'
    },
    shim: {
        'bootstrap-datepicker': {
            deps: ['jquery'],
        }
    }
});
require(['bootstrap-datepicker', 'main', 'utilities'], function (datePicker, main, utils) {
    utils.Prototypes.Strings.applyAll();
});
//# sourceMappingURL=r-config.js.map