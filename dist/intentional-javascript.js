(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("intentional-javascript", [], factory);
	else if(typeof exports === 'object')
		exports["intentional-javascript"] = factory();
	else
		root["intentional-javascript"] = factory();
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

	/*istanbul ignore next*/"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.notify = exports.cop = undefined;
	
	var _activeEventTracking = __webpack_require__(1);
	
	Object.defineProperty(exports, "notify", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_activeEventTracking).default;
	  }
	});
	
	/*istanbul ignore next*/var _contextjs = __webpack_require__(71);
	
	var _cop = _interopRequireWildcard(_contextjs);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.cop = _cop;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray2 = __webpack_require__(2);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _from = __webpack_require__(59);
	
	var _from2 = _interopRequireDefault(_from);
	
	var _classCallCheck2 = __webpack_require__(66);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(67);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	exports.default = notify;
	
	/*istanbul ignore next*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function difference(list, without) {
	    return list.filter(function (obj) /*istanbul ignore next*/{
	        return !without.some(function (obj2) /*istanbul ignore next*/{
	            return obj === obj2;
	        });
	    });
	}
	
	function diff(newList, oldList) {
	    var enteredItems = difference(newList, oldList);
	    var updatedItems = difference(newList, enteredItems);
	    var exitedItems = difference(oldList, newList);
	
	    return [enteredItems, updatedItems, exitedItems];
	}
	
	/*istanbul ignore next*/var Notifier = function () {
	    function /*istanbul ignore next*/Notifier(eventType, selector, callback, useCapture) {
	        /*istanbul ignore next*/var _this = this;
	
	        (0, _classCallCheck3.default)(this, Notifier);
	
	        this._eventType = eventType;
	        this._selector = selector;
	        this._callback = callback;
	        this._useCapture = useCapture;
	
	        this._selectedElements = [];
	
	        // install global listener
	        this._globalListener = function () /*istanbul ignore next*/{
	            return (/*istanbul ignore next*/_this._update()
	            );
	        };
	        document.documentElement.addEventListener(this._eventType, this._globalListener, true);
	
	        this._update();
	    }
	
	    (0, _createClass3.default)(Notifier, [{
	        key: "_update",
	        value: function _update() {
	            /*istanbul ignore next*/var _this2 = this;
	
	            var newSelection = arguments.length <= 0 || arguments[0] === undefined ? document.querySelectorAll(this._selector) : arguments[0];
	
	            var oldSelection = this._selectedElements;
	            this._selectedElements = /*istanbul ignore next*/(0, _from2.default)(newSelection);
	
	            /*istanbul ignore next*/var _diff = diff(this._selectedElements, oldSelection);
	
	            /*istanbul ignore next*/var _diff2 = (0, _slicedToArray3.default)(_diff, 3);
	
	            var newItems = _diff2[0];
	            /*istanbul ignore next*/var _ = _diff2[1];
	            /*istanbul ignore next*/var oldItems = _diff2[2];
	
	
	            newItems.forEach(function (item) /*istanbul ignore next*/{
	                return item.addEventListener( /*istanbul ignore next*/_this2._eventType, /*istanbul ignore next*/_this2._callback, /*istanbul ignore next*/_this2._useCapture);
	            });
	            oldItems.forEach(function (item) /*istanbul ignore next*/{
	                return item.removeEventListener( /*istanbul ignore next*/_this2._eventType, /*istanbul ignore next*/_this2._callback, /*istanbul ignore next*/_this2._useCapture);
	            });
	        }
	    }, {
	        key: "uninstall",
	        value: function uninstall() {
	            document.documentElement.removeEventListener(this._eventType, this._globalListener, true);
	            this._update([]);
	        }
	    }]);
	    return Notifier;
	}();
	
	function notify() {
	    /*istanbul ignore next*/for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }
	
	    return (/*istanbul ignore next*/new (Function.prototype.bind.apply(Notifier, [null].concat(args)))()
	    );
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(3);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(55);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
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
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(51);
	module.exports = __webpack_require__(53);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	var global        = __webpack_require__(17)
	  , hide          = __webpack_require__(21)
	  , Iterators     = __webpack_require__(9)
	  , TO_STRING_TAG = __webpack_require__(48)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(7)
	  , step             = __webpack_require__(8)
	  , Iterators        = __webpack_require__(9)
	  , toIObject        = __webpack_require__(10);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(14)(Array, 'Array', function(iterated, kind){
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
/* 7 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(11)
	  , defined = __webpack_require__(13);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(12);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(15)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(31)
	  , hide           = __webpack_require__(21)
	  , has            = __webpack_require__(32)
	  , Iterators      = __webpack_require__(9)
	  , $iterCreate    = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(47)
	  , getPrototypeOf = __webpack_require__(49)
	  , ITERATOR       = __webpack_require__(48)('iterator')
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
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
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
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(17)
	  , core      = __webpack_require__(18)
	  , ctx       = __webpack_require__(19)
	  , hide      = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 17 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
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
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(22)
	  , createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(26) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(23)
	  , IE8_DOM_DEFINE = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(29)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(26) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(26) && !__webpack_require__(27)(function(){
	  return Object.defineProperty(__webpack_require__(28)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(27)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24)
	  , document = __webpack_require__(17).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(24);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 32 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(34)
	  , descriptor     = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(47)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(48)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(23)
	  , dPs         = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(28)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(22)
	  , anObject = __webpack_require__(23)
	  , getKeys  = __webpack_require__(36);
	
	module.exports = __webpack_require__(26) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(32)
	  , toIObject    = __webpack_require__(10)
	  , arrayIndexOf = __webpack_require__(38)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(10)
	  , toLength  = __webpack_require__(39)
	  , toIndex   = __webpack_require__(41);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(40)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys')
	  , uid    = __webpack_require__(44);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(17)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(22).f
	  , has = __webpack_require__(32)
	  , TAG = __webpack_require__(48)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(43)('wks')
	  , uid        = __webpack_require__(44)
	  , Symbol     = __webpack_require__(17).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(32)
	  , toObject    = __webpack_require__(50)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(13);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(52)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(14)(String, 'String', function(iterated){
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , defined   = __webpack_require__(13);
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(48)('iterator')
	  , Iterators = __webpack_require__(9);
	module.exports = __webpack_require__(18).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(12)
	  , TAG = __webpack_require__(48)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(51);
	module.exports = __webpack_require__(57);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(23)
	  , get      = __webpack_require__(58);
	module.exports = __webpack_require__(18).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(48)('iterator')
	  , Iterators = __webpack_require__(9);
	module.exports = __webpack_require__(18).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(61);
	module.exports = __webpack_require__(18).Array.from;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(19)
	  , $export        = __webpack_require__(16)
	  , toObject       = __webpack_require__(50)
	  , call           = __webpack_require__(62)
	  , isArrayIter    = __webpack_require__(63)
	  , toLength       = __webpack_require__(39)
	  , createProperty = __webpack_require__(64)
	  , getIterFn      = __webpack_require__(58);
	
	$export($export.S + $export.F * !__webpack_require__(65)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(23);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(9)
	  , ITERATOR   = __webpack_require__(48)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(22)
	  , createDesc      = __webpack_require__(30);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(48)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(68);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	var $Object = __webpack_require__(18).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(16);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(26), 'Object', {defineProperty: __webpack_require__(22).f});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*istanbul ignore next*/Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Layer = exports.proceed = undefined;
	
	var _symbol = __webpack_require__(72);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var /*istanbul ignore next*/_Layers = __webpack_require__(89);
	
	/*istanbul ignore next*/Object.defineProperty(exports, "proceed", {
	  enumerable: true,
	  get: function get() {
	    return _Layers.proceed;
	  }
	});
	/*istanbul ignore next*/Object.defineProperty(exports, "Layer", {
	  enumerable: true,
	  get: function get() {
	    return _Layers.Layer;
	  }
	});
	/*istanbul ignore next*/exports.withLayers = withLayers;
	/*istanbul ignore next*/exports.withoutLayers = withoutLayers;
	/*istanbul ignore next*/exports.layer = layer;
	
	/*istanbul ignore next*/var cop = _interopRequireWildcard(_Layers);
	
	/*istanbul ignore next*/function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Layer Activation
	function withLayers(layers, func) {
	  cop.LayerStack.push({ withLayers: layers });
	  // console.log("callee: " + withLayers.callee);
	  try {
	    return func();
	  } finally {
	    cop.LayerStack.pop();
	  }
	};
	
	function withoutLayers(layers, func) {
	  cop.LayerStack.push({ withoutLayers: layers });
	  try {
	    return func();
	  } finally {
	    cop.LayerStack.pop();
	  }
	};
	
	// Layer creation by name
	function layer() {
	  var layerName = /*istanbul ignore next*/void 0,
	      rootContext = /*istanbul ignore next*/void 0;
	
	  /*istanbul ignore next*/for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (args.length === 2) {
	    /*istanbul ignore next*/rootContext = args[0];
	    /*istanbul ignore next*/layerName = args[1];
	  } else if (args.length === 1) {
	    /*istanbul ignore next*/layerName = args[0];
	  }
	  if (typeof rootContext === 'undefined') {
	    return basicCreate(layerName);
	  }
	  var parts = layerName.split(/\./);
	  var context = rootContext;
	  for (var i = 0; i < parts.length - 1; ++i) {
	    context = context[parts[i]];
	  }
	  return basicCreate(parts[parts.length - 1], context);
	};
	
	// Private helpers
	function basicCreate(layerName, context) {
	  if (typeof layerName === 'undefined') layerName = /*istanbul ignore next*/(0, _symbol2.default)('COP Layer');
	  if (typeof context === 'undefined') context = cop.GlobalNamedLayers;
	  if (typeof context[layerName] !== 'undefined') {
	    var existing = context[layerName];
	    if (!existing.isLayer /* undefined or falsy */ || !existing.isLayer()) {
	      throw new Error('Will not overwrite existing property ' + layerName);
	    }
	    return existing;
	  } else {
	    return context[layerName] = new cop.Layer(layerName, context);
	  }
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	module.exports = __webpack_require__(18).Symbol;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(17)
	  , has            = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(26)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(31)
	  , META           = __webpack_require__(75).KEY
	  , $fails         = __webpack_require__(27)
	  , shared         = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(47)
	  , uid            = __webpack_require__(44)
	  , wks            = __webpack_require__(48)
	  , wksExt         = __webpack_require__(76)
	  , wksDefine      = __webpack_require__(77)
	  , keyOf          = __webpack_require__(78)
	  , enumKeys       = __webpack_require__(79)
	  , isArray        = __webpack_require__(82)
	  , anObject       = __webpack_require__(23)
	  , toIObject      = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(29)
	  , createDesc     = __webpack_require__(30)
	  , _create        = __webpack_require__(34)
	  , gOPNExt        = __webpack_require__(83)
	  , $GOPD          = __webpack_require__(85)
	  , $DP            = __webpack_require__(22)
	  , $keys          = __webpack_require__(36)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
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
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(84).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(81).f  = $propertyIsEnumerable;
	  __webpack_require__(80).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(15)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(44)('meta')
	  , isObject = __webpack_require__(24)
	  , has      = __webpack_require__(32)
	  , setDesc  = __webpack_require__(22).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(27)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(48);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(17)
	  , core           = __webpack_require__(18)
	  , LIBRARY        = __webpack_require__(15)
	  , wksExt         = __webpack_require__(76)
	  , defineProperty = __webpack_require__(22).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(10);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(36)
	  , gOPS    = __webpack_require__(80)
	  , pIE     = __webpack_require__(81);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 81 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(12);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(10)
	  , gOPN      = __webpack_require__(84).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(37)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(81)
	  , createDesc     = __webpack_require__(30)
	  , toIObject      = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(29)
	  , has            = __webpack_require__(32)
	  , IE8_DOM_DEFINE = __webpack_require__(25)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(26) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 86 */
/***/ function(module, exports) {



/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(77)('asyncIterator');

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(77)('observable');

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PartialLayerComposition = exports.COPError = exports.LayerableObject = exports.LayerableObjectTrait = exports.Layer = exports.GlobalNamedLayers = exports.LayerStack = exports.GlobalLayers = exports.proceedStack = exports.log_layer_code = exports.Config = undefined;
	
	var _possibleConstructorReturn2 = __webpack_require__(90);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(94);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _values = __webpack_require__(102);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _getPrototypeOf = __webpack_require__(106);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _getOwnPropertyNames = __webpack_require__(110);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _getOwnPropertyDescriptor = __webpack_require__(113);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	var _defineProperty = __webpack_require__(68);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _classCallCheck2 = __webpack_require__(66);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(67);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _symbol = __webpack_require__(72);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	exports.log = log;
	/*istanbul ignore next*/exports.withLogLayerCode = withLogLayerCode;
	/*istanbul ignore next*/exports.getLayerDefinitionForObject = getLayerDefinitionForObject;
	/*istanbul ignore next*/exports.ensurePartialLayer = ensurePartialLayer;
	/*istanbul ignore next*/exports.layerMethod = layerMethod;
	/*istanbul ignore next*/exports.layerProperty = layerProperty;
	/*istanbul ignore next*/exports.layerPropertyWithShadow = layerPropertyWithShadow;
	/*istanbul ignore next*/exports.computeLayersFor = computeLayersFor;
	/*istanbul ignore next*/exports.composeLayers = composeLayers;
	/*istanbul ignore next*/exports.resetLayerStack = resetLayerStack;
	/*istanbul ignore next*/exports.currentLayers = currentLayers;
	/*istanbul ignore next*/exports.invalidateLayerComposition = invalidateLayerComposition;
	/*istanbul ignore next*/exports.lookupLayeredFunctionForObject = lookupLayeredFunctionForObject;
	/*istanbul ignore next*/exports.uninstallLayersInObject = uninstallLayersInObject;
	/*istanbul ignore next*/exports.uninstallLayersInAllClasses = uninstallLayersInAllClasses;
	/*istanbul ignore next*/exports.allLayers = allLayers;
	/*istanbul ignore next*/exports.enableLayer = enableLayer;
	/*istanbul ignore next*/exports.disableLayer = disableLayer;
	/*istanbul ignore next*/exports.proceed = proceed;
	
	/*istanbul ignore next*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Copyright (c) 2008-2011 Hasso Plattner Institute
	 *
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/* 
	 * Private Helpers for Development
	 */
	
	var Config = /*istanbul ignore next*/exports.Config = {};
	Config.ignoreDeprecatedProceed = true;
	
	var log_layer_code = /*istanbul ignore next*/exports.log_layer_code = false;
	function log(string) {
	  if (log_layer_code) console.log(string);
	}
	
	/* 
	 * Private State
	 */
	
	var proceedStack = /*istanbul ignore next*/exports.proceedStack = [];
	var GlobalLayers = /*istanbul ignore next*/exports.GlobalLayers = [];
	// hack, to work around absence of identity dictionaries in JavaScript
	// we could perhaps limit ourselfs to layer only those objects that respond to object.id()
	// because working with objects is a serialization problem in itself, perhaps we should
	// restrict ourself in working with classes
	// So classes have names and names can be used as keys in dictionaries :-)
	var object_id_counter = 0;
	
	/* 
	 * Private Methods
	 */
	
	// for debugging ContextJS itself
	function withLogLayerCode(func) {
	  try {
	    var old = log_layer_code;
	    /*istanbul ignore next*/exports.log_layer_code = log_layer_code = true;
	    func();
	  } finally {
	    /*istanbul ignore next*/exports.log_layer_code = log_layer_code = old;
	  }
	};
	
	var LayerObjectID = /*istanbul ignore next*/(0, _symbol2.default)("layerObjectID");
	
	function getLayerDefinitionForObject(layer, object) {
	  // log("cop getLayerDefinitionForObject(" + layer + ", " + object + ")");
	  if (!layer || !object) {
	    return;
	  }
	  var result = layer[object[LayerObjectID]];
	  return result ? result : getLayerDefinitionForObject(layer, object.prototype);
	};
	
	/**
	 * Stores partial definitions for a single layered object and layer.
	 */
	
	/*istanbul ignore next*/var PartialLayer = function () {
	  function /*istanbul ignore next*/PartialLayer(layeredObject) {
	    /*istanbul ignore next*/(0, _classCallCheck3.default)(this, PartialLayer);
	
	    this.layeredObject = layeredObject;
	    this.layeredProperties = {};
	  }
	
	  (0, _createClass3.default)(PartialLayer, [{
	    key: 'setLayeredPropertyValue',
	    value: function setLayeredPropertyValue(name, value) {
	      this.layeredProperties[name] = value;
	    }
	  }, {
	    key: 'defineGetter',
	    value: function defineGetter(propertyName, getter) {
	      return (/*istanbul ignore next*/(0, _defineProperty2.default)(this.layeredProperties, propertyName, { get: getter, configurable: true })
	      );
	    }
	  }, {
	    key: 'defineSetter',
	    value: function defineSetter(propertyName, setter) {
	      return (/*istanbul ignore next*/(0, _defineProperty2.default)(this.layeredProperties, propertyName, { set: setter, configurable: true })
	      );
	    }
	  }, {
	    key: 'getterMethod',
	    value: function getterMethod(propertyName) {
	      return (/*istanbul ignore next*/(0, _getOwnPropertyDescriptor2.default)(this.layeredProperties, propertyName).get
	      );
	    }
	  }, {
	    key: 'setterMethod',
	    value: function setterMethod(propertyName) {
	      return (/*istanbul ignore next*/(0, _getOwnPropertyDescriptor2.default)(this.layeredProperties, propertyName).set
	      );
	    }
	  }, {
	    key: 'property',
	    value: function property(propertyName) {
	      if (this.layeredProperties.hasOwnProperty(propertyName)) {
	        return this.layeredProperties[propertyName];
	      }
	    }
	  }, {
	    key: 'reinstall',
	    value: function reinstall() {
	      /*istanbul ignore next*/var _this = this;
	
	      /*istanbul ignore next*/(0, _getOwnPropertyNames2.default)(this.layeredProperties).forEach(function (eachProperty) {
	        var property = /*istanbul ignore next*/(0, _getOwnPropertyDescriptor2.default)( /*istanbul ignore next*/_this.layeredProperties, eachProperty);
	        if (typeof property.get !== 'undefined' || typeof property.set !== 'undefined') {
	          makePropertyLayerAware( /*istanbul ignore next*/_this.layeredObject, eachProperty);
	        } else {
	          makeFunctionLayerAware( /*istanbul ignore next*/_this.layeredObject, eachProperty);
	        }
	      });
	    }
	  }]);
	  return PartialLayer;
	}();
	
	function ensurePartialLayer(layer, object) {
	  if (!layer) {
	    throw new Error("in ensurePartialLayer: layer is nil");
	  }
	  if (!object.hasOwnProperty(LayerObjectID)) {
	    /*istanbul ignore next*/(0, _defineProperty2.default)(object, LayerObjectID, {
	      value: object_id_counter++,
	      enumerable: false,
	      configurable: false,
	      writable: false
	    });
	  }
	  if (!layer[object[LayerObjectID]]) {
	    layer[object[LayerObjectID]] = new PartialLayer(object);
	  }
	  return layer[object[LayerObjectID]];
	};
	
	// TODO(mariannet) : Find out if ES6 constructor also has type
	function layerMethod(layer, object, property, func) {
	  ensurePartialLayer(layer, object).setLayeredPropertyValue(property, func);
	  func.displayName = "layered " + String(layer.name) + " " + (object.constructor ? object.constructor.type + "$" : "") + property;
	  makeFunctionLayerAware(object, property, layer.isHidden);
	
	  // Bookkeeping for layer uninstall
	  // typeof object.getName === 'function'
	  //    && (layer._layeredFunctionsList[object][property] = true);
	};
	
	function layerGetterMethod(layer, object, property, getter) {
	  ensurePartialLayer(layer, object).defineGetter(property, getter);
	};
	
	function layerSetterMethod(layer, object, property, setter) {
	  ensurePartialLayer(layer, object).defineSetter(property, setter);
	};
	
	function layerProperty(layer, object, property, defs) {
	  var defProperty = /*istanbul ignore next*/(0, _getOwnPropertyDescriptor2.default)(defs, property);
	  var getter = defProperty && defProperty.get;
	  if (getter) {
	    layerGetterMethod(layer, object, property, getter);
	  }
	  var setter = defProperty && defProperty.set;
	  if (setter) {
	    layerSetterMethod(layer, object, property, setter);
	  }
	  if (getter || setter) {
	    makePropertyLayerAware(object, property);
	  } else {
	    layerMethod(layer, object, property, defs[property]);
	  }
	};
	
	function layerPropertyWithShadow(layer, object, property) {
	  // shadowing does not work with current implementation
	  // see the shadow tests in LayersTest
	  var defs = {};
	  var baseValue = object[property];
	  var layeredPropName = "_layered_" + layer.name + "_" + property;
	  /*istanbul ignore next*/(0, _defineProperty2.default)(defs, property, {
	    get: function layeredGetter() {
	      return this[layeredPropName] === undefined ? proceed() : this[layeredPropName];
	    },
	    set: function layeredSetter(v) {
	      this[layeredPropName] = v;
	    },
	    configurable: true
	  });
	  layerProperty(layer, object, property, defs);
	};
	
	function computeLayersFor(obj) {
	  return obj && obj.activeLayers ? obj.activeLayers(currentLayers) : currentLayers();
	};
	
	function composeLayers(stack) {
	  var result = GlobalLayers.slice(0);
	  for (var i = 0; i < stack.length; i++) {
	    var current = stack[i];
	    if (current.withLayers) {
	      result = result.filter(function (l) /*istanbul ignore next*/{
	        return ! /*istanbul ignore next*/(current.withLayers.indexOf(l) !== -1);
	      }).concat(current.withLayers);
	    } else if (current.withoutLayers) {
	      result = result.filter(function (l) /*istanbul ignore next*/{
	        return ! /*istanbul ignore next*/(current.withoutLayers.indexOf(l) !== -1);
	      });
	    }
	  }
	  return result;
	};
	
	var LayerStack = /*istanbul ignore next*/exports.LayerStack = void 0;
	
	function resetLayerStack() {
	  /*istanbul ignore next*/exports.LayerStack = LayerStack = [{
	    isStatic: true,
	    toString: function /*istanbul ignore next*/toString() {
	      return "BaseLayer";
	    },
	    composition: null
	  }];
	  invalidateLayerComposition();
	};
	
	function currentLayers() {
	  if (LayerStack.length == 0) {
	    throw new Error("The default layer is missing");
	  }
	  // NON OPTIMIZED VERSION FOR STATE BASED LAYER ACTIVATION
	  var current = LayerStack[LayerStack.length - 1];
	  if (!current.composition) {
	    current.composition = composeLayers(LayerStack);
	  }
	  return current.composition;
	};
	
	// clear cached layer compositions
	function invalidateLayerComposition() {
	  LayerStack.forEach(function (ea) {
	    ea.composition = null;
	  });
	};
	
	function lookupLayeredFunctionForObject(self, layer, function_name, methodType, n) {
	  if (!layer) {
	    return undefined;
	  }
	  // we have to look for layer defintions in self, self.prototype,
	  // ... there may be layered methods in a subclass of "obj"
	  var partialFunction = /*istanbul ignore next*/void 0;
	  var partialLayerForObject = getLayerDefinitionForObject(layer, self);
	  if (partialLayerForObject) {
	    // log("  found layer definitions for object");
	    if (methodType == 'getter') {
	      partialFunction = partialLayerForObject.getterMethod(function_name);
	    } else if (methodType == 'setter') {
	      partialFunction = partialLayerForObject.setterMethod(function_name);
	    } else {
	      partialFunction = partialLayerForObject.property(function_name);
	    }
	  }
	  if (!partialFunction) {
	    // try the superclass hierachy
	    // log("look for superclass of: " + self.constructor)
	    var superclass = /*istanbul ignore next*/(0, _getPrototypeOf2.default)(self);
	    if (superclass) {
	      // log("layered function is not found
	      //in this partial method, lookup for my prototype?")
	      return lookupLayeredFunctionForObject(superclass, layer, function_name, methodType);
	    }
	  }
	  return partialFunction;
	};
	
	function pvtMakeFunctionOrPropertyLayerAware(obj, slotName, baseValue, type, isHidden) {
	  // install in obj[slotName] a cop wrapper that weaves partial methods
	  // into real method (baseValue)
	  if (baseValue.isLayerAware) {
	    return;
	  }
	  makeSlotLayerAwareWithNormalLookup(obj, slotName, baseValue, type, isHidden);
	};
	
	function makeSlotLayerAwareWithNormalLookup(obj, slotName, baseValue, type, isHidden) {
	  var wrapped_function = function wrapped_function() {
	    var composition = new PartialLayerComposition(this, obj, slotName, baseValue, type);
	    proceedStack.push(composition);
	    try {
	      return proceed.apply(this, arguments);
	    } finally {
	      proceedStack.pop();
	    };
	  };
	  wrapped_function.isLayerAware = true;
	  // this is more declarative outside of COP context
	  wrapped_function.isContextJSWrapper = true;
	  if (isHidden) {
	    wrapped_function.toString = function () {
	      return this.getOriginal().toString();
	    };
	  }
	  // For wrapped_function.getOriginal()
	  wrapped_function.originalFunction = baseValue;
	  if (type == "getter") {
	    /*istanbul ignore next*/(0, _defineProperty2.default)(obj, slotName, { get: wrapped_function });
	  } else if (type == "setter") {
	    /*istanbul ignore next*/(0, _defineProperty2.default)(obj, slotName, { set: wrapped_function });
	  } else {
	    obj[slotName] = wrapped_function;
	  }
	};
	
	function makeFunctionLayerAware(base_obj, function_name, isHidden) {
	  if (!base_obj) {
	    throw new Error("can't layer an non existent object");
	  }
	  /* ensure base function */
	  var base_function = base_obj[function_name];
	  if (!base_function) {
	    // console.log("WARNING can't layer an non existent function" + function_name +
	    // " , so do nothing")
	    // return;
	    base_function = function /*istanbul ignore next*/base_function() /*istanbul ignore next*/{
	      return null;
	    };
	  };
	  pvtMakeFunctionOrPropertyLayerAware(base_obj, function_name, base_function, undefined, isHidden);
	};
	
	function makePropertyLayerAware(baseObj, property) {
	  if (!baseObj) {
	    throw new Error("can't layer a non existent object");
	  }
	  // ensure base getter and setter
	  var baseObjProperty = /*istanbul ignore next*/(0, _getOwnPropertyDescriptor2.default)(baseObj, property);
	  var propName = "__layered_" + property + "__";
	  var getter = baseObjProperty && baseObjProperty.get;
	  if (!getter) {
	    // does not work when dealing with classes and instances...
	    baseObj[propName] = baseObj[property]; // take over old value
	    getter = function /*istanbul ignore next*/getter() {
	      return this[propName];
	    };
	    /*istanbul ignore next*/(0, _defineProperty2.default)(baseObj, property, { get: getter, configurable: true });
	  };
	  var setter = baseObjProperty && baseObjProperty.set;
	  if (!setter) {
	    setter = function /*istanbul ignore next*/setter(value) {
	      return this[propName] = value;
	    };
	    /*istanbul ignore next*/(0, _defineProperty2.default)(baseObj, property, { set: setter, configurable: true });
	  };
	  pvtMakeFunctionOrPropertyLayerAware(baseObj, property, getter, 'getter');
	  pvtMakeFunctionOrPropertyLayerAware(baseObj, property, setter, 'setter');
	};
	
	function makeFunctionLayerUnaware(base_obj, function_name) {
	  if (!base_obj) {
	    throw new Error("need object to makeFunctionLayerUnaware");
	  }
	  var prevFunction;
	  var currentFunction = base_obj[function_name];
	  if (currentFunction === undefined) {
	    return; // nothing to do here
	  }
	  while (typeof currentFunction.originalFunction == 'function' && !currentFunction.isLayerAware) {
	    var prevFunction = currentFunction;
	    currentFunction = currentFunction.originalFunction;
	  }
	  if (!currentFunction.isLayerAware) {
	    return; // nothing to do here
	  }
	  var originalFunction = currentFunction.originalFunction;
	  if (!(originalFunction instanceof Function)) {
	    throw new Error("makeFunctionLayerUnaware Error: no orignal function");
	  }
	  if (prevFunction instanceof Function) {
	    prevFunction.originalFunction = originalFunction;
	  } else {
	    base_obj[function_name] = originalFunction;
	  }
	};
	
	function uninstallLayersInObject(object) {
	  /*istanbul ignore next*/(0, _getOwnPropertyNames2.default)(object).forEach(function (ea) {
	    if (typeof object[ea] === 'function') makeFunctionLayerUnaware(object, ea);
	  });
	};
	
	function uninstallLayersInAllClasses() {
	  Global.classes(true).forEach(function (ea) {
	    uninstallLayersInObject(ea.prototype);
	  });
	};
	
	function allLayers() {
	  /*istanbul ignore next*/var optObject = arguments.length <= 0 || arguments[0] === undefined ? Global : arguments[0];
	
	  // does not really return all layers... layers in namepsaces are not found!
	  // therefore you can query all layers in an optObject
	  return (/*istanbul ignore next*/(0, _values2.default)(optObject).select(function (ea) {
	      return ea instanceof Layer;
	    })
	  );
	};
	
	/* 
	 * PUBLIC COP Layer Definition
	 */
	
	var globalContextForNamedLayers = {};
	
	/*istanbul ignore next*/exports.GlobalNamedLayers = globalContextForNamedLayers;
	
	// Gloabl Layer Activation
	
	function enableLayer(layer) {
	  if (GlobalLayers.indexOf(layer) !== -1) {
	    return;
	  }
	  GlobalLayers.push(layer);
	  invalidateLayerComposition();
	};
	
	function disableLayer(layer) {
	  var idx = GlobalLayers.indexOf(layer);
	  if (idx < 0) {
	    return;
	  }
	  GlobalLayers.splice(idx, 1);
	  invalidateLayerComposition();
	};
	
	function proceed() /* arguments */{
	  // COP Proceed Function
	  var composition = proceedStack[proceedStack.length - 1];
	  if (!composition) {
	    console.log('ContextJS: no composition to proceed (stack is empty) ');
	    return;
	  }
	  // TODO use index instead of shifiting?
	  if (composition.partialMethodIndex == undefined) {
	    composition.partialMethodIndex = composition.partialMethods.length - 1;
	  }
	  var index = composition.partialMethodIndex;
	  var partialMethod = composition.partialMethods[index];
	  if (!partialMethod) {
	    if (!partialMethod) {
	      throw new COPError('no partialMethod to proceed');
	    }
	  } else {
	    try {
	      composition.partialMethodIndex = index - 1;
	      if (!Config.ignoreDeprecatedProceed && partialMethod.toString().match(/^[\t ]*function ?\(\$?proceed/)) {
	        var args = $A(arguments);
	        args.unshift(proceed);
	        var msg = "proceed in arguments list in " + composition.functionName();
	        if (Config.throwErrorOnDeprecated) {
	          throw new Error("DEPRECATED ERROR: " + msg);
	        }
	        if (Config.logDeprecated) {
	          // console.log("source: " + partialMethod.toString());
	          console.log("DEPRECATED WARNING: " + msg);
	        }
	        var result = partialMethod.apply(composition.object, args);
	      } else {
	        var result = partialMethod.apply(composition.object, arguments);
	      }
	    } finally {
	      composition.partialMethodIndex = index;
	    }
	    return result;
	  }
	};
	
	/* 
	 * Layer Class
	 */
	
	/*istanbul ignore next*/var Layer = exports.Layer = function () {
	  function /*istanbul ignore next*/Layer(name, context) {
	    /*istanbul ignore next*/(0, _classCallCheck3.default)(this, Layer);
	
	    this._name = name;
	    this._context = context;
	    // this._layeredFunctionsList = {};
	  }
	
	  // Accessing
	
	
	  (0, _createClass3.default)(Layer, [{
	    key: 'fullName',
	    value: function fullName() {
	      return '' + this._context + '.' + this._name;
	    }
	  }, {
	    key: 'layeredObjects',
	    value: function layeredObjects() {
	      /*istanbul ignore next*/var _this2 = this;
	
	      return (/*istanbul ignore next*/(0, _getOwnPropertyNames2.default)(this).map(function (ea) /*istanbul ignore next*/{
	          return (/*istanbul ignore next*/_this2[ea] && /*istanbul ignore next*/_this2[ea]._layered_object
	          );
	        }).filter(function (ea) /*istanbul ignore next*/{
	          return ea;
	        })
	      ); // filters falsy things
	    }
	    // TODO: doesn't differentiate between functions and classes - necessary?
	
	  }, {
	    key: 'layeredClasses',
	    value: function layeredClasses() {
	      return this.layeredObjects().map(function (ea) /*istanbul ignore next*/{
	        return ea.constructor;
	      });
	    }
	
	    // Removing
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      // Deletes the LayerClass, but keeps the layered Functions.
	      if (this.isGlobal()) {
	        this.beNotGlobal();
	      }
	      var context = this._context;
	      if (typeof context !== 'undefined') delete context[this.name];
	    }
	  }, {
	    key: 'uninstall',
	    value: function uninstall() {
	      // Uninstalls just this Layer.
	      // functions that are layered by other Layers will not be reset.
	      var layer = this;
	      this.layeredObjects().forEach(function (eachLayeredObj) {
	        // var layerIdx = typeof eachLayeredObj.activeLayers === 'function'
	        //     ? eachLayeredObj.activeLayers().indexOf(layer) : -1;
	
	        // #Special Lively Webwerkstatt code.... General Case? #Jens
	        // #TODO if we have of gloabal list of all layers... we can look there
	
	        // Properties.own(layer._layeredFunctionsList[eachLayeredObj]).each(
	        //   function(eachLayeredFunc) {
	        //     var newerLayer = eachLayeredObj.activeLayers().find(
	        //       function(eachOtherLayer) {
	        //         var eachOtherLayerIdx
	        //             = eachLayeredObj.activeLayers().indexOf(eachOtherLayer);
	        //         var isNewer = (eachOtherLayerIdx !== -1)
	        //             && (eachOtherLayerIdx < layerIdx);
	        //         return isNewer &&
	        //             eachOtherLayer._layeredFunctionsList[eachLayeredObj][eachLayeredFunc];
	        //       });
	        //       if (!newerLayer) {
	        //         makeFunctionLayerUnaware(eachLayeredObj, eachLayeredFunc);
	        //       }
	        //   });
	      });
	      this.remove();
	    }
	
	    // Layer installation
	
	  }, {
	    key: 'refineClass',
	    value: function refineClass(classObject, methods) {
	      if (!classObject || !classObject.prototype) {
	        throw new Error("ContextJS: can not refine class '" + classObject + "' in " + layer);
	      }
	      this.refineObject(classObject.prototype, methods);
	      return this;
	    }
	
	    // Layering objects may be a garbage collection problem, because the layers keep strong
	    // reference to the objects
	
	  }, {
	    key: 'refineObject',
	    value: function refineObject(object, methods) {
	      /*istanbul ignore next*/var _this3 = this;
	
	      // log("cop refineObject");
	
	      // Bookkeeping:
	      // typeof object.getName === 'function' && (layer._layeredFunctionsList[object] = {});
	      /*istanbul ignore next*/(0, _getOwnPropertyNames2.default)(methods).forEach(function (function_name) {
	        // log(" layer property: " + function_name)
	        layerProperty( /*istanbul ignore next*/_this3, object, function_name, methods);
	      });
	      return this;
	    }
	  }, {
	    key: 'unrefineObject',
	    value: function unrefineObject(obj) {
	      var id = obj[LayerObjectID];
	      if (id !== undefined) {
	        delete this[id];
	      }
	    }
	  }, {
	    key: 'unrefineClass',
	    value: function unrefineClass(classObj) {
	      this.unrefineObject(classObj.prototype);
	    }
	  }, {
	    key: 'reinstallInClass',
	    value: function reinstallInClass(constructor) {
	      this.reinstallInObject(constructor.prototype);
	    }
	  }, {
	    key: 'reinstallInObject',
	    value: function reinstallInObject(object) {
	      var partialLayer = ensurePartialLayer(this, object);
	      partialLayer.reinstall();
	    }
	
	    // Layer activation
	
	  }, {
	    key: 'beGlobal',
	    value: function beGlobal() {
	      enableLayer(this);
	      return this;
	    }
	  }, {
	    key: 'beNotGlobal',
	    value: function beNotGlobal() {
	      disableLayer(this);
	      return this;
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      // Hidden Layers do not appear when evaluating the sourcecode of a function
	      // TODO: this function has to be called BEFORE the layer refines any class,
	      // due to problems in unrefining classes.
	      this.isHidden = true;
	      return this;
	    }
	
	    // Testing
	
	  }, {
	    key: 'isLayer',
	    value: function isLayer() {
	      return true;
	    }
	  }, {
	    key: 'isGlobal',
	    value: function isGlobal() {
	      return GlobalLayers.indexOf(this) !== -1;
	    }
	
	    // Debugging
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return String(this.name); // could be a symbol
	    }
	
	    // Deprecated serialization
	
	  }, {
	    key: 'toLiteral',
	    value: function toLiteral() {
	      if (!this.name) {
	        console.warn("Layer: Can not serialize without a name!");
	      }
	      return { name: this.name };
	    }
	
	    // Deserialization
	
	  }, {
	    key: 'fromLiteral',
	    value: function fromLiteral(literal) {
	      // console.log("Deserializing Layer activation from: " + literal.name);
	      return create(literal.name, false);
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return this._name;
	    }
	  }]);
	  return Layer;
	}();
	
	/*
	 * Example implementation of a layerable object
	 */
	
	
	/*istanbul ignore next*/var LayerableObjectTrait = exports.LayerableObjectTrait = function () {
	  function LayerableObjectTrait() {
	    (0, _classCallCheck3.default)(this, LayerableObjectTrait);
	  }
	
	  (0, _createClass3.default)(LayerableObjectTrait, [{
	    key: 'activeLayers',
	    value: function activeLayers() {
	      var result = { withLayers: [], withoutLayers: [] };
	      this.dynamicLayers(result);
	      this.structuralLayers(result);
	      this.globalLayers(result);
	      return result.withLayers;
	    }
	  }, {
	    key: 'collectWithLayersIn',
	    value: function collectWithLayersIn(layers, result) {
	      for (var i = 0; i < layers.length; i++) {
	        var ea = layers[i];
	        if (result.withLayers.indexOf(ea) === -1 && result.withoutLayers.indexOf(ea) === -1) {
	          result.withLayers.unshift(ea);
	        }
	      }
	    }
	  }, {
	    key: 'collectWithoutLayersIn',
	    value: function collectWithoutLayersIn(layers, result) {
	      for (var i = 0; i < layers.length; i++) {
	        var ea = layers[i];
	        if (result.withoutLayers.indexOf(ea) === -1) {
	          result.withoutLayers.push(ea);
	        }
	      }
	    }
	  }, {
	    key: 'dynamicLayers',
	    value: function dynamicLayers(result) {
	      // optimized version, that does not use closures and recursion
	      var stack = LayerStack;
	      // top down, ignore bottom element
	      for (var j = stack.length - 1; j > 0; j--) {
	        var current = stack[j];
	        if (current.withLayers) {
	          this.collectWithLayersIn(current.withLayers, result);
	        }
	        if (current.withoutLayers) {
	          this.collectWithoutLayersIn(current.withoutLayers, result);
	        }
	      }
	      return result;
	    }
	  }, {
	    key: 'structuralLayers',
	    value: function structuralLayers(result) {
	      var allLayers = result.withLayers;
	      var allWithoutLayers = result.withoutLayers;
	      var obj = this;
	      // go ownerchain backward and gather all layer activations and deactivations
	      while (obj) {
	        // don't use accessor methods because of speed... (not measured yet)
	        if (obj.withLayers) {
	          this.collectWithLayersIn(obj.withLayers, result);
	        }
	        if (obj.withoutLayers) {
	          this.collectWithoutLayersIn(obj.withoutLayers, result);
	        }
	        // recurse, stop if owner is undefined
	        obj = obj.owner;
	      }
	      return result;
	    }
	  }, {
	    key: 'globalLayers',
	    value: function globalLayers(result) {
	      this.collectWithLayersIn(GlobalLayers, result);
	      return result;
	    }
	  }, {
	    key: 'setWithLayers',
	    value: function setWithLayers(layers) {
	      this.withLayers = layers;
	    }
	  }, {
	    key: 'addWithLayer',
	    value: function addWithLayer(layer) {
	      var layers = this.getWithLayers();
	      if (! /*istanbul ignore next*/(layers.indexOf(layer) !== -1)) {
	        this.setWithLayers(layers.concat([layer]));
	      }
	    }
	  }, {
	    key: 'removeWithLayer',
	    value: function removeWithLayer(layer) {
	      var layers = this.getWithLayers();
	      if ( /*istanbul ignore next*/layers.indexOf(layer) !== -1) {
	        this.setWithLayers(layers.filter(function (l) /*istanbul ignore next*/{
	          return l !== layer;
	        }));
	      }
	    }
	  }, {
	    key: 'addWithoutLayer',
	    value: function addWithoutLayer(layer) {
	      var layers = this.getWithoutLayers();
	      if (!layers.include(layer)) {
	        this.setWithoutLayers(layers.concat([layer]));
	      }
	    }
	  }, {
	    key: 'removeWithoutLayer',
	    value: function removeWithoutLayer(layer) {
	      var layers = this.getWithoutLayers();
	      this.setWithoutLayers(layers.filter(function (l) /*istanbul ignore next*/{
	        return l !== layer;
	      }));
	    }
	  }, {
	    key: 'setWithoutLayers',
	    value: function setWithoutLayers(layers) {
	      this.withoutLayers = layers;
	    }
	  }, {
	    key: 'getWithLayers',
	    value: function getWithLayers(layers) {
	      return this.withLayers || [];
	    }
	  }, {
	    key: 'getWithoutLayer',
	    value: function getWithoutLayer(layers) {
	      return this.withoutLayers || [];
	    }
	  }]);
	  return LayerableObjectTrait;
	}();
	
	/*istanbul ignore next*/var LayerableObject = exports.LayerableObject = function (_LayerableObjectTrait) {
	  (0, _inherits3.default)(LayerableObject, _LayerableObjectTrait);
	
	  function LayerableObject() {
	    (0, _classCallCheck3.default)(this, LayerableObject);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LayerableObject).apply(this, arguments));
	  }
	
	  return LayerableObject;
	}(LayerableObjectTrait);
	
	/*istanbul ignore next*/var COPError = exports.COPError = function () {
	  function /*istanbul ignore next*/COPError(message) {
	    /*istanbul ignore next*/(0, _classCallCheck3.default)(this, COPError);
	
	    this._msg = msg;
	  }
	
	  (0, _createClass3.default)(COPError, [{
	    key: 'toString',
	    value: function toString() {
	      return "COP ERROR: " + this._msg;
	    }
	  }]);
	  return COPError;
	}();
	
	/*istanbul ignore next*/var PartialLayerComposition = exports.PartialLayerComposition = function () {
	  function /*istanbul ignore next*/PartialLayerComposition(obj, prototypeObject, functionName, baseFunction, methodType) {
	    /*istanbul ignore next*/(0, _classCallCheck3.default)(this, PartialLayerComposition);
	
	    this._partialMethods = [baseFunction];
	    var layers = computeLayersFor(obj);
	    for (var i = 0; i < layers.length; i++) {
	      var layer = layers[i];
	      var partialMethod = lookupLayeredFunctionForObject(obj, layer, functionName, methodType);
	      if (partialMethod) {
	        this._partialMethods.push(partialMethod);
	      }
	    }
	    this._object = obj;
	    this._prototypeObject = prototypeObject;
	    this._functionName = functionName;
	  }
	
	  (0, _createClass3.default)(PartialLayerComposition, [{
	    key: 'object',
	    get: function get() {
	      return this._object;
	    }
	  }, {
	    key: 'partialMethods',
	    get: function get() {
	      return this._partialMethods;
	    }
	  }, {
	    key: 'functionName',
	    get: function get() {
	      return this._functionName;
	    }
	  }, {
	    key: 'prototypeObject',
	    get: function get() {
	      return this._prototypeObject;
	    }
	  }]);
	  return PartialLayerComposition;
	}();
	
	resetLayerStack();
	
	// vim: sw=2

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(91);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(92);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(72);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(5);
	module.exports = __webpack_require__(76).f('iterator');

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(95);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(99);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(91);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97);
	module.exports = __webpack_require__(18).Object.setPrototypeOf;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(16);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(98).set});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(24)
	  , anObject = __webpack_require__(23);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(19)(Function.call, __webpack_require__(85).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(101);
	var $Object = __webpack_require__(18).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(16)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(34)});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(104);
	module.exports = __webpack_require__(18).Object.values;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(16)
	  , $values = __webpack_require__(105)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(10)
	  , isEnum    = __webpack_require__(81).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(108);
	module.exports = __webpack_require__(18).Object.getPrototypeOf;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(50)
	  , $getPrototypeOf = __webpack_require__(49);
	
	__webpack_require__(109)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(16)
	  , core    = __webpack_require__(18)
	  , fails   = __webpack_require__(27);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(112);
	var $Object = __webpack_require__(18).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(109)('getOwnPropertyNames', function(){
	  return __webpack_require__(83).f;
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	var $Object = __webpack_require__(18).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(10)
	  , $getOwnPropertyDescriptor = __webpack_require__(85).f;
	
	__webpack_require__(109)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0MDlmM2FlYWQzZTkzZWY4NTNjYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zaXRlLXNjb3Blcy1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcHYyL2FjdGl2ZUV2ZW50VHJhY2tpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29wdjIvY29udGV4dGpzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcHYyL0xheWVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvdmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eURDckNTLE87Ozs7Ozs7Ozs7OztTQURHLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDNENZLE07Ozs7QUE1Q3hCLFVBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQixPQUExQixFQUFtQztBQUMvQixZQUFPLEtBQUssTUFBTCxDQUFZO0FBQUEsZ0JBQU8sQ0FBQyxRQUFRLElBQVIsQ0FBYTtBQUFBLG9CQUFRLFFBQVEsSUFBaEI7QUFBQSxVQUFiLENBQVI7QUFBQSxNQUFaLENBQVA7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Q0E7QUFDQSxFQUFDLEU7Ozs7OztBQ0hELG1CQUFrQix5RDs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFIiwiZmlsZSI6ImludGVudGlvbmFsLWphdmFzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImludGVudGlvbmFsLWphdmFzY3JpcHRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW50ZW50aW9uYWwtamF2YXNjcmlwdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbnRlbnRpb25hbC1qYXZhc2NyaXB0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0MDlmM2FlYWQzZTkzZWY4NTNjYVxuICoqLyIsImV4cG9ydCAqIGFzIGNvcCBmcm9tIFwiLi9jb3B2Mi9jb250ZXh0anMuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3RpZnkgfSBmcm9tICcuL2NvcHYyL2FjdGl2ZUV2ZW50VHJhY2tpbmcuanMnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb3NpdGUtc2NvcGVzLWFsbC5qc1xuICoqLyIsImZ1bmN0aW9uIGRpZmZlcmVuY2UobGlzdCwgd2l0aG91dCkge1xyXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKG9iaiA9PiAhd2l0aG91dC5zb21lKG9iajIgPT4gb2JqID09PSBvYmoyKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpZmYobmV3TGlzdCwgb2xkTGlzdCkge1xyXG4gICAgdmFyIGVudGVyZWRJdGVtcyA9IGRpZmZlcmVuY2UobmV3TGlzdCwgb2xkTGlzdCk7XHJcbiAgICB2YXIgdXBkYXRlZEl0ZW1zID0gZGlmZmVyZW5jZShuZXdMaXN0LCBlbnRlcmVkSXRlbXMpO1xyXG4gICAgdmFyIGV4aXRlZEl0ZW1zID0gZGlmZmVyZW5jZShvbGRMaXN0LCBuZXdMaXN0KTtcclxuXHJcbiAgICByZXR1cm4gW2VudGVyZWRJdGVtcywgdXBkYXRlZEl0ZW1zLCBleGl0ZWRJdGVtc107XHJcbn1cclxuXHJcbmNsYXNzIE5vdGlmaWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGV2ZW50VHlwZSwgc2VsZWN0b3IsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRUeXBlID0gZXZlbnRUeXBlO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLl91c2VDYXB0dXJlID0gdXNlQ2FwdHVyZTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRFbGVtZW50cyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBpbnN0YWxsIGdsb2JhbCBsaXN0ZW5lclxyXG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gKCkgPT4gdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCB0aGlzLl9nbG9iYWxMaXN0ZW5lciwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGUobmV3U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcikpIHtcclxuICAgICAgICBsZXQgb2xkU2VsZWN0aW9uID0gdGhpcy5fc2VsZWN0ZWRFbGVtZW50cztcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShuZXdTZWxlY3Rpb24pO1xyXG5cclxuICAgICAgICBsZXQgW25ld0l0ZW1zLCBfLCBvbGRJdGVtc10gPSBkaWZmKHRoaXMuX3NlbGVjdGVkRWxlbWVudHMsIG9sZFNlbGVjdGlvbik7XHJcblxyXG4gICAgICAgIG5ld0l0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCB0aGlzLl9jYWxsYmFjaywgdGhpcy5fdXNlQ2FwdHVyZSkpO1xyXG4gICAgICAgIG9sZEl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCB0aGlzLl9jYWxsYmFjaywgdGhpcy5fdXNlQ2FwdHVyZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuaW5zdGFsbCgpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIHRoaXMuX2dsb2JhbExpc3RlbmVyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl91cGRhdGUoW10pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZnkoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIG5ldyBOb3RpZmllciguLi5hcmdzKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb3B2Mi9hY3RpdmVFdmVudFRyYWNraW5nLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7IFxyXG5cclxuaW1wb3J0ICogYXMgY29wIGZyb20gXCIuL0xheWVycy5qc1wiO1xyXG5leHBvcnQgeyBwcm9jZWVkLCBMYXllciB9IGZyb20gXCIuL0xheWVycy5qc1wiO1xyXG5cclxuLy8gTGF5ZXIgQWN0aXZhdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aExheWVycyhsYXllcnMsIGZ1bmMpIHtcclxuICBjb3AuTGF5ZXJTdGFjay5wdXNoKHt3aXRoTGF5ZXJzOiBsYXllcnN9KTtcclxuICAvLyBjb25zb2xlLmxvZyhcImNhbGxlZTogXCIgKyB3aXRoTGF5ZXJzLmNhbGxlZSk7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBmdW5jKCk7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNvcC5MYXllclN0YWNrLnBvcCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRob3V0TGF5ZXJzKGxheWVycywgZnVuYykge1xyXG4gIGNvcC5MYXllclN0YWNrLnB1c2goe3dpdGhvdXRMYXllcnM6IGxheWVyc30pO1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZnVuYygpO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBjb3AuTGF5ZXJTdGFjay5wb3AoKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBMYXllciBjcmVhdGlvbiBieSBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXllciguLi5hcmdzKSB7XHJcbiAgbGV0IGxheWVyTmFtZSwgcm9vdENvbnRleHQ7XHJcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XHJcbiAgICBbcm9vdENvbnRleHQsIGxheWVyTmFtZV0gPSBhcmdzO1xyXG4gIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcclxuICAgIFtsYXllck5hbWVdID0gYXJncztcclxuICB9XHJcbiAgaWYgKHR5cGVvZiByb290Q29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBiYXNpY0NyZWF0ZShsYXllck5hbWUpO1xyXG4gIH1cclxuICB2YXIgcGFydHMgPSBsYXllck5hbWUuc3BsaXQoL1xcLi8pO1xyXG4gIHZhciBjb250ZXh0ID0gcm9vdENvbnRleHQ7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyArK2kpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0W3BhcnRzW2ldXTtcclxuICB9XHJcbiAgcmV0dXJuIGJhc2ljQ3JlYXRlKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdLCBjb250ZXh0KTtcclxufTtcclxuXHJcbi8vIFByaXZhdGUgaGVscGVyc1xyXG5mdW5jdGlvbiBiYXNpY0NyZWF0ZShsYXllck5hbWUsIGNvbnRleHQpIHtcclxuICBpZiAodHlwZW9mIGxheWVyTmFtZSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBsYXllck5hbWUgPSBTeW1ib2woJ0NPUCBMYXllcicpO1xyXG4gIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBjb250ZXh0ID0gY29wLkdsb2JhbE5hbWVkTGF5ZXJzO1xyXG4gIGlmICh0eXBlb2YgY29udGV4dFtsYXllck5hbWVdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgbGV0IGV4aXN0aW5nID0gY29udGV4dFtsYXllck5hbWVdO1xyXG4gICAgaWYgKCFleGlzdGluZy5pc0xheWVyIC8qIHVuZGVmaW5lZCBvciBmYWxzeSAqLyB8fCAhZXhpc3RpbmcuaXNMYXllcigpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2lsbCBub3Qgb3ZlcndyaXRlIGV4aXN0aW5nIHByb3BlcnR5ICcgKyBsYXllck5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4aXN0aW5nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gY29udGV4dFtsYXllck5hbWVdID0gbmV3IGNvcC5MYXllcihsYXllck5hbWUsIGNvbnRleHQpO1xyXG4gIH1cclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29wdjIvY29udGV4dGpzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuICoqIG1vZHVsZSBpZCA9IDg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4gKiogbW9kdWxlIGlkID0gODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAwOC0yMDExIEhhc3NvIFBsYXR0bmVyIEluc3RpdHV0ZVxyXG4gKlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuICogVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIFxyXG4gKiBQcml2YXRlIEhlbHBlcnMgZm9yIERldmVsb3BtZW50XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZyA9IHt9O1xyXG5Db25maWcuaWdub3JlRGVwcmVjYXRlZFByb2NlZWQgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGxldCBsb2dfbGF5ZXJfY29kZSA9IGZhbHNlO1xyXG5leHBvcnQgZnVuY3Rpb24gbG9nKHN0cmluZykge1xyXG4gIGlmIChsb2dfbGF5ZXJfY29kZSkgY29uc29sZS5sb2coc3RyaW5nKTtcclxufVxyXG5cclxuXHJcbi8qIFxyXG4gKiBQcml2YXRlIFN0YXRlXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2NlZWRTdGFjayA9IFtdO1xyXG5leHBvcnQgY29uc3QgR2xvYmFsTGF5ZXJzID0gW107XHJcbi8vIGhhY2ssIHRvIHdvcmsgYXJvdW5kIGFic2VuY2Ugb2YgaWRlbnRpdHkgZGljdGlvbmFyaWVzIGluIEphdmFTY3JpcHRcclxuLy8gd2UgY291bGQgcGVyaGFwcyBsaW1pdCBvdXJzZWxmcyB0byBsYXllciBvbmx5IHRob3NlIG9iamVjdHMgdGhhdCByZXNwb25kIHRvIG9iamVjdC5pZCgpXHJcbi8vIGJlY2F1c2Ugd29ya2luZyB3aXRoIG9iamVjdHMgaXMgYSBzZXJpYWxpemF0aW9uIHByb2JsZW0gaW4gaXRzZWxmLCBwZXJoYXBzIHdlIHNob3VsZFxyXG4vLyByZXN0cmljdCBvdXJzZWxmIGluIHdvcmtpbmcgd2l0aCBjbGFzc2VzXHJcbi8vIFNvIGNsYXNzZXMgaGF2ZSBuYW1lcyBhbmQgbmFtZXMgY2FuIGJlIHVzZWQgYXMga2V5cyBpbiBkaWN0aW9uYXJpZXMgOi0pXHJcbmxldCBvYmplY3RfaWRfY291bnRlciA9IDA7XHJcblxyXG4vKiBcclxuICogUHJpdmF0ZSBNZXRob2RzXHJcbiAqL1xyXG5cclxuLy8gZm9yIGRlYnVnZ2luZyBDb250ZXh0SlMgaXRzZWxmXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRoTG9nTGF5ZXJDb2RlKGZ1bmMpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIG9sZCA9IGxvZ19sYXllcl9jb2RlO1xyXG4gICAgbG9nX2xheWVyX2NvZGUgPSB0cnVlO1xyXG4gICAgZnVuYygpO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBsb2dfbGF5ZXJfY29kZSA9IG9sZDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBMYXllck9iamVjdElEID0gU3ltYm9sKFwibGF5ZXJPYmplY3RJRFwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXllckRlZmluaXRpb25Gb3JPYmplY3QobGF5ZXIsIG9iamVjdCkge1xyXG4gIC8vIGxvZyhcImNvcCBnZXRMYXllckRlZmluaXRpb25Gb3JPYmplY3QoXCIgKyBsYXllciArIFwiLCBcIiArIG9iamVjdCArIFwiKVwiKTtcclxuICBpZiAoIWxheWVyIHx8ICFvYmplY3QpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdmFyIHJlc3VsdCA9IGxheWVyW29iamVjdFtMYXllck9iamVjdElEXV07XHJcbiAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdCA6IGdldExheWVyRGVmaW5pdGlvbkZvck9iamVjdChsYXllciwgb2JqZWN0LnByb3RvdHlwZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogU3RvcmVzIHBhcnRpYWwgZGVmaW5pdGlvbnMgZm9yIGEgc2luZ2xlIGxheWVyZWQgb2JqZWN0IGFuZCBsYXllci5cclxuICovXHJcbmNsYXNzIFBhcnRpYWxMYXllciB7XHJcbiAgY29uc3RydWN0b3IobGF5ZXJlZE9iamVjdCkge1xyXG4gICAgdGhpcy5sYXllcmVkT2JqZWN0ID0gbGF5ZXJlZE9iamVjdDtcclxuICAgIHRoaXMubGF5ZXJlZFByb3BlcnRpZXMgPSB7fTtcclxuICB9XHJcblxyXG4gIHNldExheWVyZWRQcm9wZXJ0eVZhbHVlKG5hbWUsIHZhbHVlKSB7XHJcbiAgICB0aGlzLmxheWVyZWRQcm9wZXJ0aWVzW25hbWVdID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVHZXR0ZXIocHJvcGVydHlOYW1lLCBnZXR0ZXIpIHtcclxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5sYXllcmVkUHJvcGVydGllcywgcHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXQ6IGdldHRlciwgY29uZmlndXJhYmxlOiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVTZXR0ZXIocHJvcGVydHlOYW1lLCBzZXR0ZXIpIHtcclxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5sYXllcmVkUHJvcGVydGllcywgcHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXQ6IHNldHRlciwgY29uZmlndXJhYmxlOiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBnZXR0ZXJNZXRob2QocHJvcGVydHlOYW1lKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLmxheWVyZWRQcm9wZXJ0aWVzLCBwcm9wZXJ0eU5hbWUpLmdldDtcclxuICB9XHJcblxyXG4gIHNldHRlck1ldGhvZChwcm9wZXJ0eU5hbWUpIHtcclxuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMubGF5ZXJlZFByb3BlcnRpZXMsIHByb3BlcnR5TmFtZSkuc2V0O1xyXG4gIH1cclxuXHJcbiAgcHJvcGVydHkocHJvcGVydHlOYW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXllcmVkUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxheWVyZWRQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWluc3RhbGwoKSB7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmxheWVyZWRQcm9wZXJ0aWVzKS5mb3JFYWNoKGVhY2hQcm9wZXJ0eSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLmxheWVyZWRQcm9wZXJ0aWVzLCBlYWNoUHJvcGVydHkpO1xyXG4gICAgICBpZiAodHlwZW9mIHByb3BlcnR5LmdldCAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHByb3BlcnR5LnNldCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtYWtlUHJvcGVydHlMYXllckF3YXJlKHRoaXMubGF5ZXJlZE9iamVjdCwgZWFjaFByb3BlcnR5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtYWtlRnVuY3Rpb25MYXllckF3YXJlKHRoaXMubGF5ZXJlZE9iamVjdCwgZWFjaFByb3BlcnR5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlUGFydGlhbExheWVyKGxheWVyLCBvYmplY3QpIHtcclxuICBpZiAoIWxheWVyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbiBlbnN1cmVQYXJ0aWFsTGF5ZXI6IGxheWVyIGlzIG5pbFwiKTtcclxuICB9XHJcbiAgaWYgKCFvYmplY3QuaGFzT3duUHJvcGVydHkoTGF5ZXJPYmplY3RJRCkpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIExheWVyT2JqZWN0SUQsIHtcclxuICAgICAgdmFsdWU6IG9iamVjdF9pZF9jb3VudGVyKyssXHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICB3cml0YWJsZTogZmFsc2VcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoIWxheWVyW29iamVjdFtMYXllck9iamVjdElEXV0pIHtcclxuICAgIGxheWVyW29iamVjdFtMYXllck9iamVjdElEXV0gPSBuZXcgUGFydGlhbExheWVyKG9iamVjdCk7XHJcbiAgfVxyXG4gIHJldHVybiBsYXllcltvYmplY3RbTGF5ZXJPYmplY3RJRF1dO1xyXG59O1xyXG5cclxuLy8gVE9ETyhtYXJpYW5uZXQpIDogRmluZCBvdXQgaWYgRVM2IGNvbnN0cnVjdG9yIGFsc28gaGFzIHR5cGVcclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyTWV0aG9kKGxheWVyLCBvYmplY3QsIHByb3BlcnR5LCBmdW5jKSB7XHJcbiAgZW5zdXJlUGFydGlhbExheWVyKGxheWVyLCBvYmplY3QpLnNldExheWVyZWRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5LCBmdW5jKTtcclxuICBmdW5jLmRpc3BsYXlOYW1lID0gXCJsYXllcmVkIFwiICsgU3RyaW5nKGxheWVyLm5hbWUpICsgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICsgKG9iamVjdC5jb25zdHJ1Y3RvciA/IChvYmplY3QuY29uc3RydWN0b3IudHlwZSArIFwiJFwiKSA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICArIHByb3BlcnR5O1xyXG4gIG1ha2VGdW5jdGlvbkxheWVyQXdhcmUob2JqZWN0LCBwcm9wZXJ0eSwgbGF5ZXIuaXNIaWRkZW4pO1xyXG4gIFxyXG4gIC8vIEJvb2trZWVwaW5nIGZvciBsYXllciB1bmluc3RhbGxcclxuICAvLyB0eXBlb2Ygb2JqZWN0LmdldE5hbWUgPT09ICdmdW5jdGlvbidcclxuICAvLyAgICAmJiAobGF5ZXIuX2xheWVyZWRGdW5jdGlvbnNMaXN0W29iamVjdF1bcHJvcGVydHldID0gdHJ1ZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsYXllckdldHRlck1ldGhvZChsYXllciwgb2JqZWN0LCBwcm9wZXJ0eSwgZ2V0dGVyKSB7XHJcbiAgZW5zdXJlUGFydGlhbExheWVyKGxheWVyLCBvYmplY3QpLmRlZmluZUdldHRlcihwcm9wZXJ0eSwgZ2V0dGVyKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxheWVyU2V0dGVyTWV0aG9kKGxheWVyLCBvYmplY3QsIHByb3BlcnR5LCBzZXR0ZXIpIHtcclxuICBlbnN1cmVQYXJ0aWFsTGF5ZXIobGF5ZXIsIG9iamVjdCkuZGVmaW5lU2V0dGVyKHByb3BlcnR5LCBzZXR0ZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyUHJvcGVydHkobGF5ZXIsIG9iamVjdCwgcHJvcGVydHksIGRlZnMpIHtcclxuICB2YXIgZGVmUHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZnMsIHByb3BlcnR5KTtcclxuICB2YXIgZ2V0dGVyID0gZGVmUHJvcGVydHkgJiYgZGVmUHJvcGVydHkuZ2V0O1xyXG4gIGlmIChnZXR0ZXIpIHtcclxuICAgIGxheWVyR2V0dGVyTWV0aG9kKGxheWVyLCBvYmplY3QsIHByb3BlcnR5LCBnZXR0ZXIpO1xyXG4gIH1cclxuICB2YXIgc2V0dGVyID0gZGVmUHJvcGVydHkgJiYgZGVmUHJvcGVydHkuc2V0O1xyXG4gIGlmIChzZXR0ZXIpIHtcclxuICAgIGxheWVyU2V0dGVyTWV0aG9kKGxheWVyLCBvYmplY3QsIHByb3BlcnR5LCBzZXR0ZXIpO1xyXG4gIH1cclxuICBpZiAoZ2V0dGVyIHx8IHNldHRlcikge1xyXG4gICAgbWFrZVByb3BlcnR5TGF5ZXJBd2FyZShvYmplY3QsIHByb3BlcnR5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGF5ZXJNZXRob2QobGF5ZXIsIG9iamVjdCwgcHJvcGVydHksIGRlZnNbcHJvcGVydHldKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJQcm9wZXJ0eVdpdGhTaGFkb3cobGF5ZXIsIG9iamVjdCwgcHJvcGVydHkpIHtcclxuICAvLyBzaGFkb3dpbmcgZG9lcyBub3Qgd29yayB3aXRoIGN1cnJlbnQgaW1wbGVtZW50YXRpb25cclxuICAvLyBzZWUgdGhlIHNoYWRvdyB0ZXN0cyBpbiBMYXllcnNUZXN0XHJcbiAgdmFyIGRlZnMgPSB7fTtcclxuICB2YXIgYmFzZVZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcclxuICB2YXIgbGF5ZXJlZFByb3BOYW1lID0gXCJfbGF5ZXJlZF9cIiArIGxheWVyLm5hbWUgKyBcIl9cIiArIHByb3BlcnR5O1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZWZzLCBwcm9wZXJ0eSwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiBsYXllcmVkR2V0dGVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpc1tsYXllcmVkUHJvcE5hbWVdID09PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgcHJvY2VlZCgpIDogdGhpc1tsYXllcmVkUHJvcE5hbWVdO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gbGF5ZXJlZFNldHRlcih2KSB7XHJcbiAgICAgIHRoaXNbbGF5ZXJlZFByb3BOYW1lXSA9IHY7XHJcbiAgICB9LFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgfSk7XHJcbiAgbGF5ZXJQcm9wZXJ0eShsYXllciwgb2JqZWN0LCBwcm9wZXJ0eSwgZGVmcyk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUxheWVyc0ZvcihvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5hY3RpdmVMYXllcnMgP1xyXG4gICAgICBvYmouYWN0aXZlTGF5ZXJzKGN1cnJlbnRMYXllcnMpIDogY3VycmVudExheWVycygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VMYXllcnMoc3RhY2spIHtcclxuICB2YXIgcmVzdWx0ID0gR2xvYmFsTGF5ZXJzLnNsaWNlKDApO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjdXJyZW50ID0gc3RhY2tbaV07XHJcbiAgICBpZiAoY3VycmVudC53aXRoTGF5ZXJzKSB7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIobCA9PiAhY3VycmVudC53aXRoTGF5ZXJzLmluY2x1ZGVzKGwpKS5jb25jYXQoY3VycmVudC53aXRoTGF5ZXJzKTtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudC53aXRob3V0TGF5ZXJzKSB7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIobCA9PiAhY3VycmVudC53aXRob3V0TGF5ZXJzLmluY2x1ZGVzKGwpKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgTGF5ZXJTdGFjaztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldExheWVyU3RhY2soKSB7XHJcbiAgTGF5ZXJTdGFjayA9IFt7XHJcbiAgICBpc1N0YXRpYzogdHJ1ZSxcclxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHsgcmV0dXJuIFwiQmFzZUxheWVyXCI7IH0sXHJcbiAgICBjb21wb3NpdGlvbjogbnVsbFxyXG4gIH1dO1xyXG4gIGludmFsaWRhdGVMYXllckNvbXBvc2l0aW9uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudExheWVycygpIHtcclxuICBpZiAoTGF5ZXJTdGFjay5sZW5ndGggPT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGRlZmF1bHQgbGF5ZXIgaXMgbWlzc2luZ1wiKTtcclxuICB9XHJcbiAgLy8gTk9OIE9QVElNSVpFRCBWRVJTSU9OIEZPUiBTVEFURSBCQVNFRCBMQVlFUiBBQ1RJVkFUSU9OXHJcbiAgdmFyIGN1cnJlbnQgPSBMYXllclN0YWNrW0xheWVyU3RhY2subGVuZ3RoIC0gMV07XHJcbiAgaWYgKCFjdXJyZW50LmNvbXBvc2l0aW9uKSB7XHJcbiAgICBjdXJyZW50LmNvbXBvc2l0aW9uID0gY29tcG9zZUxheWVycyhMYXllclN0YWNrKTtcclxuICB9XHJcbiAgcmV0dXJuIGN1cnJlbnQuY29tcG9zaXRpb247XHJcbn07XHJcblxyXG4vLyBjbGVhciBjYWNoZWQgbGF5ZXIgY29tcG9zaXRpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlTGF5ZXJDb21wb3NpdGlvbigpIHtcclxuICBMYXllclN0YWNrLmZvckVhY2goXHJcbiAgICBmdW5jdGlvbihlYSkge1xyXG4gICAgICBlYS5jb21wb3NpdGlvbiA9IG51bGw7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBMYXllcmVkRnVuY3Rpb25Gb3JPYmplY3QoXHJcbiAgICBzZWxmLCBsYXllciwgZnVuY3Rpb25fbmFtZSwgbWV0aG9kVHlwZSwgbikge1xyXG4gIGlmICghbGF5ZXIpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7IFxyXG4gIH1cclxuICAvLyB3ZSBoYXZlIHRvIGxvb2sgZm9yIGxheWVyIGRlZmludGlvbnMgaW4gc2VsZiwgc2VsZi5wcm90b3R5cGUsXHJcbiAgLy8gLi4uIHRoZXJlIG1heSBiZSBsYXllcmVkIG1ldGhvZHMgaW4gYSBzdWJjbGFzcyBvZiBcIm9ialwiXHJcbiAgbGV0IHBhcnRpYWxGdW5jdGlvbjtcclxuICBjb25zdCBwYXJ0aWFsTGF5ZXJGb3JPYmplY3QgPSBnZXRMYXllckRlZmluaXRpb25Gb3JPYmplY3QobGF5ZXIsIHNlbGYpO1xyXG4gIGlmIChwYXJ0aWFsTGF5ZXJGb3JPYmplY3QpIHtcclxuICAgIC8vIGxvZyhcIiAgZm91bmQgbGF5ZXIgZGVmaW5pdGlvbnMgZm9yIG9iamVjdFwiKTtcclxuICAgIGlmIChtZXRob2RUeXBlID09ICdnZXR0ZXInKSB7XHJcbiAgICAgIHBhcnRpYWxGdW5jdGlvbiA9IHBhcnRpYWxMYXllckZvck9iamVjdC5nZXR0ZXJNZXRob2QoZnVuY3Rpb25fbmFtZSk7XHJcbiAgICB9IGVsc2UgaWYgKG1ldGhvZFR5cGUgPT0gJ3NldHRlcicpe1xyXG4gICAgICBwYXJ0aWFsRnVuY3Rpb24gPSBwYXJ0aWFsTGF5ZXJGb3JPYmplY3Quc2V0dGVyTWV0aG9kKGZ1bmN0aW9uX25hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFydGlhbEZ1bmN0aW9uID0gcGFydGlhbExheWVyRm9yT2JqZWN0LnByb3BlcnR5KGZ1bmN0aW9uX25hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIXBhcnRpYWxGdW5jdGlvbikge1xyXG4gICAgLy8gdHJ5IHRoZSBzdXBlcmNsYXNzIGhpZXJhY2h5XHJcbiAgICAvLyBsb2coXCJsb29rIGZvciBzdXBlcmNsYXNzIG9mOiBcIiArIHNlbGYuY29uc3RydWN0b3IpXHJcbiAgICBjb25zdCBzdXBlcmNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHNlbGYpO1xyXG4gICAgaWYgKHN1cGVyY2xhc3MpIHtcclxuICAgICAgLy8gbG9nKFwibGF5ZXJlZCBmdW5jdGlvbiBpcyBub3QgZm91bmRcclxuICAgICAgLy9pbiB0aGlzIHBhcnRpYWwgbWV0aG9kLCBsb29rdXAgZm9yIG15IHByb3RvdHlwZT9cIilcclxuICAgICAgcmV0dXJuIGxvb2t1cExheWVyZWRGdW5jdGlvbkZvck9iamVjdChcclxuICAgICAgICAgIHN1cGVyY2xhc3MsIGxheWVyLCBmdW5jdGlvbl9uYW1lLCBtZXRob2RUeXBlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhcnRpYWxGdW5jdGlvbjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHB2dE1ha2VGdW5jdGlvbk9yUHJvcGVydHlMYXllckF3YXJlKG9iaiwgc2xvdE5hbWUsIGJhc2VWYWx1ZSwgdHlwZSwgaXNIaWRkZW4pIHtcclxuICAvLyBpbnN0YWxsIGluIG9ialtzbG90TmFtZV0gYSBjb3Agd3JhcHBlciB0aGF0IHdlYXZlcyBwYXJ0aWFsIG1ldGhvZHNcclxuICAvLyBpbnRvIHJlYWwgbWV0aG9kIChiYXNlVmFsdWUpXHJcbiAgaWYgKGJhc2VWYWx1ZS5pc0xheWVyQXdhcmUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbWFrZVNsb3RMYXllckF3YXJlV2l0aE5vcm1hbExvb2t1cChvYmosIHNsb3ROYW1lLCBiYXNlVmFsdWUsIHR5cGUsIGlzSGlkZGVuKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VTbG90TGF5ZXJBd2FyZVdpdGhOb3JtYWxMb29rdXAoXHJcbiAgICBvYmosIHNsb3ROYW1lLCBiYXNlVmFsdWUsIHR5cGUsIGlzSGlkZGVuKSB7XHJcbiAgdmFyIHdyYXBwZWRfZnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjb21wb3NpdGlvbiA9XHJcbiAgICAgICAgbmV3IFBhcnRpYWxMYXllckNvbXBvc2l0aW9uKHRoaXMsIG9iaiwgc2xvdE5hbWUsIGJhc2VWYWx1ZSwgdHlwZSk7XHJcbiAgICBwcm9jZWVkU3RhY2sucHVzaChjb21wb3NpdGlvbik7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gcHJvY2VlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgcHJvY2VlZFN0YWNrLnBvcCgpXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgd3JhcHBlZF9mdW5jdGlvbi5pc0xheWVyQXdhcmUgPSB0cnVlO1xyXG4gIC8vIHRoaXMgaXMgbW9yZSBkZWNsYXJhdGl2ZSBvdXRzaWRlIG9mIENPUCBjb250ZXh0XHJcbiAgd3JhcHBlZF9mdW5jdGlvbi5pc0NvbnRleHRKU1dyYXBwZXIgPSB0cnVlO1xyXG4gIGlmIChpc0hpZGRlbikge1xyXG4gICAgd3JhcHBlZF9mdW5jdGlvbi50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JpZ2luYWwoKS50b1N0cmluZygpXHJcbiAgICB9O1xyXG4gIH1cclxuICAvLyBGb3Igd3JhcHBlZF9mdW5jdGlvbi5nZXRPcmlnaW5hbCgpXHJcbiAgd3JhcHBlZF9mdW5jdGlvbi5vcmlnaW5hbEZ1bmN0aW9uID0gYmFzZVZhbHVlO1xyXG4gIGlmICh0eXBlID09IFwiZ2V0dGVyXCIpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHNsb3ROYW1lLCB7Z2V0OiB3cmFwcGVkX2Z1bmN0aW9ufSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09IFwic2V0dGVyXCIpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHNsb3ROYW1lLCB7c2V0OiB3cmFwcGVkX2Z1bmN0aW9ufSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9ialtzbG90TmFtZV0gPSB3cmFwcGVkX2Z1bmN0aW9uO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VGdW5jdGlvbkxheWVyQXdhcmUoYmFzZV9vYmosIGZ1bmN0aW9uX25hbWUsIGlzSGlkZGVuKSB7XHJcbiAgaWYgKCFiYXNlX29iaikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY2FuJ3QgbGF5ZXIgYW4gbm9uIGV4aXN0ZW50IG9iamVjdFwiKTtcclxuICB9XHJcbiAgLyogZW5zdXJlIGJhc2UgZnVuY3Rpb24gKi9cclxuICB2YXIgYmFzZV9mdW5jdGlvbiA9IGJhc2Vfb2JqW2Z1bmN0aW9uX25hbWVdO1xyXG4gIGlmICghYmFzZV9mdW5jdGlvbikge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJXQVJOSU5HIGNhbid0IGxheWVyIGFuIG5vbiBleGlzdGVudCBmdW5jdGlvblwiICsgZnVuY3Rpb25fbmFtZSArXHJcbiAgICAvLyBcIiAsIHNvIGRvIG5vdGhpbmdcIilcclxuICAgIC8vIHJldHVybjtcclxuICAgIGJhc2VfZnVuY3Rpb24gPSAoKSA9PiBudWxsO1xyXG4gIH07XHJcbiAgcHZ0TWFrZUZ1bmN0aW9uT3JQcm9wZXJ0eUxheWVyQXdhcmUoYmFzZV9vYmosIGZ1bmN0aW9uX25hbWUsIGJhc2VfZnVuY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLCBpc0hpZGRlbilcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VQcm9wZXJ0eUxheWVyQXdhcmUoYmFzZU9iaiwgcHJvcGVydHkpIHtcclxuICBpZiAoIWJhc2VPYmopIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcImNhbid0IGxheWVyIGEgbm9uIGV4aXN0ZW50IG9iamVjdFwiKTtcclxuICB9ICBcclxuICAvLyBlbnN1cmUgYmFzZSBnZXR0ZXIgYW5kIHNldHRlclxyXG4gIHZhciBiYXNlT2JqUHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2VPYmosIHByb3BlcnR5KTtcclxuICB2YXIgcHJvcE5hbWUgPSBcIl9fbGF5ZXJlZF9cIiArIHByb3BlcnR5ICsgXCJfX1wiO1xyXG4gIHZhciBnZXR0ZXIgPSBiYXNlT2JqUHJvcGVydHkgJiYgYmFzZU9ialByb3BlcnR5LmdldDtcclxuICBpZiAoIWdldHRlcikge1xyXG4gICAgLy8gZG9lcyBub3Qgd29yayB3aGVuIGRlYWxpbmcgd2l0aCBjbGFzc2VzIGFuZCBpbnN0YW5jZXMuLi5cclxuICAgIGJhc2VPYmpbcHJvcE5hbWVdID0gYmFzZU9ialtwcm9wZXJ0eV07IC8vIHRha2Ugb3ZlciBvbGQgdmFsdWVcclxuICAgIGdldHRlciA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpc1twcm9wTmFtZV0gfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiYXNlT2JqLCBwcm9wZXJ0eSwge2dldDogZ2V0dGVyLCBjb25maWd1cmFibGU6IHRydWV9KTtcclxuICB9O1xyXG4gIHZhciBzZXR0ZXIgPSBiYXNlT2JqUHJvcGVydHkgJiYgYmFzZU9ialByb3BlcnR5LnNldDtcclxuICBpZiAoIXNldHRlcikge1xyXG4gICAgc2V0dGVyID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHRoaXNbcHJvcE5hbWVdID0gdmFsdWUgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiYXNlT2JqLCBwcm9wZXJ0eSwge3NldDogc2V0dGVyLCBjb25maWd1cmFibGU6IHRydWV9KTtcclxuICB9O1xyXG4gIHB2dE1ha2VGdW5jdGlvbk9yUHJvcGVydHlMYXllckF3YXJlKGJhc2VPYmosIHByb3BlcnR5LCBnZXR0ZXIsICdnZXR0ZXInKTtcclxuICBwdnRNYWtlRnVuY3Rpb25PclByb3BlcnR5TGF5ZXJBd2FyZShiYXNlT2JqLCBwcm9wZXJ0eSwgc2V0dGVyLCAnc2V0dGVyJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWtlRnVuY3Rpb25MYXllclVuYXdhcmUoYmFzZV9vYmosIGZ1bmN0aW9uX25hbWUpIHtcclxuICBpZiAoIWJhc2Vfb2JqKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJuZWVkIG9iamVjdCB0byBtYWtlRnVuY3Rpb25MYXllclVuYXdhcmVcIik7XHJcbiAgfVxyXG4gIHZhciBwcmV2RnVuY3Rpb247XHJcbiAgdmFyIGN1cnJlbnRGdW5jdGlvbiA9IGJhc2Vfb2JqW2Z1bmN0aW9uX25hbWVdO1xyXG4gIGlmIChjdXJyZW50RnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuOyAvLyBub3RoaW5nIHRvIGRvIGhlcmVcclxuICB9ICBcclxuICB3aGlsZSAodHlwZW9mIGN1cnJlbnRGdW5jdGlvbi5vcmlnaW5hbEZ1bmN0aW9uID09ICdmdW5jdGlvbidcclxuICAgICAgJiYgIWN1cnJlbnRGdW5jdGlvbi5pc0xheWVyQXdhcmUpIHtcclxuICAgIHZhciBwcmV2RnVuY3Rpb24gPSBjdXJyZW50RnVuY3Rpb247XHJcbiAgICBjdXJyZW50RnVuY3Rpb24gPSBjdXJyZW50RnVuY3Rpb24ub3JpZ2luYWxGdW5jdGlvblxyXG4gIH1cclxuICBpZiAoIShjdXJyZW50RnVuY3Rpb24uaXNMYXllckF3YXJlKSkge1xyXG4gICAgcmV0dXJuOyAvLyBub3RoaW5nIHRvIGRvIGhlcmVcclxuICB9XHJcbiAgdmFyIG9yaWdpbmFsRnVuY3Rpb24gPSBjdXJyZW50RnVuY3Rpb24ub3JpZ2luYWxGdW5jdGlvblxyXG4gIGlmICghKG9yaWdpbmFsRnVuY3Rpb24gaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIm1ha2VGdW5jdGlvbkxheWVyVW5hd2FyZSBFcnJvcjogbm8gb3JpZ25hbCBmdW5jdGlvblwiKTtcclxuICB9XHJcbiAgaWYgKHByZXZGdW5jdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICBwcmV2RnVuY3Rpb24ub3JpZ2luYWxGdW5jdGlvbiA9IG9yaWdpbmFsRnVuY3Rpb25cclxuICB9IGVsc2Uge1xyXG4gICAgYmFzZV9vYmpbZnVuY3Rpb25fbmFtZV0gPSBvcmlnaW5hbEZ1bmN0aW9uXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaW5zdGFsbExheWVyc0luT2JqZWN0KG9iamVjdCkge1xyXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCkuZm9yRWFjaChlYSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdFtlYV0gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgIG1ha2VGdW5jdGlvbkxheWVyVW5hd2FyZShvYmplY3QsIGVhKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmluc3RhbGxMYXllcnNJbkFsbENsYXNzZXMoKSB7XHJcbiAgR2xvYmFsLmNsYXNzZXModHJ1ZSkuZm9yRWFjaChcclxuICAgIGZ1bmN0aW9uKGVhKSB7XHJcbiAgICAgIHVuaW5zdGFsbExheWVyc0luT2JqZWN0KGVhLnByb3RvdHlwZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxMYXllcnMob3B0T2JqZWN0ID0gR2xvYmFsKSB7XHJcbiAgLy8gZG9lcyBub3QgcmVhbGx5IHJldHVybiBhbGwgbGF5ZXJzLi4uIGxheWVycyBpbiBuYW1lcHNhY2VzIGFyZSBub3QgZm91bmQhXHJcbiAgLy8gdGhlcmVmb3JlIHlvdSBjYW4gcXVlcnkgYWxsIGxheWVycyBpbiBhbiBvcHRPYmplY3RcclxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvcHRPYmplY3QpLnNlbGVjdChcclxuICAgIGZ1bmN0aW9uKGVhKSB7XHJcbiAgICAgIHJldHVybiBlYSBpbnN0YW5jZW9mIExheWVyO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKiBcclxuICogUFVCTElDIENPUCBMYXllciBEZWZpbml0aW9uXHJcbiAqL1xyXG5cclxudmFyIGdsb2JhbENvbnRleHRGb3JOYW1lZExheWVycyA9IHt9O1xyXG5cclxuZXhwb3J0IHsgZ2xvYmFsQ29udGV4dEZvck5hbWVkTGF5ZXJzIGFzIEdsb2JhbE5hbWVkTGF5ZXJzIH07XHJcblxyXG4vLyBHbG9hYmwgTGF5ZXIgQWN0aXZhdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTGF5ZXIobGF5ZXIpIHtcclxuICBpZiAoR2xvYmFsTGF5ZXJzLmluZGV4T2YobGF5ZXIpICE9PSAtMSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBHbG9iYWxMYXllcnMucHVzaChsYXllcik7XHJcbiAgaW52YWxpZGF0ZUxheWVyQ29tcG9zaXRpb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlTGF5ZXIobGF5ZXIpIHtcclxuICB2YXIgaWR4ID0gR2xvYmFsTGF5ZXJzLmluZGV4T2YobGF5ZXIpO1xyXG4gIGlmIChpZHggPCAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIEdsb2JhbExheWVycy5zcGxpY2UoaWR4LCAxKTtcclxuICBpbnZhbGlkYXRlTGF5ZXJDb21wb3NpdGlvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZWQoLyogYXJndW1lbnRzICovKSB7XHJcbiAgLy8gQ09QIFByb2NlZWQgRnVuY3Rpb25cclxuICB2YXIgY29tcG9zaXRpb24gPSBwcm9jZWVkU3RhY2tbcHJvY2VlZFN0YWNrLmxlbmd0aCAtIDFdO1xyXG4gIGlmICghY29tcG9zaXRpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKCdDb250ZXh0SlM6IG5vIGNvbXBvc2l0aW9uIHRvIHByb2NlZWQgKHN0YWNrIGlzIGVtcHR5KSAnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gVE9ETyB1c2UgaW5kZXggaW5zdGVhZCBvZiBzaGlmaXRpbmc/XHJcbiAgaWYgKGNvbXBvc2l0aW9uLnBhcnRpYWxNZXRob2RJbmRleCA9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbXBvc2l0aW9uLnBhcnRpYWxNZXRob2RJbmRleCA9IGNvbXBvc2l0aW9uLnBhcnRpYWxNZXRob2RzLmxlbmd0aCAtIDE7XHJcbiAgfSAgXHJcbiAgdmFyIGluZGV4ID0gY29tcG9zaXRpb24ucGFydGlhbE1ldGhvZEluZGV4O1xyXG4gIHZhciBwYXJ0aWFsTWV0aG9kID0gY29tcG9zaXRpb24ucGFydGlhbE1ldGhvZHNbaW5kZXhdO1xyXG4gIGlmICghcGFydGlhbE1ldGhvZCkge1xyXG4gICAgaWYgKCFwYXJ0aWFsTWV0aG9kKSB7XHJcbiAgICAgIHRocm93IG5ldyBDT1BFcnJvcignbm8gcGFydGlhbE1ldGhvZCB0byBwcm9jZWVkJyk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbXBvc2l0aW9uLnBhcnRpYWxNZXRob2RJbmRleCA9IGluZGV4IC0gMTtcclxuICAgICAgaWYgKCFDb25maWcuaWdub3JlRGVwcmVjYXRlZFByb2NlZWRcclxuICAgICAgICAgICYmIHBhcnRpYWxNZXRob2QudG9TdHJpbmcoKS5tYXRjaCgvXltcXHQgXSpmdW5jdGlvbiA/XFwoXFwkP3Byb2NlZWQvKSkge1xyXG4gICAgICAgIHZhciBhcmdzID0gJEEoYXJndW1lbnRzKTtcclxuICAgICAgICBhcmdzLnVuc2hpZnQocHJvY2VlZCk7XHJcbiAgICAgICAgdmFyIG1zZyA9IFwicHJvY2VlZCBpbiBhcmd1bWVudHMgbGlzdCBpbiBcIiArIGNvbXBvc2l0aW9uLmZ1bmN0aW9uTmFtZSgpO1xyXG4gICAgICAgIGlmIChDb25maWcudGhyb3dFcnJvck9uRGVwcmVjYXRlZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiREVQUkVDQVRFRCBFUlJPUjogXCIgKyBtc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQ29uZmlnLmxvZ0RlcHJlY2F0ZWQpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic291cmNlOiBcIiArIHBhcnRpYWxNZXRob2QudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRFUFJFQ0FURUQgV0FSTklORzogXCIgKyBtc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gcGFydGlhbE1ldGhvZC5hcHBseShjb21wb3NpdGlvbi5vYmplY3QsIGFyZ3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBwYXJ0aWFsTWV0aG9kLmFwcGx5KGNvbXBvc2l0aW9uLm9iamVjdCwgYXJndW1lbnRzKTtcclxuICAgICAgfVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgY29tcG9zaXRpb24ucGFydGlhbE1ldGhvZEluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufTtcclxuXHJcbi8qIFxyXG4gKiBMYXllciBDbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExheWVyIHtcclxuICBjb25zdHJ1Y3RvciAobmFtZSwgY29udGV4dCkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcclxuICAgIC8vIHRoaXMuX2xheWVyZWRGdW5jdGlvbnNMaXN0ID0ge307XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFjY2Vzc2luZ1xyXG4gIGdldCBuYW1lICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuICBmdWxsTmFtZSAoKSB7XHJcbiAgICByZXR1cm4gJycgKyB0aGlzLl9jb250ZXh0ICsgJy4nICsgdGhpcy5fbmFtZTtcclxuICB9XHJcbiAgbGF5ZXJlZE9iamVjdHMgKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpXHJcbiAgICAgIC5tYXAoZWEgPT4gdGhpc1tlYV0gJiYgdGhpc1tlYV0uX2xheWVyZWRfb2JqZWN0KVxyXG4gICAgICAuZmlsdGVyKGVhID0+IGVhKTsgLy8gZmlsdGVycyBmYWxzeSB0aGluZ3NcclxuICB9XHJcbiAgLy8gVE9ETzogZG9lc24ndCBkaWZmZXJlbnRpYXRlIGJldHdlZW4gZnVuY3Rpb25zIGFuZCBjbGFzc2VzIC0gbmVjZXNzYXJ5P1xyXG4gIGxheWVyZWRDbGFzc2VzICgpIHtcclxuICAgIHJldHVybiB0aGlzLmxheWVyZWRPYmplY3RzKCkubWFwKGVhID0+IGVhLmNvbnN0cnVjdG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gUmVtb3ZpbmdcclxuICByZW1vdmUgKCkge1xyXG4gICAgLy8gRGVsZXRlcyB0aGUgTGF5ZXJDbGFzcywgYnV0IGtlZXBzIHRoZSBsYXllcmVkIEZ1bmN0aW9ucy5cclxuICAgIGlmICh0aGlzLmlzR2xvYmFsKCkpIHtcclxuICAgICAgdGhpcy5iZU5vdEdsb2JhbCgpO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgZGVsZXRlIGNvbnRleHRbdGhpcy5uYW1lXTtcclxuICB9XHJcbiAgdW5pbnN0YWxsICgpIHtcclxuICAgIC8vIFVuaW5zdGFsbHMganVzdCB0aGlzIExheWVyLlxyXG4gICAgLy8gZnVuY3Rpb25zIHRoYXQgYXJlIGxheWVyZWQgYnkgb3RoZXIgTGF5ZXJzIHdpbGwgbm90IGJlIHJlc2V0LlxyXG4gICAgdmFyIGxheWVyID0gdGhpcztcclxuICAgIHRoaXMubGF5ZXJlZE9iamVjdHMoKS5mb3JFYWNoKFxyXG4gICAgICBmdW5jdGlvbihlYWNoTGF5ZXJlZE9iaikge1xyXG4gICAgICAgIC8vIHZhciBsYXllcklkeCA9IHR5cGVvZiBlYWNoTGF5ZXJlZE9iai5hY3RpdmVMYXllcnMgPT09ICdmdW5jdGlvbidcclxuICAgICAgICAvLyAgICAgPyBlYWNoTGF5ZXJlZE9iai5hY3RpdmVMYXllcnMoKS5pbmRleE9mKGxheWVyKSA6IC0xO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICNTcGVjaWFsIExpdmVseSBXZWJ3ZXJrc3RhdHQgY29kZS4uLi4gR2VuZXJhbCBDYXNlPyAjSmVuc1xyXG4gICAgICAgIC8vICNUT0RPIGlmIHdlIGhhdmUgb2YgZ2xvYWJhbCBsaXN0IG9mIGFsbCBsYXllcnMuLi4gd2UgY2FuIGxvb2sgdGhlcmVcclxuICAgICAgICBcclxuICAgICAgICAvLyBQcm9wZXJ0aWVzLm93bihsYXllci5fbGF5ZXJlZEZ1bmN0aW9uc0xpc3RbZWFjaExheWVyZWRPYmpdKS5lYWNoKFxyXG4gICAgICAgIC8vICAgZnVuY3Rpb24oZWFjaExheWVyZWRGdW5jKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBuZXdlckxheWVyID0gZWFjaExheWVyZWRPYmouYWN0aXZlTGF5ZXJzKCkuZmluZChcclxuICAgICAgICAvLyAgICAgICBmdW5jdGlvbihlYWNoT3RoZXJMYXllcikge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGVhY2hPdGhlckxheWVySWR4XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPSBlYWNoTGF5ZXJlZE9iai5hY3RpdmVMYXllcnMoKS5pbmRleE9mKGVhY2hPdGhlckxheWVyKTtcclxuICAgICAgICAvLyAgICAgICAgIHZhciBpc05ld2VyID0gKGVhY2hPdGhlckxheWVySWR4ICE9PSAtMSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAmJiAoZWFjaE90aGVyTGF5ZXJJZHggPCBsYXllcklkeCk7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gaXNOZXdlciAmJlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVhY2hPdGhlckxheWVyLl9sYXllcmVkRnVuY3Rpb25zTGlzdFtlYWNoTGF5ZXJlZE9ial1bZWFjaExheWVyZWRGdW5jXTtcclxuICAgICAgICAvLyAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICBpZiAoIW5ld2VyTGF5ZXIpIHtcclxuICAgICAgICAvLyAgICAgICAgIG1ha2VGdW5jdGlvbkxheWVyVW5hd2FyZShlYWNoTGF5ZXJlZE9iaiwgZWFjaExheWVyZWRGdW5jKTtcclxuICAgICAgICAvLyAgICAgICB9XHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIExheWVyIGluc3RhbGxhdGlvblxyXG4gIHJlZmluZUNsYXNzIChjbGFzc09iamVjdCwgbWV0aG9kcykge1xyXG4gICAgaWYgKCFjbGFzc09iamVjdCB8fCAhY2xhc3NPYmplY3QucHJvdG90eXBlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbnRleHRKUzogY2FuIG5vdCByZWZpbmUgY2xhc3MgJ1wiICsgY2xhc3NPYmplY3QgKyBcIicgaW4gXCIgKyBsYXllcik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZmluZU9iamVjdChjbGFzc09iamVjdC5wcm90b3R5cGUsIG1ldGhvZHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBMYXllcmluZyBvYmplY3RzIG1heSBiZSBhIGdhcmJhZ2UgY29sbGVjdGlvbiBwcm9ibGVtLCBiZWNhdXNlIHRoZSBsYXllcnMga2VlcCBzdHJvbmdcclxuICAvLyByZWZlcmVuY2UgdG8gdGhlIG9iamVjdHNcclxuICByZWZpbmVPYmplY3QgKG9iamVjdCwgbWV0aG9kcykge1xyXG4gICAgLy8gbG9nKFwiY29wIHJlZmluZU9iamVjdFwiKTtcclxuXHJcbiAgICAvLyBCb29ra2VlcGluZzpcclxuICAgIC8vIHR5cGVvZiBvYmplY3QuZ2V0TmFtZSA9PT0gJ2Z1bmN0aW9uJyAmJiAobGF5ZXIuX2xheWVyZWRGdW5jdGlvbnNMaXN0W29iamVjdF0gPSB7fSk7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uX25hbWUgPT4ge1xyXG4gICAgICAvLyBsb2coXCIgbGF5ZXIgcHJvcGVydHk6IFwiICsgZnVuY3Rpb25fbmFtZSlcclxuICAgICAgbGF5ZXJQcm9wZXJ0eSh0aGlzLCBvYmplY3QsIGZ1bmN0aW9uX25hbWUsIG1ldGhvZHMpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdW5yZWZpbmVPYmplY3QgKG9iaikge1xyXG4gICAgdmFyIGlkID0gb2JqW0xheWVyT2JqZWN0SURdO1xyXG4gICAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGVsZXRlIHRoaXNbaWRdO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bnJlZmluZUNsYXNzIChjbGFzc09iaikge1xyXG4gICAgdGhpcy51bnJlZmluZU9iamVjdChjbGFzc09iai5wcm90b3R5cGUpO1xyXG4gIH1cclxuXHJcbiAgcmVpbnN0YWxsSW5DbGFzcyAoY29uc3RydWN0b3IpIHtcclxuICAgIHRoaXMucmVpbnN0YWxsSW5PYmplY3QoY29uc3RydWN0b3IucHJvdG90eXBlKTtcclxuICB9XHJcblxyXG4gIHJlaW5zdGFsbEluT2JqZWN0IChvYmplY3QpIHtcclxuICAgIGNvbnN0IHBhcnRpYWxMYXllciA9IGVuc3VyZVBhcnRpYWxMYXllcih0aGlzLCBvYmplY3QpO1xyXG4gICAgcGFydGlhbExheWVyLnJlaW5zdGFsbCgpO1xyXG4gIH1cclxuICBcclxuICAvLyBMYXllciBhY3RpdmF0aW9uXHJcbiAgYmVHbG9iYWwgKCkge1xyXG4gICAgZW5hYmxlTGF5ZXIodGhpcyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgYmVOb3RHbG9iYWwgKCkge1xyXG4gICAgZGlzYWJsZUxheWVyKHRoaXMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGhpZGUgKCkge1xyXG4gICAgLy8gSGlkZGVuIExheWVycyBkbyBub3QgYXBwZWFyIHdoZW4gZXZhbHVhdGluZyB0aGUgc291cmNlY29kZSBvZiBhIGZ1bmN0aW9uXHJcbiAgICAvLyBUT0RPOiB0aGlzIGZ1bmN0aW9uIGhhcyB0byBiZSBjYWxsZWQgQkVGT1JFIHRoZSBsYXllciByZWZpbmVzIGFueSBjbGFzcyxcclxuICAgIC8vIGR1ZSB0byBwcm9ibGVtcyBpbiB1bnJlZmluaW5nIGNsYXNzZXMuXHJcbiAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvLyBUZXN0aW5nXHJcbiAgaXNMYXllcigpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpc0dsb2JhbCAoKSB7XHJcbiAgICByZXR1cm4gR2xvYmFsTGF5ZXJzLmluZGV4T2YodGhpcykgIT09IC0xO1xyXG4gIH1cclxuICBcclxuICAvLyBEZWJ1Z2dpbmdcclxuICB0b1N0cmluZyAoKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKHRoaXMubmFtZSk7IC8vIGNvdWxkIGJlIGEgc3ltYm9sXHJcbiAgfVxyXG4gIFxyXG4gIC8vIERlcHJlY2F0ZWQgc2VyaWFsaXphdGlvblxyXG4gIHRvTGl0ZXJhbCAoKSB7XHJcbiAgICBpZiAoIXRoaXMubmFtZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJMYXllcjogQ2FuIG5vdCBzZXJpYWxpemUgd2l0aG91dCBhIG5hbWUhXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbmFtZTogdGhpcy5uYW1lIH07XHJcbiAgfVxyXG4gIFxyXG4gIC8vIERlc2VyaWFsaXphdGlvblxyXG4gIGZyb21MaXRlcmFsIChsaXRlcmFsKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkRlc2VyaWFsaXppbmcgTGF5ZXIgYWN0aXZhdGlvbiBmcm9tOiBcIiArIGxpdGVyYWwubmFtZSk7XHJcbiAgICByZXR1cm4gY3JlYXRlKGxpdGVyYWwubmFtZSwgZmFsc2UpO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICogRXhhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGxheWVyYWJsZSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMYXllcmFibGVPYmplY3RUcmFpdCB7XHJcbiAgYWN0aXZlTGF5ZXJzICgpIHtcclxuICAgIHZhciByZXN1bHQgPSB7d2l0aExheWVyczogW10sIHdpdGhvdXRMYXllcnM6IFtdfTtcclxuICAgIHRoaXMuZHluYW1pY0xheWVycyhyZXN1bHQpO1xyXG4gICAgdGhpcy5zdHJ1Y3R1cmFsTGF5ZXJzKHJlc3VsdCk7XHJcbiAgICB0aGlzLmdsb2JhbExheWVycyhyZXN1bHQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdC53aXRoTGF5ZXJzO1xyXG4gIH1cclxuICBjb2xsZWN0V2l0aExheWVyc0luIChsYXllcnMsIHJlc3VsdCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGVhID0gbGF5ZXJzW2ldXHJcbiAgICAgIGlmICgocmVzdWx0LndpdGhMYXllcnMuaW5kZXhPZihlYSkgPT09IC0xKVxyXG4gICAgICAgICAgJiYgKHJlc3VsdC53aXRob3V0TGF5ZXJzLmluZGV4T2YoZWEpID09PSAtMSkpIHtcclxuICAgICAgICByZXN1bHQud2l0aExheWVycy51bnNoaWZ0KGVhKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbGxlY3RXaXRob3V0TGF5ZXJzSW4gKGxheWVycywgcmVzdWx0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgZWEgPSBsYXllcnNbaV1cclxuICAgICAgaWYgKHJlc3VsdC53aXRob3V0TGF5ZXJzLmluZGV4T2YoZWEpID09PSAtMSkge1xyXG4gICAgICAgIHJlc3VsdC53aXRob3V0TGF5ZXJzLnB1c2goZWEpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZHluYW1pY0xheWVycyAocmVzdWx0KSB7XHJcbiAgICAvLyBvcHRpbWl6ZWQgdmVyc2lvbiwgdGhhdCBkb2VzIG5vdCB1c2UgY2xvc3VyZXMgYW5kIHJlY3Vyc2lvblxyXG4gICAgdmFyIHN0YWNrID0gTGF5ZXJTdGFjaztcclxuICAgIC8vIHRvcCBkb3duLCBpZ25vcmUgYm90dG9tIGVsZW1lbnRcclxuICAgIGZvciAodmFyIGogPSBzdGFjay5sZW5ndGggLSAxOyBqID4gMDsgai0tKSB7XHJcbiAgICAgIHZhciBjdXJyZW50ID0gc3RhY2tbal07XHJcbiAgICAgIGlmIChjdXJyZW50LndpdGhMYXllcnMpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3RXaXRoTGF5ZXJzSW4oY3VycmVudC53aXRoTGF5ZXJzLCByZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjdXJyZW50LndpdGhvdXRMYXllcnMpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3RXaXRob3V0TGF5ZXJzSW4oY3VycmVudC53aXRob3V0TGF5ZXJzLCByZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBzdHJ1Y3R1cmFsTGF5ZXJzIChyZXN1bHQpIHtcclxuICAgIHZhciBhbGxMYXllcnMgPSByZXN1bHQud2l0aExheWVycztcclxuICAgIHZhciBhbGxXaXRob3V0TGF5ZXJzID0gcmVzdWx0LndpdGhvdXRMYXllcnM7XHJcbiAgICB2YXIgb2JqID0gdGhpcztcclxuICAgIC8vIGdvIG93bmVyY2hhaW4gYmFja3dhcmQgYW5kIGdhdGhlciBhbGwgbGF5ZXIgYWN0aXZhdGlvbnMgYW5kIGRlYWN0aXZhdGlvbnNcclxuICAgIHdoaWxlIChvYmopIHtcclxuICAgICAgLy8gZG9uJ3QgdXNlIGFjY2Vzc29yIG1ldGhvZHMgYmVjYXVzZSBvZiBzcGVlZC4uLiAobm90IG1lYXN1cmVkIHlldClcclxuICAgICAgaWYgKG9iai53aXRoTGF5ZXJzKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbGxlY3RXaXRoTGF5ZXJzSW4ob2JqLndpdGhMYXllcnMsIHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9iai53aXRob3V0TGF5ZXJzKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbGxlY3RXaXRob3V0TGF5ZXJzSW4ob2JqLndpdGhvdXRMYXllcnMsIHJlc3VsdCk7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgLy8gcmVjdXJzZSwgc3RvcCBpZiBvd25lciBpcyB1bmRlZmluZWRcclxuICAgICAgb2JqID0gb2JqLm93bmVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgZ2xvYmFsTGF5ZXJzIChyZXN1bHQpIHtcclxuICAgIHRoaXMuY29sbGVjdFdpdGhMYXllcnNJbihHbG9iYWxMYXllcnMsIHJlc3VsdCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBzZXRXaXRoTGF5ZXJzIChsYXllcnMpIHtcclxuICAgIHRoaXMud2l0aExheWVycyA9IGxheWVycztcclxuICB9XHJcbiAgYWRkV2l0aExheWVyIChsYXllcikge1xyXG4gICAgdmFyIGxheWVycyA9IHRoaXMuZ2V0V2l0aExheWVycygpO1xyXG4gICAgaWYgKCFsYXllcnMuaW5jbHVkZXMobGF5ZXIpKSB7XHJcbiAgICAgIHRoaXMuc2V0V2l0aExheWVycyhsYXllcnMuY29uY2F0KFtsYXllcl0pKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlV2l0aExheWVyIChsYXllcikge1xyXG4gICAgdmFyIGxheWVycyA9IHRoaXMuZ2V0V2l0aExheWVycygpO1xyXG4gICAgaWYgKGxheWVycy5pbmNsdWRlcyhsYXllcikpIHtcclxuICAgICAgdGhpcy5zZXRXaXRoTGF5ZXJzKGxheWVycy5maWx0ZXIobCA9PiBsICE9PSBsYXllcikpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRXaXRob3V0TGF5ZXIgKGxheWVyKSB7XHJcbiAgICB2YXIgbGF5ZXJzID0gdGhpcy5nZXRXaXRob3V0TGF5ZXJzKCk7XHJcbiAgICBpZiAoIWxheWVycy5pbmNsdWRlKGxheWVyKSkge1xyXG4gICAgICB0aGlzLnNldFdpdGhvdXRMYXllcnMobGF5ZXJzLmNvbmNhdChbbGF5ZXJdKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZVdpdGhvdXRMYXllciAobGF5ZXIpIHtcclxuICAgIHZhciBsYXllcnMgPSB0aGlzLmdldFdpdGhvdXRMYXllcnMoKTtcclxuICAgIHRoaXMuc2V0V2l0aG91dExheWVycyhsYXllcnMuZmlsdGVyKGwgPT4gbCAhPT0gbGF5ZXIpKTtcclxuICB9XHJcbiAgc2V0V2l0aG91dExheWVycyAobGF5ZXJzKSB7XHJcbiAgICB0aGlzLndpdGhvdXRMYXllcnMgPSBsYXllcnM7XHJcbiAgfVxyXG4gIGdldFdpdGhMYXllcnMgKGxheWVycykge1xyXG4gICAgcmV0dXJuIHRoaXMud2l0aExheWVycyB8fCBbXTtcclxuICB9XHJcbiAgZ2V0V2l0aG91dExheWVyIChsYXllcnMpIHtcclxuICAgIHJldHVybiB0aGlzLndpdGhvdXRMYXllcnMgfHwgW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5ZXJhYmxlT2JqZWN0IGV4dGVuZHMgTGF5ZXJhYmxlT2JqZWN0VHJhaXQge31cclxuXHJcbmV4cG9ydCBjbGFzcyBDT1BFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UpIHtcclxuICAgIHRoaXMuX21zZyA9IG1zZztcclxuICB9XHJcbiAgdG9TdHJpbmcgKCkge1xyXG4gICAgcmV0dXJuIFwiQ09QIEVSUk9SOiBcIiArIHRoaXMuX21zZztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWFsTGF5ZXJDb21wb3NpdGlvbiB7XHJcbiAgY29uc3RydWN0b3IgKG9iaiwgcHJvdG90eXBlT2JqZWN0LCBmdW5jdGlvbk5hbWUsIGJhc2VGdW5jdGlvbiwgbWV0aG9kVHlwZSkge1xyXG4gICAgdGhpcy5fcGFydGlhbE1ldGhvZHMgPSBbYmFzZUZ1bmN0aW9uXTtcclxuICAgIHZhciBsYXllcnMgPSBjb21wdXRlTGF5ZXJzRm9yKG9iaik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBsYXllciA9IGxheWVyc1tpXTtcclxuICAgICAgICB2YXIgcGFydGlhbE1ldGhvZCA9IGxvb2t1cExheWVyZWRGdW5jdGlvbkZvck9iamVjdChcclxuICAgICAgICAgICAgb2JqLCBsYXllciwgZnVuY3Rpb25OYW1lLCBtZXRob2RUeXBlKTtcclxuICAgICAgICBpZiAocGFydGlhbE1ldGhvZCkge1xyXG4gICAgICAgICAgdGhpcy5fcGFydGlhbE1ldGhvZHMucHVzaChwYXJ0aWFsTWV0aG9kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl9vYmplY3QgPSBvYmo7XHJcbiAgICB0aGlzLl9wcm90b3R5cGVPYmplY3QgPSBwcm90b3R5cGVPYmplY3Q7XHJcbiAgICB0aGlzLl9mdW5jdGlvbk5hbWUgPSBmdW5jdGlvbk5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgb2JqZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX29iamVjdDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0IHBhcnRpYWxNZXRob2RzICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJ0aWFsTWV0aG9kcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0IGZ1bmN0aW9uTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mdW5jdGlvbk5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvdG90eXBlT2JqZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvdHlwZU9iamVjdDtcclxuICB9XHJcbn1cclxuXHJcbnJlc2V0TGF5ZXJTdGFjaygpO1xyXG5cclxuLy8gdmltOiBzdz0yXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvcHYyL0xheWVycy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbiAqKiBtb2R1bGUgaWQgPSA5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4gKiogbW9kdWxlIGlkID0gOTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbiAqKiBtb2R1bGUgaWQgPSA5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QudmFsdWVzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkdmFsdWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpe1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgaXNFbnVtICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzRW50cmllcyl7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdChpdClcbiAgICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBpICAgICAgPSAwXG4gICAgICAsIHJlc3VsdCA9IFtdXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpe1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktbmFtZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktbmFtZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpLmY7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=