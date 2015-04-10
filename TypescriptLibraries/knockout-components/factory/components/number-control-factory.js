define(["require", "exports", './../../components/number-control', './_validate-registration'], function (require, exports, numberControl, componentValidator) {
    function NumberControlFactory(params) {
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
        componentValidator(numberControl.name, numberControl.config);
        return function () {
            return componentContainer;
        };
    }
    return NumberControlFactory;
});
//# sourceMappingURL=number-control-factory.js.map