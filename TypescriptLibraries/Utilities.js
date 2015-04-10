define(["require", "exports", 'jquery'], function (require, exports, $) {
    var Utilities;
    (function (Utilities) {
        'use strict';
        var Tokens;
        (function (Tokens) {
            function generateGuid() {
                var guid = "";
                'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (matches) {
                    var r = Math.random() * 16 | 0, v = matches == 'x' ? r : (r & 0x3 | 0x8);
                    guid += v.toString(16);
                    return guid;
                });
                return guid;
            }
            Tokens.generateGuid = generateGuid;
        })(Tokens = Utilities.Tokens || (Utilities.Tokens = {}));
        var Prototypes;
        (function (Prototypes) {
            var Strings;
            (function (Strings) {
                var Trim;
                (function (Trim) {
                    function ApplyPrototype() {
                        if (!String.prototype["trim"]) {
                            String.prototype.trim = function () {
                                return this.replace(/^\s+|\s+$/g, '');
                            };
                        }
                    }
                    Trim.ApplyPrototype = ApplyPrototype;
                })(Trim = Strings.Trim || (Strings.Trim = {}));
                var CountWords;
                (function (CountWords) {
                    function ApplyPrototype() {
                        if (String.prototype["countWords"]) {
                            String.prototype["countWords"] = function () {
                                var stringReference = this;
                                stringReference = stringReference.replace(/(^\s*)|(\s*$)/gi, "");
                                stringReference = stringReference.replace(/[ ]{2,}/gi, " ");
                                stringReference = stringReference.replace(/\n /, "\n");
                                return stringReference.split(' ').length;
                            };
                        }
                    }
                    CountWords.ApplyPrototype = ApplyPrototype;
                })(CountWords = Strings.CountWords || (Strings.CountWords = {}));
                var _Trim = Trim;
                var _CountWords = CountWords;
            })(Strings = Prototypes.Strings || (Prototypes.Strings = {}));
            var Arrays;
            (function (Arrays) {
                var Sum;
                (function (Sum) {
                    function ApplyPrototype() {
                        if (!Array.prototype["sum"]) {
                            Array.prototype["sum"] = function () {
                                var sum = 0;
                                $.each(this, function (index, value) {
                                    if (typeof value === 'number')
                                        sum += value;
                                    else
                                        sum += parseInt(value);
                                });
                                return sum;
                            };
                        }
                    }
                    Sum.ApplyPrototype = ApplyPrototype;
                })(Sum = Arrays.Sum || (Arrays.Sum = {}));
                var _Sum = Sum;
            })(Arrays = Prototypes.Arrays || (Prototypes.Arrays = {}));
        })(Prototypes = Utilities.Prototypes || (Utilities.Prototypes = {}));
        var Requests;
        (function (Requests) {
            var baseUrl = '';
        })(Requests = Utilities.Requests || (Utilities.Requests = {}));
    })(Utilities = exports.Utilities || (exports.Utilities = {}));
});
//# sourceMappingURL=Utilities.js.map