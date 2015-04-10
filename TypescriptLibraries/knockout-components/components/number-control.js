define(["require", "exports", 'knockout', './../knockout-component-utils', './../knockout-prototypes', './../knockout-binding-handlers', 'lodash'], function (require, exports, ko, koCustomUtils, koPrototypes, koBindingHandlers, _) {
    var NumberControl;
    (function (NumberControl) {
        var bindingGuid = koCustomUtils.generateGuid(), template = '<input type="number" class="form-control" data-class="{0}" /> \
                        <span data-class="{0}-error"><span>Input should only contain number</span></span> \
                        ';
        koPrototypes.applySubsribeChanged();
        koBindingHandlers.applyComponentHandler();
        var temp = _;
        NumberControl.name = 'number-control', NumberControl.config = {
            viewModel: function (params) {
                var _this = this;
                var initialValue;
                if (typeof params === 'undefined') {
                    throw new Error("Number control should have Value parameter");
                }
                else {
                    initialValue = ko.utils.unwrapObservable(params.Value);
                    if (typeof initialValue !== 'number') {
                        throw new Error('Number control should have an initial value of a number');
                    }
                }
                this.currentValue = ko.observable(initialValue);
                this.currentValue.subscribeChanged(function (newValue, oldValue) {
                    if (isNaN(Number(newValue)) || newValue.isUndefinedOrWhitespace()) {
                        _this.invalidValue(true);
                    }
                    else {
                        _this.invalidValue(false);
                    }
                });
                this.invalidValue = ko.observable(false);
                this[bindingGuid] = function (context) {
                    return {
                        value: context.$data.currentValue
                    };
                };
                this[bindingGuid + '-error'] = function (context) {
                    return {
                        if: context.$data.invalidValue
                    };
                };
            },
            template: koCustomUtils.stringFormat(template, bindingGuid)
        };
        // Validator
        var _NumberControl = NumberControl;
    })(NumberControl || (NumberControl = {}));
    return NumberControl;
});
//# sourceMappingURL=number-control.js.map