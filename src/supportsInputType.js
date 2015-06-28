import $ from 'jquery'
import './proto/index'

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
