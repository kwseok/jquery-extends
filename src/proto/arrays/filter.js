'use strict';

import './flatMap'

if (!Array.prototype.filter) {
    /**
     * @param {Function} callback
     * @param {*} [context]
     * @return {Array}
     */
    Array.prototype.filter = function(callback, context) {
        return this.flatMap((a, i) => {
            if (callback.call(context || this, a, i, this)) return a;
        });
    };
}

export default Array.prototype.filter;
