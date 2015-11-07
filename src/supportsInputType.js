'use strict';

import 'proto.js'

/**
 * @param {string} type
 * @return {boolean}
 */
$.supportsInputType = function(type) {
    let input = document.createElement('input');
    input.setAttribute('type', type);
    return input.type === type;
};

export default $.supportsInputType;
