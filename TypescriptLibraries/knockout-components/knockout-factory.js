define(["require", "exports", './factory/components-factory'], function (require, exports, customComponentFactory) {
    var KnockoutFactory;
    (function (KnockoutFactory) {
        KnockoutFactory.components = customComponentFactory;
    })(KnockoutFactory || (KnockoutFactory = {}));
    return KnockoutFactory;
});
//# sourceMappingURL=knockout-factory.js.map