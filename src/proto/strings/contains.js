'use strict';

if (!String.prototype.contains) {
    /**
     * @param {string} str
     */
    String.prototype.contains = function(str) { return this.indexOf(str) > -1; };
}

export default String.prototype.contains;
