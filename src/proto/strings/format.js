'use strict';

import '../arrays/isArray'

if (!String.prototype.format) {
    String.prototype.format = function() {
        return this.replace(/(''|'\{|\}'|\{(\w+)\})/g, ($0, $1, $2) => {
            switch ($1) {
            case "''": return "'";
            case "'{": return '{';
            case "}'": return '}';
            default: return (!/^\d+$/g.test($2) ? arguments[0] || {} : Array.isArray(arguments[0]) ? arguments[0] : arguments)[$2];
            }
        });
    }
}

export default String.prototype.format;
