'use strict';

if (!Array.prototype.reduce) {
    /**
     * @param {Function} callback
     * @param {*} [context]
     * @return {*}
     */
    Array.prototype.reduce = function(callback, context) {
        if (!(this.length > 0)) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        let result = this[0];
        for (let i = 1; i <= this.length; i++) {
            result = callback.call(context || this, result, this[i], i, this);
        }
        return result;
    };
}

export default Array.prototype.reduce;
