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
	
	__webpack_require__(49);
	
	__webpack_require__(54);
	
	__webpack_require__(55);
	
	__webpack_require__(56);
	
	__webpack_require__(57);
	
	__webpack_require__(58);
	
	__webpack_require__(48);
	
	__webpack_require__(59);
	
	__webpack_require__(60);
	
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

	/* WEBPACK VAR INJECTION */(function($, window) {(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else {
			var a = factory();
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function() {
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
	/******/ ])
	});
	;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YzU1ZjUzZWYwNGUyNmFhMjYwNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9ldmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2ZsYXRNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9ncm91cEJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvZ3JvdXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2dyb3VwZWRSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXlzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9qb2luUGF0aHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9sYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvbWF4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvcmVkdWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvbWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5cy9zb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleHBzL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9yZWdleHAvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3JlZ2V4cC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvYnIybmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MveG1sVW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvY29tcGFyZVRvLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2N1dHN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9nZXRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZW5kc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9ncm91cGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL2dyb3VwZWRSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9sZWZ0UGFkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJpbmdzL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy9ubDJici5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy94bWxFc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3MvcmlnaHRQYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZ3Mvc3RhcnRzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5ncy91bnF1b3RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxhQUFZLENBQUM7O3FCQUVOLENBQW1COztxQkFDbkIsQ0FBZ0I7O3FCQUNoQixDQUFpQjs7cUJBQ2pCLENBQWdCOztxQkFDaEIsQ0FBa0I7O3FCQUNsQixDQUFrQjs7cUJBQ2xCLENBQWtCOztxQkFDbEIsRUFBdUI7O3FCQUN2QixFQUFrQjs7cUJBQ2xCLENBQWtCOztxQkFDbEIsQ0FBa0I7O3FCQUNsQixFQUFvQjs7cUJBQ3BCLEVBQWU7O3FCQUNmLEVBQWM7O3FCQUNkLEVBQWM7O3FCQUNkLEVBQWM7O3FCQUNkLEVBQWdCOztxQkFDaEIsRUFBaUI7O3FCQUNqQixFQUFpQjs7cUJBQ2pCLEVBQWU7O3FCQUVmLEVBQWtCOztxQkFFbEIsRUFBK0I7O3FCQUMvQixFQUFpQjs7cUJB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QyxDQUFDLENBQUM7VUFDNUI7QUFDRCxnQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7TUFDMUIsQ0FBQztFQUNMOztzQkFFYyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8iLCJmaWxlIjoicHJvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1YzU1ZjUzZWYwNGUyNmFhMjYwNVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2FycmF5cy9jb250YWlucydcbmltcG9ydCAnLi9hcnJheXMvZXZlcnknXG5pbXBvcnQgJy4vYXJyYXlzL2ZpbHRlcidcbmltcG9ydCAnLi9hcnJheXMvZmlyc3QnXG5pbXBvcnQgJy4vYXJyYXlzL2ZsYXRNYXAnXG5pbXBvcnQgJy4vYXJyYXlzL2dyb3VwQnknXG5pbXBvcnQgJy4vYXJyYXlzL2dyb3VwZWQnXG5pbXBvcnQgJy4vYXJyYXlzL2dyb3VwZWRSaWdodCdcbmltcG9ydCAnLi9hcnJheXMvaW5jbHVkZSdcbmltcG9ydCAnLi9hcnJheXMvaW5kZXhPZidcbmltcG9ydCAnLi9hcnJheXMvaXNBcnJheSdcbmltcG9ydCAnLi9hcnJheXMvam9pblBhdGhzJ1xuaW1wb3J0ICcuL2FycmF5cy9sYXN0J1xuaW1wb3J0ICcuL2FycmF5cy9tYXAnXG5pbXBvcnQgJy4vYXJyYXlzL21heCdcbmltcG9ydCAnLi9hcnJheXMvbWluJ1xuaW1wb3J0ICcuL2FycmF5cy9yYW5nZSdcbmltcG9ydCAnLi9hcnJheXMvcmVkdWNlJ1xuaW1wb3J0ICcuL2FycmF5cy9yZW1vdmUnXG5pbXBvcnQgJy4vYXJyYXlzL3NvbWUnXG5cbmltcG9ydCAnLi9yZWdleHBzL2VzY2FwZSdcblxuaW1wb3J0ICcuL3N0cmluZ3MvYW50U3R5bGVQYXRoVG9SZWdleCdcbmltcG9ydCAnLi9zdHJpbmdzL2JyMm5sJ1xuaW1wb3J0ICcuL3N0cmluZ3MvY29tcGFyZVRvJ1xuaW1wb3J0ICcuL3N0cmluZ3MvY29udGFpbnMnXG5pbXBvcnQgJy4vc3RyaW5ncy9jdXRzdHJpbmcnXG5pbXBvcnQgJy4vc3RyaW5ncy9lbmRzV2l0aCdcbmltcG9ydCAnLi9zdHJpbmdzL2Zvcm1hdCdcbmltcG9ydCAnLi9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcydcbmltcG9ydCAnLi9zdHJpbmdzL2dldExlbmd0aCdcbmltcG9ydCAnLi9zdHJpbmdzL2dyb3VwZWQnXG5pbXBvcnQgJy4vc3RyaW5ncy9ncm91cGVkUmlnaHQnXG5pbXBvcnQgJy4vc3RyaW5ncy9sZWZ0UGFkJ1xuaW1wb3J0ICcuL3N0cmluZ3MvbmwyYnInXG5pbXBvcnQgJy4vc3RyaW5ncy9xdW90ZSdcbmltcG9ydCAnLi9zdHJpbmdzL3JlZ2V4J1xuaW1wb3J0ICcuL3N0cmluZ3MvcmVwZWF0J1xuaW1wb3J0ICcuL3N0cmluZ3MvcmlnaHRQYWQnXG5pbXBvcnQgJy4vc3RyaW5ncy9zdGFydHNXaXRoJ1xuaW1wb3J0ICcuL3N0cmluZ3MvdW5xdW90ZSdcbmltcG9ydCAnLi9zdHJpbmdzL3htbEVzY2FwZSdcbmltcG9ydCAnLi9zdHJpbmdzL3htbFVuZXNjYXBlJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9pbmRleE9mJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5jb250YWlucykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGEpID49IDA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuY29udGFpbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvY29udGFpbnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvaW5kZXhPZi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZXZlcnkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZXZlcnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmV2ZXJ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2V2ZXJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vZmxhdE1hcCdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmlsdGVyKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0TWFwKChhLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIGEsIGksIHRoaXMpKSByZXR1cm4gYTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9maWx0ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9pc0FycmF5J1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5mbGF0TWFwKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4gQXJyYXlcbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZmxhdE1hcCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIHJlc3VsdCk7XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZmxhdE1hcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9mbGF0TWFwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IG9ialxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LmlzQXJyYXk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvaXNBcnJheS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmlyc3QpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbMF07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maXJzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9maXJzdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHt7fX1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXNbaV07XG4gICAgICAgICAgICBsZXQga2V5ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHZhbHVlLCBpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ncm91cEJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9ncm91cGVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkUmlnaHQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge0FycmF5PEFycmF5Pn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKE1hdGgubWF4KDAsIGkgLSBzaXplKSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2dyb3VwZWRSaWdodC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2luZGV4T2YnXG5cbmlmICghQXJyYXkucHJvdG90eXBlLmluY2x1ZGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmluZGV4T2YoYSk7XG4gICAgICAgIGlmIChpID4gLTEpXG4gICAgICAgICAgICB0aGlzW2ldID0gYTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wdXNoKGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuaW5jbHVkZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9pbmNsdWRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0pIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgIT09ICcvJylcbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSAnLyc7XG5cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRoaXNbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2pvaW5QYXRocy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubGFzdCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5sYXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL2xhc3QuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghQXJyYXkucHJvdG90eXBlLm1hcCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWFwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL21hcC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3JlZHVjZSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubWF4KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoKGEsIGIpID0+IChhID4gYikgPyBhIDogYik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWF4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL21heC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUucmVkdWNlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghKHRoaXMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgcmVzdWx0LCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5yZWR1Y2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvcmVkdWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vcmVkdWNlJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5taW4pIHtcbiAgICBBcnJheS5wcm90b3R5cGUubWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZSgoYSwgYikgPT4gKGEgPCBiKSA/IGEgOiBiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5taW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnJheXMvbWluLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnJhbmdlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBmcm9tXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0b1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIEFycmF5LnJhbmdlID0gZnVuY3Rpb24oZnJvbSwgdG8sIHN0ZXAgPSAxKSB7XG4gICAgICAgIGxldCByYW5nZSA9IFtdO1xuICAgICAgICBsZXQgaXNOdW1iZXIgPSB0eXBlb2YgZnJvbSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvID09PSAnbnVtYmVyJztcbiAgICAgICAgbGV0IGJlZ2luID0gaXNOdW1iZXIgPyBmcm9tIDogZnJvbS50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGxldCBlbmQgPSBpc051bWJlciA/IHRvIDogdG8udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICBzdGVwID0gTWF0aC5hYnMoc3RlcCkgfHwgMTtcbiAgICAgICAgaWYgKGJlZ2luID4gZW5kKSBzdGVwID0gLXN0ZXA7XG4gICAgICAgIGZvciAobGV0IGkgPSBiZWdpbjsgc3RlcCA+IDAgPyBpIDw9IGVuZCA6IGkgPj0gZW5kOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHJhbmdlLnB1c2goaXNOdW1iZXIgPyBpIDogU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnJhbmdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL3JhbmdlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5yZW1vdmUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUucmVtb3ZlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXJyYXlzL3JlbW92ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5zb21lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2FsbGJhY2sgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuc29tZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FycmF5cy9zb21lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVJlZ0V4cC5lc2NhcGUpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgUmVnRXhwLmVzY2FwZSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdFeHAuZXNjYXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVnZXhwcy9lc2NhcGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcmVnZXhwL2VzY2FwZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9yZWdleHAvZXNjYXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5SZWdFeHAuZXNjYXBlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmdyL1JleEV4cC5lc2NhcGVcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgJHJlICA9IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuJGRlZigkZGVmLlMsICdSZWdFeHAnLCB7ZXNjYXBlOiBmdW5jdGlvbiBlc2NhcGUoaXQpeyByZXR1cm4gJHJlKGl0KTsgfX0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBjdHggPSBmdW5jdGlvbihmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbnZhciAkZGVmID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXG4gICAgLCBpc1Byb3RvICA9IHR5cGUgJiAkZGVmLlBcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGlmKGlzR2xvYmFsICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nKWV4cCA9IHNvdXJjZVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5CICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5XICYmIHRhcmdldFtrZXldID09IG91dCkhZnVuY3Rpb24oQyl7XG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIGV4cFtQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgIH0ob3V0KTtcbiAgICBlbHNlIGV4cCA9IGlzUHJvdG8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0XG4gICAgZXhwb3J0c1trZXldID0gZXhwO1xuICAgIGlmKGlzUHJvdG8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi41J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWdFeHAsIHJlcGxhY2Upe1xuICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcbiAgfSA6IHJlcGxhY2U7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZXBsYWNlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4KSB7XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7UmVnRXhwfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiUGF0aCBtdXN0IG5vdCBiZSBlbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLnJlcGxhY2UoL1xcL3syLH0vZywgJy8nKS5yZXBsYWNlKC9bLVtcXF17fSgpKy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBwYXRoLnJlcGxhY2UoLygoXFwvP1xcKlxcKil8KFxcLz9cXCopfChcXD8pfChcXC8pKS9nLCAoJDApID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDApIHtcbiAgICAgICAgICAgIGNhc2UgJy8qKic6IHJldHVybiAnKD86L3sxLH0uKik/JztcbiAgICAgICAgICAgIGNhc2UgJyoqJzogcmV0dXJuICcuKic7XG4gICAgICAgICAgICBjYXNlICcvKic6IHJldHVybiAnKD86L3sxLH1bXi9dKik/JztcbiAgICAgICAgICAgIGNhc2UgJyonOiByZXR1cm4gJ1teL10qJztcbiAgICAgICAgICAgIGNhc2UgJz8nOiByZXR1cm4gJ1teL10nO1xuICAgICAgICAgICAgY2FzZSAnLyc6IHJldHVybiAnL3sxLH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oJyArIHBhdHRlcm4gKyAnKSQnKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmEpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmEgPSBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvYW50U3R5bGVQYXRoVG9SZWdleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3htbFVuZXNjYXBlJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuYnIybmwpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbFVuZXNjYXBlXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuYnIybmwgPSBmdW5jdGlvbih4bWxVbmVzY2FwZSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5yZXBsYWNlKC8oPGJyPnw8YnJcXC8+KS9nLCAnXFxuJyk7XG4gICAgICAgIGlmICh4bWxVbmVzY2FwZSkgcmV0dXJuIHJlc3VsdC54bWxVbmVzY2FwZSgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuYnIybmw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2JyMm5sLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGUpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLygmbHQ7fCZndDt8JiMzNDt8JiMzOTt8JmFtcDspL2csICgkMSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICgkMSkge1xuICAgICAgICAgICAgY2FzZSAnJmx0Oyc6IHJldHVybiAnPCc7XG4gICAgICAgICAgICBjYXNlICcmZ3Q7JzogcmV0dXJuICc+JztcbiAgICAgICAgICAgIGNhc2UgJyYjMzQ7JzogcmV0dXJuICdcIic7XG4gICAgICAgICAgICBjYXNlICcmIzM5Oyc6IHJldHVybiBcIidcIjtcbiAgICAgICAgICAgIGNhc2UgJyZhbXA7JzogcmV0dXJuICcmJztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAkMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnhtbFVuZXNjYXBlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy94bWxVbmVzY2FwZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmNvbXBhcmVUbykge1xuICAgIFN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGlmIChzdHIgPT0gbnVsbCB8fCB0aGlzID4gc3RyKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKHRoaXMgPCBzdHIpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG87XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2NvbXBhcmVUby5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihzdHIpIHsgcmV0dXJuIHRoaXMuaW5kZXhPZihzdHIpID4gLTE7IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY29udGFpbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2NvbnRhaW5zLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4uL2FycmF5cy9jb250YWlucydcbmltcG9ydCAnLi9nZXRMZW5ndGgnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmcpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58bnVtYmVyfSBbY2hlY2tieXRlXSBjaGVjayBieXRlIGxlbmd0aCBpZiB0cnVlLiAoZGVmYXVsdCBpcyBmYWxzZSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4TGVuZ3RoIHRoZSBtYXggbGVuZ3RoLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc3VmZml4XSB0aGUgc3VmZml4LlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZyA9IGZ1bmN0aW9uKGNoZWNrYnl0ZSwgbWF4TGVuZ3RoLCBzdWZmaXgpIHtcbiAgICAgICAgbGV0IGFyZ0luZGV4ID0gMDtcbiAgICAgICAgbGV0IGFyZ0N1cnIgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXhdO1xuICAgICAgICBsZXQgYXJnU2hpZnQgPSAoKSA9PiBhcmd1bWVudHNbYXJnSW5kZXgrK107XG5cbiAgICAgICAgY2hlY2tieXRlID0gWydib29sZWFuJywgJ251bWJlciddLmNvbnRhaW5zKHR5cGVvZiBhcmdDdXJyKCkpID8gYXJnU2hpZnQoKSA6IGZhbHNlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnQ3VycigpICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihhcmdDdXJyKCkgKyBcIiBpcyBub3QgYSBudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgbWF4TGVuZ3RoID0gYXJnU2hpZnQoKTtcblxuICAgICAgICBzdWZmaXggPSB0eXBlb2YgYXJnQ3VycigpID09PSAnc3RyaW5nJyA/IGFyZ1NoaWZ0KCkgOiAnJztcblxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoY2hlY2tieXRlKTtcbiAgICAgICAgaWYgKCEobGVuZ3RoID4gbWF4TGVuZ3RoKSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgbGV0IHN1ZmZpeExlbmd0aCA9IHN1ZmZpeC5nZXRMZW5ndGgoY2hlY2tieXRlKTtcbiAgICAgICAgaWYgKHN1ZmZpeExlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJNYXggbGVuZ3RoIG11c3QgYmUgbW9yZSB0aGFuIHN1ZmZpeCBsZW5ndGhcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdFN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgY2hlY2tlZExlbmd0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGxldCBsID0gYy5nZXRMZW5ndGgoY2hlY2tieXRlKTtcbiAgICAgICAgICAgIGlmIChjaGVja2VkTGVuZ3RoICsgbCA+IG1heExlbmd0aCAtIHN1ZmZpeExlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICBjaGVja2VkTGVuZ3RoICs9IGw7XG4gICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0U3RyaW5nICsgc3VmZml4O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9jdXRzdHJpbmcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi4vYXJyYXlzL2NvbnRhaW5zJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oY2hlY2tieXRlKSB7XG4gICAgICAgIGxldCBhcmdJbmRleCA9IDA7XG4gICAgICAgIGxldCBhcmdDdXJyID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4XTtcbiAgICAgICAgbGV0IGFyZ1NoaWZ0ID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXG4gICAgICAgIGNoZWNrYnl0ZSA9IFsnYm9vbGVhbicsICdudW1iZXInXS5jb250YWlucyh0eXBlb2YgYXJnQ3VycigpKSA/IGFyZ1NoaWZ0KCkgOiBmYWxzZTtcbiAgICAgICAgaWYgKGNoZWNrYnl0ZSA9PT0gZmFsc2UpIHJldHVybiB0aGlzLmxlbmd0aDtcblxuICAgICAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZmFsc2UpIHtcbiAgICAgICAgICAgIGNhc2UgIShjIDw9IDB4MDAwMDdGKTpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgISh0eXBlb2YgY2hlY2tieXRlID09PSAnbnVtYmVyJyAmJiBjaGVja2J5dGUgPiAwKTpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gY2hlY2tieXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDA3RkYpOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMEZGRkYpOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9nZXRMZW5ndGguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5sYXN0SW5kZXhPZihzdHIpO1xuICAgICAgICByZXR1cm4gaSA+IC0xICYmIGkgPT09IHRoaXMubGVuZ3RoIC0gc3RyLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2VuZHNXaXRoLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4uL2FycmF5cy9pc0FycmF5J1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0KSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKCcnfCdcXHt8XFx9J3xcXHsoXFx3KylcXH0pL2csICgkMCwgJDEsICQyKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG4gICAgICAgICAgICBjYXNlIFwiJydcIjogcmV0dXJuIFwiJ1wiO1xuICAgICAgICAgICAgY2FzZSBcIid7XCI6IHJldHVybiAneyc7XG4gICAgICAgICAgICBjYXNlIFwifSdcIjogcmV0dXJuICd9JztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAoIS9eXFxkKyQvZy50ZXN0KCQyKSA/IGFyZ3VtZW50c1swXSB8fCB7fSA6IEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cylbJDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9mb3JtYXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXMpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGFyZ3VtZW50c1xuICAgICAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCByZWdleCA9IC8oJyd8J1xce3xcXH0nfFxceyhcXHcrKVxcfSkvZztcbiAgICAgICAgbGV0IHZhcmlhYmxlcyA9IFtdO1xuICAgICAgICBsZXQgbWF0Y2hlcztcbiAgICAgICAgd2hpbGUgKG1hdGNoZXMgPSByZWdleC5leGVjKHRoaXMpKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBcIicnXCIgJiYgbWF0Y2ggIT09IFwiJ3tcIiAmJiBtYXRjaCAhPT0gXCJ9J1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnB1c2gobWF0Y2hlc1syXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvZm9ybWF0VmFyaWFibGVzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHNpemUgPSBwYXJzZUludChzaXplKVxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKGksIGkgKyBzaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9ncm91cGVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBpZiAoIShzaXplID4gMSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNpemUgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSBzaXplID0gcGFyc2VJbnQoc2l6ZSlcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoOyBpID4gMDsgaSAtPSBzaXplKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShNYXRoLm1heCgwLCBpIC0gc2l6ZSksIGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cy5yZXZlcnNlKCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL2dyb3VwZWRSaWdodC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3JlcGVhdCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKSArIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmxwYWQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmxwYWQgPSBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvbGVmdFBhZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJlcGVhdCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICAgIGlmICghKGNvdW50ID49IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBjb3VudCB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3JlcGVhdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3htbEVzY2FwZSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLm5sMmJyKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB4bWxFc2NhcGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUubmwyYnIgPSBmdW5jdGlvbih4bWxFc2NhcGUpIHtcbiAgICAgICAgcmV0dXJuICh4bWxFc2NhcGUgPyB0aGlzLnhtbEVzY2FwZSgpIDogdGhpcykucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLm5sMmJyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9ubDJici5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLyg8fD58XCJ8J3wmKS9nLCAoJDEpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJzwnOiByZXR1cm4gJyZsdDsnO1xuICAgICAgICAgICAgY2FzZSAnPic6IHJldHVybiAnJmd0Oyc7XG4gICAgICAgICAgICBjYXNlICdcIic6IHJldHVybiAnJiMzNDsnO1xuICAgICAgICAgICAgY2FzZSBcIidcIjogcmV0dXJuICcmIzM5Oyc7XG4gICAgICAgICAgICBjYXNlICcmJzogcmV0dXJuICcmYW1wOyc7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3htbEVzY2FwZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnF1b3RlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvdmVybGFwYWJsZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnF1b3RlID0gZnVuY3Rpb24ob3ZlcmxhcGFibGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvdmVybGFwYWJsZSAhPT0gJ2Jvb2xlYW4nKSBvdmVybGFwYWJsZSA9IHRydWU7XG4gICAgICAgIGlmICghb3ZlcmxhcGFibGUgJiYgdGhpcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyQXQoMCkgPT09IFwiJ1wiICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09IFwiJ1wiKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnXCInICsgdGhpcyArICdcIic7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5xdW90ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvcXVvdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yZWdleCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbGFnc1xuICAgICAqIEByZXR1cm5zIHtSZWdFeHB9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZWdleCA9IGZ1bmN0aW9uKGZsYWdzKSB7IHJldHVybiBuZXcgUmVnRXhwKHRoaXMsIGZsYWdzKTsgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5yID0gU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0cmluZ3MvcmVnZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9yZXBlYXQnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpICsgZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnJwYWQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnJwYWQgPSBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9yaWdodFBhZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID0gZnVuY3Rpb24oc3RyKSB7IHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA9PT0gMDsgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RyaW5ncy9zdGFydHNXaXRoLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUudW5xdW90ZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUudW5xdW90ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPj0gMiAmJlxuICAgICAgICAgICAgKCh0aGlzLmNoYXJBdCgwKSA9PT0gJ1wiJyAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSAnXCInKSB8fFxuICAgICAgICAgICAgKHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgxLCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnVucXVvdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdHJpbmdzL3VucXVvdGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
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
	
	__webpack_require__(48);
	
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
	__webpack_require__(40);
	module.exports = __webpack_require__(43);

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
	var LIBRARY         = __webpack_require__(24)
	  , $def            = __webpack_require__(25)
	  , $redef          = __webpack_require__(28)
	  , hide            = __webpack_require__(29)
	  , has             = __webpack_require__(34)
	  , SYMBOL_ITERATOR = __webpack_require__(35)('iterator')
	  , Iterators       = __webpack_require__(18)
	  , $iterCreate     = __webpack_require__(38)
	  , setToStringTag  = __webpack_require__(39)
	  , getProto        = __webpack_require__(30).getProto
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if((!LIBRARY || FORCE) && (BUGGY || !(SYMBOL_ITERATOR in proto))){
	    hide(proto, SYMBOL_ITERATOR, _default);
	  }
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEFAULT == VALUES ? _default : getMethod(VALUES),
	      keys:    IS_SET            ? _default : getMethod(KEYS),
	      entries: DEFAULT != VALUES ? _default : getMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(window) {// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 27 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.5'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(30)
	  , createDesc = __webpack_require__(31);
	module.exports = __webpack_require__(32) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(33)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(36)('wks')
	  , uid    = __webpack_require__(37)
	  , Symbol = __webpack_require__(26).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(26)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(30)
	  , descriptor     = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(39)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(29)(IteratorPrototype, __webpack_require__(35)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(30).setDesc
	  , has = __webpack_require__(34)
	  , TAG = __webpack_require__(35)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(41)(true);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(42)
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
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(44)
	  , get      = __webpack_require__(46);
	module.exports = __webpack_require__(27).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(45);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(47)
	  , ITERATOR  = __webpack_require__(35)('iterator')
	  , Iterators = __webpack_require__(18);
	module.exports = __webpack_require__(27).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(21)
	  , TAG = __webpack_require__(35)('toStringTag')
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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _slicedToArray = __webpack_require__(50)['default'];
	
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getIterator = __webpack_require__(12)["default"];
	
	var _isIterable = __webpack_require__(51)["default"];
	
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	__webpack_require__(40);
	module.exports = __webpack_require__(53);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(47)
	  , ITERATOR  = __webpack_require__(35)('iterator')
	  , Iterators = __webpack_require__(18);
	module.exports = __webpack_require__(27).isIterable = function(it){
	  var O = Object(it);
	  return ITERATOR in O
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjNTNiODQ3MjQxNTVlZGQ1ZmQzNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZmluZEJ5TmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm90by5qcy9kaXN0L3Byb3RvLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF4WkluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXh0VGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzIiwid2VicGFjazovLy8uL3NyYy9zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFyc2VRdWVyeVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWQtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWluZGV4QXJyYXlQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JldmVyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcmlhbGl6ZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VwcG9ydHNJbnB1dFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3htbFRvU3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxzREFBWSxDQUFDOzs7Ozs7cUJBRU4sQ0FBZTs7cUJBQ2YsQ0FBVzs7cUJBQ1gsQ0FBYTs7cUJBQ2IsRUFBWTs7cUJBQ1osRUFBTzs7cUJBQ1AsRUFBb0I7O3FCQUNwQixFQUFXOztxQkFDWCxFQUFzQjs7cUJBQ3RCLEVBQVc7O3FCQUNYLEVBQW1COztxQkFDbkIsRUFBUTs7cUJBQ1IsRUFBUzs7cUJBQ1QsRUFBcUI7O3FC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IHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqUXVlcnlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpRdWVyeVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzUzYjg0NzI0MTU1ZWRkNWZkMzRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9maW5kQnlOYW1lcydcbmltcG9ydCAnLi9ncm91cEJ5J1xuaW1wb3J0ICcuL21heFpJbmRleCdcbmltcG9ydCAnLi9uZXh0VGljaydcbmltcG9ydCAnLi9vYmonXG5pbXBvcnQgJy4vcGFyc2VRdWVyeVN0cmluZydcbmltcG9ydCAnLi9yZWNsb25lJ1xuaW1wb3J0ICcuL3JlaW5kZXhBcnJheVBhcmFtcydcbmltcG9ydCAnLi9yZXZlcnNlJ1xuaW1wb3J0ICcuL3NlcmlhbGl6ZU9iamVjdCdcbmltcG9ydCAnLi9zb21lJ1xuaW1wb3J0ICcuL3NwbGl0J1xuaW1wb3J0ICcuL3N1cHBvcnRzSW5wdXRUeXBlJ1xuaW1wb3J0ICcuL3htbFRvU3RyaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCAkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5LmV4dGVuZHMgcmVxdWlyZXMgYSBqUXVlcnlcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvanF1ZXJ5LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbmFtZXNcbiAqIEByZXR1cm4ge2pRdWVyeTxIVE1MRWxlbWVudD59XG4gKi9cbiQuZm4uZmluZEJ5TmFtZXMgPSBmdW5jdGlvbiguLi5uYW1lcykge1xuICAgIGlmIChuYW1lcy5sZW5ndGggPT09IDApIHJldHVybiAkKFtdKTtcbiAgICByZXR1cm4gdGhpcy5maW5kKG5hbWVzLm1hcChuYW1lID0+ICdbbmFtZT1cIicgKyAobmFtZSB8fCAnJykucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpICsgJ1wiXScpLmpvaW4oJywnKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLmZpbmRCeU5hbWVzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmluZEJ5TmFtZXMuanNcbiAqKi8iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzApO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzgpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDApO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0MSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDUpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Nik7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDcpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0OCk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNDQpO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXygzMSk7XG5cbi8qKiovIH0sXG4vKiAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5jb250YWlucykge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0geyp9IGFcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChhKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihhKSA+PSAwO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuXHQgICAgICogQHJldHVybiB7bnVtYmVyfVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiAtMTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5ldmVyeSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5ldmVyeSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5ldmVyeTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5maWx0ZXIpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKiBAcmV0dXJuIHtBcnJheX1cblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHQgICAgICAgIHJldHVybiB0aGlzLmZsYXRNYXAoZnVuY3Rpb24gKGEsIGkpIHtcblx0ICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBfdGhpcywgYSwgaSwgX3RoaXMpKSByZXR1cm4gYTtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZmxhdE1hcCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4gQXJyYXlcblx0ICAgICAqL1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmZsYXRNYXAgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpO1xuXHQgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSByZXN1bHRzLnB1c2guYXBwbHkocmVzdWx0cywgcmVzdWx0KTtlbHNlIGlmIChyZXN1bHQpIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0cztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5mbGF0TWFwO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LmlzQXJyYXkpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHsqfSBvYmpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkuaXNBcnJheTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZmlyc3QpIHtcblx0ICAgIEFycmF5LnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpc1swXTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5maXJzdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cEJ5KSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG5cdCAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuXHQgICAgICogQHJldHVybiB7e319XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXNbaV07XG5cdCAgICAgICAgICAgIHZhciBrZXkgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdmFsdWUsIGksIHRoaXMpO1xuXHQgICAgICAgICAgICBpZiAoa2V5KSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHJlc3VsdCkgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7ZWxzZSByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXJyYXkucHJvdG90eXBlLmdyb3VwQnk7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbi8qKiovIH0sXG4vKiA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBlZCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuXHQgICAgICogQHJldHVybiB7QXJyYXk8QXJyYXk+fVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZCA9IGZ1bmN0aW9uIChzaXplKSB7XG5cdCAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IHNpemUpIHtcblx0ICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuXHQgICAgICogQHJldHVybiB7QXJyYXk8QXJyYXk+fVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24gKHNpemUpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aDsgaSA+IDA7IGkgLT0gc2l6ZSkge1xuXHQgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShNYXRoLm1heCgwLCBpIC0gc2l6ZSksIGkpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdHMucmV2ZXJzZSgpO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZSkge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLmluY2x1ZGUgPSBmdW5jdGlvbiAoYSkge1xuXHQgICAgICAgIHZhciBpID0gdGhpcy5pbmRleE9mKGEpO1xuXHQgICAgICAgIGlmIChpID4gLTEpIHRoaXNbaV0gPSBhO2Vsc2UgdGhpcy5wdXNoKGEpO1xuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmluY2x1ZGU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMpIHtcblx0ICAgIEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIHBhdGggPSAnJztcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXNbaV0pIHtcblx0ICAgICAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSAhPT0gJy8nKSBwYXRoICs9ICcvJztcblx0XG5cdCAgICAgICAgICAgICAgICBwYXRoICs9IHRoaXNbaV0udG9TdHJpbmcoKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcGF0aDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5sYXN0KSB7XG5cdCAgICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLmxhc3Q7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5tYXApIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICByZXN1bHQucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcykpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLm1hcDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblx0XG5cdGlmICghQXJyYXkucHJvdG90eXBlLm1heCkge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGEgPiBiID8gYSA6IGI7XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5wcm90b3R5cGUubWF4O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnByb3RvdHlwZS5yZWR1Y2UpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG5cdCAgICAgKiBAcmV0dXJuIHsqfVxuXHQgICAgICovXG5cdCAgICBBcnJheS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgaWYgKCEodGhpcy5sZW5ndGggPiAwKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXNbMF07XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgcmVzdWx0LCB0aGlzW2ldLCBpLCB0aGlzKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuLyoqKi8gfSxcbi8qIDE3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXHRcblx0aWYgKCFBcnJheS5wcm90b3R5cGUubWluKSB7XG5cdCAgICBBcnJheS5wcm90b3R5cGUubWluID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuXHQgICAgICAgICAgICByZXR1cm4gYSA8IGIgPyBhIDogYjtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFycmF5LnByb3RvdHlwZS5taW47XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIUFycmF5LnJhbmdlKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gZnJvbVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0b1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqIEByZXR1cm4ge0FycmF5fVxuXHQgICAgICovXG5cdCAgICBBcnJheS5yYW5nZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuXHQgICAgICAgIHZhciBzdGVwID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1syXTtcblx0XG5cdCAgICAgICAgdmFyIHJhbmdlID0gW107XG5cdCAgICAgICAgdmFyIGlzTnVtYmVyID0gdHlwZW9mIGZyb20gPT09ICdudW1iZXInICYmIHR5cGVvZiB0byA9PT0gJ251bWJlcic7XG5cdCAgICAgICAgdmFyIGJlZ2luID0gaXNOdW1iZXIgPyBmcm9tIDogZnJvbS50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG5cdCAgICAgICAgdmFyIGVuZCA9IGlzTnVtYmVyID8gdG8gOiB0by50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG5cdCAgICAgICAgc3RlcCA9IE1hdGguYWJzKHN0ZXApIHx8IDE7XG5cdCAgICAgICAgaWYgKGJlZ2luID4gZW5kKSBzdGVwID0gLXN0ZXA7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IGJlZ2luOyBzdGVwID4gMCA/IGkgPD0gZW5kIDogaSA+PSBlbmQ7IGkgKz0gc3RlcCkge1xuXHQgICAgICAgICAgICByYW5nZS5wdXNoKGlzTnVtYmVyID8gaSA6IFN0cmluZy5mcm9tQ2hhckNvZGUoaSkpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmFuZ2U7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBcnJheS5yYW5nZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghQXJyYXkucHJvdG90eXBlLnJlbW92ZSkge1xuXHQgICAgQXJyYXkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChhKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IGEpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc3BsaWNlKGksIDEpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQXJyYXkucHJvdG90eXBlLnJlbW92ZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFBcnJheS5wcm90b3R5cGUuc29tZSkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0ICAgIEFycmF5LnByb3RvdHlwZS5zb21lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgaWYgKCEkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXJyYXkucHJvdG90eXBlLnNvbWU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbi8qKiovIH0sXG4vKiAyMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIF9SZWdFeHAkZXNjYXBlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMilbJ2RlZmF1bHQnXTtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIV9SZWdFeHAkZXNjYXBlKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFJlZ0V4cC5lc2NhcGUgPSBmdW5jdGlvbiAodGV4dCkge1xuXHQgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBfUmVnRXhwJGVzY2FwZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG4vKioqLyB9LFxuLyogMjMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpLlJlZ0V4cC5lc2NhcGU7XG5cbi8qKiovIH0sXG4vKiAyNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2JlbmphbWluZ3IvUmV4RXhwLmVzY2FwZVxuXHR2YXIgJGRlZiA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpXG5cdCAgLCAkcmUgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOCkoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG5cdCRkZWYoJGRlZi5TLCAnUmVnRXhwJywge2VzY2FwZTogZnVuY3Rpb24gZXNjYXBlKGl0KXsgcmV0dXJuICRyZShpdCk7IH19KTtcblxuXG4vKioqLyB9LFxuLyogMjUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KVxuXHQgICwgY29yZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNylcblx0ICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXHR2YXIgY3R4ID0gZnVuY3Rpb24oZm4sIHRoYXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbigpe1xuXHQgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG5cdCAgfTtcblx0fTtcblx0dmFyICRkZWYgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuXHQgIHZhciBrZXksIG93biwgb3V0LCBleHBcblx0ICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXG5cdCAgICAsIGlzUHJvdG8gID0gdHlwZSAmICRkZWYuUFxuXHQgICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuXHQgICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuXHQgICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG5cdCAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcblx0ICBmb3Ioa2V5IGluIHNvdXJjZSl7XG5cdCAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcblx0ICAgIG93biA9ICEodHlwZSAmICRkZWYuRikgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG5cdCAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG5cdCAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuXHQgICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcblx0ICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuXHQgICAgaWYoaXNHbG9iYWwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicpZXhwID0gc291cmNlW2tleV07XG5cdCAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuXHQgICAgZWxzZSBpZih0eXBlICYgJGRlZi5CICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xuXHQgICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcblx0ICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuXHQgICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG5cdCAgICAgIH07XG5cdCAgICAgIGV4cFtQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuXHQgICAgfShvdXQpO1xuXHQgICAgZWxzZSBleHAgPSBpc1Byb3RvICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuXHQgICAgLy8gZXhwb3J0XG5cdCAgICBleHBvcnRzW2tleV0gPSBleHA7XG5cdCAgICBpZihpc1Byb3RvKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcblx0ICB9XG5cdH07XG5cdC8vIHR5cGUgYml0bWFwXG5cdCRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcblx0JGRlZi5HID0gMjsgIC8vIGdsb2JhbFxuXHQkZGVmLlMgPSA0OyAgLy8gc3RhdGljXG5cdCRkZWYuUCA9IDg7ICAvLyBwcm90b1xuXHQkZGVmLkIgPSAxNjsgLy8gYmluZFxuXHQkZGVmLlcgPSAzMjsgLy8gd3JhcFxuXHRtb2R1bGUuZXhwb3J0cyA9ICRkZWY7XG5cbi8qKiovIH0sXG4vKiAyNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcblx0dmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG5cdCAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHRpZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9LFxuLyogMjcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi41J307XG5cdGlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9LFxuLyogMjggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVnRXhwLCByZXBsYWNlKXtcblx0ICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcblx0ICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xuXHQgIH0gOiByZXBsYWNlO1xuXHQgIHJldHVybiBmdW5jdGlvbihpdCl7XG5cdCAgICByZXR1cm4gU3RyaW5nKGl0KS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4KSB7XG5cdCAgICAvKipcblx0ICAgICAqIEByZXR1cm4ge1JlZ0V4cH1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlBhdGggbXVzdCBub3QgYmUgZW1wdHkuXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgcGF0aCA9IHRoaXMucmVwbGFjZSgvXFwvezIsfS9nLCAnLycpLnJlcGxhY2UoL1stW1xcXXt9KCkrLixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuXHQgICAgICAgIHZhciBwYXR0ZXJuID0gcGF0aC5yZXBsYWNlKC8oKFxcLz9cXCpcXCopfChcXC8/XFwqKXwoXFw/KXwoXFwvKSkvZywgZnVuY3Rpb24gKCQwKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJDApIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJy8qKic6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcoPzovezEsfS4qKT8nO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnKionOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnLionO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnLyonOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnKD86L3sxLH1bXi9dKik/Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW14vXSonO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnPyc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbXi9dJztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnL3sxLH0nO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oJyArIHBhdHRlcm4gKyAnKSQnKTtcblx0ICAgIH07XG5cdH1cblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmEpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUuYSA9IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDMwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMzEpO1xuXHRcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmJyMm5sKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0geG1sVW5lc2NhcGVcblx0ICAgICAqIEByZXR1cm4ge1N0cmluZ31cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5icjJubCA9IGZ1bmN0aW9uICh4bWxVbmVzY2FwZSkge1xuXHQgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnJlcGxhY2UoLyg8YnI+fDxiclxcLz4pL2csICdcXG4nKTtcblx0ICAgICAgICBpZiAoeG1sVW5lc2NhcGUpIHJldHVybiByZXN1bHQueG1sVW5lc2NhcGUoKTtcblx0ICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5icjJubDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZSkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oJmx0O3wmZ3Q7fCYjMzQ7fCYjMzk7fCZhbXA7KS9nLCBmdW5jdGlvbiAoJDEpIHtcblx0ICAgICAgICAgICAgc3dpdGNoICgkMSkge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnJmx0Oyc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyZndDsnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPic7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcmIzM0Oyc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdcIic7XG5cdCAgICAgICAgICAgICAgICBjYXNlICcmIzM5Oyc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJ1wiO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnJmFtcDsnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJic7XG5cdCAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAkMTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAzMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG8pIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvID0gZnVuY3Rpb24gKHN0cikge1xuXHQgICAgICAgIGlmIChzdHIgPT0gbnVsbCB8fCB0aGlzID4gc3RyKSByZXR1cm4gMTtcblx0ICAgICAgICBpZiAodGhpcyA8IHN0cikgcmV0dXJuIC0xO1xuXHQgICAgICAgIHJldHVybiAwO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG87XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMzMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zKSB7XG5cdCAgLyoqXG5cdCAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgICAqL1xuXHQgIFN0cmluZy5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdCAgICByZXR1cm4gdGhpcy5pbmRleE9mKHN0cikgPiAtMTtcblx0ICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDM0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblx0XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmcpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4TGVuZ3RoIHRoZSBtYXggbGVuZ3RoLlxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdWZmaXhdIHRoZSBzdWZmaXguXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nID0gZnVuY3Rpb24gKGNoZWNrYnl0ZSwgbWF4TGVuZ3RoLCBzdWZmaXgpIHtcblx0ICAgICAgICB2YXIgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcblx0XG5cdCAgICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcblx0ICAgICAgICB2YXIgYXJnQ3VyciA9IGZ1bmN0aW9uIGFyZ0N1cnIoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBfYXJndW1lbnRzW2FyZ0luZGV4XTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHZhciBhcmdTaGlmdCA9IGZ1bmN0aW9uIGFyZ1NoaWZ0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gX2FyZ3VtZW50c1thcmdJbmRleCsrXTtcblx0ICAgICAgICB9O1xuXHRcblx0ICAgICAgICBjaGVja2J5dGUgPSBbJ2Jvb2xlYW4nLCAnbnVtYmVyJ10uY29udGFpbnModHlwZW9mIGFyZ0N1cnIoKSkgPyBhcmdTaGlmdCgpIDogZmFsc2U7XG5cdFxuXHQgICAgICAgIGlmICh0eXBlb2YgYXJnQ3VycigpICE9PSAnbnVtYmVyJykge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGFyZ0N1cnIoKSArIFwiIGlzIG5vdCBhIG51bWJlclwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgbWF4TGVuZ3RoID0gYXJnU2hpZnQoKTtcblx0XG5cdCAgICAgICAgc3VmZml4ID0gdHlwZW9mIGFyZ0N1cnIoKSA9PT0gJ3N0cmluZycgPyBhcmdTaGlmdCgpIDogJyc7XG5cdFxuXHQgICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmdldExlbmd0aChjaGVja2J5dGUpO1xuXHQgICAgICAgIGlmICghKGxlbmd0aCA+IG1heExlbmd0aCkpIHJldHVybiB0aGlzO1xuXHRcblx0ICAgICAgICB2YXIgc3VmZml4TGVuZ3RoID0gc3VmZml4LmdldExlbmd0aChjaGVja2J5dGUpO1xuXHQgICAgICAgIGlmIChzdWZmaXhMZW5ndGggPiBtYXhMZW5ndGgpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJNYXggbGVuZ3RoIG11c3QgYmUgbW9yZSB0aGFuIHN1ZmZpeCBsZW5ndGhcIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciByZXN1bHRTdHJpbmcgPSAnJztcblx0ICAgICAgICB2YXIgY2hlY2tlZExlbmd0aCA9IDA7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIHZhciBjID0gdGhpcy5jaGFyQXQoaSk7XG5cdCAgICAgICAgICAgIHZhciBsID0gYy5nZXRMZW5ndGgoY2hlY2tieXRlKTtcblx0ICAgICAgICAgICAgaWYgKGNoZWNrZWRMZW5ndGggKyBsID4gbWF4TGVuZ3RoIC0gc3VmZml4TGVuZ3RoKSBicmVhaztcblx0ICAgICAgICAgICAgY2hlY2tlZExlbmd0aCArPSBsO1xuXHQgICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gYztcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdFN0cmluZyArIHN1ZmZpeDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDM1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxudW1iZXJ9IFtjaGVja2J5dGVdIGNoZWNrIGJ5dGUgbGVuZ3RoIGlmIHRydWUuIChkZWZhdWx0IGlzIGZhbHNlKVxuXHQgICAgICogQHJldHVybiB7bnVtYmVyfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIChjaGVja2J5dGUpIHtcblx0ICAgICAgICB2YXIgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcblx0XG5cdCAgICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcblx0ICAgICAgICB2YXIgYXJnQ3VyciA9IGZ1bmN0aW9uIGFyZ0N1cnIoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBfYXJndW1lbnRzW2FyZ0luZGV4XTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHZhciBhcmdTaGlmdCA9IGZ1bmN0aW9uIGFyZ1NoaWZ0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gX2FyZ3VtZW50c1thcmdJbmRleCsrXTtcblx0ICAgICAgICB9O1xuXHRcblx0ICAgICAgICBjaGVja2J5dGUgPSBbJ2Jvb2xlYW4nLCAnbnVtYmVyJ10uY29udGFpbnModHlwZW9mIGFyZ0N1cnIoKSkgPyBhcmdTaGlmdCgpIDogZmFsc2U7XG5cdCAgICAgICAgaWYgKGNoZWNrYnl0ZSA9PT0gZmFsc2UpIHJldHVybiB0aGlzLmxlbmd0aDtcblx0XG5cdCAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIHZhciBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xuXHQgICAgICAgICAgICBzd2l0Y2ggKGZhbHNlKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDA3Rik6XG5cdCAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlICEodHlwZW9mIGNoZWNrYnl0ZSA9PT0gJ251bWJlcicgJiYgY2hlY2tieXRlID4gMCk6XG5cdCAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICs9IGNoZWNrYnl0ZTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgIShjIDw9IDB4MDAwN0ZGKTpcblx0ICAgICAgICAgICAgICAgICAgICBsZW5ndGggKz0gMjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgIShjIDw9IDB4MDBGRkZGKTpcblx0ICAgICAgICAgICAgICAgICAgICBsZW5ndGggKz0gMztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICs9IDQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIGxlbmd0aDtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDM2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcblx0ICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24gKHN0cikge1xuXHQgICAgICAgIHZhciBpID0gdGhpcy5sYXN0SW5kZXhPZihzdHIpO1xuXHQgICAgICAgIHJldHVybiBpID4gLTEgJiYgaSA9PT0gdGhpcy5sZW5ndGggLSBzdHIudG9TdHJpbmcoKS5sZW5ndGg7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDM3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0KSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcblx0XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKCcnfCdcXHt8XFx9J3xcXHsoXFx3KylcXH0pL2csIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgXCInJ1wiOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIidcIjtcblx0ICAgICAgICAgICAgICAgIGNhc2UgXCIne1wiOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAneyc7XG5cdCAgICAgICAgICAgICAgICBjYXNlIFwifSdcIjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ30nO1xuXHQgICAgICAgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCEvXlxcZCskL2cudGVzdCgkMikgPyBfYXJndW1lbnRzWzBdIHx8IHt9IDogQXJyYXkuaXNBcnJheShfYXJndW1lbnRzWzBdKSA/IF9hcmd1bWVudHNbMF0gOiBfYXJndW1lbnRzKVskMl07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDM4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzXG5cdCAgICAgKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIHJlZ2V4ID0gLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nO1xuXHQgICAgICAgIHZhciB2YXJpYWJsZXMgPSBbXTtcblx0ICAgICAgICB2YXIgbWF0Y2hlcyA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB3aGlsZSAobWF0Y2hlcyA9IHJlZ2V4LmV4ZWModGhpcykpIHtcblx0ICAgICAgICAgICAgdmFyIG1hdGNoID0gbWF0Y2hlc1swXTtcblx0ICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBcIicnXCIgJiYgbWF0Y2ggIT09IFwiJ3tcIiAmJiBtYXRjaCAhPT0gXCJ9J1wiKSB7XG5cdCAgICAgICAgICAgICAgICB2YXJpYWJsZXMucHVzaChtYXRjaGVzWzJdKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdmFyaWFibGVzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuLyoqKi8gfSxcbi8qIDM5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcblx0ICAgICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCA9IGZ1bmN0aW9uIChzaXplKSB7XG5cdCAgICAgICAgaWYgKCEoc2l6ZSA+IDEpKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNpemUgdmFsdWUnKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykgc2l6ZSA9IHBhcnNlSW50KHNpemUpO1xuXHQgICAgICAgIHZhciByZXN1bHRzID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSBzaXplKSB7XG5cdCAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKGksIGkgKyBzaXplKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHRzO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmdyb3VwZWRSaWdodCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuXHQgICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuXHQgICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzaXplIHZhbHVlJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHNpemUgPSBwYXJzZUludChzaXplKTtcblx0ICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aDsgaSA+IDA7IGkgLT0gc2l6ZSkge1xuXHQgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShNYXRoLm1heCgwLCBpIC0gc2l6ZSksIGkpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdHMucmV2ZXJzZSgpO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5ncm91cGVkUmlnaHQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cdFxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUubGVmdFBhZCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcblx0ICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUubGVmdFBhZCA9IGZ1bmN0aW9uIChsZW5ndGgsIGZpbGxDaGFyKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobGVuZ3RoICsgJyBpcyBub3QgYSBudW1iZXInKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKCFmaWxsQ2hhcikgZmlsbENoYXIgPSAnICc7XG5cdCAgICAgICAgaWYgKHRoaXMubGVuZ3RoID49IGxlbmd0aCkgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgICAgICByZXR1cm4gZmlsbENoYXIucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKSArIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgIH07XG5cdH1cblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLmxwYWQpIHtcblx0ICAgIFN0cmluZy5wcm90b3R5cGUubHBhZCA9IFN0cmluZy5wcm90b3R5cGUubGVmdFBhZDtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5sZWZ0UGFkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnJlcGVhdCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgPSBmdW5jdGlvbiAoY291bnQpIHtcblx0ICAgICAgICBpZiAoIShjb3VudCA+PSAwKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBjb3VudCB2YWx1ZScpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdCAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnJlcGVhdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KTtcblx0XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5ubDJicikge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHhtbEVzY2FwZVxuXHQgICAgICogQHJldHVybnMge3N0cmluZ31cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5ubDJiciA9IGZ1bmN0aW9uICh4bWxFc2NhcGUpIHtcblx0ICAgICAgICByZXR1cm4gKHhtbEVzY2FwZSA/IHRoaXMueG1sRXNjYXBlKCkgOiB0aGlzKS5yZXBsYWNlKC8oXFxyXFxufFxcblxccnxcXHJ8XFxuKS9nLCAnPGJyLz4nKTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUubmwyYnI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oPHw+fFwifCd8JikvZywgZnVuY3Rpb24gKCQxKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJzwnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJmx0Oyc7XG5cdCAgICAgICAgICAgICAgICBjYXNlICc+Jzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyZndDsnO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnXCInOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJiMzNDsnO1xuXHQgICAgICAgICAgICAgICAgY2FzZSBcIidcIjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyYjMzk7Jztcblx0ICAgICAgICAgICAgICAgIGNhc2UgJyYnOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJmFtcDsnO1xuXHQgICAgICAgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJDE7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUueG1sRXNjYXBlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQ1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0aWYgKCFTdHJpbmcucHJvdG90eXBlLnF1b3RlKSB7XG5cdCAgICAvKipcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3ZlcmxhcGFibGVcblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5xdW90ZSA9IGZ1bmN0aW9uIChvdmVybGFwYWJsZSkge1xuXHQgICAgICAgIGlmICh0eXBlb2Ygb3ZlcmxhcGFibGUgIT09ICdib29sZWFuJykgb3ZlcmxhcGFibGUgPSB0cnVlO1xuXHQgICAgICAgIGlmICghb3ZlcmxhcGFibGUgJiYgdGhpcy5sZW5ndGggPj0gMikge1xuXHQgICAgICAgICAgICBpZiAodGhpcy5jaGFyQXQoMCkgPT09ICdcIicgJiYgdGhpcy5jaGFyQXQodGhpcy5sZW5ndGggLSAxKSA9PT0gJ1wiJykgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuICdcIicgKyB0aGlzICsgJ1wiJztcblx0ICAgIH07XG5cdH1cblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0cmluZy5wcm90b3R5cGUucXVvdGU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUucmVnZXgpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGZsYWdzXG5cdCAgICAgKiBAcmV0dXJucyB7UmVnRXhwfVxuXHQgICAgICovXG5cdCAgICBTdHJpbmcucHJvdG90eXBlLnJlZ2V4ID0gZnVuY3Rpb24gKGZsYWdzKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodGhpcywgZmxhZ3MpO1xuXHQgICAgfTtcblx0fVxuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUucikge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS5yID0gU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS5yZWdleDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKTtcblx0XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcblx0ICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0ICAgIFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQgPSBmdW5jdGlvbiAobGVuZ3RoLCBmaWxsQ2hhcikge1xuXHQgICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGxlbmd0aCArICcgaXMgbm90IGEgbnVtYmVyJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICghZmlsbENoYXIpIGZpbGxDaGFyID0gJyAnO1xuXHQgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKSArIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCk7XG5cdCAgICB9O1xuXHR9XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5ycGFkKSB7XG5cdCAgICBTdHJpbmcucHJvdG90eXBlLnJwYWQgPSBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnJpZ2h0UGFkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDQ4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGlmICghU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKSB7XG5cdCAgLyoqXG5cdCAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgICAqL1xuXHQgIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChzdHIpIHtcblx0ICAgIHJldHVybiB0aGlzLmluZGV4T2Yoc3RyKSA9PT0gMDtcblx0ICB9O1xuXHR9XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGg7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRpZiAoIVN0cmluZy5wcm90b3R5cGUudW5xdW90ZSkge1xuXHQgICAgU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSAyICYmICh0aGlzLmNoYXJBdCgwKSA9PT0gJ1wiJyAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSAnXCInIHx8IHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMSwgLTEpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuXHQgICAgfTtcblx0fVxuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0ExWXpVMVpqVXpaV1l3TkdVeU5tRmhNall3TlNJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRnljbUY1Y3k5amIyNTBZV2x1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwybHVaR1Y0VDJZdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZ5Y21GNWN5OWxkbVZ5ZVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwyWnBiSFJsY2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwyWnNZWFJOWVhBdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZ5Y21GNWN5OXBjMEZ5Y21GNUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTloY25KaGVYTXZabWx5YzNRdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZ5Y21GNWN5OW5jbTkxY0VKNUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTloY25KaGVYTXZaM0p2ZFhCbFpDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WVhKeVlYbHpMMmR5YjNWd1pXUlNhV2RvZEM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZWEp5WVhsekwybHVZMngxWkdVdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZ5Y21GNWN5OXFiMmx1VUdGMGFITXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJGeWNtRjVjeTlzWVhOMExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTloY25KaGVYTXZiV0Z3TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWhjbkpoZVhNdmJXRjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12Y21Wa2RXTmxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5aGNuSmhlWE12YldsdUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTloY25KaGVYTXZjbUZ1WjJVdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZ5Y21GNWN5OXlaVzF2ZG1VdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZ5Y21GNWN5OXpiMjFsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXlaV2RsZUhCekwyVnpZMkZ3WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wySmhZbVZzTFhKMWJuUnBiV1V2WTI5eVpTMXFjeTl5WldkbGVIQXZaWE5qWVhCbExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyWnVMM0psWjJWNGNDOWxjMk5oY0dVdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5bGN6Y3VjbVZuWlhod0xtVnpZMkZ3WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6THlRdVpHVm1MbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMzR2WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZKQzVuYkc5aVlXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OGtMbU52Y21VdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k4a0xuSmxjR3hoWTJWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMMkZ1ZEZOMGVXeGxVR0YwYUZSdlVtVm5aWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBjbWx1WjNNdlluSXlibXd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBjbWx1WjNNdmVHMXNWVzVsYzJOaGNHVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012WTI5dGNHRnlaVlJ2TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpkSEpwYm1kekwyTnZiblJoYVc1ekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl6ZEhKcGJtZHpMMk4xZEhOMGNtbHVaeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5blpYUk1aVzVuZEdndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM04wY21sdVozTXZaVzVrYzFkcGRHZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012Wm05eWJXRjBMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5emRISnBibWR6TDJadmNtMWhkRlpoY21saFlteGxjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5bmNtOTFjR1ZrTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpkSEpwYm1kekwyZHliM1Z3WldSU2FXZG9kQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmMzUnlhVzVuY3k5c1pXWjBVR0ZrTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpkSEpwYm1kekwzSmxjR1ZoZEM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjM1J5YVc1bmN5OXViREppY2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjM1J5YVc1bmN5OTRiV3hGYzJOaGNHVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012Y1hWdmRHVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012Y21WblpYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOMGNtbHVaM012Y21sbmFIUlFZV1F1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTjBjbWx1WjNNdmMzUmhjblJ6VjJsMGFDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YzNSeWFXNW5jeTkxYm5GMWIzUmxMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNkVUpCUVdVN1FVRkRaanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN096czdPenRCUTNSRFFTeGhRVUZaTEVOQlFVTTdPM0ZDUVVWT0xFTkJRVzFDT3p0eFFrRkRia0lzUTBGQlowSTdPM0ZDUVVOb1FpeERRVUZwUWpzN2NVSkJRMnBDTEVOQlFXZENPenR4UWtGRGFFSXNRMEZCYTBJN08zRkNRVU5zUWl4RFFVRnJRanM3Y1VKQlEyeENMRU5CUVd0Q096dHhRa0ZEYkVJc1JVRkJkVUk3TzNGQ1FVTjJRaXhGUVVGclFqczdjVUpCUTJ4Q0xFTkJRV3RDT3p0eFFrRkRiRUlzUTBGQmEwSTdPM0ZDUVVOc1FpeEZRVUZ2UWpzN2NVSkJRM0JDTEVWQlFXVTdPM0ZDUVVObUxFVkJRV003TzNGQ1FVTmtMRVZCUVdNN08zRkNRVU5rTEVWQlFXTTdPM0ZDUVVOa0xFVkJRV2RDT3p0eFFrRkRhRUlzUlVGQmFVSTdPM0ZDUVVOcVFpeEZRVUZwUWpzN2NVSkJRMnBDTEVWQlFXVTdPM0ZDUVVWbUxFVkJRV3RDT3p0eFFrRkZiRUlzUlVGQkswSTdPM0ZDUVVNdlFpeEZRVUZwUWpzN2NVSkJRMnBDTEVWQlFYRkNPenR4UWtGRGNrSXNSVUZCYjBJN08zRkNRVU53UWl4RlFVRnhRanM3Y1VKQlEzSkNMRVZCUVc5Q096dHhRa0ZEY0VJc1JVRkJhMEk3TzNGQ1FVTnNRaXhGUVVFeVFqczdjVUpCUXpOQ0xFVkJRWEZDT3p0eFFrRkRja0lzUlVGQmJVSTdPM0ZDUVVOdVFpeEZRVUYzUWpzN2NVSkJRM2hDTEVWQlFXMUNPenR4UWtGRGJrSXNSVUZCYVVJN08zRkNRVU5xUWl4RlFVRnBRanM3Y1VKQlEycENMRVZCUVdsQ096dHhRa0ZEYWtJc1JVRkJhMEk3TzNGQ1FVTnNRaXhGUVVGdlFqczdjVUpCUTNCQ0xFVkJRWE5DT3p0eFFrRkRkRUlzUlVGQmJVSTdPM0ZDUVVOdVFpeEZRVUZ4UWpzN2NVSkJRM0pDTEVWQlFYVkNMRVU3T3pzN096dEJRemRET1VJc1lVRkJXU3hEUVVGRE96czdPenM3Y1VKQlJVNHNRMEZCVnpzN1FVRkZiRUlzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRk96czdPenRCUVVzelFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhWUVVGVExFTkJRVU1zUlVGQlJUdEJRVU51UXl4blFrRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenROUVVNdlFqdEZRVU5LT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRTdPenM3T3pzN1FVTmtka01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJUczdPenM3UVVGTE1VSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlV5eEpRVUZKTEVWQlFVVTdRVUZEY2tNc1kwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEYkVNc2FVSkJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMVZCUXk5RE8wRkJRMFFzWjBKQlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1RVRkRZaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR6czdPenM3T3p0QlEyWjBReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRk96czdPenM3UVVGTmVFSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFZEJRVWNzVlVGQlV5eFJRVUZSTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTJoRUxHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExHbENRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVVXNUMEZCVHl4TFFVRkxMRU5CUVVNN1ZVRkRka1U3UVVGRFJDeG5Ra0ZCVHl4SlFVRkpMRU5CUVVNN1RVRkRaaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN6czdPenM3T3p0QlEyaENjRU1zWVVGQldTeERRVUZET3pzN096czdjVUpCUlU0c1EwRkJWenM3UVVGRmJFSXNTMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEZRVUZGT3pzN096czdRVUZOZWtJc1ZVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NWVUZCVXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhGUVVGRk96czdRVUZEYWtRc1owSkJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVXM3UVVGRE1VSXNhVUpCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEZOQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdWVUZETlVRc1EwRkJReXhEUVVGRE8wMUJRMDRzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMDdPenM3T3pzN1FVTnFRbkpETEdGQlFWa3NRMEZCUXpzN096czdPM0ZDUVVWT0xFTkJRVmM3TzBGQlJXeENMRXRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlRzN096czdPMEZCVFRGQ0xGVkJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCUVZNc1VVRkJVU3hGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU5zUkN4aFFVRkpMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGFrSXNZMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRGJFTXNhVUpCUVVrc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRemxFTEdsQ1FVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVWQlEzSkNMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhMUVVOdVF5eEpRVUZKTEUxQlFVMHNSVUZEV0N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFWQlF6VkNPMEZCUTBRc1owSkJRVThzVDBGQlR5eERRVUZETzAxQlEyeENPMFZCUTBvN08zTkNRVVZqTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUenM3T3pzN096dEJRM1pDZEVNc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZPenM3T3pzN1FVRk5hRUlzVlVGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlRMRWRCUVVjc1JVRkJSVHRCUVVNeFFpeG5Ra0ZCVHl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1owSkJRV2RDTEVOQlFVTTdUVUZEYmtVc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1QwRkJUenM3T3pzN096dEJRMkkxUWl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTNoQ0xGVkJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZjN1FVRkJSU3huUWtGQlR5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1RVRkJSU3hEUVVGRE8wVkJRekZFT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVczdPenM3T3pzN1FVTk9jRU1zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJUczdPenM3TzBGQlRURkNMRlZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWTXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVOc1JDeGhRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdEJRVU42UWl4dFFrRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU1zUTBGQlF6dFZRVU53UkR0QlFVTkVMR0ZCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5vUWl4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU5zUXl4cFFrRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNCQ0xHbENRVUZKTEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU42UkN4cFFrRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHhRa0ZCU1N4SFFVRkhMRWxCUVVrc1RVRkJUU3hGUVVOaUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUzBGRmVFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZMEZETjBJN1ZVRkRTanRCUVVORUxHZENRVUZQTEUxQlFVMHNRMEZCUXp0TlFVTnFRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR6czdPenM3T3p0QlF6TkNkRU1zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJUczdPenM3UVVGTE1VSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVlVGQlV5eEpRVUZKTEVWQlFVVTdRVUZEY2tNc1lVRkJTU3hQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEycENMR05CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdRVUZEZUVNc2IwSkJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1ZVRkRla003UVVGRFJDeG5Ra0ZCVHl4UFFVRlBMRU5CUVVNN1RVRkRiRUlzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVODdPenM3T3pzN1FVTm9RblJETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFpRVUZaTEVWQlFVVTdPenM3TzBGQlN5OUNMRlZCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeEhRVUZITEZWQlFWTXNTVUZCU1N4RlFVRkZPMEZCUXpGRExHRkJRVWtzVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnFRaXhqUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTNoRExHOUNRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1ZVRkRkRVE3UVVGRFJDeG5Ra0ZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VFVGRE5VSXNRMEZCUXp0RlFVTk1PenR6UWtGRll5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmxCUVZrN096czdPenM3UVVOb1FqTkRMR0ZCUVZrc1EwRkJRenM3T3pzN08zRkNRVVZPTEVOQlFWYzdPMEZCUld4Q0xFdEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVNeFFpeFZRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVExFTkJRVU1zUlVGQlJUdEJRVU5zUXl4aFFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNoQ0xHRkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVTk9MRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZGV2l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEycENMR2RDUVVGUExFbEJRVWtzUTBGQlF6dE5RVU5tTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBPenM3T3pzN08wRkRablJETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVWQlFVVTdRVUZETlVJc1ZVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVkQlFVY3NXVUZCVnp0QlFVTnVReXhoUVVGSkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEWkN4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU5zUXl4cFFrRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEVkN4eFFrRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVOMlJDeEpRVUZKTEVsQlFVa3NSMEZCUnl4RFFVRkRPenRCUVVWb1FpeHhRa0ZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0alFVTTVRanRWUVVOS08wRkJRMFFzWjBKQlFVOHNTVUZCU1N4RFFVRkRPMDFCUTJZc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk03T3pzN096czdRVU5xUW5oRExHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRGRrSXNWVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFZEJRVWNzV1VGQlZ6dEJRVUZGTEdkQ1FVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMDFCUVVVc1EwRkJRenRGUVVOMlJUczdjMEpCUldNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKT3pzN096czdPMEZEVG01RExHRkJRVmtzUTBGQlF6czdPenM3UVVGRllpeExRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFVkJRVVU3T3pzN08wRkJTM1JDTEZWQlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhIUVVGSExGVkJRVk1zVVVGQlVTeEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTTVReXhoUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYUVJc1kwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEYmtNc2JVSkJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0VlFVTnFSVHRCUVVORUxHZENRVUZQTEUxQlFVMHNRMEZCUXp0TlFVTnFRanRGUVVOS096dHpRa0ZGWXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWM3T3pzN096czdRVU5vUW14RExHRkJRVmtzUTBGQlF6czdPenM3TzNGQ1FVVk9MRVZCUVZVN08wRkJSV3BDTEV0QlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU4wUWl4VlFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUjBGQlJ5eFpRVUZYTzBGQlF6ZENMR2RDUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenR2UWtGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8xVkJRVUVzUTBGQlF5eERRVUZETzAxQlEycEVPMFZCUTBvN08zTkNRVVZqTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSenM3T3pzN096dEJRMVpzUXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RlFVRkZPenM3T3pzN1FVRk5la0lzVlVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJVeXhSUVVGUkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEycEVMR0ZCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMEZCUTNCQ0xHMUNRVUZOTEVsQlFVa3NVMEZCVXl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdWVUZEZEVVN1FVRkRSQ3hoUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRja0lzWTBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRia01zYlVKQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1ZVRkRja1U3UVVGRFJDeG5Ra0ZCVHl4TlFVRk5MRU5CUVVNN1RVRkRha0lzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMDdPenM3T3pzN1FVTndRbkpETEdGQlFWa3NRMEZCUXpzN096czdPM0ZDUVVWT0xFVkJRVlU3TzBGQlJXcENMRXRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTjBRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NSMEZCUnl4WlFVRlhPMEZCUXpkQ0xHZENRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dHZRa0ZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETzFWQlFVRXNRMEZCUXl4RFFVRkRPMDFCUTJwRU8wVkJRMG83TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ6czdPenM3T3p0QlExWnNReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVN096czdPenM3TzBGQlVXUXNWVUZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFWazdZVUZCVml4SlFVRkpMSGxFUVVGSExFTkJRVU03TzBGQlEzSkRMR0ZCUVVrc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5tTEdGQlFVa3NVVUZCVVN4SFFVRkhMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzU1VGQlNTeFBRVUZQTEVWQlFVVXNTMEZCU3l4UlFVRlJMRU5CUVVNN1FVRkRiRVVzWVVGQlNTeExRVUZMTEVkQlFVY3NVVUZCVVN4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRelZFTEdGQlFVa3NSMEZCUnl4SFFVRkhMRkZCUVZFc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4wUkN4aFFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRNMElzWVVGQlNTeExRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU01UWl4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRk8wRkJRek5FTEd0Q1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFWQlEzSkVPMEZCUTBRc1owSkJRVThzUzBGQlN5eERRVUZETzAxQlEyaENMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNTMEZCU3l4RFFVRkRMRXRCUVVzN096czdPenM3UVVONFFqRkNMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRla0lzVlVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJVeXhEUVVGRExFVkJRVVU3UVVGRGFrTXNZMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzBGQlEzWkRMR2xDUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRaaXh4UWtGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03WTBGRGNrSTdWVUZEU2p0QlFVTkVMR2RDUVVGUExFbEJRVWtzUTBGQlF6dE5RVU5tTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5PenM3T3pzN08wRkRZbkpETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVTdPenM3T3p0QlFVMTJRaXhWUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSMEZCUnl4VlFVRlRMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGREwwTXNZVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdRVUZEZWtJc2JVSkJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4SFFVRkhMRzlDUVVGdlFpeERRVUZETEVOQlFVTTdWVUZEY0VRN1FVRkRSQ3hqUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTnNReXhwUWtGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0VlFVTnlSVHRCUVVORUxHZENRVUZQTEV0QlFVc3NRMEZCUXp0TlFVTm9RaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNUczdPenM3T3p0QlEyNUNia01zWVVGQldTeERRVUZET3pzN096czdPMEZCUldJc1MwRkJTU3hsUVVGakxFVkJRVVU3T3pzN096dEJRVTFvUWl4WFFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExGVkJRVk1zU1VGQlNTeEZRVUZGTzBGQlF6TkNMR2RDUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNNRUpCUVRCQ0xFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdUVUZETTBRc1EwRkJRenRGUVVOTU96czdPenM3T3pzN1FVTllSQ3h0UWtGQmEwSXNkMFE3T3pzN096dEJRMEZzUWp0QlFVTkJMSGRFT3pzN096czdRVU5FUVR0QlFVTkJPMEZCUTBFc2MwUkJRWEZFTzBGQlEzSkVMSGxDUVVGM1FpdzBRa0ZCTkVJc1owSkJRV2RDTEVkQlFVYzdPenM3T3pzN1FVTklka1U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3MlEwRkJORU03UVVGRE5VTXNhMFZCUVdsRk8wRkJRMnBGTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFc0swUkJRVGhFTzBGQlF6bEVPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVmM3UVVGRFdDeFpRVUZYTzBGQlExZ3NXVUZCVnp0QlFVTllMRmxCUVZjN1FVRkRXQ3hoUVVGWk8wRkJRMW9zWVVGQldUdEJRVU5hTEhWQ096czdPenM3UVVNNVEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2QwTkJRWFZETEdkRE96czdPenM3UVVOSWRrTXNPRUpCUVRaQ08wRkJRemRDTEhORFFVRnhReXhuUXpzN096czdPMEZEUkhKRE8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRU3hIT3pzN096czdRVU5RUVN4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVU3T3pzN1FVRkpka01zVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eFpRVUZYTzBGQlF6bERMR0ZCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdRVUZEYmtJc2JVSkJRVTBzU1VGQlNTeFZRVUZWTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dFZRVU51UkR0QlFVTkVMR0ZCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU5zUml4aFFVRkpMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdkRFFVRm5ReXhGUVVGRkxGVkJRVU1zUlVGQlJTeEZRVUZMTzBGQlEycEZMSEZDUVVGUkxFVkJRVVU3UVVGRFZpeHpRa0ZCU3l4TFFVRkxPMEZCUVVVc05FSkJRVThzWTBGQll5eERRVUZETzBGQlEyeERMSE5DUVVGTExFbEJRVWs3UVVGQlJTdzBRa0ZCVHl4SlFVRkpMRU5CUVVNN1FVRkRka0lzYzBKQlFVc3NTVUZCU1R0QlFVRkZMRFJDUVVGUExHbENRVUZwUWl4RFFVRkRPMEZCUTNCRExITkNRVUZMTEVkQlFVYzdRVUZCUlN3MFFrRkJUeXhQUVVGUExFTkJRVU03UVVGRGVrSXNjMEpCUVVzc1IwRkJSenRCUVVGRkxEUkNRVUZQTEUxQlFVMHNRMEZCUXp0QlFVTjRRaXh6UWtGQlN5eEhRVUZITzBGQlFVVXNORUpCUVU4c1QwRkJUeXhEUVVGRE8wRkJRVUVzWTBGRGVFSTdWVUZEU2l4RFFVRkRMRU5CUVVNN1FVRkRTQ3huUWtGQlR5eEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzAxQlF6VkRMRU5CUVVNN1JVRkRURHRCUVVORUxFdEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVOeVFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEcxQ1FVRnRRaXhEUVVGRE8wVkJRemRFT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEcxQ1FVRnRRanM3T3pzN096dEJRelZDYmtRc1lVRkJXU3hEUVVGRE96czdPenM3Y1VKQlJVNHNSVUZCWlRzN1FVRkZkRUlzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRk96czdPenRCUVV0NlFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVExGZEJRVmNzUlVGQlJUdEJRVU16UXl4aFFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEyeEVMR0ZCUVVrc1YwRkJWeXhGUVVGRkxFOUJRVThzVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpkRExHZENRVUZQTEUxQlFVMHNRMEZCUXp0TlFVTnFRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN6czdPenM3T3p0QlEyaENja01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGZEJRVmNzUlVGQlJUdEJRVU12UWl4WFFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGZEJRVmNzUjBGQlJ5eFpRVUZYTzBGQlEzUkRMR2RDUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNaME5CUVdkRExFVkJRVVVzVlVGQlF5eEZRVUZGTEVWQlFVczdRVUZETVVRc2NVSkJRVkVzUlVGQlJUdEJRVU5XTEhOQ1FVRkxMRTFCUVUwN1FVRkJSU3cwUWtGQlR5eEhRVUZITEVOQlFVTTdRVUZEZUVJc2MwSkJRVXNzVFVGQlRUdEJRVUZGTERSQ1FVRlBMRWRCUVVjc1EwRkJRenRCUVVONFFpeHpRa0ZCU3l4UFFVRlBPMEZCUVVVc05FSkJRVThzUjBGQlJ5eERRVUZETzBGQlEzcENMSE5DUVVGTExFOUJRVTg3UVVGQlJTdzBRa0ZCVHl4SFFVRkhMRU5CUVVNN1FVRkRla0lzYzBKQlFVc3NUMEZCVHp0QlFVRkZMRFJDUVVGUExFZEJRVWNzUTBGQlF6dEJRVU42UWp0QlFVRlRMRFJDUVVGUExFVkJRVVVzUTBGQlF6dEJRVUZCTEdOQlEyeENPMVZCUTBvc1EwRkJReXhEUVVGRE8wMUJRMDQ3UlVGRFNqczdjMEpCUldNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYT3pzN096czdPMEZEYWtJelF5eGhRVUZaTEVOQlFVTTdPenM3TzBGQlJXSXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlF6ZENMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV5eEhRVUZITEZWQlFWTXNSMEZCUnl4RlFVRkZPMEZCUTNaRExHRkJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlEzaERMR0ZCUVVrc1NVRkJTU3hIUVVGSExFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpGQ0xHZENRVUZQTEVOQlFVTXNRMEZCUXp0TlFVTmFMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVE96czdPenM3TzBGRFZucERMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVN096czdRVUZKTlVJc1UwRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUZCVXl4SFFVRkhMRVZCUVVVN1FVRkJSU3haUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGQlJTeERRVUZETzBWQlEyaEdPenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFN096czdPenM3UVVOVWVFTXNZVUZCV1N4RFFVRkRPenM3T3pzN2NVSkJSVTRzUTBGQmIwSTdPM0ZDUVVOd1FpeEZRVUZoT3p0QlFVVndRaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRVZCUVVVN096czdPenM3UVVGUE4wSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFZEJRVWNzVlVGQlV5eFRRVUZUTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1JVRkJSVHM3TzBGQlEyaEZMR0ZCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4aFFVRkpMRTlCUVU4c1IwRkJSeXhUUVVGV0xFOUJRVTg3YjBKQlFWTXNWMEZCVlN4UlFVRlJMRU5CUVVNN1ZVRkJRU3hEUVVGRE8wRkJRM2hETEdGQlFVa3NVVUZCVVN4SFFVRkhMRk5CUVZnc1VVRkJVVHR2UWtGQlV5eFhRVUZWTEZGQlFWRXNSVUZCUlN4RFFVRkRPMVZCUVVFc1EwRkJRenM3UVVGRk0wTXNhMEpCUVZNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhQUVVGUExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenM3UVVGRmJFWXNZVUZCU1N4UFFVRlBMRTlCUVU4c1JVRkJSU3hMUVVGTExGRkJRVkVzUlVGQlJUdEJRVU12UWl4dFFrRkJUU3hKUVVGSkxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4clFrRkJhMElzUTBGQlF5eERRVUZETzFWQlEzWkVPMEZCUTBRc2EwSkJRVk1zUjBGQlJ5eFJRVUZSTEVWQlFVVXNRMEZCUXpzN1FVRkZka0lzWlVGQlRTeEhRVUZITEU5QlFVOHNUMEZCVHl4RlFVRkZMRXRCUVVzc1VVRkJVU3hIUVVGSExGRkJRVkVzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXpzN1FVRkZla1FzWVVGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4aFFVRkpMRVZCUVVVc1RVRkJUU3hIUVVGSExGTkJRVk1zUTBGQlF5eEZRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPenRCUVVWMlF5eGhRVUZKTEZsQlFWa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzBGQlF5OURMR0ZCUVVrc1dVRkJXU3hIUVVGSExGTkJRVk1zUlVGQlJUdEJRVU14UWl4dFFrRkJUU3hKUVVGSkxGVkJRVlVzUTBGQlF5dzBRMEZCTkVNc1EwRkJReXhEUVVGRE8xVkJRM1JGTzBGQlEwUXNZVUZCU1N4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM1JDTEdGQlFVa3NZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMFFpeGpRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOc1F5eHBRa0ZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhwUWtGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEJRVU12UWl4cFFrRkJTU3hoUVVGaExFZEJRVWNzUTBGQlF5eEhRVUZITEZOQlFWTXNSMEZCUnl4WlFVRlpMRVZCUVVVc1RVRkJUVHRCUVVONFJDd3dRa0ZCWVN4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOdVFpeDVRa0ZCV1N4SlFVRkpMRU5CUVVNc1EwRkJRenRWUVVOeVFqdEJRVU5FTEdkQ1FVRlBMRmxCUVZrc1IwRkJSeXhOUVVGTkxFTkJRVU03VFVGRGFFTXNRMEZCUXp0RlFVTk1PenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNN096czdPenM3UVVNNVEzcERMR0ZCUVZrc1EwRkJRenM3T3pzN08zRkNRVVZPTEVOQlFXOUNPenRCUVVVelFpeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFVkJRVVU3T3pzN08wRkJTemRDTEZkQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhIUVVGSExGVkJRVk1zVTBGQlV5eEZRVUZGT3pzN1FVRkROME1zWVVGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xHRkJRVWtzVDBGQlR5eEhRVUZITEZOQlFWWXNUMEZCVHp0dlFrRkJVeXhYUVVGVkxGRkJRVkVzUTBGQlF6dFZRVUZCTEVOQlFVTTdRVUZEZUVNc1lVRkJTU3hSUVVGUkxFZEJRVWNzVTBGQldDeFJRVUZSTzI5Q1FVRlRMRmRCUVZVc1VVRkJVU3hGUVVGRkxFTkJRVU03VlVGQlFTeERRVUZET3p0QlFVVXpReXhyUWtGQlV5eEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEU5QlFVOHNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEyeEdMR0ZCUVVrc1UwRkJVeXhMUVVGTExFdEJRVXNzUlVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSVFZETEdGQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVObUxHTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExHbENRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6TkNMSEZDUVVGUkxFdEJRVXM3UVVGRFlpeHpRa0ZCU3l4RlFVRkZMRU5CUVVNc1NVRkJTU3hSUVVGUkxFTkJRVU03UVVGRGFrSXNNa0pCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRFdpd3lRa0ZCVFR0QlFVTldMSE5DUVVGTExFVkJRVVVzVDBGQlR5eFRRVUZUTEV0QlFVc3NVVUZCVVN4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGJFUXNNa0pCUVUwc1NVRkJTU3hUUVVGVExFTkJRVU03UVVGRGNFSXNNa0pCUVUwN1FVRkRWaXh6UWtGQlN5eEZRVUZGTEVOQlFVTXNTVUZCU1N4UlFVRlJMRU5CUVVNN1FVRkRha0lzTWtKQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRXaXd5UWtGQlRUdEJRVU5XTEhOQ1FVRkxMRVZCUVVVc1EwRkJReXhKUVVGSkxGRkJRVkVzUTBGQlF6dEJRVU5xUWl3eVFrRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU5hTERKQ1FVRk5PMEZCUTFZN1FVRkRTU3d5UWtGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVRkJMR05CUTJZN1ZVRkRTanRCUVVORUxHZENRVUZQTEUxQlFVMHNRMEZCUXp0TlFVTnFRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV6czdPenM3T3p0QlEzcERla01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJUczdPenM3UVVGTE5VSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFZEJRVWNzVlVGQlV5eEhRVUZITEVWQlFVVTdRVUZEZEVNc1lVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVNNVFpeG5Ra0ZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXp0TlFVTTVSQ3hEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVUczdPenM3T3p0QlEySjRReXhoUVVGWkxFTkJRVU03T3pzN096dHhRa0ZGVGl4RFFVRnRRanM3UVVGRk1VSXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlF6RkNMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEZsQlFWYzdPenRCUVVOcVF5eG5Ra0ZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRlZCUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVczdRVUZETTBRc2NVSkJRVkVzUlVGQlJUdEJRVU5XTEhOQ1FVRkxMRWxCUVVrN1FVRkJSU3cwUWtGQlR5eEhRVUZITEVOQlFVTTdRVUZEZEVJc2MwSkJRVXNzU1VGQlNUdEJRVUZGTERSQ1FVRlBMRWRCUVVjc1EwRkJRenRCUVVOMFFpeHpRa0ZCU3l4SlFVRkpPMEZCUVVVc05FSkJRVThzUjBGQlJ5eERRVUZETzBGQlEzUkNPMEZCUVZNc05FSkJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVjBGQlZTeERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1YwRkJWU3hEUVVGRExFTkJRVU1zWVVGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUVVFc1kwRkRkRWc3VlVGRFNpeERRVUZETEVOQlFVTTdUVUZEVGp0RlFVTktPenR6UWtGRll5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwN096czdPenM3UVVOcVFuUkRMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4bFFVRmxMRVZCUVVVN096czdPMEZCUzI1RExGZEJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNaVUZCWlN4SFFVRkhMRmxCUVZjN1FVRkRNVU1zWVVGQlNTeExRVUZMTEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU03UVVGRGRFTXNZVUZCU1N4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMjVDTEdGQlFVa3NUMEZCVHl4aFFVRkRPMEZCUTFvc1owSkJRVThzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3UVVGREwwSXNhVUpCUVVrc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhwUWtGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEVsQlFVa3NSVUZCUlR0QlFVTndSQ3d3UWtGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGpRVU01UWp0VlFVTktPMEZCUTBRc1owSkJRVThzVTBGQlV5eERRVUZETzAxQlEzQkNMRU5CUVVNN1JVRkRURHM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhsUVVGbE96czdPenM3TzBGRGNrSXZReXhoUVVGWkxFTkJRVU03T3pzN08wRkJSV0lzUzBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRk96czdPenRCUVVzelFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVExFbEJRVWtzUlVGQlJUdEJRVU4wUXl4aFFVRkpMRVZCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEySXNiVUpCUVUwc1NVRkJTU3hWUVVGVkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJRenRWUVVNNVF6dEJRVU5FTEdGQlFVa3NUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRPMEZCUTI1RUxHRkJRVWtzVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnFRaXhqUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTNoRExHOUNRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xVkJRM3BETzBGQlEwUXNaMEpCUVU4c1QwRkJUeXhEUVVGRE8wMUJRMnhDTEVOQlFVTTdSVUZEVERzN2MwSkJSV01zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBPenM3T3pzN08wRkRjRUoyUXl4aFFVRlpMRU5CUVVNN096czdPMEZCUldJc1MwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RlFVRkZPenM3T3p0QlFVdG9ReXhYUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NSMEZCUnl4VlFVRlRMRWxCUVVrc1JVRkJSVHRCUVVNelF5eGhRVUZKTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRMklzYlVKQlFVMHNTVUZCU1N4VlFVRlZMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXp0VlFVTTVRenRCUVVORUxHRkJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RlFVRkZMRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzBGQlEyNUVMR0ZCUVVrc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5xUWl4alFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTzBGQlEzaERMRzlDUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdWVUZEZEVRN1FVRkRSQ3huUWtGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1RVRkROVUlzUTBGQlF6dEZRVU5NT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWazdPenM3T3pzN1FVTndRalZETEdGQlFWa3NRMEZCUXpzN096czdPM0ZDUVVWT0xFVkJRVlU3TzBGQlJXcENMRXRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlRzN096czdPMEZCVFROQ0xGZEJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCUVZNc1RVRkJUU3hGUVVGRkxGRkJRVkVzUlVGQlJUdEJRVU5zUkN4aFFVRkpMRTlCUVU4c1RVRkJUU3hMUVVGTExGRkJRVkVzUlVGQlJUdEJRVU0xUWl4dFFrRkJUU3hKUVVGSkxGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFZRVU53UkR0QlFVTkVMR0ZCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTTVRaXhoUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NUVUZCVFN4RlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBGQlEyeEVMR2RDUVVGUExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1RVRkRiRVVzUTBGQlF6dEZRVU5NTzBGQlEwUXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTzBGQlEzaENMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRE8wVkJRM0JFT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVODdPenM3T3pzN1FVTjJRblpETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVWQlFVVTdPenM3TzBGQlN6RkNMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEZWQlFWTXNTMEZCU3l4RlFVRkZPMEZCUTNSRExHRkJRVWtzUlVGQlJTeExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkRaaXh0UWtGQlRTeEpRVUZKTEZWQlFWVXNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzFWQlF5OURPMEZCUTBRc1lVRkJTU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEyaENMR05CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRE5VSXNiVUpCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdWVUZETjBJN1FVRkRSQ3huUWtGQlR5eE5RVUZOTEVOQlFVTTdUVUZEYWtJc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTA3T3pzN096czdRVU51UW5SRExHRkJRVmtzUTBGQlF6czdPenM3TzNGQ1FVVk9MRVZCUVdFN08wRkJSWEJDTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJUczdPenM3UVVGTGVrSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFZEJRVWNzVlVGQlV5eFRRVUZUTEVWQlFVVTdRVUZEZWtNc1owSkJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdUVUZEZGtZN1JVRkRTanM3YzBKQlJXTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTE96czdPenM3TzBGRFpISkRMR0ZCUVZrc1EwRkJRenM3T3pzN1FVRkZZaXhMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRVZCUVVVN1FVRkROMElzVjBGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1dVRkJWenRCUVVOd1F5eG5Ra0ZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHTkJRV01zUlVGQlJTeFZRVUZETEVWQlFVVXNSVUZCU3p0QlFVTjRReXh4UWtGQlVTeEZRVUZGTzBGQlExWXNjMEpCUVVzc1IwRkJSenRCUVVGRkxEUkNRVUZQTEUxQlFVMHNRMEZCUXp0QlFVTjRRaXh6UWtGQlN5eEhRVUZITzBGQlFVVXNORUpCUVU4c1RVRkJUU3hEUVVGRE8wRkJRM2hDTEhOQ1FVRkxMRWRCUVVjN1FVRkJSU3cwUWtGQlR5eFBRVUZQTEVOQlFVTTdRVUZEZWtJc2MwSkJRVXNzUjBGQlJ6dEJRVUZGTERSQ1FVRlBMRTlCUVU4c1EwRkJRenRCUVVONlFpeHpRa0ZCU3l4SFFVRkhPMEZCUVVVc05FSkJRVThzVDBGQlR5eERRVUZETzBGQlEzcENPMEZCUVZNc05FSkJRVThzUlVGQlJTeERRVUZETzBGQlFVRXNZMEZEYkVJN1ZVRkRTaXhEUVVGRExFTkJRVU03VFVGRFRqdEZRVU5LT3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTTdPenM3T3pzN1FVTnFRbnBETEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVWQlFVVTdPenM3TzBGQlMzcENMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEhRVUZITEZWQlFWTXNWMEZCVnl4RlFVRkZPMEZCUXpORExHRkJRVWtzVDBGQlR5eFhRVUZYTEV0QlFVc3NVMEZCVXl4RlFVRkZMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGVrUXNZVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0QlFVTnNReXhwUWtGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4RlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBGQlF6TkdMR2xDUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VlVGRE9VWTdRVUZEUkN4blFrRkJUeXhIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXp0TlFVTXpRaXhEUVVGRE8wVkJRMHc3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN6czdPenM3T3p0QlEycENja01zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJUczdPenM3UVVGTGVrSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFZEJRVWNzVlVGQlV5eExRVUZMTEVWQlFVVTdRVUZCUlN4blFrRkJUeXhKUVVGSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1RVRkJSU3hEUVVGRE8wVkJRMmhHTzBGQlEwUXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEzSkNMRmRCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRE8wVkJReTlET3p0elFrRkZZeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVczdPenM3T3pzN1FVTmlja01zWVVGQldTeERRVUZET3pzN096czdjVUpCUlU0c1JVRkJWVHM3UVVGRmFrSXNTMEZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGT3pzN096czdRVUZOTlVJc1YwRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUZCVXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRk8wRkJRMjVFTEdGQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1VVRkJVU3hGUVVGRk8wRkJRelZDTEcxQ1FVRk5MRWxCUVVrc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xVkJRM0JFTzBGQlEwUXNZVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlF6bENMR0ZCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeE5RVUZOTEVWQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03UVVGRGJFUXNaMEpCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0TlFVTnNSU3hEUVVGRE8wVkJRMHc3UVVGRFJDeExRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRGVFSXNWMEZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1JVRkRja1E3TzNOQ1FVVmpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVUczdPenM3T3p0QlEzWkNlRU1zWVVGQldTeERRVUZET3pzN096dEJRVVZpTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVlVzUlVGQlJUczdPenRCUVVrNVFpeFRRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGVExFZEJRVWNzUlVGQlJUdEJRVUZGTEZsQlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZCUlN4RFFVRkRPMFZCUTI1R096dHpRa0ZGWXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVlU3T3pzN096czdRVU5VTVVNc1lVRkJXU3hEUVVGRE96czdPenRCUVVWaUxFdEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVNelFpeFhRVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWE8wRkJRMnhETEdGQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFdEJRMlFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZETDBRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlJTeEZRVUZGTzBGQlEyNUZMRzlDUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VlVGRE5VSTdRVUZEUkN4blFrRkJUeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdUVUZETVVJc1EwRkJRenRGUVVOTU96dHpRa0ZGWXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThpTENKbWFXeGxJam9pY0hKdmRHOHVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdlMXh1WEhSY2RIWmhjaUJoSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJjZEdadmNpaDJZWElnYVNCcGJpQmhLU0FvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUQ4Z1pYaHdiM0owY3lBNklISnZiM1FwVzJsZElEMGdZVnRwWFR0Y2JseDBmVnh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvS1NCN1hHNXlaWFIxY200Z1hHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVYRzRnS2lvdklpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcFhHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc1Y2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OUxGeHVJRngwWEhSY2RHbGtPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzYjJGa1pXUTZJR1poYkhObFhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExteHZZV1JsWkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b01DazdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQjNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTFZelUxWmpVelpXWXdOR1V5Tm1GaE1qWXdOVnh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElDY3VMMkZ5Y21GNWN5OWpiMjUwWVdsdWN5ZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZaWFpsY25rblhHNXBiWEJ2Y25RZ0p5NHZZWEp5WVhsekwyWnBiSFJsY2lkY2JtbHRjRzl5ZENBbkxpOWhjbkpoZVhNdlptbHljM1FuWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJac1lYUk5ZWEFuWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJkeWIzVndRbmtuWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJkeWIzVndaV1FuWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDJkeWIzVndaV1JTYVdkb2RDZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZhVzVqYkhWa1pTZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZhVzVrWlhoUFppZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZhWE5CY25KaGVTZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZhbTlwYmxCaGRHaHpKMXh1YVcxd2IzSjBJQ2N1TDJGeWNtRjVjeTlzWVhOMEoxeHVhVzF3YjNKMElDY3VMMkZ5Y21GNWN5OXRZWEFuWEc1cGJYQnZjblFnSnk0dllYSnlZWGx6TDIxaGVDZGNibWx0Y0c5eWRDQW5MaTloY25KaGVYTXZiV2x1SjF4dWFXMXdiM0owSUNjdUwyRnljbUY1Y3k5eVlXNW5aU2RjYm1sdGNHOXlkQ0FuTGk5aGNuSmhlWE12Y21Wa2RXTmxKMXh1YVcxd2IzSjBJQ2N1TDJGeWNtRjVjeTl5WlcxdmRtVW5YRzVwYlhCdmNuUWdKeTR2WVhKeVlYbHpMM052YldVblhHNWNibWx0Y0c5eWRDQW5MaTl5WldkbGVIQnpMMlZ6WTJGd1pTZGNibHh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012WVc1MFUzUjViR1ZRWVhSb1ZHOVNaV2RsZUNkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwySnlNbTVzSjF4dWFXMXdiM0owSUNjdUwzTjBjbWx1WjNNdlkyOXRjR0Z5WlZSdkoxeHVhVzF3YjNKMElDY3VMM04wY21sdVozTXZZMjl1ZEdGcGJuTW5YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTlqZFhSemRISnBibWNuWEc1cGJYQnZjblFnSnk0dmMzUnlhVzVuY3k5bGJtUnpWMmwwYUNkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwyWnZjbTFoZENkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwyWnZjbTFoZEZaaGNtbGhZbXhsY3lkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwyZGxkRXhsYm1kMGFDZGNibWx0Y0c5eWRDQW5MaTl6ZEhKcGJtZHpMMmR5YjNWd1pXUW5YRzVwYlhCdmNuUWdKeTR2YzNSeWFXNW5jeTluY205MWNHVmtVbWxuYUhRblhHNXBiWEJ2Y25RZ0p5NHZjM1J5YVc1bmN5OXNaV1owVUdGa0oxeHVhVzF3YjNKMElDY3VMM04wY21sdVozTXZibXd5WW5JblhHNXBiWEJ2Y25RZ0p5NHZjM1J5YVc1bmN5OXhkVzkwWlNkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwzSmxaMlY0SjF4dWFXMXdiM0owSUNjdUwzTjBjbWx1WjNNdmNtVndaV0YwSjF4dWFXMXdiM0owSUNjdUwzTjBjbWx1WjNNdmNtbG5hSFJRWVdRblhHNXBiWEJ2Y25RZ0p5NHZjM1J5YVc1bmN5OXpkR0Z5ZEhOWGFYUm9KMXh1YVcxd2IzSjBJQ2N1TDNOMGNtbHVaM012ZFc1eGRXOTBaU2RjYm1sdGNHOXlkQ0FuTGk5emRISnBibWR6TDNodGJFVnpZMkZ3WlNkY2JtbHRjRzl5ZENBbkxpOXpkSEpwYm1kekwzaHRiRlZ1WlhOallYQmxKMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmFXNWtaWGd1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sdGNHOXlkQ0FuTGk5cGJtUmxlRTltSjF4dVhHNXBaaUFvSVVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVqYjI1MFlXbHVjeWtnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3S24wZ1lWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UySnZiMnhsWVc1OVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbU52Ym5SaGFXNXpJRDBnWm5WdVkzUnBiMjRvWVNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVwYm1SbGVFOW1LR0VwSUQ0OUlEQTdYRzRnSUNBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVZMjl1ZEdGcGJuTTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5aGNuSmhlWE12WTI5dWRHRnBibk11YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hRWEp5WVhrdWNISnZkRzkwZVhCbExtbHVaR1Y0VDJZcElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5cDlJR2wwWlcxY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5WEc0Z0lDQWdJQ292WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExtbHVaR1Y0VDJZZ1BTQm1kVzVqZEdsdmJpaHBkR1Z0S1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2tnYVc0Z2RHaHBjeUFtSmlCMGFHbHpXMmxkSUQwOVBTQnBkR1Z0S1NCeVpYUjFjbTRnYVR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzRnSUNBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbWx1WkdWNFQyWTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5aGNuSmhlWE12YVc1a1pYaFBaaTVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVpYWmxjbmtwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCallXeHNZbUZqYTF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3S24wZ1cyTnZiblJsZUhSZFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVaWFpsY25rZ1BTQm1kVzVqZEdsdmJpaGpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaFkyRnNiR0poWTJzdVkyRnNiQ2hqYjI1MFpYaDBJSHg4SUhSb2FYTXNJSFJvYVhOYmFWMHNJR2tzSUhSb2FYTXBLU0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG1WMlpYSjVPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDJWMlpYSjVMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwYlhCdmNuUWdKeTR2Wm14aGRFMWhjQ2RjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXVabWxzZEdWeUtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdZMkZzYkdKaFkydGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5cDlJRnRqYjI1MFpYaDBYVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVtYVd4MFpYSWdQU0JtZFc1amRHbHZiaWhqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NW1iR0YwVFdGd0tDaGhMQ0JwS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMkZzYkdKaFkyc3VZMkZzYkNoamIyNTBaWGgwSUh4OElIUm9hWE1zSUdFc0lHa3NJSFJvYVhNcEtTQnlaWFIxY200Z1lUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG1acGJIUmxjanRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwyRnljbUY1Y3k5bWFXeDBaWEl1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sdGNHOXlkQ0FuTGk5cGMwRnljbUY1SjF4dVhHNXBaaUFvSVVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVtYkdGMFRXRndLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnRjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUZ0amIyNTBaWGgwWFZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnUVhKeVlYbGNiaUFnSUNBZ0tpOWNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1Wm14aGRFMWhjQ0E5SUdaMWJtTjBhVzl1S0dOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J5WlhOMWJIUnpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJR05oYkd4aVlXTnJMbU5oYkd3b1kyOXVkR1Y0ZENCOGZDQjBhR2x6TENCMGFHbHpXMmxkTENCcExDQjBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoQmNuSmhlUzVwYzBGeWNtRjVLSEpsYzNWc2RDa3BYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MGN5NXdkWE5vTG1Gd2NHeDVLSEpsYzNWc2RITXNJSEpsYzNWc2RDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJR2xtSUNoeVpYTjFiSFFwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBjeTV3ZFhOb0tISmxjM1ZzZENrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZEhNN1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVpteGhkRTFoY0R0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OW1iR0YwVFdGd0xtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVVGeWNtRjVMbWx6UVhKeVlYa3BJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUc5aWFseHVJQ0FnSUNBcUlFQnpkR0YwYVdOY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUZ5Y21GNUxtbHpRWEp5WVhrZ1BTQm1kVzVqZEdsdmJpaHZZbW9wSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaHZZbW9wSUQwOVBTQW5XMjlpYW1WamRDQkJjbkpoZVYwbk8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZ5Y21GNUxtbHpRWEp5WVhrN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTloY25KaGVYTXZhWE5CY25KaGVTNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGQmNuSmhlUzV3Y205MGIzUjVjR1V1Wm1seWMzUXBJSHRjYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVptbHljM1FnUFNCbWRXNWpkR2x2YmlncElIc2djbVYwZFhKdUlIUm9hWE5iTUYwN0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVtYVhKemREdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDJGeWNtRjVjeTltYVhKemRDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGQmNuSmhlUzV3Y205MGIzUjVjR1V1WjNKdmRYQkNlU2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdOaGJHeGlZV05yWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNxZlNCYlkyOXVkR1Y0ZEYxY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0N2ZYMWNiaUFnSUNBZ0tpOWNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1WjNKdmRYQkNlU0E5SUdaMWJtTjBhVzl1S0dOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doSkM1cGMwWjFibU4wYVc5dUtHTmhiR3hpWVdOcktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dOaGJHeGlZV05ySUNzZ1hDSWdhWE1nYm05MElHRWdablZ1WTNScGIyNWNJaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJSHQ5TzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQjJZV3gxWlNBOUlIUm9hWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2EyVjVJRDBnWTJGc2JHSmhZMnN1WTJGc2JDaGpiMjUwWlhoMElIeDhJSFJvYVhNc0lIWmhiSFZsTENCcExDQjBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoclpYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2EyVjVJR2x1SUhKbGMzVnNkQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnpkV3gwVzJ0bGVWMHVjSFZ6YUNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWld4elpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUmJhMlY1WFNBOUlGdDJZV3gxWlYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1WjNKdmRYQkNlVHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwyRnljbUY1Y3k5bmNtOTFjRUo1TG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNW5jbTkxY0dWa0tTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlITnBlbVZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRCY25KaGVUeEJjbkpoZVQ1OVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbWR5YjNWd1pXUWdQU0JtZFc1amRHbHZiaWh6YVhwbEtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFJ6SUQwZ1cxMDdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXNaVzVuZEdnN0lHa2dLejBnYzJsNlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnpkV3gwY3k1d2RYTm9LSFJvYVhNdWMyeHBZMlVvYVN3Z2FTQXJJSE5wZW1VcEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4MGN6dGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVaM0p2ZFhCbFpEdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDJGeWNtRjVjeTluY205MWNHVmtMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1bmNtOTFjR1ZrVW1sbmFIUXBJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdjMmw2WlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBGeWNtRjVQRUZ5Y21GNVBuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1WjNKdmRYQmxaRkpwWjJoMElEMGdablZ1WTNScGIyNG9jMmw2WlNrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY21WemRXeDBjeUE5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnZEdocGN5NXNaVzVuZEdnN0lHa2dQaUF3T3lCcElDMDlJSE5wZW1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkSE11Y0hWemFDaDBhR2x6TG5Oc2FXTmxLRTFoZEdndWJXRjRLREFzSUdrZ0xTQnphWHBsS1N3Z2FTa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUnpMbkpsZG1WeWMyVW9LVHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1WjNKdmRYQmxaRkpwWjJoME8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMMmR5YjNWd1pXUlNhV2RvZEM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXMXdiM0owSUNjdUwybHVaR1Y0VDJZblhHNWNibWxtSUNnaFFYSnlZWGt1Y0hKdmRHOTBlWEJsTG1sdVkyeDFaR1VwSUh0Y2JpQWdJQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVhVzVqYkhWa1pTQTlJR1oxYm1OMGFXOXVLR0VwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2tnUFNCMGFHbHpMbWx1WkdWNFQyWW9ZU2s3WEc0Z0lDQWdJQ0FnSUdsbUlDaHBJRDRnTFRFcFhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdselcybGRJRDBnWVR0Y2JpQWdJQ0FnSUNBZ1pXeHpaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb0tHRXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWFXNWpiSFZrWlR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMMkZ5Y21GNWN5OXBibU5zZFdSbExtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVxYjJsdVVHRjBhSE1wSUh0Y2JpQWdJQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVhbTlwYmxCaGRHaHpJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J3WVhSb0lEMGdKeWM3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE5iYVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0dGMGFDNXNaVzVuZEdnZ1BpQXdJQ1ltSUhCaGRHZ3VZMmhoY2tGMEtIQmhkR2d1YkdWdVozUm9JQzBnTVNrZ0lUMDlJQ2N2SnlsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjR0YwYUNBclBTQW5MeWM3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1lYUm9JQ3M5SUhSb2FYTmJhVjB1ZEc5VGRISnBibWNvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY0dGMGFEdGNiaUFnSUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVhbTlwYmxCaGRHaHpPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDJwdmFXNVFZWFJvY3k1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXViR0Z6ZENrZ2UxeHVJQ0FnSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVzWVhOMElEMGdablZ1WTNScGIyNG9LU0I3SUhKbGRIVnliaUIwYUdselczUm9hWE11YkdWdVozUm9JQzBnTVYwN0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVzWVhOME8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMMnhoYzNRdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbG1JQ2doUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbTFoY0NrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHTmhiR3hpWVdOclhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhzcWZTQmJZMjl1ZEdWNGRGMWNiaUFnSUNBZ0tpOWNiaUFnSUNCQmNuSmhlUzV3Y205MGIzUjVjR1V1YldGd0lEMGdablZ1WTNScGIyNG9ZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISmxjM1ZzZENBOUlGdGRPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Uc2dhU0E4UFNCMGFHbHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUXVjSFZ6YUNoallXeHNZbUZqYXk1allXeHNLR052Ym5SbGVIUWdmSHdnZEdocGN5d2dkR2hwYzF0cFhTd2dhU3dnZEdocGN5a3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzRnSUNBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXViV0Z3TzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwyMWhjQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVcxd2IzSjBJQ2N1TDNKbFpIVmpaU2RjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXViV0Y0S1NCN1hHNGdJQ0FnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbTFoZUNBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eVpXUjFZMlVvS0dFc0lHSXBJRDArSUNoaElENGdZaWtnUHlCaElEb2dZaWs3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1YldGNE8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12WVhKeVlYbHpMMjFoZUM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXVjbVZrZFdObEtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdZMkZzYkdKaFkydGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5cDlJRnRqYjI1MFpYaDBYVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdleXA5WEc0Z0lDQWdJQ292WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExuSmxaSFZqWlNBOUlHWjFibU4wYVc5dUtHTmhiR3hpWVdOckxDQmpiMjUwWlhoMEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaEtIUm9hWE11YkdWdVozUm9JRDRnTUNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSlNaV1IxWTJVZ2IyWWdaVzF3ZEhrZ1lYSnlZWGtnZDJsMGFDQnVieUJwYm1sMGFXRnNJSFpoYkhWbFhDSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUd4bGRDQnlaWE4xYkhRZ1BTQjBhR2x6V3pCZE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThQU0IwYUdsekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhRZ1BTQmpZV3hzWW1GamF5NWpZV3hzS0dOdmJuUmxlSFFnZkh3Z2RHaHBjeXdnY21WemRXeDBMQ0IwYUdselcybGRMQ0JwTENCMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV5WldSMVkyVTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5aGNuSmhlWE12Y21Wa2RXTmxMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwYlhCdmNuUWdKeTR2Y21Wa2RXTmxKMXh1WEc1cFppQW9JVUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXRhVzRwSUh0Y2JpQWdJQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXViV2x1SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbFpIVmpaU2dvWVN3Z1lpa2dQVDRnS0dFZ1BDQmlLU0EvSUdFZ09pQmlLVHRjYmlBZ0lDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV0YVc0N1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTloY25KaGVYTXZiV2x1TG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVUZ5Y21GNUxuSmhibWRsS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo4YzNSeWFXNW5mU0JtY205dFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo4YzNSeWFXNW5mU0IwYjF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J6ZEdWd1hHNGdJQ0FnSUNvZ1FITjBZWFJwWTF4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBGeWNtRjVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lFRnljbUY1TG5KaGJtZGxJRDBnWm5WdVkzUnBiMjRvWm5KdmJTd2dkRzhzSUhOMFpYQWdQU0F4S1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J5WVc1blpTQTlJRnRkTzF4dUlDQWdJQ0FnSUNCc1pYUWdhWE5PZFcxaVpYSWdQU0IwZVhCbGIyWWdabkp2YlNBOVBUMGdKMjUxYldKbGNpY2dKaVlnZEhsd1pXOW1JSFJ2SUQwOVBTQW5iblZ0WW1WeUp6dGNiaUFnSUNBZ0lDQWdiR1YwSUdKbFoybHVJRDBnYVhOT2RXMWlaWElnUHlCbWNtOXRJRG9nWm5KdmJTNTBiMU4wY21sdVp5Z3BMbU5vWVhKRGIyUmxRWFFvTUNrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JsYm1RZ1BTQnBjMDUxYldKbGNpQS9JSFJ2SURvZ2RHOHVkRzlUZEhKcGJtY29LUzVqYUdGeVEyOWtaVUYwS0RBcE8xeHVJQ0FnSUNBZ0lDQnpkR1Z3SUQwZ1RXRjBhQzVoWW5Nb2MzUmxjQ2tnZkh3Z01UdGNiaUFnSUNBZ0lDQWdhV1lnS0dKbFoybHVJRDRnWlc1a0tTQnpkR1Z3SUQwZ0xYTjBaWEE3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQmlaV2RwYmpzZ2MzUmxjQ0ErSURBZ1B5QnBJRHc5SUdWdVpDQTZJR2tnUGowZ1pXNWtPeUJwSUNzOUlITjBaWEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpoYm1kbExuQjFjMmdvYVhOT2RXMWlaWElnUHlCcElEb2dVM1J5YVc1bkxtWnliMjFEYUdGeVEyOWtaU2hwS1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmhibWRsTzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRnljbUY1TG5KaGJtZGxPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdllYSnlZWGx6TDNKaGJtZGxMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lVRnljbUY1TG5CeWIzUnZkSGx3WlM1eVpXMXZkbVVwSUh0Y2JpQWdJQ0JCY25KaGVTNXdjbTkwYjNSNWNHVXVjbVZ0YjNabElEMGdablZ1WTNScGIyNG9ZU2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdkR2hwY3k1c1pXNW5kR2dnTFNBeE95QnBJRDQ5SURBN0lDMHRhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTmJhVjBnUFQwOUlHRXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTndiR2xqWlNocExDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWNtVnRiM1psTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZZWEp5WVhsekwzSmxiVzkyWlM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZCY25KaGVTNXdjbTkwYjNSNWNHVXVjMjl0WlNrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHTmhiR3hpWVdOclhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhzcWZTQmJZMjl1ZEdWNGRGMWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV6YjIxbElEMGdablZ1WTNScGIyNG9ZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRWtMbWx6Um5WdVkzUnBiMjRvWTJGc2JHSmhZMnNwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9ZMkZzYkdKaFkyc2dLeUJjSWlCcGN5QnViM1FnWVNCbWRXNWpkR2x2Ymx3aUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoallXeHNZbUZqYXk1allXeHNLR052Ym5SbGVIUWdmSHdnZEdocGN5d2dkR2hwYzF0cFhTd2dhU3dnZEdocGN5a3BJSEpsZEhWeWJpQjBjblZsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQmNuSmhlUzV3Y205MGIzUjVjR1V1YzI5dFpUdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDJGeWNtRjVjeTl6YjIxbExtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVZKbFowVjRjQzVsYzJOaGNHVXBJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdkR1Y0ZEZ4dUlDQWdJQ0FxSUVCemRHRjBhV05jYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRUZEhKcGJtZDlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1VtVm5SWGh3TG1WelkyRndaU0E5SUdaMWJtTjBhVzl1S0hSbGVIUXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJsZUhRdWNtVndiR0ZqWlNndld5MWJYRnhkZTMwb0tTb3JQeTRzWEZ4Y1hGNGtmQ05jWEhOZEwyY3NJQ2RjWEZ4Y0pDWW5LVHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCU1pXZEZlSEF1WlhOallYQmxPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmNtVm5aWGh3Y3k5bGMyTmhjR1V1YW5OY2JpQXFLaThpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhzZ1hDSmtaV1poZFd4MFhDSTZJSEpsY1hWcGNtVW9YQ0pqYjNKbExXcHpMMnhwWW5KaGNua3ZabTR2Y21WblpYaHdMMlZ6WTJGd1pWd2lLU3dnWDE5bGMwMXZaSFZzWlRvZ2RISjFaU0I5TzF4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJKaFltVnNMWEoxYm5ScGJXVXZZMjl5WlMxcWN5OXlaV2RsZUhBdlpYTmpZWEJsTG1welhHNGdLaW9nYlc5a2RXeGxJR2xrSUQwZ01qSmNiaUFxS2lCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUZ4dUlDb3FMeUlzSW5KbGNYVnBjbVVvSnk0dUx5NHVMMjF2WkhWc1pYTXZaWE0zTG5KbFoyVjRjQzVsYzJOaGNHVW5LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk0dkxpNHZiVzlrZFd4bGN5OGtMbU52Y21VbktTNVNaV2RGZUhBdVpYTmpZWEJsTzF4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJOdmNtVXRhbk12YkdsaWNtRnllUzltYmk5eVpXZGxlSEF2WlhOallYQmxMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTWpOY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJaTh2SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5aVpXNXFZVzFwYm1keUwxSmxlRVY0Y0M1bGMyTmhjR1ZjYm5aaGNpQWtaR1ZtSUQwZ2NtVnhkV2x5WlNnbkxpOGtMbVJsWmljcFhHNGdJQ3dnSkhKbElDQTlJSEpsY1hWcGNtVW9KeTR2SkM1eVpYQnNZV05sY2ljcEtDOWJYRnhjWEY0a0tpcy9MaWdwZkZ0Y1hGMTdmVjB2Wnl3Z0oxeGNYRndrSmljcE8xeHVKR1JsWmlna1pHVm1MbE1zSUNkU1pXZEZlSEFuTENCN1pYTmpZWEJsT2lCbWRXNWpkR2x2YmlCbGMyTmhjR1VvYVhRcGV5QnlaWFIxY200Z0pISmxLR2wwS1RzZ2ZYMHBPMXh1WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZaWE0zTG5KbFoyVjRjQzVsYzJOaGNHVXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F5TkZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lkbUZ5SUdkc2IySmhiQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZKQzVuYkc5aVlXd25LVnh1SUNBc0lHTnZjbVVnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2SkM1amIzSmxKeWxjYmlBZ0xDQlFVazlVVDFSWlVFVWdQU0FuY0hKdmRHOTBlWEJsSnp0Y2JuWmhjaUJqZEhnZ1BTQm1kVzVqZEdsdmJpaG1iaXdnZEdoaGRDbDdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWdwZTF4dUlDQWdJSEpsZEhWeWJpQm1iaTVoY0hCc2VTaDBhR0YwTENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0I5TzF4dWZUdGNiblpoY2lBa1pHVm1JRDBnWm5WdVkzUnBiMjRvZEhsd1pTd2dibUZ0WlN3Z2MyOTFjbU5sS1h0Y2JpQWdkbUZ5SUd0bGVTd2diM2R1TENCdmRYUXNJR1Y0Y0Z4dUlDQWdJQ3dnYVhOSGJHOWlZV3dnUFNCMGVYQmxJQ1lnSkdSbFppNUhYRzRnSUNBZ0xDQnBjMUJ5YjNSdklDQTlJSFI1Y0dVZ0ppQWtaR1ZtTGxCY2JpQWdJQ0FzSUhSaGNtZGxkQ0FnSUQwZ2FYTkhiRzlpWVd3Z1B5Qm5iRzlpWVd3Z09pQjBlWEJsSUNZZ0pHUmxaaTVUWEc0Z0lDQWdJQ0FnSUQ4Z1oyeHZZbUZzVzI1aGJXVmRJRG9nS0dkc2IySmhiRnR1WVcxbFhTQjhmQ0I3ZlNsYlVGSlBWRTlVV1ZCRlhWeHVJQ0FnSUN3Z1pYaHdiM0owY3lBZ1BTQnBjMGRzYjJKaGJDQS9JR052Y21VZ09pQmpiM0psVzI1aGJXVmRJSHg4SUNoamIzSmxXMjVoYldWZElEMGdlMzBwTzF4dUlDQnBaaWhwYzBkc2IySmhiQ2x6YjNWeVkyVWdQU0J1WVcxbE8xeHVJQ0JtYjNJb2EyVjVJR2x1SUhOdmRYSmpaU2w3WEc0Z0lDQWdMeThnWTI5dWRHRnBibk1nYVc0Z2JtRjBhWFpsWEc0Z0lDQWdiM2R1SUQwZ0lTaDBlWEJsSUNZZ0pHUmxaaTVHS1NBbUppQjBZWEpuWlhRZ0ppWWdhMlY1SUdsdUlIUmhjbWRsZER0Y2JpQWdJQ0JwWmlodmQyNGdKaVlnYTJWNUlHbHVJR1Y0Y0c5eWRITXBZMjl1ZEdsdWRXVTdYRzRnSUNBZ0x5OGdaWGh3YjNKMElHNWhkR2wyWlNCdmNpQndZWE56WldSY2JpQWdJQ0J2ZFhRZ1BTQnZkMjRnUHlCMFlYSm5aWFJiYTJWNVhTQTZJSE52ZFhKalpWdHJaWGxkTzF4dUlDQWdJQzh2SUhCeVpYWmxiblFnWjJ4dlltRnNJSEJ2Ykd4MWRHbHZiaUJtYjNJZ2JtRnRaWE53WVdObGMxeHVJQ0FnSUdsbUtHbHpSMnh2WW1Gc0lDWW1JSFI1Y0dWdlppQjBZWEpuWlhSYmEyVjVYU0FoUFNBblpuVnVZM1JwYjI0bktXVjRjQ0E5SUhOdmRYSmpaVnRyWlhsZE8xeHVJQ0FnSUM4dklHSnBibVFnZEdsdFpYSnpJSFJ2SUdkc2IySmhiQ0JtYjNJZ1kyRnNiQ0JtY205dElHVjRjRzl5ZENCamIyNTBaWGgwWEc0Z0lDQWdaV3h6WlNCcFppaDBlWEJsSUNZZ0pHUmxaaTVDSUNZbUlHOTNiaWxsZUhBZ1BTQmpkSGdvYjNWMExDQm5iRzlpWVd3cE8xeHVJQ0FnSUM4dklIZHlZWEFnWjJ4dlltRnNJR052Ym5OMGNuVmpkRzl5Y3lCbWIzSWdjSEpsZG1WdWRDQmphR0Z1WjJVZ2RHaGxiU0JwYmlCc2FXSnlZWEo1WEc0Z0lDQWdaV3h6WlNCcFppaDBlWEJsSUNZZ0pHUmxaaTVYSUNZbUlIUmhjbWRsZEZ0clpYbGRJRDA5SUc5MWRDa2hablZ1WTNScGIyNG9ReWw3WEc0Z0lDQWdJQ0JsZUhBZ1BTQm1kVzVqZEdsdmJpaHdZWEpoYlNsN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpJR2x1YzNSaGJtTmxiMllnUXlBL0lHNWxkeUJES0hCaGNtRnRLU0E2SUVNb2NHRnlZVzBwTzF4dUlDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUdWNGNGdFFVazlVVDFSWlVFVmRJRDBnUTF0UVVrOVVUMVJaVUVWZE8xeHVJQ0FnSUgwb2IzVjBLVHRjYmlBZ0lDQmxiSE5sSUdWNGNDQTlJR2x6VUhKdmRHOGdKaVlnZEhsd1pXOW1JRzkxZENBOVBTQW5ablZ1WTNScGIyNG5JRDhnWTNSNEtFWjFibU4wYVc5dUxtTmhiR3dzSUc5MWRDa2dPaUJ2ZFhRN1hHNGdJQ0FnTHk4Z1pYaHdiM0owWEc0Z0lDQWdaWGh3YjNKMGMxdHJaWGxkSUQwZ1pYaHdPMXh1SUNBZ0lHbG1LR2x6VUhKdmRHOHBLR1Y0Y0c5eWRITmJVRkpQVkU5VVdWQkZYU0I4ZkNBb1pYaHdiM0owYzF0UVVrOVVUMVJaVUVWZElEMGdlMzBwS1Z0clpYbGRJRDBnYjNWME8xeHVJQ0I5WEc1OU8xeHVMeThnZEhsd1pTQmlhWFJ0WVhCY2JpUmtaV1l1UmlBOUlERTdJQ0F2THlCbWIzSmpaV1JjYmlSa1pXWXVSeUE5SURJN0lDQXZMeUJuYkc5aVlXeGNiaVJrWldZdVV5QTlJRFE3SUNBdkx5QnpkR0YwYVdOY2JpUmtaV1l1VUNBOUlEZzdJQ0F2THlCd2NtOTBiMXh1SkdSbFppNUNJRDBnTVRZN0lDOHZJR0pwYm1SY2JpUmtaV1l1VnlBOUlETXlPeUF2THlCM2NtRndYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJQ1JrWldZN1hHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12SkM1a1pXWXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F5TlZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lMeThnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDNwc2IybHliMk5yTDJOdmNtVXRhbk12YVhOemRXVnpMemcySTJsemMzVmxZMjl0YldWdWRDMHhNVFUzTlRrd01qaGNiblpoY2lCbmJHOWlZV3dnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhSNWNHVnZaaUIzYVc1a2IzY2dJVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkMmx1Wkc5M0xrMWhkR2dnUFQwZ1RXRjBhRnh1SUNBL0lIZHBibVJ2ZHlBNklIUjVjR1Z2WmlCelpXeG1JQ0U5SUNkMWJtUmxabWx1WldRbklDWW1JSE5sYkdZdVRXRjBhQ0E5UFNCTllYUm9JRDhnYzJWc1ppQTZJRVoxYm1OMGFXOXVLQ2R5WlhSMWNtNGdkR2hwY3ljcEtDazdYRzVwWmloMGVYQmxiMllnWDE5bklEMDlJQ2R1ZFcxaVpYSW5LVjlmWnlBOUlHZHNiMkpoYkRzZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJHbHVaU0J1YnkxMWJtUmxabHh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekx5UXVaMnh2WW1Gc0xtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdNalpjYmlBcUtpQnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01GeHVJQ29xTHlJc0luWmhjaUJqYjNKbElEMGdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdkbVZ5YzJsdmJqb2dKekV1TWk0MUozMDdYRzVwWmloMGVYQmxiMllnWDE5bElEMDlJQ2R1ZFcxaVpYSW5LVjlmWlNBOUlHTnZjbVU3SUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFd4cGJtVWdibTh0ZFc1a1pXWmNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k4a0xtTnZjbVV1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBeU4xeHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWh5WldkRmVIQXNJSEpsY0d4aFkyVXBlMXh1SUNCMllYSWdjbVZ3YkdGalpYSWdQU0J5WlhCc1lXTmxJRDA5UFNCUFltcGxZM1FvY21Wd2JHRmpaU2tnUHlCbWRXNWpkR2x2Ymlod1lYSjBLWHRjYmlBZ0lDQnlaWFIxY200Z2NtVndiR0ZqWlZ0d1lYSjBYVHRjYmlBZ2ZTQTZJSEpsY0d4aFkyVTdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWhwZENsN1hHNGdJQ0FnY21WMGRYSnVJRk4wY21sdVp5aHBkQ2t1Y21Wd2JHRmpaU2h5WldkRmVIQXNJSEpsY0d4aFkyVnlLVHRjYmlBZ2ZUdGNibjA3WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZKQzV5WlhCc1lXTmxjaTVxYzF4dUlDb3FJRzF2WkhWc1pTQnBaQ0E5SURJNFhHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWxtSUNnaFUzUnlhVzVuTG5CeWIzUnZkSGx3WlM1aGJuUlRkSGxzWlZCaGRHaFViMUpsWjJWNEtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdVbVZuUlhod2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WVc1MFUzUjViR1ZRWVhSb1ZHOVNaV2RsZUNBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtGd2lVR0YwYUNCdGRYTjBJRzV2ZENCaVpTQmxiWEIwZVM1Y0lpazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYkdWMElIQmhkR2dnUFNCMGFHbHpMbkpsY0d4aFkyVW9MMXhjTDNzeUxIMHZaeXdnSnk4bktTNXlaWEJzWVdObEtDOWJMVnRjWEYxN2ZTZ3BLeTRzWEZ4Y1hGNGtmQ05jWEhOZEwyY3NJQ2RjWEZ4Y0pDWW5LVHRjYmlBZ0lDQWdJQ0FnYkdWMElIQmhkSFJsY200Z1BTQndZWFJvTG5KbGNHeGhZMlVvTHlnb1hGd3ZQMXhjS2x4Y0tpbDhLRnhjTHo5Y1hDb3BmQ2hjWEQ4cGZDaGNYQzhwS1M5bkxDQW9KREFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ0FvSkRBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKeThxS2ljNklISmxkSFZ5YmlBbktEODZMM3N4TEgwdUtpay9KenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSnlvcUp6b2djbVYwZFhKdUlDY3VLaWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNjdktpYzZJSEpsZEhWeWJpQW5LRDg2TDNzeExIMWJYaTlkS2lrL0p6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKeW9uT2lCeVpYUjFjbTRnSjF0ZUwxMHFKenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSno4bk9pQnlaWFIxY200Z0oxdGVMMTBuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbkx5YzZJSEpsZEhWeWJpQW5MM3N4TEgwbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJTWldkRmVIQW9KMTRvSnlBcklIQmhkSFJsY200Z0t5QW5LU1FuS1R0Y2JpQWdJQ0I5TzF4dWZWeHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1FcElIdGNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG1FZ1BTQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtRnVkRk4wZVd4bFVHRjBhRlJ2VW1WblpYZzdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WVc1MFUzUjViR1ZRWVhSb1ZHOVNaV2RsZUR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZZVzUwVTNSNWJHVlFZWFJvVkc5U1pXZGxlQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVcxd2IzSjBJQ2N1TDNodGJGVnVaWE5qWVhCbEoxeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVluSXlibXdwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTJKdmIyeGxZVzU5SUhodGJGVnVaWE5qWVhCbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1UzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVZbkl5Ym13Z1BTQm1kVzVqZEdsdmJpaDRiV3hWYm1WelkyRndaU2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjbVZ6ZFd4MElEMGdkR2hwY3k1eVpYQnNZV05sS0M4b1BHSnlQbnc4WW5KY1hDOCtLUzluTENBblhGeHVKeWs3WEc0Z0lDQWdJQ0FnSUdsbUlDaDRiV3hWYm1WelkyRndaU2tnY21WMGRYSnVJSEpsYzNWc2RDNTRiV3hWYm1WelkyRndaU2dwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WW5JeWJtdzdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDJKeU1tNXNMbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWVHMXNWVzVsYzJOaGNHVXBJSHRjYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuaHRiRlZ1WlhOallYQmxJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsY0d4aFkyVW9MeWdtYkhRN2ZDWm5kRHQ4SmlNek5EdDhKaU16T1R0OEptRnRjRHNwTDJjc0lDZ2tNU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNkcGRHTm9JQ2drTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5KbXgwT3ljNklISmxkSFZ5YmlBblBDYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2NtWjNRN0p6b2djbVYwZFhKdUlDYytKenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSnlZak16UTdKem9nY21WMGRYSnVJQ2RjSWljN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDY21Jek01T3ljNklISmxkSFZ5YmlCY0lpZGNJanRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSnlaaGJYQTdKem9nY21WMGRYSnVJQ2NtSnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZJSEpsZEhWeWJpQWtNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5odGJGVnVaWE5qWVhCbE8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTk0Yld4VmJtVnpZMkZ3WlM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbU52YlhCaGNtVlVieWtnZTF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVZMjl0Y0dGeVpWUnZJRDBnWm5WdVkzUnBiMjRvYzNSeUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoemRISWdQVDBnYm5Wc2JDQjhmQ0IwYUdseklENGdjM1J5S1NCeVpYUjFjbTRnTVR0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNZ1BDQnpkSElwSUhKbGRIVnliaUF0TVR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURBN1hHNGdJQ0FnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWpiMjF3WVhKbFZHODdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDJOdmJYQmhjbVZVYnk1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbU52Ym5SaGFXNXpLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJSE4wY2x4dUlDQWdJQ0FxTDF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVZMjl1ZEdGcGJuTWdQU0JtZFc1amRHbHZiaWh6ZEhJcElIc2djbVYwZFhKdUlIUm9hWE11YVc1a1pYaFBaaWh6ZEhJcElENGdMVEU3SUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVZMjl1ZEdGcGJuTTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDJOdmJuUmhhVzV6TG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cGJYQnZjblFnSnk0dUwyRnljbUY1Y3k5amIyNTBZV2x1Y3lkY2JtbHRjRzl5ZENBbkxpOW5aWFJNWlc1bmRHZ25YRzVjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWpkWFJ6ZEhKcGJtY3BJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMkp2YjJ4bFlXNThiblZ0WW1WeWZTQmJZMmhsWTJ0aWVYUmxYU0JqYUdWamF5QmllWFJsSUd4bGJtZDBhQ0JwWmlCMGNuVmxMaUFvWkdWbVlYVnNkQ0JwY3lCbVlXeHpaU2xjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdiV0Y0VEdWdVozUm9JSFJvWlNCdFlYZ2diR1Z1WjNSb0xseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCYmMzVm1abWw0WFNCMGFHVWdjM1ZtWm1sNExseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzTjBjbWx1WjMxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbU4xZEhOMGNtbHVaeUE5SUdaMWJtTjBhVzl1S0dOb1pXTnJZbmwwWlN3Z2JXRjRUR1Z1WjNSb0xDQnpkV1ptYVhncElIdGNiaUFnSUNBZ0lDQWdiR1YwSUdGeVowbHVaR1Y0SUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdGeVowTjFjbklnUFNBb0tTQTlQaUJoY21kMWJXVnVkSE5iWVhKblNXNWtaWGhkTzF4dUlDQWdJQ0FnSUNCc1pYUWdZWEpuVTJocFpuUWdQU0FvS1NBOVBpQmhjbWQxYldWdWRITmJZWEpuU1c1a1pYZ3JLMTA3WEc1Y2JpQWdJQ0FnSUNBZ1kyaGxZMnRpZVhSbElEMGdXeWRpYjI5c1pXRnVKeXdnSjI1MWJXSmxjaWRkTG1OdmJuUmhhVzV6S0hSNWNHVnZaaUJoY21kRGRYSnlLQ2twSUQ4Z1lYSm5VMmhwWm5Rb0tTQTZJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnWVhKblEzVnljaWdwSUNFOVBTQW5iblZ0WW1WeUp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGhjbWREZFhKeUtDa2dLeUJjSWlCcGN5QnViM1FnWVNCdWRXMWlaWEpjSWlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdiV0Y0VEdWdVozUm9JRDBnWVhKblUyaHBablFvS1R0Y2JseHVJQ0FnSUNBZ0lDQnpkV1ptYVhnZ1BTQjBlWEJsYjJZZ1lYSm5RM1Z5Y2lncElEMDlQU0FuYzNSeWFXNW5KeUEvSUdGeVoxTm9hV1owS0NrZ09pQW5KenRjYmx4dUlDQWdJQ0FnSUNCc1pYUWdiR1Z1WjNSb0lEMGdkR2hwY3k1blpYUk1aVzVuZEdnb1kyaGxZMnRpZVhSbEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0NFb2JHVnVaM1JvSUQ0Z2JXRjRUR1Z1WjNSb0tTa2djbVYwZFhKdUlIUm9hWE03WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJSE4xWm1acGVFeGxibWQwYUNBOUlITjFabVpwZUM1blpYUk1aVzVuZEdnb1kyaGxZMnRpZVhSbEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0hOMVptWnBlRXhsYm1kMGFDQStJRzFoZUV4bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRkpoYm1kbFJYSnliM0lvWENKTllYZ2diR1Z1WjNSb0lHMTFjM1FnWW1VZ2JXOXlaU0IwYUdGdUlITjFabVpwZUNCc1pXNW5kR2hjSWlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdiR1YwSUhKbGMzVnNkRk4wY21sdVp5QTlJQ2NuTzF4dUlDQWdJQ0FnSUNCc1pYUWdZMmhsWTJ0bFpFeGxibWQwYUNBOUlEQTdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdNZ1BTQjBhR2x6TG1Ob1lYSkJkQ2hwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCc0lEMGdZeTVuWlhSTVpXNW5kR2dvWTJobFkydGllWFJsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamFHVmphMlZrVEdWdVozUm9JQ3NnYkNBK0lHMWhlRXhsYm1kMGFDQXRJSE4xWm1acGVFeGxibWQwYUNrZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmphR1ZqYTJWa1RHVnVaM1JvSUNzOUlHdzdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFJUZEhKcGJtY2dLejBnWXp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnpkV3gwVTNSeWFXNW5JQ3NnYzNWbVptbDRPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WTNWMGMzUnlhVzVuTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZjM1J5YVc1bmN5OWpkWFJ6ZEhKcGJtY3Vhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWx0Y0c5eWRDQW5MaTR2WVhKeVlYbHpMMk52Ym5SaGFXNXpKMXh1WEc1cFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVaMlYwVEdWdVozUm9LU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRpYjI5c1pXRnVmRzUxYldKbGNuMGdXMk5vWldOcllubDBaVjBnWTJobFkyc2dZbmwwWlNCc1pXNW5kR2dnYVdZZ2RISjFaUzRnS0dSbFptRjFiSFFnYVhNZ1ptRnNjMlVwWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVoyVjBUR1Z1WjNSb0lEMGdablZ1WTNScGIyNG9ZMmhsWTJ0aWVYUmxLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQmhjbWRKYm1SbGVDQTlJREE3WEc0Z0lDQWdJQ0FnSUd4bGRDQmhjbWREZFhKeUlEMGdLQ2tnUFQ0Z1lYSm5kVzFsYm5SelcyRnlaMGx1WkdWNFhUdGNiaUFnSUNBZ0lDQWdiR1YwSUdGeVoxTm9hV1owSUQwZ0tDa2dQVDRnWVhKbmRXMWxiblJ6VzJGeVowbHVaR1Y0S3l0ZE8xeHVYRzRnSUNBZ0lDQWdJR05vWldOcllubDBaU0E5SUZzblltOXZiR1ZoYmljc0lDZHVkVzFpWlhJblhTNWpiMjUwWVdsdWN5aDBlWEJsYjJZZ1lYSm5RM1Z5Y2lncEtTQS9JR0Z5WjFOb2FXWjBLQ2tnT2lCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHTm9aV05yWW5sMFpTQTlQVDBnWm1Gc2MyVXBJSEpsZEhWeWJpQjBhR2x6TG14bGJtZDBhRHRjYmx4dUlDQWdJQ0FnSUNCc1pYUWdiR1Z1WjNSb0lEMGdNRHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1l5QTlJSFJvYVhNdVkyaGhja052WkdWQmRDaHBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjNhWFJqYUNBb1ptRnNjMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0lTaGpJRHc5SURCNE1EQXdNRGRHS1RwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pXNW5kR2dnS3owZ01UdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0lTaDBlWEJsYjJZZ1kyaGxZMnRpZVhSbElEMDlQU0FuYm5WdFltVnlKeUFtSmlCamFHVmphMko1ZEdVZ1BpQXdLVHBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlc1bmRHZ2dLejBnWTJobFkydGllWFJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FoS0dNZ1BEMGdNSGd3TURBM1JrWXBPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsYm1kMGFDQXJQU0F5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FoS0dNZ1BEMGdNSGd3TUVaR1JrWXBPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsYm1kMGFDQXJQU0F6TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVm1ZWFZzZERwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pXNW5kR2dnS3owZ05EdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JHVnVaM1JvTzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdVoyVjBUR1Z1WjNSb08xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTluWlhSTVpXNW5kR2d1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNWxibVJ6VjJsMGFDa2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdVM1J5YVc1bmZTQnpkSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjFjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtVnVaSE5YYVhSb0lEMGdablZ1WTNScGIyNG9jM1J5S1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JwSUQwZ2RHaHBjeTVzWVhOMFNXNWtaWGhQWmloemRISXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdhU0ErSUMweElDWW1JR2tnUFQwOUlIUm9hWE11YkdWdVozUm9JQzBnYzNSeUxuUnZVM1J5YVc1bktDa3ViR1Z1WjNSb08xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVaVzVrYzFkcGRHZzdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDJWdVpITlhhWFJvTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cGJYQnZjblFnSnk0dUwyRnljbUY1Y3k5cGMwRnljbUY1SjF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1Wm05eWJXRjBLU0I3WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNW1iM0p0WVhRZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVndiR0ZqWlNndktDY25mQ2RjWEh0OFhGeDlKM3hjWEhzb1hGeDNLeWxjWEgwcEwyY3NJQ2drTUN3Z0pERXNJQ1F5S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCemQybDBZMmdnS0NReEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRndpSnlkY0lqb2djbVYwZFhKdUlGd2lKMXdpTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNCY0lpZDdYQ0k2SUhKbGRIVnliaUFuZXljN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElGd2lmU2RjSWpvZ2NtVjBkWEp1SUNkOUp6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2SUhKbGRIVnliaUFvSVM5ZVhGeGtLeVF2Wnk1MFpYTjBLQ1F5S1NBL0lHRnlaM1Z0Wlc1MGMxc3dYU0I4ZkNCN2ZTQTZJRUZ5Y21GNUxtbHpRWEp5WVhrb1lYSm5kVzFsYm5Seld6QmRLU0EvSUdGeVozVnRaVzUwYzFzd1hTQTZJR0Z5WjNWdFpXNTBjeWxiSkRKZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVabTl5YldGME8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTltYjNKdFlYUXVhbk5jYmlBcUtpOGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibWxtSUNnaFUzUnlhVzVuTG5CeWIzUnZkSGx3WlM1bWIzSnRZWFJXWVhKcFlXSnNaWE1wSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZXlwOUlHRnlaM1Z0Wlc1MGMxeHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdEJjbkpoZVR4emRISnBibWMrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVabTl5YldGMFZtRnlhV0ZpYkdWeklEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlaV2RsZUNBOUlDOG9KeWQ4SjF4Y2UzeGNYSDBuZkZ4Y2V5aGNYSGNyS1Z4Y2ZTa3ZaenRjYmlBZ0lDQWdJQ0FnYkdWMElIWmhjbWxoWW14bGN5QTlJRnRkTzF4dUlDQWdJQ0FnSUNCc1pYUWdiV0YwWTJobGN6dGNiaUFnSUNBZ0lDQWdkMmhwYkdVZ0tHMWhkR05vWlhNZ1BTQnlaV2RsZUM1bGVHVmpLSFJvYVhNcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdiV0YwWTJnZ1BTQnRZWFJqYUdWeld6QmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzFoZEdOb0lDRTlQU0JjSWljblhDSWdKaVlnYldGMFkyZ2dJVDA5SUZ3aUozdGNJaUFtSmlCdFlYUmphQ0FoUFQwZ1hDSjlKMXdpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlhV0ZpYkdWekxuQjFjMmdvYldGMFkyaGxjMXN5WFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGNtbGhZbXhsY3p0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtWnZjbTFoZEZaaGNtbGhZbXhsY3p0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmMzSmpMM04wY21sdVozTXZabTl5YldGMFZtRnlhV0ZpYkdWekxtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBaaUFvSVZOMGNtbHVaeTV3Y205MGIzUjVjR1V1WjNKdmRYQmxaQ2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J6YVhwbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1FYSnlZWGs4YzNSeWFXNW5QbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExtZHliM1Z3WldRZ1BTQm1kVzVqZEdsdmJpaHphWHBsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doS0hOcGVtVWdQaUF4S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0owbHVkbUZzYVdRZ2MybDZaU0IyWVd4MVpTY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2MybDZaU0FoUFQwZ0oyNTFiV0psY2ljcElITnBlbVVnUFNCd1lYSnpaVWx1ZENoemFYcGxLVnh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVnpkV3gwY3lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViR1Z1WjNSb095QnBJQ3M5SUhOcGVtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZEhNdWNIVnphQ2gwYUdsekxuTnNhV05sS0drc0lHa2dLeUJ6YVhwbEtTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2RITTdYRzRnSUNBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVuY205MWNHVmtPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5bmNtOTFjR1ZrTG1welhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVaM0p2ZFhCbFpGSnBaMmgwS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUhOcGVtVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdEJjbkpoZVR4emRISnBibWMrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVaM0p2ZFhCbFpGSnBaMmgwSUQwZ1puVnVZM1JwYjI0b2MybDZaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9JU2h6YVhwbElENGdNU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkSmJuWmhiR2xrSUhOcGVtVWdkbUZzZFdVbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhOcGVtVWdJVDA5SUNkdWRXMWlaWEluS1NCemFYcGxJRDBnY0dGeWMyVkpiblFvYzJsNlpTbGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGMzVnNkSE1nUFNCYlhUdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SUhSb2FYTXViR1Z1WjNSb095QnBJRDRnTURzZ2FTQXRQU0J6YVhwbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFJ6TG5CMWMyZ29kR2hwY3k1emJHbGpaU2hOWVhSb0xtMWhlQ2d3TENCcElDMGdjMmw2WlNrc0lHa3BLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBjeTV5WlhabGNuTmxLQ2s3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1bmNtOTFjR1ZrVW1sbmFIUTdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMM055WXk5emRISnBibWR6TDJkeWIzVndaV1JTYVdkb2RDNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElDY3VMM0psY0dWaGRDZGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExteGxablJRWVdRcElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2JHVnVaM1JvWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJR1pwYkd4RGFHRnlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJuTWdlM04wY21sdVozMWNiaUFnSUNBZ0tpOWNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG14bFpuUlFZV1FnUFNCbWRXNWpkR2x2Ymloc1pXNW5kR2dzSUdacGJHeERhR0Z5S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdiR1Z1WjNSb0lDRTlQU0FuYm5WdFltVnlKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhzWlc1bmRHZ2dLeUFuSUdseklHNXZkQ0JoSUc1MWJXSmxjaWNwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHbG1JQ2doWm1sc2JFTm9ZWElwSUdacGJHeERhR0Z5SUQwZ0p5QW5PMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVzWlc1bmRHZ2dQajBnYkdWdVozUm9LU0J5WlhSMWNtNGdkR2hwY3k1MGIxTjBjbWx1WnlncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptbHNiRU5vWVhJdWNtVndaV0YwS0d4bGJtZDBhQ0F0SUhSb2FYTXViR1Z1WjNSb0tTQXJJSFJvYVhNdWRHOVRkSEpwYm1jb0tUdGNiaUFnSUNCOU8xeHVmVnh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExteHdZV1FwSUh0Y2JpQWdJQ0JUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMbXh3WVdRZ1BTQlRkSEpwYm1jdWNISnZkRzkwZVhCbExteGxablJRWVdRN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXViR1ZtZEZCaFpEdGNibHh1WEc1Y2JpOHFLaUJYUlVKUVFVTkxJRVpQVDFSRlVpQXFLbHh1SUNvcUlDNHZjM0pqTDNOMGNtbHVaM012YkdWbWRGQmhaQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExuSmxjR1ZoZENrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCamIzVnVkRnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMWNiaUFnSUNBZ0tpOWNiaUFnSUNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5KbGNHVmhkQ0E5SUdaMWJtTjBhVzl1S0dOdmRXNTBLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hLR052ZFc1MElENDlJREFwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnblNXNTJZV3hwWkNCamIzVnVkQ0IyWVd4MVpTY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUd4bGRDQnlaWE4xYkhRZ1BTQW5KenRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCamIzVnVkRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnS3owZ2RHaHBjeTUwYjFOMGNtbHVaeWdwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eVpYQmxZWFE3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OXpkSEpwYm1kekwzSmxjR1ZoZEM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWFXMXdiM0owSUNjdUwzaHRiRVZ6WTJGd1pTZGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExtNXNNbUp5S1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0aWIyOXNaV0Z1ZlNCNGJXeEZjMk5oY0dWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN2MzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVibXd5WW5JZ1BTQm1kVzVqZEdsdmJpaDRiV3hGYzJOaGNHVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2g0Yld4RmMyTmhjR1VnUHlCMGFHbHpMbmh0YkVWelkyRndaU2dwSURvZ2RHaHBjeWt1Y21Wd2JHRmpaU2d2S0Z4Y2NseGNibnhjWEc1Y1hISjhYRnh5ZkZ4Y2Jpa3ZaeXdnSnp4aWNpOCtKeWs3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG01c01tSnlPMXh1WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdmMzUnlhVzVuY3k5dWJESmljaTVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExuaHRiRVZ6WTJGd1pTa2dlMXh1SUNBZ0lGTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWVHMXNSWE5qWVhCbElEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxjR3hoWTJVb0x5ZzhmRDU4WENKOEozd21LUzluTENBb0pERXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4zYVhSamFDQW9KREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0p6d25PaUJ5WlhSMWNtNGdKeVpzZERzbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5QaWM2SUhKbGRIVnliaUFuSm1kME95YzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2RjSWljNklISmxkSFZ5YmlBbkppTXpORHNuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNCY0lpZGNJam9nY21WMGRYSnVJQ2NtSXpNNU95YzdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2NtSnpvZ2NtVjBkWEp1SUNjbVlXMXdPeWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1poZFd4ME9pQnlaWFIxY200Z0pERTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzU0Yld4RmMyTmhjR1U3WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDNOeVl5OXpkSEpwYm1kekwzaHRiRVZ6WTJGd1pTNXFjMXh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5GMWIzUmxLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRpYjI5c1pXRnVmU0J2ZG1WeWJHRndZV0pzWlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzFjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuRjFiM1JsSUQwZ1puVnVZM1JwYjI0b2IzWmxjbXhoY0dGaWJHVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCdmRtVnliR0Z3WVdKc1pTQWhQVDBnSjJKdmIyeGxZVzRuS1NCdmRtVnliR0Z3WVdKc1pTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doYjNabGNteGhjR0ZpYkdVZ0ppWWdkR2hwY3k1c1pXNW5kR2dnUGowZ01pa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVkyaGhja0YwS0RBcElEMDlQU0FuWENJbklDWW1JSFJvYVhNdVkyaGhja0YwS0hSb2FYTXViR1Z1WjNSb0lDMGdNU2tnUFQwOUlDZGNJaWNwSUhKbGRIVnliaUIwYUdsekxuUnZVM1J5YVc1bktDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1amFHRnlRWFFvTUNrZ1BUMDlJRndpSjF3aUlDWW1JSFJvYVhNdVkyaGhja0YwS0hSb2FYTXViR1Z1WjNSb0lDMGdNU2tnUFQwOUlGd2lKMXdpS1NCeVpYUjFjbTRnZEdocGN5NTBiMU4wY21sdVp5Z3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFuWENJbklDc2dkR2hwY3lBcklDZGNJaWM3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eGRXOTBaVHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwzTjBjbWx1WjNNdmNYVnZkR1V1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sbUlDZ2hVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXlaV2RsZUNrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCbWJHRm5jMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRTWldkRmVIQjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eVpXZGxlQ0E5SUdaMWJtTjBhVzl1S0dac1lXZHpLU0I3SUhKbGRIVnliaUJ1WlhjZ1VtVm5SWGh3S0hSb2FYTXNJR1pzWVdkektUc2dmVHRjYm4xY2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV5S1NCN1hHNGdJQ0FnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV5SUQwZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eVpXZGxlRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1eVpXZGxlRHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YzNKakwzTjBjbWx1WjNNdmNtVm5aWGd1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sdGNHOXlkQ0FuTGk5eVpYQmxZWFFuWEc1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV5YVdkb2RGQmhaQ2tnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JzWlc1bmRHaGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ1ptbHNiRU5vWVhKY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN2MzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVjbWxuYUhSUVlXUWdQU0JtZFc1amRHbHZiaWhzWlc1bmRHZ3NJR1pwYkd4RGFHRnlLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2JHVnVaM1JvSUNFOVBTQW5iblZ0WW1WeUp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaHNaVzVuZEdnZ0t5QW5JR2x6SUc1dmRDQmhJRzUxYldKbGNpY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2habWxzYkVOb1lYSXBJR1pwYkd4RGFHRnlJRDBnSnlBbk8xeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXNaVzVuZEdnZ1BqMGdiR1Z1WjNSb0tTQnlaWFIxY200Z2RHaHBjeTUwYjFOMGNtbHVaeWdwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NTBiMU4wY21sdVp5Z3BJQ3NnWm1sc2JFTm9ZWEl1Y21Wd1pXRjBLR3hsYm1kMGFDQXRJSFJvYVhNdWJHVnVaM1JvS1R0Y2JpQWdJQ0I5TzF4dWZWeHVhV1lnS0NGVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5Kd1lXUXBJSHRjYmlBZ0lDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuSndZV1FnUFNCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5KcFoyaDBVR0ZrTzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuSnBaMmgwVUdGa08xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXpjbU12YzNSeWFXNW5jeTl5YVdkb2RGQmhaQzVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1YVdZZ0tDRlRkSEpwYm1jdWNISnZkRzkwZVhCbExuTjBZWEowYzFkcGRHZ3BJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdjM1J5WEc0Z0lDQWdJQ292WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNXpkR0Z5ZEhOWGFYUm9JRDBnWm5WdVkzUnBiMjRvYzNSeUtTQjdJSEpsZEhWeWJpQjBhR2x6TG1sdVpHVjRUMllvYzNSeUtTQTlQVDBnTURzZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzV6ZEdGeWRITlhhWFJvTzF4dVhHNWNibHh1THlvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTSUNvcVhHNGdLaW9nTGk5emNtTXZjM1J5YVc1bmN5OXpkR0Z5ZEhOWGFYUm9MbXB6WEc0Z0tpb3ZJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwWmlBb0lWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWRXNXhkVzkwWlNrZ2UxeHVJQ0FnSUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1ZFc1eGRXOTBaU0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXNaVzVuZEdnZ1BqMGdNaUFtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdLQ2gwYUdsekxtTm9ZWEpCZENnd0tTQTlQVDBnSjF3aUp5QW1KaUIwYUdsekxtTm9ZWEpCZENoMGFHbHpMbXhsYm1kMGFDQXRJREVwSUQwOVBTQW5YQ0luS1NCOGZGeHVJQ0FnSUNBZ0lDQWdJQ0FnS0hSb2FYTXVZMmhoY2tGMEtEQXBJRDA5UFNCY0lpZGNJaUFtSmlCMGFHbHpMbU5vWVhKQmRDaDBhR2x6TG14bGJtZDBhQ0F0SURFcElEMDlQU0JjSWlkY0lpa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6YkdsalpTZ3hMQ0F0TVNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11ZEc5VGRISnBibWNvS1R0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuVnVjWFZ2ZEdVN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwzTnlZeTl6ZEhKcGJtZHpMM1Z1Y1hWdmRHVXVhbk5jYmlBcUtpOGlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm90by5qcy9kaXN0L3Byb3RvLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIWdsb2JhbC5kb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeS5leHRlbmRzIHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL3dpbmRvdy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuJC5mbi5ncm91cEJ5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBlbGVtID0gdGhpc1tpXTtcbiAgICAgICAgbGV0IGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBlbGVtLCBlbGVtLCBpLCB0aGlzKTtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gcmVzdWx0KSlcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9ICQoW10pO1xuXG4gICAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHRoaXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLmdyb3VwQnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncm91cEJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PEhUTUxFbGVtZW50PnxqUXVlcnk8SFRNTEVsZW1lbnQ+fSBleGNsdWRlc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG4kLmZuLm1heFpJbmRleCA9IGZ1bmN0aW9uKGV4Y2x1ZGVzKSB7XG4gICAgbGV0IHpJbmRleCA9IDA7XG4gICAgdGhpcy5maW5kKCc6dmlzaWJsZScpLmFuZFNlbGYoKS5hZGQodGhpcy5wYXJlbnRzVW50aWwoJ2h0bWwnKSkubm90KGV4Y2x1ZGVzKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlTmFtZSAhPT0gJyNkb2N1bWVudCcpIHtcbiAgICAgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoWydhYnNvbHV0ZScsICdyZWxhdGl2ZScsICdmaXhlZCddLmNvbnRhaW5zKCR0aGlzLmNzcygncG9zaXRpb24nKSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludCgkdGhpcy5jc3MoJ3pJbmRleCcpKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSAmJiB2YWx1ZSA+IHpJbmRleClcbiAgICAgICAgICAgICAgICAgICAgekluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gekluZGV4O1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gTWF4IHpJbmRleCBmcm9tIGRvY3VtZW50IGJvZHkuXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxIVE1MRWxlbWVudD58alF1ZXJ5PEhUTUxFbGVtZW50Pn0gZXhjbHVkZXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5tYXhaSW5kZXggPSBmdW5jdGlvbihleGNsdWRlcykge1xuICAgIHJldHVybiAkKGRvY3VtZW50LmJvZHkpLm1heFpJbmRleChleGNsdWRlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLm1heFpJbmRleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21heFpJbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHdpbmRvdyBmcm9tICcuL3dpbmRvdydcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2RvY3VtZW50LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbiQubmV4dFRpY2sgPSBmdW5jdGlvbihjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMCk7IH07XG5cbmV4cG9ydCBkZWZhdWx0ICQubmV4dFRpY2s7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9uZXh0VGljay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcbmltcG9ydCAnLi9zcGxpdCdcblxuJC5vYmogPSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV1cbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24ob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIGlmICgha2V5KSByZXR1cm4gb2JqO1xuICAgICAgICBsZXQga2V5RnJhZ21lbnRzID0gJC5zcGxpdChrZXksICcuJywgJy8nKTtcbiAgICAgICAgZm9yIChsZXQga2V5RnJhZ21lbnQgb2Yga2V5RnJhZ21lbnRzKSB7XG4gICAgICAgICAgICBpZiAoKG9iaiA9IG9ialtrZXlGcmFnbWVudF0pID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQuaXNBcnJheShkZWZhdWx0VmFsdWUpICYmICEkLmlzQXJyYXkob2JqKSlcbiAgICAgICAgICAgIG9iaiA9ICQubWFrZUFycmF5KG9iaik7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXBwZW5kQXJyYXldXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmdWxsa2V5XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKGFwcGVuZEFycmF5LCBvYmosIGZ1bGxrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgYXBwZW5kQXJyYXkgPSB0eXBlb2YgYXJncy5maXJzdCgpID09PSAnYm9vbGVhbicgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZTtcbiAgICAgICAgb2JqID0gdHlwZW9mIGFyZ3MuZmlyc3QoKSA9PT0gJ29iamVjdCcgfHwgJC5pc0Z1bmN0aW9uKGFyZ3MuZmlyc3QoKSkgPyBhcmdzLnNoaWZ0KCkgOiB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzLmZpcnN0KCkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGtleSBtdXN0IGJlIHN0cmluZyB0eXBlIDogXCIgKyBhcmdzLmZpcnN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bGxrZXkgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIHZhbHVlID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBsZXQga2V5cyA9ICQubWFwKCQuc3BsaXQoZnVsbGtleSwgJy4nLCAnLycpLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGlmICgvXihbXlxcW10rKT9cXFsoW15cXF1dKyk/XFxdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5LZXlzID0gW2tleS5tYXRjaCgvXihbXlxcW10rKT8vKVsxXV07XG4gICAgICAgICAgICAgICAgbGV0IGluQnJhY2tldCA9IC9cXFsoW15cXF1dKyk/XFxdL2c7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRNYXRjaGVzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0TWF0Y2hlcyA9IGluQnJhY2tldC5leGVjKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5LZXlzLnB1c2gobmV4dE1hdGNoZXNbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5LZXlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaXNOdWxsKG8sIGtleSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIShrZXkgaW4gbyAmJiAob1trZXldICE9IG51bGwpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3Vyck9iaiA9IG9iajtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFwcGVuZEFycmF5IHx8IGlzTnVsbChjdXJyT2JqLCBrZXkpKVxuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgkLmlzQXJyYXkoY3Vyck9ialtrZXldKSlcbiAgICAgICAgICAgICAgICAgICAgY3Vyck9ialtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY3Vyck9ialtrZXldID0gW2N1cnJPYmpba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc051bGwoY3Vyck9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5c1tpICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGtleXNbaSArIDFdID0gJzAnO1xuICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XSA9IC9eXFxkKyQvLnRlc3Qoa2V5c1tpICsgMV0pID8gW10gOiB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGtleXNbaSArIDFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGtleXNbaSArIDFdID0gJC5pc0FycmF5KGN1cnJPYmpba2V5XSkgPyBjdXJyT2JqW2tleV0ubGVuZ3RoICsgJycgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJPYmogPSBjdXJyT2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZW5lcmFsaXplOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmNvbnRhaW5zKCcuJykgfHwgL1xcWyhcXHcrKT9cXF0vLnRlc3Qoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgJC5vYmouc2V0KHRydWUsIHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXBdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXBwZW5kQXJyYXldXG4gICAgICogQHBhcmFtIHsqfE9iamVjdH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHsqfC4uLk9iamVjdH0gc291cmNlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dGVuZElmVW5kZWZpbmVkXVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uKGRlZXAsIGFwcGVuZEFycmF5LCB0YXJnZXQsIHNvdXJjZXMsIGV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgZGVlcCA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBhcHBlbmRBcnJheSA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBleHRlbmRJZlVuZGVmaW5lZCA9IHR5cGVvZiBhcmdzLmxhc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5wb3AoKSA6IGZhbHNlO1xuICAgICAgICB0YXJnZXQgPSBhcmdzLmxlbmd0aCA9PT0gMSA/IHt9IDogYXJncy5zaGlmdCgpIHx8IHt9O1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgISQuaXNGdW5jdGlvbih0YXJnZXQpKSB0YXJnZXQgPSB7fTtcblxuICAgICAgICBzb3VyY2VzID0gYXJncztcbiAgICAgICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmMgPSB0YXJnZXRbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weSA9IHNvdXJjZVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ID09PSB0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHlJc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBjb3B5ICYmICgkLmlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gJC5pc0FycmF5KGNvcHkpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvcHlJc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmNJc1BsYWluT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMgPT09IHVuZGVmaW5lZCB8fCAoc3JjSXNQbGFpbk9iamVjdCA9ICQuaXNQbGFpbk9iamVjdChzcmMpKSB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQub2JqLmV4dGVuZChkZWVwLCBhcHBlbmRBcnJheSwgKHNyY0lzUGxhaW5PYmplY3QgPyBzcmMgOiB7fSksIGNvcHksIGV4dGVuZElmVW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQubWVyZ2UoKGFwcGVuZEFycmF5ICYmICQuaXNBcnJheShzcmMpID8gc3JjIDogW10pLCAkLm9iai5leHRlbmQoZGVlcCwgW10sIGNvcHkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcHkgIT09IHVuZGVmaW5lZCAmJiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBuZXcgRGF0ZShjb3B5LmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3B5IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5nbG9iYWwgIT0gbnVsbCkgZmxhZ3MgKz0gJ2cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5pZ25vcmVDYXNlICE9IG51bGwpIGZsYWdzICs9ICdpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkubXVsdGlsaW5lICE9IG51bGwpIGZsYWdzICs9ICdtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkuc3RpY2t5ICE9IG51bGwpIGZsYWdzICs9ICd5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gbmV3IFJlZ0V4cChjb3B5LnNvdXJjZSwgZmxhZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGNvcHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0ga2V5VmFsdWVQYWlyc1xuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBtYWtlOiBmdW5jdGlvbiguLi5rZXlWYWx1ZVBhaXJzKSB7XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlWYWx1ZVBhaXJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICBvYmpba2V5VmFsdWVQYWlyc1tpXV0gPSBrZXlWYWx1ZVBhaXJzW2kgKyAxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGVtcHR5OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdChvYmopKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59O1xuXG5mb3IgKGxldCBrZXkgaW4gJC5vYmopIHtcbiAgICBsZXQgc2hvcnRLZXkgPSBrZXkgKyAnT2JqZWN0JztcbiAgICBpZiAoIShzaG9ydEtleSBpbiAkKSkge1xuICAgICAgICBpZiAoJC5vYmouaGFzT3duUHJvcGVydHkoa2V5KSkgJFtzaG9ydEtleV0gPSAkLm9ialtrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgJC5vYmo7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9vYmouanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgJGRlZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgJHJlZGVmICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmJylcbiAgLCBoaWRlICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgaGFzICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgU1lNQk9MX0lURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyAgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvICAgICAgICA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgQlVHR1kgICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICAgPSAndmFsdWVzJztcbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIHByb3RvICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsIF9uYXRpdmUgID0gcHJvdG9bU1lNQk9MX0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgX2RlZmF1bHQgPSBfbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgbWV0aG9kcywga2V5O1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKF9uYXRpdmUpe1xuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvKF9kZWZhdWx0LmNhbGwobmV3IEJhc2UpKTtcbiAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgLy8gRkYgZml4XG4gICAgaWYoIUxJQlJBUlkgJiYgaGFzKHByb3RvLCBGRl9JVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgU1lNQk9MX0lURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFKSAmJiAoQlVHR1kgfHwgIShTWU1CT0xfSVRFUkFUT1IgaW4gcHJvdG8pKSl7XG4gICAgaGlkZShwcm90bywgU1lNQk9MX0lURVJBVE9SLCBfZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSBfZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRkFVTFQgPT0gVkFMVUVTID8gX2RlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgICAgICAgID8gX2RlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiBERUZBVUxUICE9IFZBTFVFUyA/IF9kZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpJHJlZGVmKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRkZWYoJGRlZi5QICsgJGRlZi5GICogQlVHR1ksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBjdHggPSBmdW5jdGlvbihmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbnZhciAkZGVmID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXG4gICAgLCBpc1Byb3RvICA9IHR5cGUgJiAkZGVmLlBcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGlmKGlzR2xvYmFsICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nKWV4cCA9IHNvdXJjZVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5CICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5XICYmIHRhcmdldFtrZXldID09IG91dCkhZnVuY3Rpb24oQyl7XG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIGV4cFtQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgIH0ob3V0KTtcbiAgICBlbHNlIGV4cCA9IGlzUHJvdG8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0XG4gICAgZXhwb3J0c1trZXldID0gZXhwO1xuICAgIGlmKGlzUHJvdG8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi41J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaGlkZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWYuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlc2NyaXB0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oYXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHN0b3JlICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCBTeW1ib2wgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgU3ltYm9sICYmIFN5bWJvbFtuYW1lXSB8fCAoU3ltYm9sIHx8IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2NcbiAgLCBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGxcbiAgICAgIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY2xhc3NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtzdHJpbmd9IHNlcGFyYXRvclxuICogQHBhcmFtIHtzdHJpbmd9IFtlc2NhcGVDaGFyXVxuICogQHBhcmFtIHtudW1iZXJ9IFtsaW1pdF1cbiAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gKi9cbiQuc3BsaXQgPSBmdW5jdGlvbihzdHIsIHNlcGFyYXRvciwgZXNjYXBlQ2hhciwgbGltaXQpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzdHIgKyAnIGlzIG5vdCBhIHN0cmluZycpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICBpZiAodHlwZW9mIHNlcGFyYXRvciA9PT0gJ251bWJlcicpXG4gICAgICAgIFtsaW1pdCwgc2VwYXJhdG9yLCBlc2NhcGVDaGFyXSA9IFtzZXBhcmF0b3IsIG51bGwsIG51bGxdXG4gICAgZWxzZSBpZiAodHlwZW9mIGVzY2FwZUNoYXIgPT09ICdudW1iZXInKVxuICAgICAgICBbbGltaXQsIGVzY2FwZUNoYXJdID0gW2VzY2FwZUNoYXIsIG51bGxdXG5cbiAgICBmdW5jdGlvbiBsaW1pdGVkKGkpIHtcbiAgICAgICAgcmV0dXJuIDAgPCBsaW1pdCAmJiBsaW1pdCA8PSBpICsgMTtcbiAgICB9XG5cbiAgICBsZXQgcGFydHMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHMgPSAwO1xuICAgIGxldCBwO1xuICAgIHdoaWxlICgocCA9IHN0ci5pbmRleE9mKHNlcGFyYXRvciwgcykpICE9PSAtMSAmJiAhbGltaXRlZChpKSkge1xuICAgICAgICBsZXQgcGFydCA9IHN0ci5zbGljZShzLCBwKTtcbiAgICAgICAgbGV0IGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVzY2FwZUNoYXIgJiYgcGFydC5zbGljZSgtMSkgPT09IGVzY2FwZUNoYXIpIHtcbiAgICAgICAgICAgIHBhcnQgPSBwYXJ0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIGVzY2FwZWQgPSBwYXJ0LnNsaWNlKC0xKSAhPT0gZXNjYXBlQ2hhcjtcbiAgICAgICAgICAgIGlmIChlc2NhcGVkKSBwYXJ0ICs9IHNlcGFyYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0c1tpXSA9IChwYXJ0c1tpXSB8fCAnJykgKyBwYXJ0O1xuICAgICAgICBzID0gcCArIDE7XG4gICAgICAgIGlmICghZXNjYXBlZCkgaSsrO1xuICAgIH1cbiAgICBpZiAocyA8PSBzdHIubGVuZ3RoKVxuICAgICAgICBwYXJ0c1tpXSA9IChwYXJ0c1tpXSB8fCAnJykgKyBzdHIuc2xpY2Uocyk7XG5cbiAgICByZXR1cm4gcGFydHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnNwbGl0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3BsaXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5pbXBvcnQgJy4vb2JqJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVN0cmluZ1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG4kLnBhcnNlUXVlcnlTdHJpbmcgPSBmdW5jdGlvbihxdWVyeVN0cmluZywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgcXVlcnlTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHF1ZXJ5U3RyaW5nID09PSAnJykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGxldCBwYWlycyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KC8mYW1wO3wmL2kpO1xuICAgIGlmICghJC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKVxuICAgICAgICBvcHRpb25zID0ge307XG4gICAgZWxzZSBpZiAob3B0aW9ucy5leGNlcHQgJiYgISQuaXNBcnJheShvcHRpb25zLmV4Y2VwdCkpXG4gICAgICAgIG9wdGlvbnMuZXhjZXB0ID0gW29wdGlvbnMuZXhjZXB0XTtcbiAgICBsZXQgbyA9IHt9O1xuICAgIGZvciAobGV0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgbGV0IFtuYW1lLCB2YWx1ZV0gPSBwYWlyLnNwbGl0KCc9Jyk7XG4gICAgICAgIG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobmFtZSk7XG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhjZXB0ID09IG51bGwgfHwgIW9wdGlvbnMuZXhjZXB0LmNvbnRhaW5zKG5hbWUpKVxuICAgICAgICAgICAgJC5vYmouc2V0KHRydWUsIG8sIG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLnBhcnNlUXVlcnlTdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wYXJzZVF1ZXJ5U3RyaW5nLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZ2V0SXRlcmF0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfaXNJdGVyYWJsZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGVcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9IF9nZXRJdGVyYXRvcihhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKF9pc0l0ZXJhYmxlKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkLXRvLWFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gSVRFUkFUT1IgaW4gT1xuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRhdGFBbmRFdmVudHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcERhdGFBbmRFdmVudHNcbiAqIEByZXR1cm4ge2pRdWVyeTxIVE1MRWxlbWVudD59XG4gKi9cbiQuZm4ucmVjbG9uZSA9IGZ1bmN0aW9uKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb2xkRWxlbSA9ICQodGhpcyk7XG4gICAgICAgIGxldCBuZXdFbGVtID0gb2xkRWxlbS5jbG9uZShkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyk7XG4gICAgICAgIG5ld0VsZW0uaW5zZXJ0QWZ0ZXIodGhpcyk7XG4gICAgICAgIG9sZEVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBuZXdFbGVtWzBdO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5yZWNsb25lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVjbG9uZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKiBAcGFyYW0ge0FycmF5PHtuYW1lLHZhbHVlfT59IHBhcmFtc1xuICogQHJldHVybiB7bnVtYmVyfSBsZW5ndGggb2YgcGFyYW1ldGVyc1xuICovXG4kLnJlaW5kZXhBcnJheVBhcmFtcyA9IGZ1bmN0aW9uKHByZWZpeCwgcGFyYW1zKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBwcmVmaXgucmVwbGFjZSgnLicsICdcXFxcLicpICsgJylcXFxcWyhcXFxcZCspXFxcXF0nKTtcbiAgICBsZXQgcHJldkluZGV4ID0gbnVsbDtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBwYXJhbSBvZiBwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSByZWdleC5leGVjKHBhcmFtLm5hbWUpO1xuICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgICAgbGV0IGN1cnJJbmRleCA9IHJlc3VsdHNbMl07XG4gICAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSBjdXJySW5kZXgpIHtcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXggPSBjdXJySW5kZXg7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtLm5hbWUgPSBwYXJhbS5uYW1lLnJlcGxhY2UocmVnZXgsICckMVsnICsgaW5kZXggKyAnXScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQucmVpbmRleEFycmF5UGFyYW1zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVpbmRleEFycmF5UGFyYW1zLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnJldmVyc2UgPSBBcnJheS5wcm90b3R5cGUucmV2ZXJzZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JldmVyc2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuJC5mbi5zZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICBlbHNlIGlmIChvcHRpb25zLmV4Y2VwdCAmJiAhJC5pc0FycmF5KG9wdGlvbnMuZXhjZXB0KSlcbiAgICAgICAgb3B0aW9ucy5leGNlcHQgPSBbb3B0aW9ucy5leGNlcHRdO1xuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAkLmVhY2godGhpcy5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhjZXB0ID09IG51bGwgfHwgIW9wdGlvbnMuZXhjZXB0LmNvbnRhaW5zKHRoaXMubmFtZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkLmlzQXJyYXkocmVzdWx0W3RoaXMubmFtZV0pKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbdGhpcy5uYW1lXSA9IFtyZXN1bHRbdGhpcy5uYW1lXSwgdGhpcy52YWx1ZV07XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbdGhpcy5uYW1lXSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5zZXJpYWxpemVPYmplY3Q7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJpYWxpemVPYmplY3QuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAncHJvdG8uanMnXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW1zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbiQuc29tZSA9IGZ1bmN0aW9uKGl0ZW1zLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGlmICgkLmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgaXRlbXMsIGl0ZW1zW2ldLCBpLCBpdGVtcykpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICgkLmlzUGxhaW5PYmplY3QoaXRlbXMpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtcykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IGl0ZW1zLCBpdGVtc1trZXldLCBrZXksIGl0ZW1zKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGl0ZW1zICsgXCIgaXMgbm90IGFycmF5IG9yIHBsYWluIG9iamVjdFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5zb21lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc29tZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdwcm90by5qcydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuJC5zdXBwb3J0c0lucHV0VHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICAgIHJldHVybiBpbnB1dC50eXBlID09PSB0eXBlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5zdXBwb3J0c0lucHV0VHlwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N1cHBvcnRzSW5wdXRUeXBlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ3Byb3RvLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7WE1MfSB4bWxOb2RlIHRoZSB4bWwgbm9kZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuJC54bWxUb1N0cmluZyA9IGZ1bmN0aW9uKHhtbE5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKG5ldyBYTUxTZXJpYWxpemVyKCkpLnNlcmlhbGl6ZVRvU3RyaW5nKHhtbE5vZGUpO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICBpZiAoeG1sTm9kZS54bWwgPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlhNTFNlcmlhbGl6ZXIgbm90IHN1cHBvcnRlZFwiKTtcblxuICAgICAgICByZXR1cm4geG1sTm9kZS54bWw7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgJC54bWxUb1N0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3htbFRvU3RyaW5nLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==