define(["require", "exports", 'lodash'], function (require, exports, _) {
    function IsUndefinedOrWhitespace(value) {
        value = _.trim(value);
        return _.isUndefined(value) || _.isEmpty(value);
    }
    return IsUndefinedOrWhitespace;
});
//# sourceMappingURL=IsNullOrWhitespace.js.map