'use strict';

import './reduce'

if (!Array.prototype.min) {
    Array.prototype.min = function() {
        return this.reduce((a, b) => (a < b) ? a : b);
    }
}

export default Array.prototype.min;
