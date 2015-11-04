'use strict';

import '../arrays/contains'
import './getLength'

if (!String.prototype.cutstring) {
    /**
     * @param {boolean|number} [checkbyte] check byte length if true. (default is false)
     * @param {number} maxLength the max length.
     * @param {string} [suffix] the suffix.
     * @return {string}
     */
    String.prototype.cutstring = function(checkbyte, maxLength, suffix) {
        let argIndex = 0;
        let argCurr = () => arguments[argIndex];
        let argShift = () => arguments[argIndex++];

        checkbyte = ['boolean', 'number'].contains(typeof argCurr()) ? argShift() : false;

        if (typeof argCurr() !== 'number') {
            throw new TypeError(argCurr() + " is not a number");
        }
        maxLength = argShift();

        suffix = typeof argCurr() === 'string' ? argShift() : '';

        let length = this.getLength(checkbyte);
        if (!(length > maxLength)) return this;

        let suffixLength = suffix.getLength(checkbyte);
        if (suffixLength > maxLength) {
            throw new RangeError("Max length must be more than suffix length");
        }
        let resultString = '';
        let checkedLength = 0;
        for (let i = 0; i < this.length; i++) {
            let c = this.charAt(i);
            let l = c.getLength(checkbyte);
            if (checkedLength + l > maxLength - suffixLength) break;
            checkedLength += l;
            resultString += c;
        }
        return resultString + suffix;
    };
}

export default String.prototype.cutstring;
