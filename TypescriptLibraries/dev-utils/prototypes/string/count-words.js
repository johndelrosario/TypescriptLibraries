define(["require", "exports"], function (require, exports) {
    function CountWords() {
        var stringReference = this;
        stringReference = stringReference.replace(/(^\s*)|(\s*$)/gi, "");
        stringReference = stringReference.replace(/[ ]{2,}/gi, " ");
        stringReference = stringReference.replace(/\n /, "\n");
        return stringReference.split(' ').length;
    }
    return CountWords;
});
//# sourceMappingURL=count-words.js.map