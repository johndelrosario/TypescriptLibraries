define(["require", "exports", 'knockout', 'jquery'], function (require, exports, ko, $) {
    var Loader;
    (function (_Loader) {
        var Loader = (function () {
            function Loader() {
                if (Loader._instance) {
                    throw new Error("Loader already instantiated");
                }
                this.viewModel = {
                    isAppLoading: ko.observable(false)
                };
                Loader._instance = this;
            }
            Object.defineProperty(Loader, "Instance", {
                get: function () {
                    if (Loader._instance === null) {
                        Loader._instance = new Loader();
                    }
                    return Loader._instance;
                },
                enumerable: true,
                configurable: true
            });
            Loader.prototype.validateElement = function () {
                if (Loader._instance.loaderElement === null) {
                    throw new Error("Loading bar spinner markup must exist in the document");
                }
            };
            Loader.prototype.whenLoading = function () {
                Loader._instance.viewModel.isAppLoading(true);
            };
            Loader.prototype.whenLoadingStopped = function () {
                Loader._instance.viewModel.isAppLoading(false);
            };
            Loader.prototype.Initialize = function () {
                Loader._instance.validateElement();
                debugger;
                $(document).ajaxStart(Loader._instance.whenLoading);
                $(document).ajaxStop(Loader._instance.whenLoadingStopped);
                ko.applyBindings(Loader._instance.viewModel, Loader._instance.loaderElement);
            };
            Loader._instance = null;
            return Loader;
        })();
        $(document).ready(Loader.Instance.Initialize);
    })(Loader || (Loader = {}));
    function sender(params) {
        if (params === void 0) { params = {}; }
        params.url = "http://api.github.com";
        params.type = "GET";
        $.ajax(params);
    }
    exports.sender = sender;
});
//# sourceMappingURL=loader.js.map