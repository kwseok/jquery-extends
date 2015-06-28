(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["jQuery"] = factory(require("jquery"));
	else
		root["jQuery"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	__webpack_require__(48);
	
	__webpack_require__(51);
	
	__webpack_require__(52);
	
	__webpack_require__(53);
	
	__webpack_require__(54);
	
	__webpack_require__(57);
	
	__webpack_require__(49);
	
	__webpack_require__(58);
	
	__webpack_require__(59);
	
	__webpack_require__(60);
	
	__webpack_require__(61);
	
	__webpack_require__(62);
	
	__webpack_require__(50);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	exports['default'] = _jquery2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    arrays: __webpack_require__(3),
	    regexps: __webpack_require__(24),
	    strings: __webpack_require__(26)
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    contains: __webpack_require__(5),
	    every: __webpack_require__(7),
	    filter: __webpack_require__(8),
	    first: __webpack_require__(10),
	    flatMap: __webpack_require__(9),
	    groupBy: __webpack_require__(11),
	    grouped: __webpack_require__(12),
	    groupedRight: __webpack_require__(13),
	    include: __webpack_require__(14),
	    indexOf: __webpack_require__(6),
	    isArray: __webpack_require__(4),
	    joinPaths: __webpack_require__(15),
	    last: __webpack_require__(16),
	    map: __webpack_require__(17),
	    max: __webpack_require__(18),
	    min: __webpack_require__(20),
	    range: __webpack_require__(21),
	    reduce: __webpack_require__(19),
	    remove: __webpack_require__(22),
	    some: __webpack_require__(23)
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!Array.isArray) {
	    /**
	     * @param {*} obj
	     * @static
	     * @return {boolean}
	     */
	    Array.isArray = function (obj) {
	        return Object.prototype.toString.call(obj) === '[object Array]';
	    };
	}
	
	exports['default'] = Array.isArray;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(6);
	
	if (!Array.prototype.contains) {
	    /**
	     * @param {*} a
	     * @return {boolean}
	     */
	    Array.prototype.contains = function (a) {
	        return this.indexOf(a) >= 0;
	    };
	}
	
	exports['default'] = Array.prototype.contains;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.indexOf) {
	    /**
	     * @param {*} item
	     * @return {number}
	     */
	    Array.prototype.indexOf = function (item) {
	        for (var i = 0; i < this.length; i++) {
	            if (i in this && this[i] === item) {
	                return i;
	            }
	        }
	        return -1;
	    };
	}
	
	exports["default"] = Array.prototype.indexOf;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.every) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {boolean}
	     */
	    Array.prototype.every = function (callback, context) {
	        for (var i = 0; i < this.length; i++) {
	            if (!callback.call(context || this, this[i], i, this)) {
	                return false;
	            }
	        }
	        return true;
	    };
	}
	
	exports["default"] = Array.prototype.every;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(9);
	
	if (!Array.prototype.filter) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {Array}
	     */
	    Array.prototype.filter = function (callback, context) {
	        var _this = this;
	
	        return this.flatMap(function (a, i) {
	            if (callback.call(context || _this, a, i, _this)) {
	                return a;
	            }
	        });
	    };
	}
	
	exports['default'] = Array.prototype.filter;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(4);
	
	if (!Array.prototype.flatMap) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return Array
	     */
	    Array.prototype.flatMap = function (callback, context) {
	        var results = [];
	        for (var i = 0; i < this.length; i++) {
	            var result = callback.call(context || this, this[i], i, this);
	            if (Array.isArray(result)) {
	                results.push.apply(results, result);
	            } else if (result) {
	                results.push(result);
	            }
	        }
	        return results;
	    };
	}
	
	exports['default'] = Array.prototype.flatMap;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.first) {
	    Array.prototype.first = function () {
	        return this[0];
	    };
	}
	
	exports["default"] = Array.prototype.first;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.groupBy) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {{}}
	     */
	    Array.prototype.groupBy = function (callback, context) {
	        if (!$.isFunction(callback)) {
	            throw new Error(callback + " is not a function");
	        }
	        var result = {};
	        for (var i = 0; i < this.length; i++) {
	            var value = this[i];
	            var key = callback.call(context || this, value, i, this);
	            if (key) {
	                if (key in result) {
	                    result[key].push(value);
	                } else {
	                    result[key] = [value];
	                }
	            }
	        }
	        return result;
	    };
	}
	
	exports["default"] = Array.prototype.groupBy;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.grouped) {
	    /**
	     * @param {number} size
	     * @return {Array<Array>}
	     */
	    Array.prototype.grouped = function (size) {
	        var results = [];
	        for (var i = 0; i < this.length; i += size) {
	            results.push(this.slice(i, i + size));
	        }
	        return results;
	    };
	}
	
	exports["default"] = Array.prototype.grouped;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.groupedRight) {
	    /**
	     * @param {number} size
	     * @return {Array<Array>}
	     */
	    Array.prototype.groupedRight = function (size) {
	        var results = [];
	        for (var i = this.length; i > 0; i -= size) {
	            results.push(this.slice(Math.max(0, i - size), i));
	        }
	        return results.reverse();
	    };
	}
	
	exports["default"] = Array.prototype.groupedRight;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(6);
	
	if (!Array.prototype.include) {
	    Array.prototype.include = function (a) {
	        var i = this.indexOf(a);
	        if (i > -1) {
	            this[i] = a;
	        } else {
	            this.push(a);
	        }
	        return this;
	    };
	}
	
	exports['default'] = Array.prototype.include;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!Array.prototype.joinPaths) {
	    Array.prototype.joinPaths = function () {
	        var path = '';
	        for (var i = 0; i < this.length; i++) {
	            if (this[i]) {
	                if (path.length > 0 && path.charAt(path.length - 1) !== '/') {
	                    path += '/';
	                }
	                path += this[i].toString();
	            }
	        }
	        return path;
	    };
	}
	
	exports['default'] = Array.prototype.joinPaths;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.last) {
	    Array.prototype.last = function () {
	        return this[this.length - 1];
	    };
	}
	
	exports["default"] = Array.prototype.last;
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.map) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     */
	    Array.prototype.map = function (callback, context) {
	        var result = [];
	        for (var i = 1; i <= this.length; i++) {
	            result.push(callback.call(context || this, this[i], i, this));
	        }
	        return result;
	    };
	}
	
	exports["default"] = Array.prototype.map;
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(19);
	
	if (!Array.prototype.max) {
	    Array.prototype.max = function () {
	        return this.reduce(function (a, b) {
	            if (a > b) return a;else return b;
	        });
	    };
	}
	
	exports['default'] = Array.prototype.max;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.reduce) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {*}
	     */
	    Array.prototype.reduce = function (callback, context) {
	        if (!(this.length > 0)) {
	            throw new TypeError("Reduce of empty array with no initial value");
	        }
	        var result = this[0];
	        for (var i = 1; i <= this.length; i++) {
	            result = callback.call(context || this, result, this[i], i, this);
	        }
	        return result;
	    };
	}
	
	exports["default"] = Array.prototype.reduce;
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(19);
	
	if (!Array.prototype.min) {
	    Array.prototype.min = function () {
	        return this.reduce(function (a, b) {
	            if (a < b) return a;else return b;
	        });
	    };
	}
	
	exports['default'] = Array.prototype.min;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!Array.range) {
	    /**
	     * @param {number|string} from
	     * @param {number|string} to
	     * @param {number} step
	     * @static
	     * @return {Array}
	     */
	    Array.range = function (from, to, step) {
	        var range = [];
	        var isNumber = typeof from === 'number' && typeof to === 'number';
	        var begin = isNumber ? from : from.toString().charCodeAt(0);
	        var end = isNumber ? to : to.toString().charCodeAt(0);
	        for (var i = begin; step > 0 ? i <= end : i >= end; i += step) {
	            range.push(isNumber ? i : String.fromCharCode(i));
	        }
	        return range;
	    };
	}
	
	exports['default'] = Array.range;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.remove) {
	    Array.prototype.remove = function (a) {
	        for (var i = this.length - 1; i >= 0; --i) {
	            if (this[i] === a) {
	                this.splice(i, 1);
	                break;
	            }
	        }
	        return this;
	    };
	}
	
	exports["default"] = Array.prototype.remove;
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!Array.prototype.some) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {boolean}
	     */
	    Array.prototype.some = function (callback, context) {
	        if (!$.isFunction(callback)) {
	            throw new Error(callback + " is not a function");
	        }
	        for (var i = 0; i < this.length; i++) {
	            if (callback.call(context || this, this[i], i, this)) return true;
	        }
	        return false;
	    };
	}
	
	exports["default"] = Array.prototype.some;
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    escape: __webpack_require__(25)
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!RegExp.escape) {
	    /**
	     * @param {String} text
	     * @static
	     * @return {String}
	     */
	    RegExp.escape = function (text) {
	        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	    };
	}
	
	exports['default'] = RegExp.escape;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    'antStylePathToRegex': __webpack_require__(27),
	    'br2nl': __webpack_require__(28),
	    'compareTo': __webpack_require__(30),
	    'contains': __webpack_require__(31),
	    'cutstring': __webpack_require__(32),
	    'endsWith': __webpack_require__(34),
	    'format': __webpack_require__(35),
	    'formatVariables': __webpack_require__(36),
	    'getLength': __webpack_require__(33),
	    'grouped': __webpack_require__(37),
	    'groupedRight': __webpack_require__(38),
	    'leftPad': __webpack_require__(39),
	    'nl2br': __webpack_require__(41),
	    'quote': __webpack_require__(43),
	    'regex': __webpack_require__(44),
	    'repeat': __webpack_require__(40),
	    'rightPad': __webpack_require__(45),
	    'startsWith': __webpack_require__(46),
	    'unquote': __webpack_require__(47),
	    'xmlEscape': __webpack_require__(42),
	    'xmlUnescape': __webpack_require__(29)
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.antStylePathToRegex) {
	    /**
	     * @param {String} path the ant style path string
	     * @return {RegExp}
	     */
	    String.prototype.antStylePathToRegex = function (path) {
	        if (typeof path !== "string") {
	            throw new TypeError("Path must be string type : " + path);
	        }
	        if (!(path.length > 0)) {
	            throw new RangeError("Path must not be empty.");
	        }
	        path = path.replace(/\/{2,}/g, "/");
	        path = path.replace(/[-[\]{}()+.,\\^$|#\s]/g, "\\$&");
	        var pattern = path.replace(/((\/?\*\*)|(\/?\*)|(\?)|(\/))/g, function ($0) {
	            switch ($0) {
	                case "/**":
	                    return "(?:/{1,}.*)?";
	                case "**":
	                    return ".*";
	                case "/*":
	                    return "(?:/{1,}[^/]*)?";
	                case "*":
	                    return "[^/]*";
	                case "?":
	                    return "[^/]";
	                case "/":
	                    return "/{1,}";
	            }
	        });
	        return new RegExp("^(" + pattern + ")$");
	    };
	}
	if (!String.prototype.a) {
	    String.prototype.a = String.prototype.antStylePathToRegex;
	}
	
	exports["default"] = String.prototype.antStylePathToRegex;
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(29);
	
	if (!String.prototype.br2nl) {
	    /**
	     * @param {boolean} xmlUnescape
	     * @return {String}
	     */
	    String.prototype.br2nl = function (xmlUnescape) {
	        var result = this.replace(/(<br>|<br\/>)/g, '\n');
	        if (xmlUnescape) {
	            return result.xmlUnescape();
	        } else {
	            return result;
	        }
	    };
	}
	
	exports['default'] = String.prototype.br2nl;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.xmlUnescape) {
	    String.prototype.xmlUnescape = function () {
	        return this.replace(/(&lt;|&gt;|&#34;|&#39;|&amp;)/g, function ($1) {
	            switch ($1) {
	                case '&lt;':
	                    return '<';
	                case '&gt;':
	                    return '>';
	                case '&#34;':
	                    return '"';
	                case '&#39;':
	                    return '\'';
	                case '&amp;':
	                    return '&';
	                default:
	                    return $1;
	            }
	        });
	    };
	}
	
	exports['default'] = String.prototype.xmlUnescape;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.compareTo) {
	    String.prototype.compareTo = function (str) {
	        switch (false) {
	            case !(str == null):
	                return 1;
	            case !(this > str):
	                return 1;
	            case !(this < str):
	                return -1;
	            default:
	                return 0;
	        }
	    };
	}
	
	exports["default"] = String.prototype.compareTo;
	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.contains) {
	    /**
	     * @param {string} str
	     */
	    String.prototype.contains = function (str) {
	        return this.indexOf(str) > -1;
	    };
	}
	
	exports["default"] = String.prototype.contains;
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
	__webpack_require__(33);
	
	if (!String.prototype.cutstring) {
	    /**
	     * @param {boolean|number} [checkbyte] check byte length if true. (default is false)
	     * @param {number} maxLength the max length.
	     * @param {string} [suffix] the suffix.
	     * @return {string}
	     */
	    String.prototype.cutstring = function (checkbyte, maxLength, suffix) {
	        var _arguments = arguments;
	
	        var argIndex = 0;
	        var argCurr = function argCurr() {
	            return _arguments[argIndex];
	        };
	        var argShift = function argShift() {
	            return _arguments[argIndex++];
	        };
	
	        if (['boolean', 'number'].contains(typeof argCurr())) {
	            checkbyte = argShift();
	        } else {
	            checkbyte = false;
	        }
	
	        if (typeof argCurr() !== 'number') {
	            throw new TypeError(argCurr() + ' is not a number');
	        }
	        maxLength = argShift();
	
	        if (typeof argCurr() === 'string') {
	            suffix = argShift();
	        } else {
	            suffix = '';
	        }
	
	        var length = this.getLength(checkbyte);
	        if (!(length > maxLength)) {
	            return this;
	        }
	
	        var suffixLength = suffix.getLength(checkbyte);
	        if (suffixLength > maxLength) {
	            throw new RangeError('Max length must be more than suffix length');
	        }
	        var resultString = '';
	        var checkedLength = 0;
	        for (var i = 0; i < this.length; i++) {
	            var c = this.charAt(i);
	            var l = c.getLength(checkbyte);
	            if (checkedLength + l > maxLength - suffixLength) {
	                break;
	            }
	            checkedLength += l;
	            resultString += c;
	        }
	        return resultString + suffix;
	    };
	}
	
	exports['default'] = String.prototype.cutstring;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
	if (!String.prototype.getLength) {
	    /**
	     * @param {boolean|number} [checkbyte] check byte length if true. (default is false)
	     * @return {number}
	     */
	    String.prototype.getLength = function (checkbyte) {
	        var _arguments = arguments;
	
	        var argIndex = 0;
	        var argCurr = function argCurr() {
	            return _arguments[argIndex];
	        };
	        var argShift = function argShift() {
	            return _arguments[argIndex++];
	        };
	
	        if (['boolean', 'number'].contains(typeof argCurr())) {
	            checkbyte = argShift();
	        } else {
	            checkbyte = false;
	        }
	        if (checkbyte === false) {
	            return this.length;
	        }
	
	        var length = 0;
	        for (var i = 0; i < this.length; i++) {
	            var c = this.charCodeAt(i);
	            switch (false) {
	                case !(c <= 0x00007F):
	                    length += 1;
	                    break;
	                case !(typeof checkbyte === 'number' && checkbyte > 0):
	                    length += checkbyte;
	                    break;
	                case !(c <= 0x0007FF):
	                    length += 2;
	                    break;
	                case !(c <= 0x00FFFF):
	                    length += 3;
	                    break;
	                default:
	                    length += 4;
	            }
	        }
	        return length;
	    };
	}
	
	exports['default'] = String.prototype.getLength;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.endsWith) {
	    /**
	     * @param {String} str
	     * @returns {boolean}
	     */
	    String.prototype.endsWith = function (str) {
	        var i = this.lastIndexOf(str);
	        return i > -1 && i === this.length - str.toString().length;
	    };
	}
	
	exports["default"] = String.prototype.endsWith;
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(4);
	
	if (!String.prototype.format) {
	    String.prototype.format = function () {
	        return this.replace(/(''|'\{|\}'|\{(\w+)\})/g, (function (args) {
	            return function ($0, $1, $2) {
	                switch ($1) {
	                    case "''":
	                        return "'";
	                    case "'{":
	                        return "{";
	                    case "}'":
	                        return "}";
	                    default:
	                        return (!/^\d+$/g.test($2) ? args[0] || {} : Array.isArray(args[0]) ? args[0] : args)[$2];
	                }
	            };
	        })(arguments));
	    };
	}
	
	exports["default"] = String.prototype.format;
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.formatVariables) {
	    /**
	     * @param {*} arguments
	     * @returns {Array<string>}
	     */
	    String.prototype.formatVariables = function () {
	        var regex = /(''|'\{|\}'|\{(\w+)\})/g;
	        var variables = [];
	        var matches = undefined;
	        while (matches = regex.exec(this)) {
	            var match = matches[0];
	            if (match !== "''" && match !== "'{" && match !== "}'") {
	                variables.push(matches[2]);
	            }
	        }
	        return variables;
	    };
	}
	
	exports["default"] = String.prototype.formatVariables;
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.grouped) {
	    /**
	     * @param {number} size
	     * @return {Array<string>}
	     */
	    String.prototype.grouped = function (size) {
	        if (!(size > 1)) {
	            throw new RangeError('Invalid size value');
	        }
	        if (typeof size !== 'number') {
	            size = parseInt(size);
	        }
	        var results = [];
	        for (var i = 0; i < this.length; i += size) {
	            results.push(this.slice(i, i + size));
	        }
	        return results;
	    };
	}
	
	exports['default'] = String.prototype.grouped;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.groupedRight) {
	    /**
	     * @param {number} size
	     * @return {Array<string>}
	     */
	    String.prototype.groupedRight = function (size) {
	        if (!(size > 1)) {
	            throw new RangeError('Invalid size value');
	        }
	        if (typeof size !== 'number') {
	            size = parseInt(size);
	        }
	        var results = [];
	        for (var i = this.length; i > 0; i -= size) {
	            results.push(this.slice(Math.max(0, i - size), i));
	        }
	        return results.reverse();
	    };
	}
	
	exports['default'] = String.prototype.groupedRight;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(40);
	
	if (!String.prototype.leftPad) {
	    /**
	     * @param {number} length
	     * @param {string} fillChar
	     * @returns {string}
	     */
	    String.prototype.leftPad = function (length, fillChar) {
	        if (typeof length !== 'number') {
	            throw new TypeError(length + ' is not a number');
	        }
	        if (!fillChar) {
	            fillChar = ' ';
	        }
	        if (this.length >= length) {
	            return this.toString();
	        }
	        return fillChar.repeat(length - this.length) + this.toString();
	    };
	}
	if (!String.prototype.lpad) {
	    String.prototype.lpad = String.prototype.leftPad;
	}
	
	exports['default'] = String.prototype.leftPad;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.repeat) {
	    /**
	     * @param {number} count
	     * @return {string}
	     */
	    String.prototype.repeat = function (count) {
	        if (!(count >= 0)) {
	            throw new RangeError('Invalid count value');
	        }
	        var result = '';
	        for (var i = 0; i < count; i++) {
	            result += this.toString();
	        }
	        return result;
	    };
	}
	
	exports['default'] = String.prototype.repeat;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(42);
	
	if (!String.prototype.nl2br) {
	    /**
	     * @param {boolean} xmlEscape
	     * @returns {string}
	     */
	    String.prototype.nl2br = function (xmlEscape) {
	        return (xmlEscape ? this.xmlEscape() : this).replace(/(\r\n|\n\r|\r|\n)/g, '<br/>');
	    };
	}
	
	exports['default'] = String.prototype.nl2br;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.xmlEscape) {
	    String.prototype.xmlEscape = function () {
	        return this.replace(/(<|>|"|'|&)/g, function ($1) {
	            switch ($1) {
	                case '<':
	                    return '&lt;';
	                case '>':
	                    return '&gt;';
	                case '"':
	                    return '&#34;';
	                case '\'':
	                    return '&#39;';
	                case '&':
	                    return '&amp;';
	                default:
	                    return $1;
	            }
	        });
	    };
	}
	
	exports['default'] = String.prototype.xmlEscape;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.quote) {
	    /**
	     * @param {boolean} overlapable
	     * @return {string}
	     */
	    String.prototype.quote = function (overlapable) {
	        if (typeof overlapable !== 'boolean') {
	            overlapable = true;
	        }
	        if (!overlapable && this.length >= 2) {
	            if (this.charAt(0) === '"' && this.charAt(this.length - 1) === '"') {
	                return this.toString();
	            }
	            if (this.charAt(0) === '\'' && this.charAt(this.length - 1) === '\'') {
	                return this.toString();
	            }
	        }
	        return '"' + this + '"';
	    };
	}
	
	exports['default'] = String.prototype.quote;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.regex) {
	    /**
	     * @param {string} flags
	     * @returns {RegExp}
	     */
	    String.prototype.regex = function (flags) {
	        return new RegExp(this, flags);
	    };
	}
	if (!String.prototype.r) {
	    String.prototype.r = String.prototype.regex;
	}
	
	exports["default"] = String.prototype.regex;
	module.exports = exports["default"];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(40);
	
	if (!String.prototype.rightPad) {
	    /**
	     * @param {number} length
	     * @param {string} fillChar
	     * @returns {string}
	     */
	    String.prototype.rightPad = function (length, fillChar) {
	        if (typeof length !== 'number') {
	            throw new TypeError(length + ' is not a number');
	        }
	        if (!fillChar) {
	            fillChar = ' ';
	        }
	        if (this.length >= length) {
	            return this.toString();
	        }
	        return this.toString() + fillChar.repeat(length - this.length);
	    };
	}
	if (!String.prototype.rpad) {
	    String.prototype.rpad = String.prototype.rightPad;
	}
	
	exports['default'] = String.prototype.rightPad;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.startsWith) {
	    /**
	     * @param {string} str
	     */
	    String.prototype.startsWith = function (str) {
	        return this.indexOf(str) === 0;
	    };
	}
	
	exports["default"] = String.prototype.startsWith;
	module.exports = exports["default"];

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.unquote) {
	    String.prototype.unquote = function () {
	        if (this.length >= 2 && (this.charAt(0) === '"' && this.charAt(this.length - 1) === '"' || this.charAt(0) === '\'' && this.charAt(this.length - 1) === '\'')) {
	            return this.slice(1, -1);
	        }
	        return this.toString();
	    };
	}
	
	exports['default'] = String.prototype.unquote;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	__webpack_require__(49);
	
	/**
	 * @param {String} queryString
	 * @param {Object} [options]
	 * @return {Object}
	 */
	_jquery2['default'].deserialize = function (queryString, options) {
	    if (typeof queryString !== 'string' || queryString === '') {
	        return {};
	    }
	    var pairs = queryString.split(/&amp;|&/i);
	    if (!_jquery2['default'].isPlainObject(options)) {
	        options = {};
	    } else {
	        if (options.except && !_jquery2['default'].isArray(options.except)) {
	            options.except = [options.except];
	        }
	    }
	    var o = {};
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var pair = _step.value;
	
	            var _pair$split = pair.split('=');
	
	            var _pair$split2 = _slicedToArray(_pair$split, 2);
	
	            var _name = _pair$split2[0];
	            var value = _pair$split2[1];
	
	            _name = decodeURIComponent(_name);
	            value = decodeURIComponent(value);
	            if (options.except == null || !options.except.contains(_name)) {
	                _jquery2['default'].obj.set(true, o, _name, value);
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	                _iterator['return']();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return o;
	};
	
	exports['default'] = _jquery2['default'].deserialize;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	__webpack_require__(50);
	
	_jquery2['default'].obj = {
	
	    /**
	     * @param {Object} obj
	     * @param {string} key
	     * @param {*} [defaultValue]
	     * @return {*}
	     */
	    get: function get(obj, key, defaultValue) {
	        if (obj == null) {
	            return defaultValue;
	        }
	        if (!key) {
	            return obj;
	        }
	        var keyFragments = _jquery2['default'].split(key, '.', '/');
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = keyFragments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var keyFragment = _step.value;
	
	                if ((obj = obj[keyFragment]) == null) {
	                    return defaultValue;
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator['return']) {
	                    _iterator['return']();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        if (_jquery2['default'].isArray(defaultValue) && !_jquery2['default'].isArray(obj)) {
	            obj = _jquery2['default'].makeArray(obj);
	        }
	        return obj;
	    },
	
	    /**
	     * @param {boolean} [appendArray]
	     * @param {Object} obj
	     * @param {string} fullkey
	     * @param {*} value
	     * @return {Object}
	     */
	    set: function set(appendArray, obj, fullkey, value) {
	        var args = _jquery2['default'].makeArray(arguments);
	        appendArray = typeof args.first() === 'boolean' ? args.shift() : false;
	        obj = typeof args.first() === 'object' || _jquery2['default'].isFunction(args.first()) ? args.shift() : {};
	        if (typeof args.first() !== 'string') {
	            throw new TypeError('Object key must be string type : ' + args.first());
	        }
	        fullkey = args.shift();
	        value = args.shift();
	        var keys = _jquery2['default'].map(_jquery2['default'].split(fullkey, '.', '/'), function (key) {
	            if (/^([^\[]+)?\[([^\]]+)?\]/.test(key)) {
	                var inKeys = [key.match(/^([^\[]+)?/)[1]];
	                var inBracket = /\[([^\]]+)?\]/g;
	                var nextMatches = undefined;
	                while (nextMatches = inBracket.exec(key)) {
	                    inKeys.push(nextMatches[1]);
	                }
	                return inKeys;
	            }
	            return key;
	        });
	        var isNull = function isNull(o, key) {
	            try {
	                return !(key in o && o[key] != null);
	            } catch (ignored) {
	                return false;
	            }
	        };
	        var currObj = obj;
	        for (var i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            if (i === keys.length - 1) {
	                if (!appendArray || isNull(currObj, key)) {
	                    currObj[key] = value;
	                } else if (_jquery2['default'].isArray(currObj[key])) {
	                    currObj[key].push(value);
	                } else {
	                    currObj[key] = [currObj[key], value];
	                }
	            } else if (isNull(currObj, key)) {
	                if (!keys[i + 1]) {
	                    keys[i + 1] = '0';
	                }
	                currObj[key] = /^\d+$/.test(keys[i + 1]) ? [] : {};
	            } else if (typeof keys[i + 1] === 'undefined') {
	                keys[i + 1] = _jquery2['default'].isArray(currObj[key]) ? currObj[key].length + '' : '';
	            }
	            currObj = currObj[key];
	        }
	        return obj;
	    },
	
	    /**
	     * @param {Object} obj
	     * @return {Object}
	     */
	    generalize: function generalize(obj) {
	        if (!_jquery2['default'].isPlainObject(obj)) {
	            return obj;
	        }
	        var result = {};
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                var value = obj[key];
	                if (key.contains('.') || /\[(\w+)?\]/.test(key)) {
	                    _jquery2['default'].obj.set(true, result, key, value);
	                } else {
	                    result[key] = value;
	                }
	            }
	        }
	        return result;
	    },
	
	    /**
	     * @param {boolean} [deep]
	     * @param {boolean} [appendArray]
	     * @param {*|Object} target
	     * @param {*|Arguments<Object>} sources
	     * @param {boolean} [extendIfUndefined]
	     * @return {Object}
	     */
	    extend: function extend(deep, appendArray, target, sources, extendIfUndefined) {
	        var args = _jquery2['default'].makeArray(arguments);
	        deep = typeof args.first() === 'boolean' ? args.shift() : false;
	        appendArray = typeof args.first() === 'boolean' ? args.shift() : false;
	        extendIfUndefined = typeof args.last() === 'boolean' ? args.pop() : false;
	        target = args.length === 1 ? {} : args.shift() || {};
	        if (typeof target !== 'object' && !_jquery2['default'].isFunction(target)) {
	            target = {};
	        }
	        sources = args;
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	            for (var _iterator2 = sources[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var source = _step2.value;
	
	                if (source != null) {
	                    for (var _name in source) {
	                        if (source.hasOwnProperty(_name)) {
	                            var src = target[_name];
	                            var copy = source[_name];
	                            if (target === copy) {
	                                continue;
	                            }
	                            var copyIsArray = false;
	                            if (deep && copy && (_jquery2['default'].isPlainObject(copy) || (copyIsArray = _jquery2['default'].isArray(copy)))) {
	                                if (!copyIsArray) {
	                                    var srcIsPlainObject = false;
	                                    if (src === void 0 || (srcIsPlainObject = _jquery2['default'].isPlainObject(src)) || !extendIfUndefined) {
	                                        target[_name] = _jquery2['default'].obj.extend(deep, appendArray, srcIsPlainObject ? src : {}, copy, extendIfUndefined);
	                                    }
	                                } else if (src === void 0 || !extendIfUndefined) {
	                                    target[_name] = _jquery2['default'].merge(appendArray && _jquery2['default'].isArray(src) ? src : [], _jquery2['default'].obj.extend(deep, [], copy));
	                                }
	                            } else if (copy !== void 0 && (src === void 0 || !extendIfUndefined)) {
	                                if (copy instanceof Date) {
	                                    target[_name] = new Date(copy.getTime());
	                                } else if (copy instanceof RegExp) {
	                                    var flags = '';
	                                    if (copy.global != null) {
	                                        flags += 'g';
	                                    }
	                                    if (copy.ignoreCase != null) {
	                                        flags += 'i';
	                                    }
	                                    if (copy.multiline != null) {
	                                        flags += 'm';
	                                    }
	                                    if (copy.sticky != null) {
	                                        flags += 'y';
	                                    }
	                                    target[_name] = new RegExp(copy.source, flags);
	                                } else {
	                                    target[_name] = copy;
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                    _iterator2['return']();
	                }
	            } finally {
	                if (_didIteratorError2) {
	                    throw _iteratorError2;
	                }
	            }
	        }
	
	        return target;
	    },
	
	    /**
	     * @param {*} keyValuePairs
	     * @return {Object}
	     */
	    make: function make() {
	        var obj = {};
	
	        for (var _len = arguments.length, keyValuePairs = Array(_len), _key = 0; _key < _len; _key++) {
	            keyValuePairs[_key] = arguments[_key];
	        }
	
	        for (var i = 0; i < keyValuePairs.length; i += 2) {
	            obj[keyValuePairs[i]] = keyValuePairs[i + 1];
	        }
	        return obj;
	    },
	
	    /**
	     * @param {Object} obj
	     * @return {Object}
	     */
	    empty: function empty(obj) {
	        if (_jquery2['default'].isPlainObject(obj)) {
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    delete obj[key];
	                }
	            }
	        }
	        return obj;
	    }
	};
	
	for (var key in _jquery2['default'].obj) {
	    var shortKey = key + 'Object';
	    if (!(shortKey in _jquery2['default'])) {
	        if (_jquery2['default'].obj.hasOwnProperty(key)) {
	            _jquery2['default'][shortKey] = _jquery2['default'].obj[key];
	        }
	    }
	}
	
	exports['default'] = _jquery2['default'].obj;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {string} str
	 * @param {string} separator
	 * @param {string} [escapeChar]
	 * @param {number} [limit]
	 * @return {Array<String>}
	 */
	_jquery2['default'].split = function (str, separator, escapeChar, limit) {
	    if (typeof str !== 'string') {
	        throw new TypeError(str + ' is not a string');
	    }
	    str = str.toString();
	    if (typeof separator === 'number') {
	        var _ref = [separator, null, null];
	        limit = _ref[0];
	        separator = _ref[1];
	        escapeChar = _ref[2];
	    } else if (typeof escapeChar === 'number') {
	        var _ref2 = [escapeChar, null];
	        limit = _ref2[0];
	        escapeChar = _ref2[1];
	    }
	    var limited = function limited(i) {
	        return 0 < limit && limit <= i + 1;
	    };
	    var parts = [];
	    var i = 0;
	    var s = 0;
	    var p = undefined;
	    while ((p = str.indexOf(separator, s)) !== -1 && !limited(i)) {
	        var part = str.slice(s, p);
	        var escaped = false;
	        if (escapeChar && part.slice(-1) === escapeChar) {
	            part = part.slice(0, -1);
	            escaped = part.slice(-1) !== escapeChar;
	            if (escaped) {
	                part += separator;
	            }
	        }
	        parts[i] = (parts[i] || '') + part;
	        s = p + 1;
	        if (!escaped) {
	            i++;
	        }
	    }
	    if (s <= str.length) {
	        parts[i] = (parts[i] || '') + str.slice(s);
	    }
	    return parts;
	};
	
	exports['default'] = _jquery2['default'].split;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {String} name
	 * @return {jQuery<HTMLElement>}
	 */
	_jquery2['default'].fn.findByName = function (name) {
	  return this.find('[name="' + (name || '').replace(/"/g, '\\"') + '"]');
	};
	
	exports['default'] = _jquery2['default'].fn.findByName;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {Array<string>} names
	 * @return {jQuery<HTMLElement>}
	 */
	_jquery2['default'].fn.findByNames = function () {
	    for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
	        names[_key] = arguments[_key];
	    }
	
	    if (names.length === 0) {
	        return (0, _jquery2['default'])([]);
	    }
	    return this.find(names.map(function (name) {
	        return '[name="' + (name || '').replace(/"/g, '\\"') + '"]';
	    }).join(','));
	};
	
	exports['default'] = _jquery2['default'].fn.findByNames;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {Function} callback
	 * @param {*} [context]
	 * @return {Object}
	 */
	_jquery2['default'].fn.groupBy = function (callback, context) {
	    if (!_jquery2['default'].isFunction(callback)) {
	        throw new TypeError(callback + ' is not a function');
	    }
	    var result = {};
	    for (var i = 0; i < this.length; i++) {
	        var elem = this[i];
	        var key = callback.call(context || elem, elem, i, this);
	        if (key !== void 0) {
	            if (!(key in result)) {
	                result[key] = (0, _jquery2['default'])([]);
	            }
	            result[key].push(this[i]);
	        }
	    }
	    return result;
	};
	
	exports['default'] = _jquery2['default'].fn.groupBy;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(document) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {string|Array<HTMLElement>|jQuery<HTMLElement>} excludes
	 * @return {number}
	 */
	_jquery2['default'].fn.maxZIndex = function (excludes) {
	    var zIndex = 0;
	    this.find(':visible').andSelf().add(this.parentsUntil('html')).not(excludes).each(function () {
	        if (this.nodeName !== '#document') {
	            var $this = (0, _jquery2['default'])(this);
	            if (['absolute', 'relative', 'fixed'].contains($this.css('position'))) {
	                var value = parseInt($this.css('zIndex'));
	                if (!isNaN(value) && value > zIndex) {
	                    zIndex = value;
	                }
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
	_jquery2['default'].maxZIndex = function (excludes) {
	    return (0, _jquery2['default'])(document.body).maxZIndex(excludes);
	};
	
	exports['default'] = _jquery2['default'].maxZIndex;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(56).document;

/***/ },
/* 56 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	if (!global.document) {
	    throw new Error("jQuery.extends requires a window with a document");
	}
	
	module.exports = global;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {Function} callback
	 * @return {number}
	 */
	_jquery2['default'].nextTick = function (callback) {
	  return setTimeout(callback, 0);
	};
	
	exports['default'] = _jquery2['default'].nextTick;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {boolean} dataAndEvents
	 * @param {boolean} deepDataAndEvents
	 * @return {jQuery}
	 */
	_jquery2['default'].fn.reclone = function (dataAndEvents, deepDataAndEvents) {
	    return this.map(function () {
	        var oldElem = (0, _jquery2['default'])(this);
	        var newElem = oldElem.clone(dataAndEvents, deepDataAndEvents);
	        newElem.insertAfter(this);
	        oldElem.remove();
	        return newElem[0];
	    });
	};
	
	exports['default'] = _jquery2['default'].fn.reclone;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {string} prefix
	 * @param {Array<{name,value}>} params
	 * @return {number} length of parameters
	 */
	_jquery2['default'].reindexArrayParams = function (prefix, params) {
	    var regex = new RegExp('^(' + prefix.replace('.', '\\.') + ')\\[(\\d+)\\]');
	    var prevIndex = null;
	    var index = -1;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var param = _step.value;
	
	            var results = regex.exec(param.name);
	            if (results) {
	                var currIndex = results[2];
	                if (prevIndex !== currIndex) {
	                    prevIndex = currIndex;
	                    index++;
	                }
	                param.name = param.name.replace(regex, '$1[' + index + ']');
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	                _iterator['return']();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return index;
	};
	
	exports['default'] = _jquery2['default'].reindexArrayParams;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	exports['default'] = _jquery2['default'].fn.reverse = Array.prototype.reverse;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {Object} options
	 * @return {Object}
	 */
	_jquery2['default'].fn.serializeObject = function (options) {
	    if (!_jquery2['default'].isPlainObject(options)) {
	        options = {};
	    } else {
	        if (options.except && !_jquery2['default'].isArray(options.except)) {
	            options.except = [options.except];
	        }
	    }
	    var result = {};
	    _jquery2['default'].each(this.serializeArray(), function () {
	        if (options.except == null || !options.except.contains(this.name)) {
	            if (this.name in result) {
	                if (!_jquery2['default'].isArray(result[this.name])) {
	                    result[this.name] = [result[this.name], this.value];
	                } else {
	                    result[this.name].push(this.value);
	                }
	            } else {
	                result[this.name] = this.value;
	            }
	        }
	    });
	    return result;
	};
	
	exports['default'] = _jquery2['default'].fn.serializeObject;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {Array|Object} items
	 * @param {Function} callback
	 * @param {*} [context]
	 * @return {boolean}
	 */
	_jquery2['default'].some = function (items, callback, context) {
	    if (!_jquery2['default'].isFunction(callback)) {
	        throw new TypeError(callback + ' is not a function');
	    }
	    if (_jquery2['default'].isArray(items)) {
	        for (var i = 0; i < items.length; i++) {
	            if (callback.call(context || items, items[i], i, items)) {
	                return true;
	            }
	        }
	    } else if (_jquery2['default'].isPlainObject(items)) {
	        for (var key in items) {
	            if (items.hasOwnProperty(key)) {
	                if (callback.call(context || items, items[key], key, items)) {
	                    return true;
	                }
	            }
	        }
	    } else {
	        throw new TypeError(items + ' is not array or plain object');
	    }
	    return false;
	};
	
	exports['default'] = _jquery2['default'].some;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(document) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {string} type
	 * @return {boolean}
	 */
	_jquery2['default'].supportsInputType = function (type) {
	  var input = document.createElement('input');
	  input.setAttribute('type', type);
	  return input.type === type;
	};
	
	exports['default'] = _jquery2['default'].supportsInputType;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(2);
	
	/**
	 * @param {XML} xmlNode the xml node.
	 * @return {string}
	 */
	_jquery2['default'].xmlToString = function (xmlNode) {
	    try {
	        return new XMLSerializer().serializeToString(xmlNode);
	    } catch (_error) {
	        if (xmlNode.xml == null) {
	            throw new Error('XMLSerializer not supported');
	        }
	        return xmlNode.xml;
	    }
	};
	
	exports['default'] = _jquery2['default'].xmlToString;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyY2E0YTUyZTM3N2QzZjkxNjVlMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy8uL3NyYy9wcm90by9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvaW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2V2ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZmxhdE1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2ZpcnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2dyb3VwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9ncm91cGVkUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvam9pblBhdGhzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL21heC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vcmVnZXhwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vcmVnZXhwcy9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvYW50U3R5bGVQYXRoVG9SZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9icjJubC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy94bWxVbmVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9jb21wYXJlVG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvY3V0c3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2dldExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9lbmRzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvZm9ybWF0VmFyaWFibGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2dyb3VwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2xlZnRQYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvcmVwZWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL25sMmJyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3htbEVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9xdW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9yaWdodFBhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9zdGFydHNXaXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3VucXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2VyaWFsaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwbGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9maW5kQnlOYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9maW5kQnlOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF4WkluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV4dFRpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlaW5kZXhBcnJheVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VyaWFsaXplT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdXBwb3J0c0lucHV0VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMveG1sVG9TdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7bUNDdENtQixDQUFROzs7O3FCQUNwQixDQUFlOztxQkFDZixFQUFlOztxQkFDZixFQUFjOztxQkFDZCxFQUFlOztxQkFDZixFQUFXOztxQkFDWCxFQUFhOztxQkFDYixFQUFZOztxQkFDWixFQUFPOztxQkFDUCxFQUFXOztxQkFDWCxFQUFzQjs7cUJBQ3RCLEVBQVc7O3FCQUNYLEVBQW1COztxQkFDbkIsRUFBUTs7cUJBQ1IsRUFBUzs7cUJBQ1QsRUFBcUI7O3FCQUNyQixFQUFlOzs7Ozs7Ozs7QUNoQnRCLGdEOzs7Ozs7OztBQ0FBLE9BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixXQUFNLEVBQUUsbUJBQU8sQ0FBQyxDQUFVLENBQUM7QUFDM0IsWUFBTyxFQUFFLG1CQUFPLENBQUMsRUFBVyxDQUFDO0FBQzdCLFlBQU8sRUFBRSxtQkFBTyxDQUFDLEVBQVcsQ0FBQztFQUNoQyxDOzs7Ozs7OztBQ0pELE9BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixhQUFRLEVBQUUsbUJBQU8sQ0FBQyxDQUFtQixDQUFDO0FBQ3RDLFVBQUssRUFBRSxtQkFBTyxDQUFDLENBQWdCLENBQUM7QUFDaEMsV0FBTSxFQUFFLG1CQUFPLENBQUMsQ0FBaUIsQ0FBQztBQUNsQyxVQUFLLEVB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QUFPLENBQUMsR0FBRyxDQUFDO01BQ3RCO0VBQ0osQ0FBQzs7c0JBRWEsb0JBQUUsV0FBVyIsImZpbGUiOiJqcXVlcnktZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wialF1ZXJ5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqUXVlcnlcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDJjYTRhNTJlMzc3ZDNmOTE2NWUzXG4gKiovIiwiaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5pbXBvcnQgJy4vZGVzZXJpYWxpemUnXG5pbXBvcnQgJy4vZmluZEJ5TmFtZSdcbmltcG9ydCAnLi9maW5kQnlOYW1lcydcbmltcG9ydCAnLi9ncm91cEJ5J1xuaW1wb3J0ICcuL21heFpJbmRleCdcbmltcG9ydCAnLi9uZXh0VGljaydcbmltcG9ydCAnLi9vYmonXG5pbXBvcnQgJy4vcmVjbG9uZSdcbmltcG9ydCAnLi9yZWluZGV4QXJyYXlQYXJhbXMnXG5pbXBvcnQgJy4vcmV2ZXJzZSdcbmltcG9ydCAnLi9zZXJpYWxpemVPYmplY3QnXG5pbXBvcnQgJy4vc29tZSdcbmltcG9ydCAnLi9zcGxpdCdcbmltcG9ydCAnLi9zdXBwb3J0c0lucHV0VHlwZSdcbmltcG9ydCAnLi94bWxUb1N0cmluZydcblxuZXhwb3J0IGRlZmF1bHQgalF1ZXJ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhcnJheXM6IHJlcXVpcmUoJy4vYXJyYXlzJyksXG4gICAgcmVnZXhwczogcmVxdWlyZSgnLi9yZWdleHBzJyksXG4gICAgc3RyaW5nczogcmVxdWlyZSgnLi9zdHJpbmdzJylcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb250YWluczogcmVxdWlyZSgnLi9hcnJheXMvY29udGFpbnMnKSxcbiAgICBldmVyeTogcmVxdWlyZSgnLi9hcnJheXMvZXZlcnknKSxcbiAgICBmaWx0ZXI6IHJlcXVpcmUoJy4vYXJyYXlzL2ZpbHRlcicpLFxuICAgIGZpcnN0OiByZXF1aXJlKCcuL2FycmF5cy9maXJzdCcpLFxuICAgIGZsYXRNYXA6IHJlcXVpcmUoJy4vYXJyYXlzL2ZsYXRNYXAnKSxcbiAgICBncm91cEJ5OiByZXF1aXJlKCcuL2FycmF5cy9ncm91cEJ5JyksXG4gICAgZ3JvdXBlZDogcmVxdWlyZSgnLi9hcnJheXMvZ3JvdXBlZCcpLFxuICAgIGdyb3VwZWRSaWdodDogcmVxdWlyZSgnLi9hcnJheXMvZ3JvdXBlZFJpZ2h0JyksXG4gICAgaW5jbHVkZTogcmVxdWlyZSgnLi9hcnJheXMvaW5jbHVkZScpLFxuICAgIGluZGV4T2Y6IHJlcXVpcmUoJy4vYXJyYXlzL2luZGV4T2YnKSxcbiAgICBpc0FycmF5OiByZXF1aXJlKCcuL2FycmF5cy9pc0FycmF5JyksXG4gICAgam9pblBhdGhzOiByZXF1aXJlKCcuL2FycmF5cy9qb2luUGF0aHMnKSxcbiAgICBsYXN0OiByZXF1aXJlKCcuL2FycmF5cy9sYXN0JyksXG4gICAgbWFwOiByZXF1aXJlKCcuL2FycmF5cy9tYXAnKSxcbiAgICBtYXg6IHJlcXVpcmUoJy4vYXJyYXlzL21heCcpLFxuICAgIG1pbjogcmVxdWlyZSgnLi9hcnJheXMvbWluJyksXG4gICAgcmFuZ2U6IHJlcXVpcmUoJy4vYXJyYXlzL3JhbmdlJyksXG4gICAgcmVkdWNlOiByZXF1aXJlKCcuL2FycmF5cy9yZWR1Y2UnKSxcbiAgICByZW1vdmU6IHJlcXVpcmUoJy4vYXJyYXlzL3JlbW92ZScpLFxuICAgIHNvbWU6IHJlcXVpcmUoJy4vYXJyYXlzL3NvbWUnKVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy5qc1xuICoqLyIsImlmICghQXJyYXkuaXNBcnJheSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gb2JqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkuaXNBcnJheTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvaXNBcnJheS5qc1xuICoqLyIsImltcG9ydCAnLi9pbmRleE9mJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5jb250YWlucykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGEpID49IDA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuY29udGFpbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvY29udGFpbnMuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9pbmRleE9mLmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUuZXZlcnkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZXZlcnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ldmVyeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9ldmVyeS5qc1xuICoqLyIsImltcG9ydCAnLi9mbGF0TWFwJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maWx0ZXIpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYXRNYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgYSwgaSwgdGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9maWx0ZXIuanNcbiAqKi8iLCJpbXBvcnQgJy4vaXNBcnJheSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmxhdE1hcCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIEFycmF5XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmZsYXRNYXAgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmZsYXRNYXA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvZmxhdE1hcC5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmZpcnN0KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maXJzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9maXJzdC5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwQnkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7e319XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW2ldO1xuICAgICAgICAgICAgbGV0IGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB2YWx1ZSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ncm91cEJ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2dyb3VwQnkuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9ncm91cGVkLmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoOyBpID4gMDsgaSAtPSBzaXplKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShNYXRoLm1heCgwLCBpIC0gc2l6ZSksIGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cy5yZXZlcnNlKCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9ncm91cGVkUmlnaHQuanNcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXhPZidcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZSkge1xuICAgIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBsZXQgaSA9IHRoaXMuaW5kZXhPZihhKTtcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgdGhpc1tpXSA9IGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goYSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmluY2x1ZGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvaW5jbHVkZS5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmpvaW5QYXRocykge1xuICAgIEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gJy8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRoaXNbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2pvaW5QYXRocy5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmxhc3QpIHtcbiAgICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5sYXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2xhc3QuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5tYXApIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLm1hcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9tYXAuanNcbiAqKi8iLCJpbXBvcnQgJy4vcmVkdWNlJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5tYXgpIHtcbiAgICBBcnJheS5wcm90b3R5cGUubWF4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEgPiBiKSByZXR1cm4gYTtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWF4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL21heC5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLnJlZHVjZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoISh0aGlzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpc1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHJlc3VsdCwgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUucmVkdWNlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL3JlZHVjZS5qc1xuICoqLyIsImltcG9ydCAnLi9yZWR1Y2UnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLm1pbikge1xuICAgIEFycmF5LnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYSA8IGIpIHJldHVybiBhO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gYjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL21pbi5qc1xuICoqLyIsImlmICghQXJyYXkucmFuZ2UpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGZyb21cbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHRvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgQXJyYXkucmFuZ2UgPSBmdW5jdGlvbihmcm9tLCB0bywgc3RlcCkge1xuICAgICAgICBsZXQgcmFuZ2UgPSBbXTtcbiAgICAgICAgbGV0IGlzTnVtYmVyID0gdHlwZW9mIGZyb20gPT09ICdudW1iZXInICYmIHR5cGVvZiB0byA9PT0gJ251bWJlcic7XG4gICAgICAgIGxldCBiZWdpbiA9IGlzTnVtYmVyID8gZnJvbSA6IGZyb20udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICBsZXQgZW5kID0gaXNOdW1iZXIgPyB0byA6IHRvLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGJlZ2luOyBzdGVwID4gMCA/IGkgPD0gZW5kIDogaSA+PSBlbmQ7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgcmFuZ2UucHVzaChpc051bWJlciA/IGkgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucmFuZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvcmFuZ2UuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5yZW1vdmUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUucmVtb3ZlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL3JlbW92ZS5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuc29tZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvc29tZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGVzY2FwZTogcmVxdWlyZSgnLi9yZWdleHBzL2VzY2FwZScpXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vcmVnZXhwcy5qc1xuICoqLyIsImlmICghUmVnRXhwLmVzY2FwZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBSZWdFeHAuZXNjYXBlID0gZnVuY3Rpb24odGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ0V4cC5lc2NhcGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9yZWdleHBzL2VzY2FwZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdhbnRTdHlsZVBhdGhUb1JlZ2V4JzogcmVxdWlyZSgnLi9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXgnKSxcbiAgICAnYnIybmwnOiByZXF1aXJlKCcuL3N0cmluZ3MvYnIybmwnKSxcbiAgICAnY29tcGFyZVRvJzogcmVxdWlyZSgnLi9zdHJpbmdzL2NvbXBhcmVUbycpLFxuICAgICdjb250YWlucyc6IHJlcXVpcmUoJy4vc3RyaW5ncy9jb250YWlucycpLFxuICAgICdjdXRzdHJpbmcnOiByZXF1aXJlKCcuL3N0cmluZ3MvY3V0c3RyaW5nJyksXG4gICAgJ2VuZHNXaXRoJzogcmVxdWlyZSgnLi9zdHJpbmdzL2VuZHNXaXRoJyksXG4gICAgJ2Zvcm1hdCc6IHJlcXVpcmUoJy4vc3RyaW5ncy9mb3JtYXQnKSxcbiAgICAnZm9ybWF0VmFyaWFibGVzJzogcmVxdWlyZSgnLi9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcycpLFxuICAgICdnZXRMZW5ndGgnOiByZXF1aXJlKCcuL3N0cmluZ3MvZ2V0TGVuZ3RoJyksXG4gICAgJ2dyb3VwZWQnOiByZXF1aXJlKCcuL3N0cmluZ3MvZ3JvdXBlZCcpLFxuICAgICdncm91cGVkUmlnaHQnOiByZXF1aXJlKCcuL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0JyksXG4gICAgJ2xlZnRQYWQnOiByZXF1aXJlKCcuL3N0cmluZ3MvbGVmdFBhZCcpLFxuICAgICdubDJicic6IHJlcXVpcmUoJy4vc3RyaW5ncy9ubDJicicpLFxuICAgICdxdW90ZSc6IHJlcXVpcmUoJy4vc3RyaW5ncy9xdW90ZScpLFxuICAgICdyZWdleCc6IHJlcXVpcmUoJy4vc3RyaW5ncy9yZWdleCcpLFxuICAgICdyZXBlYXQnOiByZXF1aXJlKCcuL3N0cmluZ3MvcmVwZWF0JyksXG4gICAgJ3JpZ2h0UGFkJzogcmVxdWlyZSgnLi9zdHJpbmdzL3JpZ2h0UGFkJyksXG4gICAgJ3N0YXJ0c1dpdGgnOiByZXF1aXJlKCcuL3N0cmluZ3Mvc3RhcnRzV2l0aCcpLFxuICAgICd1bnF1b3RlJzogcmVxdWlyZSgnLi9zdHJpbmdzL3VucXVvdGUnKSxcbiAgICAneG1sRXNjYXBlJzogcmVxdWlyZSgnLi9zdHJpbmdzL3htbEVzY2FwZScpLFxuICAgICd4bWxVbmVzY2FwZSc6IHJlcXVpcmUoJy4vc3RyaW5ncy94bWxVbmVzY2FwZScpXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGggdGhlIGFudCBzdHlsZSBwYXRoIHN0cmluZ1xuICAgICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXggPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXRoIG11c3QgYmUgc3RyaW5nIHR5cGUgOiBcIiArIHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHBhdGgubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiUGF0aCBtdXN0IG5vdCBiZSBlbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvezIsfS9nLCAnLycpO1xuICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9bLVtcXF17fSgpKy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBwYXRoLnJlcGxhY2UoLygoXFwvP1xcKlxcKil8KFxcLz9cXCopfChcXD8pfChcXC8pKS9nLCBmdW5jdGlvbigkMCkge1xuICAgICAgICAgICAgc3dpdGNoICgkMCkge1xuICAgICAgICAgICAgY2FzZSAnLyoqJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyg/Oi97MSx9LiopPyc7XG4gICAgICAgICAgICBjYXNlICcqKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcuKic7XG4gICAgICAgICAgICBjYXNlICcvKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcoPzovezEsfVteL10qKT8nO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdbXi9dKic7XG4gICAgICAgICAgICBjYXNlICc/JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1teL10nO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvezEsfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgcGF0dGVybiArICcpJCcpO1xuICAgIH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUuYSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUuYSA9IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9hbnRTdHlsZVBhdGhUb1JlZ2V4LmpzXG4gKiovIiwiaW1wb3J0ICcuL3htbFVuZXNjYXBlJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuYnIybmwpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbFVuZXNjYXBlXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuYnIybmwgPSBmdW5jdGlvbih4bWxVbmVzY2FwZSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5yZXBsYWNlKC8oPGJyPnw8YnJcXC8+KS9nLCAnXFxuJyk7XG4gICAgICAgIGlmICh4bWxVbmVzY2FwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC54bWxVbmVzY2FwZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuYnIybmw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2JyMm5sLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oJmx0O3wmZ3Q7fCYjMzQ7fCYjMzk7fCZhbXA7KS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgICAgICAgc3dpdGNoICgkMSkge1xuICAgICAgICAgICAgY2FzZSAnJmx0Oyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8JztcbiAgICAgICAgICAgIGNhc2UgJyZndDsnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnPic7XG4gICAgICAgICAgICBjYXNlICcmIzM0Oyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdcIic7XG4gICAgICAgICAgICBjYXNlICcmIzM5Oyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgICAgICAgICAgY2FzZSAnJmFtcDsnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnJic7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy94bWxVbmVzY2FwZS5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG8pIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbyA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICBzd2l0Y2ggKGZhbHNlKSB7XG4gICAgICAgIGNhc2UgIShzdHIgPT0gbnVsbCk6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgY2FzZSAhKHRoaXMgPiBzdHIpOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIGNhc2UgISh0aGlzIDwgc3RyKTpcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG87XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2NvbXBhcmVUby5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5jb250YWlucykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA+IC0xO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY29udGFpbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2NvbnRhaW5zLmpzXG4gKiovIiwiaW1wb3J0ICcuLi9hcnJheXMvY29udGFpbnMnXG5pbXBvcnQgJy4vZ2V0TGVuZ3RoJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aCB0aGUgbWF4IGxlbmd0aC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3N1ZmZpeF0gdGhlIHN1ZmZpeC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmcgPSBmdW5jdGlvbihjaGVja2J5dGUsIG1heExlbmd0aCwgc3VmZml4KSB7XG4gICAgICAgIGxldCBhcmdJbmRleCA9IDA7XG4gICAgICAgIGxldCBhcmdDdXJyID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4XTtcbiAgICAgICAgbGV0IGFyZ1NoaWZ0ID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXG4gICAgICAgIGlmIChbJ2Jvb2xlYW4nLCAnbnVtYmVyJ10uY29udGFpbnModHlwZW9mIGFyZ0N1cnIoKSkpIHtcbiAgICAgICAgICAgIGNoZWNrYnl0ZSA9IGFyZ1NoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2J5dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnQ3VycigpICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihhcmdDdXJyKCkgKyBcIiBpcyBub3QgYSBudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgbWF4TGVuZ3RoID0gYXJnU2hpZnQoKTtcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ0N1cnIoKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN1ZmZpeCA9IGFyZ1NoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWZmaXggPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmdldExlbmd0aChjaGVja2J5dGUpO1xuICAgICAgICBpZiAoIShsZW5ndGggPiBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdWZmaXhMZW5ndGggPSBzdWZmaXguZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgIGlmIChzdWZmaXhMZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWF4IGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiBzdWZmaXggbGVuZ3RoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IGNoZWNrZWRMZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBsZXQgbCA9IGMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZExlbmd0aCArIGwgPiBtYXhMZW5ndGggLSBzdWZmaXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrZWRMZW5ndGggKz0gbDtcbiAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRTdHJpbmcgKyBzdWZmaXg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2N1dHN0cmluZy5qc1xuICoqLyIsImltcG9ydCAnLi4vYXJyYXlzL2NvbnRhaW5zJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oY2hlY2tieXRlKSB7XG4gICAgICAgIGxldCBhcmdJbmRleCA9IDA7XG4gICAgICAgIGxldCBhcmdDdXJyID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4XTtcbiAgICAgICAgbGV0IGFyZ1NoaWZ0ID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXG4gICAgICAgIGlmIChbJ2Jvb2xlYW4nLCAnbnVtYmVyJ10uY29udGFpbnModHlwZW9mIGFyZ0N1cnIoKSkpIHtcbiAgICAgICAgICAgIGNoZWNrYnl0ZSA9IGFyZ1NoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2J5dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tieXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGZhbHNlKSB7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDA3Rik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEodHlwZW9mIGNoZWNrYnl0ZSA9PT0gJ251bWJlcicgJiYgY2hlY2tieXRlID4gMCk6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IGNoZWNrYnl0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgIShjIDw9IDB4MDAwN0ZGKTpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgIShjIDw9IDB4MDBGRkZGKTpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmdldExlbmd0aDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvZ2V0TGVuZ3RoLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGggPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmxhc3RJbmRleE9mKHN0cik7XG4gICAgICAgIHJldHVybiBpID4gLTEgJiYgaSA9PT0gdGhpcy5sZW5ndGggLSBzdHIudG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvZW5kc1dpdGguanNcbiAqKi8iLCJpbXBvcnQgJy4uL2FycmF5cy9pc0FycmF5J1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0KSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKCcnfCdcXHt8XFx9J3xcXHsoXFx3KylcXH0pL2csIChmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oJDAsICQxLCAkMikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiJydcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIne1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3snO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ9J1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ30nO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoIS9eXFxkKyQvZy50ZXN0KCQyKSA/IGFyZ3NbMF0gfHwge30gOiBBcnJheS5pc0FycmF5KGFyZ3NbMF0pID8gYXJnc1swXSA6IGFyZ3MpWyQyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KShhcmd1bWVudHMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9mb3JtYXQuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBhcmd1bWVudHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcmVnZXggPSAvKCcnfCdcXHt8XFx9J3xcXHsoXFx3KylcXH0pL2c7XG4gICAgICAgIGxldCB2YXJpYWJsZXMgPSBbXTtcbiAgICAgICAgbGV0IG1hdGNoZXM7XG4gICAgICAgIHdoaWxlIChtYXRjaGVzID0gcmVnZXguZXhlYyh0aGlzKSkge1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gbWF0Y2hlc1swXTtcbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gXCInJ1wiICYmIG1hdGNoICE9PSBcIid7XCIgJiYgbWF0Y2ggIT09IFwifSdcIikge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wdXNoKG1hdGNoZXNbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YXJpYWJsZXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcy5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgaWYgKCEoc2l6ZSA+IDEpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzaXplIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgc2l6ZSA9IHBhcnNlSW50KHNpemUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShpLCBpICsgc2l6ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvZ3JvdXBlZC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHNpemUgPSBwYXJzZUludChzaXplKVxuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aDsgaSA+IDA7IGkgLT0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIHNpemUpLCBpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMucmV2ZXJzZSgpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9ncm91cGVkUmlnaHQuanNcbiAqKi8iLCJpbXBvcnQgJy4vcmVwZWF0J1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUubGVmdFBhZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUubGVmdFBhZCA9IGZ1bmN0aW9uKGxlbmd0aCwgZmlsbENoYXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaWxsQ2hhcikge1xuICAgICAgICAgICAgZmlsbENoYXIgPSAnICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID49IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKSArIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmxwYWQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmxwYWQgPSBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvbGVmdFBhZC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgPSBmdW5jdGlvbihjb3VudCkge1xuICAgICAgICBpZiAoIShjb3VudCA+PSAwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgY291bnQgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUucmVwZWF0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9yZXBlYXQuanNcbiAqKi8iLCJpbXBvcnQgJy4veG1sRXNjYXBlJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUubmwyYnIpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbEVzY2FwZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5ubDJiciA9IGZ1bmN0aW9uKHhtbEVzY2FwZSkge1xuICAgICAgICByZXR1cm4gKHhtbEVzY2FwZSA/IHRoaXMueG1sRXNjYXBlKCkgOiB0aGlzKS5yZXBsYWNlKC8oXFxyXFxufFxcblxccnxcXHJ8XFxuKS9nLCAnPGJyLz4nKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUubmwyYnI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL25sMmJyLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLyg8fD58XCJ8J3wmKS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgICAgICAgc3dpdGNoICgkMSkge1xuICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcmbHQ7JztcbiAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnJmd0Oyc7XG4gICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcmIzM0Oyc7XG4gICAgICAgICAgICBjYXNlIFwiJ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnJiMzOTsnO1xuICAgICAgICAgICAgY2FzZSAnJic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcmYW1wOyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MveG1sRXNjYXBlLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnF1b3RlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvdmVybGFwYWJsZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnF1b3RlID0gZnVuY3Rpb24ob3ZlcmxhcGFibGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvdmVybGFwYWJsZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBvdmVybGFwYWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvdmVybGFwYWJsZSAmJiB0aGlzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyQXQoMCkgPT09ICdcIicgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyQXQoMCkgPT09IFwiJ1wiICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ1wiJyArIHRoaXMgKyAnXCInO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUucXVvdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL3F1b3RlLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnJlZ2V4KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZsYWdzXG4gICAgICogQHJldHVybnMge1JlZ0V4cH1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnJlZ2V4ID0gZnVuY3Rpb24oZmxhZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodGhpcywgZmxhZ3MpO1xuICAgIH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUucikge1xuICAgIFN0cmluZy5wcm90b3R5cGUuciA9IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL3JlZ2V4LmpzXG4gKiovIiwiaW1wb3J0ICcuL3JlcGVhdCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxsQ2hhclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCA9IGZ1bmN0aW9uKGxlbmd0aCwgZmlsbENoYXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaWxsQ2hhcikge1xuICAgICAgICAgICAgZmlsbENoYXIgPSAnICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID49IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpICsgZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJwYWQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnJwYWQgPSBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9yaWdodFBhZC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKHN0cikgPT09IDA7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9zdGFydHNXaXRoLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnVucXVvdGUpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnVucXVvdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID49IDIgJiZcbiAgICAgICAgICAgICgodGhpcy5jaGFyQXQoMCkgPT09ICdcIicgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gJ1wiJykgfHxcbiAgICAgICAgICAgICh0aGlzLmNoYXJBdCgwKSA9PT0gXCInXCIgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gXCInXCIpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMSwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy91bnF1b3RlLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuaW1wb3J0ICcuL29iaidcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXVlcnlTdHJpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuJC5kZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVN0cmluZyAhPT0gJ3N0cmluZycgfHwgcXVlcnlTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgbGV0IHBhaXJzID0gcXVlcnlTdHJpbmcuc3BsaXQoLyZhbXA7fCYvaSk7XG4gICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4Y2VwdCAmJiAhJC5pc0FycmF5KG9wdGlvbnMuZXhjZXB0KSkge1xuICAgICAgICAgICAgb3B0aW9ucy5leGNlcHQgPSBbb3B0aW9ucy5leGNlcHRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBvID0ge307XG4gICAgZm9yIChsZXQgcGFpciBvZiBwYWlycykge1xuICAgICAgICBsZXQgW25hbWUsIHZhbHVlXSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBpZiAob3B0aW9ucy5leGNlcHQgPT0gbnVsbCB8fCAhb3B0aW9ucy5leGNlcHQuY29udGFpbnMobmFtZSkpIHtcbiAgICAgICAgICAgICQub2JqLnNldCh0cnVlLCBvLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG87XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmRlc2VyaWFsaXplO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGVzZXJpYWxpemUuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5pbXBvcnQgJy4vc3BsaXQnXG5cbiQub2JqID0ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKG9iaiwga2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlGcmFnbWVudHMgPSAkLnNwbGl0KGtleSwgJy4nLCAnLycpO1xuICAgICAgICBmb3IgKGxldCBrZXlGcmFnbWVudCBvZiBrZXlGcmFnbWVudHMpIHtcbiAgICAgICAgICAgIGlmICgob2JqID0gb2JqW2tleUZyYWdtZW50XSkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQuaXNBcnJheShkZWZhdWx0VmFsdWUpICYmICEkLmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgb2JqID0gJC5tYWtlQXJyYXkob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthcHBlbmRBcnJheV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZ1bGxrZXlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24oYXBwZW5kQXJyYXksIG9iaiwgZnVsbGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IGFyZ3MgPSAkLm1ha2VBcnJheShhcmd1bWVudHMpO1xuICAgICAgICBhcHBlbmRBcnJheSA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBvYmogPSB0eXBlb2YgYXJncy5maXJzdCgpID09PSAnb2JqZWN0JyB8fCAkLmlzRnVuY3Rpb24oYXJncy5maXJzdCgpKSA/IGFyZ3Muc2hpZnQoKSA6IHt9O1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3MuZmlyc3QoKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qga2V5IG11c3QgYmUgc3RyaW5nIHR5cGUgOiBcIiArIGFyZ3MuZmlyc3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVsbGtleSA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgdmFsdWUgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGxldCBrZXlzID0gJC5tYXAoJC5zcGxpdChmdWxsa2V5LCAnLicsICcvJyksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgaWYgKC9eKFteXFxbXSspP1xcWyhbXlxcXV0rKT9cXF0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBpbktleXMgPSBba2V5Lm1hdGNoKC9eKFteXFxbXSspPy8pWzFdXTtcbiAgICAgICAgICAgICAgICBsZXQgaW5CcmFja2V0ID0gL1xcWyhbXlxcXV0rKT9cXF0vZztcbiAgICAgICAgICAgICAgICBsZXQgbmV4dE1hdGNoZXM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5leHRNYXRjaGVzID0gaW5CcmFja2V0LmV4ZWMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpbktleXMucHVzaChuZXh0TWF0Y2hlc1sxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpbktleXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGlzTnVsbCA9IChvLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEoa2V5IGluIG8gJiYgKG9ba2V5XSAhPSBudWxsKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChpZ25vcmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgY3Vyck9iaiA9IG9iajtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFwcGVuZEFycmF5IHx8IGlzTnVsbChjdXJyT2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJC5pc0FycmF5KGN1cnJPYmpba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyck9ialtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XSA9IFtjdXJyT2JqW2tleV0sIHZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTnVsbChjdXJyT2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZXlzW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzW2kgKyAxXSA9ICcwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3Vyck9ialtrZXldID0gL15cXGQrJC8udGVzdChrZXlzW2kgKyAxXSkgPyBbXSA6IHt9O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAga2V5c1tpICsgMV0gPSAkLmlzQXJyYXkoY3Vyck9ialtrZXldKSA/IGN1cnJPYmpba2V5XS5sZW5ndGggKyAnJyA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3Vyck9iaiA9IGN1cnJPYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdlbmVyYWxpemU6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoISQuaXNQbGFpbk9iamVjdChvYmopKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGtleS5jb250YWlucygnLicpIHx8IC9cXFsoXFx3Kyk/XFxdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5vYmouc2V0KHRydWUsIHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcF1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthcHBlbmRBcnJheV1cbiAgICAgKiBAcGFyYW0geyp8T2JqZWN0fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0geyp8QXJndW1lbnRzPE9iamVjdD59IHNvdXJjZXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtleHRlbmRJZlVuZGVmaW5lZF1cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZXh0ZW5kOiBmdW5jdGlvbihkZWVwLCBhcHBlbmRBcnJheSwgdGFyZ2V0LCBzb3VyY2VzLCBleHRlbmRJZlVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgYXJncyA9ICQubWFrZUFycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgIGRlZXAgPSB0eXBlb2YgYXJncy5maXJzdCgpID09PSAnYm9vbGVhbicgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZTtcbiAgICAgICAgYXBwZW5kQXJyYXkgPSB0eXBlb2YgYXJncy5maXJzdCgpID09PSAnYm9vbGVhbicgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZTtcbiAgICAgICAgZXh0ZW5kSWZVbmRlZmluZWQgPSB0eXBlb2YgYXJncy5sYXN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3MucG9wKCkgOiBmYWxzZTtcbiAgICAgICAgdGFyZ2V0ID0gYXJncy5sZW5ndGggPT09IDEgPyB7fSA6IGFyZ3Muc2hpZnQoKSB8fCB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmICEkLmlzRnVuY3Rpb24odGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgc291cmNlcyA9IGFyZ3M7XG4gICAgICAgIGZvciAobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gdGFyZ2V0W25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHkgPSBzb3VyY2VbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBjb3B5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weUlzQXJyYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWVwICYmIGNvcHkgJiYgKCQuaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSAkLmlzQXJyYXkoY29weSkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29weUlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyY0lzUGxhaW5PYmplY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyYyA9PT0gdm9pZCAwIHx8IChzcmNJc1BsYWluT2JqZWN0ID0gJC5pc1BsYWluT2JqZWN0KHNyYykpIHx8ICFleHRlbmRJZlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gJC5vYmouZXh0ZW5kKGRlZXAsIGFwcGVuZEFycmF5LCAoc3JjSXNQbGFpbk9iamVjdCA/IHNyYyA6IHt9KSwgY29weSwgZXh0ZW5kSWZVbmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcmMgPT09IHZvaWQgMCB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gJC5tZXJnZSgoYXBwZW5kQXJyYXkgJiYgJC5pc0FycmF5KHNyYykgPyBzcmMgOiBbXSksICQub2JqLmV4dGVuZChkZWVwLCBbXSwgY29weSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29weSAhPT0gdm9pZCAwICYmIChzcmMgPT09IHZvaWQgMCB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IG5ldyBEYXRlKGNvcHkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcHkgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5Lmdsb2JhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFncyArPSAnZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkuaWdub3JlQ2FzZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFncyArPSAnaSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkubXVsdGlsaW5lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzICs9ICdtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5zdGlja3kgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MgKz0gJ3knO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IG5ldyBSZWdFeHAoY29weS5zb3VyY2UsIGZsYWdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBjb3B5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGtleVZhbHVlUGFpcnNcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgbWFrZTogZnVuY3Rpb24oLi4ua2V5VmFsdWVQYWlycykge1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5VmFsdWVQYWlycy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgb2JqW2tleVZhbHVlUGFpcnNbaV1dID0ga2V5VmFsdWVQYWlyc1tpICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBlbXB0eTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxufTtcblxuZm9yIChsZXQga2V5IGluICQub2JqKSB7XG4gICAgbGV0IHNob3J0S2V5ID0ga2V5ICsgJ09iamVjdCc7XG4gICAgaWYgKCEoc2hvcnRLZXkgaW4gJCkpIHtcbiAgICAgICAgaWYgKCQub2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICRbc2hvcnRLZXldID0gJC5vYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgJC5vYmo7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvb2JqLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXBhcmF0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZXNjYXBlQ2hhcl1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGltaXRdXG4gKiBAcmV0dXJuIHtBcnJheTxTdHJpbmc+fVxuICovXG4kLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBzZXBhcmF0b3IsIGVzY2FwZUNoYXIsIGxpbWl0KSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc3RyICsgJyBpcyBub3QgYSBzdHJpbmcnKTtcbiAgICB9XG4gICAgc3RyID0gc3RyLnRvU3RyaW5nKCk7XG4gICAgaWYgKHR5cGVvZiBzZXBhcmF0b3IgPT09ICdudW1iZXInKSB7XG4gICAgICAgIFtsaW1pdCwgc2VwYXJhdG9yLCBlc2NhcGVDaGFyXSA9IFtzZXBhcmF0b3IsIG51bGwsIG51bGxdXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXNjYXBlQ2hhciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgW2xpbWl0LCBlc2NhcGVDaGFyXSA9IFtlc2NhcGVDaGFyLCBudWxsXVxuICAgIH1cbiAgICBsZXQgbGltaXRlZCA9IChpKSA9PiAoMCA8IGxpbWl0ICYmIGxpbWl0IDw9IGkgKyAxKTtcbiAgICBsZXQgcGFydHMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHMgPSAwO1xuICAgIGxldCBwO1xuICAgIHdoaWxlICgocCA9IHN0ci5pbmRleE9mKHNlcGFyYXRvciwgcykpICE9PSAtMSAmJiAhbGltaXRlZChpKSkge1xuICAgICAgICBsZXQgcGFydCA9IHN0ci5zbGljZShzLCBwKTtcbiAgICAgICAgbGV0IGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVzY2FwZUNoYXIgJiYgcGFydC5zbGljZSgtMSkgPT09IGVzY2FwZUNoYXIpIHtcbiAgICAgICAgICAgIHBhcnQgPSBwYXJ0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIGVzY2FwZWQgPSBwYXJ0LnNsaWNlKC0xKSAhPT0gZXNjYXBlQ2hhcjtcbiAgICAgICAgICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgcGFydCArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGFydHNbaV0gPSAocGFydHNbaV0gfHwgJycpICsgcGFydDtcbiAgICAgICAgcyA9IHAgKyAxO1xuICAgICAgICBpZiAoIWVzY2FwZWQpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocyA8PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHBhcnRzW2ldID0gKHBhcnRzW2ldIHx8ICcnKSArIHN0ci5zbGljZShzKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5zcGxpdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NwbGl0LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtqUXVlcnk8SFRNTEVsZW1lbnQ+fVxuICovXG4kLmZuLmZpbmRCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZCgnW25hbWU9XCInICsgKG5hbWUgfHwgJycpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSArICdcIl0nKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZmluZEJ5TmFtZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbmRCeU5hbWUuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBuYW1lc1xuICogQHJldHVybiB7alF1ZXJ5PEhUTUxFbGVtZW50Pn1cbiAqL1xuJC5mbi5maW5kQnlOYW1lcyA9IGZ1bmN0aW9uKC4uLm5hbWVzKSB7XG4gICAgaWYgKG5hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbmQobmFtZXMubWFwKG5hbWUgPT4gJ1tuYW1lPVwiJyArIChuYW1lIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCJdJykuam9pbignLCcpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZmluZEJ5TmFtZXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maW5kQnlOYW1lcy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuJC5mbi5ncm91cEJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBlbGVtID0gdGhpc1tpXTtcbiAgICAgICAgbGV0IGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBlbGVtLCBlbGVtLCBpLCB0aGlzKTtcbiAgICAgICAgaWYgKGtleSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gcmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gJChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHRoaXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLmdyb3VwQnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JvdXBCeS5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxIVE1MRWxlbWVudD58alF1ZXJ5PEhUTUxFbGVtZW50Pn0gZXhjbHVkZXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5mbi5tYXhaSW5kZXggPSBmdW5jdGlvbihleGNsdWRlcykge1xuICAgIGxldCB6SW5kZXggPSAwO1xuICAgIHRoaXMuZmluZCgnOnZpc2libGUnKS5hbmRTZWxmKCkuYWRkKHRoaXMucGFyZW50c1VudGlsKCdodG1sJykpLm5vdChleGNsdWRlcykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUgIT09ICcjZG9jdW1lbnQnKSB7XG4gICAgICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKFsnYWJzb2x1dGUnLCAncmVsYXRpdmUnLCAnZml4ZWQnXS5jb250YWlucygkdGhpcy5jc3MoJ3Bvc2l0aW9uJykpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoJHRoaXMuY3NzKCd6SW5kZXgnKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkgJiYgdmFsdWUgPiB6SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgekluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHpJbmRleDtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIE1heCB6SW5kZXggZnJvbSBkb2N1bWVudCBib2R5LlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8SFRNTEVsZW1lbnQ+fGpRdWVyeTxIVE1MRWxlbWVudD59IGV4Y2x1ZGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbiQubWF4WkluZGV4ID0gKGV4Y2x1ZGVzKSA9PiAkKGRvY3VtZW50LmJvZHkpLm1heFpJbmRleChleGNsdWRlcyk7XG5cbmV4cG9ydCBkZWZhdWx0ICQubWF4WkluZGV4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWF4WkluZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3dpbmRvdycpLmRvY3VtZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9kb2N1bWVudC5qc1xuICoqLyIsImlmICghZ2xvYmFsLmRvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5LmV4dGVuZHMgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvd2luZG93LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbiQubmV4dFRpY2sgPSAoY2FsbGJhY2spID0+IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuXG5leHBvcnQgZGVmYXVsdCAkLm5leHRUaWNrO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbmV4dFRpY2suanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtib29sZWFufSBkYXRhQW5kRXZlbnRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRlZXBEYXRhQW5kRXZlbnRzXG4gKiBAcmV0dXJuIHtqUXVlcnl9XG4gKi9cbiQuZm4ucmVjbG9uZSA9IGZ1bmN0aW9uKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb2xkRWxlbSA9ICQodGhpcyk7XG4gICAgICAgIGxldCBuZXdFbGVtID0gb2xkRWxlbS5jbG9uZShkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyk7XG4gICAgICAgIG5ld0VsZW0uaW5zZXJ0QWZ0ZXIodGhpcyk7XG4gICAgICAgIG9sZEVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBuZXdFbGVtWzBdO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5yZWNsb25lO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlY2xvbmUuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICogQHBhcmFtIHtBcnJheTx7bmFtZSx2YWx1ZX0+fSBwYXJhbXNcbiAqIEByZXR1cm4ge251bWJlcn0gbGVuZ3RoIG9mIHBhcmFtZXRlcnNcbiAqL1xuJC5yZWluZGV4QXJyYXlQYXJhbXMgPSBmdW5jdGlvbihwcmVmaXgsIHBhcmFtcykge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgcHJlZml4LnJlcGxhY2UoJy4nLCAnXFxcXC4nKSArICcpXFxcXFsoXFxcXGQrKVxcXFxdJyk7XG4gICAgbGV0IHByZXZJbmRleCA9IG51bGw7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgcGFyYW0gb2YgcGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gcmVnZXguZXhlYyhwYXJhbS5uYW1lKTtcbiAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGxldCBjdXJySW5kZXggPSByZXN1bHRzWzJdO1xuICAgICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gY3VyckluZGV4KSB7XG4gICAgICAgICAgICAgICAgcHJldkluZGV4ID0gY3VyckluZGV4O1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJhbS5uYW1lID0gcGFyYW0ubmFtZS5yZXBsYWNlKHJlZ2V4LCAnJDFbJyArIGluZGV4ICsgJ10nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnJlaW5kZXhBcnJheVBhcmFtcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWluZGV4QXJyYXlQYXJhbXMuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4ucmV2ZXJzZSA9IEFycmF5LnByb3RvdHlwZS5yZXZlcnNlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmV2ZXJzZS5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG4kLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoISQuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhjZXB0ICYmICEkLmlzQXJyYXkob3B0aW9ucy5leGNlcHQpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmV4Y2VwdCA9IFtvcHRpb25zLmV4Y2VwdF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICQuZWFjaCh0aGlzLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob3B0aW9ucy5leGNlcHQgPT0gbnVsbCB8fCAhb3B0aW9ucy5leGNlcHQuY29udGFpbnModGhpcy5uYW1lKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQuaXNBcnJheShyZXN1bHRbdGhpcy5uYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3RoaXMubmFtZV0gPSBbcmVzdWx0W3RoaXMubmFtZV0sIHRoaXMudmFsdWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbdGhpcy5uYW1lXSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5zZXJpYWxpemVPYmplY3Q7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VyaWFsaXplT2JqZWN0LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4kLnNvbWUgPSBmdW5jdGlvbihpdGVtcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBpZiAoJC5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IGl0ZW1zLCBpdGVtc1tpXSwgaSwgaXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCQuaXNQbGFpbk9iamVjdChpdGVtcykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgaXRlbXMsIGl0ZW1zW2tleV0sIGtleSwgaXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoaXRlbXMgKyBcIiBpcyBub3QgYXJyYXkgb3IgcGxhaW4gb2JqZWN0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zb21lLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4kLnN1cHBvcnRzSW5wdXRUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IHR5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnN1cHBvcnRzSW5wdXRUeXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3VwcG9ydHNJbnB1dFR5cGUuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtYTUx9IHhtbE5vZGUgdGhlIHhtbCBub2RlLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG4kLnhtbFRvU3RyaW5nID0gZnVuY3Rpb24oeG1sTm9kZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoeG1sTm9kZSk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIGlmICh4bWxOb2RlLnhtbCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJYTUxTZXJpYWxpemVyIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhtbE5vZGUueG1sO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQueG1sVG9TdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy94bWxUb1N0cmluZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=