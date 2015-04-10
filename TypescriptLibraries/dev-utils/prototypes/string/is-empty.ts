import _ = require('lodash');

function IsEmpty(): boolean {
    var value = <string>this;
    value = _.trim(value);
    return _.isEmpty(value);
}

export = IsEmpty;