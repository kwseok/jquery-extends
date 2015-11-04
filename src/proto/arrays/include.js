'use strict';

import './indexOf'

if (!Array.prototype.include) {
    Array.prototype.include = function(a) {
        let i = this.indexOf(a);
        if (i > -1)
            this[i] = a;
        else
            this.push(a);
        return this;
    };
}

export default Array.prototype.include;
