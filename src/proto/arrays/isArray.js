'use strict';

if (!Array.isArray) {
    /**
     * @param {*} obj
     * @static
     * @return {boolean}
     */
    Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
}

export default Array.isArray;
