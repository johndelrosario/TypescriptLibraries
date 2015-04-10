import koBindingHandlers = require('./../knockout-binding-handlers');

module DatePicker {
    koBindingHandlers.applyDatepickerHandler();

    interface DatePicker {
        Value: Date|KnockoutObservable<Date>|string|KnockoutObservable<string>;
        Format: string;
    }
}