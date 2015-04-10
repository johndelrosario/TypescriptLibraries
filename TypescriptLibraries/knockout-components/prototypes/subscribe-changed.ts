import ko = require('knockout');

function SubscribeChanged() {
    ko.subscribable.fn.subscribeChanged = function (callback: Function) {
        var savedValue = this.peek();
        return this.subscribe(function (latestValue) {
            var oldValue = savedValue;
            savedValue = latestValue;
            callback(latestValue, oldValue);
        });
    };
}

export = SubscribeChanged;