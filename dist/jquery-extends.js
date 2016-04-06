(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["jQuery"] = factory(require("jquery"));
	else
		root["jQuery"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(3);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(59);
	
	__webpack_require__(64);
	
	__webpack_require__(65);
	
	__webpack_require__(66);
	
	__webpack_require__(67);
	
	__webpack_require__(68);
	
	__webpack_require__(58);
	
	__webpack_require__(69);
	
	__webpack_require__(70);
	
	exports.default = $;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!_jquery2.default) {
	    throw new Error("jQuery.extends requires a jQuery");
	}
	
	module.exports = _jquery2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
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
	
	exports.default = $.fn.findByNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(window) {/******/ (function(modules) { // webpackBootstrap
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
		
		__webpack_require__(1);
		
		__webpack_require__(3);
		
		__webpack_require__(4);
		
		__webpack_require__(7);
		
		__webpack_require__(5);
		
		__webpack_require__(8);
		
		__webpack_require__(9);
		
		__webpack_require__(10);
		
		__webpack_require__(11);
		
		__webpack_require__(2);
		
		__webpack_require__(6);
		
		__webpack_require__(12);
		
		__webpack_require__(13);
		
		__webpack_require__(14);
		
		__webpack_require__(15);
		
		__webpack_require__(17);
		
		__webpack_require__(18);
		
		__webpack_require__(16);
		
		__webpack_require__(19);
		
		__webpack_require__(20);
		
		__webpack_require__(21);
		
		__webpack_require__(31);
		
		__webpack_require__(32);
		
		__webpack_require__(34);
		
		__webpack_require__(35);
		
		__webpack_require__(36);
		
		__webpack_require__(38);
		
		__webpack_require__(39);
		
		__webpack_require__(40);
		
		__webpack_require__(37);
		
		__webpack_require__(41);
		
		__webpack_require__(42);
		
		__webpack_require__(43);
		
		__webpack_require__(45);
		
		__webpack_require__(47);
		
		__webpack_require__(48);
		
		__webpack_require__(44);
		
		__webpack_require__(49);
		
		__webpack_require__(50);
		
		__webpack_require__(51);
		
		__webpack_require__(46);
		
		__webpack_require__(33);
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(2);
		
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
	/* 2 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = Array.prototype.indexOf;
		module.exports = exports['default'];
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = Array.prototype.every;
		module.exports = exports['default'];
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(5);
		
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
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(6);
		
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
	/* 6 */
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
	/* 7 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		if (!Array.prototype.first) {
		    Array.prototype.first = function () {
		        return this[0];
		    };
		}
		
		exports['default'] = Array.prototype.first;
		module.exports = exports['default'];
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		if (!Array.prototype.groupBy) {
		    /**
		     * @param {Function} callback
		     * @param {*} [context]
		     * @return {{}}
		     */
		    Array.prototype.groupBy = function (callback, context) {
		        if (typeof callback !== 'function') {
		            throw new Error(callback + " is not a function");
		        }
		        var result = {};
		        for (var i = 0; i < this.length; i++) {
		            var value = this[i];
		            var key = callback.call(context || this, value, i, this);
		            if (key != null) {
		                if (key in result) result[key].push(value);else result[key] = [value];
		            }
		        }
		        return result;
		    };
		}
		
		exports['default'] = Array.prototype.groupBy;
		module.exports = exports['default'];
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = Array.prototype.grouped;
		module.exports = exports['default'];
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = Array.prototype.groupedRight;
		module.exports = exports['default'];
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(2);
		
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
	/* 12 */
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
	/* 13 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		if (!Array.prototype.last) {
		    Array.prototype.last = function () {
		        return this[this.length - 1];
		    };
		}
		
		exports['default'] = Array.prototype.last;
		module.exports = exports['default'];
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = Array.prototype.map;
		module.exports = exports['default'];
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(16);
		
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
	/* 16 */
	/***/ function(module, exports) {
	
		'use strict';
		
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
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(16);
		
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
	/* 18 */
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
		        step = Math.abs(step) || 1;
		        if (begin > end) step = -step;
		        for (var i = begin; step > 0 ? i <= end : i >= end; i += step) {
		            range.push(isNumber ? i : String.fromCharCode(i));
		        }
		        return range;
		    };
		}
		
		exports['default'] = Array.range;
		module.exports = exports['default'];
	
	/***/ },
	/* 19 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = Array.prototype.remove;
		module.exports = exports['default'];
	
	/***/ },
	/* 20 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		if (!Array.prototype.some) {
		    /**
		     * @param {Function} callback
		     * @param {*} [context]
		     * @return {boolean}
		     */
		    Array.prototype.some = function (callback, context) {
		        if (typeof callback !== 'function') {
		            throw new Error(callback + " is not a function");
		        }
		        for (var i = 0; i < this.length; i++) {
		            if (callback.call(context || this, this[i], i, this)) return true;
		        }
		        return false;
		    };
		}
		
		exports['default'] = Array.prototype.some;
		module.exports = exports['default'];
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var _RegExp$escape = __webpack_require__(22)['default'];
		
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
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(23), __esModule: true };
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(24);
		module.exports = __webpack_require__(27).RegExp.escape;
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		// https://github.com/benjamingr/RexExp.escape
		var $export = __webpack_require__(25)
		  , $re     = __webpack_require__(30)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
		
		$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(26)
		  , core      = __webpack_require__(27)
		  , ctx       = __webpack_require__(28)
		  , PROTOTYPE = 'prototype';
		
		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && key in target;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(param){
		        return this instanceof C ? new C(param) : C(param);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
		  }
		};
		// type bitmap
		$export.F = 1;  // forced
		$export.G = 2;  // global
		$export.S = 4;  // static
		$export.P = 8;  // proto
		$export.B = 16; // bind
		$export.W = 32; // wrap
		module.exports = $export;
	
	/***/ },
	/* 26 */
	/***/ function(module, exports) {
	
		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	
	/***/ },
	/* 27 */
	/***/ function(module, exports) {
	
		var core = module.exports = {version: '1.2.6'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		// optional / simple context binding
		var aFunction = __webpack_require__(29);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};
	
	/***/ },
	/* 29 */
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};
	
	/***/ },
	/* 30 */
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
	/* 31 */
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
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(33);
		
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
	/* 33 */
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
	/* 34 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		if (!String.prototype.compareTo) {
		    String.prototype.compareTo = function (str) {
		        if (str == null || this > str) return 1;
		        if (this < str) return -1;
		        return 0;
		    };
		}
		
		exports['default'] = String.prototype.compareTo;
		module.exports = exports['default'];
	
	/***/ },
	/* 35 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = String.prototype.contains;
		module.exports = exports['default'];
	
	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(1);
		
		__webpack_require__(37);
		
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
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(1);
		
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
	/* 38 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = String.prototype.endsWith;
		module.exports = exports['default'];
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(6);
		
		if (!String.prototype.format) {
		    String.prototype.format = function () {
		        var _arguments = arguments;
		
		        return this.replace(/(''|'\{|}'|\{(\w+)})/g, function ($0, $1, $2) {
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
		
		exports['default'] = String.prototype.format;
		module.exports = exports['default'];
	
	/***/ },
	/* 40 */
	/***/ function(module, exports) {
	
		'use strict';
		
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
	/* 41 */
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
	/* 42 */
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
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(44);
		
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
	/* 44 */
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
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(46);
		
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
	/* 46 */
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
	/* 47 */
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
	/* 48 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = String.prototype.regex;
		module.exports = exports['default'];
	
	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(44);
		
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
	/* 50 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
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
		
		exports['default'] = String.prototype.startsWith;
		module.exports = exports['default'];
	
	/***/ },
	/* 51 */
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
	
	/***/ }
	/******/ ]);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGJjOGU1Nzc2MmZhOWU3MmY4YTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9pbmRleE9mLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9mbGF0TWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2ZpcnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2dyb3VwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9ncm91cGVkUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvam9pblBhdGhzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL21heC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnZXhwcy9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcmVnZXhwL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvYnIybmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MveG1sVW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvY29tcGFyZVRvLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2N1dHN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9nZXRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZW5kc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9ncm91cGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2dyb3VwZWRSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9sZWZ0UGFkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9ubDJici5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy94bWxFc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcmlnaHRQYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3Mvc3RhcnRzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy91bnF1b3RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLGFBQVksQ0FBQzs7cUJBRU4sQ0FBbUI7O3FCQUNuQixDQUFnQjs7cUJBQ2hCLENBQWlCOztxQkFDakIsQ0FBZ0I7O3FCQUNoQixDQUFrQjs7cUJBQ2xCLENBQWtCOztxQkFDbEIsQ0FBa0I7O3FCQUNsQixFQUF1Qjs7cUJBQ3ZCLEVBQWtCOztxQkFDbEIsQ0FBa0I7O3FCQUNsQixDQUFrQjs7cUJBQ2xCLEVBQW9COztxQkFDcEIsRUFBZTs7cUJBQ2YsRUFBYzs7cUJBQ2QsRUFBYzs7cUJBQ2QsRUFBYzs7cUJBQ2QsRUFBZ0I7O3FCQUNoQixFQUFpQjs7cUJBQ2pCLEVBQWlCOztxQkFDakIsRUFBZTs7cUJBRWYsRUFBa0I7O3FCQUVsQixFQUErQjs7cUJBQy9CLEVBQWlCOztx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TUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFFLEVBQUU7QUFDbkUsb0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUM1QjtBQUNELGdCQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztNQUMxQixDQUFDO0VBQ0w7O3NCQUVjLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyIsImZpbGUiOiJwcm90by5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOGJjOGU1Nzc2MmZhOWU3MmY4YTlcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9hcnJheXMvY29udGFpbnMnXG5pbXBvcnQgJy4vYXJyYXlzL2V2ZXJ5J1xuaW1wb3J0ICcuL2FycmF5cy9maWx0ZXInXG5pbXBvcnQgJy4vYXJyYXlzL2ZpcnN0J1xuaW1wb3J0ICcuL2FycmF5cy9mbGF0TWFwJ1xuaW1wb3J0ICcuL2FycmF5cy9ncm91cEJ5J1xuaW1wb3J0ICcuL2FycmF5cy9ncm91cGVkJ1xuaW1wb3J0ICcuL2FycmF5cy9ncm91cGVkUmlnaHQnXG5pbXBvcnQgJy4vYXJyYXlzL2luY2x1ZGUnXG5pbXBvcnQgJy4vYXJyYXlzL2luZGV4T2YnXG5pbXBvcnQgJy4vYXJyYXlzL2lzQXJyYXknXG5pbXBvcnQgJy4vYXJyYXlzL2pvaW5QYXRocydcbmltcG9ydCAnLi9hcnJheXMvbGFzdCdcbmltcG9ydCAnLi9hcnJheXMvbWFwJ1xuaW1wb3J0ICcuL2FycmF5cy9tYXgnXG5pbXBvcnQgJy4vYXJyYXlzL21pbidcbmltcG9ydCAnLi9hcnJheXMvcmFuZ2UnXG5pbXBvcnQgJy4vYXJyYXlzL3JlZHVjZSdcbmltcG9ydCAnLi9hcnJheXMvcmVtb3ZlJ1xuaW1wb3J0ICcuL2FycmF5cy9zb21lJ1xuXG5pbXBvcnQgJy4vcmVnZXhwcy9lc2NhcGUnXG5cbmltcG9ydCAnLi9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXgnXG5pbXBvcnQgJy4vc3RyaW5ncy9icjJubCdcbmltcG9ydCAnLi9zdHJpbmdzL2NvbXBhcmVUbydcbmltcG9ydCAnLi9zdHJpbmdzL2NvbnRhaW5zJ1xuaW1wb3J0ICcuL3N0cmluZ3MvY3V0c3RyaW5nJ1xuaW1wb3J0ICcuL3N0cmluZ3MvZW5kc1dpdGgnXG5pbXBvcnQgJy4vc3RyaW5ncy9mb3JtYXQnXG5pbXBvcnQgJy4vc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMnXG5pbXBvcnQgJy4vc3RyaW5ncy9nZXRMZW5ndGgnXG5pbXBvcnQgJy4vc3RyaW5ncy9ncm91cGVkJ1xuaW1wb3J0ICcuL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0J1xuaW1wb3J0ICcuL3N0cmluZ3MvbGVmdFBhZCdcbmltcG9ydCAnLi9zdHJpbmdzL25sMmJyJ1xuaW1wb3J0ICcuL3N0cmluZ3MvcXVvdGUnXG5pbXBvcnQgJy4vc3RyaW5ncy9yZWdleCdcbmltcG9ydCAnLi9zdHJpbmdzL3JlcGVhdCdcbmltcG9ydCAnLi9zdHJpbmdzL3JpZ2h0UGFkJ1xuaW1wb3J0ICcuL3N0cmluZ3Mvc3RhcnRzV2l0aCdcbmltcG9ydCAnLi9zdHJpbmdzL3VucXVvdGUnXG5pbXBvcnQgJy4vc3RyaW5ncy94bWxFc2NhcGUnXG5pbXBvcnQgJy4vc3RyaW5ncy94bWxVbmVzY2FwZSdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXhPZidcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGFcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihhKSA+PSAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2NvbnRhaW5zLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2luZGV4T2YuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmV2ZXJ5KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmV2ZXJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ldmVyeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ldmVyeS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2ZsYXRNYXAnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmZpbHRlcikge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhdE1hcCgoYSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCBhLCBpLCB0aGlzKSkgcmV0dXJuIGE7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvZmlsdGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vaXNBcnJheSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmxhdE1hcCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIEFycmF5XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmZsYXRNYXAgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSByZXN1bHRzLnB1c2guYXBwbHkocmVzdWx0cywgcmVzdWx0KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZmxhdE1hcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9mbGF0TWFwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IG9ialxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LmlzQXJyYXk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvaXNBcnJheS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmlyc3QpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbMF07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maXJzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9maXJzdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHt7fX1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW2ldO1xuICAgICAgICAgICAgbGV0IGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB2YWx1ZSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoa2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ncm91cEJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ncm91cGVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PEFycmF5Pn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKE1hdGgubWF4KDAsIGkgLSBzaXplKSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2dyb3VwZWRSaWdodC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2luZGV4T2YnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmluY2x1ZGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmluZGV4T2YoYSk7XG4gICAgICAgIGlmIChpID4gLTEpXG4gICAgICAgICAgICB0aGlzW2ldID0gYTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wdXNoKGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuaW5jbHVkZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9pbmNsdWRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0pIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgIT09ICcvJylcbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSAnLyc7XG5cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRoaXNbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2pvaW5QYXRocy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubGFzdCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5sYXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2xhc3QuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLm1hcCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWFwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL21hcC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3JlZHVjZSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubWF4KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoKGEsIGIpID0+IChhID4gYikgPyBhIDogYik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWF4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL21heC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUucmVkdWNlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghKHRoaXMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgcmVzdWx0LCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5yZWR1Y2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvcmVkdWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vcmVkdWNlJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5taW4pIHtcbiAgICBBcnJheS5wcm90b3R5cGUubWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZSgoYSwgYikgPT4gKGEgPCBiKSA/IGEgOiBiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5taW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvbWluLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnJhbmdlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBmcm9tXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0b1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIEFycmF5LnJhbmdlID0gZnVuY3Rpb24oZnJvbSwgdG8sIHN0ZXAgPSAxKSB7XG4gICAgICAgIGxldCByYW5nZSA9IFtdO1xuICAgICAgICBsZXQgaXNOdW1iZXIgPSB0eXBlb2YgZnJvbSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvID09PSAnbnVtYmVyJztcbiAgICAgICAgbGV0IGJlZ2luID0gaXNOdW1iZXIgPyBmcm9tIDogZnJvbS50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGxldCBlbmQgPSBpc051bWJlciA/IHRvIDogdG8udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICBzdGVwID0gTWF0aC5hYnMoc3RlcCkgfHwgMTtcbiAgICAgICAgaWYgKGJlZ2luID4gZW5kKSBzdGVwID0gLXN0ZXA7XG4gICAgICAgIGZvciAobGV0IGkgPSBiZWdpbjsgc3RlcCA+IDAgPyBpIDw9IGVuZCA6IGkgPj0gZW5kOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHJhbmdlLnB1c2goaXNOdW1iZXIgPyBpIDogU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnJhbmdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL3JhbmdlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5yZW1vdmUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUucmVtb3ZlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL3JlbW92ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5zb21lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvc29tZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFSZWdFeHAuZXNjYXBlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIFJlZ0V4cC5lc2NhcGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnRXhwLmVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZ2V4cHMvZXNjYXBlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3JlZ2V4cC9lc2NhcGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcmVnZXhwL2VzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5yZWdleHAuZXNjYXBlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuUmVnRXhwLmVzY2FwZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcmVnZXhwL2VzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5nci9SZXhFeHAuZXNjYXBlXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRyZSAgICAgPSByZXF1aXJlKCcuLyQucmVwbGFjZXInKSgvW1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWdFeHAnLCB7ZXNjYXBlOiBmdW5jdGlvbiBlc2NhcGUoaXQpeyByZXR1cm4gJHJlKGl0KTsgfX0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVnRXhwLCByZXBsYWNlKXtcbiAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XG4gICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XG4gIH0gOiByZXBsYWNlO1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBTdHJpbmcoaXQpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVwbGFjZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCkge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlBhdGggbXVzdCBub3QgYmUgZW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5yZXBsYWNlKC9cXC97Mix9L2csICcvJykucmVwbGFjZSgvWy1bXFxde30oKSsuLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gcGF0aC5yZXBsYWNlKC8oKFxcLz9cXCpcXCopfChcXC8/XFwqKXwoXFw/KXwoXFwvKSkvZywgKCQwKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKCQwKSB7XG4gICAgICAgICAgICBjYXNlICcvKionOiByZXR1cm4gJyg/Oi97MSx9LiopPyc7XG4gICAgICAgICAgICBjYXNlICcqKic6IHJldHVybiAnLionO1xuICAgICAgICAgICAgY2FzZSAnLyonOiByZXR1cm4gJyg/Oi97MSx9W14vXSopPyc7XG4gICAgICAgICAgICBjYXNlICcqJzogcmV0dXJuICdbXi9dKic7XG4gICAgICAgICAgICBjYXNlICc/JzogcmV0dXJuICdbXi9dJztcbiAgICAgICAgICAgIGNhc2UgJy8nOiByZXR1cm4gJy97MSx9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdeKCcgKyBwYXR0ZXJuICsgJykkJyk7XG4gICAgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5hKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5hID0gU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi94bWxVbmVzY2FwZSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmJyMm5sKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB4bWxVbmVzY2FwZVxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmJyMm5sID0gZnVuY3Rpb24oeG1sVW5lc2NhcGUpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucmVwbGFjZSgvKDxicj58PGJyXFwvPikvZywgJ1xcbicpO1xuICAgICAgICBpZiAoeG1sVW5lc2NhcGUpIHJldHVybiByZXN1bHQueG1sVW5lc2NhcGUoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmJyMm5sO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9icjJubC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oJmx0O3wmZ3Q7fCYjMzQ7fCYjMzk7fCZhbXA7KS9nLCAoJDEpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJyZsdDsnOiByZXR1cm4gJzwnO1xuICAgICAgICAgICAgY2FzZSAnJmd0Oyc6IHJldHVybiAnPic7XG4gICAgICAgICAgICBjYXNlICcmIzM0Oyc6IHJldHVybiAnXCInO1xuICAgICAgICAgICAgY2FzZSAnJiMzOTsnOiByZXR1cm4gXCInXCI7XG4gICAgICAgICAgICBjYXNlICcmYW1wOyc6IHJldHVybiAnJic7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MveG1sVW5lc2NhcGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG8pIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbyA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICBpZiAoc3RyID09IG51bGwgfHwgdGhpcyA+IHN0cikgcmV0dXJuIDE7XG4gICAgICAgIGlmICh0aGlzIDwgc3RyKSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9jb21wYXJlVG8uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5jb250YWlucykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oc3RyKSB7IHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA+IC0xOyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9jb250YWlucy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuLi9hcnJheXMvY29udGFpbnMnXG5pbXBvcnQgJy4vZ2V0TGVuZ3RoJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aCB0aGUgbWF4IGxlbmd0aC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3N1ZmZpeF0gdGhlIHN1ZmZpeC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmcgPSBmdW5jdGlvbihjaGVja2J5dGUsIG1heExlbmd0aCwgc3VmZml4KSB7XG4gICAgICAgIGxldCBhcmdJbmRleCA9IDA7XG4gICAgICAgIGxldCBhcmdDdXJyID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4XTtcbiAgICAgICAgbGV0IGFyZ1NoaWZ0ID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXG4gICAgICAgIGNoZWNrYnl0ZSA9IFsnYm9vbGVhbicsICdudW1iZXInXS5jb250YWlucyh0eXBlb2YgYXJnQ3VycigpKSA/IGFyZ1NoaWZ0KCkgOiBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ0N1cnIoKSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYXJnQ3VycigpICsgXCIgaXMgbm90IGEgbnVtYmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIG1heExlbmd0aCA9IGFyZ1NoaWZ0KCk7XG5cbiAgICAgICAgc3VmZml4ID0gdHlwZW9mIGFyZ0N1cnIoKSA9PT0gJ3N0cmluZycgPyBhcmdTaGlmdCgpIDogJyc7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgIGlmICghKGxlbmd0aCA+IG1heExlbmd0aCkpIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGxldCBzdWZmaXhMZW5ndGggPSBzdWZmaXguZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgIGlmIChzdWZmaXhMZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWF4IGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiBzdWZmaXggbGVuZ3RoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IGNoZWNrZWRMZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBsZXQgbCA9IGMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZExlbmd0aCArIGwgPiBtYXhMZW5ndGggLSBzdWZmaXhMZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgY2hlY2tlZExlbmd0aCArPSBsO1xuICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IGM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFN0cmluZyArIHN1ZmZpeDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvY3V0c3RyaW5nLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4uL2FycmF5cy9jb250YWlucydcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmdldExlbmd0aCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxudW1iZXJ9IFtjaGVja2J5dGVdIGNoZWNrIGJ5dGUgbGVuZ3RoIGlmIHRydWUuIChkZWZhdWx0IGlzIGZhbHNlKVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uKGNoZWNrYnl0ZSkge1xuICAgICAgICBsZXQgYXJnSW5kZXggPSAwO1xuICAgICAgICBsZXQgYXJnQ3VyciA9ICgpID0+IGFyZ3VtZW50c1thcmdJbmRleF07XG4gICAgICAgIGxldCBhcmdTaGlmdCA9ICgpID0+IGFyZ3VtZW50c1thcmdJbmRleCsrXTtcblxuICAgICAgICBjaGVja2J5dGUgPSBbJ2Jvb2xlYW4nLCAnbnVtYmVyJ10uY29udGFpbnModHlwZW9mIGFyZ0N1cnIoKSkgPyBhcmdTaGlmdCgpIDogZmFsc2U7XG4gICAgICAgIGlmIChjaGVja2J5dGUgPT09IGZhbHNlKSByZXR1cm4gdGhpcy5sZW5ndGg7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGZhbHNlKSB7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDA3Rik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEodHlwZW9mIGNoZWNrYnl0ZSA9PT0gJ251bWJlcicgJiYgY2hlY2tieXRlID4gMCk6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IGNoZWNrYnl0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgIShjIDw9IDB4MDAwN0ZGKTpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgIShjIDw9IDB4MDBGRkZGKTpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmdldExlbmd0aDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvZ2V0TGVuZ3RoLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICBsZXQgaSA9IHRoaXMubGFzdEluZGV4T2Yoc3RyKTtcbiAgICAgICAgcmV0dXJuIGkgPiAtMSAmJiBpID09PSB0aGlzLmxlbmd0aCAtIHN0ci50b1N0cmluZygpLmxlbmd0aDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9lbmRzV2l0aC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuLi9hcnJheXMvaXNBcnJheSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdCkge1xuICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLygnJ3wnXFx7fH0nfFxceyhcXHcrKX0pL2csICgkMCwgJDEsICQyKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG4gICAgICAgICAgICBjYXNlIFwiJydcIjogcmV0dXJuIFwiJ1wiO1xuICAgICAgICAgICAgY2FzZSBcIid7XCI6IHJldHVybiAneyc7XG4gICAgICAgICAgICBjYXNlIFwifSdcIjogcmV0dXJuICd9JztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAoIS9eXFxkKyQvZy50ZXN0KCQyKSA/IGFyZ3VtZW50c1swXSB8fCB7fSA6IEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cylbJDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9mb3JtYXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXMpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGFyZ3VtZW50c1xuICAgICAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCByZWdleCA9IC8oJyd8J1xce3xcXH0nfFxceyhcXHcrKVxcfSkvZztcbiAgICAgICAgbGV0IHZhcmlhYmxlcyA9IFtdO1xuICAgICAgICBsZXQgbWF0Y2hlcztcbiAgICAgICAgd2hpbGUgKG1hdGNoZXMgPSByZWdleC5leGVjKHRoaXMpKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBcIicnXCIgJiYgbWF0Y2ggIT09IFwiJ3tcIiAmJiBtYXRjaCAhPT0gXCJ9J1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnB1c2gobWF0Y2hlc1syXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvZm9ybWF0VmFyaWFibGVzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHNpemUgPSBwYXJzZUludChzaXplKVxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKGksIGkgKyBzaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9ncm91cGVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBpZiAoIShzaXplID4gMSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNpemUgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSBzaXplID0gcGFyc2VJbnQoc2l6ZSlcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoOyBpID4gMDsgaSAtPSBzaXplKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShNYXRoLm1heCgwLCBpIC0gc2l6ZSksIGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cy5yZXZlcnNlKCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2dyb3VwZWRSaWdodC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3JlcGVhdCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKSArIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmxwYWQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmxwYWQgPSBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvbGVmdFBhZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJlcGVhdCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICAgIGlmICghKGNvdW50ID49IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBjb3VudCB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3JlcGVhdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3htbEVzY2FwZSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLm5sMmJyKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB4bWxFc2NhcGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUubmwyYnIgPSBmdW5jdGlvbih4bWxFc2NhcGUpIHtcbiAgICAgICAgcmV0dXJuICh4bWxFc2NhcGUgPyB0aGlzLnhtbEVzY2FwZSgpIDogdGhpcykucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLm5sMmJyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9ubDJici5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLyg8fD58XCJ8J3wmKS9nLCAoJDEpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJzwnOiByZXR1cm4gJyZsdDsnO1xuICAgICAgICAgICAgY2FzZSAnPic6IHJldHVybiAnJmd0Oyc7XG4gICAgICAgICAgICBjYXNlICdcIic6IHJldHVybiAnJiMzNDsnO1xuICAgICAgICAgICAgY2FzZSBcIidcIjogcmV0dXJuICcmIzM5Oyc7XG4gICAgICAgICAgICBjYXNlICcmJzogcmV0dXJuICcmYW1wOyc7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3htbEVzY2FwZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnF1b3RlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvdmVybGFwYWJsZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnF1b3RlID0gZnVuY3Rpb24ob3ZlcmxhcGFibGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvdmVybGFwYWJsZSAhPT0gJ2Jvb2xlYW4nKSBvdmVybGFwYWJsZSA9IHRydWU7XG4gICAgICAgIGlmICghb3ZlcmxhcGFibGUgJiYgdGhpcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyQXQoMCkgPT09IFwiJ1wiICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09IFwiJ1wiKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnXCInICsgdGhpcyArICdcIic7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5xdW90ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvcXVvdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yZWdleCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbGFnc1xuICAgICAqIEByZXR1cm5zIHtSZWdFeHB9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZWdleCA9IGZ1bmN0aW9uKGZsYWdzKSB7IHJldHVybiBuZXcgUmVnRXhwKHRoaXMsIGZsYWdzKTsgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5yID0gU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvcmVnZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9yZXBlYXQnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpICsgZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJwYWQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnJwYWQgPSBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9yaWdodFBhZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID0gZnVuY3Rpb24oc3RyKSB7IHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA9PT0gMDsgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9zdGFydHNXaXRoLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUudW5xdW90ZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUudW5xdW90ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gMiAmJlxuICAgICAgICAgICAgKCh0aGlzLmNoYXJBdCgwKSA9PT0gJ1wiJyAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSAnXCInKSB8fFxuICAgICAgICAgICAgKHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgxLCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnVucXVvdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3VucXVvdGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	if (!global.document) {
	    throw new Error("jQuery.extends requires a window with a document");
	}
	
	module.exports = global;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
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
	        if (key != null) {
	            if (key in result) result[key].push(elem);else result[key] = $(elem);
	        }
	    }
	    return result;
	};
	
	exports.default = $.fn.groupBy;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, document) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
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
	
	exports.default = $.fn.maxZIndex;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _window = __webpack_require__(5);
	
	var _window2 = _interopRequireDefault(_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _window2.default.document;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
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
	
	exports.default = $.nextTick;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof2 = __webpack_require__(11);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getIterator2 = __webpack_require__(43);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	__webpack_require__(4);
	
	__webpack_require__(58);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	            for (var _iterator = (0, _getIterator3.default)(keyFragments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var keyFragment = _step.value;
	
	                if ((obj = obj[keyFragment]) == null) return defaultValue;
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
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
	        obj = (0, _typeof3.default)(args.first()) === 'object' || $.isFunction(args.first()) ? args.shift() : {};
	        if (typeof args.first() !== 'string') {
	            throw new TypeError("Object key must be string type : " + args.first());
	        }
	        fullkey = args.shift();
	        value = args.shift();
	        var keys = $.map($.split(fullkey, '.', '/'), function (key) {
	            if (/^([^\[]+)?\[([^\]]+)?\]/.test(key)) {
	                var inKeys = [key.match(/^([^\[]+)?/)[1]];
	                var inBracket = /\[([^\]]+)?\]/g;
	                var nextMatches = void 0;
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
	        if ((typeof target === 'undefined' ? 'undefined' : (0, _typeof3.default)(target)) !== 'object' && !$.isFunction(target)) target = {};
	
	        sources = args;
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	            for (var _iterator2 = (0, _getIterator3.default)(sources), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var source = _step2.value;
	
	                if (source != null) {
	                    for (var name in source) {
	                        if (source.hasOwnProperty(name)) {
	                            var src = target[name];
	                            var copy = source[name];
	                            if (copy === target) continue;
	                            var copyIsArray = false;
	                            if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
	                                if (!copyIsArray) {
	                                    var srcIsPlainObject = false;
	                                    if (src === undefined || (srcIsPlainObject = $.isPlainObject(src)) || !extendIfUndefined) {
	                                        target[name] = $.obj.extend(deep, appendArray, srcIsPlainObject ? src : {}, copy, extendIfUndefined);
	                                    }
	                                } else if (src === undefined || !extendIfUndefined) {
	                                    target[name] = $.merge(appendArray && $.isArray(src) ? src : [], $.obj.extend(deep, [], copy));
	                                }
	                            } else if (copy !== undefined && (src === undefined || !extendIfUndefined)) {
	                                if (copy instanceof Date) {
	                                    target[name] = new Date(copy.getTime());
	                                } else if (copy instanceof RegExp) {
	                                    var flags = '';
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
	        } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                    _iterator2.return();
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
	
	exports.default = $.obj;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(12)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	__webpack_require__(42);
	module.exports = __webpack_require__(21).Symbol;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(15)
	  , global         = __webpack_require__(16)
	  , has            = __webpack_require__(17)
	  , DESCRIPTORS    = __webpack_require__(18)
	  , $export        = __webpack_require__(20)
	  , redefine       = __webpack_require__(24)
	  , $fails         = __webpack_require__(19)
	  , shared         = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(28)
	  , uid            = __webpack_require__(30)
	  , wks            = __webpack_require__(29)
	  , keyOf          = __webpack_require__(31)
	  , $names         = __webpack_require__(36)
	  , enumKeys       = __webpack_require__(37)
	  , isArray        = __webpack_require__(38)
	  , anObject       = __webpack_require__(39)
	  , toIObject      = __webpack_require__(32)
	  , createDesc     = __webpack_require__(26)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(window) {// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(21)
	  , ctx       = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 21 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(15)
	  , createDesc = __webpack_require__(26);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(15).setDesc
	  , has = __webpack_require__(17)
	  , TAG = __webpack_require__(29)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(27)('wks')
	  , uid    = __webpack_require__(30)
	  , Symbol = __webpack_require__(16).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(15)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(window) {// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , getNames  = __webpack_require__(15).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(15);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 42 */
/***/ function(module, exports) {



/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	__webpack_require__(52);
	module.exports = __webpack_require__(55);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	var Iterators = __webpack_require__(49);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(47)
	  , step             = __webpack_require__(48)
	  , Iterators        = __webpack_require__(49)
	  , toIObject        = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(50)(Array, 'Array', function(iterated, kind){
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
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(20)
	  , redefine       = __webpack_require__(24)
	  , hide           = __webpack_require__(25)
	  , has            = __webpack_require__(17)
	  , Iterators      = __webpack_require__(49)
	  , $iterCreate    = __webpack_require__(51)
	  , setToStringTag = __webpack_require__(28)
	  , getProto       = __webpack_require__(15).getProto
	  , ITERATOR       = __webpack_require__(29)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(15)
	  , descriptor     = __webpack_require__(26)
	  , setToStringTag = __webpack_require__(28)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(25)(IteratorPrototype, __webpack_require__(29)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(53)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(50)(String, 'String', function(iterated){
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(54)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(39)
	  , get      = __webpack_require__(56);
	module.exports = __webpack_require__(21).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(57)
	  , ITERATOR  = __webpack_require__(29)('iterator')
	  , Iterators = __webpack_require__(49);
	module.exports = __webpack_require__(21).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(29)('toStringTag')
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
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
	    var p = void 0;
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
	
	exports.default = $.split;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray2 = __webpack_require__(60);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _getIterator2 = __webpack_require__(43);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	__webpack_require__(4);
	
	__webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @param {string} queryString
	 * @param {Object} [options]
	 * @return {Object}
	 */
	$.parseQueryString = function (queryString, options) {
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
	        for (var _iterator = (0, _getIterator3.default)(pairs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var pair = _step.value;
	
	            var _pair$split = pair.split('=');
	
	            var _pair$split2 = (0, _slicedToArray3.default)(_pair$split, 2);
	
	            var name = _pair$split2[0];
	            var value = _pair$split2[1];
	
	            name = decodeURIComponent(name);
	            value = decodeURIComponent(value);
	            if (options.except == null || !options.except.contains(name)) $.obj.set(true, o, name, value);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return o;
	};
	
	exports.default = $.parseQueryString;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _isIterable2 = __webpack_require__(61);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(43);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
	    } else if ((0, _isIterable3.default)(Object(arr))) {
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

	__webpack_require__(45);
	__webpack_require__(52);
	module.exports = __webpack_require__(63);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(57)
	  , ITERATOR  = __webpack_require__(29)('iterator')
	  , Iterators = __webpack_require__(49);
	module.exports = __webpack_require__(21).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
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
	
	exports.default = $.fn.reclone;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getIterator2 = __webpack_require__(43);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	__webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	        for (var _iterator = (0, _getIterator3.default)(params), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return index;
	};
	
	exports.default = $.reindexArrayParams;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(4);
	
	exports.default = $.fn.reverse = Array.prototype.reverse;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
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
	            } else result[this.name] = this.value;
	        }
	    });
	    return result;
	};
	
	exports.default = $.fn.serializeObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
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
	    } else throw new TypeError(items + " is not array or plain object");
	
	    return false;
	};
	
	exports.default = $.some;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(document, $) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
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
	
	exports.default = $.supportsInputType;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(1)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
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
	
	exports.default = $.xmlToString;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlOGU5Mzk2MTZhYTZjMmQ5ODFjMSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZmluZEJ5TmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm90by5qcy9kaXN0L3Byb3RvLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF4WkluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXh0VGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmtleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzIiwid2VicGFjazovLy8uL3NyYy9zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFyc2VRdWVyeVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVpbmRleEFycmF5UGFyYW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXZlcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJpYWxpemVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cHBvcnRzSW5wdXRUeXBlLmpzIiwi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O0FBR2pDLFVBQU8sTUFBTSxJQUFOLEtBQWUsSUFBZixDQUgwQjtFQUFmOzttQkFNUCxFQUFFLGlCQUFGLEM7Ozs7Ozs7QUNkZjs7Ozs7O0FBRUE7Ozs7OztBQU1BLEdBQUUsV0FBRixHQUFnQixVQUFTLE9BQVQsRUFBa0I7QUFDOUIsU0FBSTtBQUNBLGdCQUFPLElBQUssYUFBSixFQUFELENBQXNCLGlCQUF0QixDQUF3QyxPQUF4QyxDQUFQLENBREE7TUFBSixDQUVFLE9BQU8sTUFBUCxFQUFlO0FBQ2IsYUFBSSxRQUFRLEdBQVIsSUFBZSxJQUFmLEVBQ0EsTUFBTSxJQUFJLEtBQUosQ0FBVSw2QkFBVixDQUFOLENBREo7O0FBR0EsZ0JBQU8sUUFBUSxHQUFSLENBSk07TUFBZjtFQUhVOzttQkFXRCxFQUFFLFdBQUYsQyIsImZpbGUiOiJqcXVlcnktZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wialF1ZXJ5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqUXVlcnlcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGU4ZTkzOTYxNmFhNmMyZDk4MWMxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vZmluZEJ5TmFtZXMnXG5pbXBvcnQgJy4vZ3JvdXBCeSdcbmltcG9ydCAnLi9tYXhaSW5kZXgnXG5pbXBvcnQgJy4vbmV4dFRpY2snXG5pbXBvcnQgJy4vb2JqJ1xuaW1wb3J0ICcuL3BhcnNlUXVlcnlTdHJpbmcnXG5pbXBvcnQgJy4vcmVjbG9uZSdcbmltcG9ydCAnLi9yZWluZGV4QXJyYXlQYXJhbXMnXG5pbXBvcnQgJy4vcmV2ZXJzZSdcbmltcG9ydCAnLi9zZXJpYWxpemVPYmplY3QnXG5pbXBvcnQgJy4vc29tZSdcbmltcG9ydCAnLi9zcGxpdCdcbmltcG9ydCAnLi9zdXBwb3J0c0lucHV0VHlwZSdcbmltcG9ydCAnLi94bWxUb1N0cmluZydcblxuZXhwb3J0IGRlZmF1bHQgJDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeS5leHRlbmRzIHJlcXVpcmVzIGEgalF1ZXJ5XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2pxdWVyeS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG5hbWVzXG4gKiBAcmV0dXJuIHtqUXVlcnk8SFRNTEVsZW1lbnQ+fVxuICovXG4kLmZuLmZpbmRCeU5hbWVzID0gZnVuY3Rpb24oLi4ubmFtZXMpIHtcbiAgICBpZiAobmFtZXMubGVuZ3RoID09PSAwKSByZXR1cm4gJChbXSk7XG4gICAgcmV0dXJuIHRoaXMuZmluZChuYW1lcy5tYXAobmFtZSA9PiAnW25hbWU9XCInICsgKG5hbWUgfHwgJycpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSArICdcIl0nKS5qb2luKCcsJykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5maW5kQnlOYW1lcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbmRCeU5hbWVzLmpzXG4gKiovIiwiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzNCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzOCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDApO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDcpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0OCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDkpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUxKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDYpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cbi8qKiovIH0sXG4vKiAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5jb250YWlucykge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0geyp9IGFcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChhKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihhKSA+PSAwO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuXHQgICAgICogQHJldHVybiB7bnVtYmVyfVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiAtMTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5ldmVyeSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5ldmVyeSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5ldmVyeTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5maWx0ZXIpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKiBAcmV0dXJuIHtBcnJheX1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHQgICAgICAgIHJldHVybiB0aGlzLmZsYXRNYXAoZnVuY3Rpb24gKGEsIGkpIHtcblx0ICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBfdGhpcywgYSwgaSwgX3RoaXMpKSByZXR1cm4gYTtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZmxhdE1hcCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4gQXJyYXlcblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmZsYXRNYXAgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpO1xuXHQgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSByZXN1bHRzLnB1c2guYXBwbHkocmVzdWx0cywgcmVzdWx0KTtlbHNlIGlmIChyZXN1bHQpIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0cztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5mbGF0TWFwO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LmlzQXJyYXkpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHsqfSBvYmpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkuaXNBcnJheTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZmlyc3QpIHtcblx0ICAgIEFycmF5LnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpc1swXTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5maXJzdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4ge3t9fVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciByZXN1bHQgPSB7fTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpc1tpXTtcblx0ICAgICAgICAgICAgdmFyIGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB2YWx1ZSwgaSwgdGhpcyk7XG5cdCAgICAgICAgICAgIGlmIChrZXkgIT0gbnVsbCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKGtleSBpbiByZXN1bHQpIHJlc3VsdFtrZXldLnB1c2godmFsdWUpO2Vsc2UgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBlZCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuXHQgICAgICogQHJldHVybiB7QXJyYXk8QXJyYXk+fVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZCA9IGZ1bmN0aW9uIChzaXplKSB7XG5cdCAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IHNpemUpIHtcblx0ICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuXHQgICAgICogQHJldHVybiB7QXJyYXk8QXJyYXk+fVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24gKHNpemUpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aDsgaSA+IDA7IGkgLT0gc2l6ZSkge1xuXHQgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShNYXRoLm1heCgwLCBpIC0gc2l6ZSksIGkpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdHMucmV2ZXJzZSgpO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZSkge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmluY2x1ZGUgPSBmdW5jdGlvbiAoYSkge1xuXHQgICAgICAgIHZhciBpID0gdGhpcy5pbmRleE9mKGEpO1xuXHQgICAgICAgIGlmIChpID4gLTEpIHRoaXNbaV0gPSBhO2Vsc2UgdGhpcy5wdXNoKGEpO1xuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmluY2x1ZGU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMpIHtcblx0ICAgIEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIHBhdGggPSAnJztcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXNbaV0pIHtcblx0ICAgICAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSAhPT0gJy8nKSBwYXRoICs9ICcvJztcblx0XG5cdCAgICAgICAgICAgICAgICBwYXRoICs9IHRoaXNbaV0udG9TdHJpbmcoKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcGF0aDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5sYXN0KSB7XG5cdCAgICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmxhc3Q7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5tYXApIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICByZXN1bHQucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLm1hcDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblx0XG5cdGlmICghQXJyYXkucHJvdG90eXBlLm1heCkge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGEgPiBiID8gYSA6IGI7XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUubWF4O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5yZWR1Y2UpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKiBAcmV0dXJuIHsqfVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgaWYgKCEodGhpcy5sZW5ndGggPiAwKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXNbMF07XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgcmVzdWx0LCB0aGlzW2ldLCBpLCB0aGlzKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuLyoqKi8gfSxcbi8qIDE3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXHRcblx0aWYgKCFBcnJheS5wcm90b3R5cGUubWluKSB7XG5cdCAgICBBcnJheS5wcm90b3R5cGUubWluID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuXHQgICAgICAgICAgICByZXR1cm4gYSA8IGIgPyBhIDogYjtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5taW47XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnJhbmdlKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gZnJvbVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0b1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqIEByZXR1cm4ge0FycmF5fVxuXHQgICAgICovXG5cdCAgICBBcnJheS5yYW5nZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuXHQgICAgICAgIHZhciBzdGVwID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1syXTtcblx0XG5cdCAgICAgICAgdmFyIHJhbmdlID0gW107XG5cdCAgICAgICAgdmFyIGlzTnVtYmVyID0gdHlwZW9mIGZyb20gPT09ICdudW1iZXInICYmIHR5cGVvZiB0byA9PT0gJ251bWJlcic7XG5cdCAgICAgICAgdmFyIGJlZ2luID0gaXNOdW1iZXIgPyBmcm9tIDogZnJvbS50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG5cdCAgICAgICAgdmFyIGVuZCA9IGlzTnVtYmVyID8gdG8gOiB0by50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG5cdCAgICAgICAgc3RlcCA9IE1hdGguYWJzKHN0ZXApIHx8IDE7XG5cdCAgICAgICAgaWYgKGJlZ2luID4gZW5kKSBzdGVwID0gLXN0ZXA7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IGJlZ2luOyBzdGVwID4gMCA/IGkgPD0gZW5kIDogaSA+PSBlbmQ7IGkgKz0gc3RlcCkge1xuXHQgICAgICAgICAgICByYW5nZS5wdXNoKGlzTnVtYmVyID8gaSA6IFN0cmluZy5mcm9tQ2hhckNvZGUoaSkpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmFuZ2U7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5yYW5nZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLnJlbW92ZSkge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChhKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IGEpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc3BsaWNlKGksIDEpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLnJlbW92ZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuc29tZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLnNvbWU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMjEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBfUmVnRXhwJGVzY2FwZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpWydkZWZhdWx0J107XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFfUmVnRXhwJGVzY2FwZSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICogQHJldHVybiB7U3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBSZWdFeHAuZXNjYXBlID0gZnVuY3Rpb24gKHRleHQpIHtcblx0ICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gX1JlZ0V4cCRlc2NhcGU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogX193ZWJwYWNrX3JlcXVpcmVfXygyMyksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuLyoqKi8gfSxcbi8qIDIzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KS5SZWdFeHAuZXNjYXBlO1xuXG4vKioqLyB9LFxuLyogMjQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmdyL1JleEV4cC5lc2NhcGVcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KVxuXHQgICwgJHJlICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuXHRcblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWdFeHAnLCB7ZXNjYXBlOiBmdW5jdGlvbiBlc2NhcGUoaXQpeyByZXR1cm4gJHJlKGl0KTsgfX0pO1xuXG5cbi8qKiovIH0sXG4vKiAyNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpXG5cdCAgLCBjb3JlICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KVxuXHQgICwgY3R4ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOClcblx0ICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXHRcblx0dmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuXHQgIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG5cdCAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkdcblx0ICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuXHQgICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG5cdCAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcblx0ICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuXHQgICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuXHQgICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG5cdCAgICAsIGtleSwgb3duLCBvdXQ7XG5cdCAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG5cdCAgZm9yKGtleSBpbiBzb3VyY2Upe1xuXHQgICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG5cdCAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuXHQgICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuXHQgICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcblx0ICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG5cdCAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcblx0ICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG5cdCAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuXHQgICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcblx0ICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG5cdCAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuXHQgICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcblx0ICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcblx0ICAgICAgfTtcblx0ICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuXHQgICAgICByZXR1cm4gRjtcblx0ICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuXHQgICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuXHQgICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuXHQgIH1cblx0fTtcblx0Ly8gdHlwZSBiaXRtYXBcblx0JGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuXHQkZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG5cdCRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcblx0JGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG5cdCRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG5cdCRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5cdG1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuLyoqKi8gfSxcbi8qIDI2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuXHR2YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcblx0ICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdGlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbi8qKiovIH0sXG4vKiAyNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjYnfTtcblx0aWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbi8qKiovIH0sXG4vKiAyOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5cdHZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcblx0ICBhRnVuY3Rpb24oZm4pO1xuXHQgIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG5cdCAgc3dpdGNoKGxlbmd0aCl7XG5cdCAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuXHQgICAgfTtcblx0ICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcblx0ICAgIH07XG5cdCAgfVxuXHQgIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcblx0ICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWdFeHAsIHJlcGxhY2Upe1xuXHQgIHZhciByZXBsYWNlciA9IHJlcGxhY2UgPT09IE9iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xuXHQgICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XG5cdCAgfSA6IHJlcGxhY2U7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcblx0ICAgIHJldHVybiBTdHJpbmcoaXQpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDMxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXgpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHJldHVybiB7UmVnRXhwfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXggPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiUGF0aCBtdXN0IG5vdCBiZSBlbXB0eS5cIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBwYXRoID0gdGhpcy5yZXBsYWNlKC9cXC97Mix9L2csICcvJykucmVwbGFjZSgvWy1bXFxde30oKSsuLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG5cdCAgICAgICAgdmFyIHBhdHRlcm4gPSBwYXRoLnJlcGxhY2UoLygoXFwvP1xcKlxcKil8KFxcLz9cXCopfChcXD8pfChcXC8pKS9nLCBmdW5jdGlvbiAoJDApIHtcblx0ICAgICAgICAgICAgc3dpdGNoICgkMCkge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnLyoqJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyg/Oi97MSx9LiopPyc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcqKic6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcuKic7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcvKic6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcoPzovezEsfVteL10qKT8nO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnKic6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbXi9dKic7XG5cdCAgICAgICAgICAgICAgICBjYXNlICc/Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1teL10nO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnLyc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcvezEsfSc7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgcGF0dGVybiArICcpJCcpO1xuXHQgICAgfTtcblx0fVxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuYSkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5hID0gU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXg7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuYnIybmwpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtib29sZWFufSB4bWxVbmVzY2FwZVxuXHQgICAgICogQHJldHVybiB7U3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmJyMm5sID0gZnVuY3Rpb24gKHhtbFVuZXNjYXBlKSB7XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucmVwbGFjZSgvKDxicj58PGJyXFwvPikvZywgJ1xcbicpO1xuXHQgICAgICAgIGlmICh4bWxVbmVzY2FwZSkgcmV0dXJuIHJlc3VsdC54bWxVbmVzY2FwZSgpO1xuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmJyMm5sO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDMzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLygmbHQ7fCZndDt8JiMzNDt8JiMzOTt8JmFtcDspL2csIGZ1bmN0aW9uICgkMSkge1xuXHQgICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcmbHQ7Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzwnO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnJmd0Oyc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc+Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyYjMzQ7Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1wiJztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyYjMzk7Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCInXCI7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcmYW1wOyc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcmJztcblx0ICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQxO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDM0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbykge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG8gPSBmdW5jdGlvbiAoc3RyKSB7XG5cdCAgICAgICAgaWYgKHN0ciA9PSBudWxsIHx8IHRoaXMgPiBzdHIpIHJldHVybiAxO1xuXHQgICAgICAgIGlmICh0aGlzIDwgc3RyKSByZXR1cm4gLTE7XG5cdCAgICAgICAgcmV0dXJuIDA7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuY29udGFpbnMpIHtcblx0ICAvKipcblx0ICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAgICovXG5cdCAgU3RyaW5nLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0ICAgIHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA+IC0xO1xuXHQgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuY29udGFpbnM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xuXHRcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZykge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW58bnVtYmVyfSBbY2hlY2tieXRlXSBjaGVjayBieXRlIGxlbmd0aCBpZiB0cnVlLiAoZGVmYXVsdCBpcyBmYWxzZSlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMZW5ndGggdGhlIG1heCBsZW5ndGguXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3N1ZmZpeF0gdGhlIHN1ZmZpeC5cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmcgPSBmdW5jdGlvbiAoY2hlY2tieXRlLCBtYXhMZW5ndGgsIHN1ZmZpeCkge1xuXHQgICAgICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuXHRcblx0ICAgICAgICB2YXIgYXJnSW5kZXggPSAwO1xuXHQgICAgICAgIHZhciBhcmdDdXJyID0gZnVuY3Rpb24gYXJnQ3VycigpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9hcmd1bWVudHNbYXJnSW5kZXhdO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdmFyIGFyZ1NoaWZ0ID0gZnVuY3Rpb24gYXJnU2hpZnQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBfYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXHQgICAgICAgIH07XG5cdFxuXHQgICAgICAgIGNoZWNrYnl0ZSA9IFsnYm9vbGVhbicsICdudW1iZXInXS5jb250YWlucyh0eXBlb2YgYXJnQ3VycigpKSA/IGFyZ1NoaWZ0KCkgOiBmYWxzZTtcblx0XG5cdCAgICAgICAgaWYgKHR5cGVvZiBhcmdDdXJyKCkgIT09ICdudW1iZXInKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYXJnQ3VycigpICsgXCIgaXMgbm90IGEgbnVtYmVyXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBtYXhMZW5ndGggPSBhcmdTaGlmdCgpO1xuXHRcblx0ICAgICAgICBzdWZmaXggPSB0eXBlb2YgYXJnQ3VycigpID09PSAnc3RyaW5nJyA/IGFyZ1NoaWZ0KCkgOiAnJztcblx0XG5cdCAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG5cdCAgICAgICAgaWYgKCEobGVuZ3RoID4gbWF4TGVuZ3RoKSkgcmV0dXJuIHRoaXM7XG5cdFxuXHQgICAgICAgIHZhciBzdWZmaXhMZW5ndGggPSBzdWZmaXguZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG5cdCAgICAgICAgaWYgKHN1ZmZpeExlbmd0aCA+IG1heExlbmd0aCkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk1heCBsZW5ndGggbXVzdCBiZSBtb3JlIHRoYW4gc3VmZml4IGxlbmd0aFwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHJlc3VsdFN0cmluZyA9ICcnO1xuXHQgICAgICAgIHZhciBjaGVja2VkTGVuZ3RoID0gMDtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmNoYXJBdChpKTtcblx0ICAgICAgICAgICAgdmFyIGwgPSBjLmdldExlbmd0aChjaGVja2J5dGUpO1xuXHQgICAgICAgICAgICBpZiAoY2hlY2tlZExlbmd0aCArIGwgPiBtYXhMZW5ndGggLSBzdWZmaXhMZW5ndGgpIGJyZWFrO1xuXHQgICAgICAgICAgICBjaGVja2VkTGVuZ3RoICs9IGw7XG5cdCAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBjO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0U3RyaW5nICsgc3VmZml4O1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmc7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGgpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG5cdCAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKGNoZWNrYnl0ZSkge1xuXHQgICAgICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuXHRcblx0ICAgICAgICB2YXIgYXJnSW5kZXggPSAwO1xuXHQgICAgICAgIHZhciBhcmdDdXJyID0gZnVuY3Rpb24gYXJnQ3VycigpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9hcmd1bWVudHNbYXJnSW5kZXhdO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdmFyIGFyZ1NoaWZ0ID0gZnVuY3Rpb24gYXJnU2hpZnQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBfYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXHQgICAgICAgIH07XG5cdFxuXHQgICAgICAgIGNoZWNrYnl0ZSA9IFsnYm9vbGVhbicsICdudW1iZXInXS5jb250YWlucyh0eXBlb2YgYXJnQ3VycigpKSA/IGFyZ1NoaWZ0KCkgOiBmYWxzZTtcblx0ICAgICAgICBpZiAoY2hlY2tieXRlID09PSBmYWxzZSkgcmV0dXJuIHRoaXMubGVuZ3RoO1xuXHRcblx0ICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmNoYXJDb2RlQXQoaSk7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoZmFsc2UpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgIShjIDw9IDB4MDAwMDdGKTpcblx0ICAgICAgICAgICAgICAgICAgICBsZW5ndGggKz0gMTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgISh0eXBlb2YgY2hlY2tieXRlID09PSAnbnVtYmVyJyAmJiBjaGVja2J5dGUgPiAwKTpcblx0ICAgICAgICAgICAgICAgICAgICBsZW5ndGggKz0gY2hlY2tieXRlO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDA3RkYpOlxuXHQgICAgICAgICAgICAgICAgICAgIGxlbmd0aCArPSAyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMEZGRkYpOlxuXHQgICAgICAgICAgICAgICAgICAgIGxlbmd0aCArPSAzO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgICAgICAgICAgICBsZW5ndGggKz0gNDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gbGVuZ3RoO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGg7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuXHQgICAgICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGggPSBmdW5jdGlvbiAoc3RyKSB7XG5cdCAgICAgICAgdmFyIGkgPSB0aGlzLmxhc3RJbmRleE9mKHN0cik7XG5cdCAgICAgICAgcmV0dXJuIGkgPiAtMSAmJiBpID09PSB0aGlzLmxlbmd0aCAtIHN0ci50b1N0cmluZygpLmxlbmd0aDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGg7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuXHRcblx0ICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oJyd8J1xce3x9J3xcXHsoXFx3Kyl9KS9nLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuXHQgICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIFwiJydcIjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCInXCI7XG5cdCAgICAgICAgICAgICAgICBjYXNlIFwiJ3tcIjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3snO1xuXHQgICAgICAgICAgICAgICAgY2FzZSBcIn0nXCI6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd9Jztcblx0ICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICghL15cXGQrJC9nLnRlc3QoJDIpID8gX2FyZ3VtZW50c1swXSB8fCB7fSA6IEFycmF5LmlzQXJyYXkoX2FyZ3VtZW50c1swXSkgPyBfYXJndW1lbnRzWzBdIDogX2FyZ3VtZW50cylbJDJdO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmZvcm1hdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcykge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0geyp9IGFyZ3VtZW50c1xuXHQgICAgICogQHJldHVybnMge0FycmF5PHN0cmluZz59XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciByZWdleCA9IC8oJyd8J1xce3xcXH0nfFxceyhcXHcrKVxcfSkvZztcblx0ICAgICAgICB2YXIgdmFyaWFibGVzID0gW107XG5cdCAgICAgICAgdmFyIG1hdGNoZXMgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgd2hpbGUgKG1hdGNoZXMgPSByZWdleC5leGVjKHRoaXMpKSB7XG5cdCAgICAgICAgICAgIHZhciBtYXRjaCA9IG1hdGNoZXNbMF07XG5cdCAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gXCInJ1wiICYmIG1hdGNoICE9PSBcIid7XCIgJiYgbWF0Y2ggIT09IFwifSdcIikge1xuXHQgICAgICAgICAgICAgICAgdmFyaWFibGVzLnB1c2gobWF0Y2hlc1syXSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHZhcmlhYmxlcztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbi8qKiovIH0sXG4vKiA0MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG5cdCAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuXHQgICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzaXplIHZhbHVlJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHNpemUgPSBwYXJzZUludChzaXplKTtcblx0ICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuXHQgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShpLCBpICsgc2l6ZSkpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0cztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcblx0ICAgICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24gKHNpemUpIHtcblx0ICAgICAgICBpZiAoIShzaXplID4gMSkpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSBzaXplID0gcGFyc2VJbnQoc2l6ZSk7XG5cdCAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcblx0ICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIHNpemUpLCBpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDQpO1xuXHRcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG5cdCAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQgPSBmdW5jdGlvbiAobGVuZ3RoLCBmaWxsQ2hhcikge1xuXHQgICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuXHQgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgcmV0dXJuIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCkgKyB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICB9O1xuXHR9XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5scGFkKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmxwYWQgPSBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQ7XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUucmVwZWF0ID0gZnVuY3Rpb24gKGNvdW50KSB7XG5cdCAgICAgICAgaWYgKCEoY291bnQgPj0gMCkpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgY291bnQgdmFsdWUnKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHQgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy50b1N0cmluZygpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Nik7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUubmwyYnIpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtib29sZWFufSB4bWxFc2NhcGVcblx0ICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUubmwyYnIgPSBmdW5jdGlvbiAoeG1sRXNjYXBlKSB7XG5cdCAgICAgICAgcmV0dXJuICh4bWxFc2NhcGUgPyB0aGlzLnhtbEVzY2FwZSgpIDogdGhpcykucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+Jyk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLm5sMmJyO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQ2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKDx8PnxcInwnfCYpL2csIGZ1bmN0aW9uICgkMSkge1xuXHQgICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlICc8Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyZsdDsnO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnPic6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcmZ3Q7Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJ1wiJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyYjMzQ7Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgXCInXCI6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcmIzM5Oyc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcmJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyZhbXA7Jztcblx0ICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQxO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5xdW90ZSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG92ZXJsYXBhYmxlXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUucXVvdGUgPSBmdW5jdGlvbiAob3ZlcmxhcGFibGUpIHtcblx0ICAgICAgICBpZiAodHlwZW9mIG92ZXJsYXBhYmxlICE9PSAnYm9vbGVhbicpIG92ZXJsYXBhYmxlID0gdHJ1ZTtcblx0ICAgICAgICBpZiAoIW92ZXJsYXBhYmxlICYmIHRoaXMubGVuZ3RoID49IDIpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLmNoYXJBdCgwKSA9PT0gXCInXCIgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gXCInXCIpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiAnXCInICsgdGhpcyArICdcIic7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnF1b3RlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQ4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnJlZ2V4KSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbGFnc1xuXHQgICAgICogQHJldHVybnMge1JlZ0V4cH1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5yZWdleCA9IGZ1bmN0aW9uIChmbGFncykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHRoaXMsIGZsYWdzKTtcblx0ICAgIH07XG5cdH1cblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnIpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUuciA9IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0NCk7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG5cdCAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkID0gZnVuY3Rpb24gKGxlbmd0aCwgZmlsbENoYXIpIHtcblx0ICAgICAgICBpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoIWZpbGxDaGFyKSBmaWxsQ2hhciA9ICcgJztcblx0ICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuXHQgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkgKyBmaWxsQ2hhci5yZXBlYXQobGVuZ3RoIC0gdGhpcy5sZW5ndGgpO1xuXHQgICAgfTtcblx0fVxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUucnBhZCkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5ycGFkID0gU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA1MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCkge1xuXHQgIC8qKlxuXHQgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICAgKi9cblx0ICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc3RyKSB7XG5cdCAgICByZXR1cm4gdGhpcy5pbmRleE9mKHN0cikgPT09IDA7XG5cdCAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDUxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnVucXVvdGUpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUudW5xdW90ZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gMiAmJiAodGhpcy5jaGFyQXQoMCkgPT09ICdcIicgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gJ1wiJyB8fCB0aGlzLmNoYXJBdCgwKSA9PT0gXCInXCIgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gXCInXCIpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnNsaWNlKDEsIC0xKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUudW5xdW90ZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH1cbi8qKioqKiovIF0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWdPR0pqT0dVMU56YzJNbVpoT1dVM01tWTRZVGtpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12WTI5dWRHRnBibk11YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5cGJtUmxlRTltTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdlpYWmxjbmt1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5bWFXeDBaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5bWJHRjBUV0Z3TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmFYTkJjbkpoZVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwyWnBjbk4wTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdlozSnZkWEJDZVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwyZHliM1Z3WldRdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZ5Y21GNWN5OW5jbTkxY0dWa1VtbG5hSFF1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5cGJtTnNkV1JsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmFtOXBibEJoZEdoekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTloY25KaGVYTXZiR0Z6ZEM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwyMWhjQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdllYSnlZWGx6TDIxaGVDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WVhKeVlYbHpMM0psWkhWalpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WVhKeVlYbHpMMjFwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwzSmhibWRsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmNtVnRiM1psTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmMyOXRaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmNtVm5aWGh3Y3k5bGMyTmhjR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5aVlXSmxiQzF5ZFc1MGFXMWxMMk52Y21VdGFuTXZjbVZuWlhod0wyVnpZMkZ3WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5bWJpOXlaV2RsZUhBdlpYTmpZWEJsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WlhNM0xuSmxaMlY0Y0M1bGMyTmhjR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeThrTG1WNGNHOXlkQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMeVF1WjJ4dlltRnNMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMzR2WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZKQzVqYjNKbExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdkpDNWpkSGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeThrTG1FdFpuVnVZM1JwYjI0dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k4a0xuSmxjR3hoWTJWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMMkZ1ZEZOMGVXeGxVR0YwYUZSdlVtVm5aWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBjbWx1WjNNdlluSXlibXd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBjbWx1WjNNdmVHMXNWVzVsYzJOaGNHVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012WTI5dGNHRnlaVlJ2TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpkSEpwYm1kekwyTnZiblJoYVc1ekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMMk4xZEhOMGNtbHVaeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5blpYUk1aVzVuZEdndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wY21sdVozTXZaVzVrYzFkcGRHZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012Wm05eWJXRjBMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5emRISnBibWR6TDJadmNtMWhkRlpoY21saFlteGxjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5bmNtOTFjR1ZrTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpkSEpwYm1kekwyZHliM1Z3WldSU2FXZG9kQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5c1pXWjBVR0ZrTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpkSEpwYm1kekwzSmxjR1ZoZEM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjM1J5YVc1bmN5OXViREppY2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjM1J5YVc1bmN5OTRiV3hGYzJOaGNHVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012Y1hWdmRHVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012Y21WblpYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012Y21sbmFIUlFZV1F1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBjbWx1WjNNdmMzUmhjblJ6VjJsMGFDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YzNSeWFXNW5jeTkxYm5GMWIzUmxMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3gxUWtGQlpUdEJRVU5tTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3TzBGRGRFTkJMR0ZCUVZrc1EwRkJRenM3Y1VKQlJVNHNRMEZCYlVJN08zRkNRVU51UWl4RFFVRm5RanM3Y1VKQlEyaENMRU5CUVdsQ096dHhRa0ZEYWtJc1EwRkJaMEk3TzNGQ1FVTm9RaXhEUVVGclFqczdjVUpCUTJ4Q0xFTkJRV3RDT3p0eFFrRkRiRUlzUTBGQmEwSTdPM0ZDUVVOc1FpeEZRVUYxUWpzN2NVSkJRM1pDTEVWQlFXdENPenR4UWtGRGJFSXNRMEZCYTBJN08zRkNRVU5zUWl4RFFVRnJRanM3Y1VKQlEyeENMRVZCUVc5Q096dHhRa0ZEY0VJc1JVRkJaVHM3Y1VKQlEyWXNSVUZCWXpzN2NVSkJRMlFzUlVGQll6czdjVUpCUTJRc1JVRkJZenM3Y1VKQlEyUXNSVUZCWjBJN08zRkNRVU5vUWl4RlFVRnBRanM3Y1VKQlEycENMRVZCUVdsQ096dHhRa0ZEYWtJc1JVRkJaVHM3Y1VKQlJXWXNSVUZCYTBJN08zRkNRVVZzUWl4RlFVRXJRanM3Y1VKQlF5OUNMRVZCUVdsQ096dHhRa0ZEYWtJc1JVRkJjVUk3TzNGQ1FVTnlRaXhGUVVGdlFqczdjVUpCUTNCQ0xFVkJRWEZDT3p0eFFrRkRja0lzUlVGQmIwSTdPM0ZDUVVOd1FpeEZRVUZyUWpzN2NVSkJRMnhDTEVWQlFUSkNPenR4UWtGRE0wSXNSVUZCY1VJN08zRkNRVU55UWl4RlFVRnRRanM3Y1VKQlEyNUNMRVZCUVhkQ096dHhRa0ZEZUVJc1JVRkJiVUk3TzNGQ1FVTnVRaXhGUVVGcFFqczdjVUpCUTJwQ0xFVkJRV2xDT3p0eFFrRkRha0lzUlVGQmFVSTdPM0ZDUVVOcVFpeEZRVUZyUWpzN2NVSkJRMnhDTEVWQlFXOUNPenR4UWtGRGNFSXNSVUZCYzBJN08zRkNRVU4wUWl4RlFVRnRRanM3Y1VKQlEyNUNMRVZCUVhGQ096dHhRa0ZEY2tJc1JVRkJkVUlzUlRzN096czdPMEZETjBNNVFpeGhRVUZaTEVOQlFVTTdPenM3T3p0eFFrRkZUaXhEUVVGWE96dEJRVVZzUWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVWQlFVVTdPenM3TzBGQlN6TkNMRlZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeEhRVUZITEZWQlFWTXNRMEZCUXl4RlFVRkZPMEZCUTI1RExHZENRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzAxQlF5OUNPMFZCUTBvN08zTkNRVVZqTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVVHM3T3pzN096dEJRMlIyUXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RlFVRkZPenM3T3p0QlFVc3hRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlRMRWxCUVVrc1JVRkJSVHRCUVVOeVF5eGpRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOc1F5eHBRa0ZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VlVGREwwTTdRVUZEUkN4blFrRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dE5RVU5pTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBPenM3T3pzN08wRkRablJETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVWQlFVVTdPenM3T3p0QlFVMTRRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRlRMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGFFUXNZMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRGJFTXNhVUpCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hQUVVGUExFdEJRVXNzUTBGQlF6dFZRVU4yUlR0QlFVTkVMR2RDUVVGUExFbEJRVWtzUTBGQlF6dE5RVU5tTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxPenM3T3pzN08wRkRhRUp3UXl4aFFVRlpMRU5CUVVNN096czdPenR4UWtGRlRpeERRVUZYT3p0QlFVVnNRaXhMUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVN096czdPenRCUVUxNlFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVExGRkJRVkVzUlVGQlJTeFBRVUZQTEVWQlFVVTdPenRCUVVOcVJDeG5Ra0ZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCU3p0QlFVTXhRaXhwUWtGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1UwRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRWUVVNMVJDeERRVUZETEVOQlFVTTdUVUZEVGl4RFFVRkRPMFZCUTB3N08zTkNRVVZqTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUVHM3T3pzN096dEJRMnBDY2tNc1lVRkJXU3hEUVVGRE96czdPenM3Y1VKQlJVNHNRMEZCVnpzN1FVRkZiRUlzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRk96czdPenM3UVVGTk1VSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlV5eFJRVUZSTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTJ4RUxHRkJRVWtzVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnFRaXhqUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTnNReXhwUWtGQlNTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZET1VRc2FVSkJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUzBGRE1VUXNTVUZCU1N4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VlFVTjZRenRCUVVORUxHZENRVUZQTEU5QlFVOHNRMEZCUXp0TlFVTnNRanRGUVVOS096dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVTg3T3pzN096czdRVU55UW5SRExHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSVHM3T3pzN08wRkJUV2hDTEZWQlFVc3NRMEZCUXl4UFFVRlBMRWRCUVVjc1ZVRkJVeXhIUVVGSExFVkJRVVU3UVVGRE1VSXNaMEpCUVU4c1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExHZENRVUZuUWl4RFFVRkRPMDFCUTI1RkxFTkJRVU03UlVGRFREczdjMEpCUldNc1MwRkJTeXhEUVVGRExFOUJRVTg3T3pzN096czdRVU5pTlVJc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1JVRkJSVHRCUVVONFFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhaUVVGWE8wRkJRVVVzWjBKQlFVOHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wMUJRVVVzUTBGQlF6dEZRVU14UkRzN2MwSkJSV01zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxPenM3T3pzN08wRkRUbkJETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVTdPenM3T3p0QlFVMHhRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlRMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGJFUXNZVUZCU1N4UFFVRlBMRkZCUVZFc1MwRkJTeXhWUVVGVkxFVkJRVVU3UVVGRGFFTXNiVUpCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEc5Q1FVRnZRaXhEUVVGRExFTkJRVU03VlVGRGNFUTdRVUZEUkN4aFFVRkpMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGFFSXNZMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRGJFTXNhVUpCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTndRaXhwUWtGQlNTeEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGVrUXNhVUpCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU5pTEhGQ1FVRkpMRWRCUVVjc1NVRkJTU3hOUVVGTkxFVkJRMklzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eExRVVY0UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0alFVTTNRanRWUVVOS08wRkJRMFFzWjBKQlFVOHNUVUZCVFN4RFFVRkRPMDFCUTJwQ0xFTkJRVU03UlVGRFREczdjMEpCUldNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQT3pzN096czdPMEZETTBKMFF5eGhRVUZaTEVOQlFVTTdPenM3TzBGQlJXSXNTMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEZRVUZGT3pzN096dEJRVXN4UWl4VlFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUjBGQlJ5eFZRVUZUTEVsQlFVa3NSVUZCUlR0QlFVTnlReXhoUVVGSkxFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYWtJc1kwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTjRReXh2UWtGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRWUVVONlF6dEJRVU5FTEdkQ1FVRlBMRTlCUVU4c1EwRkJRenROUVVOc1FpeERRVUZETzBWQlEwdzdPM05DUVVWakxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHpzN096czdPenRCUTJoQ2RFTXNZVUZCV1N4RFFVRkRPenM3T3p0QlFVVmlMRXRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NSVUZCUlRzN096czdRVUZMTDBJc1ZVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFpRVUZaTEVkQlFVY3NWVUZCVXl4SlFVRkpMRVZCUVVVN1FVRkRNVU1zWVVGQlNTeFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTJwQ0xHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVN1FVRkRlRU1zYjBKQlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRWUVVOMFJEdEJRVU5FTEdkQ1FVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dE5RVU0xUWl4RFFVRkRPMFZCUTB3N08zTkNRVVZqTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXVHM3T3pzN096dEJRMmhDTTBNc1lVRkJXU3hEUVVGRE96czdPenM3Y1VKQlJVNHNRMEZCVnpzN1FVRkZiRUlzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRekZDTEZWQlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhIUVVGSExGVkJRVk1zUTBGQlF5eEZRVUZGTzBGQlEyeERMR0ZCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRlRUlzWVVGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUTA0c1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVVmFMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYWtJc1owSkJRVThzU1VGQlNTeERRVUZETzAxQlEyWXNRMEZCUXp0RlFVTk1PenR6UWtGRll5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4N096czdPenM3UVVObWRFTXNZVUZCV1N4RFFVRkRPenM3T3p0QlFVVmlMRXRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlR0QlFVTTFRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSMEZCUnl4WlFVRlhPMEZCUTI1RExHRkJRVWtzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTmtMR05CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEyeERMR2xDUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0QlFVTlVMSEZDUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRM1pFTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNN08wRkJSV2hDTEhGQ1FVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMk5CUXpsQ08xVkJRMG83UVVGRFJDeG5Ra0ZCVHl4SlFVRkpMRU5CUVVNN1RVRkRaaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV6czdPenM3T3p0QlEycENlRU1zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJUdEJRVU4yUWl4VlFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUjBGQlJ5eFpRVUZYTzBGQlFVVXNaMEpCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1RVRkJSU3hEUVVGRE8wVkJRM1pGT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVazdPenM3T3pzN1FVTk9ia01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJUczdPenM3UVVGTGRFSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFZEJRVWNzVlVGQlV5eFJRVUZSTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUXpsRExHRkJRVWtzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTm9RaXhqUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTnVReXh0UWtGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMVZCUTJwRk8wRkJRMFFzWjBKQlFVOHNUVUZCVFN4RFFVRkRPMDFCUTJwQ08wVkJRMG83TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ6czdPenM3T3p0QlEyaENiRU1zWVVGQldTeERRVUZET3pzN096czdjVUpCUlU0c1JVRkJWVHM3UVVGRmFrSXNTMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eEZRVUZGTzBGQlEzUkNMRlZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eEhRVUZITEZsQlFWYzdRVUZETjBJc1owSkJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8yOUNRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVrc1EwRkJReXhIUVVGSExFTkJRVU03VlVGQlFTeERRVUZETEVOQlFVTTdUVUZEYWtRN1JVRkRTanM3YzBKQlJXTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSE96czdPenM3TzBGRFZteERMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVN096czdPenRCUVUxNlFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVExGRkJRVkVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYWtRc1lVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkRjRUlzYlVKQlFVMHNTVUZCU1N4VFFVRlRMRU5CUVVNc05rTkJRVFpETEVOQlFVTXNRMEZCUXp0VlFVTjBSVHRCUVVORUxHRkJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOeVFpeGpRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOdVF5eHRRa0ZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRWUVVOeVJUdEJRVU5FTEdkQ1FVRlBMRTFCUVUwc1EwRkJRenROUVVOcVFpeERRVUZETzBWQlEwdzdPM05DUVVWakxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFRzN096czdPenRCUTNCQ2NrTXNZVUZCV1N4RFFVRkRPenM3T3pzN2NVSkJSVTRzUlVGQlZUczdRVUZGYWtJc1MwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTNSQ0xGVkJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4SFFVRkhMRmxCUVZjN1FVRkROMElzWjBKQlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzI5Q1FVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdWVUZCUVN4RFFVRkRMRU5CUVVNN1RVRkRha1E3UlVGRFNqczdjMEpCUldNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZIT3pzN096czdPMEZEVm14RExHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSVHM3T3pzN096czdRVUZSWkN4VlFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExGVkJRVk1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCV1R0aFFVRldMRWxCUVVrc2VVUkJRVWNzUTBGQlF6czdRVUZEY2tNc1lVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEyWXNZVUZCU1N4UlFVRlJMRWRCUVVjc1QwRkJUeXhKUVVGSkxFdEJRVXNzVVVGQlVTeEpRVUZKTEU5QlFVOHNSVUZCUlN4TFFVRkxMRkZCUVZFc1EwRkJRenRCUVVOc1JTeGhRVUZKTEV0QlFVc3NSMEZCUnl4UlFVRlJMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE5VUXNZVUZCU1N4SFFVRkhMRWRCUVVjc1VVRkJVU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzUkVMR0ZCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVNelFpeGhRVUZKTEV0QlFVc3NSMEZCUnl4SFFVRkhMRVZCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzBGQlF6bENMR05CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUzBGQlN5eEZRVUZGTEVsQlFVa3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3UVVGRE0wUXNhMEpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdWVUZEY2tRN1FVRkRSQ3huUWtGQlR5eExRVUZMTEVOQlFVTTdUVUZEYUVJc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1MwRkJTenM3T3pzN096dEJRM2hDTVVJc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVONlFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVExFTkJRVU1zUlVGQlJUdEJRVU5xUXl4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVTdRVUZEZGtNc2FVSkJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVObUxIRkNRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dGpRVU55UWp0VlFVTktPMEZCUTBRc1owSkJRVThzU1VGQlNTeERRVUZETzAxQlEyWXNRMEZCUXp0RlFVTk1PenR6UWtGRll5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwN096czdPenM3UVVOaWNrTXNZVUZCV1N4RFFVRkRPenM3T3p0QlFVVmlMRXRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlRzN096czdPMEZCVFhaQ0xGVkJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4SFFVRkhMRlZCUVZNc1VVRkJVU3hGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU12UXl4aFFVRkpMRTlCUVU4c1VVRkJVU3hMUVVGTExGVkJRVlVzUlVGQlJUdEJRVU5vUXl4dFFrRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU1zUTBGQlF6dFZRVU53UkR0QlFVTkVMR05CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEyeERMR2xDUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzFWQlEzSkZPMEZCUTBRc1owSkJRVThzUzBGQlN5eERRVUZETzAxQlEyaENMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSk96czdPenM3TzBGRGJrSnVReXhoUVVGWkxFTkJRVU03T3pzN096czdRVUZGWWl4TFFVRkpMR1ZCUVdNc1JVRkJSVHM3T3pzN08wRkJUV2hDTEZkQlFVMHNRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJVeXhKUVVGSkxFVkJRVVU3UVVGRE0wSXNaMEpCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5d3dRa0ZCTUVJc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dE5RVU16UkN4RFFVRkRPMFZCUTB3N096czdPenM3T3p0QlExaEVMRzFDUVVGclFpeDNSRHM3T3pzN08wRkRRV3hDTzBGQlEwRXNkMFE3T3pzN096dEJRMFJCTzBGQlEwRTdRVUZEUVN4NVJFRkJkMFE3TzBGQlJYaEVMQ3RDUVVFNFFpdzBRa0ZCTkVJc1owSkJRV2RDTEVkQlFVYzdPenM3T3pzN1FVTktOMFU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dlJVRkJiVVU3UVVGRGJrVXNjMFpCUVhGR08wRkJRM0pHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3c1owVkJRU3RFTzBGQlF5OUVPMEZCUTBFN1FVRkRRVHRCUVVOQkxHVkJRV003UVVGRFpDeGxRVUZqTzBGQlEyUXNaVUZCWXp0QlFVTmtMR1ZCUVdNN1FVRkRaQ3huUWtGQlpUdEJRVU5tTEdkQ1FVRmxPMEZCUTJZc01FSTdPenM3T3p0QlF6ZERRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDNRMEZCZFVNc1owTTdPenM3T3p0QlEwaDJReXc0UWtGQk5rSTdRVUZETjBJc2MwTkJRWEZETEdkRE96czdPenM3UVVORWNrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SE96czdPenM3UVVOdVFrRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1J6czdPenM3TzBGRFNFRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVjN096czdPenRCUTFCQkxHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXh0UWtGQmJVSXNSVUZCUlRzN096dEJRVWwyUXl4WFFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRmxCUVZjN1FVRkRPVU1zWVVGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVOdVFpeHRRa0ZCVFN4SlFVRkpMRlZCUVZVc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRPMVZCUTI1RU8wRkJRMFFzWVVGQlNTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTJ4R0xHRkJRVWtzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1owTkJRV2RETEVWQlFVVXNWVUZCUXl4RlFVRkZMRVZCUVVzN1FVRkRha1VzY1VKQlFWRXNSVUZCUlR0QlFVTldMSE5DUVVGTExFdEJRVXM3UVVGQlJTdzBRa0ZCVHl4alFVRmpMRU5CUVVNN1FVRkRiRU1zYzBKQlFVc3NTVUZCU1R0QlFVRkZMRFJDUVVGUExFbEJRVWtzUTBGQlF6dEJRVU4yUWl4elFrRkJTeXhKUVVGSk8wRkJRVVVzTkVKQlFVOHNhVUpCUVdsQ0xFTkJRVU03UVVGRGNFTXNjMEpCUVVzc1IwRkJSenRCUVVGRkxEUkNRVUZQTEU5QlFVOHNRMEZCUXp0QlFVTjZRaXh6UWtGQlN5eEhRVUZITzBGQlFVVXNORUpCUVU4c1RVRkJUU3hEUVVGRE8wRkJRM2hDTEhOQ1FVRkxMRWRCUVVjN1FVRkJSU3cwUWtGQlR5eFBRVUZQTEVOQlFVTTdRVUZCUVN4alFVTjRRanRWUVVOS0xFTkJRVU1zUTBGQlF6dEJRVU5JTEdkQ1FVRlBMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlJ5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1RVRkROVU1zUTBGQlF6dEZRVU5NTzBGQlEwUXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEzSkNMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTTdSVUZETjBRN08zTkNRVVZqTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc2JVSkJRVzFDT3pzN096czdPMEZETlVKdVJDeGhRVUZaTEVOQlFVTTdPenM3T3p0eFFrRkZUaXhGUVVGbE96dEJRVVYwUWl4TFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVWQlFVVTdPenM3TzBGQlMzcENMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEhRVUZITEZWQlFWTXNWMEZCVnl4RlFVRkZPMEZCUXpORExHRkJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRiRVFzWVVGQlNTeFhRVUZYTEVWQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE4wTXNaMEpCUVU4c1RVRkJUU3hEUVVGRE8wMUJRMnBDTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxPenM3T3pzN08wRkRhRUp5UXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RlFVRkZPMEZCUXk5Q0xGZEJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmxCUVZjN1FVRkRkRU1zWjBKQlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhuUTBGQlowTXNSVUZCUlN4VlFVRkRMRVZCUVVVc1JVRkJTenRCUVVNeFJDeHhRa0ZCVVN4RlFVRkZPMEZCUTFZc2MwSkJRVXNzVFVGQlRUdEJRVUZGTERSQ1FVRlBMRWRCUVVjc1EwRkJRenRCUVVONFFpeHpRa0ZCU3l4TlFVRk5PMEZCUVVVc05FSkJRVThzUjBGQlJ5eERRVUZETzBGQlEzaENMSE5DUVVGTExFOUJRVTg3UVVGQlJTdzBRa0ZCVHl4SFFVRkhMRU5CUVVNN1FVRkRla0lzYzBKQlFVc3NUMEZCVHp0QlFVRkZMRFJDUVVGUExFZEJRVWNzUTBGQlF6dEJRVU42UWl4elFrRkJTeXhQUVVGUE8wRkJRVVVzTkVKQlFVOHNSMEZCUnl4RFFVRkRPMEZCUTNwQ08wRkJRVk1zTkVKQlFVOHNSVUZCUlN4RFFVRkRPMEZCUVVFc1kwRkRiRUk3VlVGRFNpeERRVUZETEVOQlFVTTdUVUZEVGp0RlFVTktPenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmRCUVZjN096czdPenM3UVVOcVFqTkRMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRVZCUVVVN1FVRkROMElzVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1ZVRkJVeXhIUVVGSExFVkJRVVU3UVVGRGRrTXNZVUZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1FVRkRlRU1zWVVGQlNTeEpRVUZKTEVkQlFVY3NSMEZCUnl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE1VSXNaMEpCUVU4c1EwRkJReXhEUVVGRE8wMUJRMW9zUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTTdPenM3T3pzN1FVTldla01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJUczdPenRCUVVrMVFpeFRRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhWUVVGVExFZEJRVWNzUlVGQlJUdEJRVUZGTEZsQlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVRkZMRU5CUVVNN1JVRkRhRVk3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVUczdPenM3T3p0QlExUjRReXhoUVVGWkxFTkJRVU03T3pzN096dHhRa0ZGVGl4RFFVRnZRanM3Y1VKQlEzQkNMRVZCUVdFN08wRkJSWEJDTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zUlVGQlJUczdPenM3T3p0QlFVODNRaXhYUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSMEZCUnl4VlFVRlRMRk5CUVZNc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN1FVRkRhRVVzWVVGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xHRkJRVWtzVDBGQlR5eEhRVUZITEZOQlFWWXNUMEZCVHp0dlFrRkJVeXhYUVVGVkxGRkJRVkVzUTBGQlF6dFZRVUZCTEVOQlFVTTdRVUZEZUVNc1lVRkJTU3hSUVVGUkxFZEJRVWNzVTBGQldDeFJRVUZSTzI5Q1FVRlRMRmRCUVZVc1VVRkJVU3hGUVVGRkxFTkJRVU03VlVGQlFTeERRVUZET3p0QlFVVXpReXhyUWtGQlV5eEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEU5QlFVOHNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZET3p0QlFVVnNSaXhoUVVGSkxFOUJRVThzVDBGQlR5eEZRVUZGTEV0QlFVc3NVVUZCVVN4RlFVRkZPMEZCUXk5Q0xHMUNRVUZOTEVsQlFVa3NVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1ZVRkRka1E3UVVGRFJDeHJRa0ZCVXl4SFFVRkhMRkZCUVZFc1JVRkJSU3hEUVVGRE96dEJRVVYyUWl4bFFVRk5MRWRCUVVjc1QwRkJUeXhQUVVGUExFVkJRVVVzUzBGQlN5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE96dEJRVVY2UkN4aFFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMEZCUTNaRExHRkJRVWtzUlVGQlJTeE5RVUZOTEVkQlFVY3NVMEZCVXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03TzBGQlJYWkRMR0ZCUVVrc1dVRkJXU3hIUVVGSExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1FVRkRMME1zWVVGQlNTeFpRVUZaTEVkQlFVY3NVMEZCVXl4RlFVRkZPMEZCUXpGQ0xHMUNRVUZOTEVsQlFVa3NWVUZCVlN4RFFVRkRMRFJEUVVFMFF5eERRVUZETEVOQlFVTTdWVUZEZEVVN1FVRkRSQ3hoUVVGSkxGbEJRVmtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZEVJc1lVRkJTU3hoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzUkNMR05CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEyeERMR2xDUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM1pDTEdsQ1FVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMEZCUXk5Q0xHbENRVUZKTEdGQlFXRXNSMEZCUnl4RFFVRkRMRWRCUVVjc1UwRkJVeXhIUVVGSExGbEJRVmtzUlVGQlJTeE5RVUZOTzBGQlEzaEVMREJDUVVGaExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEyNUNMSGxDUVVGWkxFbEJRVWtzUTBGQlF5eERRVUZETzFWQlEzSkNPMEZCUTBRc1owSkJRVThzV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXp0TlFVTm9ReXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV6czdPenM3T3p0QlF6bERla01zWVVGQldTeERRVUZET3pzN096czdjVUpCUlU0c1EwRkJiMEk3TzBGQlJUTkNMRXRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlRzN096czdRVUZMTjBJc1YwRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVkQlFVY3NWVUZCVXl4VFFVRlRMRVZCUVVVN096dEJRVU0zUXl4aFFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGFrSXNZVUZCU1N4UFFVRlBMRWRCUVVjc1UwRkJWaXhQUVVGUE8yOUNRVUZUTEZkQlFWVXNVVUZCVVN4RFFVRkRPMVZCUVVFc1EwRkJRenRCUVVONFF5eGhRVUZKTEZGQlFWRXNSMEZCUnl4VFFVRllMRkZCUVZFN2IwSkJRVk1zVjBGQlZTeFJRVUZSTEVWQlFVVXNRMEZCUXp0VlFVRkJMRU5CUVVNN08wRkJSVE5ETEd0Q1FVRlRMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1QwRkJUeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRiRVlzWVVGQlNTeFRRVUZUTEV0QlFVc3NTMEZCU3l4RlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6czdRVUZGTlVNc1lVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEyWXNZMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRGJFTXNhVUpCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRNMElzY1VKQlFWRXNTMEZCU3p0QlFVTmlMSE5DUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEZGQlFWRXNRMEZCUXp0QlFVTnFRaXd5UWtGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTmFMREpDUVVGTk8wRkJRMVlzYzBKQlFVc3NSVUZCUlN4UFFVRlBMRk5CUVZNc1MwRkJTeXhSUVVGUkxFbEJRVWtzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTnNSQ3d5UWtGQlRTeEpRVUZKTEZOQlFWTXNRMEZCUXp0QlFVTndRaXd5UWtGQlRUdEJRVU5XTEhOQ1FVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxGRkJRVkVzUTBGQlF6dEJRVU5xUWl3eVFrRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU5hTERKQ1FVRk5PMEZCUTFZc2MwSkJRVXNzUlVGQlJTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRPMEZCUTJwQ0xESkNRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTFvc01rSkJRVTA3UVVGRFZqdEJRVU5KTERKQ1FVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRVUVzWTBGRFpqdFZRVU5LTzBGQlEwUXNaMEpCUVU4c1RVRkJUU3hEUVVGRE8wMUJRMnBDTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRPenM3T3pzN08wRkRla042UXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RlFVRkZPenM3T3p0QlFVczFRaXhYUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNSMEZCUnl4VlFVRlRMRWRCUVVjc1JVRkJSVHRCUVVOMFF5eGhRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlF6bENMR2RDUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRE8wMUJRemxFTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJPenM3T3pzN08wRkRZbmhETEdGQlFWa3NRMEZCUXpzN096czdPM0ZDUVVWT0xFTkJRVzFDT3p0QlFVVXhRaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRNVUlzVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1dVRkJWenM3TzBGQlEycERMR2RDUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNkVUpCUVhWQ0xFVkJRVVVzVlVGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJTenRCUVVONlJDeHhRa0ZCVVN4RlFVRkZPMEZCUTFZc2MwSkJRVXNzU1VGQlNUdEJRVUZGTERSQ1FVRlBMRWRCUVVjc1EwRkJRenRCUVVOMFFpeHpRa0ZCU3l4SlFVRkpPMEZCUVVVc05FSkJRVThzUjBGQlJ5eERRVUZETzBGQlEzUkNMSE5DUVVGTExFbEJRVWs3UVVGQlJTdzBRa0ZCVHl4SFFVRkhMRU5CUVVNN1FVRkRkRUk3UVVGQlV5dzBRa0ZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4WFFVRlZMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFhRVUZWTEVOQlFVTXNRMEZCUXl4aFFVRlpMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGQlFTeGpRVU4wU0R0VlFVTktMRU5CUVVNc1EwRkJRenROUVVOT08wVkJRMG83TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRUczdPenM3T3p0QlEycENkRU1zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExHVkJRV1VzUlVGQlJUczdPenM3UVVGTGJrTXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhsUVVGbExFZEJRVWNzV1VGQlZ6dEJRVU14UXl4aFFVRkpMRXRCUVVzc1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0QlFVTjBReXhoUVVGSkxGTkJRVk1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYmtJc1lVRkJTU3hQUVVGUExHRkJRVU03UVVGRFdpeG5Ra0ZCVHl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0QlFVTXZRaXhwUWtGQlNTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM1pDTEdsQ1FVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTU3hGUVVGRk8wRkJRM0JFTERCQ1FVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMk5CUXpsQ08xVkJRMG83UVVGRFJDeG5Ra0ZCVHl4VFFVRlRMRU5CUVVNN1RVRkRjRUlzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEdWQlFXVTdPenM3T3pzN1FVTnlRaTlETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVTdPenM3TzBGQlN6TkNMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWTXNTVUZCU1N4RlFVRkZPMEZCUTNSRExHRkJRVWtzUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkRZaXh0UWtGQlRTeEpRVUZKTEZWQlFWVXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eERRVUZETzFWQlF6bERPMEZCUTBRc1lVRkJTU3hQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVWQlFVVXNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU03UVVGRGJrUXNZVUZCU1N4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMnBDTEdOQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3UVVGRGVFTXNiMEpCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdWVUZEZWtNN1FVRkRSQ3huUWtGQlR5eFBRVUZQTEVOQlFVTTdUVUZEYkVJc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVTg3T3pzN096czdRVU53UW5aRExHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhaUVVGWkxFVkJRVVU3T3pzN08wRkJTMmhETEZkQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hIUVVGSExGVkJRVk1zU1VGQlNTeEZRVUZGTzBGQlF6TkRMR0ZCUVVrc1JVRkJSU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEWWl4dFFrRkJUU3hKUVVGSkxGVkJRVlVzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8xVkJRemxETzBGQlEwUXNZVUZCU1N4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFVkJRVVVzU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNN1FVRkRia1FzWVVGQlNTeFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTJwQ0xHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVN1FVRkRlRU1zYjBKQlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRWUVVOMFJEdEJRVU5FTEdkQ1FVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dE5RVU0xUWl4RFFVRkRPMFZCUTB3N08zTkNRVVZqTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXVHM3T3pzN096dEJRM0JDTlVNc1lVRkJXU3hEUVVGRE96czdPenM3Y1VKQlJVNHNSVUZCVlRzN1FVRkZha0lzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRk96czdPenM3UVVGTk0wSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlV5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZPMEZCUTJ4RUxHRkJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NVVUZCVVN4RlFVRkZPMEZCUXpWQ0xHMUNRVUZOTEVsQlFVa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMVZCUTNCRU8wRkJRMFFzWVVGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRE8wRkJRemxDTEdGQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hOUVVGTkxFVkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1FVRkRiRVFzWjBKQlFVOHNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dE5RVU5zUlN4RFFVRkRPMFZCUTB3N1FVRkRSQ3hMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVN1FVRkRlRUlzVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTTdSVUZEY0VRN08zTkNRVVZqTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUenM3T3pzN096dEJRM1pDZGtNc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSVHM3T3pzN1FVRkxNVUlzVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJVeXhMUVVGTExFVkJRVVU3UVVGRGRFTXNZVUZCU1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU5tTEcxQ1FVRk5MRWxCUVVrc1ZVRkJWU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRU5CUVVNN1ZVRkRMME03UVVGRFJDeGhRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRhRUlzWTBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTTFRaXh0UWtGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRWUVVNM1FqdEJRVU5FTEdkQ1FVRlBMRTFCUVUwc1EwRkJRenROUVVOcVFpeERRVUZETzBWQlEwdzdPM05DUVVWakxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFRzN096czdPenRCUTI1Q2RFTXNZVUZCV1N4RFFVRkRPenM3T3pzN2NVSkJSVTRzUlVGQllUczdRVUZGY0VJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZPenM3T3p0QlFVdDZRaXhYUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRlRMRk5CUVZNc1JVRkJSVHRCUVVONlF5eG5Ra0ZCVHl4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenROUVVOMlJqdEZRVU5LT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVczdPenM3T3pzN1FVTmtja01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zUlVGQlJUdEJRVU0zUWl4WFFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zUjBGQlJ5eFpRVUZYTzBGQlEzQkRMR2RDUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RlFVRkZMRlZCUVVNc1JVRkJSU3hGUVVGTE8wRkJRM2hETEhGQ1FVRlJMRVZCUVVVN1FVRkRWaXh6UWtGQlN5eEhRVUZITzBGQlFVVXNORUpCUVU4c1RVRkJUU3hEUVVGRE8wRkJRM2hDTEhOQ1FVRkxMRWRCUVVjN1FVRkJSU3cwUWtGQlR5eE5RVUZOTEVOQlFVTTdRVUZEZUVJc2MwSkJRVXNzUjBGQlJ6dEJRVUZGTERSQ1FVRlBMRTlCUVU4c1EwRkJRenRCUVVONlFpeHpRa0ZCU3l4SFFVRkhPMEZCUVVVc05FSkJRVThzVDBGQlR5eERRVUZETzBGQlEzcENMSE5DUVVGTExFZEJRVWM3UVVGQlJTdzBRa0ZCVHl4UFFVRlBMRU5CUVVNN1FVRkRla0k3UVVGQlV5dzBRa0ZCVHl4RlFVRkZMRU5CUVVNN1FVRkJRU3hqUVVOc1FqdFZRVU5LTEVOQlFVTXNRMEZCUXp0TlFVTk9PMFZCUTBvN08zTkNRVVZqTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVenM3T3pzN096dEJRMnBDZWtNc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1JVRkJSVHM3T3pzN1FVRkxla0lzVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1ZVRkJVeXhYUVVGWExFVkJRVVU3UVVGRE0wTXNZVUZCU1N4UFFVRlBMRmRCUVZjc1MwRkJTeXhUUVVGVExFVkJRVVVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTjZSQ3hoUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8wRkJRMnhETEdsQ1FVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1FVRkRNMFlzYVVKQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0VlFVTTVSanRCUVVORUxHZENRVUZQTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRE8wMUJRek5DTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxPenM3T3pzN08wRkRha0p5UXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZPenM3T3p0QlFVdDZRaXhYUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRlRMRXRCUVVzc1JVRkJSVHRCUVVGRkxHZENRVUZQTEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dE5RVUZGTEVOQlFVTTdSVUZEYUVZN1FVRkRSQ3hMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkRja0lzVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTTdSVUZETDBNN08zTkNRVVZqTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTenM3T3pzN096dEJRMkp5UXl4aFFVRlpMRU5CUVVNN096czdPenR4UWtGRlRpeEZRVUZWT3p0QlFVVnFRaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVN096czdPenRCUVUwMVFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhWUVVGVExFMUJRVTBzUlVGQlJTeFJRVUZSTEVWQlFVVTdRVUZEYmtRc1lVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFJRVUZSTEVWQlFVVTdRVUZETlVJc2JVSkJRVTBzU1VGQlNTeFRRVUZUTEVOQlFVTXNUVUZCVFN4SFFVRkhMR3RDUVVGclFpeERRVUZETEVOQlFVTTdWVUZEY0VRN1FVRkRSQ3hoUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNN1FVRkRPVUlzWVVGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRTFCUVUwc1JVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0QlFVTnNSQ3huUWtGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wMUJRMnhGTEVOQlFVTTdSVUZEVER0QlFVTkVMRXRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlR0QlFVTjRRaXhYUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF6dEZRVU55UkRzN2MwSkJSV01zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJPenM3T3pzN08wRkRka0o0UXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNWVUZCVlN4RlFVRkZPenM3TzBGQlNUbENMRk5CUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWTXNSMEZCUnl4RlFVRkZPMEZCUVVVc1dVRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVGRkxFTkJRVU03UlVGRGJrWTdPM05DUVVWakxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNWVUZCVlRzN096czdPenRCUTFReFF5eGhRVUZaTEVOQlFVTTdPenM3TzBGQlJXSXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlF6TkNMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEhRVUZITEZsQlFWYzdRVUZEYkVNc1lVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNTMEZEWkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVNdlJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkZMRVZCUVVVN1FVRkRia1VzYjBKQlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VlFVTTFRanRCUVVORUxHZENRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenROUVVNeFFpeERRVUZETzBWQlEwdzdPM05DUVVWakxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHlJc0ltWnBiR1VpT2lKd2NtOTBieTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1Z4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlN4Y2JpQmNkRngwWEhScFpEb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRzloWkdWa09pQm1ZV3h6WlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c2IyRmtaV1FnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RBcE8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ2QyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ09HSmpPR1UxTnpjMk1tWmhPV1UzTW1ZNFlUbGNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbHRjRzl5ZENBbkxpOWhjbkpoZVhNdlkyOXVkR0ZwYm5NblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwyVjJaWEo1SjF4dWFXMXdiM0owSUNjdUwyRnljbUY1Y3k5bWFXeDBaWEluWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJacGNuTjBKMXh1YVcxd2IzSjBJQ2N1TDJGeWNtRjVjeTltYkdGMFRXRndKMXh1YVcxd2IzSjBJQ2N1TDJGeWNtRjVjeTluY205MWNFSjVKMXh1YVcxd2IzSjBJQ2N1TDJGeWNtRjVjeTluY205MWNHVmtKMXh1YVcxd2IzSjBJQ2N1TDJGeWNtRjVjeTluY205MWNHVmtVbWxuYUhRblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwybHVZMngxWkdVblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwybHVaR1Y0VDJZblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwybHpRWEp5WVhrblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwycHZhVzVRWVhSb2N5ZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZiR0Z6ZENkY2JtbHRjRzl5ZENBbkxpOWhjbkpoZVhNdmJXRndKMXh1YVcxd2IzSjBJQ2N1TDJGeWNtRjVjeTl0WVhnblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwyMXBiaWRjYm1sdGNHOXlkQ0FuTGk5aGNuSmhlWE12Y21GdVoyVW5YRzVwYlhCdmNuUWdKeTR2WVhKeVlYbHpMM0psWkhWalpTZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZjbVZ0YjNabEoxeHVhVzF3YjNKMElDY3VMMkZ5Y21GNWN5OXpiMjFsSjF4dVhHNXBiWEJ2Y25RZ0p5NHZjbVZuWlhod2N5OWxjMk5oY0dVblhHNWNibWx0Y0c5eWRDQW5MaTl6ZEhKcGJtZHpMMkZ1ZEZOMGVXeGxVR0YwYUZSdlVtVm5aWGduWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5aWNqSnViQ2RjYm1sdGNHOXlkQ0FuTGk5emRISnBibWR6TDJOdmJYQmhjbVZVYnlkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwyTnZiblJoYVc1ekoxeHVhVzF3YjNKMElDY3VMM04wY21sdVozTXZZM1YwYzNSeWFXNW5KMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012Wlc1a2MxZHBkR2duWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5bWIzSnRZWFFuWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5bWIzSnRZWFJXWVhKcFlXSnNaWE1uWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5blpYUk1aVzVuZEdnblhHNXBiWEJ2Y25RZ0p5NHZjM1J5YVc1bmN5OW5jbTkxY0dWa0oxeHVhVzF3YjNKMElDY3VMM04wY21sdVozTXZaM0p2ZFhCbFpGSnBaMmgwSjF4dWFXMXdiM0owSUNjdUwzTjBjbWx1WjNNdmJHVm1kRkJoWkNkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwyNXNNbUp5SjF4dWFXMXdiM0owSUNjdUwzTjBjbWx1WjNNdmNYVnZkR1VuWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5eVpXZGxlQ2RjYm1sdGNHOXlkQ0FuTGk5emRISnBibWR6TDNKbGNHVmhkQ2RjYm1sdGNHOXlkQ0FuTGk5emRISnBibWR6TDNKcFoyaDBVR0ZrSjF4dWFXMXdiM0owSUNjdUwzTjBjbWx1WjNNdmMzUmhjblJ6VjJsMGFDZGNibWx0Y0c5eWRDQW5MaTl6ZEhKcGJtZHpMM1Z1Y1hWdmRHVW5YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTk0Yld4RmMyTmhjR1VuWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5NGJXeFZibVZ6WTJGd1pTZGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDJsdVpHVjRMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwYlhCdmNuUWdKeTR2YVc1a1pYaFBaaWRjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXVZMjl1ZEdGcGJuTXBJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUdGY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNWpiMjUwWVdsdWN5QTlJR1oxYm1OMGFXOXVLR0VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVhVzVrWlhoUFppaGhLU0ErUFNBd08xeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRWEp5WVhrdWNISnZkRzkwZVhCbExtTnZiblJoYVc1ek8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMMk52Ym5SaGFXNXpMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1cGJtUmxlRTltS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhzcWZTQnBkR1Z0WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1cGJtUmxlRTltSUQwZ1puVnVZM1JwYjI0b2FYUmxiU2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBJR2x1SUhSb2FYTWdKaVlnZEdocGMxdHBYU0E5UFQwZ2FYUmxiU2tnY21WMGRYSnVJR2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXBibVJsZUU5bU8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMMmx1WkdWNFQyWXVhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWxtSUNnaFFYSnlZWGt1Y0hKdmRHOTBlWEJsTG1WMlpYSjVLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnRjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUZ0amIyNTBaWGgwWFZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5WEc0Z0lDQWdJQ292WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExtVjJaWEo1SUQwZ1puVnVZM1JwYjI0b1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdOaGJHeGlZV05yTG1OaGJHd29ZMjl1ZEdWNGRDQjhmQ0IwYUdsekxDQjBhR2x6VzJsZExDQnBMQ0IwYUdsektTa2djbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVsZG1WeWVUdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDJGeWNtRjVjeTlsZG1WeWVTNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElDY3VMMlpzWVhSTllYQW5YRzVjYm1sbUlDZ2hRWEp5WVhrdWNISnZkRzkwZVhCbExtWnBiSFJsY2lrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHTmhiR3hpWVdOclhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhzcWZTQmJZMjl1ZEdWNGRGMWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdEJjbkpoZVgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVabWxzZEdWeUlEMGdablZ1WTNScGIyNG9ZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVpteGhkRTFoY0Nnb1lTd2dhU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTmhiR3hpWVdOckxtTmhiR3dvWTI5dWRHVjRkQ0I4ZkNCMGFHbHpMQ0JoTENCcExDQjBhR2x6S1NrZ2NtVjBkWEp1SUdFN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVtYVd4MFpYSTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5aGNuSmhlWE12Wm1sc2RHVnlMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwYlhCdmNuUWdKeTR2YVhOQmNuSmhlU2RjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXVabXhoZEUxaGNDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR05oYkd4aVlXTnJYRzRnSUNBZ0lDb2dRSEJoY21GdElIc3FmU0JiWTI5dWRHVjRkRjFjYmlBZ0lDQWdLaUJBY21WMGRYSnVJRUZ5Y21GNVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbVpzWVhSTllYQWdQU0JtZFc1amRHbHZiaWhqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjbVZ6ZFd4MGN5QTlJRnRkTzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnlaWE4xYkhRZ1BTQmpZV3hzWW1GamF5NWpZV3hzS0dOdmJuUmxlSFFnZkh3Z2RHaHBjeXdnZEdocGMxdHBYU3dnYVN3Z2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvUVhKeVlYa3VhWE5CY25KaGVTaHlaWE4xYkhRcEtTQnlaWE4xYkhSekxuQjFjMmd1WVhCd2JIa29jbVZ6ZFd4MGN5d2djbVZ6ZFd4MEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWc2MyVWdhV1lnS0hKbGMzVnNkQ2tnY21WemRXeDBjeTV3ZFhOb0tISmxjM1ZzZENrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZEhNN1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVpteGhkRTFoY0R0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OW1iR0YwVFdGd0xtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVVGeWNtRjVMbWx6UVhKeVlYa3BJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUc5aWFseHVJQ0FnSUNBcUlFQnpkR0YwYVdOY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUZ5Y21GNUxtbHpRWEp5WVhrZ1BTQm1kVzVqZEdsdmJpaHZZbW9wSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaHZZbW9wSUQwOVBTQW5XMjlpYW1WamRDQkJjbkpoZVYwbk8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxtbHpRWEp5WVhrN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTloY25KaGVYTXZhWE5CY25KaGVTNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGQmNuSmhlUzV3Y205MGIzUjVjR1V1Wm1seWMzUXBJSHRjYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVptbHljM1FnUFNCbWRXNWpkR2x2YmlncElIc2djbVYwZFhKdUlIUm9hWE5iTUYwN0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVtYVhKemREdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDJGeWNtRjVjeTltYVhKemRDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGQmNuSmhlUzV3Y205MGIzUjVjR1V1WjNKdmRYQkNlU2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdOaGJHeGlZV05yWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNxZlNCYlkyOXVkR1Y0ZEYxY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0N2ZYMWNiaUFnSUNBZ0tpOWNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1WjNKdmRYQkNlU0E5SUdaMWJtTjBhVzl1S0dOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdZMkZzYkdKaFkyc2dJVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhqWVd4c1ltRmpheUFySUZ3aUlHbHpJRzV2ZENCaElHWjFibU4wYVc5dVhDSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUd4bGRDQnlaWE4xYkhRZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2RtRnNkV1VnUFNCMGFHbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUd0bGVTQTlJR05oYkd4aVlXTnJMbU5oYkd3b1kyOXVkR1Y0ZENCOGZDQjBhR2x6TENCMllXeDFaU3dnYVN3Z2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYTJWNUlDRTlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYTJWNUlHbHVJSEpsYzNWc2RDbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBXMnRsZVYwdWNIVnphQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaV3h6WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhSYmEyVjVYU0E5SUZ0MllXeDFaVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVaM0p2ZFhCQ2VUdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDJGeWNtRjVjeTluY205MWNFSjVMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1bmNtOTFjR1ZrS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUhOcGVtVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdEJjbkpoZVR4QmNuSmhlVDU5WEc0Z0lDQWdJQ292WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExtZHliM1Z3WldRZ1BTQm1kVzVqZEdsdmJpaHphWHBsS1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J5WlhOMWJIUnpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1c1pXNW5kR2c3SUdrZ0t6MGdjMmw2WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBjeTV3ZFhOb0tIUm9hWE11YzJ4cFkyVW9hU3dnYVNBcklITnBlbVVwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnpkV3gwY3p0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVozSnZkWEJsWkR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OW5jbTkxY0dWa0xtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVuY205MWNHVmtVbWxuYUhRcElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2MybDZaVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNVBFRnljbUY1UG4xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVaM0p2ZFhCbFpGSnBaMmgwSUQwZ1puVnVZM1JwYjI0b2MybDZaU2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjbVZ6ZFd4MGN5QTlJRnRkTzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdkR2hwY3k1c1pXNW5kR2c3SUdrZ1BpQXdPeUJwSUMwOUlITnBlbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RITXVjSFZ6YUNoMGFHbHpMbk5zYVdObEtFMWhkR2d1YldGNEtEQXNJR2tnTFNCemFYcGxLU3dnYVNrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWE4xYkhSekxuSmxkbVZ5YzJVb0tUdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVaM0p2ZFhCbFpGSnBaMmgwTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwyZHliM1Z3WldSU2FXZG9kQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVcxd2IzSjBJQ2N1TDJsdVpHVjRUMlluWEc1Y2JtbG1JQ2doUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbWx1WTJ4MVpHVXBJSHRjYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWFXNWpiSFZrWlNBOUlHWjFibU4wYVc5dUtHRXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHa2dQU0IwYUdsekxtbHVaR1Y0VDJZb1lTazdYRzRnSUNBZ0lDQWdJR2xtSUNocElENGdMVEVwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzJsZElEMGdZVHRjYmlBZ0lDQWdJQ0FnWld4elpWeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vS0dFcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1YVc1amJIVmtaVHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwyRnljbUY1Y3k5cGJtTnNkV1JsTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXFiMmx1VUdGMGFITXBJSHRjYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWFtOXBibEJoZEdoeklEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQndZWFJvSUQwZ0p5YzdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTmJhVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jR0YwYUM1c1pXNW5kR2dnUGlBd0lDWW1JSEJoZEdndVkyaGhja0YwS0hCaGRHZ3ViR1Z1WjNSb0lDMGdNU2tnSVQwOUlDY3ZKeWxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHRjBhQ0FyUFNBbkx5YzdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3WVhSb0lDczlJSFJvYVhOYmFWMHVkRzlUZEhKcGJtY29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjR0YwYUR0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWFtOXBibEJoZEdoek8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMMnB2YVc1UVlYUm9jeTVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWJHRnpkQ2tnZTF4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXNZWE4wSUQwZ1puVnVZM1JwYjI0b0tTQjdJSEpsZEhWeWJpQjBhR2x6VzNSb2FYTXViR1Z1WjNSb0lDMGdNVjA3SUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXNZWE4wTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwyeGhjM1F1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hRWEp5WVhrdWNISnZkRzkwZVhCbExtMWhjQ2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdOaGJHeGlZV05yWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNxZlNCYlkyOXVkR1Y0ZEYxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXViV0Z3SUQwZ1puVnVZM1JwYjI0b1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThQU0IwYUdsekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhRdWNIVnphQ2hqWVd4c1ltRmpheTVqWVd4c0tHTnZiblJsZUhRZ2ZId2dkR2hwY3l3Z2RHaHBjMXRwWFN3Z2FTd2dkR2hwY3lrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWJXRndPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDIxaGNDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElDY3VMM0psWkhWalpTZGNibHh1YVdZZ0tDRkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWJXRjRLU0I3WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExtMWhlQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV5WldSMVkyVW9LR0VzSUdJcElEMCtJQ2hoSUQ0Z1lpa2dQeUJoSURvZ1lpazdYRzRnSUNBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXViV0Y0TzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwyMWhlQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWNtVmtkV05sS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1kyRnNiR0poWTJ0Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZXlwOUlGdGpiMjUwWlhoMFhWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2V5cDlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG5KbFpIVmpaU0E5SUdaMWJtTjBhVzl1S0dOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doS0hSb2FYTXViR1Z1WjNSb0lENGdNQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWENKU1pXUjFZMlVnYjJZZ1pXMXdkSGtnWVhKeVlYa2dkMmwwYUNCdWJ5QnBibWwwYVdGc0lIWmhiSFZsWENJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNCMGFHbHpXekJkTzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNVHNnYVNBOFBTQjBhR2x6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnUFNCallXeHNZbUZqYXk1allXeHNLR052Ym5SbGVIUWdmSHdnZEdocGN5d2djbVZ6ZFd4MExDQjBhR2x6VzJsZExDQnBMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXlaV1IxWTJVN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTloY25KaGVYTXZjbVZrZFdObExtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBiWEJ2Y25RZ0p5NHZjbVZrZFdObEoxeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1dGFXNHBJSHRjYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWJXbHVJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsWkhWalpTZ29ZU3dnWWlrZ1BUNGdLR0VnUENCaUtTQS9JR0VnT2lCaUtUdGNiaUFnSUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXRhVzQ3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OWhjbkpoZVhNdmJXbHVMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lVRnljbUY1TG5KaGJtZGxLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjhjM1J5YVc1bmZTQm1jbTl0WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjhjM1J5YVc1bmZTQjBiMXh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnpkR1Z3WEc0Z0lDQWdJQ29nUUhOMFlYUnBZMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUVGeWNtRjVMbkpoYm1kbElEMGdablZ1WTNScGIyNG9abkp2YlN3Z2RHOHNJSE4wWlhBZ1BTQXhLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlZVzVuWlNBOUlGdGRPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FYTk9kVzFpWlhJZ1BTQjBlWEJsYjJZZ1puSnZiU0E5UFQwZ0oyNTFiV0psY2ljZ0ppWWdkSGx3Wlc5bUlIUnZJRDA5UFNBbmJuVnRZbVZ5Snp0Y2JpQWdJQ0FnSUNBZ2JHVjBJR0psWjJsdUlEMGdhWE5PZFcxaVpYSWdQeUJtY205dElEb2dabkp2YlM1MGIxTjBjbWx1WnlncExtTm9ZWEpEYjJSbFFYUW9NQ2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQmxibVFnUFNCcGMwNTFiV0psY2lBL0lIUnZJRG9nZEc4dWRHOVRkSEpwYm1jb0tTNWphR0Z5UTI5a1pVRjBLREFwTzF4dUlDQWdJQ0FnSUNCemRHVndJRDBnVFdGMGFDNWhZbk1vYzNSbGNDa2dmSHdnTVR0Y2JpQWdJQ0FnSUNBZ2FXWWdLR0psWjJsdUlENGdaVzVrS1NCemRHVndJRDBnTFhOMFpYQTdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNCaVpXZHBianNnYzNSbGNDQStJREFnUHlCcElEdzlJR1Z1WkNBNklHa2dQajBnWlc1a095QnBJQ3M5SUhOMFpYQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmhibWRsTG5CMWMyZ29hWE5PZFcxaVpYSWdQeUJwSURvZ1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTaHBLU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKaGJtZGxPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkpoYm1kbE8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMM0poYm1kbExtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV5WlcxdmRtVXBJSHRjYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWNtVnRiM1psSUQwZ1puVnVZM1JwYjI0b1lTa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ2RHaHBjeTVzWlc1bmRHZ2dMU0F4T3lCcElENDlJREE3SUMwdGFTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhOYmFWMGdQVDA5SUdFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5Od2JHbGpaU2hwTENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1Y21WdGIzWmxPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDNKbGJXOTJaUzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMyOXRaU2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdOaGJHeGlZV05yWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNxZlNCYlkyOXVkR1Y0ZEYxY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiMjFsSUQwZ1puVnVZM1JwYjI0b1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJqWVd4c1ltRmpheUFoUFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dOaGJHeGlZV05ySUNzZ1hDSWdhWE1nYm05MElHRWdablZ1WTNScGIyNWNJaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMkZzYkdKaFkyc3VZMkZzYkNoamIyNTBaWGgwSUh4OElIUm9hWE1zSUhSb2FYTmJhVjBzSUdrc0lIUm9hWE1wS1NCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRWEp5WVhrdWNISnZkRzkwZVhCbExuTnZiV1U3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OWhjbkpoZVhNdmMyOXRaUzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRlNaV2RGZUhBdVpYTmpZWEJsS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUhSbGVIUmNiaUFnSUNBZ0tpQkFjM1JoZEdsalhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1UzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRkpsWjBWNGNDNWxjMk5oY0dVZ1BTQm1kVzVqZEdsdmJpaDBaWGgwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMFpYaDBMbkpsY0d4aFkyVW9MMXN0VzF4Y1hYdDlLQ2txS3o4dUxGeGNYRnhlSkh3alhGeHpYUzluTENBblhGeGNYQ1FtSnlrN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVbVZuUlhod0xtVnpZMkZ3WlR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM0psWjJWNGNITXZaWE5qWVhCbExtcHpYRzRnS2lvdklpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdJRndpWkdWbVlYVnNkRndpT2lCeVpYRjFhWEpsS0Z3aVkyOXlaUzFxY3k5c2FXSnlZWEo1TDJadUwzSmxaMlY0Y0M5bGMyTmhjR1ZjSWlrc0lGOWZaWE5OYjJSMWJHVTZJSFJ5ZFdVZ2ZUdGNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOWlZV0psYkMxeWRXNTBhVzFsTDJOdmNtVXRhbk12Y21WblpYaHdMMlZ6WTJGd1pTNXFjMXh1SUNvcUlHMXZaSFZzWlNCcFpDQTlJREl5WEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSnlaWEYxYVhKbEtDY3VMaTh1TGk5dGIyUjFiR1Z6TDJWek55NXlaV2RsZUhBdVpYTmpZWEJsSnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHVMeTR1TDIxdlpIVnNaWE12SkM1amIzSmxKeWt1VW1WblJYaHdMbVZ6WTJGd1pUdGNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOWpiM0psTFdwekwyeHBZbkpoY25rdlptNHZjbVZuWlhod0wyVnpZMkZ3WlM1cWMxeHVJQ29xSUcxdlpIVnNaU0JwWkNBOUlESXpYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENJdkx5Qm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZZbVZ1YW1GdGFXNW5jaTlTWlhoRmVIQXVaWE5qWVhCbFhHNTJZWElnSkdWNGNHOXlkQ0E5SUhKbGNYVnBjbVVvSnk0dkpDNWxlSEJ2Y25RbktWeHVJQ0FzSUNSeVpTQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUx5UXVjbVZ3YkdGalpYSW5LU2d2VzF4Y1hGeGVKQ29yUHk0b0tYeGJYRnhkZTMxZEwyY3NJQ2RjWEZ4Y0pDWW5LVHRjYmx4dUpHVjRjRzl5ZENna1pYaHdiM0owTGxNc0lDZFNaV2RGZUhBbkxDQjdaWE5qWVhCbE9pQm1kVzVqZEdsdmJpQmxjMk5oY0dVb2FYUXBleUJ5WlhSMWNtNGdKSEpsS0dsMEtUc2dmWDBwTzF4dVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WlhNM0xuSmxaMlY0Y0M1bGMyTmhjR1V1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBeU5GeHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpZG1GeUlHZHNiMkpoYkNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2SkM1bmJHOWlZV3duS1Z4dUlDQXNJR052Y21VZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dkpDNWpiM0psSnlsY2JpQWdMQ0JqZEhnZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUx5UXVZM1I0SnlsY2JpQWdMQ0JRVWs5VVQxUlpVRVVnUFNBbmNISnZkRzkwZVhCbEp6dGNibHh1ZG1GeUlDUmxlSEJ2Y25RZ1BTQm1kVzVqZEdsdmJpaDBlWEJsTENCdVlXMWxMQ0J6YjNWeVkyVXBlMXh1SUNCMllYSWdTVk5mUms5U1EwVkVJRDBnZEhsd1pTQW1JQ1JsZUhCdmNuUXVSbHh1SUNBZ0lDd2dTVk5mUjB4UFFrRk1JRDBnZEhsd1pTQW1JQ1JsZUhCdmNuUXVSMXh1SUNBZ0lDd2dTVk5mVTFSQlZFbERJRDBnZEhsd1pTQW1JQ1JsZUhCdmNuUXVVMXh1SUNBZ0lDd2dTVk5mVUZKUFZFOGdJRDBnZEhsd1pTQW1JQ1JsZUhCdmNuUXVVRnh1SUNBZ0lDd2dTVk5mUWtsT1JDQWdJRDBnZEhsd1pTQW1JQ1JsZUhCdmNuUXVRbHh1SUNBZ0lDd2dTVk5mVjFKQlVDQWdJRDBnZEhsd1pTQW1JQ1JsZUhCdmNuUXVWMXh1SUNBZ0lDd2daWGh3YjNKMGN5QWdJRDBnU1ZOZlIweFBRa0ZNSUQ4Z1kyOXlaU0E2SUdOdmNtVmJibUZ0WlYwZ2ZId2dLR052Y21WYmJtRnRaVjBnUFNCN2ZTbGNiaUFnSUNBc0lIUmhjbWRsZENBZ0lDQTlJRWxUWDBkTVQwSkJUQ0EvSUdkc2IySmhiQ0E2SUVsVFgxTlVRVlJKUXlBL0lHZHNiMkpoYkZ0dVlXMWxYU0E2SUNobmJHOWlZV3hiYm1GdFpWMGdmSHdnZTMwcFcxQlNUMVJQVkZsUVJWMWNiaUFnSUNBc0lHdGxlU3dnYjNkdUxDQnZkWFE3WEc0Z0lHbG1LRWxUWDBkTVQwSkJUQ2x6YjNWeVkyVWdQU0J1WVcxbE8xeHVJQ0JtYjNJb2EyVjVJR2x1SUhOdmRYSmpaU2w3WEc0Z0lDQWdMeThnWTI5dWRHRnBibk1nYVc0Z2JtRjBhWFpsWEc0Z0lDQWdiM2R1SUQwZ0lVbFRYMFpQVWtORlJDQW1KaUIwWVhKblpYUWdKaVlnYTJWNUlHbHVJSFJoY21kbGREdGNiaUFnSUNCcFppaHZkMjRnSmlZZ2EyVjVJR2x1SUdWNGNHOXlkSE1wWTI5dWRHbHVkV1U3WEc0Z0lDQWdMeThnWlhod2IzSjBJRzVoZEdsMlpTQnZjaUJ3WVhOelpXUmNiaUFnSUNCdmRYUWdQU0J2ZDI0Z1B5QjBZWEpuWlhSYmEyVjVYU0E2SUhOdmRYSmpaVnRyWlhsZE8xeHVJQ0FnSUM4dklIQnlaWFpsYm5RZ1oyeHZZbUZzSUhCdmJHeDFkR2x2YmlCbWIzSWdibUZ0WlhOd1lXTmxjMXh1SUNBZ0lHVjRjRzl5ZEhOYmEyVjVYU0E5SUVsVFgwZE1UMEpCVENBbUppQjBlWEJsYjJZZ2RHRnlaMlYwVzJ0bGVWMGdJVDBnSjJaMWJtTjBhVzl1SnlBL0lITnZkWEpqWlZ0clpYbGRYRzRnSUNBZ0x5OGdZbWx1WkNCMGFXMWxjbk1nZEc4Z1oyeHZZbUZzSUdadmNpQmpZV3hzSUdaeWIyMGdaWGh3YjNKMElHTnZiblJsZUhSY2JpQWdJQ0E2SUVsVFgwSkpUa1FnSmlZZ2IzZHVJRDhnWTNSNEtHOTFkQ3dnWjJ4dlltRnNLVnh1SUNBZ0lDOHZJSGR5WVhBZ1oyeHZZbUZzSUdOdmJuTjBjblZqZEc5eWN5Qm1iM0lnY0hKbGRtVnVkQ0JqYUdGdVoyVWdkR2hsYlNCcGJpQnNhV0p5WVhKNVhHNGdJQ0FnT2lCSlUxOVhVa0ZRSUNZbUlIUmhjbWRsZEZ0clpYbGRJRDA5SUc5MWRDQS9JQ2htZFc1amRHbHZiaWhES1h0Y2JpQWdJQ0FnSUhaaGNpQkdJRDBnWm5WdVkzUnBiMjRvY0dGeVlXMHBlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3lCcGJuTjBZVzVqWlc5bUlFTWdQeUJ1WlhjZ1F5aHdZWEpoYlNrZ09pQkRLSEJoY21GdEtUdGNiaUFnSUNBZ0lIMDdYRzRnSUNBZ0lDQkdXMUJTVDFSUFZGbFFSVjBnUFNCRFcxQlNUMVJQVkZsUVJWMDdYRzRnSUNBZ0lDQnlaWFIxY200Z1JqdGNiaUFnSUNBdkx5QnRZV3RsSUhOMFlYUnBZeUIyWlhKemFXOXVjeUJtYjNJZ2NISnZkRzkwZVhCbElHMWxkR2h2WkhOY2JpQWdJQ0I5S1NodmRYUXBJRG9nU1ZOZlVGSlBWRThnSmlZZ2RIbHdaVzltSUc5MWRDQTlQU0FuWm5WdVkzUnBiMjRuSUQ4Z1kzUjRLRVoxYm1OMGFXOXVMbU5oYkd3c0lHOTFkQ2tnT2lCdmRYUTdYRzRnSUNBZ2FXWW9TVk5mVUZKUFZFOHBLR1Y0Y0c5eWRITmJVRkpQVkU5VVdWQkZYU0I4ZkNBb1pYaHdiM0owYzF0UVVrOVVUMVJaVUVWZElEMGdlMzBwS1Z0clpYbGRJRDBnYjNWME8xeHVJQ0I5WEc1OU8xeHVMeThnZEhsd1pTQmlhWFJ0WVhCY2JpUmxlSEJ2Y25RdVJpQTlJREU3SUNBdkx5Qm1iM0pqWldSY2JpUmxlSEJ2Y25RdVJ5QTlJREk3SUNBdkx5Qm5iRzlpWVd4Y2JpUmxlSEJ2Y25RdVV5QTlJRFE3SUNBdkx5QnpkR0YwYVdOY2JpUmxlSEJ2Y25RdVVDQTlJRGc3SUNBdkx5QndjbTkwYjF4dUpHVjRjRzl5ZEM1Q0lEMGdNVFk3SUM4dklHSnBibVJjYmlSbGVIQnZjblF1VnlBOUlETXlPeUF2THlCM2NtRndYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJQ1JsZUhCdmNuUTdYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdkpDNWxlSEJ2Y25RdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXlOVnh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aUx5OGdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMM3BzYjJseWIyTnJMMk52Y21VdGFuTXZhWE56ZFdWekx6ZzJJMmx6YzNWbFkyOXRiV1Z1ZEMweE1UVTNOVGt3TWpoY2JuWmhjaUJuYkc5aVlXd2dQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2QybHVaRzkzTGsxaGRHZ2dQVDBnVFdGMGFGeHVJQ0EvSUhkcGJtUnZkeUE2SUhSNWNHVnZaaUJ6Wld4bUlDRTlJQ2QxYm1SbFptbHVaV1FuSUNZbUlITmxiR1l1VFdGMGFDQTlQU0JOWVhSb0lEOGdjMlZzWmlBNklFWjFibU4wYVc5dUtDZHlaWFIxY200Z2RHaHBjeWNwS0NrN1hHNXBaaWgwZVhCbGIyWWdYMTluSUQwOUlDZHVkVzFpWlhJbktWOWZaeUE5SUdkc2IySmhiRHNnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTExYm1SbFpseHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6THlRdVoyeHZZbUZzTG1welhHNGdLaW9nYlc5a2RXeGxJR2xrSUQwZ01qWmNiaUFxS2lCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUZ4dUlDb3FMeUlzSW5aaGNpQmpiM0psSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN2RtVnljMmx2YmpvZ0p6RXVNaTQySjMwN1hHNXBaaWgwZVhCbGIyWWdYMTlsSUQwOUlDZHVkVzFpWlhJbktWOWZaU0E5SUdOdmNtVTdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ2JtOHRkVzVrWldaY2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeThrTG1OdmNtVXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F5TjF4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lMeThnYjNCMGFXOXVZV3dnTHlCemFXMXdiR1VnWTI5dWRHVjRkQ0JpYVc1a2FXNW5YRzUyWVhJZ1lVWjFibU4wYVc5dUlEMGdjbVZ4ZFdseVpTZ25MaThrTG1FdFpuVnVZM1JwYjI0bktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9abTRzSUhSb1lYUXNJR3hsYm1kMGFDbDdYRzRnSUdGR2RXNWpkR2x2YmlobWJpazdYRzRnSUdsbUtIUm9ZWFFnUFQwOUlIVnVaR1ZtYVc1bFpDbHlaWFIxY200Z1ptNDdYRzRnSUhOM2FYUmphQ2hzWlc1bmRHZ3BlMXh1SUNBZ0lHTmhjMlVnTVRvZ2NtVjBkWEp1SUdaMWJtTjBhVzl1S0dFcGUxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdadUxtTmhiR3dvZEdoaGRDd2dZU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQmpZWE5sSURJNklISmxkSFZ5YmlCbWRXNWpkR2x2YmloaExDQmlLWHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1iaTVqWVd4c0tIUm9ZWFFzSUdFc0lHSXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1kyRnpaU0F6T2lCeVpYUjFjbTRnWm5WdVkzUnBiMjRvWVN3Z1lpd2dZeWw3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTR1WTJGc2JDaDBhR0YwTENCaExDQmlMQ0JqS1R0Y2JpQWdJQ0I5TzF4dUlDQjlYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWd2S2lBdUxpNWhjbWR6SUNvdktYdGNiaUFnSUNCeVpYUjFjbTRnWm00dVlYQndiSGtvZEdoaGRDd2dZWEpuZFcxbGJuUnpLVHRjYmlBZ2ZUdGNibjA3WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZKQzVqZEhndWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXlPRnh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUdsbUtIUjVjR1Z2WmlCcGRDQWhQU0FuWm5WdVkzUnBiMjRuS1hSb2NtOTNJRlI1Y0dWRmNuSnZjaWhwZENBcklDY2dhWE1nYm05MElHRWdablZ1WTNScGIyNGhKeWs3WEc0Z0lISmxkSFZ5YmlCcGREdGNibjA3WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZKQzVoTFdaMWJtTjBhVzl1TG1welhHNGdLaW9nYlc5a2RXeGxJR2xrSUQwZ01qbGNiaUFxS2lCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUZ4dUlDb3FMeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvY21WblJYaHdMQ0J5WlhCc1lXTmxLWHRjYmlBZ2RtRnlJSEpsY0d4aFkyVnlJRDBnY21Wd2JHRmpaU0E5UFQwZ1QySnFaV04wS0hKbGNHeGhZMlVwSUQ4Z1puVnVZM1JwYjI0b2NHRnlkQ2w3WEc0Z0lDQWdjbVYwZFhKdUlISmxjR3hoWTJWYmNHRnlkRjA3WEc0Z0lIMGdPaUJ5WlhCc1lXTmxPMXh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0FnSUhKbGRIVnliaUJUZEhKcGJtY29hWFFwTG5KbGNHeGhZMlVvY21WblJYaHdMQ0J5WlhCc1lXTmxjaWs3WEc0Z0lIMDdYRzU5TzF4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMeVF1Y21Wd2JHRmpaWEl1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBek1GeHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVlXNTBVM1I1YkdWUVlYUm9WRzlTWldkbGVDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMUpsWjBWNGNIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1GdWRGTjBlV3hsVUdGMGFGUnZVbVZuWlhnZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YkdWdVozUm9JRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpaGNJbEJoZEdnZ2JYVnpkQ0J1YjNRZ1ltVWdaVzF3ZEhrdVhDSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUd4bGRDQndZWFJvSUQwZ2RHaHBjeTV5WlhCc1lXTmxLQzljWEM5N01peDlMMmNzSUNjdkp5a3VjbVZ3YkdGalpTZ3ZXeTFiWEZ4ZGUzMG9LU3N1TEZ4Y1hGeGVKSHdqWEZ4elhTOW5MQ0FuWEZ4Y1hDUW1KeWs3WEc0Z0lDQWdJQ0FnSUd4bGRDQndZWFIwWlhKdUlEMGdjR0YwYUM1eVpYQnNZV05sS0M4b0tGeGNMejljWENwY1hDb3BmQ2hjWEM4L1hGd3FLWHdvWEZ3L0tYd29YRnd2S1Nrdlp5d2dLQ1F3S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCemQybDBZMmdnS0NRd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2N2S2lvbk9pQnlaWFIxY200Z0p5Zy9PaTk3TVN4OUxpb3BQeWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNjcUtpYzZJSEpsZEhWeWJpQW5MaW9uTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbkx5b25PaUJ5WlhSMWNtNGdKeWcvT2k5N01TeDlXMTR2WFNvcFB5YzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2NxSnpvZ2NtVjBkWEp1SUNkYlhpOWRLaWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNjL0p6b2djbVYwZFhKdUlDZGJYaTlkSnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0p5OG5PaUJ5WlhSMWNtNGdKeTk3TVN4OUp6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnVW1WblJYaHdLQ2RlS0NjZ0t5QndZWFIwWlhKdUlDc2dKeWtrSnlrN1hHNGdJQ0FnZlR0Y2JuMWNibWxtSUNnaFUzUnlhVzVuTG5CeWIzUnZkSGx3WlM1aEtTQjdYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1aElEMGdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWhiblJUZEhsc1pWQmhkR2hVYjFKbFoyVjRPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1GdWRGTjBlV3hsVUdGMGFGUnZVbVZuWlhnN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTl6ZEhKcGJtZHpMMkZ1ZEZOMGVXeGxVR0YwYUZSdlVtVm5aWGd1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sdGNHOXlkQ0FuTGk5NGJXeFZibVZ6WTJGd1pTZGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExtSnlNbTVzS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0aWIyOXNaV0Z1ZlNCNGJXeFZibVZ6WTJGd1pWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxTjBjbWx1WjMxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbUp5TW01c0lEMGdablZ1WTNScGIyNG9lRzFzVlc1bGMyTmhjR1VwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJSFJvYVhNdWNtVndiR0ZqWlNndktEeGljajU4UEdKeVhGd3ZQaWt2Wnl3Z0oxeGNiaWNwTzF4dUlDQWdJQ0FnSUNCcFppQW9lRzFzVlc1bGMyTmhjR1VwSUhKbGRIVnliaUJ5WlhOMWJIUXVlRzFzVlc1bGMyTmhjR1VvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1KeU1tNXNPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5aWNqSnViQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExuaHRiRlZ1WlhOallYQmxLU0I3WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNTRiV3hWYm1WelkyRndaU0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV5WlhCc1lXTmxLQzhvSm14ME8zd21aM1E3ZkNZak16UTdmQ1lqTXprN2ZDWmhiWEE3S1M5bkxDQW9KREVwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ0FvSkRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKeVpzZERzbk9pQnlaWFIxY200Z0p6d25PMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuSm1kME95YzZJSEpsZEhWeWJpQW5QaWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNjbUl6TTBPeWM2SUhKbGRIVnliaUFuWENJbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5KaU16T1Rzbk9pQnlaWFIxY200Z1hDSW5YQ0k3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNjbVlXMXdPeWM2SUhKbGRIVnliaUFuSmljN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBPaUJ5WlhSMWNtNGdKREU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1NGJXeFZibVZ6WTJGd1pUdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDNOMGNtbHVaM012ZUcxc1ZXNWxjMk5oY0dVdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVqYjIxd1lYSmxWRzhwSUh0Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbU52YlhCaGNtVlVieUE5SUdaMWJtTjBhVzl1S0hOMGNpa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2MzUnlJRDA5SUc1MWJHd2dmSHdnZEdocGN5QStJSE4wY2lrZ2NtVjBkWEp1SURFN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdseklEd2djM1J5S1NCeVpYUjFjbTRnTFRFN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVZMjl0Y0dGeVpWUnZPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5amIyMXdZWEpsVkc4dWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVqYjI1MFlXbHVjeWtnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0J6ZEhKY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbU52Ym5SaGFXNXpJRDBnWm5WdVkzUnBiMjRvYzNSeUtTQjdJSEpsZEhWeWJpQjBhR2x6TG1sdVpHVjRUMllvYzNSeUtTQStJQzB4T3lCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbU52Ym5SaGFXNXpPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5amIyNTBZV2x1Y3k1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXMXdiM0owSUNjdUxpOWhjbkpoZVhNdlkyOXVkR0ZwYm5NblhHNXBiWEJ2Y25RZ0p5NHZaMlYwVEdWdVozUm9KMXh1WEc1cFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVZM1YwYzNSeWFXNW5LU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRpYjI5c1pXRnVmRzUxYldKbGNuMGdXMk5vWldOcllubDBaVjBnWTJobFkyc2dZbmwwWlNCc1pXNW5kR2dnYVdZZ2RISjFaUzRnS0dSbFptRjFiSFFnYVhNZ1ptRnNjMlVwWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzFoZUV4bGJtZDBhQ0IwYUdVZ2JXRjRJR3hsYm1kMGFDNWNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ1czTjFabVpwZUYwZ2RHaGxJSE4xWm1acGVDNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHpkSEpwYm1kOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVqZFhSemRISnBibWNnUFNCbWRXNWpkR2x2YmloamFHVmphMko1ZEdVc0lHMWhlRXhsYm1kMGFDd2djM1ZtWm1sNEtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCaGNtZEpibVJsZUNBOUlEQTdYRzRnSUNBZ0lDQWdJR3hsZENCaGNtZERkWEp5SUQwZ0tDa2dQVDRnWVhKbmRXMWxiblJ6VzJGeVowbHVaR1Y0WFR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR0Z5WjFOb2FXWjBJRDBnS0NrZ1BUNGdZWEpuZFcxbGJuUnpXMkZ5WjBsdVpHVjRLeXRkTzF4dVhHNGdJQ0FnSUNBZ0lHTm9aV05yWW5sMFpTQTlJRnNuWW05dmJHVmhiaWNzSUNkdWRXMWlaWEluWFM1amIyNTBZV2x1Y3loMGVYQmxiMllnWVhKblEzVnljaWdwS1NBL0lHRnlaMU5vYVdaMEtDa2dPaUJtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdGeVowTjFjbklvS1NBaFBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9ZWEpuUTNWeWNpZ3BJQ3NnWENJZ2FYTWdibTkwSUdFZ2JuVnRZbVZ5WENJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJRzFoZUV4bGJtZDBhQ0E5SUdGeVoxTm9hV1owS0NrN1hHNWNiaUFnSUNBZ0lDQWdjM1ZtWm1sNElEMGdkSGx3Wlc5bUlHRnlaME4xY25Jb0tTQTlQVDBnSjNOMGNtbHVaeWNnUHlCaGNtZFRhR2xtZENncElEb2dKeWM3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR3hsYm1kMGFDQTlJSFJvYVhNdVoyVjBUR1Z1WjNSb0tHTm9aV05yWW5sMFpTazdYRzRnSUNBZ0lDQWdJR2xtSUNnaEtHeGxibWQwYUNBK0lHMWhlRXhsYm1kMGFDa3BJSEpsZEhWeWJpQjBhR2x6TzF4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0J6ZFdabWFYaE1aVzVuZEdnZ1BTQnpkV1ptYVhndVoyVjBUR1Z1WjNSb0tHTm9aV05yWW5sMFpTazdYRzRnSUNBZ0lDQWdJR2xtSUNoemRXWm1hWGhNWlc1bmRHZ2dQaUJ0WVhoTVpXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0Z3aVRXRjRJR3hsYm1kMGFDQnRkWE4wSUdKbElHMXZjbVVnZEdoaGJpQnpkV1ptYVhnZ2JHVnVaM1JvWENJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFJUZEhKcGJtY2dQU0FuSnp0Y2JpQWdJQ0FnSUNBZ2JHVjBJR05vWldOclpXUk1aVzVuZEdnZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCaklEMGdkR2hwY3k1amFHRnlRWFFvYVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JDQTlJR011WjJWMFRHVnVaM1JvS0dOb1pXTnJZbmwwWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyaGxZMnRsWkV4bGJtZDBhQ0FySUd3Z1BpQnRZWGhNWlc1bmRHZ2dMU0J6ZFdabWFYaE1aVzVuZEdncElHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMmhsWTJ0bFpFeGxibWQwYUNBclBTQnNPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnpkV3gwVTNSeWFXNW5JQ3M5SUdNN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZEZOMGNtbHVaeUFySUhOMVptWnBlRHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1OMWRITjBjbWx1Wnp0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZZM1YwYzNSeWFXNW5MbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwYlhCdmNuUWdKeTR1TDJGeWNtRjVjeTlqYjI1MFlXbHVjeWRjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbWRsZEV4bGJtZDBhQ2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3WW05dmJHVmhibnh1ZFcxaVpYSjlJRnRqYUdWamEySjVkR1ZkSUdOb1pXTnJJR0o1ZEdVZ2JHVnVaM1JvSUdsbUlIUnlkV1V1SUNoa1pXWmhkV3gwSUdseklHWmhiSE5sS1Z4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtZGxkRXhsYm1kMGFDQTlJR1oxYm1OMGFXOXVLR05vWldOcllubDBaU2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdZWEpuU1c1a1pYZ2dQU0F3TzF4dUlDQWdJQ0FnSUNCc1pYUWdZWEpuUTNWeWNpQTlJQ2dwSUQwK0lHRnlaM1Z0Wlc1MGMxdGhjbWRKYm1SbGVGMDdYRzRnSUNBZ0lDQWdJR3hsZENCaGNtZFRhR2xtZENBOUlDZ3BJRDArSUdGeVozVnRaVzUwYzF0aGNtZEpibVJsZUNzclhUdGNibHh1SUNBZ0lDQWdJQ0JqYUdWamEySjVkR1VnUFNCYkoySnZiMnhsWVc0bkxDQW5iblZ0WW1WeUoxMHVZMjl1ZEdGcGJuTW9kSGx3Wlc5bUlHRnlaME4xY25Jb0tTa2dQeUJoY21kVGFHbG1kQ2dwSURvZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUdsbUlDaGphR1ZqYTJKNWRHVWdQVDA5SUdaaGJITmxLU0J5WlhSMWNtNGdkR2hwY3k1c1pXNW5kR2c3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR3hsYm1kMGFDQTlJREE3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHTWdQU0IwYUdsekxtTm9ZWEpEYjJSbFFYUW9hU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tHWmhiSE5sS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDRW9ZeUE4UFNBd2VEQXdNREEzUmlrNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVnVaM1JvSUNzOUlERTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDRW9kSGx3Wlc5bUlHTm9aV05yWW5sMFpTQTlQVDBnSjI1MWJXSmxjaWNnSmlZZ1kyaGxZMnRpZVhSbElENGdNQ2s2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWdVozUm9JQ3M5SUdOb1pXTnJZbmwwWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSVNoaklEdzlJREI0TURBd04wWkdLVHBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlc1bmRHZ2dLejBnTWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSVNoaklEdzlJREI0TURCR1JrWkdLVHBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlc1bmRHZ2dLejBnTXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVnVaM1JvSUNzOUlEUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHeGxibWQwYUR0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtZGxkRXhsYm1kMGFEdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDNOMGNtbHVaM012WjJWMFRHVnVaM1JvTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVaVzVrYzFkcGRHZ3BJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdjM1J5WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5WEc0Z0lDQWdJQ292WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWxibVJ6VjJsMGFDQTlJR1oxYm1OMGFXOXVLSE4wY2lrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYVNBOUlIUm9hWE11YkdGemRFbHVaR1Y0VDJZb2MzUnlLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2tnUGlBdE1TQW1KaUJwSUQwOVBTQjBhR2x6TG14bGJtZDBhQ0F0SUhOMGNpNTBiMU4wY21sdVp5Z3BMbXhsYm1kMGFEdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbVZ1WkhOWGFYUm9PMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5bGJtUnpWMmwwYUM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXMXdiM0owSUNjdUxpOWhjbkpoZVhNdmFYTkJjbkpoZVNkY2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1admNtMWhkQ2tnZTF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVabTl5YldGMElEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxjR3hoWTJVb0x5Z25KM3duWEZ4N2ZIMG5mRnhjZXloY1hIY3JLWDBwTDJjc0lDZ2tNQ3dnSkRFc0lDUXlLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLQ1F4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElGd2lKeWRjSWpvZ2NtVjBkWEp1SUZ3aUoxd2lPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0JjSWlkN1hDSTZJSEpsZEhWeWJpQW5leWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUZ3aWZTZGNJam9nY21WMGRYSnVJQ2Q5Snp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZJSEpsZEhWeWJpQW9JUzllWEZ4a0t5UXZaeTUwWlhOMEtDUXlLU0EvSUdGeVozVnRaVzUwYzFzd1hTQjhmQ0I3ZlNBNklFRnljbUY1TG1selFYSnlZWGtvWVhKbmRXMWxiblJ6V3pCZEtTQS9JR0Z5WjNWdFpXNTBjMXN3WFNBNklHRnlaM1Z0Wlc1MGN5bGJKREpkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVptOXliV0YwTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZjM1J5YVc1bmN5OW1iM0p0WVhRdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVtYjNKdFlYUldZWEpwWVdKc1pYTXBJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUdGeVozVnRaVzUwYzF4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0QmNuSmhlVHh6ZEhKcGJtYytmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVptOXliV0YwVm1GeWFXRmliR1Z6SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJR3hsZENCeVpXZGxlQ0E5SUM4b0p5ZDhKMXhjZTN4Y1hIMG5mRnhjZXloY1hIY3JLVnhjZlNrdlp6dGNiaUFnSUNBZ0lDQWdiR1YwSUhaaGNtbGhZbXhsY3lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JXRjBZMmhsY3p0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0cxaGRHTm9aWE1nUFNCeVpXZGxlQzVsZUdWaktIUm9hWE1wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JXRjBZMmdnUFNCdFlYUmphR1Z6V3pCZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHMWhkR05vSUNFOVBTQmNJaWNuWENJZ0ppWWdiV0YwWTJnZ0lUMDlJRndpSjN0Y0lpQW1KaUJ0WVhSamFDQWhQVDBnWENKOUoxd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeWFXRmliR1Z6TG5CMWMyZ29iV0YwWTJobGMxc3lYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFpoY21saFlteGxjenRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1admNtMWhkRlpoY21saFlteGxjenRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwzTjBjbWx1WjNNdlptOXliV0YwVm1GeWFXRmliR1Z6TG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVaM0p2ZFhCbFpDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnphWHBsWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3UVhKeVlYazhjM1J5YVc1blBuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1keWIzVndaV1FnUFNCbWRXNWpkR2x2YmloemFYcGxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hLSE5wZW1VZ1BpQXhLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRkpoYm1kbFJYSnliM0lvSjBsdWRtRnNhV1FnYzJsNlpTQjJZV3gxWlNjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnYzJsNlpTQWhQVDBnSjI1MWJXSmxjaWNwSUhOcGVtVWdQU0J3WVhKelpVbHVkQ2h6YVhwbEtWeHVJQ0FnSUNBZ0lDQnNaWFFnY21WemRXeDBjeUE5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJHVnVaM1JvT3lCcElDczlJSE5wZW1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkSE11Y0hWemFDaDBhR2x6TG5Oc2FXTmxLR2tzSUdrZ0t5QnphWHBsS1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZEhNN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNW5jbTkxY0dWa08xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTluY205MWNHVmtMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVozSnZkWEJsWkZKcFoyaDBLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSE5wZW1WY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0QmNuSmhlVHh6ZEhKcGJtYytmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVozSnZkWEJsWkZKcFoyaDBJRDBnWm5WdVkzUnBiMjRvYzJsNlpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lTaHphWHBsSUQ0Z01Ta3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RKYm5aaGJHbGtJSE5wZW1VZ2RtRnNkV1VuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JSE5wZW1VZ0lUMDlJQ2R1ZFcxaVpYSW5LU0J6YVhwbElEMGdjR0Z5YzJWSmJuUW9jMmw2WlNsY2JpQWdJQ0FnSUNBZ2JHVjBJSEpsYzNWc2RITWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJSFJvYVhNdWJHVnVaM1JvT3lCcElENGdNRHNnYVNBdFBTQnphWHBsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUnpMbkIxYzJnb2RHaHBjeTV6YkdsalpTaE5ZWFJvTG0xaGVDZ3dMQ0JwSUMwZ2MybDZaU2tzSUdrcEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4MGN5NXlaWFpsY25ObEtDazdYRzRnSUNBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVuY205MWNHVmtVbWxuYUhRN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTl6ZEhKcGJtZHpMMmR5YjNWd1pXUlNhV2RvZEM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXMXdiM0owSUNjdUwzSmxjR1ZoZENkY2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG14bFpuUlFZV1FwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYkdWdVozUm9YRzRnSUNBZ0lDb2dRSEJoY21GdElIdHpkSEpwYm1kOUlHWnBiR3hEYUdGeVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UzTjBjbWx1WjMxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbXhsWm5SUVlXUWdQU0JtZFc1amRHbHZiaWhzWlc1bmRHZ3NJR1pwYkd4RGFHRnlLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2JHVnVaM1JvSUNFOVBTQW5iblZ0WW1WeUp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaHNaVzVuZEdnZ0t5QW5JR2x6SUc1dmRDQmhJRzUxYldKbGNpY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2habWxzYkVOb1lYSXBJR1pwYkd4RGFHRnlJRDBnSnlBbk8xeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXNaVzVuZEdnZ1BqMGdiR1Z1WjNSb0tTQnlaWFIxY200Z2RHaHBjeTUwYjFOMGNtbHVaeWdwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1sc2JFTm9ZWEl1Y21Wd1pXRjBLR3hsYm1kMGFDQXRJSFJvYVhNdWJHVnVaM1JvS1NBcklIUm9hWE11ZEc5VGRISnBibWNvS1R0Y2JpQWdJQ0I5TzF4dWZWeHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG14d1lXUXBJSHRjYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExteHdZV1FnUFNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG14bFpuUlFZV1E3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWJHVm1kRkJoWkR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZiR1ZtZEZCaFpDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5KbGNHVmhkQ2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JqYjNWdWRGeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzTjBjbWx1WjMxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkpsY0dWaGRDQTlJR1oxYm1OMGFXOXVLR052ZFc1MEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaEtHTnZkVzUwSUQ0OUlEQXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduU1c1MllXeHBaQ0JqYjNWdWRDQjJZV3gxWlNjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNBbkp6dGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JqYjNWdWREc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUWdLejBnZEdocGN5NTBiMU4wY21sdVp5Z3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzRnSUNBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV5WlhCbFlYUTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDNKbGNHVmhkQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVcxd2IzSjBJQ2N1TDNodGJFVnpZMkZ3WlNkY2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG01c01tSnlLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRpYjI5c1pXRnVmU0I0Yld4RmMyTmhjR1ZjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3YzNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWJtd3lZbklnUFNCbWRXNWpkR2x2YmloNGJXeEZjMk5oY0dVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaDRiV3hGYzJOaGNHVWdQeUIwYUdsekxuaHRiRVZ6WTJGd1pTZ3BJRG9nZEdocGN5a3VjbVZ3YkdGalpTZ3ZLRnhjY2x4Y2JueGNYRzVjWEhKOFhGeHlmRnhjYmlrdlp5d2dKenhpY2k4K0p5azdYRzRnSUNBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbTVzTW1KeU8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTl1YkRKaWNpNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5odGJFVnpZMkZ3WlNrZ2UxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1ZUcxc1JYTmpZWEJsSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbGNHeGhZMlVvTHlnOGZENThYQ0o4SjN3bUtTOW5MQ0FvSkRFcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjNhWFJqYUNBb0pERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSnp3bk9pQnlaWFIxY200Z0p5WnNkRHNuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBblBpYzZJSEpsZEhWeWJpQW5KbWQwT3ljN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDZGNJaWM2SUhKbGRIVnliaUFuSmlNek5Ec25PMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0JjSWlkY0lqb2djbVYwZFhKdUlDY21Jek01T3ljN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDY21Kem9nY21WMGRYSnVJQ2NtWVcxd095YzdYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXWmhkV3gwT2lCeVpYUjFjbTRnSkRFN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNTRiV3hGYzJOaGNHVTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDNodGJFVnpZMkZ3WlM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkYxYjNSbEtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdGliMjlzWldGdWZTQnZkbVZ5YkdGd1lXSnNaVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMWNiaUFnSUNBZ0tpOWNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5GMWIzUmxJRDBnWm5WdVkzUnBiMjRvYjNabGNteGhjR0ZpYkdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ2ZG1WeWJHRndZV0pzWlNBaFBUMGdKMkp2YjJ4bFlXNG5LU0J2ZG1WeWJHRndZV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hiM1psY214aGNHRmliR1VnSmlZZ2RHaHBjeTVzWlc1bmRHZ2dQajBnTWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WTJoaGNrRjBLREFwSUQwOVBTQW5YQ0luSUNZbUlIUm9hWE11WTJoaGNrRjBLSFJvYVhNdWJHVnVaM1JvSUMwZ01Ta2dQVDA5SUNkY0lpY3BJSEpsZEhWeWJpQjBhR2x6TG5SdlUzUnlhVzVuS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVqYUdGeVFYUW9NQ2tnUFQwOUlGd2lKMXdpSUNZbUlIUm9hWE11WTJoaGNrRjBLSFJvYVhNdWJHVnVaM1JvSUMwZ01Ta2dQVDA5SUZ3aUoxd2lLU0J5WlhSMWNtNGdkR2hwY3k1MGIxTjBjbWx1WnlncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5YQ0luSUNzZ2RHaHBjeUFySUNkY0lpYzdYRzRnSUNBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV4ZFc5MFpUdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDNOMGNtbHVaM012Y1hWdmRHVXVhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWxtSUNnaFUzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eVpXZGxlQ2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0JtYkdGbmMxeHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdFNaV2RGZUhCOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV5WldkbGVDQTlJR1oxYm1OMGFXOXVLR1pzWVdkektTQjdJSEpsZEhWeWJpQnVaWGNnVW1WblJYaHdLSFJvYVhNc0lHWnNZV2R6S1RzZ2ZUdGNibjFjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXlLU0I3WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXlJRDBnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV5WldkbGVEdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV5WldkbGVEdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDNOMGNtbHVaM012Y21WblpYZ3Vhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWx0Y0c5eWRDQW5MaTl5WlhCbFlYUW5YRzVjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXlhV2RvZEZCaFpDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnNaVzVuZEdoY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnWm1sc2JFTm9ZWEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3YzNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWNtbG5hSFJRWVdRZ1BTQm1kVzVqZEdsdmJpaHNaVzVuZEdnc0lHWnBiR3hEYUdGeUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnYkdWdVozUm9JQ0U5UFNBbmJuVnRZbVZ5SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loc1pXNW5kR2dnS3lBbklHbHpJRzV2ZENCaElHNTFiV0psY2ljcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR2xtSUNnaFptbHNiRU5vWVhJcElHWnBiR3hEYUdGeUlEMGdKeUFuTzF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1c1pXNW5kR2dnUGowZ2JHVnVaM1JvS1NCeVpYUjFjbTRnZEdocGN5NTBiMU4wY21sdVp5Z3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1MGIxTjBjbWx1WnlncElDc2dabWxzYkVOb1lYSXVjbVZ3WldGMEtHeGxibWQwYUNBdElIUm9hWE11YkdWdVozUm9LVHRjYmlBZ0lDQjlPMXh1ZlZ4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkp3WVdRcElIdGNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5Kd1lXUWdQU0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkpwWjJoMFVHRmtPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5KcFoyaDBVR0ZrTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZjM1J5YVc1bmN5OXlhV2RvZEZCaFpDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5OMFlYSjBjMWRwZEdncElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2MzUnlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1emRHRnlkSE5YYVhSb0lEMGdablZ1WTNScGIyNG9jM1J5S1NCN0lISmxkSFZ5YmlCMGFHbHpMbWx1WkdWNFQyWW9jM1J5S1NBOVBUMGdNRHNnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXpkR0Z5ZEhOWGFYUm9PMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5emRHRnlkSE5YYVhSb0xtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1ZFc1eGRXOTBaU2tnZTF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVkVzV4ZFc5MFpTQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1c1pXNW5kR2dnUGowZ01pQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0tDaDBhR2x6TG1Ob1lYSkJkQ2d3S1NBOVBUMGdKMXdpSnlBbUppQjBhR2x6TG1Ob1lYSkJkQ2gwYUdsekxteGxibWQwYUNBdElERXBJRDA5UFNBblhDSW5LU0I4ZkZ4dUlDQWdJQ0FnSUNBZ0lDQWdLSFJvYVhNdVkyaGhja0YwS0RBcElEMDlQU0JjSWlkY0lpQW1KaUIwYUdsekxtTm9ZWEpCZENoMGFHbHpMbXhsYm1kMGFDQXRJREVwSUQwOVBTQmNJaWRjSWlrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpiR2xqWlNneExDQXRNU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVkRzlUZEhKcGJtY29LVHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5WdWNYVnZkR1U3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OXpkSEpwYm1kekwzVnVjWFZ2ZEdVdWFuTmNiaUFxS2k4aVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb3RvLmpzL2Rpc3QvcHJvdG8uanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghZ2xvYmFsLmRvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5LmV4dGVuZHMgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvd2luZG93LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG4kLmZuLmdyb3VwQnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzW2ldO1xuICAgICAgICBsZXQga2V5ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IGVsZW0sIGVsZW0sIGksIHRoaXMpO1xuICAgICAgICBpZiAoa2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gcmVzdWx0KVxuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2goZWxlbSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSAkKGVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLmdyb3VwQnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncm91cEJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PEhUTUxFbGVtZW50PnxqUXVlcnk8SFRNTEVsZW1lbnQ+fSBleGNsdWRlc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG4kLmZuLm1heFpJbmRleCA9IGZ1bmN0aW9uKGV4Y2x1ZGVzKSB7XG4gICAgbGV0IHpJbmRleCA9IDA7XG4gICAgdGhpcy5maW5kKCc6dmlzaWJsZScpLmFuZFNlbGYoKS5hZGQodGhpcy5wYXJlbnRzVW50aWwoJ2h0bWwnKSkubm90KGV4Y2x1ZGVzKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlTmFtZSAhPT0gJyNkb2N1bWVudCcpIHtcbiAgICAgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoWydhYnNvbHV0ZScsICdyZWxhdGl2ZScsICdmaXhlZCddLmNvbnRhaW5zKCR0aGlzLmNzcygncG9zaXRpb24nKSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludCgkdGhpcy5jc3MoJ3pJbmRleCcpKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSAmJiB2YWx1ZSA+IHpJbmRleCkgekluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gekluZGV4O1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gTWF4IHpJbmRleCBmcm9tIGRvY3VtZW50IGJvZHkuXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxIVE1MRWxlbWVudD58alF1ZXJ5PEhUTUxFbGVtZW50Pn0gZXhjbHVkZXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5tYXhaSW5kZXggPSBmdW5jdGlvbihleGNsdWRlcykge1xuICAgIHJldHVybiAkKGRvY3VtZW50LmJvZHkpLm1heFpJbmRleChleGNsdWRlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLm1heFpJbmRleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21heFpJbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHdpbmRvdyBmcm9tICcuL3dpbmRvdydcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2RvY3VtZW50LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbiQubmV4dFRpY2sgPSBmdW5jdGlvbihjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMCk7IH07XG5cbmV4cG9ydCBkZWZhdWx0ICQubmV4dFRpY2s7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9uZXh0VGljay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcbmltcG9ydCAnLi9zcGxpdCdcblxuJC5vYmogPSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV1cbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24ob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIGlmICgha2V5KSByZXR1cm4gb2JqO1xuICAgICAgICBsZXQga2V5RnJhZ21lbnRzID0gJC5zcGxpdChrZXksICcuJywgJy8nKTtcbiAgICAgICAgZm9yIChsZXQga2V5RnJhZ21lbnQgb2Yga2V5RnJhZ21lbnRzKSB7XG4gICAgICAgICAgICBpZiAoKG9iaiA9IG9ialtrZXlGcmFnbWVudF0pID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQuaXNBcnJheShkZWZhdWx0VmFsdWUpICYmICEkLmlzQXJyYXkob2JqKSlcbiAgICAgICAgICAgIG9iaiA9ICQubWFrZUFycmF5KG9iaik7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXBwZW5kQXJyYXldXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmdWxsa2V5XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKGFwcGVuZEFycmF5LCBvYmosIGZ1bGxrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgYXBwZW5kQXJyYXkgPSB0eXBlb2YgYXJncy5maXJzdCgpID09PSAnYm9vbGVhbicgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZTtcbiAgICAgICAgb2JqID0gdHlwZW9mIGFyZ3MuZmlyc3QoKSA9PT0gJ29iamVjdCcgfHwgJC5pc0Z1bmN0aW9uKGFyZ3MuZmlyc3QoKSkgPyBhcmdzLnNoaWZ0KCkgOiB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzLmZpcnN0KCkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGtleSBtdXN0IGJlIHN0cmluZyB0eXBlIDogXCIgKyBhcmdzLmZpcnN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bGxrZXkgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIHZhbHVlID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBsZXQga2V5cyA9ICQubWFwKCQuc3BsaXQoZnVsbGtleSwgJy4nLCAnLycpLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGlmICgvXihbXlxcW10rKT9cXFsoW15cXF1dKyk/XFxdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5LZXlzID0gW2tleS5tYXRjaCgvXihbXlxcW10rKT8vKVsxXV07XG4gICAgICAgICAgICAgICAgbGV0IGluQnJhY2tldCA9IC9cXFsoW15cXF1dKyk/XFxdL2c7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRNYXRjaGVzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0TWF0Y2hlcyA9IGluQnJhY2tldC5leGVjKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5LZXlzLnB1c2gobmV4dE1hdGNoZXNbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5LZXlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaXNOdWxsKG8sIGtleSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIShrZXkgaW4gbyAmJiAob1trZXldICE9IG51bGwpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3Vyck9iaiA9IG9iajtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFwcGVuZEFycmF5IHx8IGlzTnVsbChjdXJyT2JqLCBrZXkpKVxuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgkLmlzQXJyYXkoY3Vyck9ialtrZXldKSlcbiAgICAgICAgICAgICAgICAgICAgY3Vyck9ialtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY3Vyck9ialtrZXldID0gW2N1cnJPYmpba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc051bGwoY3Vyck9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5c1tpICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGtleXNbaSArIDFdID0gJzAnO1xuICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XSA9IC9eXFxkKyQvLnRlc3Qoa2V5c1tpICsgMV0pID8gW10gOiB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGtleXNbaSArIDFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGtleXNbaSArIDFdID0gJC5pc0FycmF5KGN1cnJPYmpba2V5XSkgPyBjdXJyT2JqW2tleV0ubGVuZ3RoICsgJycgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJPYmogPSBjdXJyT2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZW5lcmFsaXplOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmNvbnRhaW5zKCcuJykgfHwgL1xcWyhcXHcrKT9cXF0vLnRlc3Qoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgJC5vYmouc2V0KHRydWUsIHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXBdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXBwZW5kQXJyYXldXG4gICAgICogQHBhcmFtIHsqfE9iamVjdH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHsqfC4uLk9iamVjdH0gc291cmNlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dGVuZElmVW5kZWZpbmVkXVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uKGRlZXAsIGFwcGVuZEFycmF5LCB0YXJnZXQsIHNvdXJjZXMsIGV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgZGVlcCA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBhcHBlbmRBcnJheSA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBleHRlbmRJZlVuZGVmaW5lZCA9IHR5cGVvZiBhcmdzLmxhc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5wb3AoKSA6IGZhbHNlO1xuICAgICAgICB0YXJnZXQgPSBhcmdzLmxlbmd0aCA9PT0gMSA/IHt9IDogYXJncy5zaGlmdCgpIHx8IHt9O1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgISQuaXNGdW5jdGlvbih0YXJnZXQpKSB0YXJnZXQgPSB7fTtcblxuICAgICAgICBzb3VyY2VzID0gYXJncztcbiAgICAgICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmMgPSB0YXJnZXRbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weSA9IHNvdXJjZVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ID09PSB0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHlJc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBjb3B5ICYmICgkLmlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gJC5pc0FycmF5KGNvcHkpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvcHlJc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmNJc1BsYWluT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMgPT09IHVuZGVmaW5lZCB8fCAoc3JjSXNQbGFpbk9iamVjdCA9ICQuaXNQbGFpbk9iamVjdChzcmMpKSB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQub2JqLmV4dGVuZChkZWVwLCBhcHBlbmRBcnJheSwgKHNyY0lzUGxhaW5PYmplY3QgPyBzcmMgOiB7fSksIGNvcHksIGV4dGVuZElmVW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQubWVyZ2UoKGFwcGVuZEFycmF5ICYmICQuaXNBcnJheShzcmMpID8gc3JjIDogW10pLCAkLm9iai5leHRlbmQoZGVlcCwgW10sIGNvcHkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcHkgIT09IHVuZGVmaW5lZCAmJiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBuZXcgRGF0ZShjb3B5LmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3B5IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5nbG9iYWwgIT0gbnVsbCkgZmxhZ3MgKz0gJ2cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5pZ25vcmVDYXNlICE9IG51bGwpIGZsYWdzICs9ICdpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkubXVsdGlsaW5lICE9IG51bGwpIGZsYWdzICs9ICdtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkuc3RpY2t5ICE9IG51bGwpIGZsYWdzICs9ICd5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gbmV3IFJlZ0V4cChjb3B5LnNvdXJjZSwgZmxhZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGNvcHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0ga2V5VmFsdWVQYWlyc1xuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBtYWtlOiBmdW5jdGlvbiguLi5rZXlWYWx1ZVBhaXJzKSB7XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlWYWx1ZVBhaXJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICBvYmpba2V5VmFsdWVQYWlyc1tpXV0gPSBrZXlWYWx1ZVBhaXJzW2kgKyAxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGVtcHR5OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdChvYmopKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59O1xuXG5mb3IgKGxldCBrZXkgaW4gJC5vYmopIHtcbiAgICBsZXQgc2hvcnRLZXkgPSBrZXkgKyAnT2JqZWN0JztcbiAgICBpZiAoIShzaG9ydEtleSBpbiAkKSkge1xuICAgICAgICBpZiAoJC5vYmouaGFzT3duUHJvcGVydHkoa2V5KSkgJFtzaG9ydEtleV0gPSAkLm9ialtrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgJC5vYmo7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9vYmouanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9TeW1ib2wgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbFwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX1N5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLlN5bWJvbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmtleW9mJylcbiAgLCAkbmFtZXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgZ2V0RGVzYyAgICAgICAgPSAkLmdldERlc2NcbiAgLCBzZXREZXNjICAgICAgICA9ICQuc2V0RGVzY1xuICAsIF9jcmVhdGUgICAgICAgID0gJC5jcmVhdGVcbiAgLCBnZXROYW1lcyAgICAgICA9ICRuYW1lcy5nZXRcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBzZXR0ZXIgICAgICAgICA9IGZhbHNlXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIGlzRW51bSAgICAgICAgID0gJC5pc0VudW1cbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgdXNlTmF0aXZlICAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKHNldERlc2Moe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHNldERlc2ModGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ2V0RGVzYyhPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBzZXREZXNjKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKXNldERlc2MoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBzZXREZXNjO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2wucHJvdG90eXBlKTtcbiAgc3ltLl9rID0gdGFnO1xuICBERVNDUklQVE9SUyAmJiBzZXR0ZXIgJiYgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpc2V0RGVzYyhpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gc2V0RGVzYyhpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5KTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XVxuICAgID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHZhciBEID0gZ2V0RGVzYyhpdCA9IHRvSU9iamVjdChpdCksIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTilyZXN1bHQucHVzaChrZXkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIHZhciBhcmdzID0gW2l0XVxuICAgICwgaSAgICA9IDFcbiAgICAsICQkICAgPSBhcmd1bWVudHNcbiAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gIHdoaWxlKCQkLmxlbmd0aCA+IGkpYXJncy5wdXNoKCQkW2krK10pO1xuICByZXBsYWNlciA9IGFyZ3NbMV07XG4gIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gIH07XG4gIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xufTtcbnZhciBidWdneUpTT04gPSAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSk7XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIXVzZU5hdGl2ZSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZihpc1N5bWJvbCh0aGlzKSl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHJldHVybiB3cmFwKHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCkpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbiAgfTtcblxuICAkLmNyZWF0ZSAgICAgPSAkY3JlYXRlO1xuICAkLmlzRW51bSAgICAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICQuZ2V0RGVzYyAgICA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICQuc2V0RGVzYyAgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgJC5zZXREZXNjcyAgID0gJGRlZmluZVByb3BlcnRpZXM7XG4gICQuZ2V0TmFtZXMgICA9ICRuYW1lcy5nZXQgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgJC5nZXRTeW1ib2xzID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi8kLmxpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIHN5bWJvbFN0YXRpY3MgPSB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn07XG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2Vcbi8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcbi8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXG4vLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxuLy8gMTkuNC4yLjkgU3ltYm9sLnNlYXJjaFxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXG4vLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XG4vLyAxOS40LjIuMTIgU3ltYm9sLnRvUHJpbWl0aXZlXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXG4vLyAxOS40LjIuMTQgU3ltYm9sLnVuc2NvcGFibGVzXG4kLmVhY2guY2FsbCgoXG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsJyArXG4gICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihpdCl7XG4gIHZhciBzeW0gPSB3a3MoaXQpO1xuICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcbn0pO1xuXG5zZXR0ZXIgPSB0cnVlO1xuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVywge1N5bWJvbDogJFN5bWJvbH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5bWJvbCcsIHN5bWJvbFN0YXRpY3MpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICF1c2VOYXRpdmUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCF1c2VOYXRpdmUgfHwgYnVnZ3lKU09OKSwgJ0pTT04nLCB7c3RyaW5naWZ5OiAkc3RyaW5naWZ5fSk7XG5cbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIGlmKElTX1BST1RPKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2NcbiAgLCBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudWlkLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5rZXlvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgZ2V0TmFtZXMgID0gcmVxdWlyZSgnLi8kJykuZ2V0TmFtZXNcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnZXROYW1lcyhpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xuICByZXR1cm4gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gJC5pc0VudW1cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtYXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xuSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkhUTUxDb2xsZWN0aW9uID0gSXRlcmF0b3JzLkFycmF5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90byAgICAgICA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJG5hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8oJGRlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY2xhc3NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtzdHJpbmd9IHNlcGFyYXRvclxuICogQHBhcmFtIHtzdHJpbmd9IFtlc2NhcGVDaGFyXVxuICogQHBhcmFtIHtudW1iZXJ9IFtsaW1pdF1cbiAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gKi9cbiQuc3BsaXQgPSBmdW5jdGlvbihzdHIsIHNlcGFyYXRvciwgZXNjYXBlQ2hhciwgbGltaXQpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzdHIgKyAnIGlzIG5vdCBhIHN0cmluZycpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICBpZiAodHlwZW9mIHNlcGFyYXRvciA9PT0gJ251bWJlcicpXG4gICAgICAgIFtsaW1pdCwgc2VwYXJhdG9yLCBlc2NhcGVDaGFyXSA9IFtzZXBhcmF0b3IsIG51bGwsIG51bGxdXG4gICAgZWxzZSBpZiAodHlwZW9mIGVzY2FwZUNoYXIgPT09ICdudW1iZXInKVxuICAgICAgICBbbGltaXQsIGVzY2FwZUNoYXJdID0gW2VzY2FwZUNoYXIsIG51bGxdXG5cbiAgICBmdW5jdGlvbiBsaW1pdGVkKGkpIHtcbiAgICAgICAgcmV0dXJuIDAgPCBsaW1pdCAmJiBsaW1pdCA8PSBpICsgMTtcbiAgICB9XG5cbiAgICBsZXQgcGFydHMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHMgPSAwO1xuICAgIGxldCBwO1xuICAgIHdoaWxlICgocCA9IHN0ci5pbmRleE9mKHNlcGFyYXRvciwgcykpICE9PSAtMSAmJiAhbGltaXRlZChpKSkge1xuICAgICAgICBsZXQgcGFydCA9IHN0ci5zbGljZShzLCBwKTtcbiAgICAgICAgbGV0IGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVzY2FwZUNoYXIgJiYgcGFydC5zbGljZSgtMSkgPT09IGVzY2FwZUNoYXIpIHtcbiAgICAgICAgICAgIHBhcnQgPSBwYXJ0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIGVzY2FwZWQgPSBwYXJ0LnNsaWNlKC0xKSAhPT0gZXNjYXBlQ2hhcjtcbiAgICAgICAgICAgIGlmIChlc2NhcGVkKSBwYXJ0ICs9IHNlcGFyYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0c1tpXSA9IChwYXJ0c1tpXSB8fCAnJykgKyBwYXJ0O1xuICAgICAgICBzID0gcCArIDE7XG4gICAgICAgIGlmICghZXNjYXBlZCkgaSsrO1xuICAgIH1cbiAgICBpZiAocyA8PSBzdHIubGVuZ3RoKSBwYXJ0c1tpXSA9IChwYXJ0c1tpXSB8fCAnJykgKyBzdHIuc2xpY2Uocyk7XG5cbiAgICByZXR1cm4gcGFydHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnNwbGl0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3BsaXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5pbXBvcnQgJy4vb2JqJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVN0cmluZ1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG4kLnBhcnNlUXVlcnlTdHJpbmcgPSBmdW5jdGlvbihxdWVyeVN0cmluZywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgcXVlcnlTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHF1ZXJ5U3RyaW5nID09PSAnJykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGxldCBwYWlycyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KC8mYW1wO3wmL2kpO1xuICAgIGlmICghJC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKVxuICAgICAgICBvcHRpb25zID0ge307XG4gICAgZWxzZSBpZiAob3B0aW9ucy5leGNlcHQgJiYgISQuaXNBcnJheShvcHRpb25zLmV4Y2VwdCkpXG4gICAgICAgIG9wdGlvbnMuZXhjZXB0ID0gW29wdGlvbnMuZXhjZXB0XTtcbiAgICBsZXQgbyA9IHt9O1xuICAgIGZvciAobGV0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgbGV0IFtuYW1lLCB2YWx1ZV0gPSBwYWlyLnNwbGl0KCc9Jyk7XG4gICAgICAgIG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobmFtZSk7XG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhjZXB0ID09IG51bGwgfHwgIW9wdGlvbnMuZXhjZXB0LmNvbnRhaW5zKG5hbWUpKVxuICAgICAgICAgICAgJC5vYmouc2V0KHRydWUsIG8sIG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnBhcnNlUXVlcnlTdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wYXJzZVF1ZXJ5U3RyaW5nLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGF0YUFuZEV2ZW50c1xuICogQHBhcmFtIHtib29sZWFufSBkZWVwRGF0YUFuZEV2ZW50c1xuICogQHJldHVybiB7alF1ZXJ5PEhUTUxFbGVtZW50Pn1cbiAqL1xuJC5mbi5yZWNsb25lID0gZnVuY3Rpb24oZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBvbGRFbGVtID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IG5ld0VsZW0gPSBvbGRFbGVtLmNsb25lKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKTtcbiAgICAgICAgbmV3RWxlbS5pbnNlcnRBZnRlcih0aGlzKTtcbiAgICAgICAgb2xkRWxlbS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1bMF07XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnJlY2xvbmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWNsb25lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqIEBwYXJhbSB7QXJyYXk8e25hbWUsdmFsdWV9Pn0gcGFyYW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGxlbmd0aCBvZiBwYXJhbWV0ZXJzXG4gKi9cbiQucmVpbmRleEFycmF5UGFyYW1zID0gZnVuY3Rpb24ocHJlZml4LCBwYXJhbXMpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIHByZWZpeC5yZXBsYWNlKCcuJywgJ1xcXFwuJykgKyAnKVxcXFxbKFxcXFxkKylcXFxcXScpO1xuICAgIGxldCBwcmV2SW5kZXggPSBudWxsO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHBhcmFtIG9mIHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMocGFyYW0ubmFtZSk7XG4gICAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgICAgICBsZXQgY3VyckluZGV4ID0gcmVzdWx0c1syXTtcbiAgICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IGN1cnJJbmRleCkge1xuICAgICAgICAgICAgICAgIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW0ubmFtZSA9IHBhcmFtLm5hbWUucmVwbGFjZShyZWdleCwgJyQxWycgKyBpbmRleCArICddJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5yZWluZGV4QXJyYXlQYXJhbXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWluZGV4QXJyYXlQYXJhbXMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4ucmV2ZXJzZSA9IEFycmF5LnByb3RvdHlwZS5yZXZlcnNlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmV2ZXJzZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG4kLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoISQuaXNQbGFpbk9iamVjdChvcHRpb25zKSlcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuZXhjZXB0ICYmICEkLmlzQXJyYXkob3B0aW9ucy5leGNlcHQpKVxuICAgICAgICBvcHRpb25zLmV4Y2VwdCA9IFtvcHRpb25zLmV4Y2VwdF07XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICQuZWFjaCh0aGlzLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob3B0aW9ucy5leGNlcHQgPT0gbnVsbCB8fCAhb3B0aW9ucy5leGNlcHQuY29udGFpbnModGhpcy5uYW1lKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQuaXNBcnJheShyZXN1bHRbdGhpcy5uYW1lXSkpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdID0gW3Jlc3VsdFt0aGlzLm5hbWVdLCB0aGlzLnZhbHVlXTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJlc3VsdFt0aGlzLm5hbWVdID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnNlcmlhbGl6ZU9iamVjdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcmlhbGl6ZU9iamVjdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuJC5zb21lID0gZnVuY3Rpb24oaXRlbXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKCQuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBpdGVtcywgaXRlbXNbaV0sIGksIGl0ZW1zKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoJC5pc1BsYWluT2JqZWN0KGl0ZW1zKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBpdGVtcywgaXRlbXNba2V5XSwga2V5LCBpdGVtcykpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcihpdGVtcyArIFwiIGlzIG5vdCBhcnJheSBvciBwbGFpbiBvYmplY3RcIik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zb21lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4kLnN1cHBvcnRzSW5wdXRUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IHR5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnN1cHBvcnRzSW5wdXRUeXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3VwcG9ydHNJbnB1dFR5cGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtYTUx9IHhtbE5vZGUgdGhlIHhtbCBub2RlLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG4kLnhtbFRvU3RyaW5nID0gZnVuY3Rpb24oeG1sTm9kZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoeG1sTm9kZSk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIGlmICh4bWxOb2RlLnhtbCA9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWE1MU2VyaWFsaXplciBub3Qgc3VwcG9ydGVkXCIpO1xuXG4gICAgICAgIHJldHVybiB4bWxOb2RlLnhtbDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnhtbFRvU3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMveG1sVG9TdHJpbmcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9