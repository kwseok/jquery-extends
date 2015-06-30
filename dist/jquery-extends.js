(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["jQuery"] = factory(require("jquery"));
	else
		root["jQuery"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_24__) {
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
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
	__webpack_require__(76);
	
	__webpack_require__(80);
	
	__webpack_require__(81);
	
	__webpack_require__(82);
	
	__webpack_require__(83);
	
	__webpack_require__(84);
	
	__webpack_require__(1);
	
	__webpack_require__(85);
	
	__webpack_require__(86);
	
	__webpack_require__(87);
	
	__webpack_require__(88);
	
	__webpack_require__(89);
	
	__webpack_require__(75);
	
	__webpack_require__(90);
	
	__webpack_require__(91);
	
	exports['default'] = _jquery2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getIterator = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
	__webpack_require__(75);
	
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
	            for (var _iterator = _getIterator(keyFragments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	            for (var _iterator2 = _getIterator(sources), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(20);
	__webpack_require__(22);
	module.exports = __webpack_require__(6).core.getIterator;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	var $           = __webpack_require__(6)
	  , Iterators   = __webpack_require__(12).Iterators
	  , ITERATOR    = __webpack_require__(14)('iterator')
	  , ArrayValues = Iterators.Array
	  , NL          = $.g.NodeList
	  , HTC         = $.g.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype;
	if($.FW){
	  if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
	  if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
	}
	Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(6)
	  , setUnscope = __webpack_require__(10)
	  , ITER       = __webpack_require__(11).safe('iter')
	  , $iter      = __webpack_require__(12)
	  , step       = $iter.step
	  , Iterators  = $iter.Iterators;
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(17)(Array, 'Array', function(iterated, kind){
	  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , kind  = iter.k
	    , index = iter.i++;
	  if(!O || index >= O.length){
	    iter.o = undefined;
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(document) {'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}
	
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}
	
	var $ = module.exports = __webpack_require__(9)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(8).document;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	if (!global.document) {
	    throw new Error("jQuery.extends requires a window with a document");
	}
	
	module.exports = global;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var sid = 0;
	function uid(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
	}
	uid.safe = __webpack_require__(6).g.Symbol || uid;
	module.exports = uid;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(6)
	  , cof               = __webpack_require__(13)
	  , classof           = cof.classof
	  , assert            = __webpack_require__(16)
	  , assertObject      = assert.obj
	  , SYMBOL_ITERATOR   = __webpack_require__(14)('iterator')
	  , FF_ITERATOR       = '@@iterator'
	  , Iterators         = __webpack_require__(15)('iterators')
	  , IteratorPrototype = {};
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, $.that);
	function setIterator(O, value){
	  $.hide(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
	}
	
	module.exports = {
	  // Safari has buggy iterators w/o `next`
	  BUGGY: 'keys' in [] && !('next' in [].keys()),
	  Iterators: Iterators,
	  step: function(done, value){
	    return {value: value, done: !!done};
	  },
	  is: function(it){
	    var O      = Object(it)
	      , Symbol = $.g.Symbol;
	    return (Symbol && Symbol.iterator || FF_ITERATOR) in O
	      || SYMBOL_ITERATOR in O
	      || $.has(Iterators, classof(O));
	  },
	  get: function(it){
	    var Symbol = $.g.Symbol
	      , getIter;
	    if(it != undefined){
	      getIter = it[Symbol && Symbol.iterator || FF_ITERATOR]
	        || it[SYMBOL_ITERATOR]
	        || Iterators[classof(it)];
	    }
	    assert($.isFunction(getIter), it, ' is not iterable!');
	    return assertObject(getIter.call(it));
	  },
	  set: setIterator,
	  create: function(Constructor, NAME, next, proto){
	    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
	    cof.set(Constructor, NAME + ' Iterator');
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(6)
	  , TAG      = __webpack_require__(14)('toStringTag')
	  , toString = {}.toString;
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	cof.classof = function(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
	};
	cof.set = function(it, tag, stat){
	  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
	};
	module.exports = cof;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6).g
	  , store  = __webpack_require__(15)('wks');
	module.exports = function(name){
	  return store[name] || (store[name] =
	    global.Symbol && global.Symbol[name] || __webpack_require__(11).safe('Symbol.' + name));
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $      = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = $.g[SHARED] || ($.g[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	assert.def = $.assertDefined;
	assert.fn = function(it){
	  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
	  return it;
	};
	assert.obj = function(it){
	  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	assert.inst = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};
	module.exports = assert;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var $def            = __webpack_require__(18)
	  , $redef          = __webpack_require__(19)
	  , $               = __webpack_require__(6)
	  , cof             = __webpack_require__(13)
	  , $iter           = __webpack_require__(12)
	  , SYMBOL_ITERATOR = __webpack_require__(14)('iterator')
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values'
	  , Iterators       = $iter.Iterators;
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  $iter.create(Constructor, NAME, next);
	  function createMethod(kind){
	    function $$(that){
	      return new Constructor(that, kind);
	    }
	    switch(kind){
	      case KEYS: return function keys(){ return $$(this); };
	      case VALUES: return function values(){ return $$(this); };
	    } return function entries(){ return $$(this); };
	  }
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = $.getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    cof.set(IteratorPrototype, TAG, true);
	    // FF fix
	    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
	  }
	  // Define iterator
	  if($.FW || FORCE)$iter.set(proto, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = $.that;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(6)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).hide;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var set   = __webpack_require__(6).set
	  , $at   = __webpack_require__(21)(true)
	  , ITER  = __webpack_require__(11).safe('iter')
	  , $iter = __webpack_require__(12)
	  , step  = $iter.step;
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(17)(String, 'String', function(iterated){
	  set(this, ITER, {o: String(iterated), i: 0});
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , index = iter.i
	    , point;
	  if(index >= O.length)return step(1);
	  point = $at(O, index);
	  iter.i += point.length;
	  return step(0, point);
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var $ = __webpack_require__(6);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String($.assertDefined(that))
	      , i = $.toInteger(pos)
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(6).core
	  , $iter = __webpack_require__(12);
	core.isIterable  = $iter.is;
	core.getIterator = $iter.get;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    arrays: __webpack_require__(26),
	    regexps: __webpack_require__(47),
	    strings: __webpack_require__(53)
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    contains: __webpack_require__(28),
	    every: __webpack_require__(30),
	    filter: __webpack_require__(31),
	    first: __webpack_require__(33),
	    flatMap: __webpack_require__(32),
	    groupBy: __webpack_require__(34),
	    grouped: __webpack_require__(35),
	    groupedRight: __webpack_require__(36),
	    include: __webpack_require__(37),
	    indexOf: __webpack_require__(29),
	    isArray: __webpack_require__(27),
	    joinPaths: __webpack_require__(38),
	    last: __webpack_require__(39),
	    map: __webpack_require__(40),
	    max: __webpack_require__(41),
	    min: __webpack_require__(43),
	    range: __webpack_require__(44),
	    reduce: __webpack_require__(42),
	    remove: __webpack_require__(45),
	    some: __webpack_require__(46)
	};

/***/ },
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(29);
	
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(32);
	
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(27);
	
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(29);
	
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(42);
	
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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(42);
	
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    escape: __webpack_require__(48)
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _RegExp$escape = __webpack_require__(49)['default'];
	
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	module.exports = __webpack_require__(6).core.RegExp.escape;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $def = __webpack_require__(18);
	$def($def.S, 'RegExp', {
	  escape: __webpack_require__(52)(/[\\^$*+?.()|[\]{}]/g, '\\$&', true)
	});


/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function(regExp, replace, isStatic){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(isStatic ? it : this).replace(regExp, replacer);
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    'antStylePathToRegex': __webpack_require__(54),
	    'br2nl': __webpack_require__(55),
	    'compareTo': __webpack_require__(57),
	    'contains': __webpack_require__(58),
	    'cutstring': __webpack_require__(59),
	    'endsWith': __webpack_require__(61),
	    'format': __webpack_require__(62),
	    'formatVariables': __webpack_require__(63),
	    'getLength': __webpack_require__(60),
	    'grouped': __webpack_require__(64),
	    'groupedRight': __webpack_require__(65),
	    'leftPad': __webpack_require__(66),
	    'nl2br': __webpack_require__(68),
	    'quote': __webpack_require__(70),
	    'regex': __webpack_require__(71),
	    'repeat': __webpack_require__(67),
	    'rightPad': __webpack_require__(72),
	    'startsWith': __webpack_require__(73),
	    'unquote': __webpack_require__(74),
	    'xmlEscape': __webpack_require__(69),
	    'xmlUnescape': __webpack_require__(56)
	};

/***/ },
/* 54 */
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(56);
	
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
/* 56 */
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
/* 57 */
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
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(28);
	
	__webpack_require__(60);
	
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(28);
	
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
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(27);
	
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
/* 63 */
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
/* 64 */
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
/* 65 */
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(67);
	
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
/* 67 */
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(69);
	
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
/* 69 */
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
/* 70 */
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
/* 71 */
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(67);
	
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
/* 73 */
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
/* 74 */
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = __webpack_require__(77)['default'];
	
	var _getIterator = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
	__webpack_require__(1);
	
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
	        for (var _iterator = _getIterator(pairs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getIterator = __webpack_require__(2)["default"];
	
	var _isIterable = __webpack_require__(78)["default"];
	
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(20);
	__webpack_require__(22);
	module.exports = __webpack_require__(6).core.isIterable;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(document) {'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getIterator = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
	
	exports['default'] = _jquery2['default'].reindexArrayParams;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
	exports['default'] = _jquery2['default'].fn.reverse = Array.prototype.reverse;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(document) {'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _jquery = __webpack_require__(24);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(25);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NjZlYmU3YzdiMzUzNzZkY2I5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iai5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZ3LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudW5zY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pdGVyLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy8uL3NyYy9wcm90by9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvaW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2V2ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZmxhdE1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2ZpcnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL2dyb3VwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9ncm91cGVkUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL2FycmF5cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvam9pblBhdGhzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL21heC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vYXJyYXlzL3JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9hcnJheXMvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vcmVnZXhwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vcmVnZXhwcy9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcmVnZXhwL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vcmVnZXhwL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2FudFN0eWxlUGF0aFRvUmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvYnIybmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MveG1sVW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvY29tcGFyZVRvLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2N1dHN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9nZXRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvZW5kc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2Zvcm1hdFZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9ncm91cGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL2dyb3VwZWRSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9sZWZ0UGFkLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm90by9zdHJpbmdzL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy9ubDJici5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy94bWxFc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3MvcmlnaHRQYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvL3N0cmluZ3Mvc3RhcnRzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG8vc3RyaW5ncy91bnF1b3RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkLXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmluZEJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmluZEJ5TmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyb3VwQnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21heFpJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV4dFRpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlaW5kZXhBcnJheVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VyaWFsaXplT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdXBwb3J0c0lucHV0VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMveG1sVG9TdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7bUNDdENtQixFQUFROzs7O3FCQUNwQixFQUFlOztxQkFDZixFQUFlOztxQkFDZixFQUFjOztxQkFDZCxFQUFlOztxQkFDZixFQUFXOztxQkFDWCxFQUFhOztxQkFDYixFQUFZOztxQkFDWixDQUFPOztxQkFDUCxFQUFXOztxQkFDWCxFQUFzQjs7cUJBQ3RCLEVBQVc7O3FCQUNYLEVBQW1COztxQkFDbkIsRUFBUTs7cUJBQ1IsRUFBUzs7cUJBQ1QsRUFBcUI7O3FCQUNyQixFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQ2hCUixFQUFROzs7O3FCQUNmLEVBQWU7O3FCQUNmLEVBQVM7O0FBRWhCLHFCQUFFLEdBQUcsR0FBRzs7Ozs7Ozs7QUFRSixRQUFHLEVBQUUsYUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRTtBQUNsQyxhQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDYixvQkFBTyxZQUFZLENBQUM7VUFDdkI7QUFDRCxhQUFJLENBQUMsR0FBRyxFQUFFO0FBQ04sb0JBQU8sR0FBRyxDQUFDO1VBQ2Q7QUFDRCxhQUFJLFlBQVksR0FBRyxvQkFBRSxLQUFLLENBQUMsR0FBRyxFQUFF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QUFDLEdBQUcsQ0FBQztNQUN0QjtFQUNKLENBQUM7O3NCQUVhLG9CQUFFLFdBQVciLCJmaWxlIjoianF1ZXJ5LWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpRdWVyeVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wialF1ZXJ5XCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjRfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNjY2ZWJlN2M3YjM1Mzc2ZGNiOWRcbiAqKi8iLCJpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcbmltcG9ydCAnLi9kZXNlcmlhbGl6ZSdcbmltcG9ydCAnLi9maW5kQnlOYW1lJ1xuaW1wb3J0ICcuL2ZpbmRCeU5hbWVzJ1xuaW1wb3J0ICcuL2dyb3VwQnknXG5pbXBvcnQgJy4vbWF4WkluZGV4J1xuaW1wb3J0ICcuL25leHRUaWNrJ1xuaW1wb3J0ICcuL29iaidcbmltcG9ydCAnLi9yZWNsb25lJ1xuaW1wb3J0ICcuL3JlaW5kZXhBcnJheVBhcmFtcydcbmltcG9ydCAnLi9yZXZlcnNlJ1xuaW1wb3J0ICcuL3NlcmlhbGl6ZU9iamVjdCdcbmltcG9ydCAnLi9zb21lJ1xuaW1wb3J0ICcuL3NwbGl0J1xuaW1wb3J0ICcuL3N1cHBvcnRzSW5wdXRUeXBlJ1xuaW1wb3J0ICcuL3htbFRvU3RyaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCBqUXVlcnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcbmltcG9ydCAnLi9zcGxpdCdcblxuJC5vYmogPSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV1cbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24ob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtleUZyYWdtZW50cyA9ICQuc3BsaXQoa2V5LCAnLicsICcvJyk7XG4gICAgICAgIGZvciAobGV0IGtleUZyYWdtZW50IG9mIGtleUZyYWdtZW50cykge1xuICAgICAgICAgICAgaWYgKChvYmogPSBvYmpba2V5RnJhZ21lbnRdKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJC5pc0FycmF5KGRlZmF1bHRWYWx1ZSkgJiYgISQuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICBvYmogPSAkLm1ha2VBcnJheShvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FwcGVuZEFycmF5XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZnVsbGtleVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbihhcHBlbmRBcnJheSwgb2JqLCBmdWxsa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgYXJncyA9ICQubWFrZUFycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgIGFwcGVuZEFycmF5ID0gdHlwZW9mIGFyZ3MuZmlyc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5zaGlmdCgpIDogZmFsc2U7XG4gICAgICAgIG9iaiA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdvYmplY3QnIHx8ICQuaXNGdW5jdGlvbihhcmdzLmZpcnN0KCkpID8gYXJncy5zaGlmdCgpIDoge307XG4gICAgICAgIGlmICh0eXBlb2YgYXJncy5maXJzdCgpICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBrZXkgbXVzdCBiZSBzdHJpbmcgdHlwZSA6IFwiICsgYXJncy5maXJzdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBmdWxsa2V5ID0gYXJncy5zaGlmdCgpO1xuICAgICAgICB2YWx1ZSA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgbGV0IGtleXMgPSAkLm1hcCgkLnNwbGl0KGZ1bGxrZXksICcuJywgJy8nKSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBpZiAoL14oW15cXFtdKyk/XFxbKFteXFxdXSspP1xcXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluS2V5cyA9IFtrZXkubWF0Y2goL14oW15cXFtdKyk/LylbMV1dO1xuICAgICAgICAgICAgICAgIGxldCBpbkJyYWNrZXQgPSAvXFxbKFteXFxdXSspP1xcXS9nO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0TWF0Y2hlcztcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dE1hdGNoZXMgPSBpbkJyYWNrZXQuZXhlYyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluS2V5cy5wdXNoKG5leHRNYXRjaGVzWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluS2V5cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGlzTnVsbChvLCBrZXkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEoa2V5IGluIG8gJiYgKG9ba2V5XSAhPSBudWxsKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChpZ25vcmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGN1cnJPYmogPSBvYmo7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhcHBlbmRBcnJheSB8fCBpc051bGwoY3Vyck9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQuaXNBcnJheShjdXJyT2JqW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW2tleV0gPSBbY3Vyck9ialtrZXldLCB2YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc051bGwoY3Vyck9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5c1tpICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAga2V5c1tpICsgMV0gPSAnMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJPYmpba2V5XSA9IC9eXFxkKyQvLnRlc3Qoa2V5c1tpICsgMV0pID8gW10gOiB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGtleXNbaSArIDFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGtleXNbaSArIDFdID0gJC5pc0FycmF5KGN1cnJPYmpba2V5XSkgPyBjdXJyT2JqW2tleV0ubGVuZ3RoICsgJycgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJPYmogPSBjdXJyT2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZW5lcmFsaXplOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChrZXkuY29udGFpbnMoJy4nKSB8fCAvXFxbKFxcdyspP1xcXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICQub2JqLnNldCh0cnVlLCByZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXBdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXBwZW5kQXJyYXldXG4gICAgICogQHBhcmFtIHsqfE9iamVjdH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHsqfC4uLk9iamVjdH0gc291cmNlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dGVuZElmVW5kZWZpbmVkXVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uKGRlZXAsIGFwcGVuZEFycmF5LCB0YXJnZXQsIHNvdXJjZXMsIGV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgZGVlcCA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBhcHBlbmRBcnJheSA9IHR5cGVvZiBhcmdzLmZpcnN0KCkgPT09ICdib29sZWFuJyA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xuICAgICAgICBleHRlbmRJZlVuZGVmaW5lZCA9IHR5cGVvZiBhcmdzLmxhc3QoKSA9PT0gJ2Jvb2xlYW4nID8gYXJncy5wb3AoKSA6IGZhbHNlO1xuICAgICAgICB0YXJnZXQgPSBhcmdzLmxlbmd0aCA9PT0gMSA/IHt9IDogYXJncy5zaGlmdCgpIHx8IHt9O1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgISQuaXNGdW5jdGlvbih0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2VzID0gYXJncztcbiAgICAgICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmMgPSB0YXJnZXRbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weSA9IHNvdXJjZVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ID09PSB0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHlJc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBjb3B5ICYmICgkLmlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gJC5pc0FycmF5KGNvcHkpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvcHlJc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmNJc1BsYWluT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMgPT09IHVuZGVmaW5lZCB8fCAoc3JjSXNQbGFpbk9iamVjdCA9ICQuaXNQbGFpbk9iamVjdChzcmMpKSB8fCAhZXh0ZW5kSWZVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQub2JqLmV4dGVuZChkZWVwLCBhcHBlbmRBcnJheSwgKHNyY0lzUGxhaW5PYmplY3QgPyBzcmMgOiB7fSksIGNvcHksIGV4dGVuZElmVW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9ICQubWVyZ2UoKGFwcGVuZEFycmF5ICYmICQuaXNBcnJheShzcmMpID8gc3JjIDogW10pLCAkLm9iai5leHRlbmQoZGVlcCwgW10sIGNvcHkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvcHkgIT09IHVuZGVmaW5lZCAmJiAoc3JjID09PSB1bmRlZmluZWQgfHwgIWV4dGVuZElmVW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBuZXcgRGF0ZShjb3B5LmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3B5IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weS5nbG9iYWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5Lmlnbm9yZUNhc2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MgKz0gJ2knO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5Lm11bHRpbGluZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFncyArPSAnbSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkuc3RpY2t5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzICs9ICd5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBuZXcgUmVnRXhwKGNvcHkuc291cmNlLCBmbGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gY29weTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBrZXlWYWx1ZVBhaXJzXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uKC4uLmtleVZhbHVlUGFpcnMpIHtcbiAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleVZhbHVlUGFpcnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIG9ialtrZXlWYWx1ZVBhaXJzW2ldXSA9IGtleVZhbHVlUGFpcnNbaSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZW1wdHk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbn07XG5cbmZvciAobGV0IGtleSBpbiAkLm9iaikge1xuICAgIGxldCBzaG9ydEtleSA9IGtleSArICdPYmplY3QnO1xuICAgIGlmICghKHNob3J0S2V5IGluICQpKSB7XG4gICAgICAgIGlmICgkLm9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAkW3Nob3J0S2V5XSA9ICQub2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICQub2JqO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL29iai5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pdGVyLWhlbHBlcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy8kJykuY29yZS5nZXRJdGVyYXRvcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIEl0ZXJhdG9ycyAgID0gcmVxdWlyZSgnLi8kLml0ZXInKS5JdGVyYXRvcnNcbiAgLCBJVEVSQVRPUiAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5XG4gICwgTkwgICAgICAgICAgPSAkLmcuTm9kZUxpc3RcbiAgLCBIVEMgICAgICAgICA9ICQuZy5IVE1MQ29sbGVjdGlvblxuICAsIE5MUHJvdG8gICAgID0gTkwgJiYgTkwucHJvdG90eXBlXG4gICwgSFRDUHJvdG8gICAgPSBIVEMgJiYgSFRDLnByb3RvdHlwZTtcbmlmKCQuRlcpe1xuICBpZihOTCAmJiAhKElURVJBVE9SIGluIE5MUHJvdG8pKSQuaGlkZShOTFByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICBpZihIVEMgJiYgIShJVEVSQVRPUiBpbiBIVENQcm90bykpJC5oaWRlKEhUQ1Byb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xufVxuSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkhUTUxDb2xsZWN0aW9uID0gQXJyYXlWYWx1ZXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgc2V0VW5zY29wZSA9IHJlcXVpcmUoJy4vJC51bnNjb3BlJylcbiAgLCBJVEVSICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ2l0ZXInKVxuICAsICRpdGVyICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcicpXG4gICwgc3RlcCAgICAgICA9ICRpdGVyLnN0ZXBcbiAgLCBJdGVyYXRvcnMgID0gJGl0ZXIuSXRlcmF0b3JzO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAkLnNldCh0aGlzLCBJVEVSLCB7bzogJC50b09iamVjdChpdGVyYXRlZCksIGk6IDAsIGs6IGtpbmR9KTtcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxuICAgICwgTyAgICAgPSBpdGVyLm9cbiAgICAsIGtpbmQgID0gaXRlci5rXG4gICAgLCBpbmRleCA9IGl0ZXIuaSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgaXRlci5vID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5zZXRVbnNjb3BlKCdrZXlzJyk7XG5zZXRVbnNjb3BlKCd2YWx1ZXMnKTtcbnNldFVuc2NvcGUoJ2VudHJpZXMnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcbiAgLCBjb3JlICAgPSB7fVxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxuICAsIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXG4gICwgbWF4ICAgPSBNYXRoLm1heFxuICAsIG1pbiAgID0gTWF0aC5taW47XG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cbnZhciBERVNDID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gMjsgfX0pLmEgPT0gMjtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xudmFyIGhpZGUgPSBjcmVhdGVEZWZpbmVyKDEpO1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG5mdW5jdGlvbiB0b0ludGVnZXIoaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn1cbmZ1bmN0aW9uIGRlc2MoYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufVxuZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWZpbmVyKGJpdG1hcCl7XG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBkZXNjKGJpdG1hcCwgdmFsdWUpKTtcbiAgfSA6IHNpbXBsZVNldDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoaXQpe1xuICByZXR1cm4gaXQgIT09IG51bGwgJiYgKHR5cGVvZiBpdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYXNzZXJ0RGVmaW5lZChpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn1cblxudmFyICQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mdycpKHtcbiAgZzogZ2xvYmFsLFxuICBjb3JlOiBjb3JlLFxuICBodG1sOiBnbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb3JlLWpzLWlzb2JqZWN0XG4gIGlzT2JqZWN0OiAgIGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICB0aGF0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyA3LjEuNCBUb0ludGVnZXJcbiAgdG9JbnRlZ2VyOiB0b0ludGVnZXIsXG4gIC8vIDcuMS4xNSBUb0xlbmd0aFxuICB0b0xlbmd0aDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG4gIH0sXG4gIHRvSW5kZXg6IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICAgIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihpdCwga2V5KXtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbiAgfSxcbiAgY3JlYXRlOiAgICAgT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBERVNDOiAgICAgICBERVNDLFxuICBkZXNjOiAgICAgICBkZXNjLFxuICBnZXREZXNjOiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICBkZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgIE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgYXNzZXJ0RGVmaW5lZDogYXNzZXJ0RGVmaW5lZCxcbiAgLy8gRHVtbXksIGZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBpbiBlczUgbW9kdWxlXG4gIEVTNU9iamVjdDogT2JqZWN0LFxuICB0b09iamVjdDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiAkLkVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XG4gIH0sXG4gIGhpZGU6IGhpZGUsXG4gIGRlZjogY3JlYXRlRGVmaW5lcigwKSxcbiAgc2V0OiBnbG9iYWwuU3ltYm9sID8gc2ltcGxlU2V0IDogaGlkZSxcbiAgZWFjaDogW10uZm9yRWFjaFxufSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuaWYodHlwZW9mIF9fZSAhPSAndW5kZWZpbmVkJylfX2UgPSBjb3JlO1xuaWYodHlwZW9mIF9fZyAhPSAndW5kZWZpbmVkJylfX2cgPSBnbG9iYWw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vd2luZG93JykuZG9jdW1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2RvY3VtZW50LmpzXG4gKiovIiwiaWYgKCFnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkuZXh0ZW5kcyByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy93aW5kb3cuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCQpe1xuICAkLkZXICAgPSBmYWxzZTtcbiAgJC5wYXRoID0gJC5jb3JlO1xuICByZXR1cm4gJDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZncuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudW5zY29wZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc2lkID0gMDtcbmZ1bmN0aW9uIHVpZChrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytzaWQgKyBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygzNikpO1xufVxudWlkLnNhZmUgPSByZXF1aXJlKCcuLyQnKS5nLlN5bWJvbCB8fCB1aWQ7XG5tb2R1bGUuZXhwb3J0cyA9IHVpZDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjb2YgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIGNsYXNzb2YgICAgICAgICAgID0gY29mLmNsYXNzb2ZcbiAgLCBhc3NlcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKVxuICAsIGFzc2VydE9iamVjdCAgICAgID0gYXNzZXJ0Lm9ialxuICAsIFNZTUJPTF9JVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgRkZfSVRFUkFUT1IgICAgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBJdGVyYXRvcnMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnaXRlcmF0b3JzJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnNldEl0ZXJhdG9yKEl0ZXJhdG9yUHJvdG90eXBlLCAkLnRoYXQpO1xuZnVuY3Rpb24gc2V0SXRlcmF0b3IoTywgdmFsdWUpe1xuICAkLmhpZGUoTywgU1lNQk9MX0lURVJBVE9SLCB2YWx1ZSk7XG4gIC8vIEFkZCBpdGVyYXRvciBmb3IgRkYgaXRlcmF0b3IgcHJvdG9jb2xcbiAgaWYoRkZfSVRFUkFUT1IgaW4gW10pJC5oaWRlKE8sIEZGX0lURVJBVE9SLCB2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIEJVR0dZOiAna2V5cycgaW4gW10gJiYgISgnbmV4dCcgaW4gW10ua2V5cygpKSxcbiAgSXRlcmF0b3JzOiBJdGVyYXRvcnMsXG4gIHN0ZXA6IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbiAgfSxcbiAgaXM6IGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgTyAgICAgID0gT2JqZWN0KGl0KVxuICAgICAgLCBTeW1ib2wgPSAkLmcuU3ltYm9sO1xuICAgIHJldHVybiAoU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCBGRl9JVEVSQVRPUikgaW4gT1xuICAgICAgfHwgU1lNQk9MX0lURVJBVE9SIGluIE9cbiAgICAgIHx8ICQuaGFzKEl0ZXJhdG9ycywgY2xhc3NvZihPKSk7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24oaXQpe1xuICAgIHZhciBTeW1ib2wgPSAkLmcuU3ltYm9sXG4gICAgICAsIGdldEl0ZXI7XG4gICAgaWYoaXQgIT0gdW5kZWZpbmVkKXtcbiAgICAgIGdldEl0ZXIgPSBpdFtTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IEZGX0lURVJBVE9SXVxuICAgICAgICB8fCBpdFtTWU1CT0xfSVRFUkFUT1JdXG4gICAgICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG4gICAgfVxuICAgIGFzc2VydCgkLmlzRnVuY3Rpb24oZ2V0SXRlciksIGl0LCAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgICByZXR1cm4gYXNzZXJ0T2JqZWN0KGdldEl0ZXIuY2FsbChpdCkpO1xuICB9LFxuICBzZXQ6IHNldEl0ZXJhdG9yLFxuICBjcmVhdGU6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0LCBwcm90byl7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUocHJvdG8gfHwgSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiAkLmRlc2MoMSwgbmV4dCl9KTtcbiAgICBjb2Yuc2V0KENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBUQUcgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAsIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5mdW5jdGlvbiBjb2YoaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufVxuY29mLmNsYXNzb2YgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBUO1xuICByZXR1cm4gaXQgPT0gdW5kZWZpbmVkID8gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogJ051bGwnXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVCA6IGNvZihPKTtcbn07XG5jb2Yuc2V0ID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICEkLmhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkkLmhpZGUoaXQsIFRBRywgdGFnKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGNvZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJCcpLmdcbiAgLCBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgZ2xvYmFsLlN5bWJvbCAmJiBnbG9iYWwuU3ltYm9sW25hbWVdIHx8IHJlcXVpcmUoJy4vJC51aWQnKS5zYWZlKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcclxuICAsIHN0b3JlICA9ICQuZ1tTSEFSRURdIHx8ICgkLmdbU0hBUkVEXSA9IHt9KTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xyXG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbXNnMSwgbXNnMil7XG4gIGlmKCFjb25kaXRpb24pdGhyb3cgVHlwZUVycm9yKG1zZzIgPyBtc2cxICsgbXNnMiA6IG1zZzEpO1xufVxuYXNzZXJ0LmRlZiA9ICQuYXNzZXJ0RGVmaW5lZDtcbmFzc2VydC5mbiA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoISQuaXNGdW5jdGlvbihpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbmFzc2VydC5vYmogPSBmdW5jdGlvbihpdCl7XG4gIGlmKCEkLmlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5hc3NlcnQuaW5zdCA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgVHlwZUVycm9yKG5hbWUgKyBcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIik7XG4gIHJldHVybiBpdDtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGFzc2VydDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hc3NlcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRkZWYgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsICRyZWRlZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZicpXG4gICwgJCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjb2YgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCAkaXRlciAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcicpXG4gICwgU1lNQk9MX0lURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgRkZfSVRFUkFUT1IgICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgID0gJ3ZhbHVlcydcbiAgLCBJdGVyYXRvcnMgICAgICAgPSAkaXRlci5JdGVyYXRvcnM7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFKXtcbiAgJGl0ZXIuY3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgZnVuY3Rpb24gY3JlYXRlTWV0aG9kKGtpbmQpe1xuICAgIGZ1bmN0aW9uICQkKHRoYXQpe1xuICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGF0LCBraW5kKTtcbiAgICB9XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gJCQodGhpcyk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJCQodGhpcyk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gJCQodGhpcyk7IH07XG4gIH1cbiAgdmFyIFRBRyAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBwcm90byAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCBfbmF0aXZlICA9IHByb3RvW1NZTUJPTF9JVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsIF9kZWZhdWx0ID0gX25hdGl2ZSB8fCBjcmVhdGVNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZihfbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSAkLmdldFByb3RvKF9kZWZhdWx0LmNhbGwobmV3IEJhc2UpKTtcbiAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgY29mLnNldChJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZigkLkZXICYmICQuaGFzKHByb3RvLCBGRl9JVEVSQVRPUikpJGl0ZXIuc2V0KEl0ZXJhdG9yUHJvdG90eXBlLCAkLnRoYXQpO1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigkLkZXIHx8IEZPUkNFKSRpdGVyLnNldChwcm90bywgX2RlZmF1bHQpO1xuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IF9kZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSAkLnRoYXQ7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgICAgICAgICA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKEtFWVMpLFxuICAgICAgdmFsdWVzOiAgREVGQVVMVCA9PSBWQUxVRVMgPyBfZGVmYXVsdCA6IGNyZWF0ZU1ldGhvZChWQUxVRVMpLFxuICAgICAgZW50cmllczogREVGQVVMVCAhPSBWQUxVRVMgPyBfZGVmYXVsdCA6IGNyZWF0ZU1ldGhvZCgnZW50cmllcycpXG4gICAgfTtcbiAgICBpZihGT1JDRSlmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKSRyZWRlZihwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZGVmKCRkZWYuUCArICRkZWYuRiAqICRpdGVyLkJVR0dZLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICA9ICQuZ1xuICAsIGNvcmUgICAgICAgPSAkLmNvcmVcbiAgLCBpc0Z1bmN0aW9uID0gJC5pc0Z1bmN0aW9uO1xuZnVuY3Rpb24gY3R4KGZuLCB0aGF0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4vLyB0eXBlIGJpdG1hcFxuJGRlZi5GID0gMTsgIC8vIGZvcmNlZFxuJGRlZi5HID0gMjsgIC8vIGdsb2JhbFxuJGRlZi5TID0gNDsgIC8vIHN0YXRpY1xuJGRlZi5QID0gODsgIC8vIHByb3RvXG4kZGVmLkIgPSAxNjsgLy8gYmluZFxuJGRlZi5XID0gMzI7IC8vIHdyYXBcbmZ1bmN0aW9uICRkZWYodHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXG4gICAgLCBpc1Byb3RvICA9IHR5cGUgJiAkZGVmLlBcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSkucHJvdG90eXBlXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgaWYoaXNHbG9iYWwgJiYgIWlzRnVuY3Rpb24odGFyZ2V0W2tleV0pKWV4cCA9IHNvdXJjZVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5CICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgZWxzZSBpZih0eXBlICYgJGRlZi5XICYmIHRhcmdldFtrZXldID09IG91dCkhZnVuY3Rpb24oQyl7XG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIGV4cC5wcm90b3R5cGUgPSBDLnByb3RvdHlwZTtcbiAgICB9KG91dCk7XG4gICAgZWxzZSBleHAgPSBpc1Byb3RvICYmIGlzRnVuY3Rpb24ob3V0KSA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydFxuICAgIGV4cG9ydHNba2V5XSA9IGV4cDtcbiAgICBpZihpc1Byb3RvKShleHBvcnRzLnByb3RvdHlwZSB8fCAoZXhwb3J0cy5wcm90b3R5cGUgPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gJGRlZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQnKS5oaWRlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzZXQgICA9IHJlcXVpcmUoJy4vJCcpLnNldFxuICAsICRhdCAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpXG4gICwgSVRFUiAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXG4gICwgJGl0ZXIgPSByZXF1aXJlKCcuLyQuaXRlcicpXG4gICwgc3RlcCAgPSAkaXRlci5zdGVwO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHNldCh0aGlzLCBJVEVSLCB7bzogU3RyaW5nKGl0ZXJhdGVkKSwgaTogMH0pO1xuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxuICAgICwgTyAgICAgPSBpdGVyLm9cbiAgICAsIGluZGV4ID0gaXRlci5pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHN0ZXAoMSk7XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgaXRlci5pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHN0ZXAoMCwgcG9pbnQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKCQuYXNzZXJ0RGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9ICQudG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGxcbiAgICAgIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4vJCcpLmNvcmVcbiAgLCAkaXRlciA9IHJlcXVpcmUoJy4vJC5pdGVyJyk7XG5jb3JlLmlzSXRlcmFibGUgID0gJGl0ZXIuaXM7XG5jb3JlLmdldEl0ZXJhdG9yID0gJGl0ZXIuZ2V0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLml0ZXItaGVscGVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI0X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhcnJheXM6IHJlcXVpcmUoJy4vYXJyYXlzJyksXG4gICAgcmVnZXhwczogcmVxdWlyZSgnLi9yZWdleHBzJyksXG4gICAgc3RyaW5nczogcmVxdWlyZSgnLi9zdHJpbmdzJylcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb250YWluczogcmVxdWlyZSgnLi9hcnJheXMvY29udGFpbnMnKSxcbiAgICBldmVyeTogcmVxdWlyZSgnLi9hcnJheXMvZXZlcnknKSxcbiAgICBmaWx0ZXI6IHJlcXVpcmUoJy4vYXJyYXlzL2ZpbHRlcicpLFxuICAgIGZpcnN0OiByZXF1aXJlKCcuL2FycmF5cy9maXJzdCcpLFxuICAgIGZsYXRNYXA6IHJlcXVpcmUoJy4vYXJyYXlzL2ZsYXRNYXAnKSxcbiAgICBncm91cEJ5OiByZXF1aXJlKCcuL2FycmF5cy9ncm91cEJ5JyksXG4gICAgZ3JvdXBlZDogcmVxdWlyZSgnLi9hcnJheXMvZ3JvdXBlZCcpLFxuICAgIGdyb3VwZWRSaWdodDogcmVxdWlyZSgnLi9hcnJheXMvZ3JvdXBlZFJpZ2h0JyksXG4gICAgaW5jbHVkZTogcmVxdWlyZSgnLi9hcnJheXMvaW5jbHVkZScpLFxuICAgIGluZGV4T2Y6IHJlcXVpcmUoJy4vYXJyYXlzL2luZGV4T2YnKSxcbiAgICBpc0FycmF5OiByZXF1aXJlKCcuL2FycmF5cy9pc0FycmF5JyksXG4gICAgam9pblBhdGhzOiByZXF1aXJlKCcuL2FycmF5cy9qb2luUGF0aHMnKSxcbiAgICBsYXN0OiByZXF1aXJlKCcuL2FycmF5cy9sYXN0JyksXG4gICAgbWFwOiByZXF1aXJlKCcuL2FycmF5cy9tYXAnKSxcbiAgICBtYXg6IHJlcXVpcmUoJy4vYXJyYXlzL21heCcpLFxuICAgIG1pbjogcmVxdWlyZSgnLi9hcnJheXMvbWluJyksXG4gICAgcmFuZ2U6IHJlcXVpcmUoJy4vYXJyYXlzL3JhbmdlJyksXG4gICAgcmVkdWNlOiByZXF1aXJlKCcuL2FycmF5cy9yZWR1Y2UnKSxcbiAgICByZW1vdmU6IHJlcXVpcmUoJy4vYXJyYXlzL3JlbW92ZScpLFxuICAgIHNvbWU6IHJlcXVpcmUoJy4vYXJyYXlzL3NvbWUnKVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy5qc1xuICoqLyIsImlmICghQXJyYXkuaXNBcnJheSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gb2JqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkuaXNBcnJheTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvaXNBcnJheS5qc1xuICoqLyIsImltcG9ydCAnLi9pbmRleE9mJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5jb250YWlucykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGEpID49IDA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuY29udGFpbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvY29udGFpbnMuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9pbmRleE9mLmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUuZXZlcnkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuZXZlcnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ldmVyeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9ldmVyeS5qc1xuICoqLyIsImltcG9ydCAnLi9mbGF0TWFwJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maWx0ZXIpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYXRNYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgYSwgaSwgdGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9maWx0ZXIuanNcbiAqKi8iLCJpbXBvcnQgJy4vaXNBcnJheSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmxhdE1hcCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJuIEFycmF5XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmZsYXRNYXAgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmZsYXRNYXA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvZmxhdE1hcC5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmZpcnN0KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5maXJzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9maXJzdC5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmdyb3VwQnkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7e319XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoISQuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjYWxsYmFjayArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW2ldO1xuICAgICAgICAgICAgbGV0IGtleSA9IGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCB0aGlzLCB2YWx1ZSwgaSwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5ncm91cEJ5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2dyb3VwQnkuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5ncm91cGVkKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuZ3JvdXBlZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9ncm91cGVkLmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxBcnJheT59XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoOyBpID4gMDsgaSAtPSBzaXplKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5zbGljZShNYXRoLm1heCgwLCBpIC0gc2l6ZSksIGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cy5yZXZlcnNlKCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmdyb3VwZWRSaWdodDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9ncm91cGVkUmlnaHQuanNcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXhPZidcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZSkge1xuICAgIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBsZXQgaSA9IHRoaXMuaW5kZXhPZihhKTtcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgdGhpc1tpXSA9IGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goYSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLmluY2x1ZGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvaW5jbHVkZS5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmpvaW5QYXRocykge1xuICAgIEFycmF5LnByb3RvdHlwZS5qb2luUGF0aHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gJy8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRoaXNbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUuam9pblBhdGhzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2pvaW5QYXRocy5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLmxhc3QpIHtcbiAgICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5sYXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL2xhc3QuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5tYXApIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLm1hcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL2FycmF5cy9tYXAuanNcbiAqKi8iLCJpbXBvcnQgJy4vcmVkdWNlJ1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5tYXgpIHtcbiAgICBBcnJheS5wcm90b3R5cGUubWF4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZSgoYSwgYikgPT4gKGEgPiBiKSA/IGEgOiBiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5tYXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvbWF4LmpzXG4gKiovIiwiaWYgKCFBcnJheS5wcm90b3R5cGUucmVkdWNlKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghKHRoaXMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgcmVzdWx0LCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5LnByb3RvdHlwZS5yZWR1Y2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvcmVkdWNlLmpzXG4gKiovIiwiaW1wb3J0ICcuL3JlZHVjZSdcblxuaWYgKCFBcnJheS5wcm90b3R5cGUubWluKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoKGEsIGIpID0+IChhIDwgYikgPyBhIDogYik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUubWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL21pbi5qc1xuICoqLyIsImlmICghQXJyYXkucmFuZ2UpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGZyb21cbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHRvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgQXJyYXkucmFuZ2UgPSBmdW5jdGlvbihmcm9tLCB0bywgc3RlcCkge1xuICAgICAgICBsZXQgcmFuZ2UgPSBbXTtcbiAgICAgICAgbGV0IGlzTnVtYmVyID0gdHlwZW9mIGZyb20gPT09ICdudW1iZXInICYmIHR5cGVvZiB0byA9PT0gJ251bWJlcic7XG4gICAgICAgIGxldCBiZWdpbiA9IGlzTnVtYmVyID8gZnJvbSA6IGZyb20udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICBsZXQgZW5kID0gaXNOdW1iZXIgPyB0byA6IHRvLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGJlZ2luOyBzdGVwID4gMCA/IGkgPD0gZW5kIDogaSA+PSBlbmQ7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgcmFuZ2UucHVzaChpc051bWJlciA/IGkgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucmFuZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvcmFuZ2UuanNcbiAqKi8iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5yZW1vdmUpIHtcbiAgICBBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheS5wcm90b3R5cGUucmVtb3ZlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vYXJyYXlzL3JlbW92ZS5qc1xuICoqLyIsImlmICghQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBBcnJheS5wcm90b3R5cGUuc29tZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXNbaV0sIGksIHRoaXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXkucHJvdG90eXBlLnNvbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9hcnJheXMvc29tZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGVzY2FwZTogcmVxdWlyZSgnLi9yZWdleHBzL2VzY2FwZScpXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vcmVnZXhwcy5qc1xuICoqLyIsImlmICghUmVnRXhwLmVzY2FwZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBSZWdFeHAuZXNjYXBlID0gZnVuY3Rpb24odGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ0V4cC5lc2NhcGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9yZWdleHBzL2VzY2FwZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3JlZ2V4cC9lc2NhcGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKS5jb3JlLlJlZ0V4cC5lc2NhcGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmdyL1JleEV4cC5lc2NhcGVcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xuJGRlZigkZGVmLlMsICdSZWdFeHAnLCB7XG4gIGVzY2FwZTogcmVxdWlyZSgnLi8kLnJlcGxhY2VyJykoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJywgdHJ1ZSlcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5yZWdleHAuZXNjYXBlLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVnRXhwLCByZXBsYWNlLCBpc1N0YXRpYyl7XG4gIHZhciByZXBsYWNlciA9IHJlcGxhY2UgPT09IE9iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xuICB9IDogcmVwbGFjZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gU3RyaW5nKGlzU3RhdGljID8gaXQgOiB0aGlzKS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZXBsYWNlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnYW50U3R5bGVQYXRoVG9SZWdleCc6IHJlcXVpcmUoJy4vc3RyaW5ncy9hbnRTdHlsZVBhdGhUb1JlZ2V4JyksXG4gICAgJ2JyMm5sJzogcmVxdWlyZSgnLi9zdHJpbmdzL2JyMm5sJyksXG4gICAgJ2NvbXBhcmVUbyc6IHJlcXVpcmUoJy4vc3RyaW5ncy9jb21wYXJlVG8nKSxcbiAgICAnY29udGFpbnMnOiByZXF1aXJlKCcuL3N0cmluZ3MvY29udGFpbnMnKSxcbiAgICAnY3V0c3RyaW5nJzogcmVxdWlyZSgnLi9zdHJpbmdzL2N1dHN0cmluZycpLFxuICAgICdlbmRzV2l0aCc6IHJlcXVpcmUoJy4vc3RyaW5ncy9lbmRzV2l0aCcpLFxuICAgICdmb3JtYXQnOiByZXF1aXJlKCcuL3N0cmluZ3MvZm9ybWF0JyksXG4gICAgJ2Zvcm1hdFZhcmlhYmxlcyc6IHJlcXVpcmUoJy4vc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMnKSxcbiAgICAnZ2V0TGVuZ3RoJzogcmVxdWlyZSgnLi9zdHJpbmdzL2dldExlbmd0aCcpLFxuICAgICdncm91cGVkJzogcmVxdWlyZSgnLi9zdHJpbmdzL2dyb3VwZWQnKSxcbiAgICAnZ3JvdXBlZFJpZ2h0JzogcmVxdWlyZSgnLi9zdHJpbmdzL2dyb3VwZWRSaWdodCcpLFxuICAgICdsZWZ0UGFkJzogcmVxdWlyZSgnLi9zdHJpbmdzL2xlZnRQYWQnKSxcbiAgICAnbmwyYnInOiByZXF1aXJlKCcuL3N0cmluZ3MvbmwyYnInKSxcbiAgICAncXVvdGUnOiByZXF1aXJlKCcuL3N0cmluZ3MvcXVvdGUnKSxcbiAgICAncmVnZXgnOiByZXF1aXJlKCcuL3N0cmluZ3MvcmVnZXgnKSxcbiAgICAncmVwZWF0JzogcmVxdWlyZSgnLi9zdHJpbmdzL3JlcGVhdCcpLFxuICAgICdyaWdodFBhZCc6IHJlcXVpcmUoJy4vc3RyaW5ncy9yaWdodFBhZCcpLFxuICAgICdzdGFydHNXaXRoJzogcmVxdWlyZSgnLi9zdHJpbmdzL3N0YXJ0c1dpdGgnKSxcbiAgICAndW5xdW90ZSc6IHJlcXVpcmUoJy4vc3RyaW5ncy91bnF1b3RlJyksXG4gICAgJ3htbEVzY2FwZSc6IHJlcXVpcmUoJy4vc3RyaW5ncy94bWxFc2NhcGUnKSxcbiAgICAneG1sVW5lc2NhcGUnOiByZXF1aXJlKCcuL3N0cmluZ3MveG1sVW5lc2NhcGUnKVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHRoZSBhbnQgc3R5bGUgcGF0aCBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtSZWdFeHB9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5hbnRTdHlsZVBhdGhUb1JlZ2V4ID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0aCBtdXN0IGJlIHN0cmluZyB0eXBlIDogXCIgKyBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShwYXRoLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlBhdGggbXVzdCBub3QgYmUgZW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcL3syLH0vZywgJy8nKTtcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvWy1bXFxde30oKSsuLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gcGF0aC5yZXBsYWNlKC8oKFxcLz9cXCpcXCopfChcXC8/XFwqKXwoXFw/KXwoXFwvKSkvZywgZnVuY3Rpb24oJDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDApIHtcbiAgICAgICAgICAgIGNhc2UgJy8qKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcoPzovezEsfS4qKT8nO1xuICAgICAgICAgICAgY2FzZSAnKionOlxuICAgICAgICAgICAgICAgIHJldHVybiAnLionO1xuICAgICAgICAgICAgY2FzZSAnLyonOlxuICAgICAgICAgICAgICAgIHJldHVybiAnKD86L3sxLH1bXi9dKik/JztcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiAnW14vXSonO1xuICAgICAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdbXi9dJztcbiAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnL3sxLH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oJyArIHBhdHRlcm4gKyAnKSQnKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmEpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmEgPSBTdHJpbmcucHJvdG90eXBlLmFudFN0eWxlUGF0aFRvUmVnZXg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuYW50U3R5bGVQYXRoVG9SZWdleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvYW50U3R5bGVQYXRoVG9SZWdleC5qc1xuICoqLyIsImltcG9ydCAnLi94bWxVbmVzY2FwZSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmJyMm5sKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB4bWxVbmVzY2FwZVxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmJyMm5sID0gZnVuY3Rpb24oeG1sVW5lc2NhcGUpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucmVwbGFjZSgvKDxicj58PGJyXFwvPikvZywgJ1xcbicpO1xuICAgICAgICBpZiAoeG1sVW5lc2NhcGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQueG1sVW5lc2NhcGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmJyMm5sO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9icjJubC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZSkge1xuICAgIFN0cmluZy5wcm90b3R5cGUueG1sVW5lc2NhcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKCZsdDt8Jmd0O3wmIzM0O3wmIzM5O3wmYW1wOykvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJyZsdDsnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnPCc7XG4gICAgICAgICAgICBjYXNlICcmZ3Q7JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJz4nO1xuICAgICAgICAgICAgY2FzZSAnJiMzNDsnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnXCInO1xuICAgICAgICAgICAgY2FzZSAnJiMzOTsnOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIidcIjtcbiAgICAgICAgICAgIGNhc2UgJyZhbXA7JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyYnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxVbmVzY2FwZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MveG1sVW5lc2NhcGUuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5jb21wYXJlVG8gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuICAgICAgICBjYXNlICEoc3RyID09IG51bGwpOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIGNhc2UgISh0aGlzID4gc3RyKTpcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICBjYXNlICEodGhpcyA8IHN0cik6XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuY29tcGFyZVRvO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9jb21wYXJlVG8uanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKHN0cikgPiAtMTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9jb250YWlucy5qc1xuICoqLyIsImltcG9ydCAnLi4vYXJyYXlzL2NvbnRhaW5zJ1xuaW1wb3J0ICcuL2dldExlbmd0aCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmN1dHN0cmluZykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxudW1iZXJ9IFtjaGVja2J5dGVdIGNoZWNrIGJ5dGUgbGVuZ3RoIGlmIHRydWUuIChkZWZhdWx0IGlzIGZhbHNlKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhMZW5ndGggdGhlIG1heCBsZW5ndGguXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdWZmaXhdIHRoZSBzdWZmaXguXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuY3V0c3RyaW5nID0gZnVuY3Rpb24oY2hlY2tieXRlLCBtYXhMZW5ndGgsIHN1ZmZpeCkge1xuICAgICAgICBsZXQgYXJnSW5kZXggPSAwO1xuICAgICAgICBsZXQgYXJnQ3VyciA9ICgpID0+IGFyZ3VtZW50c1thcmdJbmRleF07XG4gICAgICAgIGxldCBhcmdTaGlmdCA9ICgpID0+IGFyZ3VtZW50c1thcmdJbmRleCsrXTtcblxuICAgICAgICBjaGVja2J5dGUgPSBbJ2Jvb2xlYW4nLCAnbnVtYmVyJ10uY29udGFpbnModHlwZW9mIGFyZ0N1cnIoKSkgPyBhcmdTaGlmdCgpIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdDdXJyKCkgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGFyZ0N1cnIoKSArIFwiIGlzIG5vdCBhIG51bWJlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBtYXhMZW5ndGggPSBhcmdTaGlmdCgpO1xuXG4gICAgICAgIHN1ZmZpeCA9IHR5cGVvZiBhcmdDdXJyKCkgPT09ICdzdHJpbmcnID8gYXJnU2hpZnQoKSA6ICcnO1xuXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmdldExlbmd0aChjaGVja2J5dGUpO1xuICAgICAgICBpZiAoIShsZW5ndGggPiBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdWZmaXhMZW5ndGggPSBzdWZmaXguZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgIGlmIChzdWZmaXhMZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWF4IGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiBzdWZmaXggbGVuZ3RoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IGNoZWNrZWRMZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBsZXQgbCA9IGMuZ2V0TGVuZ3RoKGNoZWNrYnl0ZSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZExlbmd0aCArIGwgPiBtYXhMZW5ndGggLSBzdWZmaXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrZWRMZW5ndGggKz0gbDtcbiAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRTdHJpbmcgKyBzdWZmaXg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5jdXRzdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2N1dHN0cmluZy5qc1xuICoqLyIsImltcG9ydCAnLi4vYXJyYXlzL2NvbnRhaW5zJ1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufG51bWJlcn0gW2NoZWNrYnl0ZV0gY2hlY2sgYnl0ZSBsZW5ndGggaWYgdHJ1ZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oY2hlY2tieXRlKSB7XG4gICAgICAgIGxldCBhcmdJbmRleCA9IDA7XG4gICAgICAgIGxldCBhcmdDdXJyID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4XTtcbiAgICAgICAgbGV0IGFyZ1NoaWZ0ID0gKCkgPT4gYXJndW1lbnRzW2FyZ0luZGV4KytdO1xuXG4gICAgICAgIGNoZWNrYnl0ZSA9IFsnYm9vbGVhbicsICdudW1iZXInXS5jb250YWlucyh0eXBlb2YgYXJnQ3VycigpKSA/IGFyZ1NoaWZ0KCkgOiBmYWxzZTtcbiAgICAgICAgaWYgKGNoZWNrYnl0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuICAgICAgICAgICAgY2FzZSAhKGMgPD0gMHgwMDAwN0YpOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhKHR5cGVvZiBjaGVja2J5dGUgPT09ICdudW1iZXInICYmIGNoZWNrYnl0ZSA+IDApOlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSBjaGVja2J5dGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwMDdGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICEoYyA8PSAweDAwRkZGRik6XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxlbmd0aCArPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5nZXRMZW5ndGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2dldExlbmd0aC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5sYXN0SW5kZXhPZihzdHIpO1xuICAgICAgICByZXR1cm4gaSA+IC0xICYmIGkgPT09IHRoaXMubGVuZ3RoIC0gc3RyLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2VuZHNXaXRoLmpzXG4gKiovIiwiaW1wb3J0ICcuLi9hcnJheXMvaXNBcnJheSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdCkge1xuICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nLCAoZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCQxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIicnXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIidcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiJ3tcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd7JztcbiAgICAgICAgICAgICAgICBjYXNlIFwifSdcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd9JztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCEvXlxcZCskL2cudGVzdCgkMikgPyBhcmdzWzBdIHx8IHt9IDogQXJyYXkuaXNBcnJheShhcmdzWzBdKSA/IGFyZ3NbMF0gOiBhcmdzKVskMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoYXJndW1lbnRzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmZvcm1hdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvZm9ybWF0LmpzXG4gKiovIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmZvcm1hdFZhcmlhYmxlcykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzXG4gICAgICogQHJldHVybnMge0FycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXRWYXJpYWJsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gLygnJ3wnXFx7fFxcfSd8XFx7KFxcdyspXFx9KS9nO1xuICAgICAgICBsZXQgdmFyaWFibGVzID0gW107XG4gICAgICAgIGxldCBtYXRjaGVzO1xuICAgICAgICB3aGlsZSAobWF0Y2hlcyA9IHJlZ2V4LmV4ZWModGhpcykpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IFwiJydcIiAmJiBtYXRjaCAhPT0gXCIne1wiICYmIG1hdGNoICE9PSBcIn0nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMucHVzaChtYXRjaGVzWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFyaWFibGVzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuZm9ybWF0VmFyaWFibGVzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9mb3JtYXRWYXJpYWJsZXMuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGlmICghKHNpemUgPiAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2l6ZSB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHNpemUgPSBwYXJzZUludChzaXplKVxuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpY2UoaSwgaSArIHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2dyb3VwZWQuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUuZ3JvdXBlZFJpZ2h0ID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBpZiAoIShzaXplID4gMSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNpemUgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBzaXplID0gcGFyc2VJbnQoc2l6ZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGg7IGkgPiAwOyBpIC09IHNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNsaWNlKE1hdGgubWF4KDAsIGkgLSBzaXplKSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzLnJldmVyc2UoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmdyb3VwZWRSaWdodDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvZ3JvdXBlZFJpZ2h0LmpzXG4gKiovIiwiaW1wb3J0ICcuL3JlcGVhdCdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxDaGFyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIHtcbiAgICAgICAgICAgIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCkgKyB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5scGFkKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5scGFkID0gU3RyaW5nLnByb3RvdHlwZS5sZWZ0UGFkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLmxlZnRQYWQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL2xlZnRQYWQuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUucmVwZWF0KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmVwZWF0ID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICAgICAgaWYgKCEoY291bnQgPj0gMCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvdW50IHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJlcGVhdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvcmVwZWF0LmpzXG4gKiovIiwiaW1wb3J0ICcuL3htbEVzY2FwZSdcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLm5sMmJyKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB4bWxFc2NhcGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUubmwyYnIgPSBmdW5jdGlvbih4bWxFc2NhcGUpIHtcbiAgICAgICAgcmV0dXJuICh4bWxFc2NhcGUgPyB0aGlzLnhtbEVzY2FwZSgpIDogdGhpcykucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLm5sMmJyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9ubDJici5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGUpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnhtbEVzY2FwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oPHw+fFwifCd8JikvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnJmx0Oyc7XG4gICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyZndDsnO1xuICAgICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgICAgIHJldHVybiAnJiMzNDsnO1xuICAgICAgICAgICAgY2FzZSBcIidcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyYjMzk7JztcbiAgICAgICAgICAgIGNhc2UgJyYnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnJmFtcDsnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS54bWxFc2NhcGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm90by9zdHJpbmdzL3htbEVzY2FwZS5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5xdW90ZSkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3ZlcmxhcGFibGVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5xdW90ZSA9IGZ1bmN0aW9uKG92ZXJsYXBhYmxlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3ZlcmxhcGFibGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgb3ZlcmxhcGFibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3ZlcmxhcGFibGUgJiYgdGhpcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhckF0KDApID09PSBcIidcIiAmJiB0aGlzLmNoYXJBdCh0aGlzLmxlbmd0aCAtIDEpID09PSBcIidcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdcIicgKyB0aGlzICsgJ1wiJztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnF1b3RlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9xdW90ZS5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS5yZWdleCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbGFnc1xuICAgICAqIEByZXR1cm5zIHtSZWdFeHB9XG4gICAgICovXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZWdleCA9IGZ1bmN0aW9uKGZsYWdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHRoaXMsIGZsYWdzKTtcbiAgICB9O1xufVxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnIpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnIgPSBTdHJpbmcucHJvdG90eXBlLnJlZ2V4O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmcucHJvdG90eXBlLnJlZ2V4O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvdG8vc3RyaW5ncy9yZWdleC5qc1xuICoqLyIsImltcG9ydCAnLi9yZXBlYXQnXG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbENoYXJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFN0cmluZy5wcm90b3R5cGUucmlnaHRQYWQgPSBmdW5jdGlvbihsZW5ndGgsIGZpbGxDaGFyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihsZW5ndGggKyAnIGlzIG5vdCBhIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmlsbENoYXIpIHtcbiAgICAgICAgICAgIGZpbGxDaGFyID0gJyAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKSArIGZpbGxDaGFyLnJlcGVhdChsZW5ndGggLSB0aGlzLmxlbmd0aCk7XG4gICAgfTtcbn1cbmlmICghU3RyaW5nLnByb3RvdHlwZS5ycGFkKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5ycGFkID0gU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nLnByb3RvdHlwZS5yaWdodFBhZDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvcmlnaHRQYWQuanNcbiAqKi8iLCJpZiAoIVN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKi9cbiAgICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihzdHIpID09PSAwO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3Mvc3RhcnRzV2l0aC5qc1xuICoqLyIsImlmICghU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS51bnF1b3RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICAoKHRoaXMuY2hhckF0KDApID09PSAnXCInICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09ICdcIicpIHx8XG4gICAgICAgICAgICAodGhpcy5jaGFyQXQoMCkgPT09IFwiJ1wiICYmIHRoaXMuY2hhckF0KHRoaXMubGVuZ3RoIC0gMSkgPT09IFwiJ1wiKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZy5wcm90b3R5cGUudW5xdW90ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb3RvL3N0cmluZ3MvdW5xdW90ZS5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VwYXJhdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2VzY2FwZUNoYXJdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xpbWl0XVxuICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAqL1xuJC5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgc2VwYXJhdG9yLCBlc2NhcGVDaGFyLCBsaW1pdCkge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHN0ciArICcgaXMgbm90IGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgIGlmICh0eXBlb2Ygc2VwYXJhdG9yID09PSAnbnVtYmVyJykge1xuICAgICAgICBbbGltaXQsIHNlcGFyYXRvciwgZXNjYXBlQ2hhcl0gPSBbc2VwYXJhdG9yLCBudWxsLCBudWxsXVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVzY2FwZUNoYXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgIFtsaW1pdCwgZXNjYXBlQ2hhcl0gPSBbZXNjYXBlQ2hhciwgbnVsbF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW1pdGVkKGkpIHtcbiAgICAgICAgcmV0dXJuIDAgPCBsaW1pdCAmJiBsaW1pdCA8PSBpICsgMTtcbiAgICB9XG5cbiAgICBsZXQgcGFydHMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHMgPSAwO1xuICAgIGxldCBwO1xuICAgIHdoaWxlICgocCA9IHN0ci5pbmRleE9mKHNlcGFyYXRvciwgcykpICE9PSAtMSAmJiAhbGltaXRlZChpKSkge1xuICAgICAgICBsZXQgcGFydCA9IHN0ci5zbGljZShzLCBwKTtcbiAgICAgICAgbGV0IGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVzY2FwZUNoYXIgJiYgcGFydC5zbGljZSgtMSkgPT09IGVzY2FwZUNoYXIpIHtcbiAgICAgICAgICAgIHBhcnQgPSBwYXJ0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIGVzY2FwZWQgPSBwYXJ0LnNsaWNlKC0xKSAhPT0gZXNjYXBlQ2hhcjtcbiAgICAgICAgICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgcGFydCArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGFydHNbaV0gPSAocGFydHNbaV0gfHwgJycpICsgcGFydDtcbiAgICAgICAgcyA9IHAgKyAxO1xuICAgICAgICBpZiAoIWVzY2FwZWQpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocyA8PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHBhcnRzW2ldID0gKHBhcnRzW2ldIHx8ICcnKSArIHN0ci5zbGljZShzKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5zcGxpdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NwbGl0LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuaW1wb3J0ICcuL29iaidcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlTdHJpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuJC5kZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVN0cmluZyAhPT0gJ3N0cmluZycgfHwgcXVlcnlTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgbGV0IHBhaXJzID0gcXVlcnlTdHJpbmcuc3BsaXQoLyZhbXA7fCYvaSk7XG4gICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5leGNlcHQgJiYgISQuaXNBcnJheShvcHRpb25zLmV4Y2VwdCkpIHtcbiAgICAgICAgb3B0aW9ucy5leGNlcHQgPSBbb3B0aW9ucy5leGNlcHRdO1xuICAgIH1cbiAgICBsZXQgbyA9IHt9O1xuICAgIGZvciAobGV0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgbGV0IFtuYW1lLCB2YWx1ZV0gPSBwYWlyLnNwbGl0KCc9Jyk7XG4gICAgICAgIG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobmFtZSk7XG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhjZXB0ID09IG51bGwgfHwgIW9wdGlvbnMuZXhjZXB0LmNvbnRhaW5zKG5hbWUpKSB7XG4gICAgICAgICAgICAkLm9iai5zZXQodHJ1ZSwgbywgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5kZXNlcmlhbGl6ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Rlc2VyaWFsaXplLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZ2V0SXRlcmF0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfaXNJdGVyYWJsZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGVcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9IF9nZXRJdGVyYXRvcihhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKF9pc0l0ZXJhYmxlKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkLXRvLWFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLml0ZXItaGVscGVycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzLyQnKS5jb3JlLmlzSXRlcmFibGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge2pRdWVyeTxIVE1MRWxlbWVudD59XG4gKi9cbiQuZm4uZmluZEJ5TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kKCdbbmFtZT1cIicgKyAobmFtZSB8fCAnJykucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpICsgJ1wiXScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5maW5kQnlOYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmluZEJ5TmFtZS5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG5hbWVzXG4gKiBAcmV0dXJuIHtqUXVlcnk8SFRNTEVsZW1lbnQ+fVxuICovXG4kLmZuLmZpbmRCeU5hbWVzID0gZnVuY3Rpb24oLi4ubmFtZXMpIHtcbiAgICBpZiAobmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmluZChuYW1lcy5tYXAobmFtZSA9PiAnW25hbWU9XCInICsgKG5hbWUgfHwgJycpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSArICdcIl0nKS5qb2luKCcsJykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5mbi5maW5kQnlOYW1lcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbmRCeU5hbWVzLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0XVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG4kLmZuLmdyb3VwQnkgPSBmdW5jdGlvbihjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzW2ldO1xuICAgICAgICBsZXQga2V5ID0gY2FsbGJhY2suY2FsbChjb250ZXh0IHx8IGVsZW0sIGVsZW0sIGksIHRoaXMpO1xuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghKGtleSBpbiByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSAkKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godGhpc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4uZ3JvdXBCeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncm91cEJ5LmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PEhUTUxFbGVtZW50PnxqUXVlcnk8SFRNTEVsZW1lbnQ+fSBleGNsdWRlc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG4kLmZuLm1heFpJbmRleCA9IGZ1bmN0aW9uKGV4Y2x1ZGVzKSB7XG4gICAgbGV0IHpJbmRleCA9IDA7XG4gICAgdGhpcy5maW5kKCc6dmlzaWJsZScpLmFuZFNlbGYoKS5hZGQodGhpcy5wYXJlbnRzVW50aWwoJ2h0bWwnKSkubm90KGV4Y2x1ZGVzKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlTmFtZSAhPT0gJyNkb2N1bWVudCcpIHtcbiAgICAgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoWydhYnNvbHV0ZScsICdyZWxhdGl2ZScsICdmaXhlZCddLmNvbnRhaW5zKCR0aGlzLmNzcygncG9zaXRpb24nKSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludCgkdGhpcy5jc3MoJ3pJbmRleCcpKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSAmJiB2YWx1ZSA+IHpJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB6SW5kZXggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gekluZGV4O1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gTWF4IHpJbmRleCBmcm9tIGRvY3VtZW50IGJvZHkuXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxIVE1MRWxlbWVudD58alF1ZXJ5PEhUTUxFbGVtZW50Pn0gZXhjbHVkZXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuJC5tYXhaSW5kZXggPSBmdW5jdGlvbihleGNsdWRlcykge1xuICAgIHJldHVybiAkKGRvY3VtZW50LmJvZHkpLm1heFpJbmRleChleGNsdWRlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLm1heFpJbmRleDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21heFpJbmRleC5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9wcm90by9pbmRleCdcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG4kLm5leHRUaWNrID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLm5leHRUaWNrO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbmV4dFRpY2suanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtib29sZWFufSBkYXRhQW5kRXZlbnRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRlZXBEYXRhQW5kRXZlbnRzXG4gKiBAcmV0dXJuIHtqUXVlcnk8SFRNTEVsZW1lbnQ+fVxuICovXG4kLmZuLnJlY2xvbmUgPSBmdW5jdGlvbihkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cykge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG9sZEVsZW0gPSAkKHRoaXMpO1xuICAgICAgICBsZXQgbmV3RWxlbSA9IG9sZEVsZW0uY2xvbmUoZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpO1xuICAgICAgICBuZXdFbGVtLmluc2VydEFmdGVyKHRoaXMpO1xuICAgICAgICBvbGRFbGVtLnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gbmV3RWxlbVswXTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuZm4ucmVjbG9uZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWNsb25lLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqIEBwYXJhbSB7QXJyYXk8e25hbWUsdmFsdWV9Pn0gcGFyYW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGxlbmd0aCBvZiBwYXJhbWV0ZXJzXG4gKi9cbiQucmVpbmRleEFycmF5UGFyYW1zID0gZnVuY3Rpb24ocHJlZml4LCBwYXJhbXMpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIHByZWZpeC5yZXBsYWNlKCcuJywgJ1xcXFwuJykgKyAnKVxcXFxbKFxcXFxkKylcXFxcXScpO1xuICAgIGxldCBwcmV2SW5kZXggPSBudWxsO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHBhcmFtIG9mIHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMocGFyYW0ubmFtZSk7XG4gICAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgICAgICBsZXQgY3VyckluZGV4ID0gcmVzdWx0c1syXTtcbiAgICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IGN1cnJJbmRleCkge1xuICAgICAgICAgICAgICAgIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW0ubmFtZSA9IHBhcmFtLm5hbWUucmVwbGFjZShyZWdleCwgJyQxWycgKyBpbmRleCArICddJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgJC5yZWluZGV4QXJyYXlQYXJhbXM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVpbmRleEFycmF5UGFyYW1zLmpzXG4gKiovIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL3Byb3RvL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnJldmVyc2UgPSBBcnJheS5wcm90b3R5cGUucmV2ZXJzZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JldmVyc2UuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuJC5mbi5zZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5leGNlcHQgJiYgISQuaXNBcnJheShvcHRpb25zLmV4Y2VwdCkpIHtcbiAgICAgICAgb3B0aW9ucy5leGNlcHQgPSBbb3B0aW9ucy5leGNlcHRdO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgJC5lYWNoKHRoaXMuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4Y2VwdCA9PSBudWxsIHx8ICFvcHRpb25zLmV4Y2VwdC5jb250YWlucyh0aGlzLm5hbWUpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmICghJC5pc0FycmF5KHJlc3VsdFt0aGlzLm5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbdGhpcy5uYW1lXSA9IFtyZXN1bHRbdGhpcy5uYW1lXSwgdGhpcy52YWx1ZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3RoaXMubmFtZV0ucHVzaCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFt0aGlzLm5hbWVdID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAkLmZuLnNlcmlhbGl6ZU9iamVjdDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJpYWxpemVPYmplY3QuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW1zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbiQuc29tZSA9IGZ1bmN0aW9uKGl0ZW1zLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmICghJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGlmICgkLmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgaXRlbXMsIGl0ZW1zW2ldLCBpLCBpdGVtcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoJC5pc1BsYWluT2JqZWN0KGl0ZW1zKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCB8fCBpdGVtcywgaXRlbXNba2V5XSwga2V5LCBpdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihpdGVtcyArIFwiIGlzIG5vdCBhcnJheSBvciBwbGFpbiBvYmplY3RcIik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuc29tZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NvbWUuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbiQuc3VwcG9ydHNJbnB1dFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgICByZXR1cm4gaW5wdXQudHlwZSA9PT0gdHlwZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQuc3VwcG9ydHNJbnB1dFR5cGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3VwcG9ydHNJbnB1dFR5cGUuanNcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vcHJvdG8vaW5kZXgnXG5cbi8qKlxuICogQHBhcmFtIHtYTUx9IHhtbE5vZGUgdGhlIHhtbCBub2RlLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG4kLnhtbFRvU3RyaW5nID0gZnVuY3Rpb24oeG1sTm9kZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoeG1sTm9kZSk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIGlmICh4bWxOb2RlLnhtbCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJYTUxTZXJpYWxpemVyIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhtbE5vZGUueG1sO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICQueG1sVG9TdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy94bWxUb1N0cmluZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=