'use strict';

if (!Array.prototype.groupedRight) {
    /**
     * @param {number} size
     * @return {Array<Array>}
     */
    Array.prototype.groupedRight = function(size) {
        let results = [];
        for (let i = this.length; i > 0; i -= size) {
            results.push(this.slice(Math.max(0, i - size), i));
        }
        return results.reverse();
    };
}

export default Array.prototype.groupedRight;
