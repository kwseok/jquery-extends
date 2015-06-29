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
	            return a > b ? a : b;
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
	            return a < b ? a : b;
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
	
	        checkbyte = ['boolean', 'number'].contains(typeof argCurr()) ? argShift() : false;
	
	        if (typeof argCurr() !== 'number') {
	            throw new TypeError(argCurr() + ' is not a number');
	        }
	        maxLength = argShift();
	
	        suffix = typeof argCurr() === 'string' ? argShift() : '';
	
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
	
	        checkbyte = ['boolean', 'number'].contains(typeof argCurr()) ? argShift() : false;
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
	 * @param {string} queryString
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
	    } else if (options.except && !_jquery2['default'].isArray(options.except)) {
	        options.except = [options.except];
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
	
	        function isNull(o, key) {
	            try {
	                return !(key in o && o[key] != null);
	            } catch (ignored) {
	                return false;
	            }
	        }
	
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
	     * @param {*|...Object} sources
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
	                            if (copy === target) continue;
	                            var copyIsArray = false;
	                            if (deep && copy && (_jquery2['default'].isPlainObject(copy) || (copyIsArray = _jquery2['default'].isArray(copy)))) {
	                                if (!copyIsArray) {
	                                    var srcIsPlainObject = false;
	                                    if (src === undefined || (srcIsPlainObject = _jquery2['default'].isPlainObject(src)) || !extendIfUndefined) {
	                                        target[_name] = _jquery2['default'].obj.extend(deep, appendArray, srcIsPlainObject ? src : {}, copy, extendIfUndefined);
	                                    }
	                                } else if (src === undefined || !extendIfUndefined) {
	                                    target[_name] = _jquery2['default'].merge(appendArray && _jquery2['default'].isArray(src) ? src : [], _jquery2['default'].obj.extend(deep, [], copy));
	                                }
	                            } else if (copy !== undefined && (src === undefined || !extendIfUndefined)) {
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
	 * @return {Array<string>}
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
	
	    function limited(i) {
	        return 0 < limit && limit <= i + 1;
	    }
	
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
	 * @param {string} name
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
	        if (key !== undefined) {
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
	 * @return {jQuery<HTMLElement>}
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
	    } else if (options.except && !_jquery2['default'].isArray(options.except)) {
	        options.except = [options.except];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3MTJhMDEyZDcxMTY5OGVkNjkyNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy8uL3NyYy9wcm90by9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvaW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2V2ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZmxhdE1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2ZpcnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2dyb3VwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9ncm91cGVkUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvam9pblBhdGhzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL21heC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vcmVnZXhwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vcmVnZXhwcy9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvYW50U3R5bGVQYXRoVG9SZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9icjJubC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy94bWxVbmVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9jb21wYXJlVG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvY3V0c3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2dldExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9lbmRzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvZm9ybWF0VmFyaWFibGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2dyb3VwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2xlZnRQYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvcmVwZWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL25sMmJyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3htbEVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9xdW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9yaWdodFBhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9zdGFydHNXaXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3VucXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2VyaWFsaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwbGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9maW5kQnlOYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9maW5kQnlOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF4WkluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV4dFRpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlaW5kZXhBcnJheVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VyaWFsaXplT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdXBwb3J0c0lucHV0VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMveG1sVG9TdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7bUNDdENtQixDQUFROzs7O3FCQUNwQixDQUFlOztxQkFDZixFQUFlOztxQkFDZixFQUFjOztxQkFDZCxFQUFlOztxQkFDZixFQUFXOztxQkFDWCxFQUFhOztxQkFDYixFQUFZOztxQkFDWixFQUFPOztxQkFDUCxFQUFXOztxQkFDWCxFQUFzQjs7cUJBQ3RCLEVBQVc7O3FCQUNYLEVBQW1COztxQkFDbkIsRUFBUTs7cUJBQ1IsRUFBUzs7cUJBQ1QsRUFBcUI7O3FCQUNyQixFQUFlOzs7Ozs7Ozs7QUNoQnRCLGdEOzs7Ozs7OztBQ0FBLE9BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixXQUFNLEVBQUUsbUJBQU8sQ0FBQyxDQUFVLENBQUM7QUFDM0IsWUFBTyxFQUFFLG1CQUFPLENBQUMsRUFBVyxDQUFDO0FBQzdCLFlBQU8sRUFBRSxtQkFBTyxDQUFDLEVBQVcsQ0FBQztFQUNoQyxDOzs7Ozs7OztBQ0pELE9BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixhQUFRLEVBQUUsbUJBQU8sQ0FBQyxDQUFtQixDQUFDO0FBQ3RDLFVBQUssRUFBRSxtQkFBTyxDQUFDLENBQWdCLENBQUM7QUFDaEMsV0FBTSxFQUFFLG1CQUFPLENBQUMsQ0FBaUIsQ0FBQztBQUNsQyxVQUFLLEVBQUUsbUJBQU8sQ0FBQyxFQUFnQixDQUFDO0FBQ2hDLFlBQU8sRUFBRSxtQkFBTyxDQUFDLENBQWtCLENBQUM7QUFDcEMsWUFBTyxFQUFFLG1CQUFPLENBQUMsRUFBa0IsQ0FBQztBQUNwQyxZQUFPLEVBQUUsbUJBQU8sQ0FBQyxFQUFrQixDQUFDO0FBQ3BDLGlCQUFZLEVBQUUsbUJBQU8sQ0FBQyxFQUF1QixDQUFDO0FBQzlDLFlBQU8sRUFBRSxtQkFBTyxDQUFDLEVBQWtCLENBQUM7QUFDcEMsWUFBTyxFQUFFLG1CQUFPLENBQUMsQ0FBa0IsQ0FBQztBQUNwQyxZQUFPLEVBQUUsbUJBQU8sQ0FBQyxDQUFrQixDQUFDO0FBQ3BDLGNBQVMsRUFBRSxtQkFBTyxDQUFDLEVBQW9CLENBQUM7QUFDeEMsU0FBSSxFQUFFLG1CQUFPLENBQUMsRUFBZSxDQUFDO0FBQzlCLFFBQUcsRUFBRSxtQkFBTyxDQUFDLEVBQWMsQ0FBQztBQUM1QixRQUFHLEVBQUUsbUJBQU8sQ0FBQyxFQUFjLENBQUM7QUFDNUIsUUFBRyxFQUFFLG1CQUFPLENBQUMsRUFBYyxDQUFDO0FBQzVCLFVBQUssRUFBRSxtQkFBTyxDQUFDLEVBQWdCLENBQUM7QUFDaEMsV0FBTSxFQUFFLG1CQUFPLENBQUMsRUFBaUIsQ0FBQztBQUNsQyxXQUFNLEVBQUUsbUJBQU8sQ0FBQyxFQUFpQixDQUFDO0FBQ2xDLFNBQUksRUFBRSxtQkFBTyxDQUFDLEVBQWUsQ0FBQztFQUNqQyxDOzs7Ozs7Ozs7OztBQ3JCRCxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTs7Ozs7O0FBTWhCLFVBQUssQ0FBQyxPQUFPLEdBQUcsVUFBUyxHQUFHLEVBQUU7QUFDMUIsZ0JBQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGdCQUFnQixDQUFDO01BQ25FLENBQUM7RUFDTDs7c0JBRWMsS0FBSyxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7cUJDWHJCLENBQVc7O0FBRWxCLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTs7Ozs7QUFLM0IsVUFBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBUyxDQUFDLEVBQUU7QUFDbkMsZ0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDL0I7RUFDSjs7c0JBRWMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7QUNadkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFOzs7OztBQUsxQixVQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFTLElBQUksRUFBRTtBQUNyQyxjQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsQyxpQkFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDL0Isd0JBQU8sQ0FBQyxDQUFDO2NBQ1o7VUFDSjtBQUNELGdCQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2IsQ0FBQztFQUNMOztzQkFFYyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7Ozs7Ozs7OztBQ2Z0QyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7Ozs7OztBQU14QixVQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFTLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDaEQsY0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbEMsaUJBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtBQUNuRCx3QkFBTyxLQUFLLENBQUM7Y0FDaEI7VUFDSjtBQUNELGdCQUFPLElBQUksQ0FBQztNQUNmLENBQUM7RUFDTDs7c0JBRWMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7O3FCQ2hCN0IsQ0FBVzs7QUFFbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFOzs7Ozs7QUFNekIsVUFBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFFOzs7QUFDakQsZ0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDMUIsaUJBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLFNBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFPLEVBQUU7QUFDNUMsd0JBQU8sQ0FBQyxDQUFDO2NBQ1o7VUFDSixDQUFDLENBQUM7TUFDTixDQUFDO0VBQ0w7O3NCQUVjLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7OztxQkNqQjlCLENBQVc7O0FBRWxCLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTs7Ozs7O0FBTTFCLFVBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUNsRCxhQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDakIsY0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbEMsaUJBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlELGlCQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDdkIsd0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztjQUN2QyxNQUFNLElBQUksTUFBTSxFQUFFO0FBQ2Ysd0JBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Y0FDeEI7VUFDSjtBQUNELGdCQUFPLE9BQU8sQ0FBQztNQUNsQjtFQUNKOztzQkFFYyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7Ozs7Ozs7OztBQ3RCdEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQ3hCLFVBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFlBQVc7QUFDL0IsZ0JBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xCLENBQUM7RUFDTDs7c0JBRWMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7QUNOcEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFOzs7Ozs7QUFNMUIsVUFBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ2xELGFBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3pCLG1CQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO1VBQ3BEO0FBQ0QsYUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2xDLGlCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsaUJBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELGlCQUFJLEdBQUcsRUFBRTtBQUNMLHFCQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFDZiwyQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztrQkFDM0IsTUFBTTtBQUNILDJCQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztrQkFDekI7Y0FDSjtVQUNKO0FBQ0QsZ0JBQU8sTUFBTSxDQUFDO01BQ2pCLENBQUM7RUFDTDs7c0JBRWMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7QUMxQnRDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTs7Ozs7QUFLMUIsVUFBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBUyxJQUFJLEVBQUU7QUFDckMsYUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7VUFDekM7QUFDRCxnQkFBTyxPQUFPLENBQUM7TUFDbEIsQ0FBQztFQUNMOztzQkFFYyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7Ozs7Ozs7OztBQ2R0QyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7Ozs7O0FBSy9CLFVBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzFDLGFBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNqQixjQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO0FBQ3hDLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDdEQ7QUFDRCxnQkFBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7TUFDNUIsQ0FBQztFQUNMOztzQkFFYyxLQUFLLENBQUMsU0FBUyxDQUFDLFlBQVk7Ozs7Ozs7Ozs7Ozs7cUJDZHBDLENBQVc7O0FBRWxCLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUMxQixVQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFTLENBQUMsRUFBRTtBQUNsQyxhQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLGFBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1IsaUJBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDZixNQUFNO0FBQ0gsaUJBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDaEI7QUFDRCxnQkFBTyxJQUFJLENBQUM7TUFDZixDQUFDO0VBQ0w7O3NCQUVjLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7O0FDZHRDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtBQUM1QixVQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxZQUFXO0FBQ25DLGFBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2xDLGlCQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNULHFCQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7QUFDekQseUJBQUksSUFBSSxHQUFHLENBQUM7a0JBQ2Y7QUFDRCxxQkFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztjQUM5QjtVQUNKO0FBQ0QsZ0JBQU8sSUFBSSxDQUFDO01BQ2YsQ0FBQztFQUNMOztzQkFFYyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7Ozs7Ozs7OztBQ2Z4QyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDdkIsVUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBVztBQUM5QixnQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztNQUNoQyxDQUFDO0VBQ0w7O3NCQUVjLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7O0FDTm5DLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTs7Ozs7QUFLdEIsVUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQzlDLGFBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixjQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNuQyxtQkFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1VBQ2pFO0FBQ0QsZ0JBQU8sTUFBTSxDQUFDO01BQ2pCO0VBQ0o7O3NCQUVjLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7OztxQkNkM0IsRUFBVTs7QUFFakIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3RCLFVBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFlBQVc7QUFDN0IsZ0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO29CQUFNLENBQUMsR0FBRyxDQUFDLEdBQUksQ0FBQyxHQUFHLENBQUM7VUFBQSxDQUFDLENBQUM7TUFDakQ7RUFDSjs7c0JBRWMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7QUNSbEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFOzs7Ozs7QUFNekIsVUFBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ2pELGFBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ3BCLG1CQUFNLElBQUksU0FBUyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7VUFDdEU7QUFDRCxhQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsY0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbkMsbUJBQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7VUFDckU7QUFDRCxnQkFBTyxNQUFNLENBQUM7TUFDakIsQ0FBQztFQUNMOztzQkFFYyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7cUJDbEI5QixFQUFVOztBQUVqQixLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDdEIsVUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsWUFBVztBQUM3QixnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQU0sQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQztVQUFBLENBQUMsQ0FBQztNQUNqRDtFQUNKOztzQkFFYyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7OztBQ1JsQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTs7Ozs7Ozs7QUFRZCxVQUFLLENBQUMsS0FBSyxHQUFHLFVBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7QUFDbkMsYUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsYUFBSSxRQUFRLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQztBQUNsRSxhQUFJLEtBQUssR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUQsYUFBSSxHQUFHLEdBQUcsUUFBUSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RELGNBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDM0Qsa0JBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDckQ7QUFDRCxnQkFBTyxLQUFLLENBQUM7TUFDaEIsQ0FBQztFQUNMOztzQkFFYyxLQUFLLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7O0FDcEIxQixLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDekIsVUFBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBUyxDQUFDLEVBQUU7QUFDakMsY0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3ZDLGlCQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDZixxQkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsdUJBQU07Y0FDVDtVQUNKO0FBQ0QsZ0JBQU8sSUFBSSxDQUFDO01BQ2YsQ0FBQztFQUNMOztzQkFFYyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Ozs7Ozs7OztBQ1pyQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7Ozs7OztBQU12QixVQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDL0MsYUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDekIsbUJBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDLENBQUM7VUFDcEQ7QUFDRCxjQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsQyxpQkFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQztVQUNyRTtBQUNELGdCQUFPLEtBQUssQ0FBQztNQUNoQixDQUFDO0VBQ0w7O3NCQUVjLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSTs7Ozs7Ozs7O0FDakJuQyxPQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsV0FBTSxFQUFFLG1CQUFPLENBQUMsRUFBa0IsQ0FBQztFQUN0QyxDOzs7Ozs7Ozs7OztBQ0ZELEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFOzs7Ozs7QUFNaEIsV0FBTSxDQUFDLE1BQU0sR0FBRyxVQUFTLElBQUksRUFBRTtBQUMzQixnQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxDQUFDO01BQzNELENBQUM7RUFDTDs7c0JBRWMsTUFBTSxDQUFDLE1BQU07Ozs7Ozs7OztBQ1g1QixPQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsMEJBQXFCLEVBQUUsbUJBQU8sQ0FBQyxFQUErQixDQUFDO0FBQy9ELFlBQU8sRUFBRSxtQkFBTyxDQUFDLEVBQWlCLENBQUM7QUFDbkMsZ0JBQVcsRUFBRSxtQkFBTyxDQUFDLEVBQXFCLENBQUM7QUFDM0MsZUFBVSxFQUFFLG1CQUFPLENBQUMsRUFBb0IsQ0FBQztBQUN6QyxnQkFBVyxFQUFFLG1CQUFPLENBQUMsRUFBcUIsQ0FBQztBQUMzQyxlQUFVLEVBQUUsbUJBQU8sQ0FBQyxFQUFvQixDQUFDO0FBQ3pDLGFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQWtCLENBQUM7QUFDckMsc0JBQWlCLEVBQUUsbUJBQU8sQ0FBQyxFQUEyQixDQUFDO0FBQ3ZELGdCQUFXLEVBQUUsbUJBQU8sQ0FBQyxFQUFxQixDQUFDO0FBQzNDLGNBQVMsRUFBRSxtQkFBTyxDQUFDLEVBQW1CLENBQUM7QUFDdkMsbUJBQWMsRUFBRSxtQkFBTyxDQUFDLEVBQXdCLENBQUM7QUFDakQsY0FBUyxFQUFFLG1CQUFPLENBQUMsRUFBbUIsQ0FBQztBQUN2QyxZQUFPLEVBQUUsbUJBQU8sQ0FBQyxFQUFpQixDQUFDO0FBQ25DLFlBQU8sRUFBRSxtQkFBTyxDQUFDLEVBQWlCLENBQUM7QUFDbkMsWUFBTyxFQUFFLG1CQUFPLENBQUMsRUFBaUIsQ0FBQztBQUNuQyxhQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUFrQixDQUFDO0FBQ3JDLGVBQVUsRUFBRSxtQkFBTyxDQUFDLEVBQW9CLENBQUM7QUFDekMsaUJBQVksRUFBRSxtQkFBTyxDQUFDLEVBQXNCLENBQUM7QUFDN0MsY0FBUyxFQUFFLG1CQUFPLENBQUMsRUFBbUIsQ0FBQztBQUN2QyxnQkFBVyxFQUFFLG1CQUFPLENBQUMsRUFBcUIsQ0FBQztBQUMzQyxrQkFBYSxFQUFFLG1CQUFPLENBQUMsRUFBdUIsQ0FBQztFQUNsRCxDOzs7Ozs7Ozs7OztBQ3RCRCxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRTs7Ozs7QUFLdkMsV0FBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxVQUFTLElBQUksRUFBRTtBQUNsRCxhQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUMxQixtQkFBTSxJQUFJLFNBQVMsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsQ0FBQztVQUM3RDtBQUNELGFBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ3BCLG1CQUFNLElBQUksVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7VUFDbkQ7QUFDRCxhQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsYUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEQsYUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFTLEVBQUUsRUFBRTtBQUN0RSxxQkFBUSxFQUFFO0FBQ1Ysc0JBQUssS0FBSztBQUNOLDRCQUFPLGNBQWMsQ0FBQztBQUMxQixzQkFBSyxJQUFJO0FBQ0wsNEJBQU8sSUFBSSxDQUFDO0FBQ2hCLHNCQUFLLElBQUk7QUFDTCw0QkFBTyxpQkFBaUIsQ0FBQztBQUM3QixzQkFBSyxHQUFHO0FBQ0osNEJBQU8sT0FBTyxDQUFDO0FBQ25CLHNCQUFLLEdBQUc7QUFDSiw0QkFBTyxNQUFNLENBQUM7QUFDbEIsc0JBQUssR0FBRztBQUNKLDRCQUFPLE9BQU8sQ0FBQztBQUFBLGNBQ2xCO1VBQ0osQ0FBQyxDQUFDO0FBQ0gsZ0JBQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztNQUM1QyxDQUFDO0VBQ0w7QUFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7QUFDckIsV0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQztFQUM3RDs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7cUJDckM1QyxFQUFlOztBQUV0QixLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7Ozs7O0FBS3pCLFdBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVMsV0FBVyxFQUFFO0FBQzNDLGFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEQsYUFBSSxXQUFXLEVBQUU7QUFDYixvQkFBTyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7VUFDL0IsTUFBTTtBQUNILG9CQUFPLE1BQU0sQ0FBQztVQUNqQjtNQUNKLENBQUM7RUFDTDs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7QUNqQnJDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtBQUMvQixXQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxZQUFXO0FBQ3RDLGdCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsVUFBUyxFQUFFLEVBQUU7QUFDL0QscUJBQVEsRUFBRTtBQUNWLHNCQUFLLE1BQU07QUFDUCw0QkFBTyxHQUFHLENBQUM7QUFDZixzQkFBSyxNQUFNO0FBQ1AsNEJBQU8sR0FBRyxDQUFDO0FBQ2Ysc0JBQUssT0FBTztBQUNSLDRCQUFPLEdBQUcsQ0FBQztBQUNmLHNCQUFLLE9BQU87QUFDUiw0QkFBTyxJQUFHLENBQUM7QUFDZixzQkFBSyxPQUFPO0FBQ1IsNEJBQU8sR0FBRyxDQUFDO0FBQ2Y7QUFDSSw0QkFBTyxFQUFFLENBQUM7QUFBQSxjQUNiO1VBQ0osQ0FBQyxDQUFDO01BQ047RUFDSjs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7QUNyQjNDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtBQUM3QixXQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFTLEdBQUcsRUFBRTtBQUN2QyxpQkFBUSxLQUFLO0FBQ2Isa0JBQUssRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDO0FBQ2Ysd0JBQU8sQ0FBQyxDQUFDO0FBQ2Isa0JBQUssRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2Qsd0JBQU8sQ0FBQyxDQUFDO0FBQ2Isa0JBQUssRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2Qsd0JBQU8sQ0FBQyxDQUFDLENBQUM7QUFDZDtBQUNJLHdCQUFPLENBQUMsQ0FBQztBQUFBLFVBQ1o7TUFDSixDQUFDO0VBQ0w7O3NCQUVjLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUzs7Ozs7Ozs7Ozs7O0FDZnpDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTs7OztBQUk1QixXQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLEdBQUcsRUFBRTtBQUN0QyxnQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ2pDLENBQUM7RUFDTDs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7O3FCQ1RqQyxDQUFvQjs7cUJBQ3BCLEVBQWE7O0FBRXBCLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTs7Ozs7OztBQU83QixXQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFTLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFOzs7QUFDaEUsYUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLGFBQUksT0FBTyxHQUFHLFNBQVYsT0FBTztvQkFBUyxXQUFVLFFBQVEsQ0FBQztVQUFBLENBQUM7QUFDeEMsYUFBSSxRQUFRLEdBQUcsU0FBWCxRQUFRO29CQUFTLFdBQVUsUUFBUSxFQUFFLENBQUM7VUFBQSxDQUFDOztBQUUzQyxrQkFBUyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLE9BQU8sRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDOztBQUVsRixhQUFJLE9BQU8sT0FBTyxFQUFFLEtBQUssUUFBUSxFQUFFO0FBQy9CLG1CQUFNLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLGtCQUFrQixDQUFDLENBQUM7VUFDdkQ7QUFDRCxrQkFBUyxHQUFHLFFBQVEsRUFBRSxDQUFDOztBQUV2QixlQUFNLEdBQUcsT0FBTyxPQUFPLEVBQUUsS0FBSyxRQUFRLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDOztBQUV6RCxhQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZDLGFBQUksRUFBRSxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUU7QUFDdkIsb0JBQU8sSUFBSSxDQUFDO1VBQ2Y7O0FBRUQsYUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQyxhQUFJLFlBQVksR0FBRyxTQUFTLEVBQUU7QUFDMUIsbUJBQU0sSUFBSSxVQUFVLENBQUMsNENBQTRDLENBQUMsQ0FBQztVQUN0RTtBQUNELGFBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN0QixhQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDdEIsY0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbEMsaUJBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsaUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsaUJBQUksYUFBYSxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsWUFBWSxFQUFFO0FBQzlDLHVCQUFNO2NBQ1Q7QUFDRCwwQkFBYSxJQUFJLENBQUMsQ0FBQztBQUNuQix5QkFBWSxJQUFJLENBQUMsQ0FBQztVQUNyQjtBQUNELGdCQUFPLFlBQVksR0FBRyxNQUFNLENBQUM7TUFDaEMsQ0FBQztFQUNMOztzQkFFYyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7cUJDaERsQyxDQUFvQjs7QUFFM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFOzs7OztBQUs3QixXQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFTLFNBQVMsRUFBRTs7O0FBQzdDLGFBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNqQixhQUFJLE9BQU8sR0FBRyxTQUFWLE9BQU87b0JBQVMsV0FBVSxRQUFRLENBQUM7VUFBQSxDQUFDO0FBQ3hDLGFBQUksUUFBUSxHQUFHLFNBQVgsUUFBUTtvQkFBUyxXQUFVLFFBQVEsRUFBRSxDQUFDO1VBQUEsQ0FBQzs7QUFFM0Msa0JBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxPQUFPLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztBQUNsRixhQUFJLFNBQVMsS0FBSyxLQUFLLEVBQUU7QUFDckIsb0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztVQUN0Qjs7QUFFRCxhQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDZixjQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsQyxpQkFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixxQkFBUSxLQUFLO0FBQ2Isc0JBQUssRUFBRSxDQUFDLElBQUksUUFBUSxDQUFDO0FBQ2pCLDJCQUFNLElBQUksQ0FBQyxDQUFDO0FBQ1osMkJBQU07QUFDVixzQkFBSyxFQUFFLE9BQU8sU0FBUyxLQUFLLFFBQVEsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELDJCQUFNLElBQUksU0FBUyxDQUFDO0FBQ3BCLDJCQUFNO0FBQ1Ysc0JBQUssRUFBRSxDQUFDLElBQUksUUFBUSxDQUFDO0FBQ2pCLDJCQUFNLElBQUksQ0FBQyxDQUFDO0FBQ1osMkJBQU07QUFDVixzQkFBSyxFQUFFLENBQUMsSUFBSSxRQUFRLENBQUM7QUFDakIsMkJBQU0sSUFBSSxDQUFDLENBQUM7QUFDWiwyQkFBTTtBQUNWO0FBQ0ksMkJBQU0sSUFBSSxDQUFDLENBQUM7QUFBQSxjQUNmO1VBQ0o7QUFDRCxnQkFBTyxNQUFNLENBQUM7TUFDakIsQ0FBQztFQUNMOztzQkFFYyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7Ozs7Ozs7OztBQ3pDekMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFOzs7OztBQUs1QixXQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLEdBQUcsRUFBRTtBQUN0QyxhQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLGdCQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDO01BQzlELENBQUM7RUFDTDs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7O3FCQ1hqQyxDQUFtQjs7QUFFMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO0FBQzFCLFdBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVc7QUFDakMsZ0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLFVBQVMsSUFBSSxFQUFFO0FBQzNELG9CQUFPLFVBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDeEIseUJBQVEsRUFBRTtBQUNWLDBCQUFLLElBQUk7QUFDTCxnQ0FBTyxHQUFHLENBQUM7QUFDZiwwQkFBSyxJQUFJO0FBQ0wsZ0NBQU8sR0FBRyxDQUFDO0FBQ2YsMEJBQUssSUFBSTtBQUNMLGdDQUFPLEdBQUcsQ0FBQztBQUNmO0FBQ0ksZ0NBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFBQSxrQkFDN0Y7Y0FDSixDQUFDO1VBQ0wsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO01BQ2xCO0VBQ0o7O3NCQUVjLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7O0FDckJ0QyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUU7Ozs7O0FBS25DLFdBQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFlBQVc7QUFDMUMsYUFBSSxLQUFLLEdBQUcseUJBQXlCLENBQUM7QUFDdEMsYUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGFBQUksT0FBTyxhQUFDO0FBQ1osZ0JBQU8sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDL0IsaUJBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixpQkFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtBQUNwRCwwQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUM5QjtVQUNKO0FBQ0QsZ0JBQU8sU0FBUyxDQUFDO01BQ3BCLENBQUM7RUFDTDs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlOzs7Ozs7Ozs7Ozs7QUNuQi9DLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTs7Ozs7QUFLM0IsV0FBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBUyxJQUFJLEVBQUU7QUFDdEMsYUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNiLG1CQUFNLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7VUFDOUM7QUFDRCxhQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUMxQixpQkFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7VUFDeEI7QUFDRCxhQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDakIsY0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRTtBQUN4QyxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztVQUN6QztBQUNELGdCQUFPLE9BQU8sQ0FBQztNQUNsQixDQUFDO0VBQ0w7O3NCQUVjLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7O0FDcEJ2QyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7Ozs7O0FBS2hDLFdBQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNDLGFBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDYixtQkFBTSxJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1VBQzlDO0FBQ0QsYUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDMUIsaUJBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1VBQ3hCO0FBQ0QsYUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGNBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN0RDtBQUNELGdCQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztNQUM1QixDQUFDO0VBQ0w7O3NCQUVjLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWTs7Ozs7Ozs7Ozs7OztxQkNwQnJDLEVBQVU7O0FBRWpCLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTs7Ozs7O0FBTTNCLFdBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVMsTUFBTSxFQUFFLFFBQVEsRUFBRTtBQUNsRCxhQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtBQUM1QixtQkFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztVQUNwRDtBQUNELGFBQUksQ0FBQyxRQUFRLEVBQUU7QUFDWCxxQkFBUSxHQUFHLEdBQUcsQ0FBQztVQUNsQjtBQUNELGFBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7QUFDdkIsb0JBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1VBQzFCO0FBQ0QsZ0JBQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztNQUNsRSxDQUFDO0VBQ0w7QUFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDeEIsV0FBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7RUFDcEQ7O3NCQUVjLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7O0FDekJ2QyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Ozs7O0FBSzFCLFdBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQ3RDLGFBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDZixtQkFBTSxJQUFJLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1VBQy9DO0FBQ0QsYUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUIsbUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7VUFDN0I7QUFDRCxnQkFBTyxNQUFNLENBQUM7TUFDakIsQ0FBQztFQUNMOztzQkFFYyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7cUJDakIvQixFQUFhOztBQUVwQixLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7Ozs7O0FBS3pCLFdBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVMsU0FBUyxFQUFFO0FBQ3pDLGdCQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQ3ZGO0VBQ0o7O3NCQUVjLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7O0FDWnJDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtBQUM3QixXQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxZQUFXO0FBQ3BDLGdCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQVMsRUFBRSxFQUFFO0FBQzdDLHFCQUFRLEVBQUU7QUFDVixzQkFBSyxHQUFHO0FBQ0osNEJBQU8sTUFBTSxDQUFDO0FBQ2xCLHNCQUFLLEdBQUc7QUFDSiw0QkFBTyxNQUFNLENBQUM7QUFDbEIsc0JBQUssR0FBRztBQUNKLDRCQUFPLE9BQU8sQ0FBQztBQUNuQixzQkFBSyxJQUFHO0FBQ0osNEJBQU8sT0FBTyxDQUFDO0FBQ25CLHNCQUFLLEdBQUc7QUFDSiw0QkFBTyxPQUFPLENBQUM7QUFDbkI7QUFDSSw0QkFBTyxFQUFFLENBQUM7QUFBQSxjQUNiO1VBQ0osQ0FBQyxDQUFDO01BQ047RUFDSjs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTOzs7Ozs7Ozs7Ozs7QUNyQnpDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTs7Ozs7QUFLekIsV0FBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBUyxXQUFXLEVBQUU7QUFDM0MsYUFBSSxPQUFPLFdBQVcsS0FBSyxTQUFTLEVBQUU7QUFDbEMsd0JBQVcsR0FBRyxJQUFJLENBQUM7VUFDdEI7QUFDRCxhQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ2xDLGlCQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7QUFDaEUsd0JBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2NBQzFCO0FBQ0QsaUJBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUcsRUFBRTtBQUNoRSx3QkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Y0FDMUI7VUFDSjtBQUNELGdCQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO01BQzNCLENBQUM7RUFDTDs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7QUNyQnJDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTs7Ozs7QUFLekIsV0FBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBUyxLQUFLLEVBQUU7QUFDckMsZ0JBQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO01BQ2xDLENBQUM7RUFDTDtBQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtBQUNyQixXQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztFQUMvQzs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7O3FCQ2I5QixFQUFVOztBQUVqQixLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Ozs7OztBQU01QixXQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLE1BQU0sRUFBRSxRQUFRLEVBQUU7QUFDbkQsYUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7QUFDNUIsbUJBQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLENBQUM7VUFDcEQ7QUFDRCxhQUFJLENBQUMsUUFBUSxFQUFFO0FBQ1gscUJBQVEsR0FBRyxHQUFHLENBQUM7VUFDbEI7QUFDRCxhQUFJLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO0FBQ3ZCLG9CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztVQUMxQjtBQUNELGdCQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDbEUsQ0FBQztFQUNMO0FBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ3hCLFdBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0VBQ3JEOztzQkFFYyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7OztBQ3pCeEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFOzs7O0FBSTlCLFdBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVMsR0FBRyxFQUFFO0FBQ3hDLGdCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQ2xDLENBQUM7RUFDTDs7c0JBRWMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVOzs7Ozs7Ozs7Ozs7QUNUMUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQzNCLFdBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFlBQVc7QUFDbEMsYUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsS0FDZCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBRyxDQUFFLEVBQUU7QUFDbkUsb0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUM1QjtBQUNELGdCQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztNQUMxQixDQUFDO0VBQ0w7O3NCQUVjLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNDWHpCLENBQVE7Ozs7cUJBQ2YsQ0FBZTs7cUJBQ2YsRUFBTzs7Ozs7OztBQU9kLHFCQUFFLFdBQVcsR0FBRyxVQUFTLFdBQVcsRUFBRSxPQUFPLEVBQUU7QUFDM0MsU0FBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLElBQUksV0FBVyxLQUFLLEVBQUUsRUFBRTtBQUN2RCxnQkFBTyxFQUFFLENBQUM7TUFDYjtBQUNELFNBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUMsU0FBSSxDQUFDLG9CQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUMzQixnQkFBTyxHQUFHLEVBQUUsQ0FBQztNQUNoQixNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLG9CQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDckQsZ0JBQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDckM7QUFDRCxTQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7OztBQUNYLDhCQUFpQixLQUFLLDhIQUFFO2lCQUFmLElBQUk7OytCQUNXLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7O2lCQUE5QixLQUFJO2lCQUFFLEtBQUs7O0FBQ2hCLGtCQUFJLEdBQUcsa0JBQWtCLENBQUMsS0FBSSxDQUFDLENBQUM7QUFDaEMsa0JBQUssR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxpQkFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxFQUFFO0FBQzFELHFDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Y0FDbkM7VUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQUNELFlBQU8sQ0FBQyxDQUFDO0VBQ1osQ0FBQzs7c0JBRWEsb0JBQUUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O21DQy9CZCxDQUFROzs7O3FCQUNmLENBQWU7O3FCQUNmLEVBQVM7O0FBRWhCLHFCQUFFLEdBQUcsR0FBRzs7Ozs7Ozs7QUFRSixRQUFHLEVBQUUsYUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRTtBQUNsQyxhQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDYixvQkFBTyxZQUFZLENBQUM7VUFDdkI7QUFDRCxhQUFJLENBQUMsR0FBRyxFQUFFO0FBQ04sb0JBQU8sR0FBRyxDQUFDO1VBQ2Q7QUFDRCxhQUFJLFlBQVksR0FBRyxvQkFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Ozs7O0FBQzFDLGtDQUF3QixZQUFZLDhIQUFFO3FCQUE3QixXQUFXOztBQUNoQixxQkFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO0FBQ2xDLDRCQUFPLFlBQVksQ0FBQztrQkFDdkI7Y0FDSjs7Ozs7Ozs7Ozs7Ozs7OztBQUNELGFBQUksb0JBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsb0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzVDLGdCQUFHLEdBQUcsb0JBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQzFCO0FBQ0QsZ0JBQU8sR0FBRyxDQUFDO01BQ2Q7Ozs7Ozs7OztBQVNELFFBQUcsRUFBRSxhQUFTLFdBQVcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUM1QyxhQUFJLElBQUksR0FBRyxvQkFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsb0JBQVcsR0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQztBQUN2RSxZQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssUUFBUSxJQUFJLG9CQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3pGLGFBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssUUFBUSxFQUFFO0FBQ2xDLG1CQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1VBQzNFO0FBQ0QsZ0JBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdkIsY0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQixhQUFJLElBQUksR0FBRyxvQkFBRSxHQUFHLENBQUMsb0JBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsVUFBUyxHQUFHLEVBQUU7QUFDdkQsaUJBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3JDLHFCQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQyxxQkFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7QUFDakMscUJBQUksV0FBVyxhQUFDO0FBQ2hCLHdCQUFPLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLDJCQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2tCQUMvQjtBQUNELHdCQUFPLE1BQU0sQ0FBQztjQUNqQjtBQUNELG9CQUFPLEdBQUcsQ0FBQztVQUNkLENBQUMsQ0FBQzs7QUFFSCxrQkFBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRTtBQUNwQixpQkFBSTtBQUNBLHdCQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFFLENBQUM7Y0FDMUMsQ0FBQyxPQUFPLE9BQU8sRUFBRTtBQUNkLHdCQUFPLEtBQUssQ0FBQztjQUNoQjtVQUNKOztBQUVELGFBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUNsQixjQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsQyxpQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLGlCQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN2QixxQkFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLDRCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2tCQUN4QixNQUFNLElBQUksb0JBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2hDLDRCQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2tCQUM1QixNQUFNO0FBQ0gsNEJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztrQkFDeEM7Y0FDSixNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRTtBQUM3QixxQkFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDZCx5QkFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7a0JBQ3JCO0FBQ0Qsd0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO2NBQ3RELE1BQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO0FBQzNDLHFCQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLG9CQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7Y0FDekU7QUFDRCxvQkFBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUMxQjtBQUNELGdCQUFPLEdBQUcsQ0FBQztNQUNkOzs7Ozs7QUFNRCxlQUFVLEVBQUUsb0JBQVMsR0FBRyxFQUFFO0FBQ3RCLGFBQUksQ0FBQyxvQkFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkIsb0JBQU8sR0FBRyxDQUFDO1VBQ2Q7QUFDRCxhQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDakIsaUJBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN6QixxQkFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLHFCQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM3Qyx5Q0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2tCQUN2QyxNQUFNO0FBQ0gsMkJBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7a0JBQ3ZCO2NBQ0o7VUFDSjtBQUNELGdCQUFPLE1BQU0sQ0FBQztNQUNqQjs7Ozs7Ozs7OztBQVVELFdBQU0sRUFBRSxnQkFBUyxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUU7QUFDcEUsYUFBSSxJQUFJLEdBQUcsb0JBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xDLGFBQUksR0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQztBQUNoRSxvQkFBVyxHQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ3ZFLDBCQUFpQixHQUFHLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQzFFLGVBQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNyRCxhQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxDQUFDLG9CQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNyRCxtQkFBTSxHQUFHLEVBQUUsQ0FBQztVQUNmO0FBQ0QsZ0JBQU8sR0FBRyxJQUFJLENBQUM7Ozs7OztBQUNmLG1DQUFtQixPQUFPLG1JQUFFO3FCQUFuQixNQUFNOztBQUNYLHFCQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDaEIsMEJBQUssSUFBSSxLQUFJLElBQUksTUFBTSxFQUFFO0FBQ3JCLDZCQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLEVBQUU7QUFDN0IsaUNBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFJLENBQUMsQ0FBQztBQUN2QixpQ0FBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUksQ0FBQyxDQUFDO0FBQ3hCLGlDQUFJLElBQUksS0FBSyxNQUFNLEVBQUUsU0FBUztBQUM5QixpQ0FBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLGlDQUFJLElBQUksSUFBSSxJQUFJLEtBQUssb0JBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsR0FBRyxvQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUM1RSxxQ0FBSSxDQUFDLFdBQVcsRUFBRTtBQUNkLHlDQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztBQUM3Qix5Q0FBSSxHQUFHLEtBQUssU0FBUyxLQUFLLGdCQUFnQixHQUFHLG9CQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDdEYsK0NBQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxvQkFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUcsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztzQ0FDMUc7a0NBQ0osTUFBTSxJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUNoRCwyQ0FBTSxDQUFDLEtBQUksQ0FBQyxHQUFHLG9CQUFFLEtBQUssQ0FBRSxXQUFXLElBQUksb0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUcsb0JBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7a0NBQ3BHOzhCQUNKLE1BQU0sSUFBSSxJQUFJLEtBQUssU0FBUyxLQUFLLEdBQUcsS0FBSyxTQUFTLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO0FBQ3hFLHFDQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7QUFDdEIsMkNBQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztrQ0FDM0MsTUFBTSxJQUFJLElBQUksWUFBWSxNQUFNLEVBQUU7QUFDL0IseUNBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLHlDQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3JCLDhDQUFLLElBQUksR0FBRyxDQUFDO3NDQUNoQjtBQUNELHlDQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO0FBQ3pCLDhDQUFLLElBQUksR0FBRyxDQUFDO3NDQUNoQjtBQUNELHlDQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO0FBQ3hCLDhDQUFLLElBQUksR0FBRyxDQUFDO3NDQUNoQjtBQUNELHlDQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3JCLDhDQUFLLElBQUksR0FBRyxDQUFDO3NDQUNoQjtBQUNELDJDQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztrQ0FDakQsTUFBTTtBQUNILDJDQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2tDQUN2Qjs4QkFDSjswQkFDSjtzQkFDSjtrQkFDSjtjQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsZ0JBQU8sTUFBTSxDQUFDO01BQ2pCOzs7Ozs7QUFNRCxTQUFJLEVBQUUsZ0JBQTJCO0FBQzdCLGFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQzs7MkNBREMsYUFBYTtBQUFiLDBCQUFhOzs7QUFFM0IsY0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM5QyxnQkFBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7VUFDaEQ7QUFDRCxnQkFBTyxHQUFHLENBQUM7TUFDZDs7Ozs7O0FBTUQsVUFBSyxFQUFFLGVBQVMsR0FBRyxFQUFFO0FBQ2pCLGFBQUksb0JBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLGtCQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUNqQixxQkFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3pCLDRCQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztrQkFDbkI7Y0FDSjtVQUNKO0FBQ0QsZ0JBQU8sR0FBRyxDQUFDO01BQ2Q7RUFDSixDQUFDOztBQUVGLE1BQUssSUFBSSxHQUFHLElBQUksb0JBQUUsR0FBRyxFQUFFO0FBQ25CLFNBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7QUFDOUIsU0FBSSxFQUFFLFFBQVEsd0JBQU0sRUFBRTtBQUNsQixhQUFJLG9CQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0IsaUNBQUUsUUFBUSxDQUFDLEdBQUcsb0JBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQzVCO01BQ0o7RUFDSjs7c0JBRWMsb0JBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O21DQ3ZOTixDQUFROzs7O3FCQUNmLENBQWU7Ozs7Ozs7OztBQVN0QixxQkFBRSxLQUFLLEdBQUcsVUFBUyxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7QUFDbEQsU0FBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7QUFDekIsZUFBTSxJQUFJLFNBQVMsQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztNQUNqRDtBQUNELFFBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDckIsU0FBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7b0JBQ0UsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztBQUF2RCxjQUFLO0FBQUUsa0JBQVM7QUFBRSxtQkFBVTtNQUNoQyxNQUFNLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO3FCQUNqQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7QUFBdkMsY0FBSztBQUFFLG1CQUFVO01BQ3JCOztBQUVELGNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUNoQixnQkFBTyxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ3RDOztBQUVELFNBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLFNBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNWLFNBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNWLFNBQUksQ0FBQyxhQUFDO0FBQ04sWUFBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUMxRCxhQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQixhQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDcEIsYUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUM3QyxpQkFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsb0JBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3hDLGlCQUFJLE9BQU8sRUFBRTtBQUNULHFCQUFJLElBQUksU0FBUyxDQUFDO2NBQ3JCO1VBQ0o7QUFDRCxjQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQztBQUNuQyxVQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNWLGFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDVixjQUFDLEVBQUUsQ0FBQztVQUNQO01BQ0o7QUFDRCxTQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO0FBQ2pCLGNBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM5QztBQUNELFlBQU8sS0FBSyxDQUFDO0VBQ2hCLENBQUM7O3NCQUVhLG9CQUFFLEtBQUs7Ozs7Ozs7Ozs7Ozs7OzttQ0NuRFIsQ0FBUTs7OztxQkFDZixDQUFlOzs7Ozs7QUFNdEIscUJBQUUsRUFBRSxDQUFDLFVBQVUsR0FBRyxVQUFTLElBQUksRUFBRTtBQUM3QixVQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0VBQzFFLENBQUM7O3NCQUVhLG9CQUFFLEVBQUUsQ0FBQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7bUNDWGhCLENBQVE7Ozs7cUJBQ2YsQ0FBZTs7Ozs7O0FBTXRCLHFCQUFFLEVBQUUsQ0FBQyxXQUFXLEdBQUcsWUFBbUI7dUNBQVAsS0FBSztBQUFMLGNBQUs7OztBQUNoQyxTQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3BCLGdCQUFPLHlCQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ2hCO0FBQ0QsWUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBSTtnQkFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSTtNQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUN2RyxDQUFDOztzQkFFYSxvQkFBRSxFQUFFLENBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O21DQ2RqQixDQUFROzs7O3FCQUNmLENBQWU7Ozs7Ozs7QUFPdEIscUJBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDdkMsU0FBSSxDQUFDLG9CQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN6QixlQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO01BQ3hEO0FBQ0QsU0FBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2xDLGFBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixhQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RCxhQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDbkIsaUJBQUksRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUU7QUFDbEIsdUJBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyx5QkFBRSxFQUFFLENBQUMsQ0FBQztjQUN2QjtBQUNELG1CQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzdCO01BQ0o7QUFDRCxZQUFPLE1BQU0sQ0FBQztFQUNqQixDQUFDOztzQkFFYSxvQkFBRSxFQUFFLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O21DQzFCYixDQUFROzs7O3FCQUNmLENBQWU7Ozs7OztBQU10QixxQkFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFNBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNmLFNBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVc7QUFDekYsYUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtBQUMvQixpQkFBSSxLQUFLLEdBQUcseUJBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEIsaUJBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7QUFDbkUscUJBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDMUMscUJBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLE1BQU0sRUFBRTtBQUNqQywyQkFBTSxHQUFHLEtBQUssQ0FBQztrQkFDbEI7Y0FDSjtVQUNKO01BQ0osQ0FBQyxDQUFDO0FBQ0gsWUFBTyxNQUFNLENBQUM7RUFDakIsQ0FBQzs7Ozs7OztBQU9GLHFCQUFFLFNBQVMsR0FBRyxVQUFTLFFBQVEsRUFBRTtBQUM3QixZQUFPLHlCQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDL0MsQ0FBQzs7c0JBRWEsb0JBQUUsU0FBUzs7Ozs7Ozs7OztBQ2hDMUIsT0FBTSxDQUFDLE9BQU8sR0FBRyxtQkFBTyxDQUFDLEVBQVUsQ0FBQyxDQUFDLFFBQVEsQzs7Ozs7Ozs7QUNBN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7QUFDbEIsV0FBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0VBQ3ZFOztBQUVELE9BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDOzs7Ozs7Ozs7Ozs7Ozs7bUNDSlQsQ0FBUTs7OztxQkFDZixDQUFlOzs7Ozs7QUFNdEIscUJBQUUsUUFBUSxHQUFHLFVBQVMsUUFBUSxFQUFFO0FBQzVCLFVBQU8sVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNsQyxDQUFDOztzQkFFYSxvQkFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7bUNDWFgsQ0FBUTs7OztxQkFDZixDQUFlOzs7Ozs7O0FBT3RCLHFCQUFFLEVBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxhQUFhLEVBQUUsaUJBQWlCLEVBQUU7QUFDdEQsWUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVc7QUFDdkIsYUFBSSxPQUFPLEdBQUcseUJBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEIsYUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUM5RCxnQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixnQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2pCLGdCQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNyQixDQUFDLENBQUM7RUFDTixDQUFDOztzQkFFYSxvQkFBRSxFQUFFLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O21DQ2xCYixDQUFROzs7O3FCQUNmLENBQWU7Ozs7Ozs7QUFPdEIscUJBQUUsa0JBQWtCLEdBQUcsVUFBUyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQzVDLFNBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQztBQUM5RSxTQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDckIsU0FBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7OztBQUNmLDhCQUFrQixNQUFNLDhIQUFFO2lCQUFqQixLQUFLOztBQUNWLGlCQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxpQkFBSSxPQUFPLEVBQUU7QUFDVCxxQkFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLHFCQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7QUFDekIsOEJBQVMsR0FBRyxTQUFTLENBQUM7QUFDdEIsMEJBQUssRUFBRSxDQUFDO2tCQUNYO0FBQ0Qsc0JBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7Y0FDL0Q7VUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQUNELFlBQU8sS0FBSyxDQUFDO0VBQ2hCLENBQUM7O3NCQUVhLG9CQUFFLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7O21DQzFCckIsQ0FBUTs7OztxQkFDZixDQUFlOztzQkFFUCxvQkFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O21DQ0h2QyxDQUFROzs7O3FCQUNmLENBQWU7Ozs7OztBQU10QixxQkFBRSxFQUFFLENBQUMsZUFBZSxHQUFHLFVBQVMsT0FBTyxFQUFFO0FBQ3JDLFNBQUksQ0FBQyxvQkFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDM0IsZ0JBQU8sR0FBRyxFQUFFLENBQUM7TUFDaEIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxvQkFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3JELGdCQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQ3JDO0FBQ0QsU0FBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLHlCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsWUFBVztBQUNyQyxhQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQy9ELGlCQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO0FBQ3JCLHFCQUFJLENBQUMsb0JBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtBQUMvQiwyQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2tCQUN2RCxNQUFNO0FBQ0gsMkJBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztrQkFDdEM7Y0FDSixNQUFNO0FBQ0gsdUJBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztjQUNsQztVQUNKO01BQ0osQ0FBQyxDQUFDO0FBQ0gsWUFBTyxNQUFNLENBQUM7RUFDakIsQ0FBQzs7c0JBRWEsb0JBQUUsRUFBRSxDQUFDLGVBQWU7Ozs7Ozs7Ozs7Ozs7OzttQ0M5QnJCLENBQVE7Ozs7cUJBQ2YsQ0FBZTs7Ozs7Ozs7QUFRdEIscUJBQUUsSUFBSSxHQUFHLFVBQVMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDeEMsU0FBSSxDQUFDLG9CQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN6QixlQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO01BQ3hEO0FBQ0QsU0FBSSxvQkFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDbEIsY0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbkMsaUJBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7QUFDckQsd0JBQU8sSUFBSSxDQUFDO2NBQ2Y7VUFDSjtNQUNKLE1BQU0sSUFBSSxvQkFBRSxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDL0IsY0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsaUJBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUMzQixxQkFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtBQUN6RCw0QkFBTyxJQUFJLENBQUM7a0JBQ2Y7Y0FDSjtVQUNKO01BQ0osTUFBTTtBQUNILGVBQU0sSUFBSSxTQUFTLENBQUMsS0FBSyxHQUFHLCtCQUErQixDQUFDLENBQUM7TUFDaEU7QUFDRCxZQUFPLEtBQUssQ0FBQztFQUNoQixDQUFDOztzQkFFYSxvQkFBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7bUNDakNQLENBQVE7Ozs7cUJBQ2YsQ0FBZTs7Ozs7O0FBTXRCLHFCQUFFLGlCQUFpQixHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQ2pDLE9BQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUMsUUFBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsVUFBTyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztFQUM5QixDQUFDOztzQkFFYSxvQkFBRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7bUNDYnBCLENBQVE7Ozs7cUJBQ2YsQ0FBZTs7Ozs7O0FBTXRCLHFCQUFFLFdBQVcsR0FBRyxVQUFTLE9BQU8sRUFBRTtBQUM5QixTQUFJO0FBQ0EsZ0JBQVEsSUFBSSxhQUFhLEVBQUUsQ0FBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztNQUMzRCxDQUFDLE9BQU8sTUFBTSxFQUFFO0FBQ2IsYUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTtBQUNyQixtQkFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1VBQ2xEO0FBQ0QsZ0JBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztNQUN0QjtFQUNKLENBQUM7O3NCQUVhLG9CQUFFLFdBQVciLCJmaWxlIjoianF1ZXJ5LWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpRdWVyeVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wialF1ZXJ5XCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3MTJhMDEyZDcxMTY5OGVkNjkyNVxuICoqLyIsImltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuaW1wb3J0ICcuL2Rlc2VyaWFsaXplJ1xuaW1wb3J0ICcuL2ZpbmRCeU5hbWUnXG5pbXBvcnQgJy4vZmluZEJ5TmFtZXMnXG5pbXBvcnQgJy4vZ3JvdXBCeSdcbmltcG9ydCAnLi9tYXhaSW5kZXgnXG5pbXBvcnQgJy4vbmV4dFRpY2snXG5pbXBvcnQgJy4vb2JqJ1xuaW1wb3J0ICcuL3JlY2xvbmUnXG5pbXBvcnQgJy4vcmVpbmRleEFycmF5UGFyYW1zJ1xuaW1wb3J0ICcuL3JldmVyc2UnXG5pbXBvcnQgJy4vc2VyaWFsaXplT2JqZWN0J1xuaW1wb3J0ICcuL3NvbWUnXG5pbXBvcnQgJy4vc3BsaXQnXG5pbXBvcnQgJy4vc3VwcG9ydHNJbnB1dFR5cGUnXG5pbXBvcnQgJy4veG1sVG9TdHJpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGpRdWVyeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlzOiByZXF1aXJlKCcuL2FycmF5cycpLFxuICAgIHJlZ2V4cHM6IHJlcXVpcmUoJy4vcmVnZXhwcycpLFxuICAgIHN0cmluZ3M6IHJlcXVpcmUoJy4vc3RyaW5ncycpXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY29udGFpbnM6IHJlcXVpcmUoJy4vYXJyYXlzL2NvbnRhaW5zJyksXG4gICAgZXZlcnk6IHJlcXVpcmUoJy4vYXJyYXlzL2V2ZXJ5JyksXG4gICAgZmlsdGVyOiByZXF1aXJlKCcuL2FycmF5cy9maWx0ZXInKSxcbiAgICBmaXJzdDogcmVxdWlyZSgnLi9hcnJheXMvZmlyc3QnKSxcbiAgICBmbGF0TWFwOiByZXF1aXJlKCcuL2FycmF5cy9mbGF0TWFwJyksXG4gICAgZ3JvdXBCeTogcmVxdWlyZSgnLi9hcnJheXMvZ3JvdXBCeScpLFxuICAgIGdyb3VwZWQ6IHJlcXVpcmUoJy4vYXJyYXlzL2dyb3VwZWQnKSxcbiAgICBncm91cGVkUmlnaHQ6IHJlcXVpcmUoJy4vYXJyYXlzL2dyb3VwZWRSaWdodCcpLFxuICAgIGluY2x1ZGU6IHJlcXVpcmUoJy4vYXJyYXlzL2luY2x1ZGUnKSxcbiAgICBpbmRleE9mOiByZXF1aXJlKCcuL2FycmF5cy9pbmRleE9mJyksXG4gICAgaXNBcnJheTogcmVxdWlyZSgnLi9hcnJheXMvaXNBcnJheScpLFxuICAgIGpvaW5QYXRoczogcmVxdWlyZSgnLi9hcnJheXMvam9pblBhdGhzJyksXG4gICAgbGFzdDogcmVxdWlyZSgnLi9hcnJheXMvbGFzdCcpLFxuICAgIG1hcDogcmVxdWlyZSgnLi9hcnJheXMvbWFwJyksXG4gICAgbWF4OiByZXF1aXJlKCcuL2FycmF5cy9tYXgnKSxcbiAgICBtaW46IHJlcXVpcmUoJy4vYXJyYXlzL21pbicpLFxuICAgIHJhbmdlOiByZXF1aXJlKCcuL2FycmF5cy9yYW5nZScpLFxuICAgIHJlZHVjZTogcmVxdWlyZSgnLi9hcnJheXMvcmVkdWNlJyksXG4gICAgcmVtb3ZlOiByZXF1aXJlKCcuL2FycmF5cy9yZW1vdmUnKSxcbiAgICBzb21lOiByZXF1aXJlKCcuL2FycmF5cy9zb21lJylcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMuanNcbiAqKi8iLCJpZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IG9ialxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LmlzQXJyYXk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2lzQXJyYXkuanNcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXhPZidcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGFcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihhKSA+PSAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2NvbnRhaW5zLmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvaW5kZXhPZi5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmV2ZXJ5KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmV2ZXJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZXZlcnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvZXZlcnkuanNcbiAqKi8iLCJpbXBvcnQgJy4vZmxhdE1hcCdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmlsdGVyKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0TWFwKChhLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIGEsIGksIHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvZmlsdGVyLmpzXG4gKiovIiwiaW1wb3J0ICcuL2lzQXJyYXknXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmZsYXRNYXApIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiBBcnJheVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5mbGF0TWFwID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaC5hcHBseShyZXN1bHRzLCByZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5mbGF0TWFwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2ZsYXRNYXAuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5maXJzdCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZmlyc3Q7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvZmlyc3QuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cEJ5KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge3t9fVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpc1tpXTtcbiAgICAgICAgICAgIGxldCBrZXkgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdmFsdWUsIGksIHRoaXMpO1xuICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9ncm91cEJ5LmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBlZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8QXJyYXk+fVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5ncm91cGVkID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKGksIGkgKyBzaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmdyb3VwZWQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvZ3JvdXBlZC5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8QXJyYXk+fVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aDsgaSA+IDA7IGkgLT0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIHNpemUpLCBpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMucmV2ZXJzZSgpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvZ3JvdXBlZFJpZ2h0LmpzXG4gKiovIiwiaW1wb3J0ICcuL2luZGV4T2YnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmluY2x1ZGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmluZGV4T2YoYSk7XG4gICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXNbaV0gPSBhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdXNoKGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5pbmNsdWRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2luY2x1ZGUuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0pIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICBwYXRoICs9ICcvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0aGlzW2ldLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmpvaW5QYXRocztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9qb2luUGF0aHMuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5sYXN0KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubGFzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9sYXN0LmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUubWFwKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5tYXA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvbWFwLmpzXG4gKiovIiwiaW1wb3J0ICcuL3JlZHVjZSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubWF4KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoKGEsIGIpID0+IChhID4gYikgPyBhIDogYik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWF4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL21heC5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLnJlZHVjZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoISh0aGlzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpc1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHJlc3VsdCwgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUucmVkdWNlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL3JlZHVjZS5qc1xuICoqLyIsImltcG9ydCAnLi9yZWR1Y2UnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLm1pbikge1xuICAgIEFycmF5LnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKChhLCBiKSA9PiAoYSA8IGIpID8gYSA6IGIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLm1pbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9taW4uanNcbiAqKi8iLCJpZiAoIUFycmF5LnJhbmdlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBmcm9tXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0b1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIEFycmF5LnJhbmdlID0gZnVuY3Rpb24oZnJvbSwgdG8sIHN0ZXApIHtcbiAgICAgICAgbGV0IHJhbmdlID0gW107XG4gICAgICAgIGxldCBpc051bWJlciA9IHR5cGVvZiBmcm9tID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG8gPT09ICdudW1iZXInO1xuICAgICAgICBsZXQgYmVnaW4gPSBpc051bWJlciA/IGZyb20gOiBmcm9tLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgbGV0IGVuZCA9IGlzTnVtYmVyID8gdG8gOiB0by50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBiZWdpbjsgc3RlcCA+IDAgPyBpIDw9IGVuZCA6IGkgPj0gZW5kOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHJhbmdlLnB1c2goaXNOdW1iZXIgPyBpIDogU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnJhbmdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL3JhbmdlLmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUucmVtb3ZlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLnJlbW92ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9yZW1vdmUuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5zb21lKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLnNvbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5zb21lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL3NvbWUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBlc2NhcGU6IHJlcXVpcmUoJy4vcmVnZXhwcy9lc2NhcGUnKVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3JlZ2V4cHMuanNcbiAqKi8iLCJpZiAoIVJlZ0V4cC5lc2NhcGUpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgUmVnRXhwLmVzY2FwZSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdFeHAuZXNjYXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vcmVnZXhwcy9lc2NhcGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnYW50U3R5bGVQYXRoVG9SZWdleCc6IHJlcXVpcmUoJy4vc3RyaW5ncy9hbnRTdHlsZVBhdGhUb1JlZ2V4JyksXG4gICAgJ2JyMm5sJzogcmVxdWlyZSgnLi9zdHJpbmdzL2JyMm5sJyksXG4gICAgJ2NvbXBhcmVUbyc6IHJlcXVpcmUoJy4vc3RyaW5ncy9jb21wYXJlVG8nKSxcbiAgICAnY29udGFpbnMnOiByZXF1aXJlKCcuL3N0cmluZ3MvY29udGFpbnMnKSxcbiAgICAnY3V0c3RyaW5nJzogcmVxdWlyZSgnLi9zdHJpbmdzL2N1dHN0cmluZycpLFxuICAgICdlbmRzV2l0aCc6IHJlcXVpcmUoJy4vc3RyaW5ncy9lbmRzV2l0aCcpLFxuICAgICdmb3JtYXQnOiByZXF1aXJlKCcuL3N0cmluZ3MvZm9ybWF0JyksXG4gICAgJ2Zvcm1hdFZhcmlhYmxlcyc6IHJlcXVpcmUoJy4vc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMnKSxcbiAgICAnZ2V0TGVuZ3RoJzogcmVxdWlyZSgnLi9zdHJpbmdzL2dldExlbmd0aCcpLFxuICAgICdncm91cGVkJzogcmVxdWlyZSgnLi9zdHJpbmdzL2dyb3VwZWQnKSxcbiAgICAnZ3JvdXBlZFJpZ2h0JzogcmVxdWlyZSgnLi9zdHJpbmdzL2dyb3VwZWRSaWdodCcpLFxuICAgICdsZWZ0UGFkJzogcmVxdWlyZSgnLi9zdHJpbmdzL2xlZnRQYWQnKSxcbiAgICAnbmwyYnInOiByZXF1aXJlKCcuL3N0cmluZ3MvbmwyYnInKSxcbiAgICAncXVvdGUnOiByZXF1aXJlKCcuL3N0cmluZ3MvcXVvdGUnKSxcbiAgICAncmVnZXgnOiByZXF1aXJlKCcuL3N0cmluZ3MvcmVnZXgnKSxcbiAgICAncmVwZWF0JzogcmVxdWlyZSgnLi9zdHJpbmdzL3JlcGVhdCcpLFxuICAgICdyaWdodFBhZCc6IHJlcXVpcmUoJy4vc3RyaW5ncy9yaWdodFBhZCcpLFxuICAgICdzdGFydHNXaXRoJzogcmVxdWlyZSgnLi9zdHJpbmdzL3N0YXJ0c1dpdGgnKSxcbiAgICAndW5xdW90ZSc6IHJlcXVpcmUoJy4vc3RyaW5ncy91bnF1b3RlJyksXG4gICAgJ3htbEVzY2FwZSc6IHJlcXVpcmUoJy4vc3RyaW5ncy94bWxFc2NhcGUnKSxcbiAgICAneG1sVW5lc2NhcGUnOiByZXF1aXJlKCcuL3N0cmluZ3MveG1sVW5lc2NhcGUnKVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHRoZSBhbnQgc3R5bGUgcGF0aCBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtSZWdFeHB9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4ID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0aCBtdXN0IGJlIHN0cmluZyB0eXBlIDogXCIgKyBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShwYXRoLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlBhdGggbXVzdCBub3QgYmUgZW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcL3syLH0vZywgJy8nKTtcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvWy1bXFxde30oKSsuLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gcGF0aC5yZXBsYWNlKC8oKFxcLz9cXCpcXCopfChcXC8/XFwqKXwoXFw/KXwoXFwvKSkvZywgZnVuY3Rpb24oJDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDApIHtcbiAgICAgICAgICAgIGNhc2UgJy8qKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcoPzovezEsfS4qKT8nO1xuICAgICAgICAgICAgY2FzZSAnKionOlxuICAgICAgICAgICAgICAgIHJldHVybiAnLionO1xuICAgICAgICAgICAgY2FzZSAnLyonOlxuICAgICAgICAgICAgICAgIHJldHVybiAnKD86L3sxLH1bXi9dKik/JztcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiAnW14vXSonO1xuICAgICAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdbXi9dJztcbiAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnL3sxLH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oJyArIHBhdHRlcm4gKyAnKSQnKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmEpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmEgPSBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvYW50U3R5bGVQYXRoVG9SZWdleC5qc1xuICoqLyIsImltcG9ydCAnLi94bWxVbmVzY2FwZSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmJyMm5sKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB4bWxVbmVzY2FwZVxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmJyMm5sID0gZnVuY3Rpb24oeG1sVW5lc2NhcGUpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucmVwbGFjZSgvKDxicj58PGJyXFwvPikvZywgJ1xcbicpO1xuICAgICAgICBpZiAoeG1sVW5lc2NhcGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQueG1sVW5lc2NhcGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmJyMm5sO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9icjJubC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKCZsdDt8Jmd0O3wmIzM0O3wmIzM5O3wmYW1wOykvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJyZsdDsnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnPCc7XG4gICAgICAgICAgICBjYXNlICcmZ3Q7JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJz4nO1xuICAgICAgICAgICAgY2FzZSAnJiMzNDsnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnXCInO1xuICAgICAgICAgICAgY2FzZSAnJiMzOTsnOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIidcIjtcbiAgICAgICAgICAgIGNhc2UgJyZhbXA7JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyYnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MveG1sVW5lc2NhcGUuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG8gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuICAgICAgICBjYXNlICEoc3RyID09IG51bGwpOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIGNhc2UgISh0aGlzID4gc3RyKTpcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICBjYXNlICEodGhpcyA8IHN0cik6XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9jb21wYXJlVG8uanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKHN0cikgPiAtMTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9jb250YWlucy5qc1xuICoqLyIsImltcG9ydCAnLi4vYXJyYXlzL2NvbnRhaW5zJ1xuaW1wb3J0ICcuL2dldExlbmd0aCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxudW1iZXJ9IFtjaGVja2J5dGVdIGNoZWNrIGJ5dGUgbGVuZ3RoIGlmIHRydWUuIChkZWZhdWx0IGlzIGZhbHNlKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMZW5ndGggdGhlIG1heCBsZW5ndGguXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdWZmaXhdIHRoZSBzdWZmaXguXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nID0gZnVuY3Rpb24oY2hlY2tieXRlLCBtYXhMZW5ndGgsIHN1ZmZpeCkge1xuICAgICAgICBsZXQgYXJnSW5kZXggPSAwO1xuICAgICAgICBsZXQgYXJnQ3VyciA9ICgpID0+IGFyZ3VtZW50c1thcmdJbmRleF07XG4gICAgICAgIGxldCBhcmdTaGlmdCA9ICgpID0+IGFyZ3VtZW50c1thcmdJbmRleCsrXTtcblxuICAgICAgICBjaGVja2J5dGUgPSBbJ2Jvb2xlYW4nLCAnbnVtYmVyJ10uY29udGFpbnModHlwZW9mIGFyZ0N1cnIoKSkgPyBhcmdTaGlmdCgpIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdDdXJyKCkgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGFyZ0N1cnIoKSArIFwiIGlzIG5vdCBhIG51bWJlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBtYXhMZW5ndGggPSBhcmdTaGlmdCgpO1xuXG4gICAgICAgIHN1ZmZpeCA9IHR5cGVvZiBhcmdDdXJyKCkgPT09ICdzdHJpbmcnID8gYXJnU2hpZnQoKSA6ICcnO1xuXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmdldExlbmd0aChjaGVja2J5dGUpO1xuICAgICAgICBpZiAoIShsZW5ndGggPiBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdWZmaXhMZW5ndGggPSBzdWZmaXguZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgIGlmIChzdWZmaXhMZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWF4IGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiBzdWZmaXggbGVuZ3RoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IGNoZWNrZWRMZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBsZXQgbCA9IGMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZExlbmd0aCArIGwgPiBtYXhMZW5ndGggLSBzdWZmaXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrZWRMZW5ndGggKz0gbDtcbiAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRTdHJpbmcgKyBzdWZmaXg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2N1dHN0cmluZy5qc1xuICoqLyIsImltcG9ydCAnLi4vYXJyYXlzL2NvbnRhaW5zJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oY2hlY2tieXRlKSB7XG4gICAgICAgIGxldCBhcmdJbmRleCA9IDA7XG4gICAgICAgIGxldCBhcmdDdXJyID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4XTtcbiAgICAgICAgbGV0IGFyZ1NoaWZ0ID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXG4gICAgICAgIGNoZWNrYnl0ZSA9IFsnYm9vbGVhbicsICdudW1iZXInXS5jb250YWlucyh0eXBlb2YgYXJnQ3VycigpKSA/IGFyZ1NoaWZ0KCkgOiBmYWxzZTtcbiAgICAgICAgaWYgKGNoZWNrYnl0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDAwN0YpOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhKHR5cGVvZiBjaGVja2J5dGUgPT09ICdudW1iZXInICYmIGNoZWNrYnl0ZSA+IDApOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSBjaGVja2J5dGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDdGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwRkZGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2dldExlbmd0aC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5sYXN0SW5kZXhPZihzdHIpO1xuICAgICAgICByZXR1cm4gaSA+IC0xICYmIGkgPT09IHRoaXMubGVuZ3RoIC0gc3RyLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2VuZHNXaXRoLmpzXG4gKiovIiwiaW1wb3J0ICcuLi9hcnJheXMvaXNBcnJheSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdCkge1xuICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nLCAoZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIicnXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIidcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiJ3tcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd7JztcbiAgICAgICAgICAgICAgICBjYXNlIFwifSdcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd9JztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCEvXlxcZCskL2cudGVzdCgkMikgPyBhcmdzWzBdIHx8IHt9IDogQXJyYXkuaXNBcnJheShhcmdzWzBdKSA/IGFyZ3NbMF0gOiBhcmdzKVskMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoYXJndW1lbnRzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmZvcm1hdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvZm9ybWF0LmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzXG4gICAgICogQHJldHVybnMge0FycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nO1xuICAgICAgICBsZXQgdmFyaWFibGVzID0gW107XG4gICAgICAgIGxldCBtYXRjaGVzO1xuICAgICAgICB3aGlsZSAobWF0Y2hlcyA9IHJlZ2V4LmV4ZWModGhpcykpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IFwiJydcIiAmJiBtYXRjaCAhPT0gXCIne1wiICYmIG1hdGNoICE9PSBcIn0nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMucHVzaChtYXRjaGVzWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFyaWFibGVzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHNpemUgPSBwYXJzZUludChzaXplKVxuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2dyb3VwZWQuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBpZiAoIShzaXplID4gMSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNpemUgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBzaXplID0gcGFyc2VJbnQoc2l6ZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKE1hdGgubWF4KDAsIGkgLSBzaXplKSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWRSaWdodDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0LmpzXG4gKiovIiwiaW1wb3J0ICcuL3JlcGVhdCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIHtcbiAgICAgICAgICAgIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCkgKyB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5scGFkKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5scGFkID0gU3RyaW5nLnByb3RvdHlwZS5sZWZ0UGFkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2xlZnRQYWQuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUucmVwZWF0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmVwZWF0ID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICAgICAgaWYgKCEoY291bnQgPj0gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvdW50IHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJlcGVhdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvcmVwZWF0LmpzXG4gKiovIiwiaW1wb3J0ICcuL3htbEVzY2FwZSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLm5sMmJyKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB4bWxFc2NhcGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUubmwyYnIgPSBmdW5jdGlvbih4bWxFc2NhcGUpIHtcbiAgICAgICAgcmV0dXJuICh4bWxFc2NhcGUgPyB0aGlzLnhtbEVzY2FwZSgpIDogdGhpcykucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLm5sMmJyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9ubDJici5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGUpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oPHw+fFwifCd8JikvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnJmx0Oyc7XG4gICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyZndDsnO1xuICAgICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgICAgIHJldHVybiAnJiMzNDsnO1xuICAgICAgICAgICAgY2FzZSBcIidcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyYjMzk7JztcbiAgICAgICAgICAgIGNhc2UgJyYnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnJmFtcDsnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL3htbEVzY2FwZS5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5xdW90ZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3ZlcmxhcGFibGVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5xdW90ZSA9IGZ1bmN0aW9uKG92ZXJsYXBhYmxlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3ZlcmxhcGFibGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgb3ZlcmxhcGFibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3ZlcmxhcGFibGUgJiYgdGhpcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdcIicgKyB0aGlzICsgJ1wiJztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnF1b3RlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9xdW90ZS5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5yZWdleCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbGFnc1xuICAgICAqIEByZXR1cm5zIHtSZWdFeHB9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZWdleCA9IGZ1bmN0aW9uKGZsYWdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHRoaXMsIGZsYWdzKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnIpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnIgPSBTdHJpbmcucHJvdG90eXBlLnJlZ2V4O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJlZ2V4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9yZWdleC5qc1xuICoqLyIsImltcG9ydCAnLi9yZXBlYXQnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIHtcbiAgICAgICAgICAgIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKSArIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCk7XG4gICAgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5ycGFkKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5ycGFkID0gU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvcmlnaHRQYWQuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihzdHIpID09PSAwO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3Mvc3RhcnRzV2l0aC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICAoKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHx8XG4gICAgICAgICAgICAodGhpcy5jaGFyQXQoMCkgPT09IFwiJ1wiICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09IFwiJ1wiKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUudW5xdW90ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvdW5xdW90ZS5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcbmltcG9ydCAnLi9vYmonXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5U3RyaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbiQuZGVzZXJpYWxpemUgPSBmdW5jdGlvbihxdWVyeVN0cmluZywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgcXVlcnlTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHF1ZXJ5U3RyaW5nID09PSAnJykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGxldCBwYWlycyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KC8mYW1wO3wmL2kpO1xuICAgIGlmICghJC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZXhjZXB0ICYmICEkLmlzQXJyYXkob3B0aW9ucy5leGNlcHQpKSB7XG4gICAgICAgIG9wdGlvbnMuZXhjZXB0ID0gW29wdGlvbnMuZXhjZXB0XTtcbiAgICB9XG4gICAgbGV0IG8gPSB7fTtcbiAgICBmb3IgKGxldCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgIGxldCBbbmFtZSwgdmFsdWVdID0gcGFpci5zcGxpdCgnPScpO1xuICAgICAgICBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xuICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgIGlmIChvcHRpb25zLmV4Y2VwdCA9PSBudWxsIHx8ICFvcHRpb25zLmV4Y2VwdC5jb250YWlucyhuYW1lKSkge1xuICAgICAgICAgICAgJC5vYmouc2V0KHRydWUsIG8sIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZGVzZXJpYWxpemU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kZXNlcmlhbGl6ZS5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcbmltcG9ydCAnLi9zcGxpdCdcblxuJC5vYmogPSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV1cbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24ob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtleUZyYWdtZW50cyA9ICQuc3BsaXQoa2V5LCAnLicsICcvJyk7XG4gICAgICAgIGZvciAobGV0IGtleUZyYWdtZW50IG9mIGtleUZyYWdtZW50cykge1xuICAgICAgICAgICAgaWYgKChvYmogPSBvYmpba2V5RnJhZ21lbnRdKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJC5pc0FycmF5KGRlZmF1bHRWYWx1ZSkgJiYgISQuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICBvYmogPSAkLm1ha2VBcnJheShvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FwcGVuZEFycmF5XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZnVsbGtleVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbihhcHBlbmRBcnJheSwgb2JqLCBmdWxsa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgYXJncyA9ICQubWFrZUFycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgIGFwcGVuZEFycmF5ID0gdHlwZW9mIGFyZ3MuZmlyc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5zaGlmdCgpIDogZmFsc2U7XG4gICAgICAgIG9iaiA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdvYmplY3QnIHx8ICQuaXNGdW5jdGlvbihhcmdzLmZpcnN0KCkpID8gYXJncy5zaGlmdCgpIDoge307XG4gICAgICAgIGlmICh0eXBlb2YgYXJncy5maXJzdCgpICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBrZXkgbXVzdCBiZSBzdHJpbmcgdHlwZSA6IFwiICsgYXJncy5maXJzdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBmdWxsa2V5ID0gYXJncy5zaGlmdCgpO1xuICAgICAgICB2YWx1ZSA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgbGV0IGtleXMgPSAkLm1hcCgkLnNwbGl0KGZ1bGxrZXksICcuJywgJy8nKSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBpZiAoL14oW15cXFtdKyk/XFxbKFteXFxdXSspP1xcXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluS2V5cyA9IFtrZXkubWF0Y2goL14oW15cXFtdKyk/LylbMV1dO1xuICAgICAgICAgICAgICAgIGxldCBpbkJyYWNrZXQgPSAvXFxbKFteXFxdXSspP1xcXS9nO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0TWF0Y2hlcztcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dE1hdGNoZXMgPSBpbkJyYWNrZXQuZXhlYyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluS2V5cy5wdXNoKG5leHRNYXRjaGVzWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluS2V5cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGlzTnVsbChvLCBrZXkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEoa2V5IGluIG8gJiYgKG9ba2V5XSAhPSBudWxsKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChpZ25vcmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGN1cnJPYmogPSBvYmo7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhcHBlbmRBcnJheSB8fCBpc051bGwoY3Vyck9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQuaXNBcnJheShjdXJyT2JqW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0gPSBbY3Vyck9ialtrZXldLCB2YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc051bGwoY3Vyck9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5c1tpICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAga2V5c1tpICsgMV0gPSAnMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XSA9IC9eXFxkKyQvLnRlc3Qoa2V5c1tpICsgMV0pID8gW10gOiB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGtleXNbaSArIDFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGtleXNbaSArIDFdID0gJC5pc0FycmF5KGN1cnJPYmpba2V5XSkgPyBjdXJyT2JqW2tleV0ubGVuZ3RoICsgJycgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJPYmogPSBjdXJyT2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZW5lcmFsaXplOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChrZXkuY29udGFpbnMoJy4nKSB8fCAvXFxbKFxcdyspP1xcXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICQub2JqLnNldCh0cnVlLCByZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXBdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXBwZW5kQXJyYXldXG4gICAgICogQHBhcmFtIHsqfE9iamVjdH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHsqfC4uLk9iamVjdH0gc291cmNlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dGVuZElmVW5kZWZpbmVkXVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uKGRlZXAsIGFwcGVuZEFycmF5LCB0YXJnZXQsIHNvdXJjZXMsIGV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgZGVlcCA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBhcHBlbmRBcnJheSA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBleHRlbmRJZlVuZGVmaW5lZCA9IHR5cGVvZiBhcmdzLmxhc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5wb3AoKSA6IGZhbHNlO1xuICAgICAgICB0YXJnZXQgPSBhcmdzLmxlbmd0aCA9PT0gMSA/IHt9IDogYXJncy5zaGlmdCgpIHx8IHt9O1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgISQuaXNGdW5jdGlvbih0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2VzID0gYXJncztcbiAgICAgICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmMgPSB0YXJnZXRbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weSA9IHNvdXJjZVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ID09PSB0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHlJc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBjb3B5ICYmICgkLmlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gJC5pc0FycmF5KGNvcHkpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvcHlJc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmNJc1BsYWluT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMgPT09IHVuZGVmaW5lZCB8fCAoc3JjSXNQbGFpbk9iamVjdCA9ICQuaXNQbGFpbk9iamVjdChzcmMpKSB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQub2JqLmV4dGVuZChkZWVwLCBhcHBlbmRBcnJheSwgKHNyY0lzUGxhaW5PYmplY3QgPyBzcmMgOiB7fSksIGNvcHksIGV4dGVuZElmVW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQubWVyZ2UoKGFwcGVuZEFycmF5ICYmICQuaXNBcnJheShzcmMpID8gc3JjIDogW10pLCAkLm9iai5leHRlbmQoZGVlcCwgW10sIGNvcHkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcHkgIT09IHVuZGVmaW5lZCAmJiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBuZXcgRGF0ZShjb3B5LmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3B5IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5nbG9iYWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5Lmlnbm9yZUNhc2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MgKz0gJ2knO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5Lm11bHRpbGluZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFncyArPSAnbSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkuc3RpY2t5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzICs9ICd5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBuZXcgUmVnRXhwKGNvcHkuc291cmNlLCBmbGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gY29weTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBrZXlWYWx1ZVBhaXJzXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uKC4uLmtleVZhbHVlUGFpcnMpIHtcbiAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleVZhbHVlUGFpcnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIG9ialtrZXlWYWx1ZVBhaXJzW2ldXSA9IGtleVZhbHVlUGFpcnNbaSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZW1wdHk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbn07XG5cbmZvciAobGV0IGtleSBpbiAkLm9iaikge1xuICAgIGxldCBzaG9ydEtleSA9IGtleSArICdPYmplY3QnO1xuICAgIGlmICghKHNob3J0S2V5IGluICQpKSB7XG4gICAgICAgIGlmICgkLm9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAkW3Nob3J0S2V5XSA9ICQub2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICQub2JqO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL29iai5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VwYXJhdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2VzY2FwZUNoYXJdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xpbWl0XVxuICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAqL1xuJC5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgc2VwYXJhdG9yLCBlc2NhcGVDaGFyLCBsaW1pdCkge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHN0ciArICcgaXMgbm90IGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgIGlmICh0eXBlb2Ygc2VwYXJhdG9yID09PSAnbnVtYmVyJykge1xuICAgICAgICBbbGltaXQsIHNlcGFyYXRvciwgZXNjYXBlQ2hhcl0gPSBbc2VwYXJhdG9yLCBudWxsLCBudWxsXVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVzY2FwZUNoYXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgIFtsaW1pdCwgZXNjYXBlQ2hhcl0gPSBbZXNjYXBlQ2hhciwgbnVsbF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW1pdGVkKGkpIHtcbiAgICAgICAgcmV0dXJuIDAgPCBsaW1pdCAmJiBsaW1pdCA8PSBpICsgMTtcbiAgICB9XG5cbiAgICBsZXQgcGFydHMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHMgPSAwO1xuICAgIGxldCBwO1xuICAgIHdoaWxlICgocCA9IHN0ci5pbmRleE9mKHNlcGFyYXRvciwgcykpICE9PSAtMSAmJiAhbGltaXRlZChpKSkge1xuICAgICAgICBsZXQgcGFydCA9IHN0ci5zbGljZShzLCBwKTtcbiAgICAgICAgbGV0IGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVzY2FwZUNoYXIgJiYgcGFydC5zbGljZSgtMSkgPT09IGVzY2FwZUNoYXIpIHtcbiAgICAgICAgICAgIHBhcnQgPSBwYXJ0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIGVzY2FwZWQgPSBwYXJ0LnNsaWNlKC0xKSAhPT0gZXNjYXBlQ2hhcjtcbiAgICAgICAgICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgcGFydCArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGFydHNbaV0gPSAocGFydHNbaV0gfHwgJycpICsgcGFydDtcbiAgICAgICAgcyA9IHAgKyAxO1xuICAgICAgICBpZiAoIWVzY2FwZWQpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocyA8PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHBhcnRzW2ldID0gKHBhcnRzW2ldIHx8ICcnKSArIHN0ci5zbGljZShzKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5zcGxpdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NwbGl0LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtqUXVlcnk8SFRNTEVsZW1lbnQ+fVxuICovXG4kLmZuLmZpbmRCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZCgnW25hbWU9XCInICsgKG5hbWUgfHwgJycpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSArICdcIl0nKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZmluZEJ5TmFtZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbmRCeU5hbWUuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBuYW1lc1xuICogQHJldHVybiB7alF1ZXJ5PEhUTUxFbGVtZW50Pn1cbiAqL1xuJC5mbi5maW5kQnlOYW1lcyA9IGZ1bmN0aW9uKC4uLm5hbWVzKSB7XG4gICAgaWYgKG5hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbmQobmFtZXMubWFwKG5hbWUgPT4gJ1tuYW1lPVwiJyArIChuYW1lIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCJdJykuam9pbignLCcpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZmluZEJ5TmFtZXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maW5kQnlOYW1lcy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuJC5mbi5ncm91cEJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBlbGVtID0gdGhpc1tpXTtcbiAgICAgICAgbGV0IGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBlbGVtLCBlbGVtLCBpLCB0aGlzKTtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gcmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gJChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHRoaXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLmdyb3VwQnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JvdXBCeS5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxIVE1MRWxlbWVudD58alF1ZXJ5PEhUTUxFbGVtZW50Pn0gZXhjbHVkZXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5mbi5tYXhaSW5kZXggPSBmdW5jdGlvbihleGNsdWRlcykge1xuICAgIGxldCB6SW5kZXggPSAwO1xuICAgIHRoaXMuZmluZCgnOnZpc2libGUnKS5hbmRTZWxmKCkuYWRkKHRoaXMucGFyZW50c1VudGlsKCdodG1sJykpLm5vdChleGNsdWRlcykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUgIT09ICcjZG9jdW1lbnQnKSB7XG4gICAgICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKFsnYWJzb2x1dGUnLCAncmVsYXRpdmUnLCAnZml4ZWQnXS5jb250YWlucygkdGhpcy5jc3MoJ3Bvc2l0aW9uJykpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoJHRoaXMuY3NzKCd6SW5kZXgnKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkgJiYgdmFsdWUgPiB6SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgekluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHpJbmRleDtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIE1heCB6SW5kZXggZnJvbSBkb2N1bWVudCBib2R5LlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8SFRNTEVsZW1lbnQ+fGpRdWVyeTxIVE1MRWxlbWVudD59IGV4Y2x1ZGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbiQubWF4WkluZGV4ID0gZnVuY3Rpb24oZXhjbHVkZXMpIHtcbiAgICByZXR1cm4gJChkb2N1bWVudC5ib2R5KS5tYXhaSW5kZXgoZXhjbHVkZXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5tYXhaSW5kZXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYXhaSW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vd2luZG93JykuZG9jdW1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2RvY3VtZW50LmpzXG4gKiovIiwiaWYgKCFnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkuZXh0ZW5kcyByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy93aW5kb3cuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5uZXh0VGljayA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5uZXh0VGljaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL25leHRUaWNrLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGF0YUFuZEV2ZW50c1xuICogQHBhcmFtIHtib29sZWFufSBkZWVwRGF0YUFuZEV2ZW50c1xuICogQHJldHVybiB7alF1ZXJ5PEhUTUxFbGVtZW50Pn1cbiAqL1xuJC5mbi5yZWNsb25lID0gZnVuY3Rpb24oZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBvbGRFbGVtID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IG5ld0VsZW0gPSBvbGRFbGVtLmNsb25lKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKTtcbiAgICAgICAgbmV3RWxlbS5pbnNlcnRBZnRlcih0aGlzKTtcbiAgICAgICAgb2xkRWxlbS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1bMF07XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnJlY2xvbmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVjbG9uZS5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKiBAcGFyYW0ge0FycmF5PHtuYW1lLHZhbHVlfT59IHBhcmFtc1xuICogQHJldHVybiB7bnVtYmVyfSBsZW5ndGggb2YgcGFyYW1ldGVyc1xuICovXG4kLnJlaW5kZXhBcnJheVBhcmFtcyA9IGZ1bmN0aW9uKHByZWZpeCwgcGFyYW1zKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBwcmVmaXgucmVwbGFjZSgnLicsICdcXFxcLicpICsgJylcXFxcWyhcXFxcZCspXFxcXF0nKTtcbiAgICBsZXQgcHJldkluZGV4ID0gbnVsbDtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBwYXJhbSBvZiBwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSByZWdleC5leGVjKHBhcmFtLm5hbWUpO1xuICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgICAgbGV0IGN1cnJJbmRleCA9IHJlc3VsdHNbMl07XG4gICAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSBjdXJySW5kZXgpIHtcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXggPSBjdXJySW5kZXg7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtLm5hbWUgPSBwYXJhbS5uYW1lLnJlcGxhY2UocmVnZXgsICckMVsnICsgaW5kZXggKyAnXScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQucmVpbmRleEFycmF5UGFyYW1zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlaW5kZXhBcnJheVBhcmFtcy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5yZXZlcnNlID0gQXJyYXkucHJvdG90eXBlLnJldmVyc2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZXZlcnNlLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbiQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghJC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZXhjZXB0ICYmICEkLmlzQXJyYXkob3B0aW9ucy5leGNlcHQpKSB7XG4gICAgICAgIG9wdGlvbnMuZXhjZXB0ID0gW29wdGlvbnMuZXhjZXB0XTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICQuZWFjaCh0aGlzLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob3B0aW9ucy5leGNlcHQgPT0gbnVsbCB8fCAhb3B0aW9ucy5leGNlcHQuY29udGFpbnModGhpcy5uYW1lKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQuaXNBcnJheShyZXN1bHRbdGhpcy5uYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3RoaXMubmFtZV0gPSBbcmVzdWx0W3RoaXMubmFtZV0sIHRoaXMudmFsdWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbdGhpcy5uYW1lXSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5zZXJpYWxpemVPYmplY3Q7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VyaWFsaXplT2JqZWN0LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4kLnNvbWUgPSBmdW5jdGlvbihpdGVtcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBpZiAoJC5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IGl0ZW1zLCBpdGVtc1tpXSwgaSwgaXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCQuaXNQbGFpbk9iamVjdChpdGVtcykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgaXRlbXMsIGl0ZW1zW2tleV0sIGtleSwgaXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoaXRlbXMgKyBcIiBpcyBub3QgYXJyYXkgb3IgcGxhaW4gb2JqZWN0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zb21lLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4kLnN1cHBvcnRzSW5wdXRUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IHR5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnN1cHBvcnRzSW5wdXRUeXBlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N1cHBvcnRzSW5wdXRUeXBlLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7WE1MfSB4bWxOb2RlIHRoZSB4bWwgbm9kZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuJC54bWxUb1N0cmluZyA9IGZ1bmN0aW9uKHhtbE5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKG5ldyBYTUxTZXJpYWxpemVyKCkpLnNlcmlhbGl6ZVRvU3RyaW5nKHhtbE5vZGUpO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICBpZiAoeG1sTm9kZS54bWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWE1MU2VyaWFsaXplciBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4bWxOb2RlLnhtbDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnhtbFRvU3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMveG1sVG9TdHJpbmcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9