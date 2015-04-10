define(["require", "exports", 'knockout', '../knockout/knockout-custom-components'], function (require, exports, ko, koCustomElements) {
    var KnockoutBindingFactory;
    (function (KnockoutBindingFactory) {
        var Components;
        (function (Components) {
            function validateRegistration(name, config) {
                var isComponentRegistered = ko.components.isRegistered(name);
                if (!isComponentRegistered) {
                    ko.components.register(name, config);
                }
            }
            function numberControl(params) {
                var componentContainer = {
                    component: {
                        name: undefined,
                        params: {
                            Value: params.Value,
                            Class: params.Class,
                            Css: params.Css,
                        }
                    }
                };
                validateRegistration(koCustomElements.NumberControl.name, koCustomElements.NumberControl.config);
                return function () {
                    return componentContainer;
                };
            }
            Components.numberControl = numberControl;
        })(Components = KnockoutBindingFactory.Components || (KnockoutBindingFactory.Components = {}));
    })(KnockoutBindingFactory || (KnockoutBindingFactory = {}));
    return KnockoutBindingFactory;
});
//# sourceMappingURL=knockout-binding-factory.js.map