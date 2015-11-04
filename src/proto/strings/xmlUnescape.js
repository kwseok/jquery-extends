'use strict';

if (!String.prototype.xmlUnescape) {
    String.prototype.xmlUnescape = function() {
        return this.replace(/(&lt;|&gt;|&#34;|&#39;|&amp;)/g, ($1) => {
            switch ($1) {
            case '&lt;': return '<';
            case '&gt;': return '>';
            case '&#34;': return '"';
            case '&#39;': return "'";
            case '&amp;': return '&';
            default: return $1;
            }
        });
    }
}

export default String.prototype.xmlUnescape;
