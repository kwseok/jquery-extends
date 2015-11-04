'use strict';

import './xmlUnescape'

if (!String.prototype.br2nl) {
    /**
     * @param {boolean} xmlUnescape
     * @return {String}
     */
    String.prototype.br2nl = function(xmlUnescape) {
        let result = this.replace(/(<br>|<br\/>)/g, '\n');
        if (xmlUnescape) return result.xmlUnescape();
        return result;
    };
}

export default String.prototype.br2nl;
