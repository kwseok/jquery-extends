(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["jQuery"] = factory(require("jquery"));
	else
		root["jQuery"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(4);
	
	__webpack_require__(59);
	
	__webpack_require__(99);
	
	__webpack_require__(100);
	
	__webpack_require__(101);
	
	__webpack_require__(102);
	
	__webpack_require__(104);
	
	__webpack_require__(97);
	
	__webpack_require__(105);
	
	__webpack_require__(106);
	
	__webpack_require__(107);
	
	__webpack_require__(108);
	
	__webpack_require__(109);
	
	__webpack_require__(98);
	
	__webpack_require__(110);
	
	__webpack_require__(111);
	
	exports['default'] = $;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(2)["default"];
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	if (!_jquery2["default"]) {
	    throw new Error("jQuery.extends requires a jQuery");
	}
	
	module.exports = _jquery2["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequire = __webpack_require__(5)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _arrays = __webpack_require__(6);
	
	exports.arrays = _interopRequire(_arrays);
	
	var _regexps = __webpack_require__(27);
	
	exports.regexps = _interopRequire(_regexps);
	
	var _strings = __webpack_require__(37);
	
	exports.strings = _interopRequire(_strings);

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequire = __webpack_require__(5)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _arraysContains = __webpack_require__(7);
	
	exports.contains = _interopRequire(_arraysContains);
	
	var _arraysEvery = __webpack_require__(9);
	
	exports.every = _interopRequire(_arraysEvery);
	
	var _arraysFilter = __webpack_require__(10);
	
	exports.filter = _interopRequire(_arraysFilter);
	
	var _arraysFirst = __webpack_require__(13);
	
	exports.first = _interopRequire(_arraysFirst);
	
	var _arraysFlatMap = __webpack_require__(11);
	
	exports.flatMap = _interopRequire(_arraysFlatMap);
	
	var _arraysGroupBy = __webpack_require__(14);
	
	exports.groupBy = _interopRequire(_arraysGroupBy);
	
	var _arraysGrouped = __webpack_require__(15);
	
	exports.grouped = _interopRequire(_arraysGrouped);
	
	var _arraysGroupedRight = __webpack_require__(16);
	
	exports.groupedRight = _interopRequire(_arraysGroupedRight);
	
	var _arraysInclude = __webpack_require__(17);
	
	exports.include = _interopRequire(_arraysInclude);
	
	var _arraysIndexOf = __webpack_require__(8);
	
	exports.indexOf = _interopRequire(_arraysIndexOf);
	
	var _arraysIsArray = __webpack_require__(12);
	
	exports.isArray = _interopRequire(_arraysIsArray);
	
	var _arraysJoinPaths = __webpack_require__(18);
	
	exports.joinPaths = _interopRequire(_arraysJoinPaths);
	
	var _arraysLast = __webpack_require__(19);
	
	exports.last = _interopRequire(_arraysLast);
	
	var _arraysMap = __webpack_require__(20);
	
	exports.map = _interopRequire(_arraysMap);
	
	var _arraysMax = __webpack_require__(21);
	
	exports.max = _interopRequire(_arraysMax);
	
	var _arraysMin = __webpack_require__(23);
	
	exports.min = _interopRequire(_arraysMin);
	
	var _arraysRange = __webpack_require__(24);
	
	exports.range = _interopRequire(_arraysRange);
	
	var _arraysReduce = __webpack_require__(22);
	
	exports.reduce = _interopRequire(_arraysReduce);
	
	var _arraysRemove = __webpack_require__(25);
	
	exports.remove = _interopRequire(_arraysRemove);
	
	var _arraysSome = __webpack_require__(26);
	
	exports.some = _interopRequire(_arraysSome);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(8);
	
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
/* 8 */
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
	            if (i in this && this[i] === item) return i;
	        }
	        return -1;
	    };
	}
	
	exports["default"] = Array.prototype.indexOf;
	module.exports = exports["default"];

/***/ },
/* 9 */
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
	            if (!callback.call(context || this, this[i], i, this)) return false;
	        }
	        return true;
	    };
	}
	
	exports["default"] = Array.prototype.every;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(11);
	
	if (!Array.prototype.filter) {
	    /**
	     * @param {Function} callback
	     * @param {*} [context]
	     * @return {Array}
	     */
	    Array.prototype.filter = function (callback, context) {
	        var _this = this;
	
	        return this.flatMap(function (a, i) {
	            if (callback.call(context || _this, a, i, _this)) return a;
	        });
	    };
	}
	
	exports['default'] = Array.prototype.filter;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(12);
	
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
	            if (Array.isArray(result)) results.push.apply(results, result);else if (result) results.push(result);
	        }
	        return results;
	    };
	}
	
	exports['default'] = Array.prototype.flatMap;
	module.exports = exports['default'];

/***/ },
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
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
	                if (key in result) result[key].push(value);else result[key] = [value];
	            }
	        }
	        return result;
	    };
	}
	
	exports["default"] = Array.prototype.groupBy;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(8);
	
	if (!Array.prototype.include) {
	    Array.prototype.include = function (a) {
	        var i = this.indexOf(a);
	        if (i > -1) this[i] = a;else this.push(a);
	        return this;
	    };
	}
	
	exports['default'] = Array.prototype.include;
	module.exports = exports['default'];

/***/ },
/* 18 */
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
	                if (path.length > 0 && path.charAt(path.length - 1) !== '/') path += '/';
	
	                path += this[i].toString();
	            }
	        }
	        return path;
	    };
	}
	
	exports['default'] = Array.prototype.joinPaths;
	module.exports = exports['default'];

/***/ },
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(22);
	
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(22);
	
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
/* 24 */
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
	    Array.range = function (from, to) {
	        var step = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
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
/* 25 */
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
	            }
	        }
	        return this;
	    };
	}
	
	exports["default"] = Array.prototype.remove;
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequire = __webpack_require__(5)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _regexpsEscape = __webpack_require__(28);
	
	exports.escape = _interopRequire(_regexpsEscape);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _RegExp$escape = __webpack_require__(29)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!_RegExp$escape) {
	    /**
	     * @param {String} text
	     * @static
	     * @return {String}
	     */
	    RegExp.escape = function (text) {
	        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	    };
	}
	
	exports['default'] = _RegExp$escape;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	module.exports = __webpack_require__(35).RegExp.escape;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $def = __webpack_require__(32)
	  , $re  = __webpack_require__(36)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	$def($def.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(33)
	  , core      = __webpack_require__(35)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(window) {// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ },
/* 34 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	if (!global.document) {
	    throw new Error("jQuery.extends requires a window with a document");
	}
	
	module.exports = global;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 35 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequire = __webpack_require__(5)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _stringsAntStylePathToRegex = __webpack_require__(38);
	
	exports.antStylePathToRegex = _interopRequire(_stringsAntStylePathToRegex);
	
	var _stringsBr2nl = __webpack_require__(39);
	
	exports.br2nl = _interopRequire(_stringsBr2nl);
	
	var _stringsCompareTo = __webpack_require__(41);
	
	exports.compareTo = _interopRequire(_stringsCompareTo);
	
	var _stringsContains = __webpack_require__(42);
	
	exports.contains = _interopRequire(_stringsContains);
	
	var _stringsCutstring = __webpack_require__(43);
	
	exports.cutstring = _interopRequire(_stringsCutstring);
	
	var _stringsEndsWith = __webpack_require__(45);
	
	exports.endsWith = _interopRequire(_stringsEndsWith);
	
	var _stringsFormat = __webpack_require__(46);
	
	exports.format = _interopRequire(_stringsFormat);
	
	var _stringsFormatVariables = __webpack_require__(47);
	
	exports.formatVariables = _interopRequire(_stringsFormatVariables);
	
	var _stringsGetLength = __webpack_require__(44);
	
	exports.getLength = _interopRequire(_stringsGetLength);
	
	var _stringsGrouped = __webpack_require__(48);
	
	exports.grouped = _interopRequire(_stringsGrouped);
	
	var _stringsGroupedRight = __webpack_require__(49);
	
	exports.groupedRight = _interopRequire(_stringsGroupedRight);
	
	var _stringsLeftPad = __webpack_require__(50);
	
	exports.leftPad = _interopRequire(_stringsLeftPad);
	
	var _stringsNl2br = __webpack_require__(52);
	
	exports.nl2br = _interopRequire(_stringsNl2br);
	
	var _stringsQuote = __webpack_require__(54);
	
	exports.quote = _interopRequire(_stringsQuote);
	
	var _stringsRegex = __webpack_require__(55);
	
	exports.regex = _interopRequire(_stringsRegex);
	
	var _stringsRepeat = __webpack_require__(51);
	
	exports.repeat = _interopRequire(_stringsRepeat);
	
	var _stringsRightPad = __webpack_require__(56);
	
	exports.rightPad = _interopRequire(_stringsRightPad);
	
	var _stringsStartsWith = __webpack_require__(57);
	
	exports.startsWith = _interopRequire(_stringsStartsWith);
	
	var _stringsUnquote = __webpack_require__(58);
	
	exports.unquote = _interopRequire(_stringsUnquote);
	
	var _stringsXmlEscape = __webpack_require__(53);
	
	exports.xmlEscape = _interopRequire(_stringsXmlEscape);
	
	var _stringsXmlUnescape = __webpack_require__(40);
	
	exports.xmlUnescape = _interopRequire(_stringsXmlUnescape);

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.antStylePathToRegex) {
	    /**
	     * @return {RegExp}
	     */
	    String.prototype.antStylePathToRegex = function () {
	        if (this.length === 0) {
	            throw new RangeError("Path must not be empty.");
	        }
	        var path = this.replace(/\/{2,}/g, '/').replace(/[-[\]{}()+.,\\^$|#\s]/g, '\\$&');
	        var pattern = path.replace(/((\/?\*\*)|(\/?\*)|(\?)|(\/))/g, function ($0) {
	            switch ($0) {
	                case '/**':
	                    return '(?:/{1,}.*)?';
	                case '**':
	                    return '.*';
	                case '/*':
	                    return '(?:/{1,}[^/]*)?';
	                case '*':
	                    return '[^/]*';
	                case '?':
	                    return '[^/]';
	                case '/':
	                    return '/{1,}';
	            }
	        });
	        return new RegExp('^(' + pattern + ')$');
	    };
	}
	if (!String.prototype.a) {
	    String.prototype.a = String.prototype.antStylePathToRegex;
	}
	
	exports['default'] = String.prototype.antStylePathToRegex;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(40);
	
	if (!String.prototype.br2nl) {
	    /**
	     * @param {boolean} xmlUnescape
	     * @return {String}
	     */
	    String.prototype.br2nl = function (xmlUnescape) {
	        var result = this.replace(/(<br>|<br\/>)/g, '\n');
	        if (xmlUnescape) return result.xmlUnescape();
	        return result;
	    };
	}
	
	exports['default'] = String.prototype.br2nl;
	module.exports = exports['default'];

/***/ },
/* 40 */
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
	                    return "'";
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
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!String.prototype.compareTo) {
	    String.prototype.compareTo = function (str) {
	        if (str == null || this > str) return 1;
	        if (this < str) return -1;
	        return 0;
	    };
	}
	
	exports["default"] = String.prototype.compareTo;
	module.exports = exports["default"];

/***/ },
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(7);
	
	__webpack_require__(44);
	
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
	            throw new TypeError(argCurr() + " is not a number");
	        }
	        maxLength = argShift();
	
	        suffix = typeof argCurr() === 'string' ? argShift() : '';
	
	        var length = this.getLength(checkbyte);
	        if (!(length > maxLength)) return this;
	
	        var suffixLength = suffix.getLength(checkbyte);
	        if (suffixLength > maxLength) {
	            throw new RangeError("Max length must be more than suffix length");
	        }
	        var resultString = '';
	        var checkedLength = 0;
	        for (var i = 0; i < this.length; i++) {
	            var c = this.charAt(i);
	            var l = c.getLength(checkbyte);
	            if (checkedLength + l > maxLength - suffixLength) break;
	            checkedLength += l;
	            resultString += c;
	        }
	        return resultString + suffix;
	    };
	}
	
	exports['default'] = String.prototype.cutstring;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(7);
	
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
	        if (checkbyte === false) return this.length;
	
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
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(12);
	
	if (!String.prototype.format) {
	    String.prototype.format = function () {
	        var _arguments = arguments;
	
	        return this.replace(/(''|'\{|\}'|\{(\w+)\})/g, function ($0, $1, $2) {
	            switch ($1) {
	                case "''":
	                    return "'";
	                case "'{":
	                    return '{';
	                case "}'":
	                    return '}';
	                default:
	                    return (!/^\d+$/g.test($2) ? _arguments[0] || {} : Array.isArray(_arguments[0]) ? _arguments[0] : _arguments)[$2];
	            }
	        });
	    };
	}
	
	exports["default"] = String.prototype.format;
	module.exports = exports["default"];

