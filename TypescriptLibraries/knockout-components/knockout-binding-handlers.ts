import componentHandler = require('./binding-handlers/component-handler');
import datepickerHandler = require('./binding-handlers/date-picker');

module BindingHandlers {
    export function applyDatepickerHandler() {
        var executor = datepickerHandler;
    }

    export function applyComponentHandler() {
        var executor = componentHandler;
    }
}

export = BindingHandlers; 