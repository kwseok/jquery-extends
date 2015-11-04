'use strict';

if (!RegExp.escape) {
    /**
     * @param {String} text
     * @static
     * @return {String}
     */
    RegExp.escape = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    };
}

export default RegExp.escape;
