'use strict';

import './isArray'

if (!Array.prototype.flatMap) {
    /**
     * @param {Function} callback
     * @param {*} [context]
     * @return Array
     */
    Array.prototype.flatMap = function(callback, context) {
        let results = [];
        for (let i = 0; i < this.length; i++) {
            let result = callback.call(context || this, this[i], i, this);
            if (Array.isArray(result))
                results.push.apply(results, result);
            else if (result)
                results.push(result);
        }
        return results;
    }
}

export default Array.prototype.flatMap;
