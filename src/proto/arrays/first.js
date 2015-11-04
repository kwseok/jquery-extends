'use strict';

if (!Array.prototype.first) {
    Array.prototype.first = function() { return this[0]; };
}

export default Array.prototype.first;
