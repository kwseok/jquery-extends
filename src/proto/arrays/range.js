'use strict';

if (!Array.range) {
    /**
     * @param {number|string} from
     * @param {number|string} to
     * @param {number} step
     * @static
     * @return {Array}
     */
    Array.range = function(from, to, step = 1) {
        let range = [];
        let isNumber = typeof from === 'number' && typeof to === 'number';
        let begin = isNumber ? from : from.toString().charCodeAt(0);
        let end = isNumber ? to : to.toString().charCodeAt(0);
        for (let i = begin; step > 0 ? i <= end : i >= end; i += step) {
            range.push(isNumber ? i : String.fromCharCode(i));
        }
        return range;
    };
}

export default Array.range;
