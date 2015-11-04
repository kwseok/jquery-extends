'use strict';

import './proto/index'

/**
 * @param {string} str
 * @param {string} separator
 * @param {string} [escapeChar]
 * @param {number} [limit]
 * @return {Array<string>}
 */
$.split = function(str, separator, escapeChar, limit) {
    if (typeof str !== 'string') {
        throw new TypeError(str + ' is not a string');
    }
    str = str.toString();
    if (typeof separator === 'number')
        [limit, separator, escapeChar] = [separator, null, null]
    else if (typeof escapeChar === 'number')
        [limit, escapeChar] = [escapeChar, null]

    function limited(i) {
        return 0 < limit && limit <= i + 1;
    }

    let parts = [];
    let i = 0;
    let s = 0;
    let p;
    while ((p = str.indexOf(separator, s)) !== -1 && !limited(i)) {
        let part = str.slice(s, p);
        let escaped = false;
        if (escapeChar && part.slice(-1) === escapeChar) {
            part = part.slice(0, -1);
            escaped = part.slice(-1) !== escapeChar;
            if (escaped) part += separator;
        }
        parts[i] = (parts[i] || '') + part;
        s = p + 1;
        if (!escaped) i++;
    }
    if (s <= str.length)
        parts[i] = (parts[i] || '') + str.slice(s);

    return parts;
};

export default $.split;
