define(["require", "exports", './tokens/generate-guid'], function (require, exports, guid) {
    var Tokens;
    (function (Tokens) {
        Tokens.generateGuid = guid;
    })(Tokens || (Tokens = {}));
    return Tokens;
});
//# sourceMappingURL=tokens.js.map