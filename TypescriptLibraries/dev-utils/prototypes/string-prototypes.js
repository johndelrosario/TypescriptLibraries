define(["require", "exports", './string/is-empty', './string/is-undefined-or-whitespace', './string/count-words'], function (require, exports, isEmpty, isUndefinedOrWhitespace, countWords) {
    var StringPrototypes;
    (function (StringPrototypes) {
        function applyIsEmpty() {
            String.prototype.isEmpty = isEmpty;
        }
        StringPrototypes.applyIsEmpty = applyIsEmpty;
        function applyIsUndefinedOrWhitespace() {
            String.prototype.isUndefinedOrWhitespace = isUndefinedOrWhitespace;
        }
        StringPrototypes.applyIsUndefinedOrWhitespace = applyIsUndefinedOrWhitespace;
        function applyCountWords() {
            String.prototype.countWords = countWords;
        }
        StringPrototypes.applyCountWords = applyCountWords;
        function applyAll() {
            applyIsEmpty();
            applyIsUndefinedOrWhitespace();
            applyCountWords();
        }
        StringPrototypes.applyAll = applyAll;
    })(StringPrototypes || (StringPrototypes = {}));
    return StringPrototypes;
});
//# sourceMappingURL=string-prototypes.js.map