import './proto/index'
import './split'

$.obj = {

    /**
     * @param {Object} obj
     * @param {string} key
     * @param {*} [defaultValue]
     * @return {*}
     */
    get: function(obj, key, defaultValue) {
        if (obj == null) return defaultValue;
        if (!key) return obj;
        let keyFragments = $.split(key, '.', '/');
        for (let keyFragment of keyFragments) {
            if ((obj = obj[keyFragment]) == null) return defaultValue;
        }
        if ($.isArray(defaultValue) && !$.isArray(obj))
            obj = $.makeArray(obj);

        return obj;
    },

    /**
     * @param {boolean} [appendArray]
     * @param {Object} obj
     * @param {string} fullkey
     * @param {*} value
     * @return {Object}
     */
    set: function(appendArray, obj, fullkey, value) {
        let args = $.makeArray(arguments);
        appendArray = typeof args.first() === 'boolean' ? args.shift() : false;
        obj = typeof args.first() === 'object' || $.isFunction(args.first()) ? args.shift() : {};
        if (typeof args.first() !== 'string') {
            throw new TypeError("Object key must be string type : " + args.first());
        }
        fullkey = args.shift();
        value = args.shift();
        let keys = $.map($.split(fullkey, '.', '/'), function(key) {
            if (/^([^\[]+)?\[([^\]]+)?\]/.test(key)) {
                let inKeys = [key.match(/^([^\[]+)?/)[1]];
                let inBracket = /\[([^\]]+)?\]/g;
                let nextMatches;
                while (nextMatches = inBracket.exec(key)) {
                    inKeys.push(nextMatches[1]);
                }
                return inKeys;
            }
            return key;
        });

        function isNull(o, key) {
            try {
                return !(key in o && (o[key] != null));
            } catch (ignored) {
                return false;
            }
        }

        let currObj = obj;
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (i === keys.length - 1) {
                if (!appendArray || isNull(currObj, key))
                    currObj[key] = value;
                else if ($.isArray(currObj[key]))
                    currObj[key].push(value);
                else
                    currObj[key] = [currObj[key], value];
            } else if (isNull(currObj, key)) {
                if (!keys[i + 1])
                    keys[i + 1] = '0';
                currObj[key] = /^\d+$/.test(keys[i + 1]) ? [] : {};
            } else if (typeof keys[i + 1] === 'undefined') {
                keys[i + 1] = $.isArray(currObj[key]) ? currObj[key].length + '' : '';
            }
            currObj = currObj[key];
        }
        return obj;
    },

    /**
     * @param {Object} obj
     * @return {Object}
     */
    generalize: function(obj) {
        if (!$.isPlainObject(obj)) return obj;
        let result = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let value = obj[key];
                if (key.contains('.') || /\[(\w+)?\]/.test(key))
                    $.obj.set(true, result, key, value);
                else
                    result[key] = value;
            }
        }
        return result;
    },

    /**
     * @param {boolean} [deep]
     * @param {boolean} [appendArray]
     * @param {*|Object} target
     * @param {*|...Object} sources
     * @param {boolean} [extendIfUndefined]
     * @return {Object}
     */
    extend: function(deep, appendArray, target, sources, extendIfUndefined) {
        let args = $.makeArray(arguments);
        deep = typeof args.first() === 'boolean' ? args.shift() : false;
        appendArray = typeof args.first() === 'boolean' ? args.shift() : false;
        extendIfUndefined = typeof args.last() === 'boolean' ? args.pop() : false;
        target = args.length === 1 ? {} : args.shift() || {};
        if (typeof target !== 'object' && !$.isFunction(target)) target = {};

        sources = args;
        for (let source of sources) {
            if (source != null) {
                for (let name in source) {
                    if (source.hasOwnProperty(name)) {
                        let src = target[name];
                        let copy = source[name];
                        if (copy === target) continue;
                        let copyIsArray = false;
                        if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
                            if (!copyIsArray) {
                                let srcIsPlainObject = false;
                                if (src === undefined || (srcIsPlainObject = $.isPlainObject(src)) || !extendIfUndefined) {
                                    target[name] = $.obj.extend(deep, appendArray, (srcIsPlainObject ? src : {}), copy, extendIfUndefined);
                                }
                            } else if (src === undefined || !extendIfUndefined) {
                                target[name] = $.merge((appendArray && $.isArray(src) ? src : []), $.obj.extend(deep, [], copy));
                            }
                        } else if (copy !== undefined && (src === undefined || !extendIfUndefined)) {
                            if (copy instanceof Date) {
                                target[name] = new Date(copy.getTime());
                            } else if (copy instanceof RegExp) {
                                let flags = '';
                                if (copy.global != null) flags += 'g';
                                if (copy.ignoreCase != null) flags += 'i';
                                if (copy.multiline != null) flags += 'm';
                                if (copy.sticky != null) flags += 'y';
                                target[name] = new RegExp(copy.source, flags);
                            } else {
                                target[name] = copy;
                            }
                        }
                    }
                }
            }
        }
        return target;
    },

    /**
     * @param {*} keyValuePairs
     * @return {Object}
     */
    make: function(...keyValuePairs) {
        let obj = {};
        for (let i = 0; i < keyValuePairs.length; i += 2) {
            obj[keyValuePairs[i]] = keyValuePairs[i + 1];
        }
        return obj;
    },

    /**
     * @param {Object} obj
     * @return {Object}
     */
    empty: function(obj) {
        if ($.isPlainObject(obj)) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key))
                    delete obj[key];
            }
        }
        return obj;
    }
};

for (let key in $.obj) {
    let shortKey = key + 'Object';
    if (!(shortKey in $)) {
        if ($.obj.hasOwnProperty(key)) $[shortKey] = $.obj[key];
    }
}

export default $.obj;