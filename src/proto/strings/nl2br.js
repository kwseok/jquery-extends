'use strict';

import './xmlEscape'

if (!String.prototype.nl2br) {
    /**
     * @param {boolean} xmlEscape
     * @returns {string}
     */
    String.prototype.nl2br = function(xmlEscape) {
        return (xmlEscape ? this.xmlEscape() : this).replace(/(\r\n|\n\r|\r|\n)/g, '<br/>');
    }
}

export default String.prototype.nl2br;
