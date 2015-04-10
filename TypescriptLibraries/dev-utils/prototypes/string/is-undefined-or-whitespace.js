define(["require", "exports", 'lodash'], function (require, exports, _) {
    function IsUndefinedOrWhitespace() {
        var value = this;
        value = _.trim(value);
        return _.isUndefined(value) || _.isEmpty(value);
    }
    return IsUndefinedOrWhitespace;
});
//# sourceMappingURL=is-undefined-or-whitespace.js.map