'use strict';

if (!Array.prototype.some) {
    /**
     * @param {Function} callback
     * @param {*} [context]
     * @return {boolean}
     */
    Array.prototype.some = function(callback, context) {
        if (!$.isFunction(callback)) {
            throw new Error(callback + " is not a function");
        }
        for (let i = 0; i < this.length; i++) {
            if (callback.call(context || this, this[i], i, this)) return true;
        }
        return false;
    };
}

export default Array.prototype.some;
