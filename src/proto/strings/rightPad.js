'use strict';

import './repeat'

if (!String.prototype.rightPad) {
    /**
     * @param {number} length
     * @param {string} fillChar
     * @returns {string}
     */
    String.prototype.rightPad = function(length, fillChar) {
        if (typeof length !== 'number') {
            throw new TypeError(length + ' is not a number');
        }
        if (!fillChar) fillChar = ' ';
        if (this.length >= length) return this.toString();
        return this.toString() + fillChar.repeat(length - this.length);
    };
}
if (!String.prototype.rpad) {
    String.prototype.rpad = String.prototype.rightPad;
}

export default String.prototype.rightPad;
