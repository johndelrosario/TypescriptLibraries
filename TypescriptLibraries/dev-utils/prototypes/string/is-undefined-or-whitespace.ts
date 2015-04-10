import _ = require('lodash');

function IsUndefinedOrWhitespace(): boolean {
    var value = <string>this;
    value = _.trim(value);
    return _.isUndefined(value) || _.isEmpty(value);
}

export = IsUndefinedOrWhitespace;