define(["require", "exports", 'knockout', 'knockout-classbinding-provider', './../knockout-components/knockout-factory'], function (require, exports, ko, koClassBinding, koFactory) {
    var OnLoad;
    (function (OnLoad) {
        var test = ko.observable(12), testx = ko.observable(1234);
        var x = ko.observable('04-16-2013');
        var viewModel = {
            testValue: ko.observable(1),
            farter: function (a, b) {
                return {
                    value: test
                };
            },
            tester: koFactory.components.numberControl({ Value: testx }),
            datepick: function () {
                return {
                    datepicker: x
                };
            }
        };
        ko.bindingProvider.instance = new koClassBinding(viewModel);
        ko.applyBindings();
    })(OnLoad || (OnLoad = {}));
});
//# sourceMappingURL=main.js.map