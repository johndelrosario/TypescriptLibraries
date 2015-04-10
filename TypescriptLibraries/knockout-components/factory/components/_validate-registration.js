define(["require", "exports", 'knockout'], function (require, exports, ko) {
    function ValidateRegistration(name, config) {
        var isComponentRegistered = ko.components.isRegistered(name);
        if (!isComponentRegistered) {
            ko.components.register(name, config);
        }
    }
    return ValidateRegistration;
});
//# sourceMappingURL=_validate-registration.js.map