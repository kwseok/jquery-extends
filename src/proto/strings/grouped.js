'use strict';

if (!String.prototype.grouped) {
    /**
     * @param {number} size
     * @return {Array<string>}
     */
    String.prototype.grouped = function(size) {
        if (!(size > 1)) {
            throw new RangeError('Invalid size value');
        }
        if (typeof size !== 'number') size = parseInt(size)
        let results = [];
        for (let i = 0; i < this.length; i += size) {
            results.push(this.slice(i, i + size));
        }
        return results;
    };
}

export default String.prototype.grouped;
