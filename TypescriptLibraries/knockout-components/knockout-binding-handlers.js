define(["require", "exports", './binding-handlers/component-handler', './binding-handlers/date-picker'], function (require, exports, componentHandler, datepickerHandler) {
    var BindingHandlers;
    (function (BindingHandlers) {
        function applyDatepickerHandler() {
            var executor = datepickerHandler;
        }
        BindingHandlers.applyDatepickerHandler = applyDatepickerHandler;
        function applyComponentHandler() {
            var executor = componentHandler;
        }
        BindingHandlers.applyComponentHandler = applyComponentHandler;
    })(BindingHandlers || (BindingHandlers = {}));
    return BindingHandlers;
});
//# sourceMappingURL=knockout-binding-handlers.js.map