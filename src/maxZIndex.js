'use strict';

import 'proto.js'

/**
 * @param {string|Array<HTMLElement>|jQuery<HTMLElement>} excludes
 * @return {number}
 */
$.fn.maxZIndex = function(excludes) {
    let zIndex = 0;
    this.find(':visible').andSelf().add(this.parentsUntil('html')).not(excludes).each(function() {
        if (this.nodeName !== '#document') {
            let $this = $(this);
            if (['absolute', 'relative', 'fixed'].contains($this.css('position'))) {
                let value = parseInt($this.css('zIndex'));
                if (!isNaN(value) && value > zIndex) zIndex = value;
            }
        }
    });
    return zIndex;
};

/**
 * @description Max zIndex from document body.
 * @param {string|Array<HTMLElement>|jQuery<HTMLElement>} excludes
 * @return {number}
 */
$.maxZIndex = function(excludes) {
    return $(document.body).maxZIndex(excludes);
};

export default $.fn.maxZIndex;
