'use strict';

import 'proto.js'

/**
 * @param {Array<string>} names
 * @return {jQuery<HTMLElement>}
 */
$.fn.findByNames = function(...names) {
    if (names.length === 0) return $([]);
    return this.find(names.map(name => '[name="' + (name || '').replace(/"/g, '\\"') + '"]').join(','));
};

export default $.fn.findByNames;
