'use strict';

if (!String.prototype.startsWith) {
    /**
     * @param {string} str
     */
    String.prototype.startsWith = function(str) { return this.indexOf(str) === 0; };
}

export default String.prototype.startsWith;
