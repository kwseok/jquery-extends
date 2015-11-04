'use strict';

import './reduce'

if (!Array.prototype.max) {
    Array.prototype.max = function() {
        return this.reduce((a, b) => (a > b) ? a : b);
    }
}

export default Array.prototype.max;
