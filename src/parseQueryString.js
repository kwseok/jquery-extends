'use strict';

import 'proto.js'
import './obj'

/**
 * @param {string} queryString
 * @param {Object} [options]
 * @return {Object}
 */
$.parseQueryString = function(queryString, options) {
    if (typeof queryString !== 'string' || queryString === '') {
        return {};
    }
    let pairs = queryString.split(/&amp;|&/i);
    if (!$.isPlainObject(options))
        options = {};
    else if (options.except && !$.isArray(options.except))
        options.except = [options.except];
    let o = {};
    for (let pair of pairs) {
        let [name, value] = pair.split('=');
        name = decodeURIComponent(name);
        value = decodeURIComponent(value);
        if (options.except == null || !options.except.contains(name))
            $.obj.set(true, o, name, value);
    }
    return o;
};

export default $.parseQueryString;
