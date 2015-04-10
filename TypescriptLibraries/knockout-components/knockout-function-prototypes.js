define(["require", "exports", 'knockout'], function (require, exports, ko) {
    var KnockoutPrototypes;
    (function (KnockoutPrototypes) {
        ko.subscribable.fn["subscribeChanged"] = function (callback) {
            var savedValue = this.peek();
            return this.subscribe(function (latestValue) {
                var oldValue = savedValue;
                savedValue = latestValue;
                callback(latestValue, oldValue);
            });
        };
    })(KnockoutPrototypes || (KnockoutPrototypes = {}));
    return KnockoutPrototypes;
});
//# sourceMappingURL=knockout-function-prototypes.js.map