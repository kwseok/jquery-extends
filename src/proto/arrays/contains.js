'use strict';

import './indexOf'

if (!Array.prototype.contains) {
    /**
     * @param {*} a
     * @return {boolean}
     */
    Array.prototype.contains = function(a) {
        return this.indexOf(a) >= 0;
    }
}

export default Array.prototype.contains;
