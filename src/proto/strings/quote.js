'use strict';

if (!String.prototype.quote) {
    /**
     * @param {boolean} overlapable
     * @return {string}
     */
    String.prototype.quote = function(overlapable) {
        if (typeof overlapable !== 'boolean') overlapable = true;
        if (!overlapable && this.length >= 2) {
            if (this.charAt(0) === '"' && this.charAt(this.length - 1) === '"') return this.toString();
            if (this.charAt(0) === "'" && this.charAt(this.length - 1) === "'") return this.toString();
        }
        return '"' + this + '"';
    };
}

export default String.prototype.quote;
