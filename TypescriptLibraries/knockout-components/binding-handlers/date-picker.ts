import ko = require('knockout');
import $ = require('jquery');
import moment = require('moment');

module DatePicker {
    ko.bindingHandlers['datepicker'] = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            //initialize datepicker with some optional options
            var options = allBindingsAccessor().datepickerOptions || {},
                format = !element.getAttribute('datepicker-format') ? 'mm-dd-yyyy' : element.getAttribute('datepicker-format');
            $(element)['datepicker']({
                format: format
            });
            $(element).attr('placeholder', format)
            $(element).on('click', function () {
                $(element)['datepicker']('show');
            });

            //when a user changes the date, update the view model
            ko.utils.registerEventHandler(element, "changeDate", function (event) {
                var value = valueAccessor();
                try {
                    value(moment(event.date).format("YYYY-MM-DD"));
                } catch (ex) {
                    allBindingsAccessor()._ko_property_writers.datepicker(moment(event.date).format("YYYY-MM-DD"));
                    $('#' + $(element).context['id']).trigger("change");
                }
                $(element)['datepicker']('hide');
            });

            ko.utils.registerEventHandler(element, 'change', function (event) {
                var value = valueAccessor();
                var textValue = $(element).val();

                var finalDateValue = event.date ?
                    moment(event.date).format('YYYY-MM-DD') :
                    (textValue != "" && moment(textValue, 'MM-DD-YYYY').isValid() ?
                        moment(textValue, 'MM-DD-YYYY').format('YYYY-MM-DD') :
                        '');
                if (finalDateValue) {
                    $(element).val(moment(finalDateValue).format("MM-DD-YYYY"));
                    try {
                        value(finalDateValue);

                    } catch (ex) {
                        allBindingsAccessor()._ko_property_writers.datepicker(finalDateValue);
                    }
                } else {
                    $(element).val('');
                    try {
                        value('');
                    } catch (ex) {
                        allBindingsAccessor()._ko_property_writers.datepicker("");
                    }
                }
                $(element)['datepicker']('hide');
            });

            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element).remove();
            });
        },
        update: function (element, valueAccessor) {
            var widget = $(element).data("datepicker");
            //when the view model is updated, update the widget
            if (widget) {
                if (ko.utils.unwrapObservable(valueAccessor() != null) && ko.utils.unwrapObservable(valueAccessor() != ""))
                    widget.date = new Date(moment(<Date>ko.utils.unwrapObservable(valueAccessor())).format());

                if (valueAccessor() != "") {
                    if (typeof valueAccessor() === 'string') {
                        widget.setValue(moment(valueAccessor()).toDate());
                    } else {
                        if (moment(widget.date).diff(moment('1970/1/1'), 'days') != 0)
                            widget.setValue(widget.date);
                        else
                            valueAccessor();
                    }
                } else {
                    //  widget.setValue("");
                    //  widget.setValue(new Date());
                }
            }
        }
    };
}

export = DatePicker;