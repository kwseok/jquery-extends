'use strict';

if (!String.prototype.unquote) {
    String.prototype.unquote = function() {
        if (this.length >= 2 &&
            ((this.charAt(0) === '"' && this.charAt(this.length - 1) === '"') ||
            (this.charAt(0) === "'" && this.charAt(this.length - 1) === "'"))) {
            return this.slice(1, -1);
        }
        return this.toString();
    };
}

export default String.prototype.unquote;
