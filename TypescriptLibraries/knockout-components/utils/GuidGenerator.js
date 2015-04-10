define(["require", "exports"], function (require, exports) {
    function generateGuid() {
        var guid = "";
        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (matches) {
            var r = Math.random() * 16 | 0, v = matches == 'x' ? r : (r & 0x3 | 0x8);
            guid += v.toString(16);
            return guid;
        });
        return guid;
    }
    return generateGuid;
});
//# sourceMappingURL=GuidGenerator.js.map