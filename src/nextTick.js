'use strict';

import 'proto.js'

/**
 * @param {Function} callback
 * @return {number}
 */
$.nextTick = function(callback) { return setTimeout(callback, 0); };

export default $.nextTick;
