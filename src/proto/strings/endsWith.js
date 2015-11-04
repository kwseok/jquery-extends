'use strict';

if (!String.prototype.endsWith) {
    /**
     * @param {String} str
     * @returns {boolean}
     */
    String.prototype.endsWith = function(str) {
        let i = this.lastIndexOf(str);
        return i > -1 && i === this.length - str.toString().length;
    };
}

export default String.prototype.endsWith;
