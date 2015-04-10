import ko = require('knockout');
import koClassBinding = require('knockout-classbinding-provider');
import koFactory = require('./../knockout-components/knockout-factory');

module OnLoad {
    var test = ko.observable(12),
        testx = ko.observable(1234);
    var x = ko.observable('04-16-2013');

    var viewModel = {
        testValue: ko.observable(1),
        farter: function (a, b) {
            return {
                value: test
            }
        },
        tester: koFactory.components.numberControl({ Value: testx }),
        datepick: function () {
            return {
                datepicker: x
            }
        }
    };

    ko.bindingProvider.instance = new koClassBinding(viewModel);
    ko.applyBindings();
}