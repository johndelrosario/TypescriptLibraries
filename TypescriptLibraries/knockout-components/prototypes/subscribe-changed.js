define(["require", "exports", 'knockout'], function (require, exports, ko) {
    function SubscribeChanged() {
        ko.subscribable.fn.subscribeChanged = function (callback) {
            var savedValue = this.peek();
            return this.subscribe(function (latestValue) {
                var oldValue = savedValue;
                savedValue = latestValue;
                callback(latestValue, oldValue);
            });
        };
    }
    return SubscribeChanged;
});
//# sourceMappingURL=subscribe-changed.js.map