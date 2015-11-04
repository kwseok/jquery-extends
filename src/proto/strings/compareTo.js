'use strict';

if (!String.prototype.compareTo) {
    String.prototype.compareTo = function(str) {
        if (str == null || this > str) return 1;
        if (this < str) return -1;
        return 0;
    };
}

export default String.prototype.compareTo;
