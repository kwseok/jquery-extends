'use strict';

if (!String.prototype.groupedRight) {
    /**
     * @param {number} size
     * @return {Array<string>}
     */
    String.prototype.groupedRight = function(size) {
        if (!(size > 1)) {
            throw new RangeError('Invalid size value');
        }
        if (typeof size !== 'number') size = parseInt(size)
        let results = [];
        for (let i = this.length; i > 0; i -= size) {
            results.push(this.slice(Math.max(0, i - size), i));
        }
        return results.reverse();
    };
}

export default String.prototype.groupedRight;
