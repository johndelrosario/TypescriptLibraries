import ko = require('knockout');
import koCustomUtils = require('./../knockout-component-utils');
import koPrototypes = require('./../knockout-prototypes');
import koBindingHandlers = require('./../knockout-binding-handlers');
import _ = require('lodash');

module NumberControl {
    var bindingGuid = koCustomUtils.generateGuid(),
        template = '<input type="number" class="form-control" data-class="{0}" /> \
                        <span data-class="{0}-error"><span>Input should only contain number</span></span> \
                        ';
    koPrototypes.applySubsribeChanged();
    koBindingHandlers.applyComponentHandler();
    var temp = _;
    export var name = 'number-control',
        config = {
            viewModel: function (params: IKnockoutCustomComponents.NumberControlParameters) {
                var initialValue: number;
                if (typeof params === 'undefined') {
                    throw new Error("Number control should have Value parameter");
                } else {
                    initialValue = ko.utils.unwrapObservable(params.Value);
                    if (typeof initialValue !== 'number') {
                        throw new Error('Number control should have an initial value of a number');
                    }
                }

                this.currentValue = ko.observable(initialValue);
                this.currentValue.subscribeChanged((newValue: string, oldValue: string) => {
                    if (isNaN(Number(newValue)) || newValue.isUndefinedOrWhitespace() ) {
                        this.invalidValue(true);
                    } else {
                        this.invalidValue(false);
                    }
                });
                this.invalidValue = ko.observable(false);

                this[bindingGuid] = function (context) {
                    return {
                        value: context.$data.currentValue
                    };
                }
                this[bindingGuid + '-error'] = function (context) {
                    return {
                        if: context.$data.invalidValue
                    };
                }
            },
            template: koCustomUtils.stringFormat(template, bindingGuid)
        }

    // Validator
    var _NumberControl: IKnockoutCustomComponents.KnockoutComponent = NumberControl;
}

export = NumberControl;