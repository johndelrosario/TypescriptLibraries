import numberControl = require('./../../components/number-control');
import componentValidator = require('./_validate-registration');

function NumberControlFactory(params: IKnockoutCustomComponents.NumberControlParameters) {
    var componentContainer: IKnockoutCustomComponents.NumberControl = {
        component: {
            name: undefined,//koCustomElements.NumberControl.name,
            params: {
                Value: params.Value,
                Class: params.Class,
                Css: params.Css,
            }
        }
    };

    componentValidator(numberControl.name, numberControl.config);

    return () => {
        return componentContainer;
    }
}

export = NumberControlFactory;