'use strict';

if (!Array.prototype.every) {
    /**
     * @param {Function} callback
     * @param {*} [context]
     * @return {boolean}
     */
    Array.prototype.every = function(callback, context) {
        for (let i = 0; i < this.length; i++) {
            if (!callback.call(context || this, this[i], i, this)) return false;
        }
        return true;
    };
}

export default Array.prototype.every;
