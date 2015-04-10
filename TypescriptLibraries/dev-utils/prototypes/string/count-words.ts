function CountWords(): number {
    var stringReference = <string>this;
    stringReference = stringReference.replace(/(^\s*)|(\s*$)/gi, "");
    stringReference = stringReference.replace(/[ ]{2,}/gi, " ");
    stringReference = stringReference.replace(/\n /, "\n");
    return stringReference.split(' ').length;
}

export = CountWords;