/// TODO LIST
/// 1. Make TS interface for KnockoutPrototypes
///
define(["require", "exports", './components/number-control'], function (require, exports, numberControl) {
    var KnockoutCustomComponents;
    (function (KnockoutCustomComponents) {
        KnockoutCustomComponents.NumberControl = numberControl;
    })(KnockoutCustomComponents || (KnockoutCustomComponents = {}));
    return KnockoutCustomComponents;
});
//# sourceMappingURL=knockout-components.js.map