/***/ },
/* 47 */
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
/* 48 */
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
	        if (typeof size !== 'number') size = parseInt(size);
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
/* 49 */
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
	        if (typeof size !== 'number') size = parseInt(size);
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(51);
	
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
	        if (!fillChar) fillChar = ' ';
	        if (this.length >= length) return this.toString();
	        return fillChar.repeat(length - this.length) + this.toString();
	    };
	}
	if (!String.prototype.lpad) {
	    String.prototype.lpad = String.prototype.leftPad;
	}
	
	exports['default'] = String.prototype.leftPad;
	module.exports = exports['default'];

/***/ },
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(53);
	
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
/* 53 */
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
	                case "'":
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
/* 54 */
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
	        if (typeof overlapable !== 'boolean') overlapable = true;
	        if (!overlapable && this.length >= 2) {
	            if (this.charAt(0) === '"' && this.charAt(this.length - 1) === '"') return this.toString();
	            if (this.charAt(0) === "'" && this.charAt(this.length - 1) === "'") return this.toString();
	        }
	        return '"' + this + '"';
	    };
	}
	
	exports['default'] = String.prototype.quote;
	module.exports = exports['default'];

/***/ },
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(51);
	
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
	        if (!fillChar) fillChar = ' ';
	        if (this.length >= length) return this.toString();
	        return this.toString() + fillChar.repeat(length - this.length);
	    };
	}
	if (!String.prototype.rpad) {
	    String.prototype.rpad = String.prototype.rightPad;
	}
	
	exports['default'] = String.prototype.rightPad;
	module.exports = exports['default'];

