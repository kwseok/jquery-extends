'use strict';

if (!String.prototype.repeat) {
    /**
     * @param {number} count
     * @return {string}
     */
    String.prototype.repeat = function(count) {
        if (!(count >= 0)) {
            throw new RangeError('Invalid count value');
        }
        let result = '';
        for (let i = 0; i < count; i++) {
            result += this.toString();
        }
        return result;
    };
}

export default String.prototype.repeat;
