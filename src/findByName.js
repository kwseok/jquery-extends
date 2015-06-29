import $ from 'jquery'
import './proto/index'

/**
 * @param {string} name
 * @return {jQuery<HTMLElement>}
 */
$.fn.findByName = function(name) {
    return this.find('[name="' + (name || '').replace(/"/g, '\\"') + '"]');
};

export default $.fn.findByName;
