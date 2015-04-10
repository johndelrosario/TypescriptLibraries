define(["require", "exports", './utils/generate-guid', './utils/string-format'], function (require, exports, GenerateGuid, StringFormat) {
    var KnockoutCustomComponentUtils;
    (function (KnockoutCustomComponentUtils) {
        KnockoutCustomComponentUtils.generateGuid = GenerateGuid, KnockoutCustomComponentUtils.stringFormat = StringFormat;
    })(KnockoutCustomComponentUtils || (KnockoutCustomComponentUtils = {}));
    return KnockoutCustomComponentUtils;
});
//# sourceMappingURL=knockout-component-utils.js.map