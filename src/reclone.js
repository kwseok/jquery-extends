import $ from 'jquery'
import './proto/index'

/**
 * @param {boolean} dataAndEvents
 * @param {boolean} deepDataAndEvents
 * @return {jQuery}
 */
$.fn.reclone = function(dataAndEvents, deepDataAndEvents) {
    return this.map(function() {
        let oldElem = $(this);
        let newElem = oldElem.clone(dataAndEvents, deepDataAndEvents);
        newElem.insertAfter(this);
        oldElem.remove();
        return newElem[0];
    });
};

export default $.fn.reclone;