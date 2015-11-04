'use strict';

if (!Array.prototype.grouped) {
    /**
     * @param {number} size
     * @return {Array<Array>}
     */
    Array.prototype.grouped = function(size) {
        let results = [];
        for (let i = 0; i < this.length; i += size) {
            results.push(this.slice(i, i + size));
        }
        return results;
    };
}

export default Array.prototype.grouped;
