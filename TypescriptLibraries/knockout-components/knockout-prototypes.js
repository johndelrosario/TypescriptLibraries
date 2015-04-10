define(["require", "exports", './prototypes/subscribe-changed'], function (require, exports, subsribeChanged) {
    var KnockoutPrototypes;
    (function (KnockoutPrototypes) {
        function applySubsribeChanged() {
            subsribeChanged();
        }
        KnockoutPrototypes.applySubsribeChanged = applySubsribeChanged;
        ;
        function applyAll() {
            subsribeChanged();
        }
        KnockoutPrototypes.applyAll = applyAll;
    })(KnockoutPrototypes || (KnockoutPrototypes = {}));
    return KnockoutPrototypes;
});
//# sourceMappingURL=knockout-prototypes.js.map