define(["require", "exports", 'knockout', 'knockoutClassBindingProvider', './knockoutcomponents/knockout-factory'], function (require, exports, ko, koClassBinding, koFactory) {
    var OnLoad;
    (function (OnLoad) {
        var test = ko.observable(12), testx = ko.observable(1234);
        var viewModel = {
            testValue: ko.observable(1),
            farter: function (a, b) {
                return {
                    value: test
                };
            },
            tester: koFactory.components.numberControl({ Value: testx })
        };
        ko.bindingProvider.instance = new koClassBinding(viewModel);
        ko.applyBindings();
    })(OnLoad || (OnLoad = {}));
});
//# sourceMappingURL=Test.js.map