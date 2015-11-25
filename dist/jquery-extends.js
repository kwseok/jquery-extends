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
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(51);
	
	__webpack_require__(56);
	
	__webpack_require__(57);
	
	__webpack_require__(58);
	
	__webpack_require__(59);
	
	__webpack_require__(60);
	
	__webpack_require__(50);
	
	__webpack_require__(61);
	
	__webpack_require__(62);
	
	exports['default'] = $;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	if (!_jquery2['default']) {
	    throw new Error("jQuery.extends requires a jQuery");
	}
	
	module.exports = _jquery2['default'];

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

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(5);
	
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
/* 5 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	if (!global.document) {
	    throw new Error("jQuery.extends requires a window with a document");
	}
	
	module.exports = global;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
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
	
	exports['default'] = $.fn.groupBy;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, document) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	var _window = __webpack_require__(6);
	
	var _window2 = _interopRequireDefault(_window);
	
	module.exports = _window2['default'].document;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(5);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _getIterator = __webpack_require__(12)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
	__webpack_require__(50);
	
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	__webpack_require__(42);
	module.exports = __webpack_require__(45);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	var Iterators = __webpack_require__(18);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(16)
	  , step             = __webpack_require__(17)
	  , Iterators        = __webpack_require__(18)
	  , toIObject        = __webpack_require__(19);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(23)(Array, 'Array', function(iterated, kind){
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
/* 16 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(20)
	  , defined = __webpack_require__(22);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(21);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(24)
	  , $export        = __webpack_require__(25)
	  , redefine       = __webpack_require__(30)
	  , hide           = __webpack_require__(31)
	  , has            = __webpack_require__(36)
	  , Iterators      = __webpack_require__(18)
	  , $iterCreate    = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(38)
	  , getProto       = __webpack_require__(32).getProto
	  , ITERATOR       = __webpack_require__(39)('iterator')
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
/* 24 */
/***/ function(module, exports) {

	module.exports = true;

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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(window) {// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(32)
	  , createDesc = __webpack_require__(33);
	module.exports = __webpack_require__(34) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(35)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(32)
	  , descriptor     = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(38)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(31)(IteratorPrototype, __webpack_require__(39)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(32).setDesc
	  , has = __webpack_require__(36)
	  , TAG = __webpack_require__(39)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(40)('wks')
	  , uid    = __webpack_require__(41)
	  , Symbol = __webpack_require__(26).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(26)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(43)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(23)(String, 'String', function(iterated){
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(44)
	  , defined   = __webpack_require__(22);
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
/* 44 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(46)
	  , get      = __webpack_require__(48);
	module.exports = __webpack_require__(27).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(47);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(39)('iterator')
	  , Iterators = __webpack_require__(18);
	module.exports = __webpack_require__(27).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(21)
	  , TAG = __webpack_require__(39)('toStringTag')
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _slicedToArray = __webpack_require__(52)['default'];
	
	var _getIterator = __webpack_require__(12)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
	__webpack_require__(11);
	
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
	
	exports['default'] = $.parseQueryString;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getIterator = __webpack_require__(12)["default"];
	
	var _isIterable = __webpack_require__(53)["default"];
	
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	__webpack_require__(42);
	module.exports = __webpack_require__(55);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(39)('iterator')
	  , Iterators = __webpack_require__(18);
	module.exports = __webpack_require__(27).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _getIterator = __webpack_require__(12)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(5);
	
	exports['default'] = $.fn.reverse = Array.prototype.reverse;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
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
	
	exports['default'] = $.fn.serializeObject;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
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
	
	exports['default'] = $.some;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(document, $) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(5);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(1)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(5);
	
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
	
	exports['default'] = $.xmlToString;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NmUxZjc4MTY0OTNmYTkwNTQ5YSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZmluZEJ5TmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm90by5qcy9kaXN0L3Byb3RvLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF4WkluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXh0VGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwbGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZVF1ZXJ5U3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlaW5kZXhBcnJheVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VyaWFsaXplT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdXBwb3J0c0lucHV0VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMveG1sVG9TdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLHNEQUFZLENBQUM7Ozs7OztxQkFFTixDQUFlOztxQkFDZixDQUFXOztxQkFDWCxDQUFhOztxQkFDYixFQUFZOztxQkFD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VTs7Ozs7O0FBTWpCLEVBQUMsQ0FBQyxXQUFXLEdBQUcsVUFBUyxPQUFPLEVBQUU7QUFDOUIsU0FBSTtBQUNBLGdCQUFRLElBQUksYUFBYSxFQUFFLENBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDM0QsQ0FBQyxPQUFPLE1BQU0sRUFBRTtBQUNiLGFBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7QUFFbkQsZ0JBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztNQUN0QjtFQUNKLENBQUM7O3NCQUVhLENBQUMsQ0FBQyxXQUFXIiwiZmlsZSI6ImpxdWVyeS1leHRlbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqUXVlcnlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpRdWVyeVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODZlMWY3ODE2NDkzZmE5MDU0OWFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9maW5kQnlOYW1lcydcbmltcG9ydCAnLi9ncm91cEJ5J1xuaW1wb3J0ICcuL21heFpJbmRleCdcbmltcG9ydCAnLi9uZXh0VGljaydcbmltcG9ydCAnLi9vYmonXG5pbXBvcnQgJy4vcGFyc2VRdWVyeVN0cmluZydcbmltcG9ydCAnLi9yZWNsb25lJ1xuaW1wb3J0ICcuL3JlaW5kZXhBcnJheVBhcmFtcydcbmltcG9ydCAnLi9yZXZlcnNlJ1xuaW1wb3J0ICcuL3NlcmlhbGl6ZU9iamVjdCdcbmltcG9ydCAnLi9zb21lJ1xuaW1wb3J0ICcuL3NwbGl0J1xuaW1wb3J0ICcuL3N1cHBvcnRzSW5wdXRUeXBlJ1xuaW1wb3J0ICcuL3htbFRvU3RyaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCAkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5LmV4dGVuZHMgcmVxdWlyZXMgYSBqUXVlcnlcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvanF1ZXJ5LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbmFtZXNcbiAqIEByZXR1cm4ge2pRdWVyeTxIVE1MRWxlbWVudD59XG4gKi9cbiQuZm4uZmluZEJ5TmFtZXMgPSBmdW5jdGlvbiguLi5uYW1lcykge1xuICAgIGlmIChuYW1lcy5sZW5ndGggPT09IDApIHJldHVybiAkKFtdKTtcbiAgICByZXR1cm4gdGhpcy5maW5kKG5hbWVzLm1hcChuYW1lID0+ICdbbmFtZT1cIicgKyAobmFtZSB8fCAnJykucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpICsgJ1wiXScpLmpvaW4oJywnKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLmZpbmRCeU5hbWVzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmluZEJ5TmFtZXMuanNcbiAqKi8iLCIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzkpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0MCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDUpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Nyk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDQpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0OSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUwKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNTEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Nik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Kn0gYVxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGEpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGEpID49IDA7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuY29udGFpbnM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHsqfSBpdGVtXG5cdCAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIC0xO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmV2ZXJ5KSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG5cdCAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmV2ZXJ5ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmICghY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmZpbHRlcikge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4ge0FycmF5fVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuZmxhdE1hcChmdW5jdGlvbiAoYSwgaSkge1xuXHQgICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IF90aGlzLCBhLCBpLCBfdGhpcykpIHJldHVybiBhO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmZpbHRlcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdFxuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5mbGF0TWFwKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG5cdCAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuXHQgICAgICogQHJldHVybiBBcnJheVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuZmxhdE1hcCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIHZhciByZXN1bHRzID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcyk7XG5cdCAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHJlc3VsdHMucHVzaC5hcHBseShyZXN1bHRzLCByZXN1bHQpO2Vsc2UgaWYgKHJlc3VsdCkgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHRzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmZsYXRNYXA7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkuaXNBcnJheSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0geyp9IG9ialxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5pc0FycmF5O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5maXJzdCkge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzWzBdO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmZpcnN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cEJ5KSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG5cdCAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuXHQgICAgICogQHJldHVybiB7e319XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzW2ldO1xuXHQgICAgICAgICAgICB2YXIga2V5ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHZhbHVlLCBpLCB0aGlzKTtcblx0ICAgICAgICAgICAgaWYgKGtleSAhPSBudWxsKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHJlc3VsdCkgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7ZWxzZSByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5ncm91cEJ5O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG5cdCAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5ncm91cGVkID0gZnVuY3Rpb24gKHNpemUpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuXHQgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShpLCBpICsgc2l6ZSkpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0cztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5ncm91cGVkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0KSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG5cdCAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuXHQgICAgICAgIHZhciByZXN1bHRzID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoOyBpID4gMDsgaSAtPSBzaXplKSB7XG5cdCAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKE1hdGgubWF4KDAsIGkgLSBzaXplKSwgaSkpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0cy5yZXZlcnNlKCk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlKSB7XG5cdCAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZSA9IGZ1bmN0aW9uIChhKSB7XG5cdCAgICAgICAgdmFyIGkgPSB0aGlzLmluZGV4T2YoYSk7XG5cdCAgICAgICAgaWYgKGkgPiAtMSkgdGhpc1tpXSA9IGE7ZWxzZSB0aGlzLnB1c2goYSk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuaW5jbHVkZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmpvaW5QYXRocykge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmpvaW5QYXRocyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgcGF0aCA9ICcnO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICBpZiAodGhpc1tpXSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMCAmJiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpICE9PSAnLycpIHBhdGggKz0gJy8nO1xuXHRcblx0ICAgICAgICAgICAgICAgIHBhdGggKz0gdGhpc1tpXS50b1N0cmluZygpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBwYXRoO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmpvaW5QYXRocztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmxhc3QpIHtcblx0ICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUubGFzdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLm1hcCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUubWFwO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXHRcblx0aWYgKCFBcnJheS5wcm90b3R5cGUubWF4KSB7XG5cdCAgICBBcnJheS5wcm90b3R5cGUubWF4ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuXHQgICAgICAgICAgICByZXR1cm4gYSA+IGIgPyBhIDogYjtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5tYXg7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLnJlZHVjZSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4geyp9XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICBpZiAoISh0aGlzLmxlbmd0aCA+IDApKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgcmVzdWx0ID0gdGhpc1swXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCByZXN1bHQsIHRoaXNbaV0sIGksIHRoaXMpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBcnJheS5wcm90b3R5cGUucmVkdWNlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG4vKioqLyB9LFxuLyogMTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cdFxuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5taW4pIHtcblx0ICAgIEFycmF5LnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBhIDwgYiA/IGEgOiBiO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLm1pbjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucmFuZ2UpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBmcm9tXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHRvXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RlcFxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICogQHJldHVybiB7QXJyYXl9XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnJhbmdlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG5cdCAgICAgICAgdmFyIHN0ZXAgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzJdO1xuXHRcblx0ICAgICAgICB2YXIgcmFuZ2UgPSBbXTtcblx0ICAgICAgICB2YXIgaXNOdW1iZXIgPSB0eXBlb2YgZnJvbSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvID09PSAnbnVtYmVyJztcblx0ICAgICAgICB2YXIgYmVnaW4gPSBpc051bWJlciA/IGZyb20gOiBmcm9tLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcblx0ICAgICAgICB2YXIgZW5kID0gaXNOdW1iZXIgPyB0byA6IHRvLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcblx0ICAgICAgICBzdGVwID0gTWF0aC5hYnMoc3RlcCkgfHwgMTtcblx0ICAgICAgICBpZiAoYmVnaW4gPiBlbmQpIHN0ZXAgPSAtc3RlcDtcblx0ICAgICAgICBmb3IgKHZhciBpID0gYmVnaW47IHN0ZXAgPiAwID8gaSA8PSBlbmQgOiBpID49IGVuZDsgaSArPSBzdGVwKSB7XG5cdCAgICAgICAgICAgIHJhbmdlLnB1c2goaXNOdW1iZXIgPyBpIDogU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByYW5nZTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnJhbmdlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUucmVtb3ZlKSB7XG5cdCAgICBBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGEpIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuXHQgICAgICAgICAgICBpZiAodGhpc1tpXSA9PT0gYSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUucmVtb3ZlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDIwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuc29tZSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5zb21lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuc29tZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIF9SZWdFeHAkZXNjYXBlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMilbJ2RlZmF1bHQnXTtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIV9SZWdFeHAkZXNjYXBlKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFJlZ0V4cC5lc2NhcGUgPSBmdW5jdGlvbiAodGV4dCkge1xuXHQgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBfUmVnRXhwJGVzY2FwZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG4vKioqLyB9LFxuLyogMjMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpLlJlZ0V4cC5lc2NhcGU7XG5cbi8qKiovIH0sXG4vKiAyNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2JlbmphbWluZ3IvUmV4RXhwLmVzY2FwZVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpXG5cdCAgLCAkcmUgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCkoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG5cdFxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZ0V4cCcsIHtlc2NhcGU6IGZ1bmN0aW9uIGVzY2FwZShpdCl7IHJldHVybiAkcmUoaXQpOyB9fSk7XG5cblxuLyoqKi8gfSxcbi8qIDI1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNilcblx0ICAsIGNvcmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpXG5cdCAgLCBjdHggICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KVxuXHQgICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cdFxuXHR2YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG5cdCAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcblx0ICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuXHQgICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG5cdCAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcblx0ICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuXHQgICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG5cdCAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG5cdCAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cblx0ICAgICwga2V5LCBvd24sIG91dDtcblx0ICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcblx0ICBmb3Ioa2V5IGluIHNvdXJjZSl7XG5cdCAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcblx0ICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG5cdCAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG5cdCAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuXHQgICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcblx0ICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuXHQgICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cblx0ICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG5cdCAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuXHQgICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcblx0ICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG5cdCAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuXHQgICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuXHQgICAgICB9O1xuXHQgICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG5cdCAgICAgIHJldHVybiBGO1xuXHQgICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG5cdCAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG5cdCAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG5cdCAgfVxuXHR9O1xuXHQvLyB0eXBlIGJpdG1hcFxuXHQkZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG5cdCRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcblx0JGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuXHQkZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cblx0JGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcblx0JGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcblx0bW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG4vKioqLyB9LFxuLyogMjYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5cdHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuXHQgID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0aWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSxcbi8qIDI3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuXHRpZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSxcbi8qIDI4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcblx0dmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuXHQgIGFGdW5jdGlvbihmbik7XG5cdCAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcblx0ICBzd2l0Y2gobGVuZ3RoKXtcblx0ICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcblx0ICAgIH07XG5cdCAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuXHQgICAgfTtcblx0ICB9XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuXHQgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDI5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDMwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlZ0V4cCwgcmVwbGFjZSl7XG5cdCAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XG5cdCAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcblx0ICB9IDogcmVwbGFjZTtcblx0ICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuXHQgICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcmV0dXJuIHtSZWdFeHB9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJQYXRoIG11c3Qgbm90IGJlIGVtcHR5LlwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHBhdGggPSB0aGlzLnJlcGxhY2UoL1xcL3syLH0vZywgJy8nKS5yZXBsYWNlKC9bLVtcXF17fSgpKy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcblx0ICAgICAgICB2YXIgcGF0dGVybiA9IHBhdGgucmVwbGFjZSgvKChcXC8/XFwqXFwqKXwoXFwvP1xcKil8KFxcPyl8KFxcLykpL2csIGZ1bmN0aW9uICgkMCkge1xuXHQgICAgICAgICAgICBzd2l0Y2ggKCQwKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcvKionOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnKD86L3sxLH0uKik/Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyoqJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy4qJztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJy8qJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyg/Oi97MSx9W14vXSopPyc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcqJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1teL10qJztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJz8nOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW14vXSc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcvJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy97MSx9Jztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdeKCcgKyBwYXR0ZXJuICsgJykkJyk7XG5cdCAgICB9O1xuXHR9XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5hKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmEgPSBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXg7XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblx0XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5icjJubCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbFVuZXNjYXBlXG5cdCAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuYnIybmwgPSBmdW5jdGlvbiAoeG1sVW5lc2NhcGUpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZXBsYWNlKC8oPGJyPnw8YnJcXC8+KS9nLCAnXFxuJyk7XG5cdCAgICAgICAgaWYgKHhtbFVuZXNjYXBlKSByZXR1cm4gcmVzdWx0LnhtbFVuZXNjYXBlKCk7XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuYnIybmw7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGUpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKCZsdDt8Jmd0O3wmIzM0O3wmIzM5O3wmYW1wOykvZywgZnVuY3Rpb24gKCQxKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyZsdDsnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPCc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcmZ3Q7Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJz4nO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnJiMzNDsnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnXCInO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnJiMzOTsnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIidcIjtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyZhbXA7Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyYnO1xuXHQgICAgICAgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJDE7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0ICAgICAgICBpZiAoc3RyID09IG51bGwgfHwgdGhpcyA+IHN0cikgcmV0dXJuIDE7XG5cdCAgICAgICAgaWYgKHRoaXMgPCBzdHIpIHJldHVybiAtMTtcblx0ICAgICAgICByZXR1cm4gMDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDM1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5jb250YWlucykge1xuXHQgIC8qKlxuXHQgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICAgKi9cblx0ICBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHN0cikge1xuXHQgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihzdHIpID4gLTE7XG5cdCAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5jb250YWlucztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxudW1iZXJ9IFtjaGVja2J5dGVdIGNoZWNrIGJ5dGUgbGVuZ3RoIGlmIHRydWUuIChkZWZhdWx0IGlzIGZhbHNlKVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aCB0aGUgbWF4IGxlbmd0aC5cblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3VmZml4XSB0aGUgc3VmZml4LlxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZyA9IGZ1bmN0aW9uIChjaGVja2J5dGUsIG1heExlbmd0aCwgc3VmZml4KSB7XG5cdCAgICAgICAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cdFxuXHQgICAgICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICAgICAgdmFyIGFyZ0N1cnIgPSBmdW5jdGlvbiBhcmdDdXJyKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gX2FyZ3VtZW50c1thcmdJbmRleF07XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgYXJnU2hpZnQgPSBmdW5jdGlvbiBhcmdTaGlmdCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9hcmd1bWVudHNbYXJnSW5kZXgrK107XG5cdCAgICAgICAgfTtcblx0XG5cdCAgICAgICAgY2hlY2tieXRlID0gWydib29sZWFuJywgJ251bWJlciddLmNvbnRhaW5zKHR5cGVvZiBhcmdDdXJyKCkpID8gYXJnU2hpZnQoKSA6IGZhbHNlO1xuXHRcblx0ICAgICAgICBpZiAodHlwZW9mIGFyZ0N1cnIoKSAhPT0gJ251bWJlcicpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihhcmdDdXJyKCkgKyBcIiBpcyBub3QgYSBudW1iZXJcIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIG1heExlbmd0aCA9IGFyZ1NoaWZ0KCk7XG5cdFxuXHQgICAgICAgIHN1ZmZpeCA9IHR5cGVvZiBhcmdDdXJyKCkgPT09ICdzdHJpbmcnID8gYXJnU2hpZnQoKSA6ICcnO1xuXHRcblx0ICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoY2hlY2tieXRlKTtcblx0ICAgICAgICBpZiAoIShsZW5ndGggPiBtYXhMZW5ndGgpKSByZXR1cm4gdGhpcztcblx0XG5cdCAgICAgICAgdmFyIHN1ZmZpeExlbmd0aCA9IHN1ZmZpeC5nZXRMZW5ndGgoY2hlY2tieXRlKTtcblx0ICAgICAgICBpZiAoc3VmZml4TGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWF4IGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiBzdWZmaXggbGVuZ3RoXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgcmVzdWx0U3RyaW5nID0gJyc7XG5cdCAgICAgICAgdmFyIGNoZWNrZWRMZW5ndGggPSAwO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgYyA9IHRoaXMuY2hhckF0KGkpO1xuXHQgICAgICAgICAgICB2YXIgbCA9IGMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG5cdCAgICAgICAgICAgIGlmIChjaGVja2VkTGVuZ3RoICsgbCA+IG1heExlbmd0aCAtIHN1ZmZpeExlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICAgIGNoZWNrZWRMZW5ndGggKz0gbDtcblx0ICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IGM7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHRTdHJpbmcgKyBzdWZmaXg7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmdldExlbmd0aCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW58bnVtYmVyfSBbY2hlY2tieXRlXSBjaGVjayBieXRlIGxlbmd0aCBpZiB0cnVlLiAoZGVmYXVsdCBpcyBmYWxzZSlcblx0ICAgICAqIEByZXR1cm4ge251bWJlcn1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoY2hlY2tieXRlKSB7XG5cdCAgICAgICAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cdFxuXHQgICAgICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICAgICAgdmFyIGFyZ0N1cnIgPSBmdW5jdGlvbiBhcmdDdXJyKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gX2FyZ3VtZW50c1thcmdJbmRleF07XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgYXJnU2hpZnQgPSBmdW5jdGlvbiBhcmdTaGlmdCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9hcmd1bWVudHNbYXJnSW5kZXgrK107XG5cdCAgICAgICAgfTtcblx0XG5cdCAgICAgICAgY2hlY2tieXRlID0gWydib29sZWFuJywgJ251bWJlciddLmNvbnRhaW5zKHR5cGVvZiBhcmdDdXJyKCkpID8gYXJnU2hpZnQoKSA6IGZhbHNlO1xuXHQgICAgICAgIGlmIChjaGVja2J5dGUgPT09IGZhbHNlKSByZXR1cm4gdGhpcy5sZW5ndGg7XG5cdFxuXHQgICAgICAgIHZhciBsZW5ndGggPSAwO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgYyA9IHRoaXMuY2hhckNvZGVBdChpKTtcblx0ICAgICAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDAwN0YpOlxuXHQgICAgICAgICAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAhKHR5cGVvZiBjaGVja2J5dGUgPT09ICdudW1iZXInICYmIGNoZWNrYnl0ZSA+IDApOlxuXHQgICAgICAgICAgICAgICAgICAgIGxlbmd0aCArPSBjaGVja2J5dGU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDdGRik6XG5cdCAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwRkZGRik6XG5cdCAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXHQgICAgICAgICAgICAgICAgICAgIGxlbmd0aCArPSA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBsZW5ndGg7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmdldExlbmd0aDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG5cdCAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCA9IGZ1bmN0aW9uIChzdHIpIHtcblx0ICAgICAgICB2YXIgaSA9IHRoaXMubGFzdEluZGV4T2Yoc3RyKTtcblx0ICAgICAgICByZXR1cm4gaSA+IC0xICYmIGkgPT09IHRoaXMubGVuZ3RoIC0gc3RyLnRvU3RyaW5nKCkubGVuZ3RoO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdCkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cdFxuXHQgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLygnJ3wnXFx7fH0nfFxceyhcXHcrKX0pL2csIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgXCInJ1wiOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIidcIjtcblx0ICAgICAgICAgICAgICAgIGNhc2UgXCIne1wiOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAneyc7XG5cdCAgICAgICAgICAgICAgICBjYXNlIFwifSdcIjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ30nO1xuXHQgICAgICAgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCEvXlxcZCskL2cudGVzdCgkMikgPyBfYXJndW1lbnRzWzBdIHx8IHt9IDogQXJyYXkuaXNBcnJheShfYXJndW1lbnRzWzBdKSA/IF9hcmd1bWVudHNbMF0gOiBfYXJndW1lbnRzKVskMl07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzXG5cdCAgICAgKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIHJlZ2V4ID0gLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nO1xuXHQgICAgICAgIHZhciB2YXJpYWJsZXMgPSBbXTtcblx0ICAgICAgICB2YXIgbWF0Y2hlcyA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB3aGlsZSAobWF0Y2hlcyA9IHJlZ2V4LmV4ZWModGhpcykpIHtcblx0ICAgICAgICAgICAgdmFyIG1hdGNoID0gbWF0Y2hlc1swXTtcblx0ICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBcIicnXCIgJiYgbWF0Y2ggIT09IFwiJ3tcIiAmJiBtYXRjaCAhPT0gXCJ9J1wiKSB7XG5cdCAgICAgICAgICAgICAgICB2YXJpYWJsZXMucHVzaChtYXRjaGVzWzJdKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdmFyaWFibGVzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuLyoqKi8gfSxcbi8qIDQxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcblx0ICAgICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCA9IGZ1bmN0aW9uIChzaXplKSB7XG5cdCAgICAgICAgaWYgKCEoc2l6ZSA+IDEpKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNpemUgdmFsdWUnKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykgc2l6ZSA9IHBhcnNlSW50KHNpemUpO1xuXHQgICAgICAgIHZhciByZXN1bHRzID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSBzaXplKSB7XG5cdCAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKGksIGkgKyBzaXplKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHRzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmdyb3VwZWRSaWdodCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuXHQgICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuXHQgICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzaXplIHZhbHVlJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHNpemUgPSBwYXJzZUludChzaXplKTtcblx0ICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aDsgaSA+IDA7IGkgLT0gc2l6ZSkge1xuXHQgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShNYXRoLm1heCgwLCBpIC0gc2l6ZSksIGkpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdHMucmV2ZXJzZSgpO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0NCk7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUubGVmdFBhZCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcblx0ICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUubGVmdFBhZCA9IGZ1bmN0aW9uIChsZW5ndGgsIGZpbGxDaGFyKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobGVuZ3RoICsgJyBpcyBub3QgYSBudW1iZXInKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKCFmaWxsQ2hhcikgZmlsbENoYXIgPSAnICc7XG5cdCAgICAgICAgaWYgKHRoaXMubGVuZ3RoID49IGxlbmd0aCkgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgICAgICByZXR1cm4gZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKSArIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgIH07XG5cdH1cblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmxwYWQpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUubHBhZCA9IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5sZWZ0UGFkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQ0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnJlcGVhdCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgPSBmdW5jdGlvbiAoY291bnQpIHtcblx0ICAgICAgICBpZiAoIShjb3VudCA+PSAwKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBjb3VudCB2YWx1ZScpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdCAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnJlcGVhdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KTtcblx0XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5ubDJicikge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbEVzY2FwZVxuXHQgICAgICogQHJldHVybnMge3N0cmluZ31cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5ubDJiciA9IGZ1bmN0aW9uICh4bWxFc2NhcGUpIHtcblx0ICAgICAgICByZXR1cm4gKHhtbEVzY2FwZSA/IHRoaXMueG1sRXNjYXBlKCkgOiB0aGlzKS5yZXBsYWNlKC8oXFxyXFxufFxcblxccnxcXHJ8XFxuKS9nLCAnPGJyLz4nKTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUubmwyYnI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oPHw+fFwifCd8JikvZywgZnVuY3Rpb24gKCQxKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJzwnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJmx0Oyc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICc+Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyZndDsnO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnXCInOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJiMzNDsnO1xuXHQgICAgICAgICAgICAgICAgY2FzZSBcIidcIjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyYjMzk7Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyYnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJmFtcDsnO1xuXHQgICAgICAgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJDE7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQ3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnF1b3RlKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3ZlcmxhcGFibGVcblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5xdW90ZSA9IGZ1bmN0aW9uIChvdmVybGFwYWJsZSkge1xuXHQgICAgICAgIGlmICh0eXBlb2Ygb3ZlcmxhcGFibGUgIT09ICdib29sZWFuJykgb3ZlcmxhcGFibGUgPSB0cnVlO1xuXHQgICAgICAgIGlmICghb3ZlcmxhcGFibGUgJiYgdGhpcy5sZW5ndGggPj0gMikge1xuXHQgICAgICAgICAgICBpZiAodGhpcy5jaGFyQXQoMCkgPT09ICdcIicgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gJ1wiJykgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuICdcIicgKyB0aGlzICsgJ1wiJztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUucXVvdGU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUucmVnZXgpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGZsYWdzXG5cdCAgICAgKiBAcmV0dXJucyB7UmVnRXhwfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLnJlZ2V4ID0gZnVuY3Rpb24gKGZsYWdzKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodGhpcywgZmxhZ3MpO1xuXHQgICAgfTtcblx0fVxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUucikge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5yID0gU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KTtcblx0XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcblx0ICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQgPSBmdW5jdGlvbiAobGVuZ3RoLCBmaWxsQ2hhcikge1xuXHQgICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuXHQgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKSArIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCk7XG5cdCAgICB9O1xuXHR9XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5ycGFkKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLnJwYWQgPSBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDUwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKSB7XG5cdCAgLyoqXG5cdCAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgICAqL1xuXHQgIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChzdHIpIHtcblx0ICAgIHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA9PT0gMDtcblx0ICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGg7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUudW5xdW90ZSkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSAyICYmICh0aGlzLmNoYXJBdCgwKSA9PT0gJ1wiJyAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSAnXCInIHx8IHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMSwgLTEpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfVxuLyoqKioqKi8gXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ09HSmpPR1UxTnpjMk1tWmhPV1UzTW1ZNFlUa2lMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTloY25KaGVYTXZZMjl1ZEdGcGJuTXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJGeWNtRjVjeTlwYm1SbGVFOW1MbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12WlhabGNua3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJGeWNtRjVjeTltYVd4MFpYSXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJGeWNtRjVjeTltYkdGMFRXRndMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12YVhOQmNuSmhlUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdllYSnlZWGx6TDJacGNuTjBMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12WjNKdmRYQkNlUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdllYSnlZWGx6TDJkeWIzVndaV1F1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5bmNtOTFjR1ZrVW1sbmFIUXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJGeWNtRjVjeTlwYm1Oc2RXUmxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12YW05cGJsQmhkR2h6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmJHRnpkQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdllYSnlZWGx6TDIxaGNDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WVhKeVlYbHpMMjFoZUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwzSmxaSFZqWlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwyMXBiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdllYSnlZWGx6TDNKaGJtZGxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12Y21WdGIzWmxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12YzI5dFpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12Y21WblpYaHdjeTlsYzJOaGNHVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlpWVdKbGJDMXlkVzUwYVcxbEwyTnZjbVV0YW5NdmNtVm5aWGh3TDJWelkyRndaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJOdmNtVXRhbk12YkdsaWNtRnllUzltYmk5eVpXZGxlSEF2WlhOallYQmxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMzR2WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZaWE0zTG5KbFoyVjRjQzVsYzJOaGNHVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OGtMbVY0Y0c5eWRDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekx5UXVaMnh2WW1Gc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdkpDNWpiM0psTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12SkM1amRIZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OGtMbUV0Wm5WdVkzUnBiMjR1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeThrTG5KbGNHeGhZMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpkSEpwYm1kekwyRnVkRk4wZVd4bFVHRjBhRlJ2VW1WblpYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012WW5JeWJtd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012ZUcxc1ZXNWxjMk5oY0dVdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wY21sdVozTXZZMjl0Y0dGeVpWUnZMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5emRISnBibWR6TDJOdmJuUmhhVzV6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpkSEpwYm1kekwyTjFkSE4wY21sdVp5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YzNSeWFXNW5jeTluWlhSTVpXNW5kR2d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBjbWx1WjNNdlpXNWtjMWRwZEdndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wY21sdVozTXZabTl5YldGMExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMMlp2Y20xaGRGWmhjbWxoWW14bGN5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YzNSeWFXNW5jeTluY205MWNHVmtMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5emRISnBibWR6TDJkeWIzVndaV1JTYVdkb2RDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YzNSeWFXNW5jeTlzWldaMFVHRmtMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5emRISnBibWR6TDNKbGNHVmhkQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5dWJESmljaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5NGJXeEZjMk5oY0dVdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wY21sdVozTXZjWFZ2ZEdVdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wY21sdVozTXZjbVZuWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wY21sdVozTXZjbWxuYUhSUVlXUXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012YzNSaGNuUnpWMmwwYUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjM1J5YVc1bmN5OTFibkYxYjNSbExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeDFRa0ZCWlR0QlFVTm1PMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPMEZEZEVOQkxHRkJRVmtzUTBGQlF6czdjVUpCUlU0c1EwRkJiVUk3TzNGQ1FVTnVRaXhEUVVGblFqczdjVUpCUTJoQ0xFTkJRV2xDT3p0eFFrRkRha0lzUTBGQlowSTdPM0ZDUVVOb1FpeERRVUZyUWpzN2NVSkJRMnhDTEVOQlFXdENPenR4UWtGRGJFSXNRMEZCYTBJN08zRkNRVU5zUWl4RlFVRjFRanM3Y1VKQlEzWkNMRVZCUVd0Q096dHhRa0ZEYkVJc1EwRkJhMEk3TzNGQ1FVTnNRaXhEUVVGclFqczdjVUpCUTJ4Q0xFVkJRVzlDT3p0eFFrRkRjRUlzUlVGQlpUczdjVUpCUTJZc1JVRkJZenM3Y1VKQlEyUXNSVUZCWXpzN2NVSkJRMlFzUlVGQll6czdjVUpCUTJRc1JVRkJaMEk3TzNGQ1FVTm9RaXhGUVVGcFFqczdjVUpCUTJwQ0xFVkJRV2xDT3p0eFFrRkRha0lzUlVGQlpUczdjVUpCUldZc1JVRkJhMEk3TzNGQ1FVVnNRaXhGUVVFclFqczdjVUpCUXk5Q0xFVkJRV2xDT3p0eFFrRkRha0lzUlVGQmNVSTdPM0ZDUVVOeVFpeEZRVUZ2UWpzN2NVSkJRM0JDTEVWQlFYRkNPenR4UWtGRGNrSXNSVUZCYjBJN08zRkNRVU53UWl4RlFVRnJRanM3Y1VKQlEyeENMRVZCUVRKQ096dHhRa0ZETTBJc1JVRkJjVUk3TzNGQ1FVTnlRaXhGUVVGdFFqczdjVUpCUTI1Q0xFVkJRWGRDT3p0eFFrRkRlRUlzUlVGQmJVSTdPM0ZDUVVOdVFpeEZRVUZwUWpzN2NVSkJRMnBDTEVWQlFXbENPenR4UWtGRGFrSXNSVUZCYVVJN08zRkNRVU5xUWl4RlFVRnJRanM3Y1VKQlEyeENMRVZCUVc5Q096dHhRa0ZEY0VJc1JVRkJjMEk3TzNGQ1FVTjBRaXhGUVVGdFFqczdjVUpCUTI1Q0xFVkJRWEZDT3p0eFFrRkRja0lzUlVGQmRVSXNSVHM3T3pzN08wRkROME01UWl4aFFVRlpMRU5CUVVNN096czdPenR4UWtGRlRpeERRVUZYT3p0QlFVVnNRaXhMUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVN096czdPMEZCU3pOQ0xGVkJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4SFFVRkhMRlZCUVZNc1EwRkJReXhGUVVGRk8wRkJRMjVETEdkQ1FVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMDFCUXk5Q08wVkJRMG83TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVUczdPenM3T3p0QlEyUjJReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRk96czdPenRCUVVzeFFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVExFbEJRVWtzUlVGQlJUdEJRVU55UXl4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU5zUXl4cFFrRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdWVUZETDBNN1FVRkRSQ3huUWtGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0TlFVTmlMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUE96czdPenM3TzBGRFpuUkRMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRVZCUVVVN096czdPenRCUVUxNFFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVExGRkJRVkVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYUVRc1kwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEYkVNc2FVSkJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeFBRVUZQTEV0QlFVc3NRMEZCUXp0VlFVTjJSVHRCUVVORUxHZENRVUZQTEVsQlFVa3NRMEZCUXp0TlFVTm1MRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTE96czdPenM3TzBGRGFFSndReXhoUVVGWkxFTkJRVU03T3pzN096dHhRa0ZGVGl4RFFVRlhPenRCUVVWc1FpeExRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVU3T3pzN096dEJRVTE2UWl4VlFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eFZRVUZUTEZGQlFWRXNSVUZCUlN4UFFVRlBMRVZCUVVVN096dEJRVU5xUkN4blFrRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJTenRCUVVNeFFpeHBRa0ZCU1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzVTBGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFZRVU0xUkN4RFFVRkRMRU5CUVVNN1RVRkRUaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRUczdPenM3T3p0QlEycENja01zWVVGQldTeERRVUZET3pzN096czdjVUpCUlU0c1EwRkJWenM3UVVGRmJFSXNTMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEZRVUZGT3pzN096czdRVUZOTVVJc1ZVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRMnhFTEdGQlFVa3NUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOcVFpeGpRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOc1F5eHBRa0ZCU1N4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRPVVFzYVVKQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNTMEZETVVRc1NVRkJTU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRWUVVONlF6dEJRVU5FTEdkQ1FVRlBMRTlCUVU4c1EwRkJRenROUVVOc1FqdEZRVU5LT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVODdPenM3T3pzN1FVTnlRblJETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJUczdPenM3TzBGQlRXaENMRlZCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlV5eEhRVUZITEVWQlFVVTdRVUZETVVJc1owSkJRVThzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEdkQ1FVRm5RaXhEUVVGRE8wMUJRMjVGTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zUzBGQlN5eERRVUZETEU5QlFVODdPenM3T3pzN1FVTmlOVUlzWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJUdEJRVU40UWl4VlFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZYTzBGQlFVVXNaMEpCUVU4c1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzAxQlFVVXNRMEZCUXp0RlFVTXhSRHM3YzBKQlJXTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTE96czdPenM3TzBGRFRuQkRMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRVZCUVVVN096czdPenRCUVUweFFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVExGRkJRVkVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYkVRc1lVRkJTU3hQUVVGUExGRkJRVkVzUzBGQlN5eFZRVUZWTEVWQlFVVTdRVUZEYUVNc2JVSkJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4SFFVRkhMRzlDUVVGdlFpeERRVUZETEVOQlFVTTdWVUZEY0VRN1FVRkRSQ3hoUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYUVJc1kwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEYkVNc2FVSkJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOd1FpeHBRa0ZCU1N4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEZWtRc2FVSkJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTmlMSEZDUVVGSkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVWQlEySXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4TFFVVjRRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRqUVVNM1FqdFZRVU5LTzBGQlEwUXNaMEpCUVU4c1RVRkJUU3hEUVVGRE8wMUJRMnBDTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBPenM3T3pzN08wRkRNMEowUXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RlFVRkZPenM3T3p0QlFVc3hRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlRMRWxCUVVrc1JVRkJSVHRCUVVOeVF5eGhRVUZKTEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRha0lzWTBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSVHRCUVVONFF5eHZRa0ZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFZRVU42UXp0QlFVTkVMR2RDUVVGUExFOUJRVThzUTBGQlF6dE5RVU5zUWl4RFFVRkRPMFZCUTB3N08zTkNRVVZqTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUenM3T3pzN096dEJRMmhDZEVNc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmxCUVZrc1JVRkJSVHM3T3pzN1FVRkxMMElzVlVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4WlFVRlpMRWRCUVVjc1ZVRkJVeXhKUVVGSkxFVkJRVVU3UVVGRE1VTXNZVUZCU1N4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMnBDTEdOQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3UVVGRGVFTXNiMEpCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFZRVU4wUkR0QlFVTkVMR2RDUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0TlFVTTFRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldUczdPenM3T3p0QlEyaENNME1zWVVGQldTeERRVUZET3pzN096czdjVUpCUlU0c1EwRkJWenM3UVVGRmJFSXNTMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlF6RkNMRlZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWTXNRMEZCUXl4RlFVRkZPMEZCUTJ4RExHRkJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGVFSXNZVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRMDRzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVWYUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRha0lzWjBKQlFVOHNTVUZCU1N4RFFVRkRPMDFCUTJZc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVTg3T3pzN096czdRVU5tZEVNc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1JVRkJSVHRCUVVNMVFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1IwRkJSeXhaUVVGWE8wRkJRMjVETEdGQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOa0xHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExHbENRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVOVUxIRkNRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlEzWkVMRWxCUVVrc1NVRkJTU3hIUVVGSExFTkJRVU03TzBGQlJXaENMSEZDUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8yTkJRemxDTzFWQlEwbzdRVUZEUkN4blFrRkJUeXhKUVVGSkxFTkJRVU03VFVGRFppeERRVUZETzBWQlEwdzdPM05DUVVWakxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVMEZCVXpzN096czdPenRCUTJwQ2VFTXNZVUZCV1N4RFFVRkRPenM3T3p0QlFVVmlMRXRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlR0QlFVTjJRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSMEZCUnl4WlFVRlhPMEZCUVVVc1owSkJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VFVGQlJTeERRVUZETzBWQlEzWkZPenR6UWtGRll5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrN096czdPenM3UVVOT2JrTXNZVUZCV1N4RFFVRkRPenM3T3p0QlFVVmlMRXRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NSVUZCUlRzN096czdRVUZMZEVJc1ZVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVkQlFVY3NWVUZCVXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRemxETEdGQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOb1FpeGpRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOdVF5eHRRa0ZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xVkJRMnBGTzBGQlEwUXNaMEpCUVU4c1RVRkJUU3hEUVVGRE8wMUJRMnBDTzBWQlEwbzdPM05DUVVWakxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnpzN096czdPenRCUTJoQ2JFTXNZVUZCV1N4RFFVRkRPenM3T3pzN2NVSkJSVTRzUlVGQlZUczdRVUZGYWtJc1MwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTNSQ0xGVkJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4SFFVRkhMRmxCUVZjN1FVRkROMElzWjBKQlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzI5Q1FVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdWVUZCUVN4RFFVRkRMRU5CUVVNN1RVRkRha1E3UlVGRFNqczdjMEpCUldNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZIT3pzN096czdPMEZEVm14RExHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVU3T3pzN096dEJRVTE2UWl4VlFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eFZRVUZUTEZGQlFWRXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRha1FzWVVGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNFSXNiVUpCUVUwc1NVRkJTU3hUUVVGVExFTkJRVU1zTmtOQlFUWkRMRU5CUVVNc1EwRkJRenRWUVVOMFJUdEJRVU5FTEdGQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU55UWl4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU51UXl4dFFrRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFZRVU55UlR0QlFVTkVMR2RDUVVGUExFMUJRVTBzUTBGQlF6dE5RVU5xUWl4RFFVRkRPMFZCUTB3N08zTkNRVVZqTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUVHM3T3pzN096dEJRM0JDY2tNc1lVRkJXU3hEUVVGRE96czdPenM3Y1VKQlJVNHNSVUZCVlRzN1FVRkZha0lzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhGUVVGRk8wRkJRM1JDTEZWQlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhIUVVGSExGbEJRVmM3UVVGRE4wSXNaMEpCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMjlDUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN1ZVRkJRU3hEUVVGRExFTkJRVU03VFVGRGFrUTdSVUZEU2pzN2MwSkJSV01zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhPenM3T3pzN08wRkRWbXhETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJUczdPenM3T3pzN1FVRlJaQ3hWUVVGTExFTkJRVU1zUzBGQlN5eEhRVUZITEZWQlFWTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJXVHRoUVVGV0xFbEJRVWtzZVVSQlFVY3NRMEZCUXpzN1FVRkRja01zWVVGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTJZc1lVRkJTU3hSUVVGUkxFZEJRVWNzVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4SlFVRkpMRTlCUVU4c1JVRkJSU3hMUVVGTExGRkJRVkVzUTBGQlF6dEJRVU5zUlN4aFFVRkpMRXRCUVVzc1IwRkJSeXhSUVVGUkxFZEJRVWNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETlVRc1lVRkJTU3hIUVVGSExFZEJRVWNzVVVGQlVTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNSRUxHRkJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU16UWl4aFFVRkpMRXRCUVVzc1IwRkJSeXhIUVVGSExFVkJRVVVzU1VGQlNTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRPMEZCUXpsQ0xHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZMRWxCUVVrc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdRVUZETTBRc2EwSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1ZVRkRja1E3UVVGRFJDeG5Ra0ZCVHl4TFFVRkxMRU5CUVVNN1RVRkRhRUlzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zUzBGQlN6czdPenM3T3p0QlEzaENNVUlzWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU42UWl4VlFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eFZRVUZUTEVOQlFVTXNSVUZCUlR0QlFVTnFReXhqUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVN1FVRkRka01zYVVKQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU5tTEhGQ1FVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0alFVTnlRanRWUVVOS08wRkJRMFFzWjBKQlFVOHNTVUZCU1N4RFFVRkRPMDFCUTJZc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTA3T3pzN096czdRVU5pY2tNc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSVHM3T3pzN08wRkJUWFpDTEZWQlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hIUVVGSExGVkJRVk1zVVVGQlVTeEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTXZReXhoUVVGSkxFOUJRVThzVVVGQlVTeExRVUZMTEZWQlFWVXNSVUZCUlR0QlFVTm9ReXh0UWtGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXp0VlFVTndSRHRCUVVORUxHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExHbENRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMVZCUTNKRk8wRkJRMFFzWjBKQlFVOHNTMEZCU3l4RFFVRkRPMDFCUTJoQ0xFTkJRVU03UlVGRFREczdjMEpCUldNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKT3pzN096czdPMEZEYmtKdVF5eGhRVUZaTEVOQlFVTTdPenM3T3pzN1FVRkZZaXhMUVVGSkxHVkJRV01zUlVGQlJUczdPenM3TzBGQlRXaENMRmRCUVUwc1EwRkJReXhOUVVGTkxFZEJRVWNzVlVGQlV5eEpRVUZKTEVWQlFVVTdRVUZETTBJc1owSkJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl3d1FrRkJNRUlzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0TlFVTXpSQ3hEUVVGRE8wVkJRMHc3T3pzN096czdPenRCUTFoRUxHMUNRVUZyUWl4M1JEczdPenM3TzBGRFFXeENPMEZCUTBFc2QwUTdPenM3T3p0QlEwUkJPMEZCUTBFN1FVRkRRU3g1UkVGQmQwUTdPMEZCUlhoRUxDdENRVUU0UWl3MFFrRkJORUlzWjBKQlFXZENMRWRCUVVjN096czdPenM3UVVOS04wVTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h2UlVGQmJVVTdRVUZEYmtVc2MwWkJRWEZHTzBGQlEzSkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTE8wRkJRMHdzWjBWQlFTdEVPMEZCUXk5RU8wRkJRMEU3UVVGRFFUdEJRVU5CTEdWQlFXTTdRVUZEWkN4bFFVRmpPMEZCUTJRc1pVRkJZenRCUVVOa0xHVkJRV003UVVGRFpDeG5Ra0ZCWlR0QlFVTm1MR2RDUVVGbE8wRkJRMllzTUVJN096czdPenRCUXpkRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4M1EwRkJkVU1zWjBNN096czdPenRCUTBoMlF5dzRRa0ZCTmtJN1FVRkROMElzYzBOQlFYRkRMR2RET3pzN096czdRVU5FY2tNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIT3pzN096czdRVU51UWtFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUnpzN096czdPMEZEU0VFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWM3T3pzN096dEJRMUJCTEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eHRRa0ZCYlVJc1JVRkJSVHM3T3p0QlFVbDJReXhYUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEcxQ1FVRnRRaXhIUVVGSExGbEJRVmM3UVVGRE9VTXNZVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU51UWl4dFFrRkJUU3hKUVVGSkxGVkJRVlVzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8xVkJRMjVFTzBGQlEwUXNZVUZCU1N4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExIZENRVUYzUWl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRMnhHTEdGQlFVa3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWjBOQlFXZERMRVZCUVVVc1ZVRkJReXhGUVVGRkxFVkJRVXM3UVVGRGFrVXNjVUpCUVZFc1JVRkJSVHRCUVVOV0xITkNRVUZMTEV0QlFVczdRVUZCUlN3MFFrRkJUeXhqUVVGakxFTkJRVU03UVVGRGJFTXNjMEpCUVVzc1NVRkJTVHRCUVVGRkxEUkNRVUZQTEVsQlFVa3NRMEZCUXp0QlFVTjJRaXh6UWtGQlN5eEpRVUZKTzBGQlFVVXNORUpCUVU4c2FVSkJRV2xDTEVOQlFVTTdRVUZEY0VNc2MwSkJRVXNzUjBGQlJ6dEJRVUZGTERSQ1FVRlBMRTlCUVU4c1EwRkJRenRCUVVONlFpeHpRa0ZCU3l4SFFVRkhPMEZCUVVVc05FSkJRVThzVFVGQlRTeERRVUZETzBGQlEzaENMSE5DUVVGTExFZEJRVWM3UVVGQlJTdzBRa0ZCVHl4UFFVRlBMRU5CUVVNN1FVRkJRU3hqUVVONFFqdFZRVU5LTEVOQlFVTXNRMEZCUXp0QlFVTklMR2RDUVVGUExFbEJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03VFVGRE5VTXNRMEZCUXp0RlFVTk1PMEZCUTBRc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZPMEZCUTNKQ0xGZEJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNN1JVRkROMFE3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zYlVKQlFXMUNPenM3T3pzN08wRkROVUp1UkN4aFFVRlpMRU5CUVVNN096czdPenR4UWtGRlRpeEZRVUZsT3p0QlFVVjBRaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRVZCUVVVN096czdPMEZCUzNwQ0xGZEJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZNc1YwRkJWeXhGUVVGRk8wRkJRek5ETEdGQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGJFUXNZVUZCU1N4WFFVRlhMRVZCUVVVc1QwRkJUeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBNc1owSkJRVThzVFVGQlRTeERRVUZETzAxQlEycENMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTE96czdPenM3TzBGRGFFSnlReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1YwRkJWeXhGUVVGRk8wRkJReTlDTEZkQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1YwRkJWeXhIUVVGSExGbEJRVmM3UVVGRGRFTXNaMEpCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eG5RMEZCWjBNc1JVRkJSU3hWUVVGRExFVkJRVVVzUlVGQlN6dEJRVU14UkN4eFFrRkJVU3hGUVVGRk8wRkJRMVlzYzBKQlFVc3NUVUZCVFR0QlFVRkZMRFJDUVVGUExFZEJRVWNzUTBGQlF6dEJRVU40UWl4elFrRkJTeXhOUVVGTk8wRkJRVVVzTkVKQlFVOHNSMEZCUnl4RFFVRkRPMEZCUTNoQ0xITkNRVUZMTEU5QlFVODdRVUZCUlN3MFFrRkJUeXhIUVVGSExFTkJRVU03UVVGRGVrSXNjMEpCUVVzc1QwRkJUenRCUVVGRkxEUkNRVUZQTEVkQlFVY3NRMEZCUXp0QlFVTjZRaXh6UWtGQlN5eFBRVUZQTzBGQlFVVXNORUpCUVU4c1IwRkJSeXhEUVVGRE8wRkJRM3BDTzBGQlFWTXNORUpCUVU4c1JVRkJSU3hEUVVGRE8wRkJRVUVzWTBGRGJFSTdWVUZEU2l4RFFVRkRMRU5CUVVNN1RVRkRUanRGUVVOS096dHpRa0ZGWXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGZEJRVmM3T3pzN096czdRVU5xUWpORExHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFVkJRVVU3UVVGRE4wSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFZEJRVWNzVlVGQlV5eEhRVUZITEVWQlFVVTdRVUZEZGtNc1lVRkJTU3hIUVVGSExFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NSMEZCUnl4SFFVRkhMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRGVFTXNZVUZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETVVJc1owSkJRVThzUTBGQlF5eERRVUZETzAxQlExb3NRMEZCUXp0RlFVTk1PenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNN096czdPenM3UVVOV2VrTXNZVUZCV1N4RFFVRkRPenM3T3p0QlFVVmlMRXRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlRzN096dEJRVWsxUWl4VFFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUjBGQlJ5eFZRVUZUTEVkQlFVY3NSVUZCUlR0QlFVRkZMRmxCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVGRkxFTkJRVU03UlVGRGFFWTdPM05DUVVWakxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVRzN096czdPenRCUTFSNFF5eGhRVUZaTEVOQlFVTTdPenM3T3p0eFFrRkZUaXhEUVVGdlFqczdjVUpCUTNCQ0xFVkJRV0U3TzBGQlJYQkNMRXRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlRzN096czdPenRCUVU4M1FpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1IwRkJSeXhWUVVGVExGTkJRVk1zUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RlFVRkZPenM3UVVGRGFFVXNZVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRMnBDTEdGQlFVa3NUMEZCVHl4SFFVRkhMRk5CUVZZc1QwRkJUenR2UWtGQlV5eFhRVUZWTEZGQlFWRXNRMEZCUXp0VlFVRkJMRU5CUVVNN1FVRkRlRU1zWVVGQlNTeFJRVUZSTEVkQlFVY3NVMEZCV0N4UlFVRlJPMjlDUVVGVExGZEJRVlVzVVVGQlVTeEZRVUZGTEVOQlFVTTdWVUZCUVN4RFFVRkRPenRCUVVVelF5eHJRa0ZCVXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRTlCUVU4c1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPenRCUVVWc1JpeGhRVUZKTEU5QlFVOHNUMEZCVHl4RlFVRkZMRXRCUVVzc1VVRkJVU3hGUVVGRk8wRkJReTlDTEcxQ1FVRk5MRWxCUVVrc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03VlVGRGRrUTdRVUZEUkN4clFrRkJVeXhIUVVGSExGRkJRVkVzUlVGQlJTeERRVUZET3p0QlFVVjJRaXhsUVVGTkxFZEJRVWNzVDBGQlR5eFBRVUZQTEVWQlFVVXNTMEZCU3l4UlFVRlJMRWRCUVVjc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZET3p0QlFVVjZSQ3hoUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wRkJRM1pETEdGQlFVa3NSVUZCUlN4TlFVRk5MRWRCUVVjc1UwRkJVeXhEUVVGRExFVkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdPMEZCUlhaRExHRkJRVWtzV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UVVGREwwTXNZVUZCU1N4WlFVRlpMRWRCUVVjc1UwRkJVeXhGUVVGRk8wRkJRekZDTEcxQ1FVRk5MRWxCUVVrc1ZVRkJWU3hEUVVGRExEUkRRVUUwUXl4RFFVRkRMRU5CUVVNN1ZVRkRkRVU3UVVGRFJDeGhRVUZKTEZsQlFWa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRkRUlzWVVGQlNTeGhRVUZoTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNSQ0xHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExHbENRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzWkNMR2xDUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wRkJReTlDTEdsQ1FVRkpMR0ZCUVdFc1IwRkJSeXhEUVVGRExFZEJRVWNzVTBGQlV5eEhRVUZITEZsQlFWa3NSVUZCUlN4TlFVRk5PMEZCUTNoRUxEQkNRVUZoTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTI1Q0xIbENRVUZaTEVsQlFVa3NRMEZCUXl4RFFVRkRPMVZCUTNKQ08wRkJRMFFzWjBKQlFVOHNXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJRenROUVVOb1F5eERRVUZETzBWQlEwdzdPM05DUVVWakxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVMEZCVXpzN096czdPenRCUXpsRGVrTXNZVUZCV1N4RFFVRkRPenM3T3pzN2NVSkJSVTRzUTBGQmIwSTdPMEZCUlROQ0xFdEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1JVRkJSVHM3T3pzN1FVRkxOMElzVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1ZVRkJVeXhUUVVGVExFVkJRVVU3T3p0QlFVTTNReXhoUVVGSkxGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYWtJc1lVRkJTU3hQUVVGUExFZEJRVWNzVTBGQlZpeFBRVUZQTzI5Q1FVRlRMRmRCUVZVc1VVRkJVU3hEUVVGRE8xVkJRVUVzUTBGQlF6dEJRVU40UXl4aFFVRkpMRkZCUVZFc1IwRkJSeXhUUVVGWUxGRkJRVkU3YjBKQlFWTXNWMEZCVlN4UlFVRlJMRVZCUVVVc1EwRkJRenRWUVVGQkxFTkJRVU03TzBGQlJUTkRMR3RDUVVGVExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzVDBGQlR5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGRGJFWXNZVUZCU1N4VFFVRlRMRXRCUVVzc1MwRkJTeXhGUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXpzN1FVRkZOVU1zWVVGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJZc1kwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEYkVNc2FVSkJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE0wSXNjVUpCUVZFc1MwRkJTenRCUVVOaUxITkNRVUZMTEVWQlFVVXNRMEZCUXl4SlFVRkpMRkZCUVZFc1EwRkJRenRCUVVOcVFpd3lRa0ZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOYUxESkNRVUZOTzBGQlExWXNjMEpCUVVzc1JVRkJSU3hQUVVGUExGTkJRVk1zUzBGQlN5eFJRVUZSTEVsQlFVa3NVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOc1JDd3lRa0ZCVFN4SlFVRkpMRk5CUVZNc1EwRkJRenRCUVVOd1Fpd3lRa0ZCVFR0QlFVTldMSE5DUVVGTExFVkJRVVVzUTBGQlF5eEpRVUZKTEZGQlFWRXNRMEZCUXp0QlFVTnFRaXd5UWtGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTmFMREpDUVVGTk8wRkJRMVlzYzBKQlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1VVRkJVU3hEUVVGRE8wRkJRMnBDTERKQ1FVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRMW9zTWtKQlFVMDdRVUZEVmp0QlFVTkpMREpDUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlFVRXNZMEZEWmp0VlFVTktPMEZCUTBRc1owSkJRVThzVFVGQlRTeERRVUZETzAxQlEycENMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVE96czdPenM3TzBGRGVrTjZReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRk96czdPenRCUVVzMVFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhWUVVGVExFZEJRVWNzUlVGQlJUdEJRVU4wUXl4aFFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETzAxQlF6bEVMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUk96czdPenM3TzBGRFluaERMR0ZCUVZrc1EwRkJRenM3T3pzN08zRkNRVVZPTEVOQlFXMUNPenRCUVVVeFFpeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRE1VSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzV1VGQlZ6czdPMEZCUTJwRExHZENRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2RVSkJRWFZDTEVWQlFVVXNWVUZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlN6dEJRVU42UkN4eFFrRkJVU3hGUVVGRk8wRkJRMVlzYzBKQlFVc3NTVUZCU1R0QlFVRkZMRFJDUVVGUExFZEJRVWNzUTBGQlF6dEJRVU4wUWl4elFrRkJTeXhKUVVGSk8wRkJRVVVzTkVKQlFVOHNSMEZCUnl4RFFVRkRPMEZCUTNSQ0xITkNRVUZMTEVsQlFVazdRVUZCUlN3MFFrRkJUeXhIUVVGSExFTkJRVU03UVVGRGRFSTdRVUZCVXl3MFFrRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhYUVVGVkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4WFFVRlZMRU5CUVVNc1EwRkJReXhoUVVGWkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZCUVN4alFVTjBTRHRWUVVOS0xFTkJRVU1zUTBGQlF6dE5RVU5PTzBWQlEwbzdPM05DUVVWakxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFRzN096czdPenRCUTJwQ2RFTXNZVUZCV1N4RFFVRkRPenM3T3p0QlFVVmlMRXRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEdWQlFXVXNSVUZCUlRzN096czdRVUZMYmtNc1YwRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eGxRVUZsTEVkQlFVY3NXVUZCVnp0QlFVTXhReXhoUVVGSkxFdEJRVXNzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJRenRCUVVOMFF5eGhRVUZKTEZOQlFWTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRia0lzWVVGQlNTeFBRVUZQTEdGQlFVTTdRVUZEV2l4blFrRkJUeXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRCUVVNdlFpeHBRa0ZCU1N4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzWkNMR2xDUVVGSkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzU1VGQlNTeEZRVUZGTzBGQlEzQkVMREJDUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yTkJRemxDTzFWQlEwbzdRVUZEUkN4blFrRkJUeXhUUVVGVExFTkJRVU03VFVGRGNFSXNRMEZCUXp0RlFVTk1PenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMR1ZCUVdVN096czdPenM3UVVOeVFpOURMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRVZCUVVVN096czdPMEZCU3pOQ0xGZEJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCUVZNc1NVRkJTU3hGUVVGRk8wRkJRM1JETEdGQlFVa3NSVUZCUlN4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRFlpeHRRa0ZCVFN4SlFVRkpMRlZCUVZVc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMVZCUXpsRE8wRkJRMFFzWVVGQlNTeFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRVZCUVVVc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTTdRVUZEYmtRc1lVRkJTU3hQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEycENMR05CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdRVUZEZUVNc2IwSkJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1ZVRkRla003UVVGRFJDeG5Ra0ZCVHl4UFFVRlBMRU5CUVVNN1RVRkRiRUlzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVODdPenM3T3pzN1FVTndRblpETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFpRVUZaTEVWQlFVVTdPenM3TzBGQlMyaERMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeEhRVUZITEZWQlFWTXNTVUZCU1N4RlFVRkZPMEZCUXpORExHRkJRVWtzUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkRZaXh0UWtGQlRTeEpRVUZKTEZWQlFWVXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eERRVUZETzFWQlF6bERPMEZCUTBRc1lVRkJTU3hQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVWQlFVVXNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU03UVVGRGJrUXNZVUZCU1N4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMnBDTEdOQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3UVVGRGVFTXNiMEpCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFZRVU4wUkR0QlFVTkVMR2RDUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0TlFVTTFRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldUczdPenM3T3p0QlEzQkNOVU1zWVVGQldTeERRVUZET3pzN096czdjVUpCUlU0c1JVRkJWVHM3UVVGRmFrSXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEZRVUZGT3pzN096czdRVUZOTTBJc1YwRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRk8wRkJRMnhFTEdGQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1VVRkJVU3hGUVVGRk8wRkJRelZDTEcxQ1FVRk5MRWxCUVVrc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xVkJRM0JFTzBGQlEwUXNZVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlF6bENMR0ZCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeE5RVUZOTEVWQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03UVVGRGJFUXNaMEpCUVU4c1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0TlFVTnNSU3hEUVVGRE8wVkJRMHc3UVVGRFJDeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRGVFSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNN1JVRkRjRVE3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR6czdPenM3T3p0QlEzWkNka01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJUczdPenM3UVVGTE1VSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzVlVGQlV5eExRVUZMTEVWQlFVVTdRVUZEZEVNc1lVRkJTU3hGUVVGRkxFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlR0QlFVTm1MRzFDUVVGTkxFbEJRVWtzVlVGQlZTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFTkJRVU03VlVGREwwTTdRVUZEUkN4aFFVRkpMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGFFSXNZMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNMVFpeHRRa0ZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFZRVU0zUWp0QlFVTkVMR2RDUVVGUExFMUJRVTBzUTBGQlF6dE5RVU5xUWl4RFFVRkRPMFZCUTB3N08zTkNRVVZqTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUVHM3T3pzN096dEJRMjVDZEVNc1lVRkJXU3hEUVVGRE96czdPenM3Y1VKQlJVNHNSVUZCWVRzN1FVRkZjRUlzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRk96czdPenRCUVV0NlFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVExGTkJRVk1zUlVGQlJUdEJRVU42UXl4blFrRkJUeXhEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dE5RVU4yUmp0RlFVTktPenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzN096czdPenM3UVVOa2NrTXNZVUZCV1N4RFFVRkRPenM3T3p0QlFVVmlMRXRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlR0QlFVTTNRaXhYUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSMEZCUnl4WlFVRlhPMEZCUTNCRExHZENRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRkxGVkJRVU1zUlVGQlJTeEZRVUZMTzBGQlEzaERMSEZDUVVGUkxFVkJRVVU3UVVGRFZpeHpRa0ZCU3l4SFFVRkhPMEZCUVVVc05FSkJRVThzVFVGQlRTeERRVUZETzBGQlEzaENMSE5DUVVGTExFZEJRVWM3UVVGQlJTdzBRa0ZCVHl4TlFVRk5MRU5CUVVNN1FVRkRlRUlzYzBKQlFVc3NSMEZCUnp0QlFVRkZMRFJDUVVGUExFOUJRVThzUTBGQlF6dEJRVU42UWl4elFrRkJTeXhIUVVGSE8wRkJRVVVzTkVKQlFVOHNUMEZCVHl4RFFVRkRPMEZCUTNwQ0xITkNRVUZMTEVkQlFVYzdRVUZCUlN3MFFrRkJUeXhQUVVGUExFTkJRVU03UVVGRGVrSTdRVUZCVXl3MFFrRkJUeXhGUVVGRkxFTkJRVU03UVVGQlFTeGpRVU5zUWp0VlFVTktMRU5CUVVNc1EwRkJRenROUVVOT08wVkJRMG83TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV6czdPenM3T3p0QlEycENla01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJUczdPenM3UVVGTGVrSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFZEJRVWNzVlVGQlV5eFhRVUZYTEVWQlFVVTdRVUZETTBNc1lVRkJTU3hQUVVGUExGZEJRVmNzUzBGQlN5eFRRVUZUTEVWQlFVVXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVONlJDeGhRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEyeERMR2xDUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03UVVGRE0wWXNhVUpCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRWUVVNNVJqdEJRVU5FTEdkQ1FVRlBMRWRCUVVjc1IwRkJSeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzAxQlF6TkNMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTE96czdPenM3TzBGRGFrSnlReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRk96czdPenRCUVV0NlFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVExFdEJRVXNzUlVGQlJUdEJRVUZGTEdkQ1FVRlBMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0TlFVRkZMRU5CUVVNN1JVRkRhRVk3UVVGRFJDeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNrSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1JVRkRMME03TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN6czdPenM3T3p0QlEySnlReXhoUVVGWkxFTkJRVU03T3pzN096dHhRa0ZGVGl4RlFVRlZPenRCUVVWcVFpeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFVkJRVVU3T3pzN096dEJRVTAxUWl4WFFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUjBGQlJ5eFZRVUZUTEUxQlFVMHNSVUZCUlN4UlFVRlJMRVZCUVVVN1FVRkRia1FzWVVGQlNTeFBRVUZQTEUxQlFVMHNTMEZCU3l4UlFVRlJMRVZCUVVVN1FVRkROVUlzYlVKQlFVMHNTVUZCU1N4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1ZVRkRjRVE3UVVGRFJDeGhRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU03UVVGRE9VSXNZVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFMUJRVTBzUlVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRCUVVOc1JDeG5Ra0ZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzAxQlEyeEZMRU5CUVVNN1JVRkRURHRCUVVORUxFdEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSVHRCUVVONFFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXp0RlFVTnlSRHM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUk96czdPenM3TzBGRGRrSjRReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hGUVVGRk96czdPMEZCU1RsQ0xGTkJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZNc1IwRkJSeXhGUVVGRk8wRkJRVVVzV1VGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVUZGTEVOQlFVTTdSVUZEYmtZN08zTkNRVVZqTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1ZVRkJWVHM3T3pzN096dEJRMVF4UXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUXpOQ0xGZEJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZjN1FVRkRiRU1zWVVGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1MwRkRaQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVU12UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRkxFVkJRVVU3UVVGRGJrVXNiMEpCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRWUVVNMVFqdEJRVU5FTEdkQ1FVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dE5RVU14UWl4RFFVRkRPMFZCUTB3N08zTkNRVVZqTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeUlzSW1acGJHVWlPaUp3Y205MGJ5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLVnh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmU3hjYmlCY2RGeDBYSFJwWkRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJHOWhaR1ZrT2lCbVlXeHpaVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzYjJGa1pXUWdQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLREFwTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnT0dKak9HVTFOemMyTW1aaE9XVTNNbVk0WVRsY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sdGNHOXlkQ0FuTGk5aGNuSmhlWE12WTI5dWRHRnBibk1uWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJWMlpYSjVKMXh1YVcxd2IzSjBJQ2N1TDJGeWNtRjVjeTltYVd4MFpYSW5YRzVwYlhCdmNuUWdKeTR2WVhKeVlYbHpMMlpwY25OMEoxeHVhVzF3YjNKMElDY3VMMkZ5Y21GNWN5OW1iR0YwVFdGd0oxeHVhVzF3YjNKMElDY3VMMkZ5Y21GNWN5OW5jbTkxY0VKNUoxeHVhVzF3YjNKMElDY3VMMkZ5Y21GNWN5OW5jbTkxY0dWa0oxeHVhVzF3YjNKMElDY3VMMkZ5Y21GNWN5OW5jbTkxY0dWa1VtbG5hSFFuWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJsdVkyeDFaR1VuWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJsdVpHVjRUMlluWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJselFYSnlZWGtuWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJwdmFXNVFZWFJvY3lkY2JtbHRjRzl5ZENBbkxpOWhjbkpoZVhNdmJHRnpkQ2RjYm1sdGNHOXlkQ0FuTGk5aGNuSmhlWE12YldGd0oxeHVhVzF3YjNKMElDY3VMMkZ5Y21GNWN5OXRZWGduWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDIxcGJpZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZjbUZ1WjJVblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwzSmxaSFZqWlNkY2JtbHRjRzl5ZENBbkxpOWhjbkpoZVhNdmNtVnRiM1psSjF4dWFXMXdiM0owSUNjdUwyRnljbUY1Y3k5emIyMWxKMXh1WEc1cGJYQnZjblFnSnk0dmNtVm5aWGh3Y3k5bGMyTmhjR1VuWEc1Y2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwyRnVkRk4wZVd4bFVHRjBhRlJ2VW1WblpYZ25YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTlpY2pKdWJDZGNibWx0Y0c5eWRDQW5MaTl6ZEhKcGJtZHpMMk52YlhCaGNtVlVieWRjYm1sdGNHOXlkQ0FuTGk5emRISnBibWR6TDJOdmJuUmhhVzV6SjF4dWFXMXdiM0owSUNjdUwzTjBjbWx1WjNNdlkzVjBjM1J5YVc1bkoxeHVhVzF3YjNKMElDY3VMM04wY21sdVozTXZaVzVrYzFkcGRHZ25YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTltYjNKdFlYUW5YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTltYjNKdFlYUldZWEpwWVdKc1pYTW5YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTluWlhSTVpXNW5kR2duWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5bmNtOTFjR1ZrSjF4dWFXMXdiM0owSUNjdUwzTjBjbWx1WjNNdlozSnZkWEJsWkZKcFoyaDBKMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012YkdWbWRGQmhaQ2RjYm1sdGNHOXlkQ0FuTGk5emRISnBibWR6TDI1c01tSnlKMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012Y1hWdmRHVW5YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTl5WldkbGVDZGNibWx0Y0c5eWRDQW5MaTl6ZEhKcGJtZHpMM0psY0dWaGRDZGNibWx0Y0c5eWRDQW5MaTl6ZEhKcGJtZHpMM0pwWjJoMFVHRmtKMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012YzNSaGNuUnpWMmwwYUNkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwzVnVjWFZ2ZEdVblhHNXBiWEJ2Y25RZ0p5NHZjM1J5YVc1bmN5OTRiV3hGYzJOaGNHVW5YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTk0Yld4VmJtVnpZMkZ3WlNkY2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMmx1WkdWNExtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBiWEJ2Y25RZ0p5NHZhVzVrWlhoUFppZGNibHh1YVdZZ0tDRkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVkyOXVkR0ZwYm5NcElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5cDlJR0ZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1amIyNTBZV2x1Y3lBOUlHWjFibU4wYVc5dUtHRXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWFXNWtaWGhQWmloaEtTQStQU0F3TzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG1OdmJuUmhhVzV6TzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwyTnZiblJoYVc1ekxtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVwYm1SbGVFOW1LU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNxZlNCcGRHVnRYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVwYm1SbGVFOW1JRDBnWm5WdVkzUnBiMjRvYVhSbGJTa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocElHbHVJSFJvYVhNZ0ppWWdkR2hwYzF0cFhTQTlQVDBnYVhSbGJTa2djbVYwZFhKdUlHazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG5CeWIzUnZkSGx3WlM1cGJtUmxlRTltTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwybHVaR1Y0VDJZdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbVYyWlhKNUtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdZMkZzYkdKaFkydGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5cDlJRnRqYjI1MFpYaDBYVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG1WMlpYSjVJRDBnWm5WdVkzUnBiMjRvWTJGc2JHSmhZMnNzSUdOdmJuUmxlSFFwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JV05oYkd4aVlXTnJMbU5oYkd3b1kyOXVkR1Y0ZENCOGZDQjBhR2x6TENCMGFHbHpXMmxkTENCcExDQjBhR2x6S1NrZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNWxkbVZ5ZVR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OWxkbVZ5ZVM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXMXdiM0owSUNjdUwyWnNZWFJOWVhBblhHNWNibWxtSUNnaFFYSnlZWGt1Y0hKdmRHOTBlWEJsTG1acGJIUmxjaWtnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdOaGJHeGlZV05yWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNxZlNCYlkyOXVkR1Y0ZEYxY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0QmNuSmhlWDFjYmlBZ0lDQWdLaTljYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVptbHNkR1Z5SUQwZ1puVnVZM1JwYjI0b1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Wm14aGRFMWhjQ2dvWVN3Z2FTa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOaGJHeGlZV05yTG1OaGJHd29ZMjl1ZEdWNGRDQjhmQ0IwYUdsekxDQmhMQ0JwTENCMGFHbHpLU2tnY21WMGRYSnVJR0U3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW1hV3gwWlhJN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTloY25KaGVYTXZabWxzZEdWeUxtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBiWEJ2Y25RZ0p5NHZhWE5CY25KaGVTZGNibHh1YVdZZ0tDRkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVpteGhkRTFoY0NrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHTmhiR3hpWVdOclhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhzcWZTQmJZMjl1ZEdWNGRGMWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlFRnljbUY1WEc0Z0lDQWdJQ292WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExtWnNZWFJOWVhBZ1BTQm1kVzVqZEdsdmJpaGpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVnpkV3gwY3lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNCallXeHNZbUZqYXk1allXeHNLR052Ym5SbGVIUWdmSHdnZEdocGN5d2dkR2hwYzF0cFhTd2dhU3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9RWEp5WVhrdWFYTkJjbkpoZVNoeVpYTjFiSFFwS1NCeVpYTjFiSFJ6TG5CMWMyZ3VZWEJ3Ykhrb2NtVnpkV3gwY3l3Z2NtVnpkV3gwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSEpsYzNWc2RDa2djbVZ6ZFd4MGN5NXdkWE5vS0hKbGMzVnNkQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkSE03WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1Wm14aGRFMWhjRHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwyRnljbUY1Y3k5bWJHRjBUV0Z3TG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVUZ5Y21GNUxtbHpRWEp5WVhrcElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5cDlJRzlpYWx4dUlDQWdJQ0FxSUVCemRHRjBhV05jYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lFRnljbUY1TG1selFYSnlZWGtnUFNCbWRXNWpkR2x2Ymlodlltb3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY3VZMkZzYkNodlltb3BJRDA5UFNBblcyOWlhbVZqZENCQmNuSmhlVjBuTzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG1selFYSnlZWGs3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OWhjbkpoZVhNdmFYTkJjbkpoZVM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXVabWx5YzNRcElIdGNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1Wm1seWMzUWdQU0JtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SUhSb2FYTmJNRjA3SUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW1hWEp6ZER0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OW1hWEp6ZEM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXVaM0p2ZFhCQ2VTa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR05oYkd4aVlXTnJYRzRnSUNBZ0lDb2dRSEJoY21GdElIc3FmU0JiWTI5dWRHVjRkRjFjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHQ3ZlgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVaM0p2ZFhCQ2VTQTlJR1oxYm1OMGFXOXVLR05oYkd4aVlXTnJMQ0JqYjI1MFpYaDBLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyRnNiR0poWTJzZ0lUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGpZV3hzWW1GamF5QXJJRndpSUdseklHNXZkQ0JoSUdaMWJtTjBhVzl1WENJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnZG1Gc2RXVWdQU0IwYUdselcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR3RsZVNBOUlHTmhiR3hpWVdOckxtTmhiR3dvWTI5dWRHVjRkQ0I4ZkNCMGFHbHpMQ0IyWVd4MVpTd2dhU3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hMlY1SUNFOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hMlY1SUdsdUlISmxjM1ZzZENsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MFcydGxlVjB1Y0hWemFDaDJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFJiYTJWNVhTQTlJRnQyWVd4MVpWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVozSnZkWEJDZVR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OW5jbTkxY0VKNUxtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVuY205MWNHVmtLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSE5wZW1WY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0QmNuSmhlVHhCY25KaGVUNTlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG1keWIzVndaV1FnUFNCbWRXNWpkR2x2YmloemFYcGxLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlaWE4xYkhSeklEMGdXMTA3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVzWlc1bmRHZzdJR2tnS3owZ2MybDZaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MGN5NXdkWE5vS0hSb2FYTXVjMnhwWTJVb2FTd2dhU0FySUhOcGVtVXBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBjenRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1WjNKdmRYQmxaRHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwyRnljbUY1Y3k5bmNtOTFjR1ZrTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW5jbTkxY0dWa1VtbG5hSFFwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYzJsNlpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwRnljbUY1UEVGeWNtRjVQbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVozSnZkWEJsWkZKcFoyaDBJRDBnWm5WdVkzUnBiMjRvYzJsNlpTa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVnpkV3gwY3lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ2RHaHBjeTVzWlc1bmRHZzdJR2tnUGlBd095QnBJQzA5SUhOcGVtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZEhNdWNIVnphQ2gwYUdsekxuTnNhV05sS0UxaGRHZ3ViV0Y0S0RBc0lHa2dMU0J6YVhwbEtTd2dhU2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFJ6TG5KbGRtVnljMlVvS1R0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVozSnZkWEJsWkZKcFoyaDBPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDJkeWIzVndaV1JTYVdkb2RDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElDY3VMMmx1WkdWNFQyWW5YRzVjYm1sbUlDZ2hRWEp5WVhrdWNISnZkRzkwZVhCbExtbHVZMngxWkdVcElIdGNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1YVc1amJIVmtaU0E5SUdaMWJtTjBhVzl1S0dFcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUdrZ1BTQjBhR2x6TG1sdVpHVjRUMllvWVNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hwSUQ0Z0xURXBYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpXMmxkSUQwZ1lUdGNiaUFnSUNBZ0lDQWdaV3h6WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2RYTm9LR0VwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVhVzVqYkhWa1pUdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDJGeWNtRjVjeTlwYm1Oc2RXUmxMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1cWIybHVVR0YwYUhNcElIdGNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1YW05cGJsQmhkR2h6SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJR3hsZENCd1lYUm9JRDBnSnljN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhOYmFWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NHRjBhQzVzWlc1bmRHZ2dQaUF3SUNZbUlIQmhkR2d1WTJoaGNrRjBLSEJoZEdndWJHVnVaM1JvSUMwZ01Ta2dJVDA5SUNjdkp5bGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0dGMGFDQXJQU0FuTHljN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndZWFJvSUNzOUlIUm9hWE5iYVYwdWRHOVRkSEpwYm1jb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NHRjBhRHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1YW05cGJsQmhkR2h6TzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwycHZhVzVRWVhSb2N5NXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGQmNuSmhlUzV3Y205MGIzUjVjR1V1YkdGemRDa2dlMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1c1lYTjBJRDBnWm5WdVkzUnBiMjRvS1NCN0lISmxkSFZ5YmlCMGFHbHpXM1JvYVhNdWJHVnVaM1JvSUMwZ01WMDdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG5CeWIzUnZkSGx3WlM1c1lYTjBPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDJ4aGMzUXVhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWxtSUNnaFFYSnlZWGt1Y0hKdmRHOTBlWEJsTG0xaGNDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR05oYkd4aVlXTnJYRzRnSUNBZ0lDb2dRSEJoY21GdElIc3FmU0JiWTI5dWRHVjRkRjFjYmlBZ0lDQWdLaTljYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWJXRndJRDBnWm5WdVkzUnBiMjRvWTJGc2JHSmhZMnNzSUdOdmJuUmxlSFFwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJRnRkTzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNVHNnYVNBOFBTQjBhR2x6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFF1Y0hWemFDaGpZV3hzWW1GamF5NWpZV3hzS0dOdmJuUmxlSFFnZkh3Z2RHaHBjeXdnZEdocGMxdHBYU3dnYVN3Z2RHaHBjeWtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1YldGd08xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMMjFoY0M1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXMXdiM0owSUNjdUwzSmxaSFZqWlNkY2JseHVhV1lnS0NGQmNuSmhlUzV3Y205MGIzUjVjR1V1YldGNEtTQjdYRzRnSUNBZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG0xaGVDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXlaV1IxWTJVb0tHRXNJR0lwSUQwK0lDaGhJRDRnWWlrZ1B5QmhJRG9nWWlrN1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWJXRjRPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDIxaGVDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGQmNuSmhlUzV3Y205MGIzUjVjR1V1Y21Wa2RXTmxLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnRjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUZ0amIyNTBaWGgwWFZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZXlwOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbkpsWkhWalpTQTlJR1oxYm1OMGFXOXVLR05oYkd4aVlXTnJMQ0JqYjI1MFpYaDBLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hLSFJvYVhNdWJHVnVaM1JvSUQ0Z01Da3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YQ0pTWldSMVkyVWdiMllnWlcxd2RIa2dZWEp5WVhrZ2QybDBhQ0J1YnlCcGJtbDBhV0ZzSUhaaGJIVmxYQ0lwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHeGxkQ0J5WlhOMWJIUWdQU0IwYUdseld6QmRPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Uc2dhU0E4UFNCMGFHbHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0JqWVd4c1ltRmpheTVqWVd4c0tHTnZiblJsZUhRZ2ZId2dkR2hwY3l3Z2NtVnpkV3gwTENCMGFHbHpXMmxkTENCcExDQjBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnpkV3gwTzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG5CeWIzUnZkSGx3WlM1eVpXUjFZMlU3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OWhjbkpoZVhNdmNtVmtkV05sTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cGJYQnZjblFnSnk0dmNtVmtkV05sSjF4dVhHNXBaaUFvSVVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV0YVc0cElIdGNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1YldsdUlEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxaSFZqWlNnb1lTd2dZaWtnUFQ0Z0tHRWdQQ0JpS1NBL0lHRWdPaUJpS1R0Y2JpQWdJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG5CeWIzUnZkSGx3WlM1dGFXNDdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5aGNuSmhlWE12YldsdUxtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVVGeWNtRjVMbkpoYm1kbEtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOGMzUnlhVzVuZlNCbWNtOXRYRzRnSUNBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOGMzUnlhVzVuZlNCMGIxeHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCemRHVndYRzRnSUNBZ0lDb2dRSE4wWVhScFkxeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwRnljbUY1ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUZ5Y21GNUxuSmhibWRsSUQwZ1puVnVZM1JwYjI0b1puSnZiU3dnZEc4c0lITjBaWEFnUFNBeEtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCeVlXNW5aU0E5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYVhOT2RXMWlaWElnUFNCMGVYQmxiMllnWm5KdmJTQTlQVDBnSjI1MWJXSmxjaWNnSmlZZ2RIbHdaVzltSUhSdklEMDlQU0FuYm5WdFltVnlKenRjYmlBZ0lDQWdJQ0FnYkdWMElHSmxaMmx1SUQwZ2FYTk9kVzFpWlhJZ1B5Qm1jbTl0SURvZ1puSnZiUzUwYjFOMGNtbHVaeWdwTG1Ob1lYSkRiMlJsUVhRb01DazdYRzRnSUNBZ0lDQWdJR3hsZENCbGJtUWdQU0JwYzA1MWJXSmxjaUEvSUhSdklEb2dkRzh1ZEc5VGRISnBibWNvS1M1amFHRnlRMjlrWlVGMEtEQXBPMXh1SUNBZ0lDQWdJQ0J6ZEdWd0lEMGdUV0YwYUM1aFluTW9jM1JsY0NrZ2ZId2dNVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHSmxaMmx1SUQ0Z1pXNWtLU0J6ZEdWd0lEMGdMWE4wWlhBN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0JpWldkcGJqc2djM1JsY0NBK0lEQWdQeUJwSUR3OUlHVnVaQ0E2SUdrZ1BqMGdaVzVrT3lCcElDczlJSE4wWlhBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKaGJtZGxMbkIxYzJnb2FYTk9kVzFpWlhJZ1B5QnBJRG9nVTNSeWFXNW5MbVp5YjIxRGFHRnlRMjlrWlNocEtTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpoYm1kbE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuSmhibWRsTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwzSmhibWRsTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXlaVzF2ZG1VcElIdGNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1Y21WdGIzWmxJRDBnWm5WdVkzUnBiMjRvWVNrZ2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnZEdocGN5NXNaVzVuZEdnZ0xTQXhPeUJwSUQ0OUlEQTdJQzB0YVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE5iYVYwZ1BUMDlJR0VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk53YkdsalpTaHBMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVjbVZ0YjNabE8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMM0psYlc5MlpTNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGQmNuSmhlUzV3Y205MGIzUjVjR1V1YzI5dFpTa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR05oYkd4aVlXTnJYRzRnSUNBZ0lDb2dRSEJoY21GdElIc3FmU0JiWTI5dWRHVjRkRjFjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1emIyMWxJRDBnWm5WdVkzUnBiMjRvWTJGc2JHSmhZMnNzSUdOdmJuUmxlSFFwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQmpZV3hzWW1GamF5QWhQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLR05oYkd4aVlXTnJJQ3NnWENJZ2FYTWdibTkwSUdFZ1puVnVZM1JwYjI1Y0lpazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyRnNiR0poWTJzdVkyRnNiQ2hqYjI1MFpYaDBJSHg4SUhSb2FYTXNJSFJvYVhOYmFWMHNJR2tzSUhSb2FYTXBLU0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG5OdmJXVTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5aGNuSmhlWE12YzI5dFpTNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGU1pXZEZlSEF1WlhOallYQmxLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJSFJsZUhSY2JpQWdJQ0FnS2lCQWMzUmhkR2xqWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VTNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lGSmxaMFY0Y0M1bGMyTmhjR1VnUFNCbWRXNWpkR2x2YmloMFpYaDBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwWlhoMExuSmxjR3hoWTJVb0wxc3RXMXhjWFh0OUtDa3FLejh1TEZ4Y1hGeGVKSHdqWEZ4elhTOW5MQ0FuWEZ4Y1hDUW1KeWs3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VtVm5SWGh3TG1WelkyRndaVHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwzSmxaMlY0Y0hNdlpYTmpZWEJsTG1welhHNGdLaW92SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN0lGd2laR1ZtWVhWc2RGd2lPaUJ5WlhGMWFYSmxLRndpWTI5eVpTMXFjeTlzYVdKeVlYSjVMMlp1TDNKbFoyVjRjQzlsYzJOaGNHVmNJaWtzSUY5ZlpYTk5iMlIxYkdVNklIUnlkV1VnZlR0Y2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5aVlXSmxiQzF5ZFc1MGFXMWxMMk52Y21VdGFuTXZjbVZuWlhod0wyVnpZMkZ3WlM1cWMxeHVJQ29xSUcxdlpIVnNaU0JwWkNBOUlESXlYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENKeVpYRjFhWEpsS0NjdUxpOHVMaTl0YjJSMWJHVnpMMlZ6Tnk1eVpXZGxlSEF1WlhOallYQmxKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dUx5NHVMMjF2WkhWc1pYTXZKQzVqYjNKbEp5a3VVbVZuUlhod0xtVnpZMkZ3WlR0Y2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5amIzSmxMV3B6TDJ4cFluSmhjbmt2Wm00dmNtVm5aWGh3TDJWelkyRndaUzVxYzF4dUlDb3FJRzF2WkhWc1pTQnBaQ0E5SURJelhHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0l2THlCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlltVnVhbUZ0YVc1bmNpOVNaWGhGZUhBdVpYTmpZWEJsWEc1MllYSWdKR1Y0Y0c5eWRDQTlJSEpsY1hWcGNtVW9KeTR2SkM1bGVIQnZjblFuS1Z4dUlDQXNJQ1J5WlNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1THlRdWNtVndiR0ZqWlhJbktTZ3ZXMXhjWEZ4ZUpDb3JQeTRvS1h4YlhGeGRlMzFkTDJjc0lDZGNYRnhjSkNZbktUdGNibHh1SkdWNGNHOXlkQ2drWlhod2IzSjBMbE1zSUNkU1pXZEZlSEFuTENCN1pYTmpZWEJsT2lCbWRXNWpkR2x2YmlCbGMyTmhjR1VvYVhRcGV5QnlaWFIxY200Z0pISmxLR2wwS1RzZ2ZYMHBPMXh1WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZaWE0zTG5KbFoyVjRjQzVsYzJOaGNHVXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F5TkZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lkbUZ5SUdkc2IySmhiQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZKQzVuYkc5aVlXd25LVnh1SUNBc0lHTnZjbVVnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2SkM1amIzSmxKeWxjYmlBZ0xDQmpkSGdnSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1THlRdVkzUjRKeWxjYmlBZ0xDQlFVazlVVDFSWlVFVWdQU0FuY0hKdmRHOTBlWEJsSnp0Y2JseHVkbUZ5SUNSbGVIQnZjblFnUFNCbWRXNWpkR2x2YmloMGVYQmxMQ0J1WVcxbExDQnpiM1Z5WTJVcGUxeHVJQ0IyWVhJZ1NWTmZSazlTUTBWRUlEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVJseHVJQ0FnSUN3Z1NWTmZSMHhQUWtGTUlEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVIxeHVJQ0FnSUN3Z1NWTmZVMVJCVkVsRElEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVUxeHVJQ0FnSUN3Z1NWTmZVRkpQVkU4Z0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVVGeHVJQ0FnSUN3Z1NWTmZRa2xPUkNBZ0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVFseHVJQ0FnSUN3Z1NWTmZWMUpCVUNBZ0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVYxeHVJQ0FnSUN3Z1pYaHdiM0owY3lBZ0lEMGdTVk5mUjB4UFFrRk1JRDhnWTI5eVpTQTZJR052Y21WYmJtRnRaVjBnZkh3Z0tHTnZjbVZiYm1GdFpWMGdQU0I3ZlNsY2JpQWdJQ0FzSUhSaGNtZGxkQ0FnSUNBOUlFbFRYMGRNVDBKQlRDQS9JR2RzYjJKaGJDQTZJRWxUWDFOVVFWUkpReUEvSUdkc2IySmhiRnR1WVcxbFhTQTZJQ2huYkc5aVlXeGJibUZ0WlYwZ2ZId2dlMzBwVzFCU1QxUlBWRmxRUlYxY2JpQWdJQ0FzSUd0bGVTd2diM2R1TENCdmRYUTdYRzRnSUdsbUtFbFRYMGRNVDBKQlRDbHpiM1Z5WTJVZ1BTQnVZVzFsTzF4dUlDQm1iM0lvYTJWNUlHbHVJSE52ZFhKalpTbDdYRzRnSUNBZ0x5OGdZMjl1ZEdGcGJuTWdhVzRnYm1GMGFYWmxYRzRnSUNBZ2IzZHVJRDBnSVVsVFgwWlBVa05GUkNBbUppQjBZWEpuWlhRZ0ppWWdhMlY1SUdsdUlIUmhjbWRsZER0Y2JpQWdJQ0JwWmlodmQyNGdKaVlnYTJWNUlHbHVJR1Y0Y0c5eWRITXBZMjl1ZEdsdWRXVTdYRzRnSUNBZ0x5OGdaWGh3YjNKMElHNWhkR2wyWlNCdmNpQndZWE56WldSY2JpQWdJQ0J2ZFhRZ1BTQnZkMjRnUHlCMFlYSm5aWFJiYTJWNVhTQTZJSE52ZFhKalpWdHJaWGxkTzF4dUlDQWdJQzh2SUhCeVpYWmxiblFnWjJ4dlltRnNJSEJ2Ykd4MWRHbHZiaUJtYjNJZ2JtRnRaWE53WVdObGMxeHVJQ0FnSUdWNGNHOXlkSE5iYTJWNVhTQTlJRWxUWDBkTVQwSkJUQ0FtSmlCMGVYQmxiMllnZEdGeVoyVjBXMnRsZVYwZ0lUMGdKMloxYm1OMGFXOXVKeUEvSUhOdmRYSmpaVnRyWlhsZFhHNGdJQ0FnTHk4Z1ltbHVaQ0IwYVcxbGNuTWdkRzhnWjJ4dlltRnNJR1p2Y2lCallXeHNJR1p5YjIwZ1pYaHdiM0owSUdOdmJuUmxlSFJjYmlBZ0lDQTZJRWxUWDBKSlRrUWdKaVlnYjNkdUlEOGdZM1I0S0c5MWRDd2daMnh2WW1Gc0tWeHVJQ0FnSUM4dklIZHlZWEFnWjJ4dlltRnNJR052Ym5OMGNuVmpkRzl5Y3lCbWIzSWdjSEpsZG1WdWRDQmphR0Z1WjJVZ2RHaGxiU0JwYmlCc2FXSnlZWEo1WEc0Z0lDQWdPaUJKVTE5WFVrRlFJQ1ltSUhSaGNtZGxkRnRyWlhsZElEMDlJRzkxZENBL0lDaG1kVzVqZEdsdmJpaERLWHRjYmlBZ0lDQWdJSFpoY2lCR0lEMGdablZ1WTNScGIyNG9jR0Z5WVcwcGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeUJwYm5OMFlXNWpaVzltSUVNZ1B5QnVaWGNnUXlod1lYSmhiU2tnT2lCREtIQmhjbUZ0S1R0Y2JpQWdJQ0FnSUgwN1hHNGdJQ0FnSUNCR1cxQlNUMVJQVkZsUVJWMGdQU0JEVzFCU1QxUlBWRmxRUlYwN1hHNGdJQ0FnSUNCeVpYUjFjbTRnUmp0Y2JpQWdJQ0F2THlCdFlXdGxJSE4wWVhScFl5QjJaWEp6YVc5dWN5Qm1iM0lnY0hKdmRHOTBlWEJsSUcxbGRHaHZaSE5jYmlBZ0lDQjlLU2h2ZFhRcElEb2dTVk5mVUZKUFZFOGdKaVlnZEhsd1pXOW1JRzkxZENBOVBTQW5ablZ1WTNScGIyNG5JRDhnWTNSNEtFWjFibU4wYVc5dUxtTmhiR3dzSUc5MWRDa2dPaUJ2ZFhRN1hHNGdJQ0FnYVdZb1NWTmZVRkpQVkU4cEtHVjRjRzl5ZEhOYlVGSlBWRTlVV1ZCRlhTQjhmQ0FvWlhod2IzSjBjMXRRVWs5VVQxUlpVRVZkSUQwZ2UzMHBLVnRyWlhsZElEMGdiM1YwTzF4dUlDQjlYRzU5TzF4dUx5OGdkSGx3WlNCaWFYUnRZWEJjYmlSbGVIQnZjblF1UmlBOUlERTdJQ0F2THlCbWIzSmpaV1JjYmlSbGVIQnZjblF1UnlBOUlESTdJQ0F2THlCbmJHOWlZV3hjYmlSbGVIQnZjblF1VXlBOUlEUTdJQ0F2THlCemRHRjBhV05jYmlSbGVIQnZjblF1VUNBOUlEZzdJQ0F2THlCd2NtOTBiMXh1SkdWNGNHOXlkQzVDSUQwZ01UWTdJQzh2SUdKcGJtUmNiaVJsZUhCdmNuUXVWeUE5SURNeU95QXZMeUIzY21Gd1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDUmxlSEJ2Y25RN1hHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12SkM1bGVIQnZjblF1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBeU5WeHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpTHk4Z2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwzcHNiMmx5YjJOckwyTnZjbVV0YW5NdmFYTnpkV1Z6THpnMkkybHpjM1ZsWTI5dGJXVnVkQzB4TVRVM05Ua3dNamhjYm5aaGNpQm5iRzlpWVd3Z1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZDJsdVpHOTNMazFoZEdnZ1BUMGdUV0YwYUZ4dUlDQS9JSGRwYm1SdmR5QTZJSFI1Y0dWdlppQnpaV3htSUNFOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhObGJHWXVUV0YwYUNBOVBTQk5ZWFJvSUQ4Z2MyVnNaaUE2SUVaMWJtTjBhVzl1S0NkeVpYUjFjbTRnZEdocGN5Y3BLQ2s3WEc1cFppaDBlWEJsYjJZZ1gxOW5JRDA5SUNkdWRXMWlaWEluS1Y5Zlp5QTlJR2RzYjJKaGJEc2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MTFibVJsWmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMeVF1WjJ4dlltRnNMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTWpaY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJblpoY2lCamIzSmxJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3ZG1WeWMybHZiam9nSnpFdU1pNDJKMzA3WEc1cFppaDBlWEJsYjJZZ1gxOWxJRDA5SUNkdWRXMWlaWEluS1Y5ZlpTQTlJR052Y21VN0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXeHBibVVnYm04dGRXNWtaV1pjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OGtMbU52Y21VdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXlOMXh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aUx5OGdiM0IwYVc5dVlXd2dMeUJ6YVcxd2JHVWdZMjl1ZEdWNGRDQmlhVzVrYVc1blhHNTJZWElnWVVaMWJtTjBhVzl1SUQwZ2NtVnhkV2x5WlNnbkxpOGtMbUV0Wm5WdVkzUnBiMjRuS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b1ptNHNJSFJvWVhRc0lHeGxibWQwYUNsN1hHNGdJR0ZHZFc1amRHbHZiaWhtYmlrN1hHNGdJR2xtS0hSb1lYUWdQVDA5SUhWdVpHVm1hVzVsWkNseVpYUjFjbTRnWm00N1hHNGdJSE4zYVhSamFDaHNaVzVuZEdncGUxeHVJQ0FnSUdOaGMyVWdNVG9nY21WMGRYSnVJR1oxYm1OMGFXOXVLR0VwZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1p1TG1OaGJHd29kR2hoZEN3Z1lTazdYRzRnSUNBZ2ZUdGNiaUFnSUNCallYTmxJREk2SUhKbGRIVnliaUJtZFc1amRHbHZiaWhoTENCaUtYdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbWJpNWpZV3hzS0hSb1lYUXNJR0VzSUdJcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnWTJGelpTQXpPaUJ5WlhSMWNtNGdablZ1WTNScGIyNG9ZU3dnWWl3Z1l5bDdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptNHVZMkZzYkNoMGFHRjBMQ0JoTENCaUxDQmpLVHRjYmlBZ0lDQjlPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpZ3ZLaUF1TGk1aGNtZHpJQ292S1h0Y2JpQWdJQ0J5WlhSMWNtNGdabTR1WVhCd2JIa29kR2hoZEN3Z1lYSm5kVzFsYm5SektUdGNiaUFnZlR0Y2JuMDdYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdkpDNWpkSGd1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBeU9GeHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZENsN1hHNGdJR2xtS0hSNWNHVnZaaUJwZENBaFBTQW5ablZ1WTNScGIyNG5LWFJvY205M0lGUjVjR1ZGY25KdmNpaHBkQ0FySUNjZ2FYTWdibTkwSUdFZ1puVnVZM1JwYjI0aEp5azdYRzRnSUhKbGRIVnliaUJwZER0Y2JuMDdYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdkpDNWhMV1oxYm1OMGFXOXVMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTWpsY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9jbVZuUlhod0xDQnlaWEJzWVdObEtYdGNiaUFnZG1GeUlISmxjR3hoWTJWeUlEMGdjbVZ3YkdGalpTQTlQVDBnVDJKcVpXTjBLSEpsY0d4aFkyVXBJRDhnWm5WdVkzUnBiMjRvY0dGeWRDbDdYRzRnSUNBZ2NtVjBkWEp1SUhKbGNHeGhZMlZiY0dGeWRGMDdYRzRnSUgwZ09pQnlaWEJzWVdObE8xeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9hWFFwZTF4dUlDQWdJSEpsZEhWeWJpQlRkSEpwYm1jb2FYUXBMbkpsY0d4aFkyVW9jbVZuUlhod0xDQnlaWEJzWVdObGNpazdYRzRnSUgwN1hHNTlPMXh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekx5UXVjbVZ3YkdGalpYSXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F6TUZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WVc1MFUzUjViR1ZRWVhSb1ZHOVNaV2RsZUNrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxSmxaMFY0Y0gxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbUZ1ZEZOMGVXeGxVR0YwYUZSdlVtVm5aWGdnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2loY0lsQmhkR2dnYlhWemRDQnViM1FnWW1VZ1pXMXdkSGt1WENJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCd1lYUm9JRDBnZEdocGN5NXlaWEJzWVdObEtDOWNYQzk3TWl4OUwyY3NJQ2N2SnlrdWNtVndiR0ZqWlNndld5MWJYRnhkZTMwb0tTc3VMRnhjWEZ4ZUpId2pYRnh6WFM5bkxDQW5YRnhjWENRbUp5azdYRzRnSUNBZ0lDQWdJR3hsZENCd1lYUjBaWEp1SUQwZ2NHRjBhQzV5WlhCc1lXTmxLQzhvS0Z4Y0x6OWNYQ3BjWENvcGZDaGNYQzgvWEZ3cUtYd29YRncvS1h3b1hGd3ZLU2t2Wnl3Z0tDUXdLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLQ1F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDY3ZLaW9uT2lCeVpYUjFjbTRnSnlnL09pOTdNU3g5TGlvcFB5YzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2NxS2ljNklISmxkSFZ5YmlBbkxpb25PMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuTHlvbk9pQnlaWFIxY200Z0p5Zy9PaTk3TVN4OVcxNHZYU29wUHljN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDY3FKem9nY21WMGRYSnVJQ2RiWGk5ZEtpYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2MvSnpvZ2NtVjBkWEp1SUNkYlhpOWRKenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSnk4bk9pQnlaWFIxY200Z0p5OTdNU3g5Snp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dVbVZuUlhod0tDZGVLQ2NnS3lCd1lYUjBaWEp1SUNzZ0p5a2tKeWs3WEc0Z0lDQWdmVHRjYm4xY2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVoS1NCN1hHNGdJQ0FnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVoSUQwZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1aGJuUlRkSGxzWlZCaGRHaFViMUpsWjJWNE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbUZ1ZEZOMGVXeGxVR0YwYUZSdlVtVm5aWGc3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OXpkSEpwYm1kekwyRnVkRk4wZVd4bFVHRjBhRlJ2VW1WblpYZ3Vhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWx0Y0c5eWRDQW5MaTk0Yld4VmJtVnpZMkZ3WlNkY2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1KeU1tNXNLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRpYjI5c1pXRnVmU0I0Yld4VmJtVnpZMkZ3WlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFOMGNtbHVaMzFjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtSnlNbTVzSUQwZ1puVnVZM1JwYjI0b2VHMXNWVzVsYzJOaGNHVXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISmxjM1ZzZENBOUlIUm9hWE11Y21Wd2JHRmpaU2d2S0R4aWNqNThQR0p5WEZ3dlBpa3ZaeXdnSjF4Y2JpY3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb2VHMXNWVzVsYzJOaGNHVXBJSEpsZEhWeWJpQnlaWE4xYkhRdWVHMXNWVzVsYzJOaGNHVW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbUp5TW01c08xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTlpY2pKdWJDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5odGJGVnVaWE5qWVhCbEtTQjdYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1NGJXeFZibVZ6WTJGd1pTQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXlaWEJzWVdObEtDOG9KbXgwTzN3bVozUTdmQ1lqTXpRN2ZDWWpNems3ZkNaaGJYQTdLUzluTENBb0pERXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4zYVhSamFDQW9KREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0p5WnNkRHNuT2lCeVpYUjFjbTRnSnp3bk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5KbWQwT3ljNklISmxkSFZ5YmlBblBpYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2NtSXpNME95YzZJSEpsZEhWeWJpQW5YQ0luTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbkppTXpPVHNuT2lCeVpYUjFjbTRnWENJblhDSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2NtWVcxd095YzZJSEpsZEhWeWJpQW5KaWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1poZFd4ME9pQnlaWFIxY200Z0pERTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzU0Yld4VmJtVnpZMkZ3WlR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZlRzFzVlc1bGMyTmhjR1V1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWpiMjF3WVhKbFZHOHBJSHRjYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtTnZiWEJoY21WVWJ5QTlJR1oxYm1OMGFXOXVLSE4wY2lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYzNSeUlEMDlJRzUxYkd3Z2ZId2dkR2hwY3lBK0lITjBjaWtnY21WMGRYSnVJREU3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6SUR3Z2MzUnlLU0J5WlhSMWNtNGdMVEU3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVkyOXRjR0Z5WlZSdk8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTlqYjIxd1lYSmxWRzh1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWpiMjUwWVdsdWN5a2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQnpkSEpjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtTnZiblJoYVc1eklEMGdablZ1WTNScGIyNG9jM1J5S1NCN0lISmxkSFZ5YmlCMGFHbHpMbWx1WkdWNFQyWW9jM1J5S1NBK0lDMHhPeUI5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtTnZiblJoYVc1ek8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTlqYjI1MFlXbHVjeTVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVcxd2IzSjBJQ2N1TGk5aGNuSmhlWE12WTI5dWRHRnBibk1uWEc1cGJYQnZjblFnSnk0dloyVjBUR1Z1WjNSb0oxeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVkzVjBjM1J5YVc1bktTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdGliMjlzWldGdWZHNTFiV0psY24wZ1cyTm9aV05yWW5sMFpWMGdZMmhsWTJzZ1lubDBaU0JzWlc1bmRHZ2dhV1lnZEhKMVpTNGdLR1JsWm1GMWJIUWdhWE1nWm1Gc2MyVXBYRzRnSUNBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHMWhlRXhsYm1kMGFDQjBhR1VnYldGNElHeGxibWQwYUM1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnVzNOMVptWnBlRjBnZEdobElITjFabVpwZUM1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0emRISnBibWQ5WEc0Z0lDQWdJQ292WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWpkWFJ6ZEhKcGJtY2dQU0JtZFc1amRHbHZiaWhqYUdWamEySjVkR1VzSUcxaGVFeGxibWQwYUN3Z2MzVm1abWw0S1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JoY21kSmJtUmxlQ0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JoY21kRGRYSnlJRDBnS0NrZ1BUNGdZWEpuZFcxbGJuUnpXMkZ5WjBsdVpHVjRYVHRjYmlBZ0lDQWdJQ0FnYkdWMElHRnlaMU5vYVdaMElEMGdLQ2tnUFQ0Z1lYSm5kVzFsYm5SelcyRnlaMGx1WkdWNEt5dGRPMXh1WEc0Z0lDQWdJQ0FnSUdOb1pXTnJZbmwwWlNBOUlGc25ZbTl2YkdWaGJpY3NJQ2R1ZFcxaVpYSW5YUzVqYjI1MFlXbHVjeWgwZVhCbGIyWWdZWEpuUTNWeWNpZ3BLU0EvSUdGeVoxTm9hV1owS0NrZ09pQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JR0Z5WjBOMWNuSW9LU0FoUFQwZ0oyNTFiV0psY2ljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1lYSm5RM1Z5Y2lncElDc2dYQ0lnYVhNZ2JtOTBJR0VnYm5WdFltVnlYQ0lwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHMWhlRXhsYm1kMGFDQTlJR0Z5WjFOb2FXWjBLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2MzVm1abWw0SUQwZ2RIbHdaVzltSUdGeVowTjFjbklvS1NBOVBUMGdKM04wY21sdVp5Y2dQeUJoY21kVGFHbG1kQ2dwSURvZ0p5YzdYRzVjYmlBZ0lDQWdJQ0FnYkdWMElHeGxibWQwYUNBOUlIUm9hWE11WjJWMFRHVnVaM1JvS0dOb1pXTnJZbmwwWlNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doS0d4bGJtZDBhQ0ErSUcxaGVFeGxibWQwYUNrcElISmxkSFZ5YmlCMGFHbHpPMXh1WEc0Z0lDQWdJQ0FnSUd4bGRDQnpkV1ptYVhoTVpXNW5kR2dnUFNCemRXWm1hWGd1WjJWMFRHVnVaM1JvS0dOb1pXTnJZbmwwWlNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZFdabWFYaE1aVzVuZEdnZ1BpQnRZWGhNWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLRndpVFdGNElHeGxibWQwYUNCdGRYTjBJR0psSUcxdmNtVWdkR2hoYmlCemRXWm1hWGdnYkdWdVozUm9YQ0lwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHeGxkQ0J5WlhOMWJIUlRkSEpwYm1jZ1BTQW5KenRjYmlBZ0lDQWdJQ0FnYkdWMElHTm9aV05yWldSTVpXNW5kR2dnUFNBd08xeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JqSUQwZ2RHaHBjeTVqYUdGeVFYUW9hU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYkNBOUlHTXVaMlYwVEdWdVozUm9LR05vWldOcllubDBaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTJobFkydGxaRXhsYm1kMGFDQXJJR3dnUGlCdFlYaE1aVzVuZEdnZ0xTQnpkV1ptYVhoTVpXNW5kR2dwSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyaGxZMnRsWkV4bGJtZDBhQ0FyUFNCc08xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBVM1J5YVc1bklDczlJR003WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRk4wY21sdVp5QXJJSE4xWm1acGVEdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbU4xZEhOMGNtbHVaenRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwzTjBjbWx1WjNNdlkzVjBjM1J5YVc1bkxtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBiWEJ2Y25RZ0p5NHVMMkZ5Y21GNWN5OWpiMjUwWVdsdWN5ZGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExtZGxkRXhsYm1kMGFDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdZbTl2YkdWaGJueHVkVzFpWlhKOUlGdGphR1ZqYTJKNWRHVmRJR05vWldOcklHSjVkR1VnYkdWdVozUm9JR2xtSUhSeWRXVXVJQ2hrWldaaGRXeDBJR2x6SUdaaGJITmxLVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1kbGRFeGxibWQwYUNBOUlHWjFibU4wYVc5dUtHTm9aV05yWW5sMFpTa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ1lYSm5TVzVrWlhnZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1lYSm5RM1Z5Y2lBOUlDZ3BJRDArSUdGeVozVnRaVzUwYzF0aGNtZEpibVJsZUYwN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JoY21kVGFHbG1kQ0E5SUNncElEMCtJR0Z5WjNWdFpXNTBjMXRoY21kSmJtUmxlQ3NyWFR0Y2JseHVJQ0FnSUNBZ0lDQmphR1ZqYTJKNWRHVWdQU0JiSjJKdmIyeGxZVzRuTENBbmJuVnRZbVZ5SjEwdVkyOXVkR0ZwYm5Nb2RIbHdaVzltSUdGeVowTjFjbklvS1NrZ1B5QmhjbWRUYUdsbWRDZ3BJRG9nWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJR2xtSUNoamFHVmphMko1ZEdVZ1BUMDlJR1poYkhObEtTQnlaWFIxY200Z2RHaHBjeTVzWlc1bmRHZzdYRzVjYmlBZ0lDQWdJQ0FnYkdWMElHeGxibWQwYUNBOUlEQTdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdNZ1BTQjBhR2x6TG1Ob1lYSkRiMlJsUVhRb2FTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCemQybDBZMmdnS0daaGJITmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNFb1l5QThQU0F3ZURBd01EQTNSaWs2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWdVozUm9JQ3M5SURFN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNFb2RIbHdaVzltSUdOb1pXTnJZbmwwWlNBOVBUMGdKMjUxYldKbGNpY2dKaVlnWTJobFkydGllWFJsSUQ0Z01DazZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1Z1WjNSb0lDczlJR05vWldOcllubDBaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdJU2hqSUR3OUlEQjRNREF3TjBaR0tUcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaVzVuZEdnZ0t6MGdNanRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdJU2hqSUR3OUlEQjRNREJHUmtaR0tUcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaVzVuZEdnZ0t6MGdNenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWdVozUm9JQ3M5SURRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUd4bGJtZDBhRHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1kbGRFeGxibWQwYUR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZaMlYwVEdWdVozUm9MbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVpXNWtjMWRwZEdncElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2MzUnlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1bGJtUnpWMmwwYUNBOUlHWjFibU4wYVc5dUtITjBjaWtnZTF4dUlDQWdJQ0FnSUNCc1pYUWdhU0E5SUhSb2FYTXViR0Z6ZEVsdVpHVjRUMllvYzNSeUtUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHa2dQaUF0TVNBbUppQnBJRDA5UFNCMGFHbHpMbXhsYm1kMGFDQXRJSE4wY2k1MGIxTjBjbWx1WnlncExteGxibWQwYUR0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtVnVaSE5YYVhSb08xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTlsYm1SelYybDBhQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVcxd2IzSjBJQ2N1TGk5aGNuSmhlWE12YVhOQmNuSmhlU2RjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbVp2Y20xaGRDa2dlMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVptOXliV0YwSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbGNHeGhZMlVvTHlnbkozd25YRng3ZkgwbmZGeGNleWhjWEhjcktYMHBMMmNzSUNna01Dd2dKREVzSUNReUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tDUXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUZ3aUp5ZGNJam9nY21WMGRYSnVJRndpSjF3aU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQmNJaWQ3WENJNklISmxkSFZ5YmlBbmV5YzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRndpZlNkY0lqb2djbVYwZFhKdUlDZDlKenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNklISmxkSFZ5YmlBb0lTOWVYRnhrS3lRdlp5NTBaWE4wS0NReUtTQS9JR0Z5WjNWdFpXNTBjMXN3WFNCOGZDQjdmU0E2SUVGeWNtRjVMbWx6UVhKeVlYa29ZWEpuZFcxbGJuUnpXekJkS1NBL0lHRnlaM1Z0Wlc1MGMxc3dYU0E2SUdGeVozVnRaVzUwY3lsYkpESmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Wm05eWJXRjBPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5bWIzSnRZWFF1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNW1iM0p0WVhSV1lYSnBZV0pzWlhNcElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5cDlJR0Z5WjNWdFpXNTBjMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRCY25KaGVUeHpkSEpwYm1jK2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Wm05eWJXRjBWbUZ5YVdGaWJHVnpJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J5WldkbGVDQTlJQzhvSnlkOEoxeGNlM3hjWEgwbmZGeGNleWhjWEhjcktWeGNmU2t2Wnp0Y2JpQWdJQ0FnSUNBZ2JHVjBJSFpoY21saFlteGxjeUE5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYldGMFkyaGxjenRjYmlBZ0lDQWdJQ0FnZDJocGJHVWdLRzFoZEdOb1pYTWdQU0J5WldkbGVDNWxlR1ZqS0hSb2FYTXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYldGMFkyZ2dQU0J0WVhSamFHVnpXekJkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0cxaGRHTm9JQ0U5UFNCY0lpY25YQ0lnSmlZZ2JXRjBZMmdnSVQwOUlGd2lKM3RjSWlBbUppQnRZWFJqYUNBaFBUMGdYQ0o5SjF3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5YVdGaWJHVnpMbkIxYzJnb2JXRjBZMmhsYzFzeVhTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhjbWxoWW14bGN6dGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbVp2Y20xaGRGWmhjbWxoWW14bGN6dGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDNOMGNtbHVaM012Wm05eWJXRjBWbUZ5YVdGaWJHVnpMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVozSnZkWEJsWkNrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCemFYcGxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdRWEp5WVhrOGMzUnlhVzVuUG4xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbWR5YjNWd1pXUWdQU0JtZFc1amRHbHZiaWh6YVhwbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaEtITnBlbVVnUGlBeEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGSmhibWRsUlhKeWIzSW9KMGx1ZG1Gc2FXUWdjMmw2WlNCMllXeDFaU2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjMmw2WlNBaFBUMGdKMjUxYldKbGNpY3BJSE5wZW1VZ1BTQndZWEp6WlVsdWRDaHphWHBsS1Z4dUlDQWdJQ0FnSUNCc1pYUWdjbVZ6ZFd4MGN5QTlJRnRkTzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11YkdWdVozUm9PeUJwSUNzOUlITnBlbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RITXVjSFZ6YUNoMGFHbHpMbk5zYVdObEtHa3NJR2tnS3lCemFYcGxLU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkSE03WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1bmNtOTFjR1ZrTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZjM1J5YVc1bmN5OW5jbTkxY0dWa0xtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WjNKdmRYQmxaRkpwWjJoMEtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlITnBlbVZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRCY25KaGVUeHpkSEpwYm1jK2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WjNKdmRYQmxaRkpwWjJoMElEMGdablZ1WTNScGIyNG9jMmw2WlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVNoemFYcGxJRDRnTVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZEpiblpoYkdsa0lITnBlbVVnZG1Gc2RXVW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlITnBlbVVnSVQwOUlDZHVkVzFpWlhJbktTQnphWHBsSUQwZ2NHRnljMlZKYm5Rb2MybDZaU2xjYmlBZ0lDQWdJQ0FnYkdWMElISmxjM1ZzZEhNZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlIUm9hWE11YkdWdVozUm9PeUJwSUQ0Z01Ec2dhU0F0UFNCemFYcGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhSekxuQjFjMmdvZEdocGN5NXpiR2xqWlNoTllYUm9MbTFoZUNnd0xDQnBJQzBnYzJsNlpTa3NJR2twS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnpkV3gwY3k1eVpYWmxjbk5sS0NrN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNW5jbTkxY0dWa1VtbG5hSFE3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OXpkSEpwYm1kekwyZHliM1Z3WldSU2FXZG9kQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVcxd2IzSjBJQ2N1TDNKbGNHVmhkQ2RjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbXhsWm5SUVlXUXBJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdiR1Z1WjNSb1hHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUdacGJHeERhR0Z5WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTNOMGNtbHVaMzFjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExteGxablJRWVdRZ1BTQm1kVzVqZEdsdmJpaHNaVzVuZEdnc0lHWnBiR3hEYUdGeUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnYkdWdVozUm9JQ0U5UFNBbmJuVnRZbVZ5SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loc1pXNW5kR2dnS3lBbklHbHpJRzV2ZENCaElHNTFiV0psY2ljcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR2xtSUNnaFptbHNiRU5vWVhJcElHWnBiR3hEYUdGeUlEMGdKeUFuTzF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1c1pXNW5kR2dnUGowZ2JHVnVaM1JvS1NCeVpYUjFjbTRnZEdocGN5NTBiMU4wY21sdVp5Z3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabWxzYkVOb1lYSXVjbVZ3WldGMEtHeGxibWQwYUNBdElIUm9hWE11YkdWdVozUm9LU0FySUhSb2FYTXVkRzlUZEhKcGJtY29LVHRjYmlBZ0lDQjlPMXh1ZlZ4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbXh3WVdRcElIdGNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG14d1lXUWdQU0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbXhsWm5SUVlXUTdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1YkdWbWRGQmhaRHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwzTjBjbWx1WjNNdmJHVm1kRkJoWkM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkpsY0dWaGRDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmpiM1Z1ZEZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzFjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuSmxjR1ZoZENBOUlHWjFibU4wYVc5dUtHTnZkVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doS0dOdmRXNTBJRDQ5SURBcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpZ25TVzUyWVd4cFpDQmpiM1Z1ZENCMllXeDFaU2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHeGxkQ0J5WlhOMWJIUWdQU0FuSnp0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmpiM1Z1ZERzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhRZ0t6MGdkR2hwY3k1MGIxTjBjbWx1WnlncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXlaWEJsWVhRN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTl6ZEhKcGJtZHpMM0psY0dWaGRDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElDY3VMM2h0YkVWelkyRndaU2RjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbTVzTW1KeUtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdGliMjlzWldGdWZTQjRiV3hGYzJOaGNHVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdjM1J5YVc1bmZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Ym13eVluSWdQU0JtZFc1amRHbHZiaWg0Yld4RmMyTmhjR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoNGJXeEZjMk5oY0dVZ1B5QjBhR2x6TG5odGJFVnpZMkZ3WlNncElEb2dkR2hwY3lrdWNtVndiR0ZqWlNndktGeGNjbHhjYm54Y1hHNWNYSEo4WEZ4eWZGeGNiaWt2Wnl3Z0p6eGljaTgrSnlrN1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtNXNNbUp5TzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZjM1J5YVc1bmN5OXViREppY2k1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbmh0YkVWelkyRndaU2tnZTF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVlRzFzUlhOallYQmxJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsY0d4aFkyVW9MeWc4ZkQ1OFhDSjhKM3dtS1M5bkxDQW9KREVwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ0FvSkRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKenduT2lCeVpYUjFjbTRnSnlac2REc25PMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuUGljNklISmxkSFZ5YmlBbkptZDBPeWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkY0lpYzZJSEpsZEhWeWJpQW5KaU16TkRzbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQmNJaWRjSWpvZ2NtVjBkWEp1SUNjbUl6TTVPeWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNjbUp6b2djbVYwZFhKdUlDY21ZVzF3T3ljN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBPaUJ5WlhSMWNtNGdKREU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1NGJXeEZjMk5oY0dVN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTl6ZEhKcGJtZHpMM2h0YkVWelkyRndaUzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExuRjFiM1JsS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0aWIyOXNaV0Z1ZlNCdmRtVnliR0Z3WVdKc1pWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzTjBjbWx1WjMxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkYxYjNSbElEMGdablZ1WTNScGIyNG9iM1psY214aGNHRmliR1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQnZkbVZ5YkdGd1lXSnNaU0FoUFQwZ0oySnZiMnhsWVc0bktTQnZkbVZ5YkdGd1lXSnNaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJR2xtSUNnaGIzWmxjbXhoY0dGaWJHVWdKaVlnZEdocGN5NXNaVzVuZEdnZ1BqMGdNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVZMmhoY2tGMEtEQXBJRDA5UFNBblhDSW5JQ1ltSUhSb2FYTXVZMmhoY2tGMEtIUm9hWE11YkdWdVozUm9JQzBnTVNrZ1BUMDlJQ2RjSWljcElISmxkSFZ5YmlCMGFHbHpMblJ2VTNSeWFXNW5LQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWphR0Z5UVhRb01Da2dQVDA5SUZ3aUoxd2lJQ1ltSUhSb2FYTXVZMmhoY2tGMEtIUm9hWE11YkdWdVozUm9JQzBnTVNrZ1BUMDlJRndpSjF3aUtTQnlaWFIxY200Z2RHaHBjeTUwYjFOMGNtbHVaeWdwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBblhDSW5JQ3NnZEdocGN5QXJJQ2RjSWljN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXhkVzkwWlR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZjWFZ2ZEdVdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV5WldkbGVDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQm1iR0ZuYzF4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0U1pXZEZlSEI5WEc0Z0lDQWdJQ292WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXlaV2RsZUNBOUlHWjFibU4wYVc5dUtHWnNZV2R6S1NCN0lISmxkSFZ5YmlCdVpYY2dVbVZuUlhod0tIUm9hWE1zSUdac1lXZHpLVHNnZlR0Y2JuMWNibWxtSUNnaFUzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eUtTQjdYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eUlEMGdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXlaV2RsZUR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXlaV2RsZUR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZjbVZuWlhndWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbHRjRzl5ZENBbkxpOXlaWEJsWVhRblhHNWNibWxtSUNnaFUzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eWFXZG9kRkJoWkNrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCc1pXNW5kR2hjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdabWxzYkVOb1lYSmNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdjM1J5YVc1bmZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Y21sbmFIUlFZV1FnUFNCbWRXNWpkR2x2Ymloc1pXNW5kR2dzSUdacGJHeERhR0Z5S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdiR1Z1WjNSb0lDRTlQU0FuYm5WdFltVnlKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhzWlc1bmRHZ2dLeUFuSUdseklHNXZkQ0JoSUc1MWJXSmxjaWNwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHbG1JQ2doWm1sc2JFTm9ZWElwSUdacGJHeERhR0Z5SUQwZ0p5QW5PMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVzWlc1bmRHZ2dQajBnYkdWdVozUm9LU0J5WlhSMWNtNGdkR2hwY3k1MGIxTjBjbWx1WnlncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTUwYjFOMGNtbHVaeWdwSUNzZ1ptbHNiRU5vWVhJdWNtVndaV0YwS0d4bGJtZDBhQ0F0SUhSb2FYTXViR1Z1WjNSb0tUdGNiaUFnSUNCOU8xeHVmVnh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExuSndZV1FwSUh0Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkp3WVdRZ1BTQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuSnBaMmgwVUdGa08xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkpwWjJoMFVHRmtPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5eWFXZG9kRkJoWkM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbk4wWVhKMGMxZHBkR2dwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnYzNSeVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV6ZEdGeWRITlhhWFJvSUQwZ1puVnVZM1JwYjI0b2MzUnlLU0I3SUhKbGRIVnliaUIwYUdsekxtbHVaR1Y0VDJZb2MzUnlLU0E5UFQwZ01Ec2dmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1emRHRnlkSE5YYVhSb08xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTl6ZEdGeWRITlhhWFJvTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVkVzV4ZFc5MFpTa2dlMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWRXNXhkVzkwWlNBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVzWlc1bmRHZ2dQajBnTWlBbUpseHVJQ0FnSUNBZ0lDQWdJQ0FnS0NoMGFHbHpMbU5vWVhKQmRDZ3dLU0E5UFQwZ0oxd2lKeUFtSmlCMGFHbHpMbU5vWVhKQmRDaDBhR2x6TG14bGJtZDBhQ0F0SURFcElEMDlQU0FuWENJbktTQjhmRnh1SUNBZ0lDQWdJQ0FnSUNBZ0tIUm9hWE11WTJoaGNrRjBLREFwSUQwOVBTQmNJaWRjSWlBbUppQjBhR2x6TG1Ob1lYSkJkQ2gwYUdsekxteGxibWQwYUNBdElERXBJRDA5UFNCY0lpZGNJaWtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emJHbGpaU2d4TENBdE1TazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWRHOVRkSEpwYm1jb0tUdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMblZ1Y1hWdmRHVTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDNWdWNYVnZkR1V1YW5OY2JpQXFLaThpWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvdG8uanMvZGlzdC9wcm90by5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkuZXh0ZW5kcyByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy93aW5kb3cuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbiQuZm4uZ3JvdXBCeSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZWxlbSA9IHRoaXNbaV07XG4gICAgICAgIGxldCBrZXkgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgZWxlbSwgZWxlbSwgaSwgdGhpcyk7XG4gICAgICAgIGlmIChrZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGtleSBpbiByZXN1bHQpXG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaChlbGVtKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9ICQoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZ3JvdXBCeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyb3VwQnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8SFRNTEVsZW1lbnQ+fGpRdWVyeTxIVE1MRWxlbWVudD59IGV4Y2x1ZGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbiQuZm4ubWF4WkluZGV4ID0gZnVuY3Rpb24oZXhjbHVkZXMpIHtcbiAgICBsZXQgekluZGV4ID0gMDtcbiAgICB0aGlzLmZpbmQoJzp2aXNpYmxlJykuYW5kU2VsZigpLmFkZCh0aGlzLnBhcmVudHNVbnRpbCgnaHRtbCcpKS5ub3QoZXhjbHVkZXMpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVOYW1lICE9PSAnI2RvY3VtZW50Jykge1xuICAgICAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmIChbJ2Fic29sdXRlJywgJ3JlbGF0aXZlJywgJ2ZpeGVkJ10uY29udGFpbnMoJHRoaXMuY3NzKCdwb3NpdGlvbicpKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KCR0aGlzLmNzcygnekluZGV4JykpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsdWUpICYmIHZhbHVlID4gekluZGV4KSB6SW5kZXggPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB6SW5kZXg7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBNYXggekluZGV4IGZyb20gZG9jdW1lbnQgYm9keS5cbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PEhUTUxFbGVtZW50PnxqUXVlcnk8SFRNTEVsZW1lbnQ+fSBleGNsdWRlc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG4kLm1heFpJbmRleCA9IGZ1bmN0aW9uKGV4Y2x1ZGVzKSB7XG4gICAgcmV0dXJuICQoZG9jdW1lbnQuYm9keSkubWF4WkluZGV4KGV4Y2x1ZGVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4ubWF4WkluZGV4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWF4WkluZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgd2luZG93IGZyb20gJy4vd2luZG93J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5kb2N1bWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvZG9jdW1lbnQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5uZXh0VGljayA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTsgfTtcblxuZXhwb3J0IGRlZmF1bHQgJC5uZXh0VGljaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL25leHRUaWNrLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuaW1wb3J0ICcuL3NwbGl0J1xuXG4kLm9iaiA9IHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXVxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbihvYmosIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiBvYmo7XG4gICAgICAgIGxldCBrZXlGcmFnbWVudHMgPSAkLnNwbGl0KGtleSwgJy4nLCAnLycpO1xuICAgICAgICBmb3IgKGxldCBrZXlGcmFnbWVudCBvZiBrZXlGcmFnbWVudHMpIHtcbiAgICAgICAgICAgIGlmICgob2JqID0gb2JqW2tleUZyYWdtZW50XSkgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJC5pc0FycmF5KGRlZmF1bHRWYWx1ZSkgJiYgISQuaXNBcnJheShvYmopKVxuICAgICAgICAgICAgb2JqID0gJC5tYWtlQXJyYXkob2JqKTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthcHBlbmRBcnJheV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZ1bGxrZXlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24oYXBwZW5kQXJyYXksIG9iaiwgZnVsbGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IGFyZ3MgPSAkLm1ha2VBcnJheShhcmd1bWVudHMpO1xuICAgICAgICBhcHBlbmRBcnJheSA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBvYmogPSB0eXBlb2YgYXJncy5maXJzdCgpID09PSAnb2JqZWN0JyB8fCAkLmlzRnVuY3Rpb24oYXJncy5maXJzdCgpKSA/IGFyZ3Muc2hpZnQoKSA6IHt9O1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3MuZmlyc3QoKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qga2V5IG11c3QgYmUgc3RyaW5nIHR5cGUgOiBcIiArIGFyZ3MuZmlyc3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVsbGtleSA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgdmFsdWUgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGxldCBrZXlzID0gJC5tYXAoJC5zcGxpdChmdWxsa2V5LCAnLicsICcvJyksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgaWYgKC9eKFteXFxbXSspP1xcWyhbXlxcXV0rKT9cXF0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBpbktleXMgPSBba2V5Lm1hdGNoKC9eKFteXFxbXSspPy8pWzFdXTtcbiAgICAgICAgICAgICAgICBsZXQgaW5CcmFja2V0ID0gL1xcWyhbXlxcXV0rKT9cXF0vZztcbiAgICAgICAgICAgICAgICBsZXQgbmV4dE1hdGNoZXM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5leHRNYXRjaGVzID0gaW5CcmFja2V0LmV4ZWMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpbktleXMucHVzaChuZXh0TWF0Y2hlc1sxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpbktleXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBpc051bGwobywga2V5KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhKGtleSBpbiBvICYmIChvW2tleV0gIT0gbnVsbCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyT2JqID0gb2JqO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmICghYXBwZW5kQXJyYXkgfHwgaXNOdWxsKGN1cnJPYmosIGtleSkpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCQuaXNBcnJheShjdXJyT2JqW2tleV0pKVxuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0gPSBbY3Vyck9ialtrZXldLCB2YWx1ZV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTnVsbChjdXJyT2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZXlzW2kgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAga2V5c1tpICsgMV0gPSAnMCc7XG4gICAgICAgICAgICAgICAgY3Vyck9ialtrZXldID0gL15cXGQrJC8udGVzdChrZXlzW2kgKyAxXSkgPyBbXSA6IHt9O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAga2V5c1tpICsgMV0gPSAkLmlzQXJyYXkoY3Vyck9ialtrZXldKSA/IGN1cnJPYmpba2V5XS5sZW5ndGggKyAnJyA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3Vyck9iaiA9IGN1cnJPYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdlbmVyYWxpemU6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoISQuaXNQbGFpbk9iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChrZXkuY29udGFpbnMoJy4nKSB8fCAvXFxbKFxcdyspP1xcXS8udGVzdChrZXkpKVxuICAgICAgICAgICAgICAgICAgICAkLm9iai5zZXQodHJ1ZSwgcmVzdWx0LCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcF1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthcHBlbmRBcnJheV1cbiAgICAgKiBAcGFyYW0geyp8T2JqZWN0fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0geyp8Li4uT2JqZWN0fSBzb3VyY2VzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZXh0ZW5kSWZVbmRlZmluZWRdXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGV4dGVuZDogZnVuY3Rpb24oZGVlcCwgYXBwZW5kQXJyYXksIHRhcmdldCwgc291cmNlcywgZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGFyZ3MgPSAkLm1ha2VBcnJheShhcmd1bWVudHMpO1xuICAgICAgICBkZWVwID0gdHlwZW9mIGFyZ3MuZmlyc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5zaGlmdCgpIDogZmFsc2U7XG4gICAgICAgIGFwcGVuZEFycmF5ID0gdHlwZW9mIGFyZ3MuZmlyc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5zaGlmdCgpIDogZmFsc2U7XG4gICAgICAgIGV4dGVuZElmVW5kZWZpbmVkID0gdHlwZW9mIGFyZ3MubGFzdCgpID09PSAnYm9vbGVhbicgPyBhcmdzLnBvcCgpIDogZmFsc2U7XG4gICAgICAgIHRhcmdldCA9IGFyZ3MubGVuZ3RoID09PSAxID8ge30gOiBhcmdzLnNoaWZ0KCkgfHwge307XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiAhJC5pc0Z1bmN0aW9uKHRhcmdldCkpIHRhcmdldCA9IHt9O1xuXG4gICAgICAgIHNvdXJjZXMgPSBhcmdzO1xuICAgICAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyYyA9IHRhcmdldFtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3B5ID0gc291cmNlW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgPT09IHRhcmdldCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weUlzQXJyYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWVwICYmIGNvcHkgJiYgKCQuaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSAkLmlzQXJyYXkoY29weSkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29weUlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyY0lzUGxhaW5PYmplY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyYyA9PT0gdW5kZWZpbmVkIHx8IChzcmNJc1BsYWluT2JqZWN0ID0gJC5pc1BsYWluT2JqZWN0KHNyYykpIHx8ICFleHRlbmRJZlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gJC5vYmouZXh0ZW5kKGRlZXAsIGFwcGVuZEFycmF5LCAoc3JjSXNQbGFpbk9iamVjdCA/IHNyYyA6IHt9KSwgY29weSwgZXh0ZW5kSWZVbmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcmMgPT09IHVuZGVmaW5lZCB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gJC5tZXJnZSgoYXBwZW5kQXJyYXkgJiYgJC5pc0FycmF5KHNyYykgPyBzcmMgOiBbXSksICQub2JqLmV4dGVuZChkZWVwLCBbXSwgY29weSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29weSAhPT0gdW5kZWZpbmVkICYmIChzcmMgPT09IHVuZGVmaW5lZCB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IG5ldyBEYXRlKGNvcHkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcHkgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5Lmdsb2JhbCAhPSBudWxsKSBmbGFncyArPSAnZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5Lmlnbm9yZUNhc2UgIT0gbnVsbCkgZmxhZ3MgKz0gJ2knO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5tdWx0aWxpbmUgIT0gbnVsbCkgZmxhZ3MgKz0gJ20nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5zdGlja3kgIT0gbnVsbCkgZmxhZ3MgKz0gJ3knO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBuZXcgUmVnRXhwKGNvcHkuc291cmNlLCBmbGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gY29weTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBrZXlWYWx1ZVBhaXJzXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uKC4uLmtleVZhbHVlUGFpcnMpIHtcbiAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleVZhbHVlUGFpcnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIG9ialtrZXlWYWx1ZVBhaXJzW2ldXSA9IGtleVZhbHVlUGFpcnNbaSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZW1wdHk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbn07XG5cbmZvciAobGV0IGtleSBpbiAkLm9iaikge1xuICAgIGxldCBzaG9ydEtleSA9IGtleSArICdPYmplY3QnO1xuICAgIGlmICghKHNob3J0S2V5IGluICQpKSB7XG4gICAgICAgIGlmICgkLm9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSAkW3Nob3J0S2V5XSA9ICQub2JqW2tleV07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAkLm9iajtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL29iai5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xuSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkhUTUxDb2xsZWN0aW9uID0gSXRlcmF0b3JzLkFycmF5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvICAgICAgID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG9cbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90bygkZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gICAgfVxuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VwYXJhdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2VzY2FwZUNoYXJdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xpbWl0XVxuICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAqL1xuJC5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgc2VwYXJhdG9yLCBlc2NhcGVDaGFyLCBsaW1pdCkge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHN0ciArICcgaXMgbm90IGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgIGlmICh0eXBlb2Ygc2VwYXJhdG9yID09PSAnbnVtYmVyJylcbiAgICAgICAgW2xpbWl0LCBzZXBhcmF0b3IsIGVzY2FwZUNoYXJdID0gW3NlcGFyYXRvciwgbnVsbCwgbnVsbF1cbiAgICBlbHNlIGlmICh0eXBlb2YgZXNjYXBlQ2hhciA9PT0gJ251bWJlcicpXG4gICAgICAgIFtsaW1pdCwgZXNjYXBlQ2hhcl0gPSBbZXNjYXBlQ2hhciwgbnVsbF1cblxuICAgIGZ1bmN0aW9uIGxpbWl0ZWQoaSkge1xuICAgICAgICByZXR1cm4gMCA8IGxpbWl0ICYmIGxpbWl0IDw9IGkgKyAxO1xuICAgIH1cblxuICAgIGxldCBwYXJ0cyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgcyA9IDA7XG4gICAgbGV0IHA7XG4gICAgd2hpbGUgKChwID0gc3RyLmluZGV4T2Yoc2VwYXJhdG9yLCBzKSkgIT09IC0xICYmICFsaW1pdGVkKGkpKSB7XG4gICAgICAgIGxldCBwYXJ0ID0gc3RyLnNsaWNlKHMsIHApO1xuICAgICAgICBsZXQgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXNjYXBlQ2hhciAmJiBwYXJ0LnNsaWNlKC0xKSA9PT0gZXNjYXBlQ2hhcikge1xuICAgICAgICAgICAgcGFydCA9IHBhcnQuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgZXNjYXBlZCA9IHBhcnQuc2xpY2UoLTEpICE9PSBlc2NhcGVDaGFyO1xuICAgICAgICAgICAgaWYgKGVzY2FwZWQpIHBhcnQgKz0gc2VwYXJhdG9yO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzW2ldID0gKHBhcnRzW2ldIHx8ICcnKSArIHBhcnQ7XG4gICAgICAgIHMgPSBwICsgMTtcbiAgICAgICAgaWYgKCFlc2NhcGVkKSBpKys7XG4gICAgfVxuICAgIGlmIChzIDw9IHN0ci5sZW5ndGgpIHBhcnRzW2ldID0gKHBhcnRzW2ldIHx8ICcnKSArIHN0ci5zbGljZShzKTtcblxuICAgIHJldHVybiBwYXJ0cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuc3BsaXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zcGxpdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcbmltcG9ydCAnLi9vYmonXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5U3RyaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbiQucGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVN0cmluZyAhPT0gJ3N0cmluZycgfHwgcXVlcnlTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgbGV0IHBhaXJzID0gcXVlcnlTdHJpbmcuc3BsaXQoLyZhbXA7fCYvaSk7XG4gICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICBlbHNlIGlmIChvcHRpb25zLmV4Y2VwdCAmJiAhJC5pc0FycmF5KG9wdGlvbnMuZXhjZXB0KSlcbiAgICAgICAgb3B0aW9ucy5leGNlcHQgPSBbb3B0aW9ucy5leGNlcHRdO1xuICAgIGxldCBvID0ge307XG4gICAgZm9yIChsZXQgcGFpciBvZiBwYWlycykge1xuICAgICAgICBsZXQgW25hbWUsIHZhbHVlXSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBpZiAob3B0aW9ucy5leGNlcHQgPT0gbnVsbCB8fCAhb3B0aW9ucy5leGNlcHQuY29udGFpbnMobmFtZSkpXG4gICAgICAgICAgICAkLm9iai5zZXQodHJ1ZSwgbywgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQucGFyc2VRdWVyeVN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BhcnNlUXVlcnlTdHJpbmcuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9nZXRJdGVyYXRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9pc0l0ZXJhYmxlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gX2dldEl0ZXJhdG9yKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoX2lzSXRlcmFibGUoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWQtdG8tYXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGF0YUFuZEV2ZW50c1xuICogQHBhcmFtIHtib29sZWFufSBkZWVwRGF0YUFuZEV2ZW50c1xuICogQHJldHVybiB7alF1ZXJ5PEhUTUxFbGVtZW50Pn1cbiAqL1xuJC5mbi5yZWNsb25lID0gZnVuY3Rpb24oZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBvbGRFbGVtID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IG5ld0VsZW0gPSBvbGRFbGVtLmNsb25lKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKTtcbiAgICAgICAgbmV3RWxlbS5pbnNlcnRBZnRlcih0aGlzKTtcbiAgICAgICAgb2xkRWxlbS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1bMF07XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnJlY2xvbmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWNsb25lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqIEBwYXJhbSB7QXJyYXk8e25hbWUsdmFsdWV9Pn0gcGFyYW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGxlbmd0aCBvZiBwYXJhbWV0ZXJzXG4gKi9cbiQucmVpbmRleEFycmF5UGFyYW1zID0gZnVuY3Rpb24ocHJlZml4LCBwYXJhbXMpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIHByZWZpeC5yZXBsYWNlKCcuJywgJ1xcXFwuJykgKyAnKVxcXFxbKFxcXFxkKylcXFxcXScpO1xuICAgIGxldCBwcmV2SW5kZXggPSBudWxsO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHBhcmFtIG9mIHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMocGFyYW0ubmFtZSk7XG4gICAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgICAgICBsZXQgY3VyckluZGV4ID0gcmVzdWx0c1syXTtcbiAgICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IGN1cnJJbmRleCkge1xuICAgICAgICAgICAgICAgIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW0ubmFtZSA9IHBhcmFtLm5hbWUucmVwbGFjZShyZWdleCwgJyQxWycgKyBpbmRleCArICddJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5yZWluZGV4QXJyYXlQYXJhbXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWluZGV4QXJyYXlQYXJhbXMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4ucmV2ZXJzZSA9IEFycmF5LnByb3RvdHlwZS5yZXZlcnNlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmV2ZXJzZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG4kLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoISQuaXNQbGFpbk9iamVjdChvcHRpb25zKSlcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuZXhjZXB0ICYmICEkLmlzQXJyYXkob3B0aW9ucy5leGNlcHQpKVxuICAgICAgICBvcHRpb25zLmV4Y2VwdCA9IFtvcHRpb25zLmV4Y2VwdF07XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICQuZWFjaCh0aGlzLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob3B0aW9ucy5leGNlcHQgPT0gbnVsbCB8fCAhb3B0aW9ucy5leGNlcHQuY29udGFpbnModGhpcy5uYW1lKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQuaXNBcnJheShyZXN1bHRbdGhpcy5uYW1lXSkpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdID0gW3Jlc3VsdFt0aGlzLm5hbWVdLCB0aGlzLnZhbHVlXTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJlc3VsdFt0aGlzLm5hbWVdID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnNlcmlhbGl6ZU9iamVjdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcmlhbGl6ZU9iamVjdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuJC5zb21lID0gZnVuY3Rpb24oaXRlbXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKCQuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBpdGVtcywgaXRlbXNbaV0sIGksIGl0ZW1zKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoJC5pc1BsYWluT2JqZWN0KGl0ZW1zKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBpdGVtcywgaXRlbXNba2V5XSwga2V5LCBpdGVtcykpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcihpdGVtcyArIFwiIGlzIG5vdCBhcnJheSBvciBwbGFpbiBvYmplY3RcIik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zb21lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4kLnN1cHBvcnRzSW5wdXRUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IHR5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnN1cHBvcnRzSW5wdXRUeXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3VwcG9ydHNJbnB1dFR5cGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtYTUx9IHhtbE5vZGUgdGhlIHhtbCBub2RlLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG4kLnhtbFRvU3RyaW5nID0gZnVuY3Rpb24oeG1sTm9kZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoeG1sTm9kZSk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIGlmICh4bWxOb2RlLnhtbCA9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWE1MU2VyaWFsaXplciBub3Qgc3VwcG9ydGVkXCIpO1xuXG4gICAgICAgIHJldHVybiB4bWxOb2RlLnhtbDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnhtbFRvU3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMveG1sVG9TdHJpbmcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9