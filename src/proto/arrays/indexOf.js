'use strict';

if (!Array.prototype.indexOf) {
    /**
     * @param {*} item
     * @return {number}
     */
    Array.prototype.indexOf = function(item) {
        for (let i = 0; i < this.length; i++) {
            if (i in this && this[i] === item) return i;
        }
        return -1;
    };
}

export default Array.prototype.indexOf;
