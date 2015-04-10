import ko = require('knockout');

function ValidateRegistration(name: string, config: KnockoutComponentTypes.Config) {
    var isComponentRegistered = ko.components.isRegistered(name);

    if (!isComponentRegistered) {
        ko.components.register(name, config);
    }
}

export = ValidateRegistration;