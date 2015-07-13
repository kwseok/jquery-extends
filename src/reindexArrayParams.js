import './proto/index'

/**
 * @param {string} prefix
 * @param {Array<{name,value}>} params
 * @return {number} length of parameters
 */
$.reindexArrayParams = function(prefix, params) {
    const regex = new RegExp('^(' + prefix.replace('.', '\\.') + ')\\[(\\d+)\\]');
    let prevIndex = null;
    let index = -1;
    for (let param of params) {
        let results = regex.exec(param.name);
        if (results) {
            let currIndex = results[2];
            if (prevIndex !== currIndex) {
                prevIndex = currIndex;
                index++;
            }
            param.name = param.name.replace(regex, '$1[' + index + ']');
        }
    }
    return index;
};

export default $.reindexArrayParams;