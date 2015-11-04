'use strict';

import './proto/index'

/**
 * @param {Array|Object} items
 * @param {Function} callback
 * @param {*} [context]
 * @return {boolean}
 */
$.some = function(items, callback, context) {
    if (!$.isFunction(callback)) {
        throw new TypeError(callback + " is not a function");
    }
    if ($.isArray(items)) {
        for (let i = 0; i < items.length; i++) {
            if (callback.call(context || items, items[i], i, items)) return true;
        }
    } else if ($.isPlainObject(items)) {
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                if (callback.call(context || items, items[key], key, items)) return true;
            }
        }
    } else {
        throw new TypeError(items + " is not array or plain object");
    }
    return false;
};

export default $.some;
