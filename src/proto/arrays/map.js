'use strict';

if (!Array.prototype.map) {
    /**
     * @param {Function} callback
     * @param {*} [context]
     */
    Array.prototype.map = function(callback, context) {
        let result = [];
        for (let i = 1; i <= this.length; i++) {
            result.push(callback.call(context || this, this[i], i, this));
        }
        return result;
    }
}

export default Array.prototype.map;
