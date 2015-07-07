import $ from 'jquery'
import './proto/index'

/**
 * @param {Function} callback
 * @param {*} [context]
 * @return {Object}
 */
$.fn.groupBy = function(callback, context) {
    if (!$.isFunction(callback)) {
        throw new TypeError(callback + " is not a function");
    }
    let result = {};
    for (let i = 0; i < this.length; i++) {
        let elem = this[i];
        let key = callback.call(context || elem, elem, i, this);
        if (key !== undefined) {
            if (!(key in result))
                result[key] = $([]);

            result[key].push(this[i]);
        }
    }
    return result;
};

export default $.fn.groupBy;