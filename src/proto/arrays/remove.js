'use strict';

if (!Array.prototype.remove) {
    Array.prototype.remove = function(a) {
        for (let i = this.length - 1; i >= 0; --i) {
            if (this[i] === a) {
                this.splice(i, 1);
            }
        }
        return this;
    };
}

export default Array.prototype.remove;
