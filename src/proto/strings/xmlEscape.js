'use strict';

if (!String.prototype.xmlEscape) {
    String.prototype.xmlEscape = function() {
        return this.replace(/(<|>|"|'|&)/g, ($1) => {
            switch ($1) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&#34;';
            case "'": return '&#39;';
            case '&': return '&amp;';
            default: return $1;
            }
        });
    }
}

export default String.prototype.xmlEscape;
