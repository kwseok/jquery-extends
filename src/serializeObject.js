'use strict';

import 'proto.js'

/**
 * @param {Object} options
 * @return {Object}
 */
$.fn.serializeObject = function(options) {
    if (!$.isPlainObject(options))
        options = {};
    else if (options.except && !$.isArray(options.except))
        options.except = [options.except];
    let result = {};
    $.each(this.serializeArray(), function() {
        if (options.except == null || !options.except.contains(this.name)) {
            if (this.name in result) {
                if (!$.isArray(result[this.name]))
                    result[this.name] = [result[this.name], this.value];
                else
                    result[this.name].push(this.value);
            } else {
                result[this.name] = this.value;
            }
        }
    });
    return result;
};

export default $.fn.serializeObject;
