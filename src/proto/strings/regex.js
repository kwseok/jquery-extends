'use strict';

if (!String.prototype.regex) {
    /**
     * @param {string} flags
     * @returns {RegExp}
     */
    String.prototype.regex = function(flags) { return new RegExp(this, flags); };
}
if (!String.prototype.r) {
    String.prototype.r = String.prototype.regex;
}

export default String.prototype.regex;
