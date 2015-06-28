import $ from 'jquery'
import './proto/index'

/**
 * @param {Function} callback
 * @return {number}
 */
$.nextTick = (callback) => setTimeout(callback, 0);

export default $.nextTick;
