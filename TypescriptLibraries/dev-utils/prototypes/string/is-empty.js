define(["require", "exports", 'lodash'], function (require, exports, _) {
    function IsEmpty() {
        var value = this;
        value = _.trim(value);
        return _.isEmpty(value);
    }
    return IsEmpty;
});
//# sourceMappingURL=is-empty.js.map