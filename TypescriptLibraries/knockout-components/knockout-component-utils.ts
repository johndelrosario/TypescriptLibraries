import GenerateGuid = require('./utils/generate-guid');
import StringFormat = require('./utils/string-format');

module KnockoutCustomComponentUtils {
    export var generateGuid: () => string = GenerateGuid,
               stringFormat: (...params: any[]) => string = StringFormat;
}

export = KnockoutCustomComponentUtils;