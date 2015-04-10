import isEmpty = require('./string/is-empty');
import isUndefinedOrWhitespace = require('./string/is-undefined-or-whitespace');
import countWords = require('./string/count-words');

module StringPrototypes {
    export function applyIsEmpty() {
        String.prototype.isEmpty = isEmpty;
    }

    export function applyIsUndefinedOrWhitespace() {
        String.prototype.isUndefinedOrWhitespace = isUndefinedOrWhitespace;
    }

    export function applyCountWords() {
        String.prototype.countWords = countWords;
    }

    export function applyAll() {
        applyIsEmpty();
        applyIsUndefinedOrWhitespace();
        applyCountWords();
    }
}

export = StringPrototypes