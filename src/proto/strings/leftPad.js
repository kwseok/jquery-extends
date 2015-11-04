'use strict';

import './repeat'

if (!String.prototype.leftPad) {
    /**
     * @param {number} length
     * @param {string} fillChar
     * @returns {string}
     */
    String.prototype.leftPad = function(length, fillChar) {
        if (typeof length !== 'number') {
            throw new TypeError(length + ' is not a number');
        }
        if (!fillChar) fillChar = ' ';
        if (this.length >= length) return this.toString();
        return fillChar.repeat(length - this.length) + this.toString();
    };
}
if (!String.prototype.lpad) {
    String.prototype.lpad = String.prototype.leftPad;
}

export default String.prototype.leftPad;
