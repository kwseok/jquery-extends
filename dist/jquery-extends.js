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

	/* WEBPACK VAR INJECTION */(function($, window) {/******/ (function(modules) { // webpackBootstrap
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
		
		__webpack_require__(29);
		
		__webpack_require__(30);
		
		__webpack_require__(32);
		
		__webpack_require__(33);
		
		__webpack_require__(34);
		
		__webpack_require__(36);
		
		__webpack_require__(37);
		
		__webpack_require__(38);
		
		__webpack_require__(35);
		
		__webpack_require__(39);
		
		__webpack_require__(40);
		
		__webpack_require__(41);
		
		__webpack_require__(43);
		
		__webpack_require__(45);
		
		__webpack_require__(46);
		
		__webpack_require__(42);
		
		__webpack_require__(47);
		
		__webpack_require__(48);
		
		__webpack_require__(49);
		
		__webpack_require__(44);
		
		__webpack_require__(31);
	
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
		var $def = __webpack_require__(25)
		  , $re  = __webpack_require__(28)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
		$def($def.S, 'RegExp', {escape: function escape(it){ return $re(it); }});
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(26)
		  , core      = __webpack_require__(27)
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
	/* 26 */
	/***/ function(module, exports) {
	
		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	
	/***/ },
	/* 27 */
	/***/ function(module, exports) {
	
		var core = module.exports = {version: '1.2.5'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 28 */
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
	/* 29 */
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
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(31);
		
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
	/* 31 */
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
	/* 32 */
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
	/* 33 */
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
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(1);
		
		__webpack_require__(35);
		
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
	/* 35 */
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
	/* 36 */
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
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(6);
		
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
		
		exports['default'] = String.prototype.format;
		module.exports = exports['default'];
	
	/***/ },
	/* 38 */
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
	/* 39 */
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
	/* 40 */
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
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(42);
		
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
	/* 42 */
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
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(44);
		
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
	/* 44 */
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
	/* 45 */
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
	/* 46 */
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
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		__webpack_require__(42);
		
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
	/* 48 */
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
	/* 49 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI0MDlmMzAwMWEwOTVjYWU1ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9pbmRleE9mLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9mbGF0TWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2ZpcnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2dyb3VwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9ncm91cGVkUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvam9pblBhdGhzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL21heC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnZXhwcy9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcmVnZXhwL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZXBsYWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9hbnRTdHlsZVBhdGhUb1JlZ2V4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2JyMm5sLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3htbFVuZXNjYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2NvbXBhcmVUby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9jdXRzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2VuZHNXaXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZ3JvdXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9ncm91cGVkUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvbGVmdFBhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvbmwyYnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MveG1sRXNjYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3F1b3RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3JlZ2V4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3JpZ2h0UGFkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3N0YXJ0c1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvdW5xdW90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxhQUFZLENBQUM7O3FCQUVOLENBQW1COztxQkFDbkIsQ0FBZ0I7O3FCQUNoQixDQUFpQjs7cUJBQ2pCLENBQWdCOztxQkFDaEIsQ0FBa0I7O3FCQUNsQixDQUFrQjs7cUJBQ2xCLENBQWtCOztxQkFDbEIsRUFBdUI7O3FCQUN2QixFQUFrQjs7cUJBQ2xCLENBQWtCOztxQkFDbEIsQ0FBa0I7O3FCQUNsQixFQUFvQjs7cUJBQ3BCLEVBQWU7O3FCQUNmLEVBQWM7O3FCQUNkLEVBQWM7O3FCQUNkLEVBQWM7O3FCQUNkLEVBQWdCOztxQkFDaEIsRUFBaUI7O3FCQUNqQixFQUFpQjs7cUJBQ2pCLEVBQWU7O3FCQUVmLEVBQWtCOztxQkFFbEIsRUFBK0I7O3FCQUMvQixFQUFpQjs7cUJBQ2pCLEVBQXFCOztxQkFDckIsRUFBb0I7O3FCQUNwQixFQUFxQjs7cUJBQ3JCLEVBQW9COztxQkFDcEIsRUFBa0I7O3FCQUNsQixFQUEyQjs7cUJBQzNCLEVBQXFCOztxQkFDckIsRUFBbUI7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IjoicHJvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDBiNDA5ZjMwMDFhMDk1Y2FlNWY5XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vYXJyYXlzL2NvbnRhaW5zJ1xuaW1wb3J0ICcuL2FycmF5cy9ldmVyeSdcbmltcG9ydCAnLi9hcnJheXMvZmlsdGVyJ1xuaW1wb3J0ICcuL2FycmF5cy9maXJzdCdcbmltcG9ydCAnLi9hcnJheXMvZmxhdE1hcCdcbmltcG9ydCAnLi9hcnJheXMvZ3JvdXBCeSdcbmltcG9ydCAnLi9hcnJheXMvZ3JvdXBlZCdcbmltcG9ydCAnLi9hcnJheXMvZ3JvdXBlZFJpZ2h0J1xuaW1wb3J0ICcuL2FycmF5cy9pbmNsdWRlJ1xuaW1wb3J0ICcuL2FycmF5cy9pbmRleE9mJ1xuaW1wb3J0ICcuL2FycmF5cy9pc0FycmF5J1xuaW1wb3J0ICcuL2FycmF5cy9qb2luUGF0aHMnXG5pbXBvcnQgJy4vYXJyYXlzL2xhc3QnXG5pbXBvcnQgJy4vYXJyYXlzL21hcCdcbmltcG9ydCAnLi9hcnJheXMvbWF4J1xuaW1wb3J0ICcuL2FycmF5cy9taW4nXG5pbXBvcnQgJy4vYXJyYXlzL3JhbmdlJ1xuaW1wb3J0ICcuL2FycmF5cy9yZWR1Y2UnXG5pbXBvcnQgJy4vYXJyYXlzL3JlbW92ZSdcbmltcG9ydCAnLi9hcnJheXMvc29tZSdcblxuaW1wb3J0ICcuL3JlZ2V4cHMvZXNjYXBlJ1xuXG5pbXBvcnQgJy4vc3RyaW5ncy9hbnRTdHlsZVBhdGhUb1JlZ2V4J1xuaW1wb3J0ICcuL3N0cmluZ3MvYnIybmwnXG5pbXBvcnQgJy4vc3RyaW5ncy9jb21wYXJlVG8nXG5pbXBvcnQgJy4vc3RyaW5ncy9jb250YWlucydcbmltcG9ydCAnLi9zdHJpbmdzL2N1dHN0cmluZydcbmltcG9ydCAnLi9zdHJpbmdzL2VuZHNXaXRoJ1xuaW1wb3J0ICcuL3N0cmluZ3MvZm9ybWF0J1xuaW1wb3J0ICcuL3N0cmluZ3MvZm9ybWF0VmFyaWFibGVzJ1xuaW1wb3J0ICcuL3N0cmluZ3MvZ2V0TGVuZ3RoJ1xuaW1wb3J0ICcuL3N0cmluZ3MvZ3JvdXBlZCdcbmltcG9ydCAnLi9zdHJpbmdzL2dyb3VwZWRSaWdodCdcbmltcG9ydCAnLi9zdHJpbmdzL2xlZnRQYWQnXG5pbXBvcnQgJy4vc3RyaW5ncy9ubDJicidcbmltcG9ydCAnLi9zdHJpbmdzL3F1b3RlJ1xuaW1wb3J0ICcuL3N0cmluZ3MvcmVnZXgnXG5pbXBvcnQgJy4vc3RyaW5ncy9yZXBlYXQnXG5pbXBvcnQgJy4vc3RyaW5ncy9yaWdodFBhZCdcbmltcG9ydCAnLi9zdHJpbmdzL3N0YXJ0c1dpdGgnXG5pbXBvcnQgJy4vc3RyaW5ncy91bnF1b3RlJ1xuaW1wb3J0ICcuL3N0cmluZ3MveG1sRXNjYXBlJ1xuaW1wb3J0ICcuL3N0cmluZ3MveG1sVW5lc2NhcGUnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2luZGV4T2YnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBhXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4T2YoYSkgPj0gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5jb250YWlucztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9jb250YWlucy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9pbmRleE9mLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ldmVyeSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5ldmVyeSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZXZlcnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvZXZlcnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9mbGF0TWFwJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maWx0ZXIpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYXRNYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgYSwgaSwgdGhpcykpIHJldHVybiBhO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2ZpbHRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2lzQXJyYXknXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmZsYXRNYXApIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiBBcnJheVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5mbGF0TWFwID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSlcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2guYXBwbHkocmVzdWx0cywgcmVzdWx0KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5mbGF0TWFwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2ZsYXRNYXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkuaXNBcnJheSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gb2JqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkuaXNBcnJheTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9pc0FycmF5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maXJzdCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpc1swXTsgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmZpcnN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2ZpcnN0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cEJ5KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge3t9fVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpc1tpXTtcbiAgICAgICAgICAgIGxldCBrZXkgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdmFsdWUsIGksIHRoaXMpO1xuICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ncm91cEJ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2dyb3VwQnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PEFycmF5Pn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShpLCBpICsgc2l6ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ncm91cGVkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2dyb3VwZWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8QXJyYXk+fVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aDsgaSA+IDA7IGkgLT0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIHNpemUpLCBpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMucmV2ZXJzZSgpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvZ3JvdXBlZFJpZ2h0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXhPZidcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZSkge1xuICAgIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBsZXQgaSA9IHRoaXMuaW5kZXhPZihhKTtcbiAgICAgICAgaWYgKGkgPiAtMSlcbiAgICAgICAgICAgIHRoaXNbaV0gPSBhO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnB1c2goYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5pbmNsdWRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2luY2x1ZGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmpvaW5QYXRocykge1xuICAgIEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSAhPT0gJy8nKVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9ICcvJztcblxuICAgICAgICAgICAgICAgIHBhdGggKz0gdGhpc1tpXS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvam9pblBhdGhzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5sYXN0KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTsgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmxhc3Q7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvbGFzdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubWFwKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5tYXA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvbWFwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vcmVkdWNlJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5tYXgpIHtcbiAgICBBcnJheS5wcm90b3R5cGUubWF4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZSgoYSwgYikgPT4gKGEgPiBiKSA/IGEgOiBiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5tYXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvbWF4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5yZWR1Y2UpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCEodGhpcy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlJlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCByZXN1bHQsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLnJlZHVjZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9yZWR1Y2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9yZWR1Y2UnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLm1pbikge1xuICAgIEFycmF5LnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKChhLCBiKSA9PiAoYSA8IGIpID8gYSA6IGIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLm1pbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9taW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucmFuZ2UpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGZyb21cbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHRvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgQXJyYXkucmFuZ2UgPSBmdW5jdGlvbihmcm9tLCB0bywgc3RlcCA9IDEpIHtcbiAgICAgICAgbGV0IHJhbmdlID0gW107XG4gICAgICAgIGxldCBpc051bWJlciA9IHR5cGVvZiBmcm9tID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG8gPT09ICdudW1iZXInO1xuICAgICAgICBsZXQgYmVnaW4gPSBpc051bWJlciA/IGZyb20gOiBmcm9tLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgbGV0IGVuZCA9IGlzTnVtYmVyID8gdG8gOiB0by50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIHN0ZXAgPSBNYXRoLmFicyhzdGVwKSB8fCAxO1xuICAgICAgICBpZiAoYmVnaW4gPiBlbmQpIHN0ZXAgPSAtc3RlcDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGJlZ2luOyBzdGVwID4gMCA/IGkgPD0gZW5kIDogaSA+PSBlbmQ7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgcmFuZ2UucHVzaChpc051bWJlciA/IGkgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucmFuZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvcmFuZ2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLnJlbW92ZSkge1xuICAgIEFycmF5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXSA9PT0gYSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5yZW1vdmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvcmVtb3ZlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5zb21lKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLnNvbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5zb21lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL3NvbWUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghUmVnRXhwLmVzY2FwZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBSZWdFeHAuZXNjYXBlID0gZnVuY3Rpb24odGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ0V4cC5lc2NhcGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWdleHBzL2VzY2FwZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3JlZ2V4cC9lc2NhcGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLlJlZ0V4cC5lc2NhcGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3JlZ2V4cC9lc2NhcGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL2JlbmphbWluZ3IvUmV4RXhwLmVzY2FwZVxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCAkcmUgID0gcmVxdWlyZSgnLi8kLnJlcGxhY2VyJykoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG4kZGVmKCRkZWYuUywgJ1JlZ0V4cCcsIHtlc2NhcGU6IGZ1bmN0aW9uIGVzY2FwZShpdCl7IHJldHVybiAkcmUoaXQpOyB9fSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIGN0eCA9IGZ1bmN0aW9uKGZuLCB0aGF0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xudmFyICRkZWYgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiAkZGVmLkdcbiAgICAsIGlzUHJvdG8gID0gdHlwZSAmICRkZWYuUFxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6IHR5cGUgJiAkZGVmLlNcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgaWYoaXNHbG9iYWwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicpZXhwID0gc291cmNlW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLkIgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLlcgJiYgdGFyZ2V0W2tleV0gPT0gb3V0KSFmdW5jdGlvbihDKXtcbiAgICAgIGV4cCA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgZXhwW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgfShvdXQpO1xuICAgIGVsc2UgZXhwID0gaXNQcm90byAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnRcbiAgICBleHBvcnRzW2tleV0gPSBleHA7XG4gICAgaWYoaXNQcm90bykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGRlZi5GID0gMTsgIC8vIGZvcmNlZFxuJGRlZi5HID0gMjsgIC8vIGdsb2JhbFxuJGRlZi5TID0gNDsgIC8vIHN0YXRpY1xuJGRlZi5QID0gODsgIC8vIHByb3RvXG4kZGVmLkIgPSAxNjsgLy8gYmluZFxuJGRlZi5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGRlZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZi5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjUnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlZ0V4cCwgcmVwbGFjZSl7XG4gIHZhciByZXBsYWNlciA9IHJlcGxhY2UgPT09IE9iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xuICB9IDogcmVwbGFjZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gU3RyaW5nKGl0KS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlcGxhY2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXgpIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtSZWdFeHB9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJQYXRoIG11c3Qgbm90IGJlIGVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMucmVwbGFjZSgvXFwvezIsfS9nLCAnLycpLnJlcGxhY2UoL1stW1xcXXt9KCkrLixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICAgICAgICBsZXQgcGF0dGVybiA9IHBhdGgucmVwbGFjZSgvKChcXC8/XFwqXFwqKXwoXFwvP1xcKil8KFxcPyl8KFxcLykpL2csICgkMCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICgkMCkge1xuICAgICAgICAgICAgY2FzZSAnLyoqJzogcmV0dXJuICcoPzovezEsfS4qKT8nO1xuICAgICAgICAgICAgY2FzZSAnKionOiByZXR1cm4gJy4qJztcbiAgICAgICAgICAgIGNhc2UgJy8qJzogcmV0dXJuICcoPzovezEsfVteL10qKT8nO1xuICAgICAgICAgICAgY2FzZSAnKic6IHJldHVybiAnW14vXSonO1xuICAgICAgICAgICAgY2FzZSAnPyc6IHJldHVybiAnW14vXSc7XG4gICAgICAgICAgICBjYXNlICcvJzogcmV0dXJuICcvezEsfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgcGF0dGVybiArICcpJCcpO1xuICAgIH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUuYSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUuYSA9IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9hbnRTdHlsZVBhdGhUb1JlZ2V4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4veG1sVW5lc2NhcGUnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5icjJubCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0geG1sVW5lc2NhcGVcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5icjJubCA9IGZ1bmN0aW9uKHhtbFVuZXNjYXBlKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnJlcGxhY2UoLyg8YnI+fDxiclxcLz4pL2csICdcXG4nKTtcbiAgICAgICAgaWYgKHhtbFVuZXNjYXBlKSByZXR1cm4gcmVzdWx0LnhtbFVuZXNjYXBlKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5icjJubDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvYnIybmwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKCZsdDt8Jmd0O3wmIzM0O3wmIzM5O3wmYW1wOykvZywgKCQxKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG4gICAgICAgICAgICBjYXNlICcmbHQ7JzogcmV0dXJuICc8JztcbiAgICAgICAgICAgIGNhc2UgJyZndDsnOiByZXR1cm4gJz4nO1xuICAgICAgICAgICAgY2FzZSAnJiMzNDsnOiByZXR1cm4gJ1wiJztcbiAgICAgICAgICAgIGNhc2UgJyYjMzk7JzogcmV0dXJuIFwiJ1wiO1xuICAgICAgICAgICAgY2FzZSAnJmFtcDsnOiByZXR1cm4gJyYnO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICQxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3htbFVuZXNjYXBlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG8gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgaWYgKHN0ciA9PSBudWxsIHx8IHRoaXMgPiBzdHIpIHJldHVybiAxO1xuICAgICAgICBpZiAodGhpcyA8IHN0cikgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvY29tcGFyZVRvLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKHN0cikgeyByZXR1cm4gdGhpcy5pbmRleE9mKHN0cikgPiAtMTsgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5jb250YWlucztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvY29udGFpbnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi4vYXJyYXlzL2NvbnRhaW5zJ1xuaW1wb3J0ICcuL2dldExlbmd0aCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxudW1iZXJ9IFtjaGVja2J5dGVdIGNoZWNrIGJ5dGUgbGVuZ3RoIGlmIHRydWUuIChkZWZhdWx0IGlzIGZhbHNlKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMZW5ndGggdGhlIG1heCBsZW5ndGguXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdWZmaXhdIHRoZSBzdWZmaXguXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nID0gZnVuY3Rpb24oY2hlY2tieXRlLCBtYXhMZW5ndGgsIHN1ZmZpeCkge1xuICAgICAgICBsZXQgYXJnSW5kZXggPSAwO1xuICAgICAgICBsZXQgYXJnQ3VyciA9ICgpID0+IGFyZ3VtZW50c1thcmdJbmRleF07XG4gICAgICAgIGxldCBhcmdTaGlmdCA9ICgpID0+IGFyZ3VtZW50c1thcmdJbmRleCsrXTtcblxuICAgICAgICBjaGVja2J5dGUgPSBbJ2Jvb2xlYW4nLCAnbnVtYmVyJ10uY29udGFpbnModHlwZW9mIGFyZ0N1cnIoKSkgPyBhcmdTaGlmdCgpIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdDdXJyKCkgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGFyZ0N1cnIoKSArIFwiIGlzIG5vdCBhIG51bWJlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBtYXhMZW5ndGggPSBhcmdTaGlmdCgpO1xuXG4gICAgICAgIHN1ZmZpeCA9IHR5cGVvZiBhcmdDdXJyKCkgPT09ICdzdHJpbmcnID8gYXJnU2hpZnQoKSA6ICcnO1xuXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmdldExlbmd0aChjaGVja2J5dGUpO1xuICAgICAgICBpZiAoIShsZW5ndGggPiBtYXhMZW5ndGgpKSByZXR1cm4gdGhpcztcblxuICAgICAgICBsZXQgc3VmZml4TGVuZ3RoID0gc3VmZml4LmdldExlbmd0aChjaGVja2J5dGUpO1xuICAgICAgICBpZiAoc3VmZml4TGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk1heCBsZW5ndGggbXVzdCBiZSBtb3JlIHRoYW4gc3VmZml4IGxlbmd0aFwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0U3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBjaGVja2VkTGVuZ3RoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuY2hhckF0KGkpO1xuICAgICAgICAgICAgbGV0IGwgPSBjLmdldExlbmd0aChjaGVja2J5dGUpO1xuICAgICAgICAgICAgaWYgKGNoZWNrZWRMZW5ndGggKyBsID4gbWF4TGVuZ3RoIC0gc3VmZml4TGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgIGNoZWNrZWRMZW5ndGggKz0gbDtcbiAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRTdHJpbmcgKyBzdWZmaXg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2N1dHN0cmluZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuLi9hcnJheXMvY29udGFpbnMnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58bnVtYmVyfSBbY2hlY2tieXRlXSBjaGVjayBieXRlIGxlbmd0aCBpZiB0cnVlLiAoZGVmYXVsdCBpcyBmYWxzZSlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbihjaGVja2J5dGUpIHtcbiAgICAgICAgbGV0IGFyZ0luZGV4ID0gMDtcbiAgICAgICAgbGV0IGFyZ0N1cnIgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXhdO1xuICAgICAgICBsZXQgYXJnU2hpZnQgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXgrK107XG5cbiAgICAgICAgY2hlY2tieXRlID0gWydib29sZWFuJywgJ251bWJlciddLmNvbnRhaW5zKHR5cGVvZiBhcmdDdXJyKCkpID8gYXJnU2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBpZiAoY2hlY2tieXRlID09PSBmYWxzZSkgcmV0dXJuIHRoaXMubGVuZ3RoO1xuXG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDAwN0YpOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhKHR5cGVvZiBjaGVja2J5dGUgPT09ICdudW1iZXInICYmIGNoZWNrYnl0ZSA+IDApOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSBjaGVja2J5dGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDdGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwRkZGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2dldExlbmd0aC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGggPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmxhc3RJbmRleE9mKHN0cik7XG4gICAgICAgIHJldHVybiBpID4gLTEgJiYgaSA9PT0gdGhpcy5sZW5ndGggLSBzdHIudG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvZW5kc1dpdGguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi4vYXJyYXlzL2lzQXJyYXknXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oJyd8J1xce3xcXH0nfFxceyhcXHcrKVxcfSkvZywgKCQwLCAkMSwgJDIpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgXCInJ1wiOiByZXR1cm4gXCInXCI7XG4gICAgICAgICAgICBjYXNlIFwiJ3tcIjogcmV0dXJuICd7JztcbiAgICAgICAgICAgIGNhc2UgXCJ9J1wiOiByZXR1cm4gJ30nO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICghL15cXGQrJC9nLnRlc3QoJDIpID8gYXJndW1lbnRzWzBdIHx8IHt9IDogQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pID8gYXJndW1lbnRzWzBdIDogYXJndW1lbnRzKVskMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2Zvcm1hdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzXG4gICAgICogQHJldHVybnMge0FycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nO1xuICAgICAgICBsZXQgdmFyaWFibGVzID0gW107XG4gICAgICAgIGxldCBtYXRjaGVzO1xuICAgICAgICB3aGlsZSAobWF0Y2hlcyA9IHJlZ2V4LmV4ZWModGhpcykpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IFwiJydcIiAmJiBtYXRjaCAhPT0gXCIne1wiICYmIG1hdGNoICE9PSBcIn0nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMucHVzaChtYXRjaGVzWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFyaWFibGVzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgaWYgKCEoc2l6ZSA+IDEpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzaXplIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykgc2l6ZSA9IHBhcnNlSW50KHNpemUpXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2dyb3VwZWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHNpemUgPSBwYXJzZUludChzaXplKVxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKE1hdGgubWF4KDAsIGkgLSBzaXplKSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWRSaWdodDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vcmVwZWF0J1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUubGVmdFBhZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUubGVmdFBhZCA9IGZ1bmN0aW9uKGxlbmd0aCwgZmlsbENoYXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaWxsQ2hhcikgZmlsbENoYXIgPSAnICc7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBmaWxsQ2hhci5yZXBlYXQobGVuZ3RoIC0gdGhpcy5sZW5ndGgpICsgdGhpcy50b1N0cmluZygpO1xuICAgIH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUubHBhZCkge1xuICAgIFN0cmluZy5wcm90b3R5cGUubHBhZCA9IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5sZWZ0UGFkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9sZWZ0UGFkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUucmVwZWF0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmVwZWF0ID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICAgICAgaWYgKCEoY291bnQgPj0gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvdW50IHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJlcGVhdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvcmVwZWF0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4veG1sRXNjYXBlJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUubmwyYnIpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbEVzY2FwZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5ubDJiciA9IGZ1bmN0aW9uKHhtbEVzY2FwZSkge1xuICAgICAgICByZXR1cm4gKHhtbEVzY2FwZSA/IHRoaXMueG1sRXNjYXBlKCkgOiB0aGlzKS5yZXBsYWNlKC8oXFxyXFxufFxcblxccnxcXHJ8XFxuKS9nLCAnPGJyLz4nKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUubmwyYnI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL25sMmJyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKDx8PnxcInwnfCYpL2csICgkMSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICgkMSkge1xuICAgICAgICAgICAgY2FzZSAnPCc6IHJldHVybiAnJmx0Oyc7XG4gICAgICAgICAgICBjYXNlICc+JzogcmV0dXJuICcmZ3Q7JztcbiAgICAgICAgICAgIGNhc2UgJ1wiJzogcmV0dXJuICcmIzM0Oyc7XG4gICAgICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gJyYjMzk7JztcbiAgICAgICAgICAgIGNhc2UgJyYnOiByZXR1cm4gJyZhbXA7JztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAkMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MveG1sRXNjYXBlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUucXVvdGUpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG92ZXJsYXBhYmxlXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucXVvdGUgPSBmdW5jdGlvbihvdmVybGFwYWJsZSkge1xuICAgICAgICBpZiAodHlwZW9mIG92ZXJsYXBhYmxlICE9PSAnYm9vbGVhbicpIG92ZXJsYXBhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFvdmVybGFwYWJsZSAmJiB0aGlzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyQXQoMCkgPT09ICdcIicgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gJ1wiJykgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJBdCgwKSA9PT0gXCInXCIgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gXCInXCIpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdcIicgKyB0aGlzICsgJ1wiJztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnF1b3RlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9xdW90ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJlZ2V4KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZsYWdzXG4gICAgICogQHJldHVybnMge1JlZ0V4cH1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnJlZ2V4ID0gZnVuY3Rpb24oZmxhZ3MpIHsgcmV0dXJuIG5ldyBSZWdFeHAodGhpcywgZmxhZ3MpOyB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnIpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnIgPSBTdHJpbmcucHJvdG90eXBlLnJlZ2V4O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJlZ2V4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9yZWdleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3JlcGVhdCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxsQ2hhclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCA9IGZ1bmN0aW9uKGxlbmd0aCwgZmlsbENoYXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaWxsQ2hhcikgZmlsbENoYXIgPSAnICc7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkgKyBmaWxsQ2hhci5yZXBlYXQobGVuZ3RoIC0gdGhpcy5sZW5ndGgpO1xuICAgIH07XG59XG5pZiAoIVN0cmluZy5wcm90b3R5cGUucnBhZCkge1xuICAgIFN0cmluZy5wcm90b3R5cGUucnBhZCA9IFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3JpZ2h0UGFkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbihzdHIpIHsgcmV0dXJuIHRoaXMuaW5kZXhPZihzdHIpID09PSAwOyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3N0YXJ0c1dpdGguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICAoKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHx8XG4gICAgICAgICAgICAodGhpcy5jaGFyQXQoMCkgPT09IFwiJ1wiICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09IFwiJ1wiKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUudW5xdW90ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvdW5xdW90ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(6)))

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
	        if (key !== undefined) {
	            if (!(key in result)) result[key] = $([]);
	
	            result[key].push(this[i]);
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
	    } else {
	        throw new TypeError(items + " is not array or plain object");
	    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZmIxZjJlMDNjNzFmYTRjODEzMSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZmluZEJ5TmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm90by5qcy9kaXN0L3Byb3RvLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF4WkluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXh0VGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwbGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZVF1ZXJ5U3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlaW5kZXhBcnJheVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VyaWFsaXplT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdXBwb3J0c0lucHV0VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMveG1sVG9TdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLHNEQUFZLENBQUM7Ozs7OztxQkFFTixDQUFlOztxQkFDZixDQUFXOztxQkFDWCxDQUFhOztxQkFDYixFQUFZOztxQkFD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QztNQUMzRCxDQUFDLE9BQU8sTUFBTSxFQUFFO0FBQ2IsYUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksRUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOztBQUVuRCxnQkFBTyxPQUFPLENBQUMsR0FBRyxDQUFDO01BQ3RCO0VBQ0osQ0FBQzs7c0JBRWEsQ0FBQyxDQUFDLFdBQVciLCJmaWxlIjoianF1ZXJ5LWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpRdWVyeVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wialF1ZXJ5XCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiZmIxZjJlMDNjNzFmYTRjODEzMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2ZpbmRCeU5hbWVzJ1xuaW1wb3J0ICcuL2dyb3VwQnknXG5pbXBvcnQgJy4vbWF4WkluZGV4J1xuaW1wb3J0ICcuL25leHRUaWNrJ1xuaW1wb3J0ICcuL29iaidcbmltcG9ydCAnLi9wYXJzZVF1ZXJ5U3RyaW5nJ1xuaW1wb3J0ICcuL3JlY2xvbmUnXG5pbXBvcnQgJy4vcmVpbmRleEFycmF5UGFyYW1zJ1xuaW1wb3J0ICcuL3JldmVyc2UnXG5pbXBvcnQgJy4vc2VyaWFsaXplT2JqZWN0J1xuaW1wb3J0ICcuL3NvbWUnXG5pbXBvcnQgJy4vc3BsaXQnXG5pbXBvcnQgJy4vc3VwcG9ydHNJbnB1dFR5cGUnXG5pbXBvcnQgJy4veG1sVG9TdHJpbmcnXG5cbmV4cG9ydCBkZWZhdWx0ICQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5pZiAoISQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkuZXh0ZW5kcyByZXF1aXJlcyBhIGpRdWVyeVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9qcXVlcnkuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBuYW1lc1xuICogQHJldHVybiB7alF1ZXJ5PEhUTUxFbGVtZW50Pn1cbiAqL1xuJC5mbi5maW5kQnlOYW1lcyA9IGZ1bmN0aW9uKC4uLm5hbWVzKSB7XG4gICAgaWYgKG5hbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICQoW10pO1xuICAgIHJldHVybiB0aGlzLmZpbmQobmFtZXMubWFwKG5hbWUgPT4gJ1tuYW1lPVwiJyArIChuYW1lIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCJdJykuam9pbignLCcpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZmluZEJ5TmFtZXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maW5kQnlOYW1lcy5qc1xuICoqLyIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyOSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQwKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDYpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDgpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0OSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzEpO1xuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuY29udGFpbnMpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHsqfSBhXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoYSkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmluZGV4T2YoYSkgPj0gMDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5jb250YWlucztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0geyp9IGl0ZW1cblx0ICAgICAqIEByZXR1cm4ge251bWJlcn1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gLTE7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZXZlcnkpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuZXZlcnkgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuZXZlcnk7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZmlsdGVyKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG5cdCAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuXHQgICAgICogQHJldHVybiB7QXJyYXl9XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgICAgICByZXR1cm4gdGhpcy5mbGF0TWFwKGZ1bmN0aW9uIChhLCBpKSB7XG5cdCAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgX3RoaXMsIGEsIGksIF90aGlzKSkgcmV0dXJuIGE7XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmZsYXRNYXApIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKiBAcmV0dXJuIEFycmF5XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5mbGF0TWFwID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKTtcblx0ICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIHJlc3VsdCk7ZWxzZSBpZiAocmVzdWx0KSByZXN1bHRzLnB1c2gocmVzdWx0KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuZmxhdE1hcDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5pc0FycmF5KSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Kn0gb2JqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdCAgICBBcnJheS5pc0FycmF5ID0gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LmlzQXJyYXk7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmZpcnN0KSB7XG5cdCAgICBBcnJheS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXNbMF07XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuZmlyc3Q7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4ge3t9fVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzW2ldO1xuXHQgICAgICAgICAgICB2YXIga2V5ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHZhbHVlLCBpLCB0aGlzKTtcblx0ICAgICAgICAgICAgaWYgKGtleSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKGtleSBpbiByZXN1bHQpIHJlc3VsdFtrZXldLnB1c2godmFsdWUpO2Vsc2UgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEFycmF5LnByb3RvdHlwZS5ncm91cEJ5O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG4vKioqLyB9LFxuLyogOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwZWQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcblx0ICAgICAqIEByZXR1cm4ge0FycmF5PEFycmF5Pn1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuXHQgICAgICAgIHZhciByZXN1bHRzID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSBzaXplKSB7XG5cdCAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKGksIGkgKyBzaXplKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHRzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmdyb3VwZWQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcblx0ICAgICAqIEByZXR1cm4ge0FycmF5PEFycmF5Pn1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodCA9IGZ1bmN0aW9uIChzaXplKSB7XG5cdCAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcblx0ICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIHNpemUpLCBpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmluY2x1ZGUpIHtcblx0ICAgIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlID0gZnVuY3Rpb24gKGEpIHtcblx0ICAgICAgICB2YXIgaSA9IHRoaXMuaW5kZXhPZihhKTtcblx0ICAgICAgICBpZiAoaSA+IC0xKSB0aGlzW2ldID0gYTtlbHNlIHRoaXMucHVzaChhKTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5pbmNsdWRlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDEyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuam9pblBhdGhzKSB7XG5cdCAgICBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBwYXRoID0gJyc7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzW2ldKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgIT09ICcvJykgcGF0aCArPSAnLyc7XG5cdFxuXHQgICAgICAgICAgICAgICAgcGF0aCArPSB0aGlzW2ldLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHBhdGg7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDEzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUubGFzdCkge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5sYXN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUubWFwKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG5cdCAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgcmVzdWx0LnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5tYXA7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cdFxuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5tYXgpIHtcblx0ICAgIEFycmF5LnByb3RvdHlwZS5tYXggPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBhID4gYiA/IGEgOiBiO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLm1heDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUucmVkdWNlKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG5cdCAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuXHQgICAgICogQHJldHVybiB7Kn1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIGlmICghKHRoaXMubGVuZ3RoID4gMCkpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlJlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciByZXN1bHQgPSB0aGlzWzBdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHJlc3VsdCwgdGhpc1tpXSwgaSwgdGhpcyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEFycmF5LnByb3RvdHlwZS5yZWR1Y2U7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbi8qKiovIH0sXG4vKiAxNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblx0XG5cdGlmICghQXJyYXkucHJvdG90eXBlLm1pbikge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGEgPCBiID8gYSA6IGI7XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUubWluO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5yYW5nZSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGZyb21cblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdG9cblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKiBAcmV0dXJuIHtBcnJheX1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucmFuZ2UgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcblx0ICAgICAgICB2YXIgc3RlcCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMl07XG5cdFxuXHQgICAgICAgIHZhciByYW5nZSA9IFtdO1xuXHQgICAgICAgIHZhciBpc051bWJlciA9IHR5cGVvZiBmcm9tID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG8gPT09ICdudW1iZXInO1xuXHQgICAgICAgIHZhciBiZWdpbiA9IGlzTnVtYmVyID8gZnJvbSA6IGZyb20udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuXHQgICAgICAgIHZhciBlbmQgPSBpc051bWJlciA/IHRvIDogdG8udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuXHQgICAgICAgIHN0ZXAgPSBNYXRoLmFicyhzdGVwKSB8fCAxO1xuXHQgICAgICAgIGlmIChiZWdpbiA+IGVuZCkgc3RlcCA9IC1zdGVwO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSBiZWdpbjsgc3RlcCA+IDAgPyBpIDw9IGVuZCA6IGkgPj0gZW5kOyBpICs9IHN0ZXApIHtcblx0ICAgICAgICAgICAgcmFuZ2UucHVzaChpc051bWJlciA/IGkgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJhbmdlO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucmFuZ2U7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5yZW1vdmUpIHtcblx0ICAgIEFycmF5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoYSkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBhKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5yZW1vdmU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMjAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuc29tZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEFycmF5LnByb3RvdHlwZS5zb21lO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG4vKioqLyB9LFxuLyogMjEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBfUmVnRXhwJGVzY2FwZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpWydkZWZhdWx0J107XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFfUmVnRXhwJGVzY2FwZSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICogQHJldHVybiB7U3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBSZWdFeHAuZXNjYXBlID0gZnVuY3Rpb24gKHRleHQpIHtcblx0ICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gX1JlZ0V4cCRlc2NhcGU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogX193ZWJwYWNrX3JlcXVpcmVfXygyMyksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuLyoqKi8gfSxcbi8qIDIzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KS5SZWdFeHAuZXNjYXBlO1xuXG4vKioqLyB9LFxuLyogMjQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmdyL1JleEV4cC5lc2NhcGVcblx0dmFyICRkZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KVxuXHQgICwgJHJlICA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuXHQkZGVmKCRkZWYuUywgJ1JlZ0V4cCcsIHtlc2NhcGU6IGZ1bmN0aW9uIGVzY2FwZShpdCl7IHJldHVybiAkcmUoaXQpOyB9fSk7XG5cblxuLyoqKi8gfSxcbi8qIDI1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNilcblx0ICAsIGNvcmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpXG5cdCAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblx0dmFyIGN0eCA9IGZ1bmN0aW9uKGZuLCB0aGF0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24oKXtcblx0ICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH07XG5cdHZhciAkZGVmID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcblx0ICB2YXIga2V5LCBvd24sIG91dCwgZXhwXG5cdCAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuXHQgICAgLCBpc1Byb3RvICA9IHR5cGUgJiAkZGVmLlBcblx0ICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6IHR5cGUgJiAkZGVmLlNcblx0ICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cblx0ICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuXHQgIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XG5cdCAgZm9yKGtleSBpbiBzb3VyY2Upe1xuXHQgICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG5cdCAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuXHQgICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuXHQgICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcblx0ICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG5cdCAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcblx0ICAgIGlmKGlzR2xvYmFsICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nKWV4cCA9IHNvdXJjZVtrZXldO1xuXHQgICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcblx0ICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcblx0ICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG5cdCAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLlcgJiYgdGFyZ2V0W2tleV0gPT0gb3V0KSFmdW5jdGlvbihDKXtcblx0ICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuXHQgICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuXHQgICAgICB9O1xuXHQgICAgICBleHBbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcblx0ICAgIH0ob3V0KTtcblx0ICAgIGVsc2UgZXhwID0gaXNQcm90byAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcblx0ICAgIC8vIGV4cG9ydFxuXHQgICAgZXhwb3J0c1trZXldID0gZXhwO1xuXHQgICAgaWYoaXNQcm90bykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG5cdCAgfVxuXHR9O1xuXHQvLyB0eXBlIGJpdG1hcFxuXHQkZGVmLkYgPSAxOyAgLy8gZm9yY2VkXG5cdCRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcblx0JGRlZi5TID0gNDsgIC8vIHN0YXRpY1xuXHQkZGVmLlAgPSA4OyAgLy8gcHJvdG9cblx0JGRlZi5CID0gMTY7IC8vIGJpbmRcblx0JGRlZi5XID0gMzI7IC8vIHdyYXBcblx0bW9kdWxlLmV4cG9ydHMgPSAkZGVmO1xuXG4vKioqLyB9LFxuLyogMjYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5cdHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuXHQgID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0aWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSxcbi8qIDI3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNSd9O1xuXHRpZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSxcbi8qIDI4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlZ0V4cCwgcmVwbGFjZSl7XG5cdCAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XG5cdCAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcblx0ICB9IDogcmVwbGFjZTtcblx0ICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuXHQgICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcmV0dXJuIHtSZWdFeHB9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJQYXRoIG11c3Qgbm90IGJlIGVtcHR5LlwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHBhdGggPSB0aGlzLnJlcGxhY2UoL1xcL3syLH0vZywgJy8nKS5yZXBsYWNlKC9bLVtcXF17fSgpKy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcblx0ICAgICAgICB2YXIgcGF0dGVybiA9IHBhdGgucmVwbGFjZSgvKChcXC8/XFwqXFwqKXwoXFwvP1xcKil8KFxcPyl8KFxcLykpL2csIGZ1bmN0aW9uICgkMCkge1xuXHQgICAgICAgICAgICBzd2l0Y2ggKCQwKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcvKionOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnKD86L3sxLH0uKik/Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyoqJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy4qJztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJy8qJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyg/Oi97MSx9W14vXSopPyc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcqJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1teL10qJztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJz8nOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW14vXSc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcvJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy97MSx9Jztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdeKCcgKyBwYXR0ZXJuICsgJykkJyk7XG5cdCAgICB9O1xuXHR9XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5hKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmEgPSBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXg7XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKTtcblx0XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5icjJubCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbFVuZXNjYXBlXG5cdCAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuYnIybmwgPSBmdW5jdGlvbiAoeG1sVW5lc2NhcGUpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZXBsYWNlKC8oPGJyPnw8YnJcXC8+KS9nLCAnXFxuJyk7XG5cdCAgICAgICAgaWYgKHhtbFVuZXNjYXBlKSByZXR1cm4gcmVzdWx0LnhtbFVuZXNjYXBlKCk7XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuYnIybmw7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGUpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKCZsdDt8Jmd0O3wmIzM0O3wmIzM5O3wmYW1wOykvZywgZnVuY3Rpb24gKCQxKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyZsdDsnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPCc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcmZ3Q7Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJz4nO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnJiMzNDsnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnXCInO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnJiMzOTsnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIidcIjtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyZhbXA7Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyYnO1xuXHQgICAgICAgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJDE7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0ICAgICAgICBpZiAoc3RyID09IG51bGwgfHwgdGhpcyA+IHN0cikgcmV0dXJuIDE7XG5cdCAgICAgICAgaWYgKHRoaXMgPCBzdHIpIHJldHVybiAtMTtcblx0ICAgICAgICByZXR1cm4gMDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDMzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5jb250YWlucykge1xuXHQgIC8qKlxuXHQgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICAgKi9cblx0ICBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHN0cikge1xuXHQgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihzdHIpID4gLTE7XG5cdCAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5jb250YWlucztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxudW1iZXJ9IFtjaGVja2J5dGVdIGNoZWNrIGJ5dGUgbGVuZ3RoIGlmIHRydWUuIChkZWZhdWx0IGlzIGZhbHNlKVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aCB0aGUgbWF4IGxlbmd0aC5cblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3VmZml4XSB0aGUgc3VmZml4LlxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZyA9IGZ1bmN0aW9uIChjaGVja2J5dGUsIG1heExlbmd0aCwgc3VmZml4KSB7XG5cdCAgICAgICAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cdFxuXHQgICAgICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICAgICAgdmFyIGFyZ0N1cnIgPSBmdW5jdGlvbiBhcmdDdXJyKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gX2FyZ3VtZW50c1thcmdJbmRleF07XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgYXJnU2hpZnQgPSBmdW5jdGlvbiBhcmdTaGlmdCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9hcmd1bWVudHNbYXJnSW5kZXgrK107XG5cdCAgICAgICAgfTtcblx0XG5cdCAgICAgICAgY2hlY2tieXRlID0gWydib29sZWFuJywgJ251bWJlciddLmNvbnRhaW5zKHR5cGVvZiBhcmdDdXJyKCkpID8gYXJnU2hpZnQoKSA6IGZhbHNlO1xuXHRcblx0ICAgICAgICBpZiAodHlwZW9mIGFyZ0N1cnIoKSAhPT0gJ251bWJlcicpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihhcmdDdXJyKCkgKyBcIiBpcyBub3QgYSBudW1iZXJcIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIG1heExlbmd0aCA9IGFyZ1NoaWZ0KCk7XG5cdFxuXHQgICAgICAgIHN1ZmZpeCA9IHR5cGVvZiBhcmdDdXJyKCkgPT09ICdzdHJpbmcnID8gYXJnU2hpZnQoKSA6ICcnO1xuXHRcblx0ICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoY2hlY2tieXRlKTtcblx0ICAgICAgICBpZiAoIShsZW5ndGggPiBtYXhMZW5ndGgpKSByZXR1cm4gdGhpcztcblx0XG5cdCAgICAgICAgdmFyIHN1ZmZpeExlbmd0aCA9IHN1ZmZpeC5nZXRMZW5ndGgoY2hlY2tieXRlKTtcblx0ICAgICAgICBpZiAoc3VmZml4TGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWF4IGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiBzdWZmaXggbGVuZ3RoXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgcmVzdWx0U3RyaW5nID0gJyc7XG5cdCAgICAgICAgdmFyIGNoZWNrZWRMZW5ndGggPSAwO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgYyA9IHRoaXMuY2hhckF0KGkpO1xuXHQgICAgICAgICAgICB2YXIgbCA9IGMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG5cdCAgICAgICAgICAgIGlmIChjaGVja2VkTGVuZ3RoICsgbCA+IG1heExlbmd0aCAtIHN1ZmZpeExlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICAgIGNoZWNrZWRMZW5ndGggKz0gbDtcblx0ICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IGM7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHRTdHJpbmcgKyBzdWZmaXg7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmdldExlbmd0aCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW58bnVtYmVyfSBbY2hlY2tieXRlXSBjaGVjayBieXRlIGxlbmd0aCBpZiB0cnVlLiAoZGVmYXVsdCBpcyBmYWxzZSlcblx0ICAgICAqIEByZXR1cm4ge251bWJlcn1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoY2hlY2tieXRlKSB7XG5cdCAgICAgICAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cdFxuXHQgICAgICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICAgICAgdmFyIGFyZ0N1cnIgPSBmdW5jdGlvbiBhcmdDdXJyKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gX2FyZ3VtZW50c1thcmdJbmRleF07XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgYXJnU2hpZnQgPSBmdW5jdGlvbiBhcmdTaGlmdCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9hcmd1bWVudHNbYXJnSW5kZXgrK107XG5cdCAgICAgICAgfTtcblx0XG5cdCAgICAgICAgY2hlY2tieXRlID0gWydib29sZWFuJywgJ251bWJlciddLmNvbnRhaW5zKHR5cGVvZiBhcmdDdXJyKCkpID8gYXJnU2hpZnQoKSA6IGZhbHNlO1xuXHQgICAgICAgIGlmIChjaGVja2J5dGUgPT09IGZhbHNlKSByZXR1cm4gdGhpcy5sZW5ndGg7XG5cdFxuXHQgICAgICAgIHZhciBsZW5ndGggPSAwO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgYyA9IHRoaXMuY2hhckNvZGVBdChpKTtcblx0ICAgICAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDAwN0YpOlxuXHQgICAgICAgICAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAhKHR5cGVvZiBjaGVja2J5dGUgPT09ICdudW1iZXInICYmIGNoZWNrYnl0ZSA+IDApOlxuXHQgICAgICAgICAgICAgICAgICAgIGxlbmd0aCArPSBjaGVja2J5dGU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDdGRik6XG5cdCAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwRkZGRik6XG5cdCAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXHQgICAgICAgICAgICAgICAgICAgIGxlbmd0aCArPSA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBsZW5ndGg7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmdldExlbmd0aDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG5cdCAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCA9IGZ1bmN0aW9uIChzdHIpIHtcblx0ICAgICAgICB2YXIgaSA9IHRoaXMubGFzdEluZGV4T2Yoc3RyKTtcblx0ICAgICAgICByZXR1cm4gaSA+IC0xICYmIGkgPT09IHRoaXMubGVuZ3RoIC0gc3RyLnRvU3RyaW5nKCkubGVuZ3RoO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdCkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cdFxuXHQgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuXHQgICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIFwiJydcIjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCInXCI7XG5cdCAgICAgICAgICAgICAgICBjYXNlIFwiJ3tcIjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3snO1xuXHQgICAgICAgICAgICAgICAgY2FzZSBcIn0nXCI6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd9Jztcblx0ICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICghL15cXGQrJC9nLnRlc3QoJDIpID8gX2FyZ3VtZW50c1swXSB8fCB7fSA6IEFycmF5LmlzQXJyYXkoX2FyZ3VtZW50c1swXSkgPyBfYXJndW1lbnRzWzBdIDogX2FyZ3VtZW50cylbJDJdO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmZvcm1hdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcykge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0geyp9IGFyZ3VtZW50c1xuXHQgICAgICogQHJldHVybnMge0FycmF5PHN0cmluZz59XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciByZWdleCA9IC8oJyd8J1xce3xcXH0nfFxceyhcXHcrKVxcfSkvZztcblx0ICAgICAgICB2YXIgdmFyaWFibGVzID0gW107XG5cdCAgICAgICAgdmFyIG1hdGNoZXMgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgd2hpbGUgKG1hdGNoZXMgPSByZWdleC5leGVjKHRoaXMpKSB7XG5cdCAgICAgICAgICAgIHZhciBtYXRjaCA9IG1hdGNoZXNbMF07XG5cdCAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gXCInJ1wiICYmIG1hdGNoICE9PSBcIid7XCIgJiYgbWF0Y2ggIT09IFwifSdcIikge1xuXHQgICAgICAgICAgICAgICAgdmFyaWFibGVzLnB1c2gobWF0Y2hlc1syXSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHZhcmlhYmxlcztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbi8qKiovIH0sXG4vKiAzOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG5cdCAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuXHQgICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzaXplIHZhbHVlJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHNpemUgPSBwYXJzZUludChzaXplKTtcblx0ICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuXHQgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShpLCBpICsgc2l6ZSkpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0cztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcblx0ICAgICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24gKHNpemUpIHtcblx0ICAgICAgICBpZiAoIShzaXplID4gMSkpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSBzaXplID0gcGFyc2VJbnQoc2l6ZSk7XG5cdCAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcblx0ICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIHNpemUpLCBpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXHRcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG5cdCAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQgPSBmdW5jdGlvbiAobGVuZ3RoLCBmaWxsQ2hhcikge1xuXHQgICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuXHQgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgcmV0dXJuIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCkgKyB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICB9O1xuXHR9XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5scGFkKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmxwYWQgPSBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQ7XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUucmVwZWF0ID0gZnVuY3Rpb24gKGNvdW50KSB7XG5cdCAgICAgICAgaWYgKCEoY291bnQgPj0gMCkpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgY291bnQgdmFsdWUnKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHQgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy50b1N0cmluZygpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0NCk7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUubmwyYnIpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtib29sZWFufSB4bWxFc2NhcGVcblx0ICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUubmwyYnIgPSBmdW5jdGlvbiAoeG1sRXNjYXBlKSB7XG5cdCAgICAgICAgcmV0dXJuICh4bWxFc2NhcGUgPyB0aGlzLnhtbEVzY2FwZSgpIDogdGhpcykucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+Jyk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLm5sMmJyO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQ0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKDx8PnxcInwnfCYpL2csIGZ1bmN0aW9uICgkMSkge1xuXHQgICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlICc8Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyZsdDsnO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnPic6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcmZ3Q7Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJ1wiJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyYjMzQ7Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgXCInXCI6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcmIzM5Oyc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcmJzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyZhbXA7Jztcblx0ICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQxO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5xdW90ZSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG92ZXJsYXBhYmxlXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUucXVvdGUgPSBmdW5jdGlvbiAob3ZlcmxhcGFibGUpIHtcblx0ICAgICAgICBpZiAodHlwZW9mIG92ZXJsYXBhYmxlICE9PSAnYm9vbGVhbicpIG92ZXJsYXBhYmxlID0gdHJ1ZTtcblx0ICAgICAgICBpZiAoIW92ZXJsYXBhYmxlICYmIHRoaXMubGVuZ3RoID49IDIpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLmNoYXJBdCgwKSA9PT0gXCInXCIgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gXCInXCIpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiAnXCInICsgdGhpcyArICdcIic7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnF1b3RlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQ2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnJlZ2V4KSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbGFnc1xuXHQgICAgICogQHJldHVybnMge1JlZ0V4cH1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5yZWdleCA9IGZ1bmN0aW9uIChmbGFncykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHRoaXMsIGZsYWdzKTtcblx0ICAgIH07XG5cdH1cblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnIpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUuciA9IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUucmVnZXg7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG5cdCAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkID0gZnVuY3Rpb24gKGxlbmd0aCwgZmlsbENoYXIpIHtcblx0ICAgICAgICBpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoIWZpbGxDaGFyKSBmaWxsQ2hhciA9ICcgJztcblx0ICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuXHQgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkgKyBmaWxsQ2hhci5yZXBlYXQobGVuZ3RoIC0gdGhpcy5sZW5ndGgpO1xuXHQgICAgfTtcblx0fVxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUucnBhZCkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5ycGFkID0gU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCkge1xuXHQgIC8qKlxuXHQgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICAgKi9cblx0ICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc3RyKSB7XG5cdCAgICByZXR1cm4gdGhpcy5pbmRleE9mKHN0cikgPT09IDA7XG5cdCAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQ5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnVucXVvdGUpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUudW5xdW90ZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gMiAmJiAodGhpcy5jaGFyQXQoMCkgPT09ICdcIicgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gJ1wiJyB8fCB0aGlzLmNoYXJBdCgwKSA9PT0gXCInXCIgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gXCInXCIpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnNsaWNlKDEsIC0xKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUudW5xdW90ZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH1cbi8qKioqKiovIF0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWdNR0kwTURsbU16QXdNV0V3T1RWallXVTFaamtpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12WTI5dWRHRnBibk11YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5cGJtUmxlRTltTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdlpYWmxjbmt1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5bWFXeDBaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5bWJHRjBUV0Z3TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmFYTkJjbkpoZVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwyWnBjbk4wTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdlozSnZkWEJDZVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwyZHliM1Z3WldRdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZ5Y21GNWN5OW5jbTkxY0dWa1VtbG5hSFF1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5cGJtTnNkV1JsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmFtOXBibEJoZEdoekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTloY25KaGVYTXZiR0Z6ZEM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwyMWhjQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdllYSnlZWGx6TDIxaGVDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WVhKeVlYbHpMM0psWkhWalpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WVhKeVlYbHpMMjFwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwzSmhibWRsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmNtVnRiM1psTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmMyOXRaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmNtVm5aWGh3Y3k5bGMyTmhjR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5aVlXSmxiQzF5ZFc1MGFXMWxMMk52Y21VdGFuTXZjbVZuWlhod0wyVnpZMkZ3WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5bWJpOXlaV2RsZUhBdlpYTmpZWEJsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WlhNM0xuSmxaMlY0Y0M1bGMyTmhjR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeThrTG1SbFppNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekx5UXVaMnh2WW1Gc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdkpDNWpiM0psTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12SkM1eVpYQnNZV05sY2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjM1J5YVc1bmN5OWhiblJUZEhsc1pWQmhkR2hVYjFKbFoyVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5emRISnBibWR6TDJKeU1tNXNMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5emRISnBibWR6TDNodGJGVnVaWE5qWVhCbExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMMk52YlhCaGNtVlVieTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5amIyNTBZV2x1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjM1J5YVc1bmN5OWpkWFJ6ZEhKcGJtY3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012WjJWMFRHVnVaM1JvTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpkSEpwYm1kekwyVnVaSE5YYVhSb0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMMlp2Y20xaGRDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YzNSeWFXNW5jeTltYjNKdFlYUldZWEpwWVdKc1pYTXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012WjNKdmRYQmxaQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5bmNtOTFjR1ZrVW1sbmFIUXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012YkdWbWRGQmhaQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5eVpYQmxZWFF1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBjbWx1WjNNdmJtd3lZbkl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBjbWx1WjNNdmVHMXNSWE5qWVhCbExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMM0YxYjNSbExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMM0psWjJWNExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMM0pwWjJoMFVHRmtMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5emRISnBibWR6TDNOMFlYSjBjMWRwZEdndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wY21sdVozTXZkVzV4ZFc5MFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNkVUpCUVdVN1FVRkRaanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN096czdPenRCUTNSRFFTeGhRVUZaTEVOQlFVTTdPM0ZDUVVWT0xFTkJRVzFDT3p0eFFrRkRia0lzUTBGQlowSTdPM0ZDUVVOb1FpeERRVUZwUWpzN2NVSkJRMnBDTEVOQlFXZENPenR4UWtGRGFFSXNRMEZCYTBJN08zRkNRVU5zUWl4RFFVRnJRanM3Y1VKQlEyeENMRU5CUVd0Q096dHhRa0ZEYkVJc1JVRkJkVUk3TzNGQ1FVTjJRaXhGUVVGclFqczdjVUpCUTJ4Q0xFTkJRV3RDT3p0eFFrRkRiRUlzUTBGQmEwSTdPM0ZDUVVOc1FpeEZRVUZ2UWpzN2NVSkJRM0JDTEVWQlFXVTdPM0ZDUVVObUxFVkJRV003TzNGQ1FVTmtMRVZCUVdNN08zRkNRVU5rTEVWQlFXTTdPM0ZDUVVOa0xFVkJRV2RDT3p0eFFrRkRhRUlzUlVGQmFVSTdPM0ZDUVVOcVFpeEZRVUZwUWpzN2NVSkJRMnBDTEVWQlFXVTdPM0ZDUVVWbUxFVkJRV3RDT3p0eFFrRkZiRUlzUlVGQkswSTdPM0ZDUVVNdlFpeEZRVUZwUWpzN2NVSkJRMnBDTEVWQlFYRkNPenR4UWtGRGNrSXNSVUZCYjBJN08zRkNRVU53UWl4RlFVRnhRanM3Y1VKQlEzSkNMRVZCUVc5Q096dHhRa0ZEY0VJc1JVRkJhMEk3TzNGQ1FVTnNRaXhGUVVFeVFqczdjVUpCUXpOQ0xFVkJRWEZDT3p0eFFrRkRja0lzUlVGQmJVSTdPM0ZDUVVOdVFpeEZRVUYzUWpzN2NVSkJRM2hDTEVWQlFXMUNPenR4UWtGRGJrSXNSVUZCYVVJN08zRkNRVU5xUWl4RlFVRnBRanM3Y1VKQlEycENMRVZCUVdsQ096dHhRa0ZEYWtJc1JVRkJhMEk3TzNGQ1FVTnNRaXhGUVVGdlFqczdjVUpCUTNCQ0xFVkJRWE5DT3p0eFFrRkRkRUlzUlVGQmJVSTdPM0ZDUVVOdVFpeEZRVUZ4UWpzN2NVSkJRM0pDTEVWQlFYVkNMRVU3T3pzN096dEJRemRET1VJc1lVRkJXU3hEUVVGRE96czdPenM3Y1VKQlJVNHNRMEZCVnpzN1FVRkZiRUlzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRk96czdPenRCUVVzelFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhWUVVGVExFTkJRVU1zUlVGQlJUdEJRVU51UXl4blFrRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenROUVVNdlFqdEZRVU5LT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRTdPenM3T3pzN1FVTmtka01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJUczdPenM3UVVGTE1VSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlV5eEpRVUZKTEVWQlFVVTdRVUZEY2tNc1kwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEYkVNc2FVSkJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMVZCUXk5RE8wRkJRMFFzWjBKQlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1RVRkRZaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR6czdPenM3T3p0QlEyWjBReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRk96czdPenM3UVVGTmVFSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFZEJRVWNzVlVGQlV5eFJRVUZSTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTJoRUxHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExHbENRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVVXNUMEZCVHl4TFFVRkxMRU5CUVVNN1ZVRkRka1U3UVVGRFJDeG5Ra0ZCVHl4SlFVRkpMRU5CUVVNN1RVRkRaaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN6czdPenM3T3p0QlEyaENjRU1zWVVGQldTeERRVUZET3pzN096czdjVUpCUlU0c1EwRkJWenM3UVVGRmJFSXNTMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEZRVUZGT3pzN096czdRVUZOZWtJc1ZVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NWVUZCVXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhGUVVGRk96czdRVUZEYWtRc1owSkJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVXM3UVVGRE1VSXNhVUpCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEZOQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdWVUZETlVRc1EwRkJReXhEUVVGRE8wMUJRMDRzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMDdPenM3T3pzN1FVTnFRbkpETEdGQlFWa3NRMEZCUXpzN096czdPM0ZDUVVWT0xFTkJRVmM3TzBGQlJXeENMRXRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlRzN096czdPMEZCVFRGQ0xGVkJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCUVZNc1VVRkJVU3hGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU5zUkN4aFFVRkpMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGFrSXNZMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRGJFTXNhVUpCUVVrc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRemxFTEdsQ1FVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVWQlEzSkNMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhMUVVOdVF5eEpRVUZKTEUxQlFVMHNSVUZEV0N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFWQlF6VkNPMEZCUTBRc1owSkJRVThzVDBGQlR5eERRVUZETzAxQlEyeENPMFZCUTBvN08zTkNRVVZqTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUenM3T3pzN096dEJRM1pDZEVNc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZPenM3T3pzN1FVRk5hRUlzVlVGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlRMRWRCUVVjc1JVRkJSVHRCUVVNeFFpeG5Ra0ZCVHl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1owSkJRV2RDTEVOQlFVTTdUVUZEYmtVc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1QwRkJUenM3T3pzN096dEJRMkkxUWl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTNoQ0xGVkJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZjN1FVRkJSU3huUWtGQlR5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1RVRkJSU3hEUVVGRE8wVkJRekZFT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVczdPenM3T3pzN1FVTk9jRU1zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJUczdPenM3TzBGQlRURkNMRlZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWTXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVOc1JDeGhRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdEJRVU42UWl4dFFrRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU1zUTBGQlF6dFZRVU53UkR0QlFVTkVMR0ZCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5vUWl4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU5zUXl4cFFrRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNCQ0xHbENRVUZKTEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU42UkN4cFFrRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHhRa0ZCU1N4SFFVRkhMRWxCUVVrc1RVRkJUU3hGUVVOaUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUzBGRmVFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZMEZETjBJN1ZVRkRTanRCUVVORUxHZENRVUZQTEUxQlFVMHNRMEZCUXp0TlFVTnFRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR6czdPenM3T3p0QlF6TkNkRU1zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJUczdPenM3UVVGTE1VSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlV5eEpRVUZKTEVWQlFVVTdRVUZEY2tNc1lVRkJTU3hQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEycENMR05CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdRVUZEZUVNc2IwSkJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1ZVRkRla003UVVGRFJDeG5Ra0ZCVHl4UFFVRlBMRU5CUVVNN1RVRkRiRUlzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVODdPenM3T3pzN1FVTm9RblJETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFpRVUZaTEVWQlFVVTdPenM3TzBGQlN5OUNMRlZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeEhRVUZITEZWQlFWTXNTVUZCU1N4RlFVRkZPMEZCUXpGRExHRkJRVWtzVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnFRaXhqUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTNoRExHOUNRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1ZVRkRkRVE3UVVGRFJDeG5Ra0ZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VFVGRE5VSXNRMEZCUXp0RlFVTk1PenR6UWtGRll5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmxCUVZrN096czdPenM3UVVOb1FqTkRMR0ZCUVZrc1EwRkJRenM3T3pzN08zRkNRVVZPTEVOQlFWYzdPMEZCUld4Q0xFdEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVNeFFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVExFTkJRVU1zUlVGQlJUdEJRVU5zUXl4aFFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNoQ0xHRkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVTk9MRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZGV2l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEycENMR2RDUVVGUExFbEJRVWtzUTBGQlF6dE5RVU5tTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBPenM3T3pzN08wRkRablJETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVWQlFVVTdRVUZETlVJc1ZVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVkQlFVY3NXVUZCVnp0QlFVTnVReXhoUVVGSkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEWkN4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU5zUXl4cFFrRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEVkN4eFFrRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVOMlJDeEpRVUZKTEVsQlFVa3NSMEZCUnl4RFFVRkRPenRCUVVWb1FpeHhRa0ZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0alFVTTVRanRWUVVOS08wRkJRMFFzWjBKQlFVOHNTVUZCU1N4RFFVRkRPMDFCUTJZc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk03T3pzN096czdRVU5xUW5oRExHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRGRrSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFZEJRVWNzV1VGQlZ6dEJRVUZGTEdkQ1FVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMDFCUVVVc1EwRkJRenRGUVVOMlJUczdjMEpCUldNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKT3pzN096czdPMEZEVG01RExHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFVkJRVVU3T3pzN08wRkJTM1JDTEZWQlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhIUVVGSExGVkJRVk1zVVVGQlVTeEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTTVReXhoUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYUVJc1kwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEYmtNc2JVSkJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0VlFVTnFSVHRCUVVORUxHZENRVUZQTEUxQlFVMHNRMEZCUXp0TlFVTnFRanRGUVVOS096dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWM3T3pzN096czdRVU5vUW14RExHRkJRVmtzUTBGQlF6czdPenM3TzNGQ1FVVk9MRVZCUVZVN08wRkJSV3BDTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU4wUWl4VlFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUjBGQlJ5eFpRVUZYTzBGQlF6ZENMR2RDUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenR2UWtGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8xVkJRVUVzUTBGQlF5eERRVUZETzAxQlEycEVPMFZCUTBvN08zTkNRVVZqTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSenM3T3pzN096dEJRMVpzUXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RlFVRkZPenM3T3pzN1FVRk5la0lzVlVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJVeXhSUVVGUkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEycEVMR0ZCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMEZCUTNCQ0xHMUNRVUZOTEVsQlFVa3NVMEZCVXl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdWVUZEZEVVN1FVRkRSQ3hoUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRja0lzWTBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRia01zYlVKQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1ZVRkRja1U3UVVGRFJDeG5Ra0ZCVHl4TlFVRk5MRU5CUVVNN1RVRkRha0lzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMDdPenM3T3pzN1FVTndRbkpETEdGQlFWa3NRMEZCUXpzN096czdPM0ZDUVVWT0xFVkJRVlU3TzBGQlJXcENMRXRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTjBRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NSMEZCUnl4WlFVRlhPMEZCUXpkQ0xHZENRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dHZRa0ZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETzFWQlFVRXNRMEZCUXl4RFFVRkRPMDFCUTJwRU8wVkJRMG83TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ6czdPenM3T3p0QlExWnNReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVN096czdPenM3TzBGQlVXUXNWVUZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFWazdZVUZCVml4SlFVRkpMSGxFUVVGSExFTkJRVU03TzBGQlEzSkRMR0ZCUVVrc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5tTEdGQlFVa3NVVUZCVVN4SFFVRkhMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzU1VGQlNTeFBRVUZQTEVWQlFVVXNTMEZCU3l4UlFVRlJMRU5CUVVNN1FVRkRiRVVzWVVGQlNTeExRVUZMTEVkQlFVY3NVVUZCVVN4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRelZFTEdGQlFVa3NSMEZCUnl4SFFVRkhMRkZCUVZFc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4wUkN4aFFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRNMElzWVVGQlNTeExRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU01UWl4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRk8wRkJRek5FTEd0Q1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFWQlEzSkVPMEZCUTBRc1owSkJRVThzUzBGQlN5eERRVUZETzAxQlEyaENMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNTMEZCU3l4RFFVRkRMRXRCUVVzN096czdPenM3UVVONFFqRkNMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRla0lzVlVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJVeXhEUVVGRExFVkJRVVU3UVVGRGFrTXNZMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzBGQlEzWkRMR2xDUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRaaXh4UWtGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03WTBGRGNrSTdWVUZEU2p0QlFVTkVMR2RDUVVGUExFbEJRVWtzUTBGQlF6dE5RVU5tTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5PenM3T3pzN08wRkRZbkpETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVTdPenM3T3p0QlFVMTJRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSMEZCUnl4VlFVRlRMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGREwwTXNZVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdRVUZEZWtJc2JVSkJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4SFFVRkhMRzlDUVVGdlFpeERRVUZETEVOQlFVTTdWVUZEY0VRN1FVRkRSQ3hqUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTnNReXhwUWtGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0VlFVTnlSVHRCUVVORUxHZENRVUZQTEV0QlFVc3NRMEZCUXp0TlFVTm9RaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNUczdPenM3T3p0QlEyNUNia01zWVVGQldTeERRVUZET3pzN096czdPMEZCUldJc1MwRkJTU3hsUVVGakxFVkJRVVU3T3pzN096dEJRVTFvUWl4WFFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExGVkJRVk1zU1VGQlNTeEZRVUZGTzBGQlF6TkNMR2RDUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNNRUpCUVRCQ0xFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdUVUZETTBRc1EwRkJRenRGUVVOTU96czdPenM3T3pzN1FVTllSQ3h0UWtGQmEwSXNkMFE3T3pzN096dEJRMEZzUWp0QlFVTkJMSGRFT3pzN096czdRVU5FUVR0QlFVTkJPMEZCUTBFc2MwUkJRWEZFTzBGQlEzSkVMSGxDUVVGM1FpdzBRa0ZCTkVJc1owSkJRV2RDTEVkQlFVYzdPenM3T3pzN1FVTklka1U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3MlEwRkJORU03UVVGRE5VTXNhMFZCUVdsRk8wRkJRMnBGTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFc0swUkJRVGhFTzBGQlF6bEVPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVmM3UVVGRFdDeFpRVUZYTzBGQlExZ3NXVUZCVnp0QlFVTllMRmxCUVZjN1FVRkRXQ3hoUVVGWk8wRkJRMW9zWVVGQldUdEJRVU5hTEhWQ096czdPenM3UVVNNVEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2QwTkJRWFZETEdkRE96czdPenM3UVVOSWRrTXNPRUpCUVRaQ08wRkJRemRDTEhORFFVRnhReXhuUXpzN096czdPMEZEUkhKRE8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRU3hIT3pzN096czdRVU5RUVN4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVU3T3pzN1FVRkpka01zVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eFpRVUZYTzBGQlF6bERMR0ZCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdRVUZEYmtJc2JVSkJRVTBzU1VGQlNTeFZRVUZWTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dFZRVU51UkR0QlFVTkVMR0ZCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU5zUml4aFFVRkpMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdkRFFVRm5ReXhGUVVGRkxGVkJRVU1zUlVGQlJTeEZRVUZMTzBGQlEycEZMSEZDUVVGUkxFVkJRVVU3UVVGRFZpeHpRa0ZCU3l4TFFVRkxPMEZCUVVVc05FSkJRVThzWTBGQll5eERRVUZETzBGQlEyeERMSE5DUVVGTExFbEJRVWs3UVVGQlJTdzBRa0ZCVHl4SlFVRkpMRU5CUVVNN1FVRkRka0lzYzBKQlFVc3NTVUZCU1R0QlFVRkZMRFJDUVVGUExHbENRVUZwUWl4RFFVRkRPMEZCUTNCRExITkNRVUZMTEVkQlFVYzdRVUZCUlN3MFFrRkJUeXhQUVVGUExFTkJRVU03UVVGRGVrSXNjMEpCUVVzc1IwRkJSenRCUVVGRkxEUkNRVUZQTEUxQlFVMHNRMEZCUXp0QlFVTjRRaXh6UWtGQlN5eEhRVUZITzBGQlFVVXNORUpCUVU4c1QwRkJUeXhEUVVGRE8wRkJRVUVzWTBGRGVFSTdWVUZEU2l4RFFVRkRMRU5CUVVNN1FVRkRTQ3huUWtGQlR5eEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzAxQlF6VkRMRU5CUVVNN1JVRkRURHRCUVVORUxFdEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVOeVFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEcxQ1FVRnRRaXhEUVVGRE8wVkJRemRFT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEcxQ1FVRnRRanM3T3pzN096dEJRelZDYmtRc1lVRkJXU3hEUVVGRE96czdPenM3Y1VKQlJVNHNSVUZCWlRzN1FVRkZkRUlzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRk96czdPenRCUVV0NlFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVExGZEJRVmNzUlVGQlJUdEJRVU16UXl4aFFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEyeEVMR0ZCUVVrc1YwRkJWeXhGUVVGRkxFOUJRVThzVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpkRExHZENRVUZQTEUxQlFVMHNRMEZCUXp0TlFVTnFRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN6czdPenM3T3p0QlEyaENja01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGZEJRVmNzUlVGQlJUdEJRVU12UWl4WFFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGZEJRVmNzUjBGQlJ5eFpRVUZYTzBGQlEzUkRMR2RDUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNaME5CUVdkRExFVkJRVVVzVlVGQlF5eEZRVUZGTEVWQlFVczdRVUZETVVRc2NVSkJRVkVzUlVGQlJUdEJRVU5XTEhOQ1FVRkxMRTFCUVUwN1FVRkJSU3cwUWtGQlR5eEhRVUZITEVOQlFVTTdRVUZEZUVJc2MwSkJRVXNzVFVGQlRUdEJRVUZGTERSQ1FVRlBMRWRCUVVjc1EwRkJRenRCUVVONFFpeHpRa0ZCU3l4UFFVRlBPMEZCUVVVc05FSkJRVThzUjBGQlJ5eERRVUZETzBGQlEzcENMSE5DUVVGTExFOUJRVTg3UVVGQlJTdzBRa0ZCVHl4SFFVRkhMRU5CUVVNN1FVRkRla0lzYzBKQlFVc3NUMEZCVHp0QlFVRkZMRFJDUVVGUExFZEJRVWNzUTBGQlF6dEJRVU42UWp0QlFVRlRMRFJDUVVGUExFVkJRVVVzUTBGQlF6dEJRVUZCTEdOQlEyeENPMVZCUTBvc1EwRkJReXhEUVVGRE8wMUJRMDQ3UlVGRFNqczdjMEpCUldNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYT3pzN096czdPMEZEYWtJelF5eGhRVUZaTEVOQlFVTTdPenM3TzBGQlJXSXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlF6ZENMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV5eEhRVUZITEZWQlFWTXNSMEZCUnl4RlFVRkZPMEZCUTNaRExHRkJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlEzaERMR0ZCUVVrc1NVRkJTU3hIUVVGSExFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpGQ0xHZENRVUZQTEVOQlFVTXNRMEZCUXp0TlFVTmFMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVE96czdPenM3TzBGRFZucERMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVN096czdRVUZKTlVJc1UwRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUZCVXl4SFFVRkhMRVZCUVVVN1FVRkJSU3haUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGQlJTeERRVUZETzBWQlEyaEdPenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFN096czdPenM3UVVOVWVFTXNZVUZCV1N4RFFVRkRPenM3T3pzN2NVSkJSVTRzUTBGQmIwSTdPM0ZDUVVOd1FpeEZRVUZoT3p0QlFVVndRaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRVZCUVVVN096czdPenM3UVVGUE4wSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFZEJRVWNzVlVGQlV5eFRRVUZUTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1JVRkJSVHM3TzBGQlEyaEZMR0ZCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4aFFVRkpMRTlCUVU4c1IwRkJSeXhUUVVGV0xFOUJRVTg3YjBKQlFWTXNWMEZCVlN4UlFVRlJMRU5CUVVNN1ZVRkJRU3hEUVVGRE8wRkJRM2hETEdGQlFVa3NVVUZCVVN4SFFVRkhMRk5CUVZnc1VVRkJVVHR2UWtGQlV5eFhRVUZWTEZGQlFWRXNSVUZCUlN4RFFVRkRPMVZCUVVFc1EwRkJRenM3UVVGRk0wTXNhMEpCUVZNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhQUVVGUExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenM3UVVGRmJFWXNZVUZCU1N4UFFVRlBMRTlCUVU4c1JVRkJSU3hMUVVGTExGRkJRVkVzUlVGQlJUdEJRVU12UWl4dFFrRkJUU3hKUVVGSkxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4clFrRkJhMElzUTBGQlF5eERRVUZETzFWQlEzWkVPMEZCUTBRc2EwSkJRVk1zUjBGQlJ5eFJRVUZSTEVWQlFVVXNRMEZCUXpzN1FVRkZka0lzWlVGQlRTeEhRVUZITEU5QlFVOHNUMEZCVHl4RlFVRkZMRXRCUVVzc1VVRkJVU3hIUVVGSExGRkJRVkVzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXpzN1FVRkZla1FzWVVGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4aFFVRkpMRVZCUVVVc1RVRkJUU3hIUVVGSExGTkJRVk1zUTBGQlF5eEZRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPenRCUVVWMlF5eGhRVUZKTEZsQlFWa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzBGQlF5OURMR0ZCUVVrc1dVRkJXU3hIUVVGSExGTkJRVk1zUlVGQlJUdEJRVU14UWl4dFFrRkJUU3hKUVVGSkxGVkJRVlVzUTBGQlF5dzBRMEZCTkVNc1EwRkJReXhEUVVGRE8xVkJRM1JGTzBGQlEwUXNZVUZCU1N4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM1JDTEdGQlFVa3NZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMFFpeGpRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOc1F5eHBRa0ZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhwUWtGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEJRVU12UWl4cFFrRkJTU3hoUVVGaExFZEJRVWNzUTBGQlF5eEhRVUZITEZOQlFWTXNSMEZCUnl4WlFVRlpMRVZCUVVVc1RVRkJUVHRCUVVONFJDd3dRa0ZCWVN4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOdVFpeDVRa0ZCV1N4SlFVRkpMRU5CUVVNc1EwRkJRenRWUVVOeVFqdEJRVU5FTEdkQ1FVRlBMRmxCUVZrc1IwRkJSeXhOUVVGTkxFTkJRVU03VFVGRGFFTXNRMEZCUXp0RlFVTk1PenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNN096czdPenM3UVVNNVEzcERMR0ZCUVZrc1EwRkJRenM3T3pzN08zRkNRVVZPTEVOQlFXOUNPenRCUVVVelFpeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFVkJRVVU3T3pzN08wRkJTemRDTEZkQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhIUVVGSExGVkJRVk1zVTBGQlV5eEZRVUZGT3pzN1FVRkROME1zWVVGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xHRkJRVWtzVDBGQlR5eEhRVUZITEZOQlFWWXNUMEZCVHp0dlFrRkJVeXhYUVVGVkxGRkJRVkVzUTBGQlF6dFZRVUZCTEVOQlFVTTdRVUZEZUVNc1lVRkJTU3hSUVVGUkxFZEJRVWNzVTBGQldDeFJRVUZSTzI5Q1FVRlRMRmRCUVZVc1VVRkJVU3hGUVVGRkxFTkJRVU03VlVGQlFTeERRVUZET3p0QlFVVXpReXhyUWtGQlV5eEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEU5QlFVOHNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEyeEdMR0ZCUVVrc1UwRkJVeXhMUVVGTExFdEJRVXNzUlVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSVFZETEdGQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVObUxHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExHbENRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6TkNMSEZDUVVGUkxFdEJRVXM3UVVGRFlpeHpRa0ZCU3l4RlFVRkZMRU5CUVVNc1NVRkJTU3hSUVVGUkxFTkJRVU03UVVGRGFrSXNNa0pCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRFdpd3lRa0ZCVFR0QlFVTldMSE5DUVVGTExFVkJRVVVzVDBGQlR5eFRRVUZUTEV0QlFVc3NVVUZCVVN4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGJFUXNNa0pCUVUwc1NVRkJTU3hUUVVGVExFTkJRVU03UVVGRGNFSXNNa0pCUVUwN1FVRkRWaXh6UWtGQlN5eEZRVUZGTEVOQlFVTXNTVUZCU1N4UlFVRlJMRU5CUVVNN1FVRkRha0lzTWtKQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRXaXd5UWtGQlRUdEJRVU5XTEhOQ1FVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxGRkJRVkVzUTBGQlF6dEJRVU5xUWl3eVFrRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU5hTERKQ1FVRk5PMEZCUTFZN1FVRkRTU3d5UWtGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVRkJMR05CUTJZN1ZVRkRTanRCUVVORUxHZENRVUZQTEUxQlFVMHNRMEZCUXp0TlFVTnFRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV6czdPenM3T3p0QlEzcERla01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJUczdPenM3UVVGTE5VSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFZEJRVWNzVlVGQlV5eEhRVUZITEVWQlFVVTdRVUZEZEVNc1lVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVNNVFpeG5Ra0ZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXp0TlFVTTVSQ3hEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVUczdPenM3T3p0QlEySjRReXhoUVVGWkxFTkJRVU03T3pzN096dHhRa0ZGVGl4RFFVRnRRanM3UVVGRk1VSXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlF6RkNMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEZsQlFWYzdPenRCUVVOcVF5eG5Ra0ZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRlZCUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVczdRVUZETTBRc2NVSkJRVkVzUlVGQlJUdEJRVU5XTEhOQ1FVRkxMRWxCUVVrN1FVRkJSU3cwUWtGQlR5eEhRVUZITEVOQlFVTTdRVUZEZEVJc2MwSkJRVXNzU1VGQlNUdEJRVUZGTERSQ1FVRlBMRWRCUVVjc1EwRkJRenRCUVVOMFFpeHpRa0ZCU3l4SlFVRkpPMEZCUVVVc05FSkJRVThzUjBGQlJ5eERRVUZETzBGQlEzUkNPMEZCUVZNc05FSkJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVjBGQlZTeERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1YwRkJWU3hEUVVGRExFTkJRVU1zWVVGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUVVFc1kwRkRkRWc3VlVGRFNpeERRVUZETEVOQlFVTTdUVUZEVGp0RlFVTktPenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwN096czdPenM3UVVOcVFuUkRMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4bFFVRmxMRVZCUVVVN096czdPMEZCUzI1RExGZEJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNaVUZCWlN4SFFVRkhMRmxCUVZjN1FVRkRNVU1zWVVGQlNTeExRVUZMTEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU03UVVGRGRFTXNZVUZCU1N4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMjVDTEdGQlFVa3NUMEZCVHl4aFFVRkRPMEZCUTFvc1owSkJRVThzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3UVVGREwwSXNhVUpCUVVrc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhwUWtGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEVsQlFVa3NSVUZCUlR0QlFVTndSQ3d3UWtGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGpRVU01UWp0VlFVTktPMEZCUTBRc1owSkJRVThzVTBGQlV5eERRVUZETzAxQlEzQkNMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhsUVVGbE96czdPenM3TzBGRGNrSXZReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRk96czdPenRCUVVzelFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVExFbEJRVWtzUlVGQlJUdEJRVU4wUXl4aFFVRkpMRVZCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEySXNiVUpCUVUwc1NVRkJTU3hWUVVGVkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJRenRWUVVNNVF6dEJRVU5FTEdGQlFVa3NUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRPMEZCUTI1RUxHRkJRVWtzVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnFRaXhqUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTNoRExHOUNRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xVkJRM3BETzBGQlEwUXNaMEpCUVU4c1QwRkJUeXhEUVVGRE8wMUJRMnhDTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBPenM3T3pzN08wRkRjRUoyUXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RlFVRkZPenM3T3p0QlFVdG9ReXhYUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NSMEZCUnl4VlFVRlRMRWxCUVVrc1JVRkJSVHRCUVVNelF5eGhRVUZKTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRMklzYlVKQlFVMHNTVUZCU1N4VlFVRlZMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXp0VlFVTTVRenRCUVVORUxHRkJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RlFVRkZMRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzBGQlEyNUVMR0ZCUVVrc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5xUWl4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTzBGQlEzaERMRzlDUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdWVUZEZEVRN1FVRkRSQ3huUWtGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1RVRkROVUlzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWazdPenM3T3pzN1FVTndRalZETEdGQlFWa3NRMEZCUXpzN096czdPM0ZDUVVWT0xFVkJRVlU3TzBGQlJXcENMRXRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlRzN096czdPMEZCVFROQ0xGZEJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCUVZNc1RVRkJUU3hGUVVGRkxGRkJRVkVzUlVGQlJUdEJRVU5zUkN4aFFVRkpMRTlCUVU4c1RVRkJUU3hMUVVGTExGRkJRVkVzUlVGQlJUdEJRVU0xUWl4dFFrRkJUU3hKUVVGSkxGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFZRVU53UkR0QlFVTkVMR0ZCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTTVRaXhoUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NUVUZCVFN4RlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBGQlEyeEVMR2RDUVVGUExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1RVRkRiRVVzUTBGQlF6dEZRVU5NTzBGQlEwUXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTzBGQlEzaENMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRE8wVkJRM0JFT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVODdPenM3T3pzN1FVTjJRblpETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVWQlFVVTdPenM3TzBGQlN6RkNMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEZWQlFWTXNTMEZCU3l4RlFVRkZPMEZCUTNSRExHRkJRVWtzUlVGQlJTeExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkRaaXh0UWtGQlRTeEpRVUZKTEZWQlFWVXNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzFWQlF5OURPMEZCUTBRc1lVRkJTU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEyaENMR05CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRE5VSXNiVUpCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdWVUZETjBJN1FVRkRSQ3huUWtGQlR5eE5RVUZOTEVOQlFVTTdUVUZEYWtJc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTA3T3pzN096czdRVU51UW5SRExHRkJRVmtzUTBGQlF6czdPenM3TzNGQ1FVVk9MRVZCUVdFN08wRkJSWEJDTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJUczdPenM3UVVGTGVrSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFZEJRVWNzVlVGQlV5eFRRVUZUTEVWQlFVVTdRVUZEZWtNc1owSkJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdUVUZEZGtZN1JVRkRTanM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTE96czdPenM3TzBGRFpISkRMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRVZCUVVVN1FVRkROMElzVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1dVRkJWenRCUVVOd1F5eG5Ra0ZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHTkJRV01zUlVGQlJTeFZRVUZETEVWQlFVVXNSVUZCU3p0QlFVTjRReXh4UWtGQlVTeEZRVUZGTzBGQlExWXNjMEpCUVVzc1IwRkJSenRCUVVGRkxEUkNRVUZQTEUxQlFVMHNRMEZCUXp0QlFVTjRRaXh6UWtGQlN5eEhRVUZITzBGQlFVVXNORUpCUVU4c1RVRkJUU3hEUVVGRE8wRkJRM2hDTEhOQ1FVRkxMRWRCUVVjN1FVRkJSU3cwUWtGQlR5eFBRVUZQTEVOQlFVTTdRVUZEZWtJc2MwSkJRVXNzUjBGQlJ6dEJRVUZGTERSQ1FVRlBMRTlCUVU4c1EwRkJRenRCUVVONlFpeHpRa0ZCU3l4SFFVRkhPMEZCUVVVc05FSkJRVThzVDBGQlR5eERRVUZETzBGQlEzcENPMEZCUVZNc05FSkJRVThzUlVGQlJTeERRVUZETzBGQlFVRXNZMEZEYkVJN1ZVRkRTaXhEUVVGRExFTkJRVU03VFVGRFRqdEZRVU5LT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTTdPenM3T3pzN1FVTnFRbnBETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVWQlFVVTdPenM3TzBGQlMzcENMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEhRVUZITEZWQlFWTXNWMEZCVnl4RlFVRkZPMEZCUXpORExHRkJRVWtzVDBGQlR5eFhRVUZYTEV0QlFVc3NVMEZCVXl4RlFVRkZMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGVrUXNZVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0QlFVTnNReXhwUWtGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4RlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBGQlF6TkdMR2xDUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VlVGRE9VWTdRVUZEUkN4blFrRkJUeXhIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXp0TlFVTXpRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN6czdPenM3T3p0QlEycENja01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJUczdPenM3UVVGTGVrSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFZEJRVWNzVlVGQlV5eExRVUZMTEVWQlFVVTdRVUZCUlN4blFrRkJUeXhKUVVGSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1RVRkJSU3hEUVVGRE8wVkJRMmhHTzBGQlEwUXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEzSkNMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRE8wVkJReTlET3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVczdPenM3T3pzN1FVTmlja01zWVVGQldTeERRVUZET3pzN096czdjVUpCUlU0c1JVRkJWVHM3UVVGRmFrSXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGT3pzN096czdRVUZOTlVJc1YwRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUZCVXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRk8wRkJRMjVFTEdGQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1VVRkJVU3hGUVVGRk8wRkJRelZDTEcxQ1FVRk5MRWxCUVVrc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xVkJRM0JFTzBGQlEwUXNZVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlF6bENMR0ZCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeE5RVUZOTEVWQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03UVVGRGJFUXNaMEpCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0TlFVTnNSU3hEUVVGRE8wVkJRMHc3UVVGRFJDeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRGVFSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1JVRkRja1E3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVUczdPenM3T3p0QlEzWkNlRU1zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVlVzUlVGQlJUczdPenRCUVVrNVFpeFRRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGVExFZEJRVWNzUlVGQlJUdEJRVUZGTEZsQlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZCUlN4RFFVRkRPMFZCUTI1R096dHpRa0ZGWXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVlU3T3pzN096czdRVU5VTVVNc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVNelFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWE8wRkJRMnhETEdGQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFdEJRMlFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZETDBRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlJTeEZRVUZGTzBGQlEyNUZMRzlDUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VlVGRE5VSTdRVUZEUkN4blFrRkJUeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdUVUZETVVJc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThpTENKbWFXeGxJam9pY0hKdmRHOHVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2xjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNibHh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzBzWEc0Z1hIUmNkRngwYVdRNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHeHZZV1JsWkRvZ1ptRnNjMlZjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1Ykc5aFpHVmtJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWd3S1R0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUhkbFluQmhZMnN2WW05dmRITjBjbUZ3SURCaU5EQTVaak13TURGaE1EazFZMkZsTldZNVhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJOdmJuUmhhVzV6SjF4dWFXMXdiM0owSUNjdUwyRnljbUY1Y3k5bGRtVnllU2RjYm1sdGNHOXlkQ0FuTGk5aGNuSmhlWE12Wm1sc2RHVnlKMXh1YVcxd2IzSjBJQ2N1TDJGeWNtRjVjeTltYVhKemRDZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZabXhoZEUxaGNDZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZaM0p2ZFhCQ2VTZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZaM0p2ZFhCbFpDZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZaM0p2ZFhCbFpGSnBaMmgwSjF4dWFXMXdiM0owSUNjdUwyRnljbUY1Y3k5cGJtTnNkV1JsSjF4dWFXMXdiM0owSUNjdUwyRnljbUY1Y3k5cGJtUmxlRTltSjF4dWFXMXdiM0owSUNjdUwyRnljbUY1Y3k5cGMwRnljbUY1SjF4dWFXMXdiM0owSUNjdUwyRnljbUY1Y3k5cWIybHVVR0YwYUhNblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwyeGhjM1FuWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDIxaGNDZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZiV0Y0SjF4dWFXMXdiM0owSUNjdUwyRnljbUY1Y3k5dGFXNG5YRzVwYlhCdmNuUWdKeTR2WVhKeVlYbHpMM0poYm1kbEoxeHVhVzF3YjNKMElDY3VMMkZ5Y21GNWN5OXlaV1IxWTJVblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwzSmxiVzkyWlNkY2JtbHRjRzl5ZENBbkxpOWhjbkpoZVhNdmMyOXRaU2RjYmx4dWFXMXdiM0owSUNjdUwzSmxaMlY0Y0hNdlpYTmpZWEJsSjF4dVhHNXBiWEJ2Y25RZ0p5NHZjM1J5YVc1bmN5OWhiblJUZEhsc1pWQmhkR2hVYjFKbFoyVjRKMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012WW5JeWJtd25YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTlqYjIxd1lYSmxWRzhuWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5amIyNTBZV2x1Y3lkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwyTjFkSE4wY21sdVp5ZGNibWx0Y0c5eWRDQW5MaTl6ZEhKcGJtZHpMMlZ1WkhOWGFYUm9KMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012Wm05eWJXRjBKMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012Wm05eWJXRjBWbUZ5YVdGaWJHVnpKMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012WjJWMFRHVnVaM1JvSjF4dWFXMXdiM0owSUNjdUwzTjBjbWx1WjNNdlozSnZkWEJsWkNkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwyZHliM1Z3WldSU2FXZG9kQ2RjYm1sdGNHOXlkQ0FuTGk5emRISnBibWR6TDJ4bFpuUlFZV1FuWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5dWJESmljaWRjYm1sdGNHOXlkQ0FuTGk5emRISnBibWR6TDNGMWIzUmxKMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012Y21WblpYZ25YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTl5WlhCbFlYUW5YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTl5YVdkb2RGQmhaQ2RjYm1sdGNHOXlkQ0FuTGk5emRISnBibWR6TDNOMFlYSjBjMWRwZEdnblhHNXBiWEJ2Y25RZ0p5NHZjM1J5YVc1bmN5OTFibkYxYjNSbEoxeHVhVzF3YjNKMElDY3VMM04wY21sdVozTXZlRzFzUlhOallYQmxKMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012ZUcxc1ZXNWxjMk5oY0dVblhHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTlwYm1SbGVDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElDY3VMMmx1WkdWNFQyWW5YRzVjYm1sbUlDZ2hRWEp5WVhrdWNISnZkRzkwZVhCbExtTnZiblJoYVc1ektTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIc3FmU0JoWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjFjYmlBZ0lDQWdLaTljYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVkyOXVkR0ZwYm5NZ1BTQm1kVzVqZEdsdmJpaGhLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtbHVaR1Y0VDJZb1lTa2dQajBnTUR0Y2JpQWdJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG5CeWIzUnZkSGx3WlM1amIyNTBZV2x1Y3p0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OWpiMjUwWVdsdWN5NXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGQmNuSmhlUzV3Y205MGIzUjVjR1V1YVc1a1pYaFBaaWtnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3S24wZ2FYUmxiVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1YVc1a1pYaFBaaUE5SUdaMWJtTjBhVzl1S0dsMFpXMHBJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FTQnBiaUIwYUdseklDWW1JSFJvYVhOYmFWMGdQVDA5SUdsMFpXMHBJSEpsZEhWeWJpQnBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWFXNWtaWGhQWmp0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OXBibVJsZUU5bUxtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVsZG1WeWVTa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR05oYkd4aVlXTnJYRzRnSUNBZ0lDb2dRSEJoY21GdElIc3FmU0JiWTI5dWRHVjRkRjFjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1bGRtVnllU0E5SUdaMWJtTjBhVzl1S0dOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZqWVd4c1ltRmpheTVqWVd4c0tHTnZiblJsZUhRZ2ZId2dkR2hwY3l3Z2RHaHBjMXRwWFN3Z2FTd2dkR2hwY3lrcElISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVaWFpsY25rN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTloY25KaGVYTXZaWFpsY25rdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbHRjRzl5ZENBbkxpOW1iR0YwVFdGd0oxeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1bWFXeDBaWElwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCallXeHNZbUZqYTF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3S24wZ1cyTnZiblJsZUhSZFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1FYSnlZWGw5WEc0Z0lDQWdJQ292WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExtWnBiSFJsY2lBOUlHWjFibU4wYVc5dUtHTmhiR3hpWVdOckxDQmpiMjUwWlhoMEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1ac1lYUk5ZWEFvS0dFc0lHa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoallXeHNZbUZqYXk1allXeHNLR052Ym5SbGVIUWdmSHdnZEdocGN5d2dZU3dnYVN3Z2RHaHBjeWtwSUhKbGRIVnliaUJoTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVabWxzZEdWeU8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMMlpwYkhSbGNpNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElDY3VMMmx6UVhKeVlYa25YRzVjYm1sbUlDZ2hRWEp5WVhrdWNISnZkRzkwZVhCbExtWnNZWFJOWVhBcElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQmpZV3hzWW1GamExeHVJQ0FnSUNBcUlFQndZWEpoYlNCN0tuMGdXMk52Ym5SbGVIUmRYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQkJjbkpoZVZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW1iR0YwVFdGd0lEMGdablZ1WTNScGIyNG9ZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISmxjM1ZzZEhNZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NtVnpkV3gwSUQwZ1kyRnNiR0poWTJzdVkyRnNiQ2hqYjI1MFpYaDBJSHg4SUhSb2FYTXNJSFJvYVhOYmFWMHNJR2tzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb2NtVnpkV3gwS1NsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFJ6TG5CMWMyZ3VZWEJ3Ykhrb2NtVnpkV3gwY3l3Z2NtVnpkV3gwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSEpsYzNWc2RDbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhSekxuQjFjMmdvY21WemRXeDBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBjenRjYmlBZ0lDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVtYkdGMFRXRndPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDJac1lYUk5ZWEF1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hRWEp5WVhrdWFYTkJjbkpoZVNrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN0tuMGdiMkpxWEc0Z0lDQWdJQ29nUUhOMFlYUnBZMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FYSnlZWGt1YVhOQmNuSmhlU0E5SUdaMWJtTjBhVzl1S0c5aWFpa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWpZV3hzS0c5aWFpa2dQVDA5SUNkYmIySnFaV04wSUVGeWNtRjVYU2M3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FYSnlZWGt1YVhOQmNuSmhlVHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwyRnljbUY1Y3k5cGMwRnljbUY1TG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW1hWEp6ZENrZ2UxeHVJQ0FnSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVtYVhKemRDQTlJR1oxYm1OMGFXOXVLQ2tnZXlCeVpYUjFjbTRnZEdocGMxc3dYVHNnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRWEp5WVhrdWNISnZkRzkwZVhCbExtWnBjbk4wTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwyWnBjbk4wTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW5jbTkxY0VKNUtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdZMkZzYkdKaFkydGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5cDlJRnRqYjI1MFpYaDBYVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM3Q5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW5jbTkxY0VKNUlEMGdablZ1WTNScGIyNG9ZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRWtMbWx6Um5WdVkzUnBiMjRvWTJGc2JHSmhZMnNwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9ZMkZzYkdKaFkyc2dLeUJjSWlCcGN5QnViM1FnWVNCbWRXNWpkR2x2Ymx3aUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVnpkV3gwSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhaaGJIVmxJRDBnZEdocGMxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JyWlhrZ1BTQmpZV3hzWW1GamF5NWpZV3hzS0dOdmJuUmxlSFFnZkh3Z2RHaHBjeXdnZG1Gc2RXVXNJR2tzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hyWlhrZ2FXNGdjbVZ6ZFd4MEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUmJhMlY1WFM1d2RYTm9LSFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxiSE5sWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZEZ0clpYbGRJRDBnVzNaaGJIVmxYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW5jbTkxY0VKNU8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMMmR5YjNWd1Fua3Vhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWxtSUNnaFFYSnlZWGt1Y0hKdmRHOTBlWEJsTG1keWIzVndaV1FwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYzJsNlpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwRnljbUY1UEVGeWNtRjVQbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVozSnZkWEJsWkNBOUlHWjFibU4wYVc5dUtITnBlbVVwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEpsYzNWc2RITWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG14bGJtZDBhRHNnYVNBclBTQnphWHBsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUnpMbkIxYzJnb2RHaHBjeTV6YkdsalpTaHBMQ0JwSUNzZ2MybDZaU2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFJ6TzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG5CeWIzUnZkSGx3WlM1bmNtOTFjR1ZrTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwyZHliM1Z3WldRdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbWR5YjNWd1pXUlNhV2RvZENrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCemFYcGxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdRWEp5WVhrOFFYSnlZWGsrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW5jbTkxY0dWa1VtbG5hSFFnUFNCbWRXNWpkR2x2YmloemFYcGxLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlaWE4xYkhSeklEMGdXMTA3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQjBhR2x6TG14bGJtZDBhRHNnYVNBK0lEQTdJR2tnTFQwZ2MybDZaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MGN5NXdkWE5vS0hSb2FYTXVjMnhwWTJVb1RXRjBhQzV0WVhnb01Dd2dhU0F0SUhOcGVtVXBMQ0JwS1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZEhNdWNtVjJaWEp6WlNncE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW5jbTkxY0dWa1VtbG5hSFE3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OWhjbkpoZVhNdlozSnZkWEJsWkZKcFoyaDBMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwYlhCdmNuUWdKeTR2YVc1a1pYaFBaaWRjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXVhVzVqYkhWa1pTa2dlMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1cGJtTnNkV1JsSUQwZ1puVnVZM1JwYjI0b1lTa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FTQTlJSFJvYVhNdWFXNWtaWGhQWmloaEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0drZ1BpQXRNU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE5iYVYwZ1BTQmhPMXh1SUNBZ0lDQWdJQ0JsYkhObFhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQjFjMmdvWVNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVwYm1Oc2RXUmxPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDJsdVkyeDFaR1V1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hRWEp5WVhrdWNISnZkRzkwZVhCbExtcHZhVzVRWVhSb2N5a2dlMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1cWIybHVVR0YwYUhNZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnYkdWMElIQmhkR2dnUFNBbkp6dGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGMxdHBYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdZWFJvTG14bGJtZDBhQ0ErSURBZ0ppWWdjR0YwYUM1amFHRnlRWFFvY0dGMGFDNXNaVzVuZEdnZ0xTQXhLU0FoUFQwZ0p5OG5LVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1lYUm9JQ3M5SUNjdkp6dGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJoZEdnZ0t6MGdkR2hwYzF0cFhTNTBiMU4wY21sdVp5Z3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQndZWFJvTzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG5CeWIzUnZkSGx3WlM1cWIybHVVR0YwYUhNN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTloY25KaGVYTXZhbTlwYmxCaGRHaHpMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1c1lYTjBLU0I3WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExteGhjM1FnUFNCbWRXNWpkR2x2YmlncElIc2djbVYwZFhKdUlIUm9hWE5iZEdocGN5NXNaVzVuZEdnZ0xTQXhYVHNnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRWEp5WVhrdWNISnZkRzkwZVhCbExteGhjM1E3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OWhjbkpoZVhNdmJHRnpkQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWJXRndLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnRjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUZ0amIyNTBaWGgwWFZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXRZWEFnUFNCbWRXNWpkR2x2YmloallXeHNZbUZqYXl3Z1kyOXVkR1Y0ZENrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY21WemRXeDBJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F4T3lCcElEdzlJSFJvYVhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZEM1d2RYTm9LR05oYkd4aVlXTnJMbU5oYkd3b1kyOXVkR1Y0ZENCOGZDQjBhR2x6TENCMGFHbHpXMmxkTENCcExDQjBhR2x6S1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JpQWdJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG5CeWIzUnZkSGx3WlM1dFlYQTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5aGNuSmhlWE12YldGd0xtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBiWEJ2Y25RZ0p5NHZjbVZrZFdObEoxeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1dFlYZ3BJSHRjYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWJXRjRJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsWkhWalpTZ29ZU3dnWWlrZ1BUNGdLR0VnUGlCaUtTQS9JR0VnT2lCaUtUdGNiaUFnSUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXRZWGc3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OWhjbkpoZVhNdmJXRjRMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1eVpXUjFZMlVwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCallXeHNZbUZqYTF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3S24wZ1cyTnZiblJsZUhSZFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN0tuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1Y21Wa2RXTmxJRDBnWm5WdVkzUnBiMjRvWTJGc2JHSmhZMnNzSUdOdmJuUmxlSFFwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0VvZEdocGN5NXNaVzVuZEdnZ1BpQXdLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSWxKbFpIVmpaU0J2WmlCbGJYQjBlU0JoY25KaGVTQjNhWFJvSUc1dklHbHVhWFJwWVd3Z2RtRnNkV1ZjSWlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUhSb2FYTmJNRjA3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXhPeUJwSUR3OUlIUm9hWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkQ0E5SUdOaGJHeGlZV05yTG1OaGJHd29ZMjl1ZEdWNGRDQjhmQ0IwYUdsekxDQnlaWE4xYkhRc0lIUm9hWE5iYVYwc0lHa3NJSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRWEp5WVhrdWNISnZkRzkwZVhCbExuSmxaSFZqWlR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OXlaV1IxWTJVdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbHRjRzl5ZENBbkxpOXlaV1IxWTJVblhHNWNibWxtSUNnaFFYSnlZWGt1Y0hKdmRHOTBlWEJsTG0xcGJpa2dlMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1dGFXNGdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbVZrZFdObEtDaGhMQ0JpS1NBOVBpQW9ZU0E4SUdJcElEOGdZU0E2SUdJcE8xeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRWEp5WVhrdWNISnZkRzkwZVhCbExtMXBianRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwyRnljbUY1Y3k5dGFXNHVhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWxtSUNnaFFYSnlZWGt1Y21GdVoyVXBJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNueHpkSEpwYm1kOUlHWnliMjFjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNueHpkSEpwYm1kOUlIUnZYRzRnSUNBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlITjBaWEJjYmlBZ0lDQWdLaUJBYzNSaGRHbGpYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdRWEp5WVhsOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUVhKeVlYa3VjbUZ1WjJVZ1BTQm1kVzVqZEdsdmJpaG1jbTl0TENCMGJ5d2djM1JsY0NBOUlERXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISmhibWRsSUQwZ1cxMDdYRzRnSUNBZ0lDQWdJR3hsZENCcGMwNTFiV0psY2lBOUlIUjVjR1Z2WmlCbWNtOXRJRDA5UFNBbmJuVnRZbVZ5SnlBbUppQjBlWEJsYjJZZ2RHOGdQVDA5SUNkdWRXMWlaWEluTzF4dUlDQWdJQ0FnSUNCc1pYUWdZbVZuYVc0Z1BTQnBjMDUxYldKbGNpQS9JR1p5YjIwZ09pQm1jbTl0TG5SdlUzUnlhVzVuS0NrdVkyaGhja052WkdWQmRDZ3dLVHRjYmlBZ0lDQWdJQ0FnYkdWMElHVnVaQ0E5SUdselRuVnRZbVZ5SUQ4Z2RHOGdPaUIwYnk1MGIxTjBjbWx1WnlncExtTm9ZWEpEYjJSbFFYUW9NQ2s3WEc0Z0lDQWdJQ0FnSUhOMFpYQWdQU0JOWVhSb0xtRmljeWh6ZEdWd0tTQjhmQ0F4TzF4dUlDQWdJQ0FnSUNCcFppQW9ZbVZuYVc0Z1BpQmxibVFwSUhOMFpYQWdQU0F0YzNSbGNEdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SUdKbFoybHVPeUJ6ZEdWd0lENGdNQ0EvSUdrZ1BEMGdaVzVrSURvZ2FTQStQU0JsYm1RN0lHa2dLejBnYzNSbGNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtRnVaMlV1Y0hWemFDaHBjMDUxYldKbGNpQS9JR2tnT2lCVGRISnBibWN1Wm5KdmJVTm9ZWEpEYjJSbEtHa3BLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21GdVoyVTdYRzRnSUNBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUVhKeVlYa3VjbUZ1WjJVN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTloY25KaGVYTXZjbUZ1WjJVdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbkpsYlc5MlpTa2dlMXh1SUNBZ0lFRnljbUY1TG5CeWIzUnZkSGx3WlM1eVpXMXZkbVVnUFNCbWRXNWpkR2x2YmloaEtTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNCMGFHbHpMbXhsYm1kMGFDQXRJREU3SUdrZ1BqMGdNRHNnTFMxcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwYzF0cFhTQTlQVDBnWVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNCc2FXTmxLR2tzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV5WlcxdmRtVTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5aGNuSmhlWE12Y21WdGIzWmxMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1emIyMWxLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnRjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUZ0amIyNTBaWGgwWFZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5WEc0Z0lDQWdJQ292WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExuTnZiV1VnUFNCbWRXNWpkR2x2YmloallXeHNZbUZqYXl3Z1kyOXVkR1Y0ZENrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVNRdWFYTkdkVzVqZEdsdmJpaGpZV3hzWW1GamF5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loallXeHNZbUZqYXlBcklGd2lJR2x6SUc1dmRDQmhJR1oxYm1OMGFXOXVYQ0lwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR05oYkd4aVlXTnJMbU5oYkd3b1kyOXVkR1Y0ZENCOGZDQjBhR2x6TENCMGFHbHpXMmxkTENCcExDQjBhR2x6S1NrZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiMjFsTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwzTnZiV1V1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hVbVZuUlhod0xtVnpZMkZ3WlNrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCMFpYaDBYRzRnSUNBZ0lDb2dRSE4wWVhScFkxeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxTjBjbWx1WjMxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JTWldkRmVIQXVaWE5qWVhCbElEMGdablZ1WTNScGIyNG9kR1Y0ZENrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHVjRkQzV5WlhCc1lXTmxLQzliTFZ0Y1hGMTdmU2dwS2lzL0xpeGNYRnhjWGlSOEkxeGNjMTB2Wnl3Z0oxeGNYRndrSmljcE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkpsWjBWNGNDNWxjMk5oY0dVN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTl5WldkbGVIQnpMMlZ6WTJGd1pTNXFjMXh1SUNvcUx5SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdleUJjSW1SbFptRjFiSFJjSWpvZ2NtVnhkV2x5WlNoY0ltTnZjbVV0YW5NdmJHbGljbUZ5ZVM5bWJpOXlaV2RsZUhBdlpYTmpZWEJsWENJcExDQmZYMlZ6VFc5a2RXeGxPaUIwY25WbElIMDdYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZZbUZpWld3dGNuVnVkR2x0WlM5amIzSmxMV3B6TDNKbFoyVjRjQzlsYzJOaGNHVXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F5TWx4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2ljbVZ4ZFdseVpTZ25MaTR2TGk0dmJXOWtkV3hsY3k5bGN6Y3VjbVZuWlhod0xtVnpZMkZ3WlNjcE8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMaTh1TGk5dGIyUjFiR1Z6THlRdVkyOXlaU2NwTGxKbFowVjRjQzVsYzJOaGNHVTdYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyWnVMM0psWjJWNGNDOWxjMk5oY0dVdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXlNMXh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aUx5OGdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMkpsYm1waGJXbHVaM0l2VW1WNFJYaHdMbVZ6WTJGd1pWeHVkbUZ5SUNSa1pXWWdQU0J5WlhGMWFYSmxLQ2N1THlRdVpHVm1KeWxjYmlBZ0xDQWtjbVVnSUQwZ2NtVnhkV2x5WlNnbkxpOGtMbkpsY0d4aFkyVnlKeWtvTDF0Y1hGeGNYaVFxS3o4dUtDbDhXMXhjWFh0OVhTOW5MQ0FuWEZ4Y1hDUW1KeWs3WEc0a1pHVm1LQ1JrWldZdVV5d2dKMUpsWjBWNGNDY3NJSHRsYzJOaGNHVTZJR1oxYm1OMGFXOXVJR1Z6WTJGd1pTaHBkQ2w3SUhKbGRIVnliaUFrY21Vb2FYUXBPeUI5ZlNrN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5bGN6Y3VjbVZuWlhod0xtVnpZMkZ3WlM1cWMxeHVJQ29xSUcxdlpIVnNaU0JwWkNBOUlESTBYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENKMllYSWdaMnh2WW1Gc0lDQWdJRDBnY21WeGRXbHlaU2duTGk4a0xtZHNiMkpoYkNjcFhHNGdJQ3dnWTI5eVpTQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOGtMbU52Y21VbktWeHVJQ0FzSUZCU1QxUlBWRmxRUlNBOUlDZHdjbTkwYjNSNWNHVW5PMXh1ZG1GeUlHTjBlQ0E5SUdaMWJtTjBhVzl1S0dadUxDQjBhR0YwS1h0Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUtDbDdYRzRnSUNBZ2NtVjBkWEp1SUdadUxtRndjR3g1S0hSb1lYUXNJR0Z5WjNWdFpXNTBjeWs3WEc0Z0lIMDdYRzU5TzF4dWRtRnlJQ1JrWldZZ1BTQm1kVzVqZEdsdmJpaDBlWEJsTENCdVlXMWxMQ0J6YjNWeVkyVXBlMXh1SUNCMllYSWdhMlY1TENCdmQyNHNJRzkxZEN3Z1pYaHdYRzRnSUNBZ0xDQnBjMGRzYjJKaGJDQTlJSFI1Y0dVZ0ppQWtaR1ZtTGtkY2JpQWdJQ0FzSUdselVISnZkRzhnSUQwZ2RIbHdaU0FtSUNSa1pXWXVVRnh1SUNBZ0lDd2dkR0Z5WjJWMElDQWdQU0JwYzBkc2IySmhiQ0EvSUdkc2IySmhiQ0E2SUhSNWNHVWdKaUFrWkdWbUxsTmNiaUFnSUNBZ0lDQWdQeUJuYkc5aVlXeGJibUZ0WlYwZ09pQW9aMnh2WW1Gc1cyNWhiV1ZkSUh4OElIdDlLVnRRVWs5VVQxUlpVRVZkWEc0Z0lDQWdMQ0JsZUhCdmNuUnpJQ0E5SUdselIyeHZZbUZzSUQ4Z1kyOXlaU0E2SUdOdmNtVmJibUZ0WlYwZ2ZId2dLR052Y21WYmJtRnRaVjBnUFNCN2ZTazdYRzRnSUdsbUtHbHpSMnh2WW1Gc0tYTnZkWEpqWlNBOUlHNWhiV1U3WEc0Z0lHWnZjaWhyWlhrZ2FXNGdjMjkxY21ObEtYdGNiaUFnSUNBdkx5QmpiMjUwWVdsdWN5QnBiaUJ1WVhScGRtVmNiaUFnSUNCdmQyNGdQU0FoS0hSNWNHVWdKaUFrWkdWbUxrWXBJQ1ltSUhSaGNtZGxkQ0FtSmlCclpYa2dhVzRnZEdGeVoyVjBPMXh1SUNBZ0lHbG1LRzkzYmlBbUppQnJaWGtnYVc0Z1pYaHdiM0owY3lsamIyNTBhVzUxWlR0Y2JpQWdJQ0F2THlCbGVIQnZjblFnYm1GMGFYWmxJRzl5SUhCaGMzTmxaRnh1SUNBZ0lHOTFkQ0E5SUc5M2JpQS9JSFJoY21kbGRGdHJaWGxkSURvZ2MyOTFjbU5sVzJ0bGVWMDdYRzRnSUNBZ0x5OGdjSEpsZG1WdWRDQm5iRzlpWVd3Z2NHOXNiSFYwYVc5dUlHWnZjaUJ1WVcxbGMzQmhZMlZ6WEc0Z0lDQWdhV1lvYVhOSGJHOWlZV3dnSmlZZ2RIbHdaVzltSUhSaGNtZGxkRnRyWlhsZElDRTlJQ2RtZFc1amRHbHZiaWNwWlhod0lEMGdjMjkxY21ObFcydGxlVjA3WEc0Z0lDQWdMeThnWW1sdVpDQjBhVzFsY25NZ2RHOGdaMnh2WW1Gc0lHWnZjaUJqWVd4c0lHWnliMjBnWlhod2IzSjBJR052Ym5SbGVIUmNiaUFnSUNCbGJITmxJR2xtS0hSNWNHVWdKaUFrWkdWbUxrSWdKaVlnYjNkdUtXVjRjQ0E5SUdOMGVDaHZkWFFzSUdkc2IySmhiQ2s3WEc0Z0lDQWdMeThnZDNKaGNDQm5iRzlpWVd3Z1kyOXVjM1J5ZFdOMGIzSnpJR1p2Y2lCd2NtVjJaVzUwSUdOb1lXNW5aU0IwYUdWdElHbHVJR3hwWW5KaGNubGNiaUFnSUNCbGJITmxJR2xtS0hSNWNHVWdKaUFrWkdWbUxsY2dKaVlnZEdGeVoyVjBXMnRsZVYwZ1BUMGdiM1YwS1NGbWRXNWpkR2x2YmloREtYdGNiaUFnSUNBZ0lHVjRjQ0E5SUdaMWJtTjBhVzl1S0hCaGNtRnRLWHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNZ2FXNXpkR0Z1WTJWdlppQkRJRDhnYm1WM0lFTW9jR0Z5WVcwcElEb2dReWh3WVhKaGJTazdYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdaWGh3VzFCU1QxUlBWRmxRUlYwZ1BTQkRXMUJTVDFSUFZGbFFSVjA3WEc0Z0lDQWdmU2h2ZFhRcE8xeHVJQ0FnSUdWc2MyVWdaWGh3SUQwZ2FYTlFjbTkwYnlBbUppQjBlWEJsYjJZZ2IzVjBJRDA5SUNkbWRXNWpkR2x2YmljZ1B5QmpkSGdvUm5WdVkzUnBiMjR1WTJGc2JDd2diM1YwS1NBNklHOTFkRHRjYmlBZ0lDQXZMeUJsZUhCdmNuUmNiaUFnSUNCbGVIQnZjblJ6VzJ0bGVWMGdQU0JsZUhBN1hHNGdJQ0FnYVdZb2FYTlFjbTkwYnlrb1pYaHdiM0owYzF0UVVrOVVUMVJaVUVWZElIeDhJQ2hsZUhCdmNuUnpXMUJTVDFSUFZGbFFSVjBnUFNCN2ZTa3BXMnRsZVYwZ1BTQnZkWFE3WEc0Z0lIMWNibjA3WEc0dkx5QjBlWEJsSUdKcGRHMWhjRnh1SkdSbFppNUdJRDBnTVRzZ0lDOHZJR1p2Y21ObFpGeHVKR1JsWmk1SElEMGdNanNnSUM4dklHZHNiMkpoYkZ4dUpHUmxaaTVUSUQwZ05Ec2dJQzh2SUhOMFlYUnBZMXh1SkdSbFppNVFJRDBnT0RzZ0lDOHZJSEJ5YjNSdlhHNGtaR1ZtTGtJZ1BTQXhOanNnTHk4Z1ltbHVaRnh1SkdSbFppNVhJRDBnTXpJN0lDOHZJSGR5WVhCY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ0pHUmxaanRjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OGtMbVJsWmk1cWMxeHVJQ29xSUcxdlpIVnNaU0JwWkNBOUlESTFYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENJdkx5Qm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZlbXh2YVhKdlkyc3ZZMjl5WlMxcWN5OXBjM04xWlhNdk9EWWphWE56ZFdWamIyMXRaVzUwTFRFeE5UYzFPVEF5T0Z4dWRtRnlJR2RzYjJKaGJDQTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdkSGx3Wlc5bUlIZHBibVJ2ZHlBaFBTQW5kVzVrWldacGJtVmtKeUFtSmlCM2FXNWtiM2N1VFdGMGFDQTlQU0JOWVhSb1hHNGdJRDhnZDJsdVpHOTNJRG9nZEhsd1pXOW1JSE5sYkdZZ0lUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2MyVnNaaTVOWVhSb0lEMDlJRTFoZEdnZ1B5QnpaV3htSURvZ1JuVnVZM1JwYjI0b0ozSmxkSFZ5YmlCMGFHbHpKeWtvS1R0Y2JtbG1LSFI1Y0dWdlppQmZYMmNnUFQwZ0oyNTFiV0psY2ljcFgxOW5JRDBnWjJ4dlltRnNPeUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMWFZ1WkdWbVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12SkM1bmJHOWlZV3d1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBeU5seHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpZG1GeUlHTnZjbVVnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0MlpYSnphVzl1T2lBbk1TNHlMalVuZlR0Y2JtbG1LSFI1Y0dWdlppQmZYMlVnUFQwZ0oyNTFiV0psY2ljcFgxOWxJRDBnWTI5eVpUc2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MTFibVJsWmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMeVF1WTI5eVpTNXFjMXh1SUNvcUlHMXZaSFZzWlNCcFpDQTlJREkzWEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtISmxaMFY0Y0N3Z2NtVndiR0ZqWlNsN1hHNGdJSFpoY2lCeVpYQnNZV05sY2lBOUlISmxjR3hoWTJVZ1BUMDlJRTlpYW1WamRDaHlaWEJzWVdObEtTQS9JR1oxYm1OMGFXOXVLSEJoY25RcGUxeHVJQ0FnSUhKbGRIVnliaUJ5WlhCc1lXTmxXM0JoY25SZE8xeHVJQ0I5SURvZ2NtVndiR0ZqWlR0Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ0lDQnlaWFIxY200Z1UzUnlhVzVuS0dsMEtTNXlaWEJzWVdObEtISmxaMFY0Y0N3Z2NtVndiR0ZqWlhJcE8xeHVJQ0I5TzF4dWZUdGNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k4a0xuSmxjR3hoWTJWeUxtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdNamhjYmlBcUtpQnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01GeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbUZ1ZEZOMGVXeGxVR0YwYUZSdlVtVm5aWGdwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0U1pXZEZlSEI5WEc0Z0lDQWdJQ292WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWhiblJUZEhsc1pWQmhkR2hVYjFKbFoyVjRJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRkpoYm1kbFJYSnliM0lvWENKUVlYUm9JRzExYzNRZ2JtOTBJR0psSUdWdGNIUjVMbHdpS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnNaWFFnY0dGMGFDQTlJSFJvYVhNdWNtVndiR0ZqWlNndlhGd3ZleklzZlM5bkxDQW5MeWNwTG5KbGNHeGhZMlVvTDFzdFcxeGNYWHQ5S0NrckxpeGNYRnhjWGlSOEkxeGNjMTB2Wnl3Z0oxeGNYRndrSmljcE8xeHVJQ0FnSUNBZ0lDQnNaWFFnY0dGMGRHVnliaUE5SUhCaGRHZ3VjbVZ3YkdGalpTZ3ZLQ2hjWEM4L1hGd3FYRndxS1h3b1hGd3ZQMXhjS2lsOEtGeGNQeWw4S0Z4Y0x5a3BMMmNzSUNna01Da2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjM2RwZEdOb0lDZ2tNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbkx5b3FKem9nY21WMGRYSnVJQ2NvUHpvdmV6RXNmUzRxS1Q4bk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5LaW9uT2lCeVpYUjFjbTRnSnk0cUp6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKeThxSnpvZ2NtVjBkWEp1SUNjb1B6b3ZlekVzZlZ0ZUwxMHFLVDhuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbktpYzZJSEpsZEhWeWJpQW5XMTR2WFNvbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5QeWM2SUhKbGRIVnliaUFuVzE0dlhTYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2N2SnpvZ2NtVjBkWEp1SUNjdmV6RXNmU2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGSmxaMFY0Y0NnblhpZ25JQ3NnY0dGMGRHVnliaUFySUNjcEpDY3BPMXh1SUNBZ0lIMDdYRzU5WEc1cFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVZU2tnZTF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVZU0E5SUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WVc1MFUzUjViR1ZRWVhSb1ZHOVNaV2RsZUR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWhiblJUZEhsc1pWQmhkR2hVYjFKbFoyVjRPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5aGJuUlRkSGxzWlZCaGRHaFViMUpsWjJWNExtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBiWEJ2Y25RZ0p5NHZlRzFzVlc1bGMyTmhjR1VuWEc1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVpY2pKdWJDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdZbTl2YkdWaGJuMGdlRzFzVlc1bGMyTmhjR1ZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRUZEhKcGJtZDlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1aWNqSnViQ0E5SUdaMWJtTjBhVzl1S0hodGJGVnVaWE5qWVhCbEtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNCMGFHbHpMbkpsY0d4aFkyVW9MeWc4WW5JK2ZEeGljbHhjTHo0cEwyY3NJQ2RjWEc0bktUdGNiaUFnSUNBZ0lDQWdhV1lnS0hodGJGVnVaWE5qWVhCbEtTQnlaWFIxY200Z2NtVnpkV3gwTG5odGJGVnVaWE5qWVhCbEtDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWljakp1YkR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZZbkl5Ym13dWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzU0Yld4VmJtVnpZMkZ3WlNrZ2UxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1ZUcxc1ZXNWxjMk5oY0dVZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVndiR0ZqWlNndktDWnNkRHQ4Sm1kME8zd21Jek0wTzN3bUl6TTVPM3dtWVcxd095a3ZaeXdnS0NReEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tDUXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNjbWJIUTdKem9nY21WMGRYSnVJQ2M4Snp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0p5Wm5kRHNuT2lCeVpYUjFjbTRnSno0bk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5KaU16TkRzbk9pQnlaWFIxY200Z0oxd2lKenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSnlZak16azdKem9nY21WMGRYSnVJRndpSjF3aU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5KbUZ0Y0Rzbk9pQnlaWFIxY200Z0p5WW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVm1ZWFZzZERvZ2NtVjBkWEp1SUNReE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVlRzFzVlc1bGMyTmhjR1U3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OXpkSEpwYm1kekwzaHRiRlZ1WlhOallYQmxMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVkyOXRjR0Z5WlZSdktTQjdYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1amIyMXdZWEpsVkc4Z1BTQm1kVzVqZEdsdmJpaHpkSElwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSE4wY2lBOVBTQnVkV3hzSUh4OElIUm9hWE1nUGlCemRISXBJSEpsZEhWeWJpQXhPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeUE4SUhOMGNpa2djbVYwZFhKdUlDMHhPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1OdmJYQmhjbVZVYnp0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZZMjl0Y0dGeVpWUnZMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVkyOXVkR0ZwYm5NcElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2MzUnlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1amIyNTBZV2x1Y3lBOUlHWjFibU4wYVc5dUtITjBjaWtnZXlCeVpYUjFjbTRnZEdocGN5NXBibVJsZUU5bUtITjBjaWtnUGlBdE1Uc2dmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1amIyNTBZV2x1Y3p0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZZMjl1ZEdGcGJuTXVhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWx0Y0c5eWRDQW5MaTR2WVhKeVlYbHpMMk52Ym5SaGFXNXpKMXh1YVcxd2IzSjBJQ2N1TDJkbGRFeGxibWQwYUNkY2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1OMWRITjBjbWx1WnlrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1ltOXZiR1ZoYm54dWRXMWlaWEo5SUZ0amFHVmphMko1ZEdWZElHTm9aV05ySUdKNWRHVWdiR1Z1WjNSb0lHbG1JSFJ5ZFdVdUlDaGtaV1poZFd4MElHbHpJR1poYkhObEtWeHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCdFlYaE1aVzVuZEdnZ2RHaGxJRzFoZUNCc1pXNW5kR2d1WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJRnR6ZFdabWFYaGRJSFJvWlNCemRXWm1hWGd1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3YzNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVkzVjBjM1J5YVc1bklEMGdablZ1WTNScGIyNG9ZMmhsWTJ0aWVYUmxMQ0J0WVhoTVpXNW5kR2dzSUhOMVptWnBlQ2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdZWEpuU1c1a1pYZ2dQU0F3TzF4dUlDQWdJQ0FnSUNCc1pYUWdZWEpuUTNWeWNpQTlJQ2dwSUQwK0lHRnlaM1Z0Wlc1MGMxdGhjbWRKYm1SbGVGMDdYRzRnSUNBZ0lDQWdJR3hsZENCaGNtZFRhR2xtZENBOUlDZ3BJRDArSUdGeVozVnRaVzUwYzF0aGNtZEpibVJsZUNzclhUdGNibHh1SUNBZ0lDQWdJQ0JqYUdWamEySjVkR1VnUFNCYkoySnZiMnhsWVc0bkxDQW5iblZ0WW1WeUoxMHVZMjl1ZEdGcGJuTW9kSGx3Wlc5bUlHRnlaME4xY25Jb0tTa2dQeUJoY21kVGFHbG1kQ2dwSURvZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQmhjbWREZFhKeUtDa2dJVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0dGeVowTjFjbklvS1NBcklGd2lJR2x6SUc1dmRDQmhJRzUxYldKbGNsd2lLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCdFlYaE1aVzVuZEdnZ1BTQmhjbWRUYUdsbWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUhOMVptWnBlQ0E5SUhSNWNHVnZaaUJoY21kRGRYSnlLQ2tnUFQwOUlDZHpkSEpwYm1jbklEOGdZWEpuVTJocFpuUW9LU0E2SUNjbk8xeHVYRzRnSUNBZ0lDQWdJR3hsZENCc1pXNW5kR2dnUFNCMGFHbHpMbWRsZEV4bGJtZDBhQ2hqYUdWamEySjVkR1VwTzF4dUlDQWdJQ0FnSUNCcFppQW9JU2hzWlc1bmRHZ2dQaUJ0WVhoTVpXNW5kR2dwS1NCeVpYUjFjbTRnZEdocGN6dGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ2MzVm1abWw0VEdWdVozUm9JRDBnYzNWbVptbDRMbWRsZEV4bGJtZDBhQ2hqYUdWamEySjVkR1VwTzF4dUlDQWdJQ0FnSUNCcFppQW9jM1ZtWm1sNFRHVnVaM1JvSUQ0Z2JXRjRUR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpaGNJazFoZUNCc1pXNW5kR2dnYlhWemRDQmlaU0J0YjNKbElIUm9ZVzRnYzNWbVptbDRJR3hsYm1kMGFGd2lLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCc1pYUWdjbVZ6ZFd4MFUzUnlhVzVuSUQwZ0p5YzdYRzRnSUNBZ0lDQWdJR3hsZENCamFHVmphMlZrVEdWdVozUm9JRDBnTUR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdZeUE5SUhSb2FYTXVZMmhoY2tGMEtHa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR3dnUFNCakxtZGxkRXhsYm1kMGFDaGphR1ZqYTJKNWRHVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR05vWldOclpXUk1aVzVuZEdnZ0t5QnNJRDRnYldGNFRHVnVaM1JvSUMwZ2MzVm1abWw0VEdWdVozUm9LU0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOb1pXTnJaV1JNWlc1bmRHZ2dLejBnYkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RGTjBjbWx1WnlBclBTQmpPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUlRkSEpwYm1jZ0t5QnpkV1ptYVhnN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWpkWFJ6ZEhKcGJtYzdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDJOMWRITjBjbWx1Wnk1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXMXdiM0owSUNjdUxpOWhjbkpoZVhNdlkyOXVkR0ZwYm5NblhHNWNibWxtSUNnaFUzUnlhVzVuTG5CeWIzUnZkSGx3WlM1blpYUk1aVzVuZEdncElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UySnZiMnhsWVc1OGJuVnRZbVZ5ZlNCYlkyaGxZMnRpZVhSbFhTQmphR1ZqYXlCaWVYUmxJR3hsYm1kMGFDQnBaaUIwY25WbExpQW9aR1ZtWVhWc2RDQnBjeUJtWVd4elpTbGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVuWlhSTVpXNW5kR2dnUFNCbWRXNWpkR2x2YmloamFHVmphMko1ZEdVcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUdGeVowbHVaR1Y0SUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdGeVowTjFjbklnUFNBb0tTQTlQaUJoY21kMWJXVnVkSE5iWVhKblNXNWtaWGhkTzF4dUlDQWdJQ0FnSUNCc1pYUWdZWEpuVTJocFpuUWdQU0FvS1NBOVBpQmhjbWQxYldWdWRITmJZWEpuU1c1a1pYZ3JLMTA3WEc1Y2JpQWdJQ0FnSUNBZ1kyaGxZMnRpZVhSbElEMGdXeWRpYjI5c1pXRnVKeXdnSjI1MWJXSmxjaWRkTG1OdmJuUmhhVzV6S0hSNWNHVnZaaUJoY21kRGRYSnlLQ2twSUQ4Z1lYSm5VMmhwWm5Rb0tTQTZJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnBaaUFvWTJobFkydGllWFJsSUQwOVBTQm1ZV3h6WlNrZ2NtVjBkWEp1SUhSb2FYTXViR1Z1WjNSb08xeHVYRzRnSUNBZ0lDQWdJR3hsZENCc1pXNW5kR2dnUFNBd08xeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JqSUQwZ2RHaHBjeTVqYUdGeVEyOWtaVUYwS0drcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNkcGRHTm9JQ2htWVd4elpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FoS0dNZ1BEMGdNSGd3TURBd04wWXBPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsYm1kMGFDQXJQU0F4TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FoS0hSNWNHVnZaaUJqYUdWamEySjVkR1VnUFQwOUlDZHVkVzFpWlhJbklDWW1JR05vWldOcllubDBaU0ErSURBcE9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxibWQwYUNBclBTQmphR1ZqYTJKNWRHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDRW9ZeUE4UFNBd2VEQXdNRGRHUmlrNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVnVaM1JvSUNzOUlESTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDRW9ZeUE4UFNBd2VEQXdSa1pHUmlrNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVnVaM1JvSUNzOUlETTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsYm1kMGFDQXJQU0EwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJzWlc1bmRHZzdYRzRnSUNBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVuWlhSTVpXNW5kR2c3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OXpkSEpwYm1kekwyZGxkRXhsYm1kMGFDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1WdVpITlhhWFJvS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUhOMGNseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Wlc1a2MxZHBkR2dnUFNCbWRXNWpkR2x2YmloemRISXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHa2dQU0IwYUdsekxteGhjM1JKYm1SbGVFOW1LSE4wY2lrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCcElENGdMVEVnSmlZZ2FTQTlQVDBnZEdocGN5NXNaVzVuZEdnZ0xTQnpkSEl1ZEc5VGRISnBibWNvS1M1c1pXNW5kR2c3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1bGJtUnpWMmwwYUR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZaVzVrYzFkcGRHZ3Vhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWx0Y0c5eWRDQW5MaTR2WVhKeVlYbHpMMmx6UVhKeVlYa25YRzVjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNW1iM0p0WVhRcElIdGNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1admNtMWhkQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV5WlhCc1lXTmxLQzhvSnlkOEoxeGNlM3hjWEgwbmZGeGNleWhjWEhjcktWeGNmU2t2Wnl3Z0tDUXdMQ0FrTVN3Z0pESXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4zYVhSamFDQW9KREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ1hDSW5KMXdpT2lCeVpYUjFjbTRnWENJblhDSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRndpSjN0Y0lqb2djbVYwZFhKdUlDZDdKenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnWENKOUoxd2lPaUJ5WlhSMWNtNGdKMzBuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZtWVhWc2REb2djbVYwZFhKdUlDZ2hMMTVjWEdRckpDOW5MblJsYzNRb0pESXBJRDhnWVhKbmRXMWxiblJ6V3pCZElIeDhJSHQ5SURvZ1FYSnlZWGt1YVhOQmNuSmhlU2hoY21kMWJXVnVkSE5iTUYwcElEOGdZWEpuZFcxbGJuUnpXekJkSURvZ1lYSm5kVzFsYm5SektWc2tNbDA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1bWIzSnRZWFE3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OXpkSEpwYm1kekwyWnZjbTFoZEM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbVp2Y20xaGRGWmhjbWxoWW14bGN5a2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdLbjBnWVhKbmRXMWxiblJ6WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTBGeWNtRjVQSE4wY21sdVp6NTlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1bWIzSnRZWFJXWVhKcFlXSnNaWE1nUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbFoyVjRJRDBnTHlnbkozd25YRng3ZkZ4Y2ZTZDhYRng3S0Z4Y2R5c3BYRng5S1M5bk8xeHVJQ0FnSUNBZ0lDQnNaWFFnZG1GeWFXRmliR1Z6SUQwZ1cxMDdYRzRnSUNBZ0lDQWdJR3hsZENCdFlYUmphR1Z6TzF4dUlDQWdJQ0FnSUNCM2FHbHNaU0FvYldGMFkyaGxjeUE5SUhKbFoyVjRMbVY0WldNb2RHaHBjeWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCdFlYUmphQ0E5SUcxaGRHTm9aWE5iTUYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXRjBZMmdnSVQwOUlGd2lKeWRjSWlBbUppQnRZWFJqYUNBaFBUMGdYQ0luZTF3aUlDWW1JRzFoZEdOb0lDRTlQU0JjSW4wblhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhKcFlXSnNaWE11Y0hWemFDaHRZWFJqYUdWeld6SmRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkbUZ5YVdGaWJHVnpPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Wm05eWJXRjBWbUZ5YVdGaWJHVnpPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5bWIzSnRZWFJXWVhKcFlXSnNaWE11YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNW5jbTkxY0dWa0tTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlITnBlbVZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRCY25KaGVUeHpkSEpwYm1jK2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WjNKdmRYQmxaQ0E5SUdaMWJtTjBhVzl1S0hOcGVtVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRW9jMmw2WlNBK0lERXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduU1c1MllXeHBaQ0J6YVhwbElIWmhiSFZsSnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ6YVhwbElDRTlQU0FuYm5WdFltVnlKeWtnYzJsNlpTQTlJSEJoY25ObFNXNTBLSE5wZW1VcFhHNGdJQ0FnSUNBZ0lHeGxkQ0J5WlhOMWJIUnpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1c1pXNW5kR2c3SUdrZ0t6MGdjMmw2WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBjeTV3ZFhOb0tIUm9hWE11YzJ4cFkyVW9hU3dnYVNBcklITnBlbVVwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnpkV3gwY3p0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtZHliM1Z3WldRN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTl6ZEhKcGJtZHpMMmR5YjNWd1pXUXVhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWxtSUNnaFUzUnlhVzVuTG5CeWIzUnZkSGx3WlM1bmNtOTFjR1ZrVW1sbmFIUXBJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdjMmw2WlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBGeWNtRjVQSE4wY21sdVp6NTlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1bmNtOTFjR1ZrVW1sbmFIUWdQU0JtZFc1amRHbHZiaWh6YVhwbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaEtITnBlbVVnUGlBeEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGSmhibWRsUlhKeWIzSW9KMGx1ZG1Gc2FXUWdjMmw2WlNCMllXeDFaU2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjMmw2WlNBaFBUMGdKMjUxYldKbGNpY3BJSE5wZW1VZ1BTQndZWEp6WlVsdWRDaHphWHBsS1Z4dUlDQWdJQ0FnSUNCc1pYUWdjbVZ6ZFd4MGN5QTlJRnRkTzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdkR2hwY3k1c1pXNW5kR2c3SUdrZ1BpQXdPeUJwSUMwOUlITnBlbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RITXVjSFZ6YUNoMGFHbHpMbk5zYVdObEtFMWhkR2d1YldGNEtEQXNJR2tnTFNCemFYcGxLU3dnYVNrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWE4xYkhSekxuSmxkbVZ5YzJVb0tUdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbWR5YjNWd1pXUlNhV2RvZER0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZaM0p2ZFhCbFpGSnBaMmgwTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cGJYQnZjblFnSnk0dmNtVndaV0YwSjF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1YkdWbWRGQmhaQ2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JzWlc1bmRHaGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ1ptbHNiRU5vWVhKY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN2MzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXViR1ZtZEZCaFpDQTlJR1oxYm1OMGFXOXVLR3hsYm1kMGFDd2dabWxzYkVOb1lYSXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCc1pXNW5kR2dnSVQwOUlDZHVkVzFpWlhJbktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtHeGxibWQwYUNBcklDY2dhWE1nYm05MElHRWdiblZ0WW1WeUp5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tDRm1hV3hzUTJoaGNpa2dabWxzYkVOb1lYSWdQU0FuSUNjN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxteGxibWQwYUNBK1BTQnNaVzVuZEdncElISmxkSFZ5YmlCMGFHbHpMblJ2VTNSeWFXNW5LQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtYVd4c1EyaGhjaTV5WlhCbFlYUW9iR1Z1WjNSb0lDMGdkR2hwY3k1c1pXNW5kR2dwSUNzZ2RHaHBjeTUwYjFOMGNtbHVaeWdwTzF4dUlDQWdJSDA3WEc1OVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1YkhCaFpDa2dlMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWJIQmhaQ0E5SUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1YkdWbWRGQmhaRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1c1pXWjBVR0ZrTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZjM1J5YVc1bmN5OXNaV1owVUdGa0xtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Y21Wd1pXRjBLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR052ZFc1MFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN2MzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVjbVZ3WldGMElEMGdablZ1WTNScGIyNG9ZMjkxYm5RcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NFb1kyOTFiblFnUGowZ01Da3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RKYm5aaGJHbGtJR052ZFc1MElIWmhiSFZsSnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUNjbk8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR052ZFc1ME95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RDQXJQU0IwYUdsekxuUnZVM1J5YVc1bktDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkpsY0dWaGREdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDNOMGNtbHVaM012Y21Wd1pXRjBMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwYlhCdmNuUWdKeTR2ZUcxc1JYTmpZWEJsSjF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Ym13eVluSXBJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMkp2YjJ4bFlXNTlJSGh0YkVWelkyRndaVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHR6ZEhKcGJtZDlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1dWJESmljaUE5SUdaMWJtTjBhVzl1S0hodGJFVnpZMkZ3WlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tIaHRiRVZ6WTJGd1pTQS9JSFJvYVhNdWVHMXNSWE5qWVhCbEtDa2dPaUIwYUdsektTNXlaWEJzWVdObEtDOG9YRnh5WEZ4dWZGeGNibHhjY254Y1hISjhYRnh1S1M5bkxDQW5QR0p5THo0bktUdGNiaUFnSUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVibXd5WW5JN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTl6ZEhKcGJtZHpMMjVzTW1KeUxtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1ZUcxc1JYTmpZWEJsS1NCN1hHNGdJQ0FnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzU0Yld4RmMyTmhjR1VnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Y21Wd2JHRmpaU2d2S0R4OFBueGNJbnduZkNZcEwyY3NJQ2drTVNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzZHBkR05vSUNna01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuUENjNklISmxkSFZ5YmlBbkpteDBPeWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNjK0p6b2djbVYwZFhKdUlDY21aM1E3Snp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0oxd2lKem9nY21WMGRYSnVJQ2NtSXpNME95YzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRndpSjF3aU9pQnlaWFIxY200Z0p5WWpNems3Snp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0p5WW5PaUJ5WlhSMWNtNGdKeVpoYlhBN0p6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2SUhKbGRIVnliaUFrTVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuaHRiRVZ6WTJGd1pUdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDNOMGNtbHVaM012ZUcxc1JYTmpZWEJsTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVjWFZ2ZEdVcElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UySnZiMnhsWVc1OUlHOTJaWEpzWVhCaFlteGxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdjM1J5YVc1bmZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Y1hWdmRHVWdQU0JtZFc1amRHbHZiaWh2ZG1WeWJHRndZV0pzWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JRzkyWlhKc1lYQmhZbXhsSUNFOVBTQW5ZbTl2YkdWaGJpY3BJRzkyWlhKc1lYQmhZbXhsSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRnZkbVZ5YkdGd1lXSnNaU0FtSmlCMGFHbHpMbXhsYm1kMGFDQStQU0F5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVqYUdGeVFYUW9NQ2tnUFQwOUlDZGNJaWNnSmlZZ2RHaHBjeTVqYUdGeVFYUW9kR2hwY3k1c1pXNW5kR2dnTFNBeEtTQTlQVDBnSjF3aUp5a2djbVYwZFhKdUlIUm9hWE11ZEc5VGRISnBibWNvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbU5vWVhKQmRDZ3dLU0E5UFQwZ1hDSW5YQ0lnSmlZZ2RHaHBjeTVqYUdGeVFYUW9kR2hwY3k1c1pXNW5kR2dnTFNBeEtTQTlQVDBnWENJblhDSXBJSEpsZEhWeWJpQjBhR2x6TG5SdlUzUnlhVzVuS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZGNJaWNnS3lCMGFHbHpJQ3NnSjF3aUp6dGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkYxYjNSbE8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTl4ZFc5MFpTNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5KbFoyVjRLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJR1pzWVdkelhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UxSmxaMFY0Y0gxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkpsWjJWNElEMGdablZ1WTNScGIyNG9abXhoWjNNcElIc2djbVYwZFhKdUlHNWxkeUJTWldkRmVIQW9kR2hwY3l3Z1pteGhaM01wT3lCOU8xeHVmVnh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExuSXBJSHRjYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuSWdQU0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkpsWjJWNE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbkpsWjJWNE8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTl5WldkbGVDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElDY3VMM0psY0dWaGRDZGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExuSnBaMmgwVUdGa0tTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHeGxibWQwYUZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0JtYVd4c1EyaGhjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHR6ZEhKcGJtZDlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eWFXZG9kRkJoWkNBOUlHWjFibU4wYVc5dUtHeGxibWQwYUN3Z1ptbHNiRU5vWVhJcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJzWlc1bmRHZ2dJVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0d4bGJtZDBhQ0FySUNjZ2FYTWdibTkwSUdFZ2JuVnRZbVZ5SnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0NGbWFXeHNRMmhoY2lrZ1ptbHNiRU5vWVhJZ1BTQW5JQ2M3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG14bGJtZDBhQ0ErUFNCc1pXNW5kR2dwSUhKbGRIVnliaUIwYUdsekxuUnZVM1J5YVc1bktDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5SdlUzUnlhVzVuS0NrZ0t5Qm1hV3hzUTJoaGNpNXlaWEJsWVhRb2JHVnVaM1JvSUMwZ2RHaHBjeTVzWlc1bmRHZ3BPMXh1SUNBZ0lIMDdYRzU5WEc1cFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVjbkJoWkNrZ2UxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Y25CaFpDQTlJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVjbWxuYUhSUVlXUTdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Y21sbmFIUlFZV1E3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OXpkSEpwYm1kekwzSnBaMmgwVUdGa0xtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1YzNSaGNuUnpWMmwwYUNrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCemRISmNiaUFnSUNBZ0tpOWNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5OMFlYSjBjMWRwZEdnZ1BTQm1kVzVqZEdsdmJpaHpkSElwSUhzZ2NtVjBkWEp1SUhSb2FYTXVhVzVrWlhoUFppaHpkSElwSUQwOVBTQXdPeUI5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuTjBZWEowYzFkcGRHZzdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDNOMFlYSjBjMWRwZEdndWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzUxYm5GMWIzUmxLU0I3WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNTFibkYxYjNSbElEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG14bGJtZDBhQ0ErUFNBeUlDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNBb0tIUm9hWE11WTJoaGNrRjBLREFwSUQwOVBTQW5YQ0luSUNZbUlIUm9hWE11WTJoaGNrRjBLSFJvYVhNdWJHVnVaM1JvSUMwZ01Ta2dQVDA5SUNkY0lpY3BJSHg4WEc0Z0lDQWdJQ0FnSUNBZ0lDQW9kR2hwY3k1amFHRnlRWFFvTUNrZ1BUMDlJRndpSjF3aUlDWW1JSFJvYVhNdVkyaGhja0YwS0hSb2FYTXViR1Z1WjNSb0lDMGdNU2tnUFQwOUlGd2lKMXdpS1NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuTnNhV05sS0RFc0lDMHhLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NTBiMU4wY21sdVp5Z3BPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1ZFc1eGRXOTBaVHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwzTjBjbWx1WjNNdmRXNXhkVzkwWlM1cWMxeHVJQ29xTHlKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb3RvLmpzL2Rpc3QvcHJvdG8uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghZ2xvYmFsLmRvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5LmV4dGVuZHMgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvd2luZG93LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG4kLmZuLmdyb3VwQnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzW2ldO1xuICAgICAgICBsZXQga2V5ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IGVsZW0sIGVsZW0sIGksIHRoaXMpO1xuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghKGtleSBpbiByZXN1bHQpKVxuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gJChbXSk7XG5cbiAgICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godGhpc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZ3JvdXBCeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyb3VwQnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8SFRNTEVsZW1lbnQ+fGpRdWVyeTxIVE1MRWxlbWVudD59IGV4Y2x1ZGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbiQuZm4ubWF4WkluZGV4ID0gZnVuY3Rpb24oZXhjbHVkZXMpIHtcbiAgICBsZXQgekluZGV4ID0gMDtcbiAgICB0aGlzLmZpbmQoJzp2aXNpYmxlJykuYW5kU2VsZigpLmFkZCh0aGlzLnBhcmVudHNVbnRpbCgnaHRtbCcpKS5ub3QoZXhjbHVkZXMpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVOYW1lICE9PSAnI2RvY3VtZW50Jykge1xuICAgICAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmIChbJ2Fic29sdXRlJywgJ3JlbGF0aXZlJywgJ2ZpeGVkJ10uY29udGFpbnMoJHRoaXMuY3NzKCdwb3NpdGlvbicpKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KCR0aGlzLmNzcygnekluZGV4JykpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsdWUpICYmIHZhbHVlID4gekluZGV4KVxuICAgICAgICAgICAgICAgICAgICB6SW5kZXggPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB6SW5kZXg7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBNYXggekluZGV4IGZyb20gZG9jdW1lbnQgYm9keS5cbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PEhUTUxFbGVtZW50PnxqUXVlcnk8SFRNTEVsZW1lbnQ+fSBleGNsdWRlc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG4kLm1heFpJbmRleCA9IGZ1bmN0aW9uKGV4Y2x1ZGVzKSB7XG4gICAgcmV0dXJuICQoZG9jdW1lbnQuYm9keSkubWF4WkluZGV4KGV4Y2x1ZGVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4ubWF4WkluZGV4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWF4WkluZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgd2luZG93IGZyb20gJy4vd2luZG93J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5kb2N1bWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvZG9jdW1lbnQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5uZXh0VGljayA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTsgfTtcblxuZXhwb3J0IGRlZmF1bHQgJC5uZXh0VGljaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL25leHRUaWNrLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuaW1wb3J0ICcuL3NwbGl0J1xuXG4kLm9iaiA9IHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXVxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbihvYmosIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiBvYmo7XG4gICAgICAgIGxldCBrZXlGcmFnbWVudHMgPSAkLnNwbGl0KGtleSwgJy4nLCAnLycpO1xuICAgICAgICBmb3IgKGxldCBrZXlGcmFnbWVudCBvZiBrZXlGcmFnbWVudHMpIHtcbiAgICAgICAgICAgIGlmICgob2JqID0gb2JqW2tleUZyYWdtZW50XSkgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJC5pc0FycmF5KGRlZmF1bHRWYWx1ZSkgJiYgISQuaXNBcnJheShvYmopKVxuICAgICAgICAgICAgb2JqID0gJC5tYWtlQXJyYXkob2JqKTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthcHBlbmRBcnJheV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZ1bGxrZXlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24oYXBwZW5kQXJyYXksIG9iaiwgZnVsbGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IGFyZ3MgPSAkLm1ha2VBcnJheShhcmd1bWVudHMpO1xuICAgICAgICBhcHBlbmRBcnJheSA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBvYmogPSB0eXBlb2YgYXJncy5maXJzdCgpID09PSAnb2JqZWN0JyB8fCAkLmlzRnVuY3Rpb24oYXJncy5maXJzdCgpKSA/IGFyZ3Muc2hpZnQoKSA6IHt9O1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3MuZmlyc3QoKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qga2V5IG11c3QgYmUgc3RyaW5nIHR5cGUgOiBcIiArIGFyZ3MuZmlyc3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVsbGtleSA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgdmFsdWUgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGxldCBrZXlzID0gJC5tYXAoJC5zcGxpdChmdWxsa2V5LCAnLicsICcvJyksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgaWYgKC9eKFteXFxbXSspP1xcWyhbXlxcXV0rKT9cXF0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBpbktleXMgPSBba2V5Lm1hdGNoKC9eKFteXFxbXSspPy8pWzFdXTtcbiAgICAgICAgICAgICAgICBsZXQgaW5CcmFja2V0ID0gL1xcWyhbXlxcXV0rKT9cXF0vZztcbiAgICAgICAgICAgICAgICBsZXQgbmV4dE1hdGNoZXM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5leHRNYXRjaGVzID0gaW5CcmFja2V0LmV4ZWMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpbktleXMucHVzaChuZXh0TWF0Y2hlc1sxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpbktleXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBpc051bGwobywga2V5KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhKGtleSBpbiBvICYmIChvW2tleV0gIT0gbnVsbCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyT2JqID0gb2JqO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmICghYXBwZW5kQXJyYXkgfHwgaXNOdWxsKGN1cnJPYmosIGtleSkpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCQuaXNBcnJheShjdXJyT2JqW2tleV0pKVxuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0gPSBbY3Vyck9ialtrZXldLCB2YWx1ZV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTnVsbChjdXJyT2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZXlzW2kgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAga2V5c1tpICsgMV0gPSAnMCc7XG4gICAgICAgICAgICAgICAgY3Vyck9ialtrZXldID0gL15cXGQrJC8udGVzdChrZXlzW2kgKyAxXSkgPyBbXSA6IHt9O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAga2V5c1tpICsgMV0gPSAkLmlzQXJyYXkoY3Vyck9ialtrZXldKSA/IGN1cnJPYmpba2V5XS5sZW5ndGggKyAnJyA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3Vyck9iaiA9IGN1cnJPYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdlbmVyYWxpemU6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoISQuaXNQbGFpbk9iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChrZXkuY29udGFpbnMoJy4nKSB8fCAvXFxbKFxcdyspP1xcXS8udGVzdChrZXkpKVxuICAgICAgICAgICAgICAgICAgICAkLm9iai5zZXQodHJ1ZSwgcmVzdWx0LCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcF1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthcHBlbmRBcnJheV1cbiAgICAgKiBAcGFyYW0geyp8T2JqZWN0fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0geyp8Li4uT2JqZWN0fSBzb3VyY2VzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZXh0ZW5kSWZVbmRlZmluZWRdXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGV4dGVuZDogZnVuY3Rpb24oZGVlcCwgYXBwZW5kQXJyYXksIHRhcmdldCwgc291cmNlcywgZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGFyZ3MgPSAkLm1ha2VBcnJheShhcmd1bWVudHMpO1xuICAgICAgICBkZWVwID0gdHlwZW9mIGFyZ3MuZmlyc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5zaGlmdCgpIDogZmFsc2U7XG4gICAgICAgIGFwcGVuZEFycmF5ID0gdHlwZW9mIGFyZ3MuZmlyc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5zaGlmdCgpIDogZmFsc2U7XG4gICAgICAgIGV4dGVuZElmVW5kZWZpbmVkID0gdHlwZW9mIGFyZ3MubGFzdCgpID09PSAnYm9vbGVhbicgPyBhcmdzLnBvcCgpIDogZmFsc2U7XG4gICAgICAgIHRhcmdldCA9IGFyZ3MubGVuZ3RoID09PSAxID8ge30gOiBhcmdzLnNoaWZ0KCkgfHwge307XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiAhJC5pc0Z1bmN0aW9uKHRhcmdldCkpIHRhcmdldCA9IHt9O1xuXG4gICAgICAgIHNvdXJjZXMgPSBhcmdzO1xuICAgICAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyYyA9IHRhcmdldFtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3B5ID0gc291cmNlW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgPT09IHRhcmdldCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weUlzQXJyYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWVwICYmIGNvcHkgJiYgKCQuaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSAkLmlzQXJyYXkoY29weSkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29weUlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyY0lzUGxhaW5PYmplY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyYyA9PT0gdW5kZWZpbmVkIHx8IChzcmNJc1BsYWluT2JqZWN0ID0gJC5pc1BsYWluT2JqZWN0KHNyYykpIHx8ICFleHRlbmRJZlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gJC5vYmouZXh0ZW5kKGRlZXAsIGFwcGVuZEFycmF5LCAoc3JjSXNQbGFpbk9iamVjdCA/IHNyYyA6IHt9KSwgY29weSwgZXh0ZW5kSWZVbmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcmMgPT09IHVuZGVmaW5lZCB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gJC5tZXJnZSgoYXBwZW5kQXJyYXkgJiYgJC5pc0FycmF5KHNyYykgPyBzcmMgOiBbXSksICQub2JqLmV4dGVuZChkZWVwLCBbXSwgY29weSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29weSAhPT0gdW5kZWZpbmVkICYmIChzcmMgPT09IHVuZGVmaW5lZCB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IG5ldyBEYXRlKGNvcHkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcHkgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5Lmdsb2JhbCAhPSBudWxsKSBmbGFncyArPSAnZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5Lmlnbm9yZUNhc2UgIT0gbnVsbCkgZmxhZ3MgKz0gJ2knO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5tdWx0aWxpbmUgIT0gbnVsbCkgZmxhZ3MgKz0gJ20nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5zdGlja3kgIT0gbnVsbCkgZmxhZ3MgKz0gJ3knO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBuZXcgUmVnRXhwKGNvcHkuc291cmNlLCBmbGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gY29weTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBrZXlWYWx1ZVBhaXJzXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uKC4uLmtleVZhbHVlUGFpcnMpIHtcbiAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleVZhbHVlUGFpcnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIG9ialtrZXlWYWx1ZVBhaXJzW2ldXSA9IGtleVZhbHVlUGFpcnNbaSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZW1wdHk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbn07XG5cbmZvciAobGV0IGtleSBpbiAkLm9iaikge1xuICAgIGxldCBzaG9ydEtleSA9IGtleSArICdPYmplY3QnO1xuICAgIGlmICghKHNob3J0S2V5IGluICQpKSB7XG4gICAgICAgIGlmICgkLm9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSAkW3Nob3J0S2V5XSA9ICQub2JqW2tleV07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAkLm9iajtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL29iai5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xuSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkhUTUxDb2xsZWN0aW9uID0gSXRlcmF0b3JzLkFycmF5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvICAgICAgID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG9cbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90bygkZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gICAgfVxuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VwYXJhdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2VzY2FwZUNoYXJdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xpbWl0XVxuICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAqL1xuJC5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgc2VwYXJhdG9yLCBlc2NhcGVDaGFyLCBsaW1pdCkge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHN0ciArICcgaXMgbm90IGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgIGlmICh0eXBlb2Ygc2VwYXJhdG9yID09PSAnbnVtYmVyJylcbiAgICAgICAgW2xpbWl0LCBzZXBhcmF0b3IsIGVzY2FwZUNoYXJdID0gW3NlcGFyYXRvciwgbnVsbCwgbnVsbF1cbiAgICBlbHNlIGlmICh0eXBlb2YgZXNjYXBlQ2hhciA9PT0gJ251bWJlcicpXG4gICAgICAgIFtsaW1pdCwgZXNjYXBlQ2hhcl0gPSBbZXNjYXBlQ2hhciwgbnVsbF1cblxuICAgIGZ1bmN0aW9uIGxpbWl0ZWQoaSkge1xuICAgICAgICByZXR1cm4gMCA8IGxpbWl0ICYmIGxpbWl0IDw9IGkgKyAxO1xuICAgIH1cblxuICAgIGxldCBwYXJ0cyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgcyA9IDA7XG4gICAgbGV0IHA7XG4gICAgd2hpbGUgKChwID0gc3RyLmluZGV4T2Yoc2VwYXJhdG9yLCBzKSkgIT09IC0xICYmICFsaW1pdGVkKGkpKSB7XG4gICAgICAgIGxldCBwYXJ0ID0gc3RyLnNsaWNlKHMsIHApO1xuICAgICAgICBsZXQgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXNjYXBlQ2hhciAmJiBwYXJ0LnNsaWNlKC0xKSA9PT0gZXNjYXBlQ2hhcikge1xuICAgICAgICAgICAgcGFydCA9IHBhcnQuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgZXNjYXBlZCA9IHBhcnQuc2xpY2UoLTEpICE9PSBlc2NhcGVDaGFyO1xuICAgICAgICAgICAgaWYgKGVzY2FwZWQpIHBhcnQgKz0gc2VwYXJhdG9yO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzW2ldID0gKHBhcnRzW2ldIHx8ICcnKSArIHBhcnQ7XG4gICAgICAgIHMgPSBwICsgMTtcbiAgICAgICAgaWYgKCFlc2NhcGVkKSBpKys7XG4gICAgfVxuICAgIGlmIChzIDw9IHN0ci5sZW5ndGgpXG4gICAgICAgIHBhcnRzW2ldID0gKHBhcnRzW2ldIHx8ICcnKSArIHN0ci5zbGljZShzKTtcblxuICAgIHJldHVybiBwYXJ0cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuc3BsaXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zcGxpdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcbmltcG9ydCAnLi9vYmonXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5U3RyaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbiQucGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVN0cmluZyAhPT0gJ3N0cmluZycgfHwgcXVlcnlTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgbGV0IHBhaXJzID0gcXVlcnlTdHJpbmcuc3BsaXQoLyZhbXA7fCYvaSk7XG4gICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICBlbHNlIGlmIChvcHRpb25zLmV4Y2VwdCAmJiAhJC5pc0FycmF5KG9wdGlvbnMuZXhjZXB0KSlcbiAgICAgICAgb3B0aW9ucy5leGNlcHQgPSBbb3B0aW9ucy5leGNlcHRdO1xuICAgIGxldCBvID0ge307XG4gICAgZm9yIChsZXQgcGFpciBvZiBwYWlycykge1xuICAgICAgICBsZXQgW25hbWUsIHZhbHVlXSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBpZiAob3B0aW9ucy5leGNlcHQgPT0gbnVsbCB8fCAhb3B0aW9ucy5leGNlcHQuY29udGFpbnMobmFtZSkpXG4gICAgICAgICAgICAkLm9iai5zZXQodHJ1ZSwgbywgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQucGFyc2VRdWVyeVN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BhcnNlUXVlcnlTdHJpbmcuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9nZXRJdGVyYXRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9pc0l0ZXJhYmxlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gX2dldEl0ZXJhdG9yKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoX2lzSXRlcmFibGUoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWQtdG8tYXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGF0YUFuZEV2ZW50c1xuICogQHBhcmFtIHtib29sZWFufSBkZWVwRGF0YUFuZEV2ZW50c1xuICogQHJldHVybiB7alF1ZXJ5PEhUTUxFbGVtZW50Pn1cbiAqL1xuJC5mbi5yZWNsb25lID0gZnVuY3Rpb24oZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBvbGRFbGVtID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IG5ld0VsZW0gPSBvbGRFbGVtLmNsb25lKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKTtcbiAgICAgICAgbmV3RWxlbS5pbnNlcnRBZnRlcih0aGlzKTtcbiAgICAgICAgb2xkRWxlbS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1bMF07XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnJlY2xvbmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWNsb25lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqIEBwYXJhbSB7QXJyYXk8e25hbWUsdmFsdWV9Pn0gcGFyYW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGxlbmd0aCBvZiBwYXJhbWV0ZXJzXG4gKi9cbiQucmVpbmRleEFycmF5UGFyYW1zID0gZnVuY3Rpb24ocHJlZml4LCBwYXJhbXMpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIHByZWZpeC5yZXBsYWNlKCcuJywgJ1xcXFwuJykgKyAnKVxcXFxbKFxcXFxkKylcXFxcXScpO1xuICAgIGxldCBwcmV2SW5kZXggPSBudWxsO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHBhcmFtIG9mIHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMocGFyYW0ubmFtZSk7XG4gICAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgICAgICBsZXQgY3VyckluZGV4ID0gcmVzdWx0c1syXTtcbiAgICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IGN1cnJJbmRleCkge1xuICAgICAgICAgICAgICAgIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW0ubmFtZSA9IHBhcmFtLm5hbWUucmVwbGFjZShyZWdleCwgJyQxWycgKyBpbmRleCArICddJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5yZWluZGV4QXJyYXlQYXJhbXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWluZGV4QXJyYXlQYXJhbXMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4ucmV2ZXJzZSA9IEFycmF5LnByb3RvdHlwZS5yZXZlcnNlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmV2ZXJzZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG4kLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoISQuaXNQbGFpbk9iamVjdChvcHRpb25zKSlcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuZXhjZXB0ICYmICEkLmlzQXJyYXkob3B0aW9ucy5leGNlcHQpKVxuICAgICAgICBvcHRpb25zLmV4Y2VwdCA9IFtvcHRpb25zLmV4Y2VwdF07XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICQuZWFjaCh0aGlzLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob3B0aW9ucy5leGNlcHQgPT0gbnVsbCB8fCAhb3B0aW9ucy5leGNlcHQuY29udGFpbnModGhpcy5uYW1lKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQuaXNBcnJheShyZXN1bHRbdGhpcy5uYW1lXSkpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdID0gW3Jlc3VsdFt0aGlzLm5hbWVdLCB0aGlzLnZhbHVlXTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnNlcmlhbGl6ZU9iamVjdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcmlhbGl6ZU9iamVjdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuJC5zb21lID0gZnVuY3Rpb24oaXRlbXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKCQuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBpdGVtcywgaXRlbXNbaV0sIGksIGl0ZW1zKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCQuaXNQbGFpbk9iamVjdChpdGVtcykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgaXRlbXMsIGl0ZW1zW2tleV0sIGtleSwgaXRlbXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoaXRlbXMgKyBcIiBpcyBub3QgYXJyYXkgb3IgcGxhaW4gb2JqZWN0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zb21lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4kLnN1cHBvcnRzSW5wdXRUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IHR5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnN1cHBvcnRzSW5wdXRUeXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3VwcG9ydHNJbnB1dFR5cGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtYTUx9IHhtbE5vZGUgdGhlIHhtbCBub2RlLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG4kLnhtbFRvU3RyaW5nID0gZnVuY3Rpb24oeG1sTm9kZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoeG1sTm9kZSk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIGlmICh4bWxOb2RlLnhtbCA9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWE1MU2VyaWFsaXplciBub3Qgc3VwcG9ydGVkXCIpO1xuXG4gICAgICAgIHJldHVybiB4bWxOb2RlLnhtbDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnhtbFRvU3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMveG1sVG9TdHJpbmcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9