/***/ },
/* 57 */
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
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	if (!String.prototype.unquote) {
	    String.prototype.unquote = function () {
	        if (this.length >= 2 && (this.charAt(0) === '"' && this.charAt(this.length - 1) === '"' || this.charAt(0) === "'" && this.charAt(this.length - 1) === "'")) {
	            return this.slice(1, -1);
	        }
	        return this.toString();
	    };
	}
	
	exports['default'] = String.prototype.unquote;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _slicedToArray = __webpack_require__(60)['default'];
	
	var _getIterator = __webpack_require__(61)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(4);
	
	__webpack_require__(97);
	
	/**
	 * @param {string} queryString
	 * @param {Object} [options]
	 * @return {Object}
	 */
	$.deserialize = function (queryString, options) {
	    if (typeof queryString !== 'string' || queryString === '') {
	        return {};
	    }
	    var pairs = queryString.split(/&amp;|&/i);
	    if (!$.isPlainObject(options)) options = {};else if (options.except && !$.isArray(options.except)) options.except = [options.except];
	    var o = {};
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = _getIterator(pairs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var pair = _step.value;
	
	            var _pair$split = pair.split('=');
	
	            var _pair$split2 = _slicedToArray(_pair$split, 2);
	
	            var _name = _pair$split2[0];
	            var value = _pair$split2[1];
	
	            _name = decodeURIComponent(_name);
	            value = decodeURIComponent(value);
	            if (options.except == null || !options.except.contains(_name)) $.obj.set(true, o, _name, value);
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
	
	exports['default'] = $.deserialize;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getIterator = __webpack_require__(61)["default"];
	
	var _isIterable = __webpack_require__(94)["default"];
	
	exports["default"] = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (_isIterable(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	__webpack_require__(86);
	module.exports = __webpack_require__(89);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	var Iterators = __webpack_require__(67);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(65)
	  , step       = __webpack_require__(66)
	  , Iterators  = __webpack_require__(67)
	  , toIObject  = __webpack_require__(68);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(72)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(69)
	  , defined = __webpack_require__(71);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(70);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(73)
	  , $def            = __webpack_require__(32)
	  , $redef          = __webpack_require__(74)
	  , hide            = __webpack_require__(75)
	  , has             = __webpack_require__(80)
	  , SYMBOL_ITERATOR = __webpack_require__(81)('iterator')
	  , Iterators       = __webpack_require__(67)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(84)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(76).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(85)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(75);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(76)
	  , createDesc = __webpack_require__(77);
	module.exports = __webpack_require__(78) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(79)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(82)('wks')
	  , Symbol = __webpack_require__(33).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(83))('Symbol.' + name));
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(33)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(76)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(75)(IteratorPrototype, __webpack_require__(81)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(77)(1,next)});
	  __webpack_require__(85)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(76).setDesc
	  , has = __webpack_require__(80)
	  , TAG = __webpack_require__(81)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(87)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(72)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(88)
	  , defined   = __webpack_require__(71);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(90)
	  , get      = __webpack_require__(92);
	module.exports = __webpack_require__(35).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(91);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(93)
	  , ITERATOR  = __webpack_require__(81)('iterator')
	  , Iterators = __webpack_require__(67);
	module.exports = __webpack_require__(35).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(70)
	  , TAG = __webpack_require__(81)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	__webpack_require__(86);
	module.exports = __webpack_require__(96);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(93)
	  , ITERATOR  = __webpack_require__(81)('iterator')
	  , Iterators = __webpack_require__(67);
	module.exports = __webpack_require__(35).isIterable = function(it){
	  var O = Object(it);
	  return ITERATOR in O
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _getIterator = __webpack_require__(61)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(4);
	
	__webpack_require__(98);
	
	$.obj = {
	
	    /**
	     * @param {Object} obj
	     * @param {string} key
	     * @param {*} [defaultValue]
	     * @return {*}
	     */
	    get: function get(obj, key, defaultValue) {
	        if (obj == null) return defaultValue;
	        if (!key) return obj;
	        var keyFragments = $.split(key, '.', '/');
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = _getIterator(keyFragments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var keyFragment = _step.value;
	
	                if ((obj = obj[keyFragment]) == null) return defaultValue;
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
	
	        if ($.isArray(defaultValue) && !$.isArray(obj)) obj = $.makeArray(obj);
	
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
	        var args = $.makeArray(arguments);
	        appendArray = typeof args.first() === 'boolean' ? args.shift() : false;
	        obj = typeof args.first() === 'object' || $.isFunction(args.first()) ? args.shift() : {};
	        if (typeof args.first() !== 'string') {
	            throw new TypeError("Object key must be string type : " + args.first());
	        }
	        fullkey = args.shift();
	        value = args.shift();
	        var keys = $.map($.split(fullkey, '.', '/'), function (key) {
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
	                if (!appendArray || isNull(currObj, key)) currObj[key] = value;else if ($.isArray(currObj[key])) currObj[key].push(value);else currObj[key] = [currObj[key], value];
	            } else if (isNull(currObj, key)) {
	                if (!keys[i + 1]) keys[i + 1] = '0';
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
	    generalize: function generalize(obj) {
	        if (!$.isPlainObject(obj)) return obj;
	        var result = {};
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                var value = obj[key];
	                if (key.contains('.') || /\[(\w+)?\]/.test(key)) $.obj.set(true, result, key, value);else result[key] = value;
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
	        var args = $.makeArray(arguments);
	        deep = typeof args.first() === 'boolean' ? args.shift() : false;
	        appendArray = typeof args.first() === 'boolean' ? args.shift() : false;
	        extendIfUndefined = typeof args.last() === 'boolean' ? args.pop() : false;
	        target = args.length === 1 ? {} : args.shift() || {};
	        if (typeof target !== 'object' && !$.isFunction(target)) target = {};
	
	        sources = args;
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	            for (var _iterator2 = _getIterator(sources), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var source = _step2.value;
	
	                if (source != null) {
	                    for (var _name in source) {
	                        if (source.hasOwnProperty(_name)) {
	                            var src = target[_name];
	                            var copy = source[_name];
	                            if (copy === target) continue;
	                            var copyIsArray = false;
	                            if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
	                                if (!copyIsArray) {
	                                    var srcIsPlainObject = false;
	                                    if (src === undefined || (srcIsPlainObject = $.isPlainObject(src)) || !extendIfUndefined) {
	                                        target[_name] = $.obj.extend(deep, appendArray, srcIsPlainObject ? src : {}, copy, extendIfUndefined);
	                                    }
	                                } else if (src === undefined || !extendIfUndefined) {
	                                    target[_name] = $.merge(appendArray && $.isArray(src) ? src : [], $.obj.extend(deep, [], copy));
	                                }
	                            } else if (copy !== undefined && (src === undefined || !extendIfUndefined)) {
	                                if (copy instanceof Date) {
	                                    target[_name] = new Date(copy.getTime());
	                                } else if (copy instanceof RegExp) {
	                                    var flags = '';
	                                    if (copy.global != null) flags += 'g';
	                                    if (copy.ignoreCase != null) flags += 'i';
	                                    if (copy.multiline != null) flags += 'm';
	                                    if (copy.sticky != null) flags += 'y';
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
	        if ($.isPlainObject(obj)) {
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key)) delete obj[key];
	            }
	        }
	        return obj;
	    }
	};
	
	for (var key in $.obj) {
	    var shortKey = key + 'Object';
	    if (!(shortKey in $)) {
	        if ($.obj.hasOwnProperty(key)) $[shortKey] = $.obj[key];
	    }
	}
	
	exports['default'] = $.obj;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {string} str
	 * @param {string} separator
	 * @param {string} [escapeChar]
	 * @param {number} [limit]
	 * @return {Array<string>}
	 */
	$.split = function (str, separator, escapeChar, limit) {
	    if (typeof str !== 'string') {
	        throw new TypeError(str + ' is not a string');
	    }
	    str = str.toString();
	    if (typeof separator === 'number') {
	        ;
	        var _ref = [separator, null, null];
	        limit = _ref[0];
	        separator = _ref[1];
	        escapeChar = _ref[2];
	    } else if (typeof escapeChar === 'number') {
	        ;
	
	        var _ref2 = [escapeChar, null];
	        limit = _ref2[0];
	        escapeChar = _ref2[1];
	    }function limited(i) {
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
	            if (escaped) part += separator;
	        }
	        parts[i] = (parts[i] || '') + part;
	        s = p + 1;
	        if (!escaped) i++;
	    }
	    if (s <= str.length) parts[i] = (parts[i] || '') + str.slice(s);
	
	    return parts;
	};
	
	exports['default'] = $.split;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {string} name
	 * @return {jQuery<HTMLElement>}
	 */
	$.fn.findByName = function (name) {
	  return this.find('[name="' + (name || '').replace(/"/g, '\\"') + '"]');
	};
	
	exports['default'] = $.fn.findByName;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {Array<string>} names
	 * @return {jQuery<HTMLElement>}
	 */
	$.fn.findByNames = function () {
	  for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
	    names[_key] = arguments[_key];
	  }
	
	  if (names.length === 0) return $([]);
	  return this.find(names.map(function (name) {
	    return '[name="' + (name || '').replace(/"/g, '\\"') + '"]';
	  }).join(','));
	};
	
	exports['default'] = $.fn.findByNames;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {Function} callback
	 * @param {*} [context]
	 * @return {Object}
	 */
	$.fn.groupBy = function (callback, context) {
	    if (!$.isFunction(callback)) {
	        throw new TypeError(callback + " is not a function");
	    }
	    var result = {};
	    for (var i = 0; i < this.length; i++) {
	        var elem = this[i];
	        var key = callback.call(context || elem, elem, i, this);
	        if (key !== undefined) {
	            if (!(key in result)) result[key] = $([]);
	
	            result[key].push(this[i]);
	        }
	    }
	    return result;
	};
	
	exports["default"] = $.fn.groupBy;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, document) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {string|Array<HTMLElement>|jQuery<HTMLElement>} excludes
	 * @return {number}
	 */
	$.fn.maxZIndex = function (excludes) {
	    var zIndex = 0;
	    this.find(':visible').andSelf().add(this.parentsUntil('html')).not(excludes).each(function () {
	        if (this.nodeName !== '#document') {
	            var $this = $(this);
	            if (['absolute', 'relative', 'fixed'].contains($this.css('position'))) {
	                var value = parseInt($this.css('zIndex'));
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
	$.maxZIndex = function (excludes) {
	    return $(document.body).maxZIndex(excludes);
	};
	
	exports['default'] = $.fn.maxZIndex;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(103)))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	var _window = __webpack_require__(34);
	
	var _window2 = _interopRequireDefault(_window);
	
	module.exports = _window2['default'].document;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {Function} callback
	 * @return {number}
	 */
	$.nextTick = function (callback) {
	  return setTimeout(callback, 0);
	};
	
	exports['default'] = $.nextTick;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {boolean} dataAndEvents
	 * @param {boolean} deepDataAndEvents
	 * @return {jQuery<HTMLElement>}
	 */
	$.fn.reclone = function (dataAndEvents, deepDataAndEvents) {
	    return this.map(function () {
	        var oldElem = $(this);
	        var newElem = oldElem.clone(dataAndEvents, deepDataAndEvents);
	        newElem.insertAfter(this);
	        oldElem.remove();
	        return newElem[0];
	    });
	};
	
	exports['default'] = $.fn.reclone;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _getIterator = __webpack_require__(61)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {string} prefix
	 * @param {Array<{name,value}>} params
	 * @return {number} length of parameters
	 */
	$.reindexArrayParams = function (prefix, params) {
	    var regex = new RegExp('^(' + prefix.replace('.', '\\.') + ')\\[(\\d+)\\]');
	    var prevIndex = null;
	    var index = -1;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = _getIterator(params), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	
	exports['default'] = $.reindexArrayParams;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(4);
	
	exports['default'] = $.fn.reverse = Array.prototype.reverse;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {Object} options
	 * @return {Object}
	 */
	$.fn.serializeObject = function (options) {
	    if (!$.isPlainObject(options)) options = {};else if (options.except && !$.isArray(options.except)) options.except = [options.except];
	    var result = {};
	    $.each(this.serializeArray(), function () {
	        if (options.except == null || !options.except.contains(this.name)) {
	            if (this.name in result) {
	                if (!$.isArray(result[this.name])) result[this.name] = [result[this.name], this.value];else result[this.name].push(this.value);
	            } else {
	                result[this.name] = this.value;
	            }
	        }
	    });
	    return result;
	};
	
	exports['default'] = $.fn.serializeObject;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {Array|Object} items
	 * @param {Function} callback
	 * @param {*} [context]
	 * @return {boolean}
	 */
	$.some = function (items, callback, context) {
	    if (!$.isFunction(callback)) {
	        throw new TypeError(callback + " is not a function");
	    }
	    if ($.isArray(items)) {
	        for (var i = 0; i < items.length; i++) {
	            if (callback.call(context || items, items[i], i, items)) return true;
	        }
	    } else if ($.isPlainObject(items)) {
	        for (var key in items) {
	            if (items.hasOwnProperty(key)) {
	                if (callback.call(context || items, items[key], key, items)) return true;
	            }
	        }
	    } else {
	        throw new TypeError(items + " is not array or plain object");
	    }
	    return false;
	};
	
	exports["default"] = $.some;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(document, $) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {string} type
	 * @return {boolean}
	 */
	$.supportsInputType = function (type) {
	  var input = document.createElement('input');
	  input.setAttribute('type', type);
	  return input.type === type;
	};
	
	exports['default'] = $.supportsInputType;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(103), __webpack_require__(1)))

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(4);
	
	/**
	 * @param {XML} xmlNode the xml node.
	 * @return {string}
	 */
	$.xmlToString = function (xmlNode) {
	    try {
	        return new XMLSerializer().serializeToString(xmlNode);
	    } catch (_error) {
	        if (xmlNode.xml == null) throw new Error("XMLSerializer not supported");
	
	        return xmlNode.xml;
	    }
	};
	
	exports["default"] = $.xmlToString;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZWVjM2ZjYWExZDI1NjA3MjVkYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9ldmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2ZsYXRNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9ncm91cEJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZ3JvdXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2dyb3VwZWRSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9qb2luUGF0aHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9sYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvbWF4LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvcmVkdWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvbWluLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9zb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9yZWdleHBzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9yZWdleHBzL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9yZWdleHAvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3JlZ2V4cC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvd2luZG93LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZXBsYWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9hbnRTdHlsZVBhdGhUb1JlZ2V4LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2JyMm5sLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3htbFVuZXNjYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2NvbXBhcmVUby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9jdXRzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2VuZHNXaXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvZ3JvdXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9ncm91cGVkUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvbGVmdFBhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvbmwyYnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MveG1sRXNjYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3F1b3RlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3JlZ2V4LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3JpZ2h0UGFkLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3N0YXJ0c1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvdW5xdW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkLXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51bnNjb3BlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdXBwb3J0LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwbGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9maW5kQnlOYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9maW5kQnlOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF4WkluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXh0VGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVpbmRleEFycmF5UGFyYW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXZlcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJpYWxpemVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cHBvcnRzSW5wdXRUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy94bWxUb1N0cmluZy5qcyJdLCJuYW1l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QU8sQ0FBQyxDQUFDO01BQzNELENBQUMsT0FBTyxNQUFNLEVBQUU7QUFDYixhQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7O0FBRW5ELGdCQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7TUFDdEI7RUFDSixDQUFDOztzQkFFYSxDQUFDLENBQUMsV0FBVyIsImZpbGUiOiJqcXVlcnktZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wialF1ZXJ5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqUXVlcnlcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGZlZWMzZmNhYTFkMjU2MDcyNWRjXG4gKiovIiwiaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuaW1wb3J0ICcuL2Rlc2VyaWFsaXplJ1xuaW1wb3J0ICcuL2ZpbmRCeU5hbWUnXG5pbXBvcnQgJy4vZmluZEJ5TmFtZXMnXG5pbXBvcnQgJy4vZ3JvdXBCeSdcbmltcG9ydCAnLi9tYXhaSW5kZXgnXG5pbXBvcnQgJy4vbmV4dFRpY2snXG5pbXBvcnQgJy4vb2JqJ1xuaW1wb3J0ICcuL3JlY2xvbmUnXG5pbXBvcnQgJy4vcmVpbmRleEFycmF5UGFyYW1zJ1xuaW1wb3J0ICcuL3JldmVyc2UnXG5pbXBvcnQgJy4vc2VyaWFsaXplT2JqZWN0J1xuaW1wb3J0ICcuL3NvbWUnXG5pbXBvcnQgJy4vc3BsaXQnXG5pbXBvcnQgJy4vc3VwcG9ydHNJbnB1dFR5cGUnXG5pbXBvcnQgJy4veG1sVG9TdHJpbmcnXG5leHBvcnQgZGVmYXVsdCAkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeS5leHRlbmRzIHJlcXVpcmVzIGEgalF1ZXJ5XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2pxdWVyeS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlzIH0gZnJvbSAnLi9hcnJheXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZ2V4cHMgfSBmcm9tICcuL3JlZ2V4cHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ3MgfSBmcm9tICcuL3N0cmluZ3MnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9pbmRleC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmo7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRhaW5zIH0gZnJvbSAnLi9hcnJheXMvY29udGFpbnMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGV2ZXJ5IH0gZnJvbSAnLi9hcnJheXMvZXZlcnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbHRlciB9IGZyb20gJy4vYXJyYXlzL2ZpbHRlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyc3QgfSBmcm9tICcuL2FycmF5cy9maXJzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxhdE1hcCB9IGZyb20gJy4vYXJyYXlzL2ZsYXRNYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdyb3VwQnkgfSBmcm9tICcuL2FycmF5cy9ncm91cEJ5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBncm91cGVkIH0gZnJvbSAnLi9hcnJheXMvZ3JvdXBlZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JvdXBlZFJpZ2h0IH0gZnJvbSAnLi9hcnJheXMvZ3JvdXBlZFJpZ2h0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbmNsdWRlIH0gZnJvbSAnLi9hcnJheXMvaW5jbHVkZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5kZXhPZiB9IGZyb20gJy4vYXJyYXlzL2luZGV4T2YnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQXJyYXkgfSBmcm9tICcuL2FycmF5cy9pc0FycmF5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBqb2luUGF0aHMgfSBmcm9tICcuL2FycmF5cy9qb2luUGF0aHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxhc3QgfSBmcm9tICcuL2FycmF5cy9sYXN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXAgfSBmcm9tICcuL2FycmF5cy9tYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heCB9IGZyb20gJy4vYXJyYXlzL21heCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWluIH0gZnJvbSAnLi9hcnJheXMvbWluJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByYW5nZSB9IGZyb20gJy4vYXJyYXlzL3JhbmdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2UgfSBmcm9tICcuL2FycmF5cy9yZWR1Y2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbW92ZSB9IGZyb20gJy4vYXJyYXlzL3JlbW92ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29tZSB9IGZyb20gJy4vYXJyYXlzL3NvbWUnXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzLmpzXG4gKiovIiwiaW1wb3J0ICcuL2luZGV4T2YnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBhXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4T2YoYSkgPj0gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5jb250YWlucztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9jb250YWlucy5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvaW5kZXhPZi5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmV2ZXJ5KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmV2ZXJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ldmVyeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9ldmVyeS5qc1xuICoqLyIsImltcG9ydCAnLi9mbGF0TWFwJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maWx0ZXIpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYXRNYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgYSwgaSwgdGhpcykpIHJldHVybiBhO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2ZpbHRlci5qc1xuICoqLyIsImltcG9ydCAnLi9pc0FycmF5J1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5mbGF0TWFwKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4gQXJyYXlcbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZmxhdE1hcCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIHJlc3VsdCk7XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZmxhdE1hcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9mbGF0TWFwLmpzXG4gKiovIiwiaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBvYmpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBBcnJheS5pc0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5pc0FycmF5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9pc0FycmF5LmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUuZmlyc3QpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbMF07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maXJzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9maXJzdC5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwQnkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7e319XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW2ldO1xuICAgICAgICAgICAgbGV0IGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB2YWx1ZSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiByZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmdyb3VwQnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvZ3JvdXBCeS5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PEFycmF5Pn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShpLCBpICsgc2l6ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ncm91cGVkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2dyb3VwZWQuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PEFycmF5Pn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKE1hdGgubWF4KDAsIGkgLSBzaXplKSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2dyb3VwZWRSaWdodC5qc1xuICoqLyIsImltcG9ydCAnLi9pbmRleE9mJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmluY2x1ZGUgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5pbmRleE9mKGEpO1xuICAgICAgICBpZiAoaSA+IC0xKVxuICAgICAgICAgICAgdGhpc1tpXSA9IGE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucHVzaChhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmluY2x1ZGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvaW5jbHVkZS5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmpvaW5QYXRocykge1xuICAgIEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSAhPT0gJy8nKVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9ICcvJztcblxuICAgICAgICAgICAgICAgIHBhdGggKz0gdGhpc1tpXS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvam9pblBhdGhzLmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUubGFzdCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5sYXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2xhc3QuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5tYXApIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLm1hcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9tYXAuanNcbiAqKi8iLCJpbXBvcnQgJy4vcmVkdWNlJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5tYXgpIHtcbiAgICBBcnJheS5wcm90b3R5cGUubWF4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZSgoYSwgYikgPT4gKGEgPiBiKSA/IGEgOiBiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5tYXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvbWF4LmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUucmVkdWNlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghKHRoaXMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgcmVzdWx0LCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5yZWR1Y2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvcmVkdWNlLmpzXG4gKiovIiwiaW1wb3J0ICcuL3JlZHVjZSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubWluKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoKGEsIGIpID0+IChhIDwgYikgPyBhIDogYik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL21pbi5qc1xuICoqLyIsImlmICghQXJyYXkucmFuZ2UpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGZyb21cbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHRvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgQXJyYXkucmFuZ2UgPSBmdW5jdGlvbihmcm9tLCB0bywgc3RlcCA9IDEpIHtcbiAgICAgICAgbGV0IHJhbmdlID0gW107XG4gICAgICAgIGxldCBpc051bWJlciA9IHR5cGVvZiBmcm9tID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG8gPT09ICdudW1iZXInO1xuICAgICAgICBsZXQgYmVnaW4gPSBpc051bWJlciA/IGZyb20gOiBmcm9tLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgbGV0IGVuZCA9IGlzTnVtYmVyID8gdG8gOiB0by50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBiZWdpbjsgc3RlcCA+IDAgPyBpIDw9IGVuZCA6IGkgPj0gZW5kOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHJhbmdlLnB1c2goaXNOdW1iZXIgPyBpIDogU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnJhbmdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL3JhbmdlLmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUucmVtb3ZlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLnJlbW92ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9yZW1vdmUuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5zb21lKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLnNvbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5zb21lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL3NvbWUuanNcbiAqKi8iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGVzY2FwZSB9IGZyb20gJy4vcmVnZXhwcy9lc2NhcGUnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9yZWdleHBzLmpzXG4gKiovIiwiaWYgKCFSZWdFeHAuZXNjYXBlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIFJlZ0V4cC5lc2NhcGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnRXhwLmVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3JlZ2V4cHMvZXNjYXBlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3JlZ2V4cC9lc2NhcGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcmVnZXhwL2VzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5yZWdleHAuZXNjYXBlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuUmVnRXhwLmVzY2FwZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcmVnZXhwL2VzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5nci9SZXhFeHAuZXNjYXBlXG52YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsICRyZSAgPSByZXF1aXJlKCcuLyQucmVwbGFjZXInKSgvW1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbiRkZWYoJGRlZi5TLCAnUmVnRXhwJywge2VzY2FwZTogZnVuY3Rpb24gZXNjYXBlKGl0KXsgcmV0dXJuICRyZShpdCk7IH19KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5yZWdleHAuZXNjYXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgY3R4ID0gZnVuY3Rpb24oZm4sIHRoYXQpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG52YXIgJGRlZiA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuICAgICwgaXNQcm90byAgPSB0eXBlICYgJGRlZi5QXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICEodHlwZSAmICRkZWYuRikgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBpZihpc0dsb2JhbCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJylleHAgPSBzb3VyY2Vba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBleHBbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICB9KG91dCk7XG4gICAgZWxzZSBleHAgPSBpc1Byb3RvICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydFxuICAgIGV4cG9ydHNba2V5XSA9IGV4cDtcbiAgICBpZihpc1Byb3RvKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXG4kZGVmLkcgPSAyOyAgLy8gZ2xvYmFsXG4kZGVmLlMgPSA0OyAgLy8gc3RhdGljXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cbiRkZWYuQiA9IDE2OyAvLyBiaW5kXG4kZGVmLlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZGVmO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpZiAoIWdsb2JhbC5kb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeS5leHRlbmRzIHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL3dpbmRvdy5qc1xuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi4yJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWdFeHAsIHJlcGxhY2Upe1xuICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcbiAgfSA6IHJlcGxhY2U7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZXBsYWNlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFudFN0eWxlUGF0aFRvUmVnZXggfSBmcm9tICcuL3N0cmluZ3MvYW50U3R5bGVQYXRoVG9SZWdleCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYnIybmwgfSBmcm9tICcuL3N0cmluZ3MvYnIybmwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBhcmVUbyB9IGZyb20gJy4vc3RyaW5ncy9jb21wYXJlVG8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRhaW5zIH0gZnJvbSAnLi9zdHJpbmdzL2NvbnRhaW5zJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXRzdHJpbmcgfSBmcm9tICcuL3N0cmluZ3MvY3V0c3RyaW5nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbmRzV2l0aCB9IGZyb20gJy4vc3RyaW5ncy9lbmRzV2l0aCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0IH0gZnJvbSAnLi9zdHJpbmdzL2Zvcm1hdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0VmFyaWFibGVzIH0gZnJvbSAnLi9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0TGVuZ3RoIH0gZnJvbSAnLi9zdHJpbmdzL2dldExlbmd0aCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JvdXBlZCB9IGZyb20gJy4vc3RyaW5ncy9ncm91cGVkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBncm91cGVkUmlnaHQgfSBmcm9tICcuL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZWZ0UGFkIH0gZnJvbSAnLi9zdHJpbmdzL2xlZnRQYWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5sMmJyIH0gZnJvbSAnLi9zdHJpbmdzL25sMmJyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBxdW90ZSB9IGZyb20gJy4vc3RyaW5ncy9xdW90ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVnZXggfSBmcm9tICcuL3N0cmluZ3MvcmVnZXgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlcGVhdCB9IGZyb20gJy4vc3RyaW5ncy9yZXBlYXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJpZ2h0UGFkIH0gZnJvbSAnLi9zdHJpbmdzL3JpZ2h0UGFkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGFydHNXaXRoIH0gZnJvbSAnLi9zdHJpbmdzL3N0YXJ0c1dpdGgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVucXVvdGUgfSBmcm9tICcuL3N0cmluZ3MvdW5xdW90ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgeG1sRXNjYXBlIH0gZnJvbSAnLi9zdHJpbmdzL3htbEVzY2FwZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgeG1sVW5lc2NhcGUgfSBmcm9tICcuL3N0cmluZ3MveG1sVW5lc2NhcGUnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXgpIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtSZWdFeHB9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJQYXRoIG11c3Qgbm90IGJlIGVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMucmVwbGFjZSgvXFwvezIsfS9nLCAnLycpLnJlcGxhY2UoL1stW1xcXXt9KCkrLixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICAgICAgICBsZXQgcGF0dGVybiA9IHBhdGgucmVwbGFjZSgvKChcXC8/XFwqXFwqKXwoXFwvP1xcKil8KFxcPyl8KFxcLykpL2csICgkMCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICgkMCkge1xuICAgICAgICAgICAgY2FzZSAnLyoqJzogcmV0dXJuICcoPzovezEsfS4qKT8nO1xuICAgICAgICAgICAgY2FzZSAnKionOiByZXR1cm4gJy4qJztcbiAgICAgICAgICAgIGNhc2UgJy8qJzogcmV0dXJuICcoPzovezEsfVteL10qKT8nO1xuICAgICAgICAgICAgY2FzZSAnKic6IHJldHVybiAnW14vXSonO1xuICAgICAgICAgICAgY2FzZSAnPyc6IHJldHVybiAnW14vXSc7XG4gICAgICAgICAgICBjYXNlICcvJzogcmV0dXJuICcvezEsfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgcGF0dGVybiArICcpJCcpO1xuICAgIH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUuYSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUuYSA9IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9hbnRTdHlsZVBhdGhUb1JlZ2V4LmpzXG4gKiovIiwiaW1wb3J0ICcuL3htbFVuZXNjYXBlJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuYnIybmwpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbFVuZXNjYXBlXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuYnIybmwgPSBmdW5jdGlvbih4bWxVbmVzY2FwZSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5yZXBsYWNlKC8oPGJyPnw8YnJcXC8+KS9nLCAnXFxuJyk7XG4gICAgICAgIGlmICh4bWxVbmVzY2FwZSkgcmV0dXJuIHJlc3VsdC54bWxVbmVzY2FwZSgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuYnIybmw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2JyMm5sLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oJmx0O3wmZ3Q7fCYjMzQ7fCYjMzk7fCZhbXA7KS9nLCAoJDEpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJyZsdDsnOiByZXR1cm4gJzwnO1xuICAgICAgICAgICAgY2FzZSAnJmd0Oyc6IHJldHVybiAnPic7XG4gICAgICAgICAgICBjYXNlICcmIzM0Oyc6IHJldHVybiAnXCInO1xuICAgICAgICAgICAgY2FzZSAnJiMzOTsnOiByZXR1cm4gXCInXCI7XG4gICAgICAgICAgICBjYXNlICcmYW1wOyc6IHJldHVybiAnJic7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MveG1sVW5lc2NhcGUuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG8gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgaWYgKHN0ciA9PSBudWxsIHx8IHRoaXMgPiBzdHIpIHJldHVybiAxO1xuICAgICAgICBpZiAodGhpcyA8IHN0cikgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvY29tcGFyZVRvLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihzdHIpIHsgcmV0dXJuIHRoaXMuaW5kZXhPZihzdHIpID4gLTE7IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY29udGFpbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2NvbnRhaW5zLmpzXG4gKiovIiwiaW1wb3J0ICcuLi9hcnJheXMvY29udGFpbnMnXG5pbXBvcnQgJy4vZ2V0TGVuZ3RoJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aCB0aGUgbWF4IGxlbmd0aC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3N1ZmZpeF0gdGhlIHN1ZmZpeC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmcgPSBmdW5jdGlvbihjaGVja2J5dGUsIG1heExlbmd0aCwgc3VmZml4KSB7XG4gICAgICAgIGxldCBhcmdJbmRleCA9IDA7XG4gICAgICAgIGxldCBhcmdDdXJyID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4XTtcbiAgICAgICAgbGV0IGFyZ1NoaWZ0ID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXG4gICAgICAgIGNoZWNrYnl0ZSA9IFsnYm9vbGVhbicsICdudW1iZXInXS5jb250YWlucyh0eXBlb2YgYXJnQ3VycigpKSA/IGFyZ1NoaWZ0KCkgOiBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ0N1cnIoKSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYXJnQ3VycigpICsgXCIgaXMgbm90IGEgbnVtYmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIG1heExlbmd0aCA9IGFyZ1NoaWZ0KCk7XG5cbiAgICAgICAgc3VmZml4ID0gdHlwZW9mIGFyZ0N1cnIoKSA9PT0gJ3N0cmluZycgPyBhcmdTaGlmdCgpIDogJyc7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgIGlmICghKGxlbmd0aCA+IG1heExlbmd0aCkpIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGxldCBzdWZmaXhMZW5ndGggPSBzdWZmaXguZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgIGlmIChzdWZmaXhMZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWF4IGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiBzdWZmaXggbGVuZ3RoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IGNoZWNrZWRMZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBsZXQgbCA9IGMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZExlbmd0aCArIGwgPiBtYXhMZW5ndGggLSBzdWZmaXhMZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgY2hlY2tlZExlbmd0aCArPSBsO1xuICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IGM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFN0cmluZyArIHN1ZmZpeDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvY3V0c3RyaW5nLmpzXG4gKiovIiwiaW1wb3J0ICcuLi9hcnJheXMvY29udGFpbnMnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58bnVtYmVyfSBbY2hlY2tieXRlXSBjaGVjayBieXRlIGxlbmd0aCBpZiB0cnVlLiAoZGVmYXVsdCBpcyBmYWxzZSlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbihjaGVja2J5dGUpIHtcbiAgICAgICAgbGV0IGFyZ0luZGV4ID0gMDtcbiAgICAgICAgbGV0IGFyZ0N1cnIgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXhdO1xuICAgICAgICBsZXQgYXJnU2hpZnQgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXgrK107XG5cbiAgICAgICAgY2hlY2tieXRlID0gWydib29sZWFuJywgJ251bWJlciddLmNvbnRhaW5zKHR5cGVvZiBhcmdDdXJyKCkpID8gYXJnU2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBpZiAoY2hlY2tieXRlID09PSBmYWxzZSkgcmV0dXJuIHRoaXMubGVuZ3RoO1xuXG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDAwN0YpOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhKHR5cGVvZiBjaGVja2J5dGUgPT09ICdudW1iZXInICYmIGNoZWNrYnl0ZSA+IDApOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSBjaGVja2J5dGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDdGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwRkZGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2dldExlbmd0aC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5sYXN0SW5kZXhPZihzdHIpO1xuICAgICAgICByZXR1cm4gaSA+IC0xICYmIGkgPT09IHRoaXMubGVuZ3RoIC0gc3RyLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2VuZHNXaXRoLmpzXG4gKiovIiwiaW1wb3J0ICcuLi9hcnJheXMvaXNBcnJheSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdCkge1xuICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nLCAoJDAsICQxLCAkMikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICgkMSkge1xuICAgICAgICAgICAgY2FzZSBcIicnXCI6IHJldHVybiBcIidcIjtcbiAgICAgICAgICAgIGNhc2UgXCIne1wiOiByZXR1cm4gJ3snO1xuICAgICAgICAgICAgY2FzZSBcIn0nXCI6IHJldHVybiAnfSc7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gKCEvXlxcZCskL2cudGVzdCgkMikgPyBhcmd1bWVudHNbMF0gfHwge30gOiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHMpWyQyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmZvcm1hdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvZm9ybWF0LmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzXG4gICAgICogQHJldHVybnMge0FycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nO1xuICAgICAgICBsZXQgdmFyaWFibGVzID0gW107XG4gICAgICAgIGxldCBtYXRjaGVzO1xuICAgICAgICB3aGlsZSAobWF0Y2hlcyA9IHJlZ2V4LmV4ZWModGhpcykpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IFwiJydcIiAmJiBtYXRjaCAhPT0gXCIne1wiICYmIG1hdGNoICE9PSBcIn0nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMucHVzaChtYXRjaGVzWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFyaWFibGVzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHNpemUgPSBwYXJzZUludChzaXplKVxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKGksIGkgKyBzaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9ncm91cGVkLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmdyb3VwZWRSaWdodCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWRSaWdodCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgaWYgKCEoc2l6ZSA+IDEpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzaXplIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykgc2l6ZSA9IHBhcnNlSW50KHNpemUpXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aDsgaSA+IDA7IGkgLT0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIHNpemUpLCBpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMucmV2ZXJzZSgpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9ncm91cGVkUmlnaHQuanNcbiAqKi8iLCJpbXBvcnQgJy4vcmVwZWF0J1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUubGVmdFBhZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUubGVmdFBhZCA9IGZ1bmN0aW9uKGxlbmd0aCwgZmlsbENoYXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaWxsQ2hhcikgZmlsbENoYXIgPSAnICc7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBmaWxsQ2hhci5yZXBlYXQobGVuZ3RoIC0gdGhpcy5sZW5ndGgpICsgdGhpcy50b1N0cmluZygpO1xuICAgIH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUubHBhZCkge1xuICAgIFN0cmluZy5wcm90b3R5cGUubHBhZCA9IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5sZWZ0UGFkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9sZWZ0UGFkLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnJlcGVhdCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICAgIGlmICghKGNvdW50ID49IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBjb3VudCB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL3JlcGVhdC5qc1xuICoqLyIsImltcG9ydCAnLi94bWxFc2NhcGUnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5ubDJicikge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0geG1sRXNjYXBlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLm5sMmJyID0gZnVuY3Rpb24oeG1sRXNjYXBlKSB7XG4gICAgICAgIHJldHVybiAoeG1sRXNjYXBlID8gdGhpcy54bWxFc2NhcGUoKSA6IHRoaXMpLnJlcGxhY2UoLyhcXHJcXG58XFxuXFxyfFxccnxcXG4pL2csICc8YnIvPicpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5ubDJicjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvbmwyYnIuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKDx8PnxcInwnfCYpL2csICgkMSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICgkMSkge1xuICAgICAgICAgICAgY2FzZSAnPCc6IHJldHVybiAnJmx0Oyc7XG4gICAgICAgICAgICBjYXNlICc+JzogcmV0dXJuICcmZ3Q7JztcbiAgICAgICAgICAgIGNhc2UgJ1wiJzogcmV0dXJuICcmIzM0Oyc7XG4gICAgICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gJyYjMzk7JztcbiAgICAgICAgICAgIGNhc2UgJyYnOiByZXR1cm4gJyZhbXA7JztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAkMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MveG1sRXNjYXBlLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnF1b3RlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvdmVybGFwYWJsZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnF1b3RlID0gZnVuY3Rpb24ob3ZlcmxhcGFibGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvdmVybGFwYWJsZSAhPT0gJ2Jvb2xlYW4nKSBvdmVybGFwYWJsZSA9IHRydWU7XG4gICAgICAgIGlmICghb3ZlcmxhcGFibGUgJiYgdGhpcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyQXQoMCkgPT09IFwiJ1wiICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09IFwiJ1wiKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnXCInICsgdGhpcyArICdcIic7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5xdW90ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvcXVvdGUuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUucmVnZXgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmxhZ3NcbiAgICAgKiBAcmV0dXJucyB7UmVnRXhwfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmVnZXggPSBmdW5jdGlvbihmbGFncykgeyByZXR1cm4gbmV3IFJlZ0V4cCh0aGlzLCBmbGFncyk7IH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUucikge1xuICAgIFN0cmluZy5wcm90b3R5cGUuciA9IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL3JlZ2V4LmpzXG4gKiovIiwiaW1wb3J0ICcuL3JlcGVhdCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxsQ2hhclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCA9IGZ1bmN0aW9uKGxlbmd0aCwgZmlsbENoYXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaWxsQ2hhcikgZmlsbENoYXIgPSAnICc7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkgKyBmaWxsQ2hhci5yZXBlYXQobGVuZ3RoIC0gdGhpcy5sZW5ndGgpO1xuICAgIH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUucnBhZCkge1xuICAgIFN0cmluZy5wcm90b3R5cGUucnBhZCA9IFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL3JpZ2h0UGFkLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID0gZnVuY3Rpb24oc3RyKSB7IHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA9PT0gMDsgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9zdGFydHNXaXRoLmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnVucXVvdGUpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnVucXVvdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID49IDIgJiZcbiAgICAgICAgICAgICgodGhpcy5jaGFyQXQoMCkgPT09ICdcIicgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gJ1wiJykgfHxcbiAgICAgICAgICAgICh0aGlzLmNoYXJBdCgwKSA9PT0gXCInXCIgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gXCInXCIpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMSwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy91bnF1b3RlLmpzXG4gKiovIiwiaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuaW1wb3J0ICcuL29iaidcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlTdHJpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuJC5kZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVN0cmluZyAhPT0gJ3N0cmluZycgfHwgcXVlcnlTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgbGV0IHBhaXJzID0gcXVlcnlTdHJpbmcuc3BsaXQoLyZhbXA7fCYvaSk7XG4gICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICBlbHNlIGlmIChvcHRpb25zLmV4Y2VwdCAmJiAhJC5pc0FycmF5KG9wdGlvbnMuZXhjZXB0KSlcbiAgICAgICAgb3B0aW9ucy5leGNlcHQgPSBbb3B0aW9ucy5leGNlcHRdO1xuICAgIGxldCBvID0ge307XG4gICAgZm9yIChsZXQgcGFpciBvZiBwYWlycykge1xuICAgICAgICBsZXQgW25hbWUsIHZhbHVlXSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBpZiAob3B0aW9ucy5leGNlcHQgPT0gbnVsbCB8fCAhb3B0aW9ucy5leGNlcHQuY29udGFpbnMobmFtZSkpXG4gICAgICAgICAgICAkLm9iai5zZXQodHJ1ZSwgbywgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZGVzZXJpYWxpemU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kZXNlcmlhbGl6ZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2dldEl0ZXJhdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX2lzSXRlcmFibGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSBfZ2V0SXRlcmF0b3IoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmIChfaXNJdGVyYWJsZShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZC10by1hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBzZXRVbnNjb3BlID0gcmVxdWlyZSgnLi8kLnVuc2NvcGUnKVxuICAsIHN0ZXAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnNldFVuc2NvcGUoJ2tleXMnKTtcbnNldFVuc2NvcGUoJ3ZhbHVlcycpO1xuc2V0VW5zY29wZSgnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51bnNjb3BlLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGluZGV4ZWQgb2JqZWN0LCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IDAgaW4gT2JqZWN0KCd6JykgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmaW5lZC5qc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRkZWYgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsICRyZWRlZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZicpXG4gICwgaGlkZSAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFNZTUJPTF9JVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIEJVR0dZICAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgID0gJ3ZhbHVlcyc7XG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRSl7XG4gIHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIHByb3RvICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsIF9uYXRpdmUgID0gcHJvdG9bU1lNQk9MX0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgX2RlZmF1bHQgPSBfbmF0aXZlIHx8IGNyZWF0ZU1ldGhvZChERUZBVUxUKVxuICAgICwgbWV0aG9kcywga2V5O1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKF9uYXRpdmUpe1xuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvKF9kZWZhdWx0LmNhbGwobmV3IEJhc2UpKTtcbiAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgcmVxdWlyZSgnLi8kLnRhZycpKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIFNZTUJPTF9JVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCFMSUJSQVJZIHx8IEZPUkNFKWhpZGUocHJvdG8sIFNZTUJPTF9JVEVSQVRPUiwgX2RlZmF1bHQpO1xuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IF9kZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAga2V5czogICAgSVNfU0VUICAgICAgICAgICAgPyBfZGVmYXVsdCA6IGNyZWF0ZU1ldGhvZChLRVlTKSxcbiAgICAgIHZhbHVlczogIERFRkFVTFQgPT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoVkFMVUVTKSxcbiAgICAgIGVudHJpZXM6IERFRkFVTFQgIT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0UpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSkkcmVkZWYocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGRlZigkZGVmLlAgKyAkZGVmLkYgKiBCVUdHWSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmLmpzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLnN1cHBvcnQtZGVzYycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanNcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3VwcG9ydC1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHN0b3JlICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJylcbiAgLCBTeW1ib2wgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgU3ltYm9sICYmIFN5bWJvbFtuYW1lXSB8fCAoU3ltYm9sIHx8IHJlcXVpcmUoJy4vJC51aWQnKSkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpKDEsbmV4dCl9KTtcbiAgcmVxdWlyZSgnLi8kLnRhZycpKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBkZWYgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjXG4gICwgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudGFnLmpzXG4gKiogbW9kdWxlIGlkID0gODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbFxuICAgICAgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gODlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqIG1vZHVsZSBpZCA9IDkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzXG4gKiogbW9kdWxlIGlkID0gOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDk0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA5NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gSVRFUkFUT1IgaW4gT1xuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gOTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAnLi9wcm90by9pbmRleCdcbmltcG9ydCAnLi9zcGxpdCdcblxuJC5vYmogPSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV1cbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24ob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIGlmICgha2V5KSByZXR1cm4gb2JqO1xuICAgICAgICBsZXQga2V5RnJhZ21lbnRzID0gJC5zcGxpdChrZXksICcuJywgJy8nKTtcbiAgICAgICAgZm9yIChsZXQga2V5RnJhZ21lbnQgb2Yga2V5RnJhZ21lbnRzKSB7XG4gICAgICAgICAgICBpZiAoKG9iaiA9IG9ialtrZXlGcmFnbWVudF0pID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQuaXNBcnJheShkZWZhdWx0VmFsdWUpICYmICEkLmlzQXJyYXkob2JqKSlcbiAgICAgICAgICAgIG9iaiA9ICQubWFrZUFycmF5KG9iaik7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXBwZW5kQXJyYXldXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmdWxsa2V5XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKGFwcGVuZEFycmF5LCBvYmosIGZ1bGxrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgYXBwZW5kQXJyYXkgPSB0eXBlb2YgYXJncy5maXJzdCgpID09PSAnYm9vbGVhbicgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZTtcbiAgICAgICAgb2JqID0gdHlwZW9mIGFyZ3MuZmlyc3QoKSA9PT0gJ29iamVjdCcgfHwgJC5pc0Z1bmN0aW9uKGFyZ3MuZmlyc3QoKSkgPyBhcmdzLnNoaWZ0KCkgOiB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzLmZpcnN0KCkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGtleSBtdXN0IGJlIHN0cmluZyB0eXBlIDogXCIgKyBhcmdzLmZpcnN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bGxrZXkgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIHZhbHVlID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBsZXQga2V5cyA9ICQubWFwKCQuc3BsaXQoZnVsbGtleSwgJy4nLCAnLycpLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGlmICgvXihbXlxcW10rKT9cXFsoW15cXF1dKyk/XFxdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5LZXlzID0gW2tleS5tYXRjaCgvXihbXlxcW10rKT8vKVsxXV07XG4gICAgICAgICAgICAgICAgbGV0IGluQnJhY2tldCA9IC9cXFsoW15cXF1dKyk/XFxdL2c7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRNYXRjaGVzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0TWF0Y2hlcyA9IGluQnJhY2tldC5leGVjKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5LZXlzLnB1c2gobmV4dE1hdGNoZXNbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5LZXlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaXNOdWxsKG8sIGtleSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIShrZXkgaW4gbyAmJiAob1trZXldICE9IG51bGwpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3Vyck9iaiA9IG9iajtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFwcGVuZEFycmF5IHx8IGlzTnVsbChjdXJyT2JqLCBrZXkpKVxuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgkLmlzQXJyYXkoY3Vyck9ialtrZXldKSlcbiAgICAgICAgICAgICAgICAgICAgY3Vyck9ialtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY3Vyck9ialtrZXldID0gW2N1cnJPYmpba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc051bGwoY3Vyck9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5c1tpICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGtleXNbaSArIDFdID0gJzAnO1xuICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XSA9IC9eXFxkKyQvLnRlc3Qoa2V5c1tpICsgMV0pID8gW10gOiB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGtleXNbaSArIDFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGtleXNbaSArIDFdID0gJC5pc0FycmF5KGN1cnJPYmpba2V5XSkgPyBjdXJyT2JqW2tleV0ubGVuZ3RoICsgJycgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJPYmogPSBjdXJyT2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZW5lcmFsaXplOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmNvbnRhaW5zKCcuJykgfHwgL1xcWyhcXHcrKT9cXF0vLnRlc3Qoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgJC5vYmouc2V0KHRydWUsIHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXBdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXBwZW5kQXJyYXldXG4gICAgICogQHBhcmFtIHsqfE9iamVjdH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHsqfC4uLk9iamVjdH0gc291cmNlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dGVuZElmVW5kZWZpbmVkXVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uKGRlZXAsIGFwcGVuZEFycmF5LCB0YXJnZXQsIHNvdXJjZXMsIGV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgZGVlcCA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBhcHBlbmRBcnJheSA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBleHRlbmRJZlVuZGVmaW5lZCA9IHR5cGVvZiBhcmdzLmxhc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5wb3AoKSA6IGZhbHNlO1xuICAgICAgICB0YXJnZXQgPSBhcmdzLmxlbmd0aCA9PT0gMSA/IHt9IDogYXJncy5zaGlmdCgpIHx8IHt9O1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgISQuaXNGdW5jdGlvbih0YXJnZXQpKSB0YXJnZXQgPSB7fTtcblxuICAgICAgICBzb3VyY2VzID0gYXJncztcbiAgICAgICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmMgPSB0YXJnZXRbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weSA9IHNvdXJjZVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ID09PSB0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHlJc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBjb3B5ICYmICgkLmlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gJC5pc0FycmF5KGNvcHkpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvcHlJc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmNJc1BsYWluT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMgPT09IHVuZGVmaW5lZCB8fCAoc3JjSXNQbGFpbk9iamVjdCA9ICQuaXNQbGFpbk9iamVjdChzcmMpKSB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQub2JqLmV4dGVuZChkZWVwLCBhcHBlbmRBcnJheSwgKHNyY0lzUGxhaW5PYmplY3QgPyBzcmMgOiB7fSksIGNvcHksIGV4dGVuZElmVW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQubWVyZ2UoKGFwcGVuZEFycmF5ICYmICQuaXNBcnJheShzcmMpID8gc3JjIDogW10pLCAkLm9iai5leHRlbmQoZGVlcCwgW10sIGNvcHkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcHkgIT09IHVuZGVmaW5lZCAmJiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBuZXcgRGF0ZShjb3B5LmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3B5IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5nbG9iYWwgIT0gbnVsbCkgZmxhZ3MgKz0gJ2cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5pZ25vcmVDYXNlICE9IG51bGwpIGZsYWdzICs9ICdpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkubXVsdGlsaW5lICE9IG51bGwpIGZsYWdzICs9ICdtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkuc3RpY2t5ICE9IG51bGwpIGZsYWdzICs9ICd5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gbmV3IFJlZ0V4cChjb3B5LnNvdXJjZSwgZmxhZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGNvcHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0ga2V5VmFsdWVQYWlyc1xuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBtYWtlOiBmdW5jdGlvbiguLi5rZXlWYWx1ZVBhaXJzKSB7XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlWYWx1ZVBhaXJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICBvYmpba2V5VmFsdWVQYWlyc1tpXV0gPSBrZXlWYWx1ZVBhaXJzW2kgKyAxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGVtcHR5OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdChvYmopKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59O1xuXG5mb3IgKGxldCBrZXkgaW4gJC5vYmopIHtcbiAgICBsZXQgc2hvcnRLZXkgPSBrZXkgKyAnT2JqZWN0JztcbiAgICBpZiAoIShzaG9ydEtleSBpbiAkKSkge1xuICAgICAgICBpZiAoJC5vYmouaGFzT3duUHJvcGVydHkoa2V5KSkgJFtzaG9ydEtleV0gPSAkLm9ialtrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgJC5vYmo7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvb2JqLmpzXG4gKiovIiwiaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXBhcmF0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZXNjYXBlQ2hhcl1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGltaXRdXG4gKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICovXG4kLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBzZXBhcmF0b3IsIGVzY2FwZUNoYXIsIGxpbWl0KSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc3RyICsgJyBpcyBub3QgYSBzdHJpbmcnKTtcbiAgICB9XG4gICAgc3RyID0gc3RyLnRvU3RyaW5nKCk7XG4gICAgaWYgKHR5cGVvZiBzZXBhcmF0b3IgPT09ICdudW1iZXInKVxuICAgICAgICBbbGltaXQsIHNlcGFyYXRvciwgZXNjYXBlQ2hhcl0gPSBbc2VwYXJhdG9yLCBudWxsLCBudWxsXVxuICAgIGVsc2UgaWYgKHR5cGVvZiBlc2NhcGVDaGFyID09PSAnbnVtYmVyJylcbiAgICAgICAgW2xpbWl0LCBlc2NhcGVDaGFyXSA9IFtlc2NhcGVDaGFyLCBudWxsXVxuXG4gICAgZnVuY3Rpb24gbGltaXRlZChpKSB7XG4gICAgICAgIHJldHVybiAwIDwgbGltaXQgJiYgbGltaXQgPD0gaSArIDE7XG4gICAgfVxuXG4gICAgbGV0IHBhcnRzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBzID0gMDtcbiAgICBsZXQgcDtcbiAgICB3aGlsZSAoKHAgPSBzdHIuaW5kZXhPZihzZXBhcmF0b3IsIHMpKSAhPT0gLTEgJiYgIWxpbWl0ZWQoaSkpIHtcbiAgICAgICAgbGV0IHBhcnQgPSBzdHIuc2xpY2UocywgcCk7XG4gICAgICAgIGxldCBlc2NhcGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChlc2NhcGVDaGFyICYmIHBhcnQuc2xpY2UoLTEpID09PSBlc2NhcGVDaGFyKSB7XG4gICAgICAgICAgICBwYXJ0ID0gcGFydC5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICBlc2NhcGVkID0gcGFydC5zbGljZSgtMSkgIT09IGVzY2FwZUNoYXI7XG4gICAgICAgICAgICBpZiAoZXNjYXBlZCkgcGFydCArPSBzZXBhcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHNbaV0gPSAocGFydHNbaV0gfHwgJycpICsgcGFydDtcbiAgICAgICAgcyA9IHAgKyAxO1xuICAgICAgICBpZiAoIWVzY2FwZWQpIGkrKztcbiAgICB9XG4gICAgaWYgKHMgPD0gc3RyLmxlbmd0aClcbiAgICAgICAgcGFydHNbaV0gPSAocGFydHNbaV0gfHwgJycpICsgc3RyLnNsaWNlKHMpO1xuXG4gICAgcmV0dXJuIHBhcnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5zcGxpdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NwbGl0LmpzXG4gKiovIiwiaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtqUXVlcnk8SFRNTEVsZW1lbnQ+fVxuICovXG4kLmZuLmZpbmRCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZCgnW25hbWU9XCInICsgKG5hbWUgfHwgJycpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSArICdcIl0nKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZmluZEJ5TmFtZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbmRCeU5hbWUuanNcbiAqKi8iLCJpbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBuYW1lc1xuICogQHJldHVybiB7alF1ZXJ5PEhUTUxFbGVtZW50Pn1cbiAqL1xuJC5mbi5maW5kQnlOYW1lcyA9IGZ1bmN0aW9uKC4uLm5hbWVzKSB7XG4gICAgaWYgKG5hbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICQoW10pO1xuICAgIHJldHVybiB0aGlzLmZpbmQobmFtZXMubWFwKG5hbWUgPT4gJ1tuYW1lPVwiJyArIChuYW1lIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCJdJykuam9pbignLCcpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZmluZEJ5TmFtZXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maW5kQnlOYW1lcy5qc1xuICoqLyIsImltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuJC5mbi5ncm91cEJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBlbGVtID0gdGhpc1tpXTtcbiAgICAgICAgbGV0IGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBlbGVtLCBlbGVtLCBpLCB0aGlzKTtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gcmVzdWx0KSlcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9ICQoW10pO1xuXG4gICAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHRoaXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLmdyb3VwQnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JvdXBCeS5qc1xuICoqLyIsImltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxIVE1MRWxlbWVudD58alF1ZXJ5PEhUTUxFbGVtZW50Pn0gZXhjbHVkZXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5mbi5tYXhaSW5kZXggPSBmdW5jdGlvbihleGNsdWRlcykge1xuICAgIGxldCB6SW5kZXggPSAwO1xuICAgIHRoaXMuZmluZCgnOnZpc2libGUnKS5hbmRTZWxmKCkuYWRkKHRoaXMucGFyZW50c1VudGlsKCdodG1sJykpLm5vdChleGNsdWRlcykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZU5hbWUgIT09ICcjZG9jdW1lbnQnKSB7XG4gICAgICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKFsnYWJzb2x1dGUnLCAncmVsYXRpdmUnLCAnZml4ZWQnXS5jb250YWlucygkdGhpcy5jc3MoJ3Bvc2l0aW9uJykpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoJHRoaXMuY3NzKCd6SW5kZXgnKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkgJiYgdmFsdWUgPiB6SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHpJbmRleDtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIE1heCB6SW5kZXggZnJvbSBkb2N1bWVudCBib2R5LlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8SFRNTEVsZW1lbnQ+fGpRdWVyeTxIVE1MRWxlbWVudD59IGV4Y2x1ZGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbiQubWF4WkluZGV4ID0gZnVuY3Rpb24oZXhjbHVkZXMpIHtcbiAgICByZXR1cm4gJChkb2N1bWVudC5ib2R5KS5tYXhaSW5kZXgoZXhjbHVkZXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5tYXhaSW5kZXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYXhaSW5kZXguanNcbiAqKi8iLCJpbXBvcnQgd2luZG93IGZyb20gJy4vd2luZG93J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5kb2N1bWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvZG9jdW1lbnQuanNcbiAqKi8iLCJpbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5uZXh0VGljayA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTsgfTtcblxuZXhwb3J0IGRlZmF1bHQgJC5uZXh0VGljaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL25leHRUaWNrLmpzXG4gKiovIiwiaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGF0YUFuZEV2ZW50c1xuICogQHBhcmFtIHtib29sZWFufSBkZWVwRGF0YUFuZEV2ZW50c1xuICogQHJldHVybiB7alF1ZXJ5PEhUTUxFbGVtZW50Pn1cbiAqL1xuJC5mbi5yZWNsb25lID0gZnVuY3Rpb24oZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBvbGRFbGVtID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IG5ld0VsZW0gPSBvbGRFbGVtLmNsb25lKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKTtcbiAgICAgICAgbmV3RWxlbS5pbnNlcnRBZnRlcih0aGlzKTtcbiAgICAgICAgb2xkRWxlbS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1bMF07XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnJlY2xvbmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVjbG9uZS5qc1xuICoqLyIsImltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKiBAcGFyYW0ge0FycmF5PHtuYW1lLHZhbHVlfT59IHBhcmFtc1xuICogQHJldHVybiB7bnVtYmVyfSBsZW5ndGggb2YgcGFyYW1ldGVyc1xuICovXG4kLnJlaW5kZXhBcnJheVBhcmFtcyA9IGZ1bmN0aW9uKHByZWZpeCwgcGFyYW1zKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBwcmVmaXgucmVwbGFjZSgnLicsICdcXFxcLicpICsgJylcXFxcWyhcXFxcZCspXFxcXF0nKTtcbiAgICBsZXQgcHJldkluZGV4ID0gbnVsbDtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBwYXJhbSBvZiBwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSByZWdleC5leGVjKHBhcmFtLm5hbWUpO1xuICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgICAgbGV0IGN1cnJJbmRleCA9IHJlc3VsdHNbMl07XG4gICAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSBjdXJySW5kZXgpIHtcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXggPSBjdXJySW5kZXg7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtLm5hbWUgPSBwYXJhbS5uYW1lLnJlcGxhY2UocmVnZXgsICckMVsnICsgaW5kZXggKyAnXScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQucmVpbmRleEFycmF5UGFyYW1zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlaW5kZXhBcnJheVBhcmFtcy5qc1xuICoqLyIsImltcG9ydCAnLi9wcm90by9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5yZXZlcnNlID0gQXJyYXkucHJvdG90eXBlLnJldmVyc2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZXZlcnNlLmpzXG4gKiovIiwiaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbiQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghJC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKVxuICAgICAgICBvcHRpb25zID0ge307XG4gICAgZWxzZSBpZiAob3B0aW9ucy5leGNlcHQgJiYgISQuaXNBcnJheShvcHRpb25zLmV4Y2VwdCkpXG4gICAgICAgIG9wdGlvbnMuZXhjZXB0ID0gW29wdGlvbnMuZXhjZXB0XTtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgJC5lYWNoKHRoaXMuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4Y2VwdCA9PSBudWxsIHx8ICFvcHRpb25zLmV4Y2VwdC5jb250YWlucyh0aGlzLm5hbWUpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmICghJC5pc0FycmF5KHJlc3VsdFt0aGlzLm5hbWVdKSlcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3RoaXMubmFtZV0gPSBbcmVzdWx0W3RoaXMubmFtZV0sIHRoaXMudmFsdWVdO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3RoaXMubmFtZV0ucHVzaCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uc2VyaWFsaXplT2JqZWN0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcmlhbGl6ZU9iamVjdC5qc1xuICoqLyIsImltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuJC5zb21lID0gZnVuY3Rpb24oaXRlbXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKCQuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBpdGVtcywgaXRlbXNbaV0sIGksIGl0ZW1zKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCQuaXNQbGFpbk9iamVjdChpdGVtcykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgaXRlbXMsIGl0ZW1zW2tleV0sIGtleSwgaXRlbXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoaXRlbXMgKyBcIiBpcyBub3QgYXJyYXkgb3IgcGxhaW4gb2JqZWN0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zb21lLmpzXG4gKiovIiwiaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4kLnN1cHBvcnRzSW5wdXRUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IHR5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnN1cHBvcnRzSW5wdXRUeXBlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N1cHBvcnRzSW5wdXRUeXBlLmpzXG4gKiovIiwiaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7WE1MfSB4bWxOb2RlIHRoZSB4bWwgbm9kZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuJC54bWxUb1N0cmluZyA9IGZ1bmN0aW9uKHhtbE5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKG5ldyBYTUxTZXJpYWxpemVyKCkpLnNlcmlhbGl6ZVRvU3RyaW5nKHhtbE5vZGUpO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICBpZiAoeG1sTm9kZS54bWwgPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlhNTFNlcmlhbGl6ZXIgbm90IHN1cHBvcnRlZFwiKTtcblxuICAgICAgICByZXR1cm4geG1sTm9kZS54bWw7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgJC54bWxUb1N0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3htbFRvU3RyaW5nLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==