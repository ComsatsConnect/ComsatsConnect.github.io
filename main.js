(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-event/admin-event.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-event/admin-event.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin-event/admin-event.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-event/admin-event.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <!--<ng-container matColumnDef=\"position\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> No. </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>-->\n  <!--</ng-container>-->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.eventname}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.eventid}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef> Actions </th>\n    <td *matCellDef=\"let element\" style=\"    border-bottom-width: 1px;\n    border-bottom-style: solid;     border-bottom-color: rgba(0,0,0,.12);\">\n      <button mat-button  color=\"warn\" (click)=\"onDelete(element.eventid)\">DELETE</button>\n    </td>\n  </ng-container>\n  <!--&lt;!&ndash; Symbol Column &ndash;&gt;-->\n  <!--<ng-container matColumnDef=\"symbol\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> Symbol </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>-->\n  <!--</ng-container>-->\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/admin-event/admin-event.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-event/admin-event.component.ts ***!
  \************************************************************/
/*! exports provided: AdminEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEventComponent", function() { return AdminEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-service.service */ "./src/app/admin/admin-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminEventComponent = /** @class */ (function () {
    function AdminEventComponent(adminService) {
        this.adminService = adminService;
        this.events = [];
        this.totalEvents = 0;
        this.displayedColumns = ['name', 'id', 'actions'];
    }
    AdminEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getEvents();
        this.eventsSub = this.adminService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.totalEvents = eventData.eventCount;
            _this.events = eventData.events;
            console.log(_this.events);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](eventData.events);
        });
    };
    AdminEventComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminEventComponent.prototype.onDelete = function (eventId) {
        var _this = this;
        console.log(eventId);
        this.adminService.deleteEvent(eventId).subscribe(function () {
            _this.adminService.getEvents();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdminEventComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AdminEventComponent.prototype, "sort", void 0);
    AdminEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-event',
            template: __webpack_require__(/*! ./admin-event.component.html */ "./src/app/admin/admin-event/admin-event.component.html"),
            styles: [__webpack_require__(/*! ./admin-event.component.css */ "./src/app/admin/admin-event/admin-event.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]])
    ], AdminEventComponent);
    return AdminEventComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-group/admin-group.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-group/admin-group.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin-group/admin-group.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-group/admin-group.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <!--<ng-container matColumnDef=\"position\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> No. </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>-->\n  <!--</ng-container>-->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.groupname}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.groupid}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef> Actions </th>\n    <td *matCellDef=\"let element\" style=\"    border-bottom-width: 1px;\n    border-bottom-style: solid;     border-bottom-color: rgba(0,0,0,.12);\">\n      <button mat-button  color=\"warn\" (click)=\"onDelete(element.groupid)\">DELETE</button>\n    </td>\n  </ng-container>\n  <!--&lt;!&ndash; Symbol Column &ndash;&gt;-->\n  <!--<ng-container matColumnDef=\"symbol\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> Symbol </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>-->\n  <!--</ng-container>-->\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/admin-group/admin-group.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-group/admin-group.component.ts ***!
  \************************************************************/
/*! exports provided: AdminGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGroupComponent", function() { return AdminGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-service.service */ "./src/app/admin/admin-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGroupComponent = /** @class */ (function () {
    function AdminGroupComponent(adminService) {
        this.adminService = adminService;
        this.groups = [];
        this.totalGroups = 0;
        this.displayedColumns = ['name', 'id', 'actions'];
    }
    AdminGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getGroups();
        this.groupsSub = this.adminService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.totalGroups = groupData.groupCount;
            _this.groups = groupData.groups;
            console.log(_this.groups);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](groupData.groups);
        });
    };
    AdminGroupComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminGroupComponent.prototype.onDelete = function (groupId) {
        var _this = this;
        this.adminService.deleteGroup(groupId).subscribe(function () {
            _this.adminService.getGroups();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdminGroupComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AdminGroupComponent.prototype, "sort", void 0);
    AdminGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-group',
            template: __webpack_require__(/*! ./admin-group.component.html */ "./src/app/admin/admin-group/admin-group.component.html"),
            styles: [__webpack_require__(/*! ./admin-group.component.css */ "./src/app/admin/admin-group/admin-group.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]])
    ], AdminGroupComponent);
    return AdminGroupComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  width: 30%;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n  /*margin-right: 35%;*/\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" >\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        placeholder=\"admin username\"\n        name=\"email\"\n        ngModel\n        #emailInput=\"ngModel\"\n        required\n\n      >\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid admin username.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        type=\"password\"\n        matInput\n        placeholder=\"Password\"\n        name=\"password\"\n        ngModel\n        #passwordInput=\"ngModel\"\n        required\n\n      >\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid Password</mat-error>\n    </mat-form-field>\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\" >Login</button>\n\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
  \************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-service.service */ "./src/app/admin/admin-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(adminService) {
        this.adminService = adminService;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        // this.isLoading = true ;
        this.adminService.login(form.value.email, form.value.password);
    };
    AdminLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/admin/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-page/admin-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-page/admin-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n  height: 1080px;\r\n\r\n}\r\n mat-drawer {\r\n   background-color: lightblue;\r\n   border: 1px solid #555;\r\n   width: 20%;\r\n }\r\n mat-drawer-content{\r\n   margin-left: 90px;\r\n   background-color: beige;\r\n   height: 100%;\r\n   /*width:80%;*/\r\n }\r\n ul{\r\n  list-style:none ;\r\n  padding: 0;\r\n  margin:0;\r\n}\r\n a{\r\n  text-decoration: none;\r\n  color: white;\r\n\r\n}\r\n .positive {\r\n  color : blue;\r\n}\r\n .negative {\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin-page/admin-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-page/admin-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>\n    <mat-list>\n      <ul>\n\n      <li *ngIf=\"isadminauthenticated\">\n        <button mat-button (click)=\"onUser()\" [ngClass]=\"{\n            'positive' : showuser,\n            'negative' : !showuser\n         }\">Users</button>\n      </li>\n        <li *ngIf=\"isadminauthenticated\">\n          <button mat-button (click)=\"onPosts()\" [ngClass]=\"{\n            'positive' : showposts,\n            'negative' : !showposts\n         }\">Posts</button>\n        </li>\n      <li *ngIf=\"isadminauthenticated\">\n        <button mat-button (click)=\"onGroups()\" routerLinkActive=\"mat-accent\"[ngClass]=\"{\n            'positive' : showgroups,\n            'negative' : !showgroups\n         }\"\n        >Groups</button>\n      </li>\n      <li *ngIf=\"isadminauthenticated\">\n        <button mat-button (click)=\"onEvents()\" [ngClass]=\"{\n            'positive' : showevents,\n            'negative' : !showevents\n         }\">Events</button>\n      </li>\n        <li *ngIf=\"isadminauthenticated\">\n          <button mat-button (click)=\"onReports()\" [ngClass]=\"{\n            'positive' : showreports,\n            'negative' : !showreports\n         }\">Reports</button>\n        </li>\n        <li *ngIf=\"isadminauthenticated\">\n          <button mat-button (click)=\"onAds()\" [ngClass]=\"{\n            'positive' : showads,\n            'negative' : !showads\n         }\">Advertisements</button>\n        </li>\n     <li>\n       <button mat-button (click)=\"onLogout()\" color=\"warn\">Logout</button>\n     </li>\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <app-admin-users *ngIf=\"showuser\"></app-admin-users>\n    <app-admin-group *ngIf=\"showgroups\"></app-admin-group>\n    <app-admin-event *ngIf=\"showevents\"></app-admin-event>\n    <app-admin-posts *ngIf=\"showposts\"></app-admin-posts>\n    <app-report-page *ngIf=\"showreports\"></app-report-page>\n    <app-adminadvertisements *ngIf=\"showads\"></app-adminadvertisements>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/admin/admin-page/admin-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-page/admin-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-service.service */ "./src/app/admin/admin-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.isadminauthenticated = false;
        this.showuser = false;
        this.showgroups = false;
        this.showposts = false;
        this.showevents = false;
        this.showreports = false;
        this.showads = false;
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        if (this.adminService.getisAdmin()) {
            this.showuser = true;
            this.showgroups = false;
            this.showposts = false;
            this.showevents = false;
            this.showreports = false;
            this.showads = false;
            this.isadminauthenticated = true;
        }
        else {
            this.isadminauthenticated = false;
            this.router.navigate(['/admin']).then();
        }
    };
    AdminPageComponent.prototype.onUser = function () {
        this.showgroups = false;
        this.showposts = false;
        this.showads = false;
        this.showevents = false;
        this.showreports = false;
        this.showuser = true;
    };
    AdminPageComponent.prototype.onGroups = function () {
        this.showposts = false;
        this.showevents = false;
        this.showads = false;
        this.showuser = false;
        this.showreports = false;
        this.showgroups = true;
    };
    AdminPageComponent.prototype.onPosts = function () {
        this.showevents = false;
        this.showuser = false;
        this.showads = false;
        this.showreports = false;
        this.showgroups = false;
        this.showposts = true;
    };
    AdminPageComponent.prototype.onEvents = function () {
        this.showposts = false;
        this.showuser = false;
        this.showads = false;
        this.showreports = false;
        this.showgroups = false;
        this.showevents = true;
    };
    AdminPageComponent.prototype.onReports = function () {
        this.showposts = false;
        this.showads = false;
        this.showuser = false;
        this.showgroups = false;
        this.showevents = false;
        this.showreports = true;
    };
    AdminPageComponent.prototype.onAds = function () {
        this.showposts = false;
        this.showuser = false;
        this.showgroups = false;
        this.showevents = false;
        this.showreports = false;
        this.showads = true;
    };
    AdminPageComponent.prototype.onLogout = function () {
        this.isadminauthenticated = false;
        this.adminService.logoutAdmin();
    };
    AdminPageComponent.prototype.ngOnDestroy = function () {
        this.isadminauthenticated = false;
    };
    AdminPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/admin/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/admin/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-posts/admin-posts.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-posts/admin-posts.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin-posts/admin-posts.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-posts/admin-posts.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <!--<ng-container matColumnDef=\"position\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> No. </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>-->\n  <!--</ng-container>-->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef> Title </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"content\">\n    <th mat-header-cell *matHeaderCellDef> Content </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.content}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"user\">\n    <th mat-header-cell *matHeaderCellDef> User </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.username}} <br/> {{element.creator}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef> Actions </th>\n    <td *matCellDef=\"let element\" style=\"    border-bottom-width: 1px;\n    border-bottom-style: solid;     border-bottom-color: rgba(0,0,0,.12);\">\n      <button mat-button  color=\"warn\" (click)=\"onDelete(element.id)\">DELETE</button>\n    </td>\n  </ng-container>\n\n  <!--&lt;!&ndash; Symbol Column &ndash;&gt;-->\n  <!--<ng-container matColumnDef=\"symbol\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> Symbol </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>-->\n  <!--</ng-container>-->\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/admin-posts/admin-posts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-posts/admin-posts.component.ts ***!
  \************************************************************/
/*! exports provided: AdminPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPostsComponent", function() { return AdminPostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-service.service */ "./src/app/admin/admin-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPostsComponent = /** @class */ (function () {
    function AdminPostsComponent(adminService) {
        this.adminService = adminService;
        this.posts = [];
        this.totalPosts = 0;
        this.displayedColumns = ['title', 'content', 'id', 'user', 'actions'];
    }
    AdminPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getPosts();
        this.postsSub = this.adminService.getPostUpdateListener()
            .subscribe(function (postData) {
            _this.totalPosts = postData.postCount;
            _this.posts = postData.posts;
            console.log(_this.posts);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](postData.posts);
        });
    };
    AdminPostsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminPostsComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.adminService.deletePost(postId).subscribe(function () {
            _this.adminService.getPosts();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdminPostsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AdminPostsComponent.prototype, "sort", void 0);
    AdminPostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-posts',
            template: __webpack_require__(/*! ./admin-posts.component.html */ "./src/app/admin/admin-posts/admin-posts.component.html"),
            styles: [__webpack_require__(/*! ./admin-posts.component.css */ "./src/app/admin/admin-posts/admin-posts.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]])
    ], AdminPostsComponent);
    return AdminPostsComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin-service.service.ts ***!
  \************************************************/
/*! exports provided: AdminServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServiceService", function() { return AdminServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASEUURL = 'https://comsatsconnectbackend.herokuapp.com';
var AdminServiceService = /** @class */ (function () {
    function AdminServiceService(http, router, postService) {
        this.http = http;
        this.router = router;
        this.postService = postService;
        this.isadmin = false;
        this.advertisements = [];
        this.advertisementsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.users = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.groups = [];
        this.groupsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.events = [];
        this.eventsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reports = [];
        this.reportsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AdminServiceService.prototype.login = function (email, password) {
        var _this = this;
        // const authData: AuthData = {email: email, password: password};
        this.http.post(BASEUURL + "/api/admin/login", { email: email, password: password })
            .subscribe(function (response) {
            _this.isadmin = true;
            console.log(response.message);
            _this.router.navigate(['/adminpage']).then();
        }, function (error) {
            _this.isadmin = false;
            console.log('invalid admin');
            _this.router.navigate(['/admin']).then();
        });
    };
    AdminServiceService.prototype.getisAdmin = function () {
        return this.isadmin;
    };
    AdminServiceService.prototype.getadvertiserPosts = function () {
        var _this = this;
        // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/admin/adverts")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return { advertisements: postData.posts.map(function (post) {
                    return {
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        username: post.username,
                        adcreator: post.adcreator,
                        approved: post.approved
                    };
                }), maxPosts: postData.maxPosts };
        })) // change rterieving data
            .subscribe(function (transformedAdvertisementData) {
            _this.advertisements = transformedAdvertisementData.advertisements;
            _this.advertisementsUpdated.next({
                advertisements: _this.advertisements.slice(),
                advertisementCount: transformedAdvertisementData.maxPosts
            });
        }); // subscribe is to liosten
    };
    AdminServiceService.prototype.addAdvertisementPost = function (id) {
        var postData = new FormData();
        postData.append('adid', id);
        // postData.append('content', content);
        // postData.append('image', image, title);
        // postData.append( 'category', category);
        // postData.append('username', localStorage.getItem('username'));
        // postData.append('profileimg', profileimg);
        console.log(postData);
        return this.http
            .post(BASEUURL + "/api/posts/advert", postData);
    };
    AdminServiceService.prototype.getadvertisementPostUpdateListener = function () {
        return this.advertisementsUpdated.asObservable();
    };
    AdminServiceService.prototype.logoutAdmin = function () {
        this.isadmin = false;
        this.posts = null;
        this.advertisements = null;
        this.groups = null;
        this.events = null;
        this.users = null;
        this.router.navigate(['/']);
    };
    AdminServiceService.prototype.getPosts = function () {
        var _this = this;
        // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/admin/posts")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return { posts: postData.posts.map(function (post) {
                    return {
                        // profleimg: post.profileimg,
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        username: post.username,
                        creator: post.creator,
                    };
                }), maxPosts: postData.maxPosts };
        })) // change rterieving data
            .subscribe(function (transformedPostData) {
            _this.posts = transformedPostData.posts;
            _this.postsUpdated.next({
                posts: _this.posts.slice(),
                postCount: transformedPostData.maxPosts
            });
        }); // subscribe is to liosten
    };
    AdminServiceService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    AdminServiceService.prototype.getReports = function () {
        var _this = this;
        // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/admin/reports")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (reportData) {
            return { reports: reportData.reports.map(function (report) {
                    return {
                        // profleimg: post.profileimg,
                        reporttitle: report.title,
                        reportcontent: report.content,
                        postid: report.postid,
                        reportid: report._id,
                        reportusername: report.username,
                        reportcreator: report.creator,
                        reportreason: report.reason,
                        reportreportedby: report.reportedby
                        // likes: post.likes,
                        // likedBy: post.likedBy,
                        // dislikedBy: post.dislikedBy,
                        // category: post.category,
                        // commentsNo: post.commentsNo,
                        // comments: post.comments,
                        // dislikes: post.dislikes,
                        // createdAt: post.createdAt,
                        // imagePath: post.imagePath
                    };
                }), maxReports: reportData.maxReports };
        })) // change rterieving data
            .subscribe(function (transformedReportData) {
            _this.reports = transformedReportData.reports;
            _this.reportsUpdated.next({
                reports: _this.reports.slice(),
                reportCount: transformedReportData.maxReports
            });
        }); // subscribe is to liosten
    };
    AdminServiceService.prototype.getReportUpdateListener = function () {
        return this.reportsUpdated.asObservable();
    };
    AdminServiceService.prototype.getUsers = function () {
        var _this = this;
        // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/admin/users")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userData) {
            return { users: userData.users.map(function (user) {
                    return {
                        profileimg: user.imagePath,
                        username: user.username,
                        id: user._id,
                    };
                }), maxUsers: userData.maxUsers };
        })) // change rterieving data
            .subscribe(function (transformedUserData) {
            _this.users = transformedUserData.users;
            _this.usersUpdated.next({
                users: _this.users.slice(),
                userCount: transformedUserData.maxUsers
            });
        }); // subscribe is to liosten
    };
    AdminServiceService.prototype.getUserUpdateListener = function () {
        return this.usersUpdated.asObservable();
    };
    AdminServiceService.prototype.getEvents = function () {
        var _this = this;
        // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/admin/events")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (eventData) {
            return { events: eventData.events.map(function (event) {
                    return {
                        eventname: event.eventname,
                        eventid: event._id,
                    };
                }), maxEvents: eventData.maxEvents };
        })) // change rterieving data
            .subscribe(function (transformedEventData) {
            _this.events = transformedEventData.events;
            _this.eventsUpdated.next({
                events: _this.events.slice(),
                eventCount: transformedEventData.maxEvents
            });
        }); // subscribe is to liosten
    };
    AdminServiceService.prototype.getEventUpdateListener = function () {
        return this.eventsUpdated.asObservable();
    };
    AdminServiceService.prototype.getGroups = function () {
        var _this = this;
        // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/admin/groups")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupData) {
            return { groups: groupData.groups.map(function (group) {
                    return {
                        groupname: group.groupname,
                        groupid: group._id,
                    };
                }), maxGroups: groupData.maxGroups };
        })) // change rterieving data
            .subscribe(function (transformedGroupData) {
            _this.groups = transformedGroupData.groups;
            _this.groupsUpdated.next({
                groups: _this.groups.slice(),
                groupCount: transformedGroupData.maxGroups
            });
        }); // subscribe is to liosten
    };
    AdminServiceService.prototype.getGroupUpdateListener = function () {
        return this.groupsUpdated.asObservable();
    };
    AdminServiceService.prototype.deletePost = function (postId) {
        return this.http
            .delete(BASEUURL + "/api/admin/posts/" + postId);
    };
    AdminServiceService.prototype.deleteReport = function (postId) {
        return this.http
            .delete(BASEUURL + "/api/admin/reports/" + postId);
    };
    AdminServiceService.prototype.deleteAdvertisement = function (postId) {
        return this.http
            .delete(BASEUURL + "/api/admin/advertisements/" + postId);
    };
    AdminServiceService.prototype.removeReport = function (postId) {
        return this.http
            .delete(BASEUURL + "/api/admin/removereports/" + postId);
    };
    AdminServiceService.prototype.deleteGroup = function (postId) {
        return this.http
            .delete(BASEUURL + "/api/admin/groups/" + postId);
    };
    AdminServiceService.prototype.deleteEvent = function (postId) {
        return this.http
            .delete(BASEUURL + "/api/admin/events/" + postId);
    };
    AdminServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _posts_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]])
    ], AdminServiceService);
    return AdminServiceService;
}());



/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <!--<ng-container matColumnDef=\"position\">-->\n    <!--<th mat-header-cell *matHeaderCellDef> No. </th>-->\n    <!--<td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>-->\n  <!--</ng-container>-->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef> Actions </th>\n    <td *matCellDef=\"let element\" style=\"    border-bottom-width: 1px;\n    border-bottom-style: solid;     border-bottom-color: rgba(0,0,0,.12);\">\n      <button mat-button color=\"warn\">Delete</button>\n    </td>\n  </ng-container>\n\n  <!--&lt;!&ndash; Symbol Column &ndash;&gt;-->\n  <!--<ng-container matColumnDef=\"symbol\">-->\n    <!--<th mat-header-cell *matHeaderCellDef> Symbol </th>-->\n    <!--<td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>-->\n  <!--</ng-container>-->\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.ts ***!
  \************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-service.service */ "./src/app/admin/admin-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }
var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(adminService) {
        this.adminService = adminService;
        this.users = [];
        this.totalUsers = 0;
        this.displayedColumns = ['name', 'id', 'actions'];
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getUsers();
        this.usersSub = this.adminService.getUserUpdateListener()
            .subscribe(function (userData) {
            _this.totalUsers = userData.userCount;
            _this.users = userData.users;
            console.log(_this.users);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](userData.users);
        });
    };
    AdminUsersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdminUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AdminUsersComponent.prototype, "sort", void 0);
    AdminUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! ./admin-users.component.html */ "./src/app/admin/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin/admin-users/admin-users.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/adminadvertisements/adminadvertisements.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/adminadvertisements/adminadvertisements.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/adminadvertisements/adminadvertisements.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/adminadvertisements/adminadvertisements.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <!--<ng-container matColumnDef=\"position\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> No. </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>-->\n  <!--</ng-container>-->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef> Title </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"content\">\n    <th mat-header-cell *matHeaderCellDef> Content </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.content}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"username\">\n    <th mat-header-cell *matHeaderCellDef> Username </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.username}} <br/> {{element.adcreator}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef> Actions </th>\n    <td *matCellDef=\"let element\" style=\"    border-bottom-width: 1px;\n    border-bottom-style: solid;     border-bottom-color: rgba(0,0,0,.12);\">\n      <button mat-button *ngIf=\"!element.approved\" color=\"primary\" (click)=\"approve(element)\">Approve</button> <br/>\n      <button mat-button  color=\"warn\" (click)=\"onDelete(element.id)\">DELETE POST</button>\n     </td>\n  </ng-container>\n\n  <!--&lt;!&ndash; Symbol Column &ndash;&gt;-->\n  <!--<ng-container matColumnDef=\"symbol\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> Symbol </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>-->\n  <!--</ng-container>-->\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/adminadvertisements/adminadvertisements.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/adminadvertisements/adminadvertisements.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminadvertisementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminadvertisementsComponent", function() { return AdminadvertisementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-service.service */ "./src/app/admin/admin-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminadvertisementsComponent = /** @class */ (function () {
    function AdminadvertisementsComponent(adminService) {
        this.adminService = adminService;
        this.posts = [];
        this.totalPosts = 0;
        this.displayedColumns = ['title', 'content', 'id', 'username', 'actions'];
    }
    AdminadvertisementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getadvertiserPosts();
        this.addsSub = this.adminService.getadvertisementPostUpdateListener()
            .subscribe(function (postData) {
            _this.totalPosts = postData.advertisementCount;
            _this.posts = postData.advertisements;
            console.log(_this.posts);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](postData.advertisements);
        });
    };
    AdminadvertisementsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminadvertisementsComponent.prototype.approve = function (advertisement) {
        var _this = this;
        this.adminService.addAdvertisementPost(advertisement.id).subscribe(function () {
            _this.adminService.getadvertiserPosts();
        });
    };
    AdminadvertisementsComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.adminService.deleteAdvertisement(postId).subscribe(function () {
            _this.adminService.getadvertiserPosts();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdminadvertisementsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AdminadvertisementsComponent.prototype, "sort", void 0);
    AdminadvertisementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminadvertisements',
            template: __webpack_require__(/*! ./adminadvertisements.component.html */ "./src/app/admin/adminadvertisements/adminadvertisements.component.html"),
            styles: [__webpack_require__(/*! ./adminadvertisements.component.css */ "./src/app/admin/adminadvertisements/adminadvertisements.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]])
    ], AdminadvertisementsComponent);
    return AdminadvertisementsComponent;
}());



/***/ }),

/***/ "./src/app/admin/report-page/report-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/report-page/report-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/report-page/report-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/report-page/report-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <!--<ng-container matColumnDef=\"position\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> No. </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>-->\n  <!--</ng-container>-->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef> Title </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.reporttitle}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"content\">\n    <th mat-header-cell *matHeaderCellDef> Content </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.reportcontent}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.reportid}} <br/> PostId: {{element.postid}}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"user\">\n    <th mat-header-cell *matHeaderCellDef> User </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.reportusername}} <br/> {{element.reportcreator}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"report\">\n    <th mat-header-cell *matHeaderCellDef> User </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.reportreportedby}} <br/> {{element.reportreason}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef> Actions </th>\n    <td *matCellDef=\"let element\" style=\"    border-bottom-width: 1px;\n    border-bottom-style: solid;     border-bottom-color: rgba(0,0,0,.12);\">\n      <button mat-button  color=\"warn\" (click)=\"onDelete(element.postid)\">DELETE POST</button>\n      <br/>\n      <button mat-button  color=\"primary\" (click)=\"onRemove(element.reportid)\">Remove Report</button>\n    </td>\n  </ng-container>\n\n  <!--&lt;!&ndash; Symbol Column &ndash;&gt;-->\n  <!--<ng-container matColumnDef=\"symbol\">-->\n  <!--<th mat-header-cell *matHeaderCellDef> Symbol </th>-->\n  <!--<td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>-->\n  <!--</ng-container>-->\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/report-page/report-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/report-page/report-page.component.ts ***!
  \************************************************************/
/*! exports provided: ReportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageComponent", function() { return ReportPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-service.service */ "./src/app/admin/admin-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportPageComponent = /** @class */ (function () {
    function ReportPageComponent(adminService) {
        this.adminService = adminService;
        this.reports = [];
        this.totalReports = 0;
        this.displayedColumns = ['title', 'content', 'id', 'user', 'report', 'actions'];
    }
    ReportPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getReports();
        this.reportsSub = this.adminService.getReportUpdateListener()
            .subscribe(function (reportData) {
            _this.totalReports = reportData.reportCount;
            _this.reports = reportData.reports;
            console.log(_this.reports);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](reportData.reports);
        });
    };
    ReportPageComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ReportPageComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.adminService.deleteReport(postId).subscribe(function () {
            _this.adminService.getReports();
        });
    };
    ReportPageComponent.prototype.onRemove = function (reportId) {
        var _this = this;
        this.adminService.removeReport(reportId).subscribe(function () {
            _this.adminService.getReports();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ReportPageComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ReportPageComponent.prototype, "sort", void 0);
    ReportPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-page',
            template: __webpack_require__(/*! ./report-page.component.html */ "./src/app/admin/report-page/report-page.component.html"),
            styles: [__webpack_require__(/*! ./report-page.component.css */ "./src/app/admin/report-page/report-page.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]])
    ], ReportPageComponent);
    return ReportPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/profile/profile.component */ "./src/app/auth/profile/profile.component.ts");
/* harmony import */ var _groups_group_create_group_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/group-create/group-create.component */ "./src/app/groups/group-create/group-create.component.ts");
/* harmony import */ var _events_event_create_event_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/event-create/event-create.component */ "./src/app/events/event-create/event-create.component.ts");
/* harmony import */ var _groups_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./groups/group-list/group-list.component */ "./src/app/groups/group-list/group-list.component.ts");
/* harmony import */ var _events_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/event-list/event-list.component */ "./src/app/events/event-list/event-list.component.ts");
/* harmony import */ var _groups_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./groups/group-page/group-page.component */ "./src/app/groups/group-page/group-page.component.ts");
/* harmony import */ var _events_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./events/event-page/event-page.component */ "./src/app/events/event-page/event-page.component.ts");
/* harmony import */ var _posts_archivedposts_archivedposts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/archivedposts/archivedposts.component */ "./src/app/posts/archivedposts/archivedposts.component.ts");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "./src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin-page/admin-page.component */ "./src/app/admin/admin-page/admin-page.component.ts");
/* harmony import */ var _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin-users/admin-users.component */ "./src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _admin_admin_group_admin_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin-group/admin-group.component */ "./src/app/admin/admin-group/admin-group.component.ts");
/* harmony import */ var _admin_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-event/admin-event.component */ "./src/app/admin/admin-event/admin-event.component.ts");
/* harmony import */ var _posts_userspage_userspage_userspage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./posts/userspage/userspage/userspage.component */ "./src/app/posts/userspage/userspage/userspage.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _auth_Advertiser_advertiserlogin_advertiserlogin_advertiserlogin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component */ "./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.ts");
/* harmony import */ var _auth_Advertiser_advertisersignup_advertisersignup_advertisersignup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component */ "./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.ts");
/* harmony import */ var _auth_Advertiser_advertiserpage_advertiserpage_advertiserpage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component */ "./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.ts");
/* harmony import */ var _admin_adminadvertisements_adminadvertisements_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/adminadvertisements/adminadvertisements.component */ "./src/app/admin/adminadvertisements/adminadvertisements.component.ts");
/* harmony import */ var _videochat_videochat_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./videochat/videochat.component */ "./src/app/videochat/videochat.component.ts");
/* harmony import */ var _posts_suugestionsposts_suugestionsposts_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./posts/suugestionsposts/suugestionsposts.component */ "./src/app/posts/suugestionsposts/suugestionsposts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: 'admin', component: _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_15__["AdminLoginComponent"] },
    { path: 'adminpage', component: _admin_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_16__["AdminPageComponent"] },
    { path: 'adminusers', component: _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_17__["AdminUsersComponent"] },
    { path: 'admingroups', component: _admin_admin_group_admin_group_component__WEBPACK_IMPORTED_MODULE_18__["AdminGroupComponent"] },
    { path: 'adminadverts', component: _admin_adminadvertisements_adminadvertisements_component__WEBPACK_IMPORTED_MODULE_25__["AdminadvertisementsComponent"] },
    { path: 'adminevents', component: _admin_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_19__["AdminEventComponent"] },
    { path: 'advertise', component: _auth_Advertiser_advertiserlogin_advertiserlogin_advertiserlogin_component__WEBPACK_IMPORTED_MODULE_22__["AdvertiserloginComponent"] },
    { path: 'registeradvertiser', component: _auth_Advertiser_advertisersignup_advertisersignup_advertisersignup_component__WEBPACK_IMPORTED_MODULE_23__["AdvertisersignupComponent"] },
    { path: '', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'advertiserpage', component: _auth_Advertiser_advertiserpage_advertiserpage_advertiserpage_component__WEBPACK_IMPORTED_MODULE_24__["AdvertiserpageComponent"] },
    { path: 'messages', component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__["PostListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'recommendations', component: _posts_suugestionsposts_suugestionsposts_component__WEBPACK_IMPORTED_MODULE_27__["SuugestionspostsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'create', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'edit/:postId', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'chat/:userId', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__["ChatComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'grouplist', component: _groups_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_10__["GroupListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'eventlist', component: _events_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_11__["EventListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'groupcreate', component: _groups_group_create_group_create_component__WEBPACK_IMPORTED_MODULE_8__["GroupCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'eventcreate', component: _events_event_create_event_create_component__WEBPACK_IMPORTED_MODULE_9__["EventCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'user/:userId', component: _posts_userspage_userspage_userspage_component__WEBPACK_IMPORTED_MODULE_20__["UserspageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'profile', component: _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'archives', component: _posts_archivedposts_archivedposts_component__WEBPACK_IMPORTED_MODULE_14__["ArchivedpostsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'grouppage/:groupId', component: _groups_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_12__["GroupPageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'eventpage/:eventId', component: _events_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_13__["EventPageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'videochatstart', component: _videochat_videochat_component__WEBPACK_IMPORTED_MODULE_26__["VideochatComponent"] },
    { path: 'videochat', component: _videochat_videochat_component__WEBPACK_IMPORTED_MODULE_26__["VideochatComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  width: 100%;\n  padding: 3rem auto;\n\n}\n/*router-outlet{*/\n/*w*/\n/*background-image: url(\"https://res.cloudinary.com/da6znvkjz/image/upload/v1555788113/ComsatsSocial/COMSATS_new_logo_e4iqgb.jpg\");*/\n/*}*/\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header ></app-header>\n<main>\n <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/profile/profile.component */ "./src/app/auth/profile/profile.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _groups_group_create_group_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groups/group-create/group-create.component */ "./src/app/groups/group-create/group-create.component.ts");
/* harmony import */ var _groups_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./groups/group-list/group-list.component */ "./src/app/groups/group-list/group-list.component.ts");
/* harmony import */ var _events_event_create_event_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./events/event-create/event-create.component */ "./src/app/events/event-create/event-create.component.ts");
/* harmony import */ var _events_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./events/event-list/event-list.component */ "./src/app/events/event-list/event-list.component.ts");
/* harmony import */ var _groups_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./groups/group-page/group-page.component */ "./src/app/groups/group-page/group-page.component.ts");
/* harmony import */ var _events_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./events/event-page/event-page.component */ "./src/app/events/event-page/event-page.component.ts");
/* harmony import */ var _posts_archivedposts_archivedposts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./posts/archivedposts/archivedposts.component */ "./src/app/posts/archivedposts/archivedposts.component.ts");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "./src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin-page/admin-page.component */ "./src/app/admin/admin-page/admin-page.component.ts");
/* harmony import */ var _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin-users/admin-users.component */ "./src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sidebar/sidebar/sidebar.component */ "./src/app/sidebar/sidebar/sidebar.component.ts");
/* harmony import */ var _admin_admin_group_admin_group_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin-group/admin-group.component */ "./src/app/admin/admin-group/admin-group.component.ts");
/* harmony import */ var _admin_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/admin-event/admin-event.component */ "./src/app/admin/admin-event/admin-event.component.ts");
/* harmony import */ var _admin_admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/admin-posts/admin-posts.component */ "./src/app/admin/admin-posts/admin-posts.component.ts");
/* harmony import */ var _admin_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/report-page/report-page.component */ "./src/app/admin/report-page/report-page.component.ts");
/* harmony import */ var _posts_userspage_userspage_userspage_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./posts/userspage/userspage/userspage.component */ "./src/app/posts/userspage/userspage/userspage.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var ngx_auto_scroll__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-auto-scroll */ "./node_modules/ngx-auto-scroll/ngx-auto-scroll.es5.js");
/* harmony import */ var _posts_advertisepost_advertisepost_advertisepost_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./posts/advertisepost/advertisepost/advertisepost.component */ "./src/app/posts/advertisepost/advertisepost/advertisepost.component.ts");
/* harmony import */ var _auth_Advertiser_advertiserlogin_advertiserlogin_advertiserlogin_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component */ "./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.ts");
/* harmony import */ var _auth_Advertiser_advertisersignup_advertisersignup_advertisersignup_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component */ "./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.ts");
/* harmony import */ var _auth_Advertiser_advertiserpage_advertiserpage_advertiserpage_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component */ "./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.ts");
/* harmony import */ var _admin_adminadvertisements_adminadvertisements_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/adminadvertisements/adminadvertisements.component */ "./src/app/admin/adminadvertisements/adminadvertisements.component.ts");
/* harmony import */ var _videochat_videochat_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./videochat/videochat.component */ "./src/app/videochat/videochat.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _posts_suugestionsposts_suugestionsposts_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./posts/suugestionsposts/suugestionsposts.component */ "./src/app/posts/suugestionsposts/suugestionsposts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_9__["PostListComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                _groups_group_create_group_create_component__WEBPACK_IMPORTED_MODULE_19__["GroupCreateComponent"],
                _groups_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_20__["GroupListComponent"],
                _events_event_create_event_create_component__WEBPACK_IMPORTED_MODULE_21__["EventCreateComponent"],
                _events_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_22__["EventListComponent"],
                _groups_group_page_group_page_component__WEBPACK_IMPORTED_MODULE_23__["GroupPageComponent"],
                _events_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_24__["EventPageComponent"],
                _posts_archivedposts_archivedposts_component__WEBPACK_IMPORTED_MODULE_25__["ArchivedpostsComponent"],
                _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_26__["AdminLoginComponent"],
                _admin_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_27__["AdminPageComponent"],
                _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_28__["AdminUsersComponent"],
                _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_29__["SidebarComponent"],
                _admin_admin_group_admin_group_component__WEBPACK_IMPORTED_MODULE_30__["AdminGroupComponent"],
                _admin_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_31__["AdminEventComponent"],
                _admin_admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_32__["AdminPostsComponent"],
                _admin_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_33__["ReportPageComponent"],
                _posts_userspage_userspage_userspage_component__WEBPACK_IMPORTED_MODULE_34__["UserspageComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_35__["ChatComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_36__["MessageComponent"],
                _posts_advertisepost_advertisepost_advertisepost_component__WEBPACK_IMPORTED_MODULE_38__["AdvertisepostComponent"],
                _auth_Advertiser_advertiserlogin_advertiserlogin_advertiserlogin_component__WEBPACK_IMPORTED_MODULE_39__["AdvertiserloginComponent"],
                _auth_Advertiser_advertisersignup_advertisersignup_advertisersignup_component__WEBPACK_IMPORTED_MODULE_40__["AdvertisersignupComponent"],
                _auth_Advertiser_advertiserpage_advertiserpage_advertiserpage_component__WEBPACK_IMPORTED_MODULE_41__["AdvertiserpageComponent"],
                _admin_adminadvertisements_adminadvertisements_component__WEBPACK_IMPORTED_MODULE_42__["AdminadvertisementsComponent"],
                _videochat_videochat_component__WEBPACK_IMPORTED_MODULE_43__["VideochatComponent"],
                _posts_suugestionsposts_suugestionsposts_component__WEBPACK_IMPORTED_MODULE_45__["SuugestionspostsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollDispatchModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                ngx_auto_scroll__WEBPACK_IMPORTED_MODULE_37__["NgxAutoScrollModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_44__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_44__["HashLocationStrategy"] },
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  width: 30%;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n  /*margin-right: 35%;*/\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <mat-card-header style=\"color: black; font-size: medium; font-weight: bolder;\">\n    <mat-card-title>Advertiser Login</mat-card-title>\n  </mat-card-header>\n  <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"email\"\n        placeholder=\"E-mail\"\n        name=\"email\"\n        ngModel\n        #emailInput=\"ngModel\"\n        required\n        email\n      >\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        type=\"password\"\n        matInput\n        placeholder=\"Password\"\n        name=\"password\"\n        ngModel\n        #passwordInput=\"ngModel\"\n        required\n\n      >\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid Password</mat-error>\n    </mat-form-field>\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\" *ngIf=\"!isLoading\">Login</button>\n\n  </form>\n  <br/>\n  <a mat-button routerLink=\"/registeradvertiser\">Register Advertiser!</a>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdvertiserloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertiserloginComponent", function() { return AdvertiserloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvertiserloginComponent = /** @class */ (function () {
    function AdvertiserloginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
    }
    AdvertiserloginComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
    };
    AdvertiserloginComponent.prototype.ngOnDestroy = function () {
        this.isLoading = false;
    };
    AdvertiserloginComponent.prototype.onLogin = function (form) {
        console.log(form.value.email + '' + form.value.password);
        if (form.invalid) {
            return;
        }
        this.isLoading = false;
        this.authService.advertiserlogin(form.value.email, form.value.password);
    };
    AdvertiserloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertiserlogin',
            template: __webpack_require__(/*! ./advertiserlogin.component.html */ "./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.html"),
            styles: [__webpack_require__(/*! ./advertiserlogin.component.css */ "./src/app/auth/Advertiser/advertiserlogin/advertiserlogin/advertiserlogin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdvertiserloginComponent);
    return AdvertiserloginComponent;
}());



/***/ }),

/***/ "./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  width: 60%;\r\n  margin: auto;\r\n  margin-bottom: 4px;\r\n  /*margin-right: 35%;*/\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.image-preview{\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview img{\r\n  height: 100%;\r\n}\r\n:host {\r\n  display: block;\r\n  margin-top: 1rem;\r\n}\r\n.info-text {\r\n  text-align: center;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n.post-image{\r\n  width: 100%;\r\n}\r\n.post-image img{\r\n  width:30%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\nmat-paginator{\r\n  margin-top:1rem;\r\n}\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n.example-header-image {\r\n  display: inline-block;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n.example-header-image-post {\r\n  display: inline-block;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <mat-card class=\"example-card\">\n\n      <mat-card-header >\n\n\n\n        <mat-card-title style=\"font-size: 30px;\">    <strong style=\"margin:auto;\">{{advertisername}}</strong></mat-card-title>\n        <!--<mat-card-subtitle>-->\n        <!--{{ eventdate | date:'MMM dd, yyyy' }}-->\n        <!--</mat-card-subtitle>-->\n\n      </mat-card-header>\n      <!--<mat-card-content>-->\n        <!--<p>{{groupdescription}}</p>-->\n        <!--&lt;!&ndash;<strong>Date: </strong>{{ eventdate | date:'MMM dd, yyyy' }}&ndash;&gt;-->\n      <!--</mat-card-content>-->\n      <mat-divider></mat-divider>\n      <button mat-button color=\"warn\" (click)=\"logout()\" >logout</button>\n    </mat-card>\n    <br/>\n    <mat-card class=\"example-card\">\n      <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n      <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n        <mat-form-field>\n          <input\n            matInput\n            type=\"text\"\n            formControlName=\"title\"\n            placeholder=\"Advertisement Title\"\n          >\n          <mat-error *ngIf=\"form.get('title').invalid\">Please enter advetisement title.</mat-error>\n        </mat-form-field>\n        <div>\n          <button mat-stroked-button type=\"button\" (click)=\"filepicker.click()\" >Add Image</button>\n          <input type=\"file\" #filepicker (change)=\"onImagePicked($event)\">\n        </div>\n        <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n          <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n        </div>\n        <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        formControlName=\"content\"\n        placeholder=\"Advertisement Content\"\n      ></textarea>\n          <mat-error *ngIf=\"form.get('content').invalid\">Please enter advertisement content.</mat-error>\n        </mat-form-field>\n        <br/>\n\n        <button\n          mat-raised-button\n          color=\"accent\"\n          type=\"submit\">Save Advertisement</button>\n      </form>\n    </mat-card>\n    <br/>\n    <br/>\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n    <mat-card class=\"example-card\" *ngFor=\"let post of advertisements\">\n      <mat-card-header>\n        <ul style=\"list-style: none; display: flex;\">\n          <!--<li>-->\n            <!--<img class=\"example-header-image-post\"-->\n                 <!--[src]=\"post.profileimg\" style=\"margin-right: 30px;\" >-->\n          <!--</li>-->\n          <li>\n            <mat-card-title><strong>{{post.title}}</strong></mat-card-title>\n\n\n            <mat-card-subtitle *ngIf=\"!post.approved\" style=\"color: darkred;\">\n              Not approved yet!\n            </mat-card-subtitle>\n            <mat-card-subtitle *ngIf=\"post.approved\" style=\"color: green;\">\n              Approved\n            </mat-card-subtitle>\n          </li>\n        </ul>\n      </mat-card-header>\n      <br/>\n      <!--<div class=\"post-image\">-->\n      <img [hidden]=\"!post.imagePath\" mat-card-image [src]=\"post.imagePath\" [alt]=\"post.title\">\n      <!--</div>-->\n\n      <mat-card-content>\n        <p>{{ post.content }}</p>\n        <strong>Date: </strong>{{ post.createdAt | date:'MMM dd, yyyy' }}\n      </mat-card-content>\n\n\n\n      <!--<mat-card-actions *ngIf=\"userIsAuthenticated && userId == post.creator\">-->\n      <!--<button mat-button  color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>-->\n      <!--<a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>-->\n\n      <!--</mat-card-actions>-->\n    </mat-card>\n    <!--<mat-paginator [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"-->\n    <!--*ngIf=\"posts.length > 0\"></mat-paginator>-->\n\n    <p class=\"info-text mat-body-1\" *ngIf=\"advertisements.length <= 0 && !isLoading\">No advertisements added yet!</p>\n\n\n"

/***/ }),

/***/ "./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AdvertiserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertiserpageComponent", function() { return AdvertiserpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../posts/post-create/mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../posts/posts.service */ "./src/app/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdvertiserpageComponent = /** @class */ (function () {
    function AdvertiserpageComponent(authService, postsService, router) {
        this.authService = authService;
        this.postsService = postsService;
        this.router = router;
        this.isLoading = false;
        this.advertisements = [];
    }
    AdvertiserpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authService.getIsAdvertiserAuth()) {
            this.router.navigate(['/advertise']);
        }
        else {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
                }),
                content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                }),
                image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                    asyncValidators: [_posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__["mimeType"]]
                })
            });
            this.isLoading = false;
            this.advertisername = this.authService.getadvertisername();
            this.advertiserId = this.authService.getadvertiserid();
            this.getPosts();
            this.advertisementsSub = this.postsService.getadvertisementPostUpdateListener()
                .subscribe(function (postData) {
                _this.isLoading = false;
                _this.advertisements = postData.advertisements;
                console.log(_this.advertisements);
            });
        }
    };
    AdvertiserpageComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    AdvertiserpageComponent.prototype.onSavePost = function () {
        var _this = this;
        // console.log(this.form.value.title, this.form.value.content,  this.form.value.cname);
        if (this.form.invalid) {
            return;
        }
        if (this.form.value.title == null) {
            return;
        }
        this.isLoading = true;
        this.postsService.addAdvertisement(this.advertiserId, this.advertisername, this.form.value.title, this.form.value.content, this.form.value.image).subscribe(function () {
            _this.postsService.getadvertiserPosts(_this.advertiserId);
            console.log('postadded');
        });
        this.form.reset();
    };
    AdvertiserpageComponent.prototype.logout = function () {
        this.advertisername = null;
        this.advertiserId = null;
        this.advertisements = null;
        this.advertisementsSub.unsubscribe();
        this.authService.advertiserlogout();
    };
    AdvertiserpageComponent.prototype.getPosts = function () {
        this.postsService.getadvertiserPosts(this.advertiserId);
    };
    AdvertiserpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertiserpage',
            template: __webpack_require__(/*! ./advertiserpage.component.html */ "./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.html"),
            styles: [__webpack_require__(/*! ./advertiserpage.component.css */ "./src/app/auth/Advertiser/advertiserpage/advertiserpage/advertiserpage.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _posts_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdvertiserpageComponent);
    return AdvertiserpageComponent;
}());



/***/ }),

/***/ "./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  width: 50%;\r\n  margin-left: 30%;\r\n  margin-top: 10%;\r\n  margin-right: 35%;\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.image-preview{\r\n  height: 8rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview img{\r\n  height: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n\n  <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        placeholder=\"Username\"\n        name=\"uname\"\n        ngModel\n        #unameInput=\"ngModel\"\n        required\n\n      >\n      <mat-error *ngIf=\"unameInput.invalid\">Please enter a username.</mat-error>\n    </mat-form-field>\n\n\n\n\n\n\n    <mat-form-field>\n      <input\n        matInput\n        type=\"email\"\n        placeholder=\"E-mail\"\n        name=\"email\"\n        ngModel\n        #emailInput=\"ngModel\"\n        required\n        email\n      >\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n    <input\n    type=\"password\"\n    matInput\n    placeholder=\"Password\"\n    name=\"password\"\n    ngModel\n    #passwordInput=\"ngModel\"\n    required\n\n    >\n    <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid Password</mat-error>\n    </mat-form-field>\n\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\"\n      *ngIf=\"!isLoading\">Signup</button>\n\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AdvertisersignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisersignupComponent", function() { return AdvertisersignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvertisersignupComponent = /** @class */ (function () {
    function AdvertisersignupComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    AdvertisersignupComponent.prototype.ngOnInit = function () {
    };
    AdvertisersignupComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        // console.log(form.value.email, this.nform.value.image,
        //   form.value.password, form.value.uname, form.value.dname, form.value.regno);
        this.authService.createAdvertiser(form.value.email, form.value.password, form.value.uname);
    };
    AdvertisersignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertisersignup',
            template: __webpack_require__(/*! ./advertisersignup.component.html */ "./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.html"),
            styles: [__webpack_require__(/*! ./advertisersignup.component.css */ "./src/app/auth/Advertiser/advertisersignup/advertisersignup/advertisersignup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdvertisersignupComponent);
    return AdvertisersignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set('authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEUURL = 'https://comsatsconnectbackend.herokuapp.com';
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.logInErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isAuthenticated = false;
        this.isadvertiserAuthenticated = false;
        this.requests = [];
        this.requetsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.friends = [];
        this.friendsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // private userfetched: User;
        this.userfetchedUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AuthService.prototype.getLoginErrors = function () {
        return this.logInErrorSubject;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getadvertiserid = function () {
        return localStorage.getItem('advertiserid');
    };
    AuthService.prototype.getadvertisername = function () {
        return localStorage.getItem('advertisername');
    };
    AuthService.prototype.getName = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getIsAdvertiserAuth = function () {
        return this.isadvertiserAuthenticated;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getMessage = function () {
        console.log(this.message);
        return this.message;
    };
    AuthService.prototype.createUser = function (email, image, username, department, registration) {
        var _this = this;
        // const authData: AuthData = {email: email};
        var userData = new FormData();
        userData.append('email', email);
        // userData.append('password', password);
        userData.append('username', username);
        userData.append('image', image, email);
        userData.append('department', department);
        userData.append('registration', registration);
        console.log(userData);
        this.http.post(BASEUURL + "/api/user/signup", userData)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.createAdvertiser = function (email, password, username) {
        var _this = this;
        // const authData: AuthData = {email: email};
        var userData = new FormData();
        userData.append('email', email);
        userData.append('password', password);
        userData.append('username', username);
        console.log(userData);
        this.http.post(BASEUURL + "/api/advertise/signup", { email: email, password: password, username: username })
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/advertise']);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        // const authData: AuthData = {email: email, password: password};
        return this.http.post(BASEUURL + "/api/user/login", { email: email, password: password })
            .subscribe(function (response) {
            var token = response.token;
            console.log(response);
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.userId = response.userId;
                _this.userN = response.username;
                _this.authStatusListener.next(true);
                console.log('here');
                var now = new Date();
                var expirationDate = new Date(now.getTime() + (expiresInDuration * 100000));
                console.log(expirationDate);
                console.log(response.profileimg);
                _this.saveAuthData(token, expirationDate, _this.userId, _this.userN, response.department, response.profileimg);
                _this.router.navigate(['/messages']).then();
            }
        }, function (error) {
            _this.message = 'invalid Email or Password';
            _this.logInErrorSubject.next(_this.message);
            console.log('error');
            // this.LopginCo.message = this.message;
            // this.router.navigate(['/login']).then();
        });
    };
    AuthService.prototype.advertiserlogin = function (email, password) {
        var _this = this;
        // const authData: AuthData = {email: email, password: password};
        this.http.post(BASEUURL + "/api/advertise/login", { email: email, password: password })
            .subscribe(function (response) {
            console.log(response);
            _this.advertiserid = response.userId;
            _this.advertisername = response.username;
            _this.isadvertiserAuthenticated = true;
            localStorage.setItem('advertiserid', _this.advertiserid);
            localStorage.setItem('advertisername', _this.advertisername);
            console.log('here');
            _this.router.navigate(['/advertiserpage']).then();
        }, function (error) {
            console.log('error');
            // this.router.navigate(['/']).then();
        });
    };
    AuthService.prototype.advertiserlogout = function () {
        this.advertiserid = null;
        this.advertisername = null;
        this.isadvertiserAuthenticated = false;
        localStorage.removeItem('advertiserid');
        localStorage.removeItem('advertisername');
        this.router.navigate(['/advertise']);
    };
    AuthService.prototype.getProfile = function () {
        var _this = this;
        this.http.get(BASEUURL + "/api/user/profile")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return { email: postData.email, usernamefetched: postData.username,
                departmentfetched: postData.department, registrationofetched: postData.registrationo };
        }))
            .subscribe(function (transformedGroupPost) {
            _this.userfetchedUpdated.next({
                email: transformedGroupPost.email,
                usernamefetched: transformedGroupPost.usernamefetched,
                departmentfetched: transformedGroupPost.departmentfetched,
                registrationofetched: transformedGroupPost.registrationofetched
            });
        });
    };
    AuthService.prototype.getProfileUpdateListener = function () {
        return this.userfetchedUpdated.asObservable();
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        this.userN = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 100000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log('Setting timer:' + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 100000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate, userId, userNam, department, profileimg) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('username', userNam);
        localStorage.setItem('department', department);
        localStorage.setItem('profileimg', profileimg);
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        localStorage.removeItem('department');
        localStorage.removeItem('profileimg');
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expiration');
        var userId = localStorage.getItem('userId');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    };
    AuthService.prototype.updateUser = function (id, username, password) {
        var _this = this;
        console.log(id + '\n' + username + '\n' + password);
        var userData = {
            username: username,
            password: password
        };
        console.log(userData);
        this.http.put(BASEUURL + "/api/user/edit/", userData)
            .subscribe(function (response) {
            console.log(response);
            localStorage.removeItem('username');
            localStorage.setItem('username', response.username);
            _this.router.navigate(['/messages']);
        });
    };
    AuthService.prototype.requestFriend = function (id) {
        // return this.http.put( 'http://localhost:3000/api/posts/dislikePost/' + id);
        // @ts-ignore
        return this.http
            .put(BASEUURL + "/api/user/requestfriend/" + id);
    };
    AuthService.prototype.getRequestedFriends = function () {
        var _this = this;
        this.http
            .get(BASEUURL + "/api/user/requestedfriends")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupData) {
            return { groups: groupData.requesteds.map(function (group) {
                    return {
                        username: group.username,
                        // description: group.description,
                        usersrid: group._id,
                    };
                }), maxGroups: groupData.maxGroups };
        })) // change rterieving data
            .subscribe(function (transformedGroupData) {
            _this.requests = transformedGroupData.groups;
            _this.requetsUpdated.next({
                requests: _this.requests.slice(),
                groupCount: transformedGroupData.maxGroups
            });
        }); // subscribe is to liosten
    };
    AuthService.prototype.getReqeuestUpdatedListener = function () {
        return this.requetsUpdated.asObservable();
    };
    AuthService.prototype.getFriends = function () {
        var _this = this;
        this.http
            .get(BASEUURL + "/api/user/joinedfriends")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupData) {
            return { groups: groupData.friends.map(function (group) {
                    return {
                        username: group.username,
                        // description: group.description,
                        usersrid: group._id,
                    };
                }), maxGroups: groupData.maxGroups };
        })) // change rterieving data
            .subscribe(function (transformedGroupData) {
            _this.friends = transformedGroupData.groups;
            _this.friendsUpdated.next({
                friends: _this.friends.slice(),
                groupCount: transformedGroupData.maxGroups
            });
        }); // subscribe is to liosten
    };
    AuthService.prototype.getFriendUpdatedListener = function () {
        return this.friendsUpdated.asObservable();
    };
    AuthService.prototype.acceptrequestFriend = function (id) {
        // @ts-ignore
        return this.http
            .put(BASEUURL + "/api/user/joinfriend/" + id);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 50%;\n  margin: auto;\n  margin-top: 10%;\n  /*margin-right: 35%;*/\n}\nmat-form-field,\ntextarea {\n  width: 100%;\n}\nmat-spinner{\n  margin:auto;\n}\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p style=\"font-size: 22px; font-weight: bold; color: midnightblue; margin-left: 20px; margin-top: 50px;\">Comsats Social helps you connect and share with the students around you.</p>\n\n<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <mat-card-header>\n    <img\n      class=\"example-header-image-post\"\n      [src]=\"'https://res.cloudinary.com/da6znvkjz/image/upload/v1555697890/ComsatsSocial/logo_ayv0eq.jpg'\"\n      style=\"\n         margin-right: 30px;\n    width: 100px;\n    height: 64px;\" >\n    <p style=\"font-size: 16px; font-weight: bold;\">Login</p>\n  </mat-card-header>\n\n  <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"email\"\n        placeholder=\"E-mail\"\n        name=\"email\"\n        ngModel\n        #emailInput=\"ngModel\"\n        required\n        email\n        pattern=\"(fa|sp)[0-9]{2}-[a-z]{3}-[0-9]{3}@student.comsats.edu.pk\"\n      >\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid comsats email.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n     <input\n     type=\"password\"\n     matInput\n     placeholder=\"Password\"\n     name=\"password\"\n     ngModel\n     #passwordInput=\"ngModel\"\n     required\n\n     >\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid Password</mat-error>\n    </mat-form-field>\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\" *ngIf=\"!isLoading\">Login</button>\n\n  </form>\n  <br/>\n  <p style=\"color: darkred;\">{{message}}</p>\n  <br/>\n  <a mat-button routerLink=\"/advertise\">Advertise With Us!</a>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.message = '';
        this.authService.getLoginErrors().subscribe(function (error) {
            _this.message = error;
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        if (this.authService.getIsAuth()) {
            this.isLoading = true;
            this.router.navigate(['/messages']);
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.isLoading = false;
    };
    LoginComponent.prototype.onLogin = function (form) {
        console.log(form.value.email + '' + form.value.password);
        if (form.invalid) {
            return;
        }
        this.isLoading = false;
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/auth/profile/profile.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\n\r\n.example-container {\r\n  width: 100%;\r\n}\r\n\r\n/*@media only screen and (max-width: 1000px) {*/\r\n\r\n/*mat-drawer-content{*/\r\n\r\n/*margin-left: 0px !important;*/\r\n\r\n/*width: 50% !important;*/\r\n\r\n/*height: 860px;*/\r\n\r\n/*}*/\r\n\r\n/*}*/\r\n\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  width: 20%;\r\n  position: absolute;\r\n}\r\n\r\nmat-drawer-content{\r\n  margin: auto !important;\r\n  width: 50% !important;\r\n  height: 860px;\r\n}\r\n\r\n:host ::ng-deep.mat-paginator .mat-paginator-container{\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n/*:host {*/\r\n\r\n/*display: block;*/\r\n\r\n/*margin-top: 1rem;*/\r\n\r\n/*}*/\r\n\r\n.info-text {\r\n  text-align: center;\r\n}\r\n\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n\r\n.commentspanel {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\nul{\r\n  list-style:none ;\r\n  padding: 0;\r\n  margin:0;\r\n}\r\n\r\n.commentspanel li {\r\n  float: left;\r\n}\r\n\r\n.example-card {\r\n  max-width: 100% !important;\r\n  margin: 4px;\r\n}\r\n\r\n.example-header-image {\r\n\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-image{\r\n  width:20%;\r\n}\r\n\r\n.post-image{\r\n  margin: 7px;\r\n  width: 100%;\r\n}\r\n\r\n.post-image img{\r\n  width:50%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\n\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n\r\n.example-header-image {\r\n  display: inline-block;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n\r\n.example-header-image-post {\r\n  display: inline-block;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n\r\n.positive {\r\n  color : blue;\r\n}\r\n\r\n.negative {\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\" >\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift; margin-top:0px !important; list-style: none;\">\n        <li>\n          <strong> Requests </strong>\n        </li>\n        <li *ngFor=\"let request of requests\" style=\"padding: 5px;\">\n          <label>{{request.username}}</label>\n          <br/> <button type=\"button\" mat-stroked-button (click)=\"acceptRequest(request.usersrid)\">Accept</button>\n        </li>\n        <li *ngIf=\"requests.length < 1\" style=\"padding: 5px; color: gray;\">\n          No Requests\n        </li>\n        <br/>\n        <li>\n          <strong> Friends </strong>\n        </li>\n        <li *ngFor=\"let friend of friends\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none; \" [routerLink]=\"['/user', friend.usersrid]\">{{ friend.username}}</a>\n        </li>\n        <li *ngIf=\"friends.length<1\" style=\"padding: 5px; color: gray;\">\n          No friends\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <mat-card class=\"example-card\" >\n      <mat-card-header >\n        <ul style=\"list-style: none; display: flex;\">\n          <li>\n            <img\n              class=\"example-header-image\"\n              [src]=\"profileimg\" >\n            <!--<img-->\n\n            <!--class=\"example-header-image\"-->\n            <!--src=\"data:image/jpeg;base64,{{profileimg}}\" >-->\n          </li>\n          <li>\n            <mat-card-title>Hello {{username}}</mat-card-title>\n            <mat-card-subtitle>Having a Good Day?</mat-card-subtitle>\n          </li>\n        </ul>\n      </mat-card-header>\n    </mat-card>\n    <mat-card class=\"example-card\">\n      <mat-list style=\"list-style: none;\">\n        <mat-list-item *ngFor=\"let profile of profiles; index as i\">\n          <strong style=\"white-space: pre;\">{{profile.main}}</strong>\n\n          <p style=\"margin-bottom: 0px !important;\">\n            {{profile.value}}\n          </p>\n          <!--<mat-divider *ngIf=\"profile.main != 'REG NO:                      '\"></mat-divider>-->\n          <mat-divider *ngIf=\"i < 3\"></mat-divider>\n        </mat-list-item>\n\n      </mat-list>\n\n    </mat-card>\n    <br/>\n<mat-card class=\"example-card\">\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n  <form [formGroup]=\"form\" (submit)=\"onEdit()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        formControlName=\"username\"\n        placeholder=\"New Username\"\n      >\n      <mat-error *ngIf=\"form.get('username').invalid\">Please enter a username.</mat-error>\n    </mat-form-field>\n\n    <!--<mat-form-field>-->\n      <!--<input-->\n        <!--matInput-->\n        <!--type=\"password\"-->\n        <!--formControlName=\"currentpassword\"-->\n        <!--placeholder=\"Current password\"-->\n      <!--&gt;-->\n      <!--<mat-error *ngIf=\"form.get('currentpassword').invalid\">Please enter current password.</mat-error>-->\n    <!--</mat-form-field>-->\n\n    <mat-form-field>\n      <input\n        matInput\n        type=\"password\"\n        formControlName=\"password\"\n        placeholder=\"New password\"\n      >\n      <mat-error *ngIf=\"form.get('password').invalid\">Please enter a password.</mat-error>\n    </mat-form-field>\n\n\n\n\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\"\n      *ngIf=\"!isLoading\">Edit</button>\n\n  </form>\n\n\n</mat-card>\n  </mat-drawer-content>\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\" position=\"end\">\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift;\">\n        <mat-card class=\"example-card\">\n          <strong> <mat-icon>alarm</mat-icon> Notifcations</strong>\n        </mat-card>\n        <mat-card class=\"example-card\"*ngFor=\"let notification of notifications\">\n          <mat-card-header >\n            <ul style=\"list-style: none; display: flex;\">\n              <li>\n                <img *ngIf=\"notification.senderimage\"\n                     class=\"example-header-image-post\"\n                     [src]=\"notification.senderimage\" style=\"margin-right: 10px;\" >\n              </li>\n              <li>\n                <ul  style=\"list-style: none;\">\n                  <li>\n                    {{notification.message}}\n                  </li>\n                  <li>\n                    <mat-card-subtitle>{{TimeFromNow(notification.created)}}</mat-card-subtitle>\n                  </li>\n                </ul>\n\n              </li>\n            </ul>\n\n          </mat-card-header>\n        </mat-card>\n\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/auth/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../groups/groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, postsService, route, groupsService, eventsService) {
        this.authService = authService;
        this.postsService = postsService;
        this.route = route;
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](window.innerWidth);
        this.isLoading = false;
        this.mode = 'create';
        this.requests = [];
        this.events = [];
        this.friends = [];
        this.userIsAuthenticated = false;
        this.notifications = [];
        this.profiles = [];
    }
    ProfileComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        // this.username = this.authService.getName();
        console.log('profileimg' + localStorage.getItem('profileimg'));
        this.profileimg = localStorage.getItem('profileimg');
        // const profileimg1 = localStorage.getItem('profileimg');
        // // @ts-ignore
        // this.profileimg = profileimg1.toString('base64');
        this.username = localStorage.getItem('username');
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
        this.authService.getProfile();
        this.profilesSub = this.authService.getProfileUpdateListener()
            .subscribe(function (postData) {
            _this.profiles = [
                { main: 'Username:                  ',
                    value: postData.usernamefetched },
                { main: 'Email:                          ',
                    value: postData.email },
                { main: 'Department:               ',
                    value: postData.departmentfetched },
                { main: 'REG NO:                      ',
                    value: postData.registrationofetched }
            ];
        });
        console.log(this.authService.getRequestedFriends());
        this.requestsSub = this.authService.getReqeuestUpdatedListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.requests = groupData.requests;
            console.log(_this.requests);
        });
        console.log(this.authService.getFriends());
        this.friendsSub = this.authService.getFriendUpdatedListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.friends = groupData.friends;
            console.log(_this.friends);
        });
        this.postsService.getNotifications();
        this.notificationSub = this.postsService.getNotificationUpdateListener()
            .subscribe(function (notificationData) {
            _this.notifications = notificationData.notifications;
            console.log(_this.notifications);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    };
    ProfileComponent.prototype.onEdit = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        console.log(this.form.value.username + '\n' + this.form.value.password + '\n' + localStorage.getItem('userId'));
        this.authService.updateUser(localStorage.getItem('userId'), this.form.value.username, this.form.value.password);
        this.form.reset();
    };
    ProfileComponent.prototype.TimeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(time).fromNow();
    };
    // addFriend(userID: string) {
    //   this.authService.requestFriend(userID).subscribe(() => {
    //     this.postsService.getuserPosts(this.userid);
    //   });
    // }
    ProfileComponent.prototype.acceptRequest = function (id) {
        var _this = this;
        console.log(id);
        this.authService.acceptrequestFriend(id).subscribe(function () {
            _this.authService.getFriends();
            _this.authService.getRequestedFriends();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDrawer"])
    ], ProfileComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProfileComponent.prototype, "onResize", null);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/auth/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/auth/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _posts_posts_service__WEBPACK_IMPORTED_MODULE_8__["PostsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"], _events_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 50%;\n  margin: auto;\n  margin-top: 10%;\n  /*margin-left: 30%;*/\n  /*margin-top: 10%;*/\n  /*margin-right: 35%;*/\n}\nmat-form-field,\ntextarea {\n  width: 100%;\n}\nmat-spinner{\n  margin:auto;\n}\ninput[type=\"file\"]{\n  visibility: hidden;\n}\n.image-preview{\n  height: 8rem;\n  margin: 1rem 0;\n}\n.image-preview img{\n  height: 100%;\n}\n\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p style=\"font-size: 22px; font-weight: bold; color: midnightblue; margin-left: 20px; margin-top: 50px;\">Comsats Social helps you connect and share with the students around you.</p>\n\n<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n  <mat-card-header>\n    <img\n      class=\"example-header-image-post\"\n      [src]=\"'https://res.cloudinary.com/da6znvkjz/image/upload/v1555697890/ComsatsSocial/logo_ayv0eq.jpg'\"\n      style=\"\n         margin-right: 30px;\n    width: 100px;\n    height: 64px;\" >\n    <p style=\"font-size: 16px; font-weight: bold;\">Sign-Up</p>\n  </mat-card-header>\n  <br/>\n  <form [formGroup]=\"nform\"  *ngIf=\"!isLoading\">\n    <div>\n      <button mat-stroked-button type=\"button\" (click)=\"filepicker.click()\" >Add Image</button>\n      <input type=\"file\" #filepicker (change)=\"onImagePicked($event)\">\n    </div>\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && nform.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"nform.value.title\">\n    </div>\n  </form>\n\n  <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        placeholder=\"Username\"\n        name=\"uname\"\n        ngModel\n        #unameInput=\"ngModel\"\n        required\n      >\n      <mat-error *ngIf=\"unameInput.invalid\">Please enter a username.</mat-error>\n    </mat-form-field>\n\n\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        placeholder=\"Registration Number (FA15-BCS-034)\"\n        name=\"regno\"\n        ngModel\n        #regnoInput=\"ngModel\"\n        required\n        pattern=\"(FA|SP)[0-9]{2}-[A-Z]{3}-[0-9]{3}\"\n\n      >\n      <mat-error *ngIf=\"regnoInput.invalid\">Please enter your valid registration number.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Department\" name=\"dname\"\n                  ngModel\n                  name = \"dname\"\n                  #dnameInput=\"ngModel\"  required>\n        <!--<mat-option>&#45;&#45;</mat-option>-->\n        <mat-option *ngFor=\"let department of departments\" [value]=\"department\" >\n          {{department}}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"dnameInput.invalid\">Please choose a department</mat-error>\n      <!--<mat-hint>{{depControl.value?.sound}}</mat-hint>-->\n    </mat-form-field>\n\n\n    <!--<mat-form-field>-->\n      <!--<input-->\n        <!--matInput-->\n        <!--type=\"text\"-->\n        <!--placeholder=\"Department\"-->\n        <!--name=\"dname\"-->\n        <!--ngModel-->\n        <!--#dnameInput=\"ngModel\"-->\n        <!--required-->\n\n      <!--&gt;-->\n      <!--<mat-error *ngIf=\"dnameInput.invalid\">Please enter a Department.</mat-error>-->\n    <!--</mat-form-field>-->\n\n    <mat-form-field>\n      <input\n        matInput\n        type=\"email\"\n        placeholder=\"COMSATS Provided E-mail like (fa15-bcs-034@student.comsats.edu.pk)\"\n        name=\"email\"\n        ngModel\n        #emailInput=\"ngModel\"\n        required\n        email\n        pattern=\"(fa|sp)[0-9]{2}-[a-z]{3}-[0-9]{3}@student.comsats.edu.pk\"\n      >\n        <!--(fa|sp)[0-9]{2}-[a-z]{3}-[0-9]{3}@student.comsats.edu.pk-->\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid comsats email.</mat-error>\n    </mat-form-field>\n\n    <!--<mat-form-field>-->\n     <!--<input-->\n     <!--type=\"password\"-->\n     <!--matInput-->\n     <!--placeholder=\"Password\"-->\n     <!--name=\"password\"-->\n     <!--ngModel-->\n     <!--#passwordInput=\"ngModel\"-->\n     <!--required-->\n\n     <!--&gt;-->\n      <!--<mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid Password</mat-error>-->\n    <!--</mat-form-field>-->\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\"\n      *ngIf=\"!isLoading\">Signup</button>\n\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../posts/post-create/mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.departments = ['Computer Science',
            'Architecture',
            'Electrical Engineering'
        ];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.nform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                asyncValidators: [_posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_3__["mimeType"]]
            })
        });
    };
    SignupComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        if (this.nform.invalid) {
            return;
        }
        this.isLoading = true;
        console.log(form.value.email, this.nform.value.image, form.value.password, form.value.uname, form.value.dname, form.value.regno);
        this.authService.createUser(form.value.email, this.nform.value.image, form.value.uname, form.value.dname, form.value.regno);
    };
    SignupComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.nform.patchValue({ image: file });
        this.nform.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatRow {\r\n  bottom: 0 !important;\r\n  margin-bottom: 0px !important;\r\n  position: relative;\r\n  max-height: 700px !important;\r\n}\r\n.example-container {\r\n  width: 100%;\r\n}\r\nmat-drawer {\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  width: 20%;\r\n  position: absolute;\r\n  visibility: visible !important;\r\n  /*transform: none !important;*/\r\n}\r\nmat-drawer-content{\r\n  margin: auto !important;\r\n  width: 50% !important;\r\n  height: 860px;\r\n}\r\n.info-text {\r\n  text-align: center;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\nul{\r\n  list-style:none ;\r\n  padding: 0;\r\n  margin:0;\r\n}\r\n.commentspanel li {\r\n  float: left;\r\n}\r\n.example-card {\r\n  max-width: 100% !important;\r\n  margin: 4px;\r\n}\r\n.example-header-image {\r\n\r\n  background-size: cover;\r\n}\r\nmat-card-image{\r\n  width:20%;\r\n}\r\n.post-image{\r\n  margin: 7px;\r\n  width: 100%;\r\n}\r\n.post-image img{\r\n  width:50%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n.example-header-image {\r\n  display: inline-block;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n.example-header-image-post {\r\n  display: inline-block;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n.positive {\r\n  color : blue;\r\n}\r\n.negative {\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\"  >\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift;\">\n        <li>\n          <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let group of groups\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/grouppage', group.id]\">{{ group.groupname}}</a>\n        </li>\n        <li *ngIf=\"groups.length < 1\" style=\"padding: 5px; color: gray;\">\n          Following No Groups\n        </li>\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none; \" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content  >\n    <div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row chatRow\">\n    <div class=\"col s12\">\n<app-message></app-message>\n    </div>\n  </div>\n</div>\n  </mat-drawer-content>\n\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\" position=\"end\">\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift;\">\n        <mat-card class=\"example-card\">\n          <strong> <mat-icon>alarm</mat-icon> Notifcations</strong>\n        </mat-card>\n        <mat-card class=\"example-card\"*ngFor=\"let notification of notifications\">\n          <mat-card-header >\n            <ul style=\"list-style: none; display: flex;\">\n              <li>\n                <img *ngIf=\"notification.senderimage\"\n                     class=\"example-header-image-post\"\n                     [src]=\"notification.senderimage\" style=\"margin-right: 10px;\" >\n              </li>\n              <li>\n                <ul  style=\"list-style: none;\">\n                  <li>\n                    {{notification.message}}\n                  </li>\n                  <li>\n                    <mat-card-subtitle>{{TimeFromNow(notification.created)}}</mat-card-subtitle>\n                  </li>\n                </ul>\n\n              </li>\n            </ul>\n\n          </mat-card-header>\n        </mat-card>\n\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../groups/groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChatComponent = /** @class */ (function () {
    function ChatComponent(authService, route, postsService, groupsService, eventsService) {
        this.authService = authService;
        this.route = route;
        this.postsService = postsService;
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](window.innerWidth);
        this.notifications = [];
        // posts: Post[] = [];
        this.groups = [];
        this.events = [];
    }
    ChatComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        this.postsService.getNotifications();
        this.notificationSub = this.postsService.getNotificationUpdateListener()
            .subscribe(function (notificationData) {
            _this.notifications = notificationData.notifications;
            console.log(_this.notifications);
        });
        console.log(this.groupsService.getJoinedGroups());
        this.groupsSub = this.groupsService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            // this.isLoading = false;
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        console.log(this.eventsService.getJoinedEvents());
        this.eventsSub = this.eventsService.getEventUpdateListener()
            .subscribe(function (eventData) {
            // this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
    };
    ChatComponent.prototype.TimeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(time).fromNow();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDrawer"])
    ], ChatComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ChatComponent.prototype, "onResize", null);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _posts_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"], _events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/events/event-create/event-create.component.css":
/*!****************************************************************!*\
  !*** ./src/app/events/event-create/event-create.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  width: 20%;\r\n}\r\nmat-drawer-content{\r\n  /*background-color: beige;*/\r\n  /*width:80%;*/\r\n  height: 850px;\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.image-preview{\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview img{\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/events/event-create/event-create.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/events/event-create/event-create.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift; margin-top:0px !important;\">\n        <li>\n          <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let group of groups\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/grouppage', group.id]\">{{ group.groupname}}</a>\n        </li>\n        <li *ngIf=\"groups.length < 1\" style=\"padding: 5px; color: gray;\">\n          Following No Groups\n        </li>\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n\n    <mat-card style=\"margin-left: 5px; margin-right: 60px;\">\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSaveEvent()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        formControlName=\"name\"\n        placeholder=\"Event Name\"\n      >\n      <mat-error *ngIf=\"form.get('name').invalid\">Please enter an Event name.</mat-error>\n    </mat-form-field>\n    <!--<div>-->\n    <!--<button mat-stroked-button type=\"button\" (click)=\"filepicker.click()\" >Add Image</button>-->\n    <!--<input type=\"file\" #filepicker (change)=\"onImagePicked($event)\">-->\n    <!--</div>-->\n    <!--<div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">-->\n    <!--<img [src]=\"imagePreview\" [alt]=\"form.value.title\">-->\n    <!--</div>-->\n    <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        formControlName=\"description\"\n        placeholder=\"Event description\"\n      ></textarea>\n      <mat-error *ngIf=\"form.get('description').invalid\">Please enter an event description.</mat-error>\n    </mat-form-field>\n    <br/>\n    <mat-form-field>\n      <input matInput\n             [matDatepicker]=\"picker\"\n             placeholder=\"Choose a date\"\n             formControlName=\"eventdate\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n      <mat-error *ngIf=\"form.get('eventdate').invalid\">Please enter an event date.</mat-error>\n    </mat-form-field>\n    <br/>\n    <mat-form-field>\n      <mat-select\n        matNativeControl\n        placeholder=\"Category\"\n        formControlName = \"cname\">\n\n        <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n          {{category}}\n        </mat-option>\n\n      </mat-select>\n      <mat-error *ngIf=\"form.get('cname').invalid\">Please choose a Category</mat-error>\n\n    </mat-form-field>\n\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\">Save Event</button>\n  </form>\n</mat-card>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/events/event-create/event-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/events/event-create/event-create.component.ts ***!
  \***************************************************************/
/*! exports provided: EventCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreateComponent", function() { return EventCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../groups/groups.service */ "./src/app/groups/groups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {mimeType} from './mime-type.validator';
var EventCreateComponent = /** @class */ (function () {
    function EventCreateComponent(eventService, groupService, route) {
        this.eventService = eventService;
        this.groupService = groupService;
        this.route = route;
        this.isLoading = false;
        this.groups = [];
        this.events = [];
        this.categories = ['General', localStorage.getItem('department')];
    }
    EventCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.groupService.getJoinedGroups());
        this.groupsSub = this.groupService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        console.log(this.eventService.getJoinedEvents());
        this.eventsSub = this.eventService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            cname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            eventdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
        });
    };
    EventCreateComponent.prototype.onSaveEvent = function () {
        // console.log(this.form.value.title, this.form.value.content,  this.form.value.cname);
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        this.eventService.addEvent(this.form.value.name, this.form.value.cname, this.form.value.description, this.form.value.eventdate, localStorage.getItem('username'));
        this.form.reset();
    };
    EventCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-create',
            template: __webpack_require__(/*! ./event-create.component.html */ "./src/app/events/event-create/event-create.component.html"),
            styles: [__webpack_require__(/*! ./event-create.component.css */ "./src/app/events/event-create/event-create.component.css")]
        }),
        __metadata("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EventCreateComponent);
    return EventCreateComponent;
}());



/***/ }),

/***/ "./src/app/events/event-list/event-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/events/event-list/event-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  width: 20%;\r\n}\r\nmat-drawer-content{\r\n  margin: auto !important;\r\n  width: 50% !important;\r\n  height: 860px;\r\n}\r\n.example-card {\r\n  max-width: 100% !important;\r\n  margin: 4px;\r\n}\r\n/*:host {*/\r\n/*display: block;*/\r\n/*margin-top: 1rem;*/\r\n/*}*/\r\n.info-text {\r\n  text-align: center;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\nmat-paginator{\r\n  margin-top:1rem;\r\n}\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/events/event-list/event-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/events/event-list/event-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\">\n    <mat-list style=\"padding-top: 0px\">\n      <ul style=\"list-style:none; padding: 4px; font-family: Bahnschrift; margin-top: 19px; !important;\">\n        <li>\n        <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let groupj of groupsjoined\" style=\"padding: 5px;\">\n        <a style=\"text-decoration: none;\" [routerLink]=\"['/grouppage', groupj.id]\">{{ groupj.groupname}}</a>\n        </li>\n        <li *ngIf=\"groupsjoined.length < 1\" style=\"padding: 5px; color: gray;\">\n        Following No Groups\n        </li>\n\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n\n  <mat-drawer-content>\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n    <mat-card class=\"example-card\" *ngFor=\"let event of events\">\n      <mat-card-header>\n        <ul style=\"list-style: none; display: flex;\">\n\n          <li>\n            <mat-card-title ><a style=\"text-decoration: none; color: black;\" [routerLink]=\"['/user', event.creator]\"><strong>{{event.username}}</strong></a></mat-card-title>\n\n            <mat-card-subtitle>\n              {{ event.eventname }}\n\n            </mat-card-subtitle>\n          </li>\n        </ul>\n      </mat-card-header>\n      <br/>\n\n      <mat-card-content>\n        <p>{{ event.description }}</p>\n        <strong>Date: </strong>{{ event.eventdate | date:'MMM dd, yyyy' }}\n      </mat-card-content>\n\n\n\n      <a mat-button color=\"primary\" [routerLink]=\"['/eventpage', event.id]\">Open</a>\n\n      <mat-action-row *ngIf=\" userId == event.creator\">\n        <!--<button mat-button color=\"warn\" (click)=\"onDelete(event.id)\">DELETE</button>-->\n      </mat-action-row>\n      <mat-action-row *ngIf=\" userId != event.creator && !event.eventmembersid.includes(userId)\">\n        <button mat-button color=\"warn\" (click)=\"onJoin(event.id)\">JOIN</button>\n      </mat-action-row>\n      <!--<mat-action-row *ngIf=\"userIsAuthenticated && userId == group.groupcreator\">-->\n\n      <!--<a mat-button color=\"primary\" [routerLink]=\"['/edit', groupt.id]\">EDIT</a>-->\n      <!--<button mat-button color=\"warn\" (click)=\"onDelete(group.id)\">DELETE</button>-->\n      <!--</mat-action-row>-->\n\n\n    </mat-card>\n\n<mat-paginator style=\"background-color: #FAFAFA\" [length]=\"totalEvents\" [pageSize]=\"eventsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"\n               *ngIf=\"events.length > 0\"></mat-paginator>\n\n<p class=\"info-text mat-body-1\" *ngIf=\"events.length <= 0 && !isLoading\">No events added yet!</p>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/events/event-list/event-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/events/event-list/event-list.component.ts ***!
  \***********************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../groups/groups.service */ "./src/app/groups/groups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventListComponent = /** @class */ (function () {
    function EventListComponent(eventsService, authService, groupsService) {
        this.eventsService = eventsService;
        this.authService = authService;
        this.groupsService = groupsService;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](window.innerWidth);
        this.events = [];
        this.groupsjoined = [];
        this.isLoading = false;
        this.totalEvents = 0;
        this.eventsPerPage = 5;
        this.currentPage = 1;
        // newComment = [];
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
    }
    EventListComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        this.isLoading = true;
        this.eventsService.getEvents(this.eventsPerPage, this.currentPage);
        this.userId = this.authService.getUserId();
        this.username = this.authService.getName();
        this.eventsSub = this.eventsService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.totalEvents = eventData.eventCount;
            _this.username = _this.authService.getName();
            _this.events = eventData.events;
            console.log(_this.events);
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
        console.log(this.groupsService.getJoinedGroups());
        this.groupsSub = this.groupsService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.groupsjoined = groupData.groups;
            console.log(_this.groupsjoined);
        });
    };
    EventListComponent.prototype.ngOnDestroy = function () {
        this.eventsSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    };
    //
    //  onDelete(postId: string) {
    //    this.isLoading = true;
    // this.postsService.deletePost(postId).subscribe(() => {
    //   this.postsService.getPosts(this.postsPerPage, this.currentPage);
    //    });
    //  }
    //
    EventListComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.eventsPerPage = pageData.pageSize;
        this.eventsService.getEvents(this.eventsPerPage, this.currentPage);
    };
    EventListComponent.prototype.onJoin = function (id) {
        this.eventsService.joinEvent(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"])
    ], EventListComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EventListComponent.prototype, "onResize", null);
    EventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/events/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.css */ "./src/app/events/event-list/event-list.component.css")]
        }),
        __metadata("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/events/event-page/event-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/events/event-page/event-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  width: 20%;\r\n}\r\nmat-drawer-content{\r\n  margin: auto !important;\r\n  width: 50% !important;\r\n  height: 860px;\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.image-preview{\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview img{\r\n  height: 100%;\r\n}\r\n:host {\r\n  display: block;\r\n  margin-top: 1rem;\r\n}\r\n.info-text {\r\n  text-align: center;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n.commentspanel {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n\r\n}\r\n.commentspanel li {\r\n  float: left;\r\n}\r\n.post-image{\r\n  width: 100%;\r\n}\r\n.post-image img{\r\n  width:30%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\nmat-paginator{\r\n  margin-top:1rem;\r\n}\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n.example-header-image {\r\n  display: inline-block;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n.example-header-image-post {\r\n  display: inline-block;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.image-preview{\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview img{\r\n  height: 100%;\r\n}\r\n:host {\r\n  display: block;\r\n  margin-top: 1rem;\r\n}\r\n.info-text {\r\n  text-align: center;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n.commentspanel {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n\r\n}\r\n.commentspanel li {\r\n  float: left;\r\n}\r\n.post-image{\r\n  width: 100%;\r\n}\r\n.post-image img{\r\n  width:30%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\nmat-paginator{\r\n  margin-top:1rem;\r\n}\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n.example-header-image {\r\n  display: inline-block;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n.example-header-image-post {\r\n  display: inline-block;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n.example-card {\r\n  max-width: 100%;\r\n  margin: 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/events/event-page/event-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/events/event-page/event-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\"  [opened]=\"screenWidth> 1000\">\n    <mat-list style=\"padding-top: 0px\">\n      <ul style=\" list-style:none; padding: 4px; font-family: Bahnschrift; margin-top: 3px; !important;\">\n        <li>\n          <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let groupj of groups\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/grouppage', groupj.id]\">{{ groupj.groupname}}</a>\n        </li>\n        <li *ngIf=\"groups.length < 1\" style=\"padding: 5px; color: gray;\">\n          Following No Groups\n        </li>\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n\n    <mat-card class=\"example-card\">\n\n      <mat-card-header >\n\n\n\n            <mat-card-title style=\"font-size: 30px;\">    <strong style=\"margin:auto;\">{{eventname}}</strong></mat-card-title>\n            <!--<mat-card-subtitle>-->\n              <!--{{ eventdate | date:'MMM dd, yyyy' }}-->\n            <!--</mat-card-subtitle>-->\n\n      </mat-card-header>\n      <mat-card-content>\n        <p><strong>{{eventdescription}}</strong></p>\n        <strong>Date: </strong>{{ eventdate | date:'MMM dd, yyyy' }}\n      </mat-card-content>\n      <mat-divider></mat-divider>\n      <p style=\"padding-top: 8px;\"> admin: {{eventcreator}}</p>\n      <mat-card-actions *ngIf=\"userId == eventcreatorid\">\n        <mat-accordion class=\"example-headers-align\" >\n          <mat-expansion-panel  [class.mat-expansion-panel]=\"false\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Edit\n              </mat-panel-title>\n\n            </mat-expansion-panel-header>\n            <form (submit)=\"onEditEvent(eventeditForm)\" #eventeditForm=\"ngForm\" >\n\n                <mat-form-field style=\"width:700px; !important; \" >\n                  <input\n                    matInput\n                    type=\"text\"\n                          placeholder=\"new name\"\n                          ngModel\n                          #eventnameInput=\"ngModel\"\n                          required\n                          name=\"eventname\"\n                          eventname>\n                  <mat-error *ngIf=\"eventnameInput.invalid\">Please enter a name.</mat-error>\n\n                </mat-form-field>\n                <mat-form-field style=\"width:700px; !important; \" >\n                  <input  matInput\n                          type=\"text\"\n                          placeholder=\"new description\"\n                          ngModel\n                          #descriptionInput=\"ngModel\"\n                          required\n                          name=\"description\"\n                          description>\n                  <mat-error *ngIf=\"descriptionInput.invalid\">Please enter a description.</mat-error>\n\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput\n                         [matDatepicker]=\"picker\"\n                         placeholder=\"new date\"\n                         ngModel\n                         #eventdateInput=\"ngModel\"\n                         required\n                         name=\"eventdate\"\n                         eventdate>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                  <mat-error *ngIf=\"eventdateInput.invalid\">Please enter an event date.</mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button color=\"primary\"\n                  mat-raised-button\n                  type=\"submit\">\n                  Change\n                </button>\n\n            </form>\n\n          </mat-expansion-panel>\n        </mat-accordion>\n      </mat-card-actions>\n    </mat-card>\n<br/>\n<mat-card class=\"example-card\">\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        formControlName=\"title\"\n        placeholder=\"Post Title\"\n      >\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <div>\n      <button mat-stroked-button type=\"button\" (click)=\"filepicker.click()\" >Add Image</button>\n      <input type=\"file\" #filepicker (change)=\"onImagePicked($event)\">\n    </div>\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n    </div>\n    <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        formControlName=\"content\"\n        placeholder=\"Post Content\"\n      ></textarea>\n      <mat-error *ngIf=\"form.get('content').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <br/>\n\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\">Save Post</button>\n  </form>\n</mat-card>\n\n<br/>\n<br/>\n\n\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mat-card class=\"example-card\" *ngFor=\"let post of posts\">\n  <mat-card-header>\n    <ul style=\"list-style: none; display: flex;\">\n      <li>\n        <img class=\"example-header-image-post\"\n             [src]=\"post.profileimg\" style=\"margin-right: 30px;\" >\n      </li>\n      <li>\n        <mat-card-title *ngIf=\"post.creator\"><a style=\"text-decoration: none; color: black;\" [routerLink]=\"['/user', post.creator]\"><strong>{{post.username}}</strong></a></mat-card-title>\n\n        <mat-card-subtitle>\n          <strong>\n            {{ post.title }}\n          </strong>\n        </mat-card-subtitle>\n      </li>\n    </ul>\n  </mat-card-header>\n  <!--<div class=\"post-image\">-->\n  <br/>\n  <img [hidden]=\"!post.imagePath\" mat-card-image [src]=\"post.imagePath\" [alt]=\"post.title\">\n  <!--</div>-->\n\n  <mat-card-content>\n    <p style=\"font-size: 26px !important;\">{{ post.content }}</p>\n    <strong>Date: </strong>{{ post.createdAt | date:'MMM dd, yyyy' }}\n  </mat-card-content>\n\n  <button mat-icon-button  (click)=\"likePost(post.id)\" >\n    <mat-icon *ngIf=\"post.likedBy.includes(userId)\" color=\"primary\" >thumb_up</mat-icon>\n    <mat-icon *ngIf=\"!post.likedBy.includes(userId)\"  >thumb_up</mat-icon>\n    {{ post.likes }}\n  </button>\n\n\n\n\n  <button mat-icon-button (click)=\"dislikePost(post.id)\" >\n    <mat-icon *ngIf=\"post.dislikedBy.includes(userId)\" color=\"primary\" >thumb_down</mat-icon>\n    <mat-icon *ngIf=\"!post.dislikedBy.includes(userId)\"  >thumb_down</mat-icon>\n    {{ post.dislikes }}\n  </button>\n\n  <br/>\n\n  <mat-accordion class=\"example-headers-align\" >\n    <mat-expansion-panel  [class.mat-expansion-panel]=\"false\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n\n          <mat-icon >comment</mat-icon>\n          {{ post.commentsNo }}\n\n        </mat-panel-title>\n\n      </mat-expansion-panel-header>\n\n      <ul class=\"commentspanel\">\n        <form (submit)=\"addComment(post, commentForm)\" #commentForm=\"ngForm\" >\n          <li >\n            <mat-form-field style=\"width:700px; !important; \" >\n              <input  matInput\n                      type=\"text\"\n                      placeholder=\"Add a Comment\"\n                      ngModel\n                      #commentInput=\"ngModel\"\n                      required\n                      name=\"comment\"\n                      comment>\n              <!--matInput-->\n              <!--type=\"text\"-->\n              <!--placeholder=\"new name\"-->\n              <!--ngModel-->\n              <!--#groupnameInput=\"ngModel\"-->\n              <!--required-->\n              <!--name=\"groupname\"-->\n              <!--groupname-->\n              <mat-error *ngIf=\"commentInput.invalid\">Please enter a comment.</mat-error>\n\n            </mat-form-field>\n          </li>\n          <li>\n            <button mat-raised-button color=\"primary\"\n                    mat-raised-button\n                    type=\"submit\">\n              <mat-icon >send</mat-icon>\n            </button>\n          </li>\n        </form>\n      </ul>\n\n      <mat-list style=\"list-style: none;\">\n        <mat-list-item *ngFor=\"let comment of post.comments\" style=\"margin:0;\">\n          <strong>{{comment.commentator}}: &nbsp; </strong>\n\n          <p style=\"margin-bottom: 0px !important;\">\n            {{comment.comment}}\n          </p>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n\n      </mat-list>\n\n\n\n\n\n\n\n    </mat-expansion-panel>\n\n\n\n\n\n\n  </mat-accordion>\n\n\n  <!--<mat-card-actions *ngIf=\"userIsAuthenticated && userId == post.creator\">-->\n    <!--<button mat-button  color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>-->\n    <!--<a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>-->\n\n  <!--</mat-card-actions>-->\n</mat-card>\n\n\n<!--<mat-paginator [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"-->\n<!--*ngIf=\"posts.length > 0\"></mat-paginator>-->\n\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No posts added yet!</p>\n  </mat-drawer-content>\n  <mat-drawer mode=\"side\"  [opened]=\"screenWidth> 1000\" position=\"end\">\n    <mat-list style=\"padding-top: 0px\">\n      <ul style=\" list-style:none; padding: 4px; font-family: Bahnschrift; margin-top: 3px; !important;\">\n        <li>\n          <strong> Event Followers </strong>\n        </li>\n        <li *ngFor=\"let members of eventMembers\" style=\"padding: 5px;\">\n          <strong> {{members.Euser}}</strong>\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/events/event-page/event-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/events/event-page/event-page.component.ts ***!
  \***********************************************************/
/*! exports provided: EventPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageComponent", function() { return EventPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../posts/post-create/mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../groups/groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EventPageComponent = /** @class */ (function () {
    function EventPageComponent(eventService, groupsService, authService, route) {
        this.eventService = eventService;
        this.groupsService = groupsService;
        this.authService = authService;
        this.route = route;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](window.innerWidth);
        this.isLoading = false;
        this.eventMembers = [];
        this.posts = [];
        this.groups = [];
        this.events = [];
        this.userIsAuthenticated = false;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()('https://comsatsconnectbackend.herokuapp.com');
    }
    EventPageComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    EventPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                asyncValidators: [_posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('eventId')) {
                _this.eventid = paramMap.get('eventId');
                console.log(_this.eventid);
                _this.getPosts();
            }
        });
        this.isLoading = true;
        this.userId = this.authService.getUserId();
        // this.username = this.authService.getName();
        this.postsSub = this.eventService.getPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            //     this.totalGroups = eventData.eventCount;
            _this.username = _this.authService.getName();
            _this.posts = postData.posts;
            _this.eventMembers = postData.eventmembers;
            _this.eventname = postData.eventname,
                _this.eventdate = postData.eventdate,
                _this.eventdescription = postData.description,
                _this.eventcreator = postData.eventcreator,
                _this.eventcreatorid = postData.eventcreatorid,
                console.log(_this.eventname);
            console.log(_this.posts);
            console.log(_this.eventMembers);
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
        console.log(this.groupsService.getJoinedGroups());
        this.groupsSub = this.groupsService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        console.log(this.eventService.getJoinedEvents());
        this.eventsSub = this.eventService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
        this.socket.on('refreshpage', function (data) {
            _this.eventService.getPosts(_this.eventid);
        });
    };
    EventPageComponent.prototype.getPosts = function () {
        this.eventService.getPosts(this.eventid);
    };
    EventPageComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    EventPageComponent.prototype.onSavePost = function () {
        var _this = this;
        // console.log(this.form.value.title, this.form.value.content,  this.form.value.cname);
        if (this.form.invalid) {
            return;
        }
        if (this.form.value.title == null) {
            return;
        }
        this.isLoading = true;
        this.eventService.addPost(this.eventid, this.form.value.title, this.form.value.content, this.form.value.image).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.eventService.getPosts(_this.eventid);
        });
        this.form.reset();
    };
    EventPageComponent.prototype.likePost = function (postid) {
        var _this = this;
        console.log(postid + ' ' + this.eventid);
        this.eventService.likePost(postid, this.eventid).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.eventService.getPosts(_this.eventid);
        });
    };
    EventPageComponent.prototype.dislikePost = function (postid) {
        var _this = this;
        console.log(postid + ' ' + this.eventid);
        this.eventService.dislikePost(postid, this.eventid).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.eventService.getPosts(_this.eventid);
        });
    };
    EventPageComponent.prototype.addComment = function (post, form) {
        var _this = this;
        console.log(post.id + '\n' + form.value.comment + '\n' + this.eventid);
        if (form.invalid) {
            return;
        }
        else {
            this.eventService.addComment(post.id, this.eventid, form.value.comment).subscribe(function () {
                var a = _this.posts.indexOf(post);
                _this.posts[a].commentsNo++;
                _this.posts[a].comments.push({ comment: form.value.comment, commentator: _this.username });
            });
        }
    };
    EventPageComponent.prototype.onEditEvent = function (form) {
        var _this = this;
        // name: string, description: string, eventdate: Date
        if (form.invalid) {
            return;
        }
        this.eventService.updateEvent(this.eventid, form.value.eventname, form.value.description, form.value.eventdate).
            subscribe(function () {
            _this.eventService.getPosts(_this.eventid);
        });
        // this.groupsService.updateGroup(
        //   this.groupid,
        //   this.groupname,
        //   this.gr,
        //   this.form.value.image);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventPageComponent.prototype, "eventid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"])
    ], EventPageComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EventPageComponent.prototype, "onResize", null);
    EventPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-page',
            template: __webpack_require__(/*! ./event-page.component.html */ "./src/app/events/event-page/event-page.component.html"),
            styles: [__webpack_require__(/*! ./event-page.component.css */ "./src/app/events/event-page/event-page.component.css")]
        }),
        __metadata("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"], _groups_groups_service__WEBPACK_IMPORTED_MODULE_8__["GroupsService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EventPageComponent);
    return EventPageComponent;
}());



/***/ }),

/***/ "./src/app/events/events.service.ts":
/*!******************************************!*\
  !*** ./src/app/events/events.service.ts ***!
  \******************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEUURL = 'https://comsatsconnectbackend.herokuapp.com';
var EventsService = /** @class */ (function () {
    function EventsService(http, router) {
        this.http = http;
        this.router = router;
        this.username = '';
        this.events = [];
        this.posts = [];
        this.eventsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    EventsService.prototype.getPosts = function (id) {
        var _this = this;
        console.log('eventinservicee' + id);
        this.http.get(BASEUURL + "/api/events/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return { posts: postData.posts.map(function (post) {
                    return {
                        title: post.title,
                        content: post.content,
                        username: post.username,
                        creator: post.creator,
                        likes: post.likes,
                        likedBy: post.likedBy,
                        dislikedBy: post.dislikedBy,
                        id: post._id,
                        commentsNo: post.commentsNo,
                        comments: post.comments,
                        profileimg: post.profileimg,
                        dislikes: post.dislikes,
                        createdAt: post.createdAt,
                        imagePath: post.imagePath
                    };
                }), eventcreatorid: postData.eventcreatorid, eventmembers: postData.eventmembers, eventname: postData.eventname,
                eventcreator: postData.eventcreator,
                eventdescription: postData.description, eventdate: postData.eventdate };
        }))
            .subscribe(function (transformedEventPost) {
            _this.posts = transformedEventPost.posts;
            _this.postsUpdated.next({
                posts: _this.posts.slice(),
                eventcreatorid: transformedEventPost.eventcreatorid,
                eventmembers: transformedEventPost.eventmembers,
                eventname: transformedEventPost.eventname,
                eventdate: transformedEventPost.eventdate,
                description: transformedEventPost.eventdescription,
                eventcreator: transformedEventPost.eventcreator
            });
        });
    };
    EventsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    EventsService.prototype.getEvents = function (eventsPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pagesize=" + eventsPerPage + "&page=" + currentPage; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/events" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (eventData) {
            return { events: eventData.events.map(function (event) {
                    return {
                        eventname: event.eventname,
                        description: event.description,
                        id: event._id,
                        eventdate: event.eventdate,
                        eventmembersid: event.eventmembersid,
                        username: event.username,
                        creator: event.eventcreator,
                        category: event.category,
                    };
                }), maxEvents: eventData.maxEvents };
        })) // change rterieving data
            .subscribe(function (transformedEventData) {
            _this.events = transformedEventData.events;
            _this.eventsUpdated.next({
                events: _this.events.slice(),
                eventCount: transformedEventData.maxEvents
            });
        }); // subscribe is to liosten
    };
    EventsService.prototype.getJoinedEvents = function () {
        var _this = this;
        this.http
            .get(BASEUURL + "/api/events/joinedevents")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (eventData) {
            return { events: eventData.events.map(function (event) {
                    return {
                        eventname: event.eventname,
                        // description: group.description,
                        id: event._id,
                    };
                }), maxEvents: eventData.maxEvents };
        })) // change rterieving data
            .subscribe(function (transformedEventData) {
            _this.events = transformedEventData.events;
            _this.eventsUpdated.next({
                events: _this.events.slice(),
                eventCount: transformedEventData.maxEvents
            });
        }); // subscribe is to liosten
    };
    EventsService.prototype.getEventUpdateListener = function () {
        return this.eventsUpdated.asObservable();
    };
    EventsService.prototype.updateEvent = function (id, eventname, description, eventdate) {
        return this.http.put(BASEUURL + "/api/events/" + id, { eventname: eventname, description: description, eventdate: eventdate });
    };
    EventsService.prototype.addEvent = function (eventname, category, description, eventdate, username) {
        var _this = this;
        return this.http
            .post(BASEUURL + "/api/events", { eventname: eventname, description: description, category: category, eventdate: eventdate, username: username })
            .subscribe(function (responseData) {
            _this.router.navigate(['/eventlist']);
        });
    };
    EventsService.prototype.addPost = function (id, title, content, image) {
        var postData = new FormData();
        postData.append('title', title);
        postData.append('content', content);
        postData.append('image', image, title);
        // postData.append('username', localStorage.getItem('username'));
        // postData.append('profileimg', profileimg);
        console.log(postData);
        return this.http
            .put(BASEUURL + "/api/events/addeventPost/" + id, postData);
        // .subscribe( responseData  => {
        //   this.router.navigate(['/eventpage/' + id]);
        // });
    };
    EventsService.prototype.joinEvent = function (id) {
        var _this = this;
        // @ts-ignore
        this.http
            .put(BASEUURL + "/api/events/adduser/" + id)
            .subscribe(function (responseData) {
            _this.router.navigate(['/eventpage/' + id]);
        });
    };
    EventsService.prototype.likePost = function (postid, eventid) {
        var eventData = {
            eventid: eventid,
            postid: postid
        };
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/events/likeeventpost/" + eventid, eventData);
    };
    //
    EventsService.prototype.dislikePost = function (postid, eventid) {
        var eventData = {
            eventid: eventid,
            postid: postid
        };
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/events/dislikeeventpost/" + eventid, eventData);
    };
    EventsService.prototype.addComment = function (postid, eventid, comment) {
        var eventData = {
            eventid: eventid,
            postid: postid,
            comment: comment
        };
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/events/commenteventpost/" + eventid, eventData);
    };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/groups/group-create/group-create.component.css":
/*!****************************************************************!*\
  !*** ./src/app/groups/group-create/group-create.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  width: 20%;\r\n}\r\nmat-drawer-content{\r\n  /*background-color: beige;*/\r\n  /*width:80%;*/\r\n  height: 850px;\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.image-preview{\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview img{\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/groups/group-create/group-create.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/groups/group-create/group-create.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift; margin-top:0px !important;\">\n        <li>\n          <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let group of groups\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/grouppage', group.id]\">{{ group.groupname}}</a>\n        </li>\n        <li *ngIf=\"groups.length < 1\" style=\"padding: 5px; color: gray;\">\n          Following No Groups\n        </li>\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n\n<mat-card style=\"margin-left: 5px; margin-right: 60px;\">\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSaveGroup()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        formControlName=\"name\"\n        placeholder=\"Group Name\"\n      >\n      <mat-error *ngIf=\"form.get('name').invalid\">Please enter a group name.</mat-error>\n    </mat-form-field>\n    <!--<div>-->\n      <!--<button mat-stroked-button type=\"button\" (click)=\"filepicker.click()\" >Add Image</button>-->\n      <!--<input type=\"file\" #filepicker (change)=\"onImagePicked($event)\">-->\n    <!--</div>-->\n    <!--<div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">-->\n      <!--<img [src]=\"imagePreview\" [alt]=\"form.value.title\">-->\n    <!--</div>-->\n    <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        formControlName=\"description\"\n        placeholder=\"Group description\"\n      ></textarea>\n      <mat-error *ngIf=\"form.get('description').invalid\">Please enter a group description.</mat-error>\n    </mat-form-field>\n    <br/>\n    <mat-form-field>\n      <mat-select\n        matNativeControl\n        placeholder=\"Category\"\n        formControlName = \"cname\">\n\n        <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n          {{category}}\n        </mat-option>\n\n      </mat-select>\n      <mat-error *ngIf=\"form.get('cname').invalid\">Please choose a Category</mat-error>\n\n    </mat-form-field>\n\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\">Save Group</button>\n  </form>\n</mat-card>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/groups/group-create/group-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/groups/group-create/group-create.component.ts ***!
  \***************************************************************/
/*! exports provided: GroupCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateComponent", function() { return GroupCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../events/events.service */ "./src/app/events/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {mimeType} from './mime-type.validator';
var GroupCreateComponent = /** @class */ (function () {
    function GroupCreateComponent(groupService, eventsService, route) {
        this.groupService = groupService;
        this.eventsService = eventsService;
        this.route = route;
        this.isLoading = false;
        this.groups = [];
        this.events = [];
        this.categories = ['General', localStorage.getItem('department')];
    }
    GroupCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.groupService.getJoinedGroups());
        this.groupsSub = this.groupService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        console.log(this.eventsService.getJoinedEvents());
        this.eventsSub = this.eventsService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            cname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
        });
    };
    GroupCreateComponent.prototype.onSaveGroup = function () {
        // console.log(this.form.value.title, this.form.value.content,  this.form.value.cname);
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        this.groupService.addGroup(this.form.value.name, this.form.value.cname, this.form.value.description, localStorage.getItem('username'));
        this.form.reset();
    };
    GroupCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-create',
            template: __webpack_require__(/*! ./group-create.component.html */ "./src/app/groups/group-create/group-create.component.html"),
            styles: [__webpack_require__(/*! ./group-create.component.css */ "./src/app/groups/group-create/group-create.component.css")]
        }),
        __metadata("design:paramtypes", [_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"],
            _events_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], GroupCreateComponent);
    return GroupCreateComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-list/group-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/groups/group-list/group-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  width: 20%;\r\n}\r\nmat-drawer-content{\r\n  margin: auto !important;\r\n  width: 50% !important;\r\n  height: 860px;\r\n}\r\n.example-card {\r\n  max-width: 100% !important;\r\n  margin: 4px;\r\n}\r\n/*:host {*/\r\n/*display: block;*/\r\n/*margin-top: 1rem;*/\r\n/*}*/\r\n.info-text {\r\n  text-align: center;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\nmat-paginator{\r\n  margin-top:1rem;\r\n}\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/groups/group-list/group-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/groups/group-list/group-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\">\n    <mat-list style=\"padding-top: 0px\">\n      <ul style=\"list-style:none; padding: 4px; font-family: Bahnschrift; margin-top: 0px; !important;\">\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n    <mat-card class=\"example-card\" *ngFor=\"let group of groups\">\n      <mat-card-header>\n        <ul style=\"list-style: none; display: flex;\">\n\n          <li>\n            <mat-card-title><strong>{{group.groupname}}</strong></mat-card-title>\n\n\n\n            <mat-card-subtitle ><a style=\"text-decoration: none; color: black;\" [routerLink]=\"['/user', group.creator]\"><strong>{{group.username}}</strong></a></mat-card-subtitle>\n          </li>\n        </ul>\n      </mat-card-header>\n      <br/>\n\n      <mat-card-content>\n        <p>{{ group.description }}</p>\n        <!--<strong>Date: </strong>{{ event.eventdate | date:'MMM dd, yyyy' }}-->\n      </mat-card-content>\n\n\n\n\n      <!--<mat-action-row *ngIf=\"userIsAuthenticated && userId == group.groupcreator\">-->\n      <a mat-button color=\"primary\" *ngIf=\"group.groupmembersid.includes(userId)\" [routerLink]=\"['/grouppage', group.id]\">Open</a>\n      <mat-action-row *ngIf=\" userId == group.creator\">\n        <!--<button mat-button color=\"warn\" (click)=\"onDelete(group.id)\">DELETE</button>-->\n      </mat-action-row>\n      <mat-action-row *ngIf=\" userId != group.creator && !group.groupmembersid.includes(userId) && !group.grouprequestsid.includes(userId)\">\n        <button mat-button color=\"warn\" (click)=\"onJoin(group.id)\">JOIN</button>\n      </mat-action-row>\n      <mat-action-row *ngIf=\" userId != group.creator && !group.groupmembersid.includes(userId) && group.grouprequestsid.includes(userId)\">\n        <label color=\"primary\">Request sent!</label>\n      </mat-action-row>\n      <!--<a mat-button color=\"primary\" [routerLink]=\"['/edit', groupt.id]\">EDIT</a>-->\n      <!--<button mat-button color=\"warn\" (click)=\"onDelete(group.id)\">DELETE</button>-->\n      <!--</mat-action-row>-->\n\n\n    </mat-card>\n    <!--<mat-accordion multi=\"true\" *ngIf=\"events.length > 0 && !isLoading\">-->\n    <!--<mat-expansion-panel style=\"margin-left: 5px; margin-right: 60px;\" *ngFor=\"let event of events\">-->\n    <!--<mat-expansion-panel-header>-->\n    <!--<strong>{{event.eventname}}</strong>-->\n\n\n<mat-paginator  style=\"background-color: #FAFAFA\" [length]=\"totalGroups\" [pageSize]=\"groupsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"\n*ngIf=\"groups.length > 0\"></mat-paginator>\n\n<p class=\"info-text mat-body-1\" *ngIf=\"groups.length <= 0 && !isLoading\">No groups added yet!</p>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/groups/group-list/group-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/groups/group-list/group-list.component.ts ***!
  \***********************************************************/
/*! exports provided: GroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function() { return GroupListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../events/events.service */ "./src/app/events/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroupListComponent = /** @class */ (function () {
    function GroupListComponent(groupsService, authService, eventsService) {
        this.groupsService = groupsService;
        this.authService = authService;
        this.eventsService = eventsService;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](window.innerWidth);
        this.groups = [];
        // groupsjoined: Group[] = [];
        this.events = [];
        this.isLoading = false;
        this.totalGroups = 0;
        this.groupsPerPage = 5;
        this.currentPage = 1;
        // newComment = [];
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()('https://comsatsconnectbackend.herokuapp.com');
    }
    GroupListComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    GroupListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        this.isLoading = true;
        this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
        this.userId = this.authService.getUserId();
        this.username = this.authService.getName();
        this.groupsSub = this.groupsService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.totalGroups = groupData.groupCount;
            _this.username = _this.authService.getName();
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
        console.log(this.eventsService.getJoinedEvents());
        this.eventsSub = this.eventsService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
    };
    GroupListComponent.prototype.ngOnDestroy = function () {
        this.groupsSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    };
    //
    //  onDelete(postId: string) {
    //    this.isLoading = true;
    // this.postsService.deletePost(postId).subscribe(() => {
    //   this.postsService.getPosts(this.postsPerPage, this.currentPage);
    //    });
    //  }
    //
    GroupListComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.groupsPerPage = pageData.pageSize;
        this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
    };
    GroupListComponent.prototype.onJoin = function (id) {
        var _this = this;
        this.groupsService.requestGroup(id).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.groupsService.getGroups(_this.groupsPerPage, _this.currentPage);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"])
    ], GroupListComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GroupListComponent.prototype, "onResize", null);
    GroupListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-list',
            template: __webpack_require__(/*! ./group-list.component.html */ "./src/app/groups/group-list/group-list.component.html"),
            styles: [__webpack_require__(/*! ./group-list.component.css */ "./src/app/groups/group-list/group-list.component.css")]
        }),
        __metadata("design:paramtypes", [_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _events_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]])
    ], GroupListComponent);
    return GroupListComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-page/group-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/groups/group-page/group-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  width: 20%;\r\n}\r\nmat-drawer-content{\r\n  margin:auto !important;\r\n  width: 50% !important;\r\n  height: 860px;\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.image-preview{\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview img{\r\n  height: 100%;\r\n}\r\n:host {\r\n  display: block;\r\n  margin-top: 1rem;\r\n}\r\n.info-text {\r\n  text-align: center;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n.commentspanel {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n\r\n}\r\n.commentspanel li {\r\n  float: left;\r\n}\r\n.post-image{\r\n  width: 100%;\r\n}\r\n.post-image img{\r\n  width:30%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\nmat-paginator{\r\n  margin-top:1rem;\r\n}\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n.example-header-image {\r\n  display: inline-block;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n.example-header-image-post {\r\n  display: inline-block;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n.example-card {\r\n  max-width:100%;\r\n  margin: 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/groups/group-page/group-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/groups/group-page/group-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\">\n    <mat-list style=\"padding-top: 0px\">\n      <ul style=\" list-style: none; padding: 4px; font-family: Bahnschrift; margin-top: 3px; !important;\">\n        <li>\n        <strong> Group Requests </strong>\n        </li>\n        <li *ngFor=\"let groupr of groupRequests\" style=\"padding: 5px;\">\n        {{groupr.Guser}} <br/> <button type=\"button\" mat-stroked-button (click)=\"acceptRequest(groupr.Guserid)\">Accept</button>\n        </li>\n        <li *ngIf=\"groupRequests.length < 1\" style=\"padding: 5px; color: gray;\">\n        No Requests\n        </li>\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <mat-card class=\"example-card\">\n\n      <mat-card-header >\n\n\n\n        <mat-card-title style=\"font-size: 30px;\">    <strong style=\"margin:auto;\">{{groupname}}</strong></mat-card-title>\n        <!--<mat-card-subtitle>-->\n        <!--{{ eventdate | date:'MMM dd, yyyy' }}-->\n        <!--</mat-card-subtitle>-->\n\n      </mat-card-header>\n      <mat-card-content>\n        <p><strong>{{groupdescription}}</strong></p>\n        <!--<strong>Date: </strong>{{ eventdate | date:'MMM dd, yyyy' }}-->\n      </mat-card-content>\n\n      <button mat-raised-button *ngIf=\"userId != groupcreatorid\" color=\"primary\" (click)=\"leaveGroup(userId)\"> Leave Group</button>\n      <br/>\n      <mat-divider></mat-divider>\n      <p style=\"padding-top: 8px;\"> admin: {{groupcreator}}</p>\n      <mat-card-actions *ngIf=\"userId == groupcreatorid\">\n        <mat-accordion class=\"example-headers-align\" >\n          <mat-expansion-panel  [class.mat-expansion-panel]=\"false\"  hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Edit\n              </mat-panel-title>\n\n            </mat-expansion-panel-header>\n\n            <form (submit)=\"onEditGroup(groupeditForm)\" #groupeditForm=\"ngForm\" >\n                <mat-form-field style=\"width:700px; !important; \" >\n                  <input  matInput\n                          type=\"text\"\n                          placeholder=\"new name\"\n                          ngModel\n                          #groupnameInput=\"ngModel\"\n                          required\n                          name=\"groupname\"\n                         groupname>\n                  <mat-error *ngIf=\"groupnameInput.invalid\">Please enter a name.</mat-error>\n                  <!--matInput-->\n                  <!--type=\"text\"-->\n                  <!--placeholder=\"new description\"-->\n                  <!--ngModel-->\n                  <!--#descriptionInput=\"ngModel\"-->\n                  <!--required-->\n                  <!--name=\"description\"-->\n                  <!--description-->\n                </mat-form-field>\n                <mat-form-field style=\"width:700px; !important; \" >\n                  <input  matInput\n                          type=\"text\"\n                          placeholder=\"new description\"\n                          ngModel\n                          #descriptionInput=\"ngModel\"\n                          required\n                          name=\"description\"\n                          description>\n                  <mat-error *ngIf=\"descriptionInput.invalid\">Please enter a description.</mat-error>\n\n                </mat-form-field>\n<br/>\n              <button mat-raised-button color=\"primary\"\n                      mat-raised-button\n                      type=\"submit\">\n                Change\n              </button>\n            </form>\n\n          </mat-expansion-panel>\n        </mat-accordion>\n      </mat-card-actions>\n    </mat-card>\n    <br/>\n<mat-card class=\"example-card\">\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        formControlName=\"title\"\n        placeholder=\"Post Title\"\n      >\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <div>\n      <button mat-stroked-button type=\"button\" (click)=\"filepicker.click()\" >Add Image</button>\n      <input type=\"file\" #filepicker (change)=\"onImagePicked($event)\">\n    </div>\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n    </div>\n    <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        formControlName=\"content\"\n        placeholder=\"Post Content\"\n      ></textarea>\n      <mat-error *ngIf=\"form.get('content').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <br/>\n\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\">Save Post</button>\n  </form>\n</mat-card>\n<br/>\n<br/>\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n<mat-card class=\"example-card\" *ngFor=\"let post of posts\">\n  <mat-card-header>\n    <ul style=\"list-style: none; display: flex;\">\n      <li>\n        <img class=\"example-header-image-post\"\n             [src]=\"post.profileimg\" style=\"margin-right: 30px;\" >\n      </li>\n      <li>\n\n        <mat-card-title *ngIf=\"post.creator\"><a style=\"text-decoration: none; color: black;\" [routerLink]=\"['/user', post.creator]\"><strong>{{post.username}}</strong></a></mat-card-title>\n\n        <mat-card-subtitle>\n          <strong>\n            {{ post.title }}\n          </strong>\n        </mat-card-subtitle>\n      </li>\n    </ul>\n  </mat-card-header>\n  <br/>\n  <!--<div class=\"post-image\">-->\n  <img [hidden]=\"!post.imagePath\" mat-card-image [src]=\"post.imagePath\" [alt]=\"post.title\">\n  <!--</div>-->\n\n  <mat-card-content>\n    <p style=\"font-size: 26px !important;\">{{ post.content }}</p>\n    <strong>Date: </strong>{{ post.createdAt | date:'MMM dd, yyyy' }}\n  </mat-card-content>\n\n  <button mat-icon-button  (click)=\"likePost(post.id,post)\" >\n    <mat-icon *ngIf=\"post.likedBy.includes(userId)\" color=\"primary\" >thumb_up</mat-icon>\n    <mat-icon *ngIf=\"!post.likedBy.includes(userId)\"  >thumb_up</mat-icon>\n    {{ post.likes }}\n  </button>\n\n\n\n\n  <button mat-icon-button (click)=\"dislikePost(post.id)\" >\n    <mat-icon *ngIf=\"post.dislikedBy.includes(userId)\" color=\"primary\" >thumb_down</mat-icon>\n    <mat-icon *ngIf=\"!post.dislikedBy.includes(userId)\"  >thumb_down</mat-icon>\n    {{ post.dislikes }}\n  </button>\n\n  <br/>\n\n  <mat-accordion class=\"example-headers-align\" >\n    <mat-expansion-panel  [class.mat-expansion-panel]=\"false\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n\n          <mat-icon >comment</mat-icon>\n          {{ post.commentsNo }}\n\n        </mat-panel-title>\n\n      </mat-expansion-panel-header>\n\n      <ul class=\"commentspanel\">\n        <form (submit)=\"addComment(post, commentForm)\" #commentForm=\"ngForm\" >\n          <li >\n            <mat-form-field style=\"width:700px; !important; \" >\n              <input  matInput\n                      type=\"text\"\n                      placeholder=\"Add a Comment\"\n                      ngModel\n                      #commentInput=\"ngModel\"\n                      required\n                      name=\"comment\"\n                      comment>\n              <!--matInput-->\n              <!--type=\"text\"-->\n              <!--placeholder=\"new name\"-->\n              <!--ngModel-->\n              <!--#groupnameInput=\"ngModel\"-->\n              <!--required-->\n              <!--name=\"groupname\"-->\n              <!--groupname-->\n              <mat-error *ngIf=\"commentInput.invalid\">Please enter a comment.</mat-error>\n\n            </mat-form-field>\n          </li>\n          <li>\n            <button mat-raised-button color=\"primary\"\n                    mat-raised-button\n                    type=\"submit\">\n              <mat-icon >send</mat-icon>\n            </button>\n          </li>\n        </form>\n      </ul>\n\n      <mat-list style=\"list-style: none;\">\n        <mat-list-item *ngFor=\"let comment of post.comments\" style=\"margin:0;\">\n          <strong>{{comment.commentator}}: &nbsp; </strong>\n\n          <p style=\"margin-bottom: 0px !important;\">\n            {{comment.comment}}\n          </p>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n\n      </mat-list>\n\n\n\n\n\n\n\n    </mat-expansion-panel>\n\n\n\n\n\n\n  </mat-accordion>\n\n\n  <!--<mat-card-actions *ngIf=\"userIsAuthenticated && userId == post.creator\">-->\n    <!--<button mat-button  color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>-->\n    <!--<a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>-->\n\n  <!--</mat-card-actions>-->\n</mat-card>\n<!--<mat-paginator [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"-->\n               <!--*ngIf=\"posts.length > 0\"></mat-paginator>-->\n\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No posts added yet!</p>\n  </mat-drawer-content>\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\" position=\"end\">\n    <mat-list style=\"padding-top: 0px\">\n      <ul style=\" list-style:none; padding: 4px; font-family: Bahnschrift; margin-top: 3px; !important;\">\n        <li>\n          <strong> Group Members </strong>\n        </li>\n        <li *ngFor=\"let members of groupMembers\" style=\"padding: 5px;\">\n          <strong> {{members.Guser}}</strong>\n        </li>\n\n      </ul>\n\n\n    </mat-list>\n  </mat-drawer>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/groups/group-page/group-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/groups/group-page/group-page.component.ts ***!
  \***********************************************************/
/*! exports provided: GroupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPageComponent", function() { return GroupPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../posts/post-create/mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GroupPageComponent = /** @class */ (function () {
    function GroupPageComponent(groupsService, eventsService, authService, route) {
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.authService = authService;
        this.route = route;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](window.innerWidth);
        this.isLoading = false;
        this.groupMembers = [];
        this.groupRequests = [];
        this.posts = [];
        this.userIsAuthenticated = false;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8___default()('https://comsatsconnectbackend.herokuapp.com');
    }
    GroupPageComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    GroupPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                asyncValidators: [_posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('groupId')) {
                _this.groupid = paramMap.get('groupId');
                console.log(_this.groupid);
                _this.getPosts();
            }
        });
        this.isLoading = true;
        this.userId = this.authService.getUserId();
        // this.username = this.authService.getName();
        this.postsSub = this.groupsService.getPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            //     this.totalGroups = groupData.groupCount;
            _this.username = _this.authService.getName();
            _this.posts = postData.posts;
            _this.groupMembers = postData.groupmembers;
            _this.groupRequests = postData.grouprequests;
            _this.groupname = postData.groupname,
                _this.groupcreatorid = postData.groupcreatorid,
                // this.eventdate = postData.eventdate,
                _this.groupdescription = postData.description,
                _this.groupcreator = postData.groupcreator,
                console.log(_this.posts);
            console.log(_this.groupMembers);
            console.log(_this.groupRequests);
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
        this.socket.on('refreshpage', function (data) {
            _this.groupsService.getPosts(_this.groupid);
        });
    };
    GroupPageComponent.prototype.getPosts = function () {
        this.groupsService.getPosts(this.groupid);
    };
    GroupPageComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    GroupPageComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.isLoading = true;
        this.groupsService.deletePost(this.groupid, postId).subscribe(function () {
            _this.groupsService.getPosts(_this.groupid);
        });
    };
    GroupPageComponent.prototype.onSavePost = function () {
        var _this = this;
        // console.log(this.form.value.title, this.form.value.content,  this.form.value.cname);
        if (this.form.invalid) {
            return;
        }
        if (this.form.value.title == null) {
            return;
        }
        this.isLoading = true;
        this.groupsService.addPost(this.groupid, this.form.value.title, this.form.value.content, this.form.value.image).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.groupsService.getPosts(_this.groupid);
        });
        this.form.reset();
    };
    GroupPageComponent.prototype.likePost = function (postid) {
        var _this = this;
        console.log(postid + ' ' + this.groupid);
        this.groupsService.likePost(postid, this.groupid).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.groupsService.getPosts(_this.groupid);
        });
    };
    GroupPageComponent.prototype.dislikePost = function (postid) {
        var _this = this;
        console.log(postid + ' ' + this.groupid);
        this.groupsService.dislikePost(postid, this.groupid).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.groupsService.getPosts(_this.groupid);
        });
    };
    GroupPageComponent.prototype.addComment = function (post, form) {
        var _this = this;
        console.log(post.id + '\n' + form.value.comment + '\n' + this.groupid);
        if (form.invalid) {
            return;
        }
        else {
            this.groupsService.addComment(post.id, this.groupid, form.value.comment).subscribe(function () {
                var a = _this.posts.indexOf(post);
                _this.posts[a].commentsNo++;
                _this.posts[a].comments.push({ comment: form.value.comment, commentator: _this.username });
            });
        }
    };
    // addComment(post: Post, form: NgForm) {
    //   console.log(post.id + '\n' + form.value.comment);
    //   if (form.invalid) {
    //     return;
    //   } else {
    //     this.postsService.addComment(post.id, form.value.comment).subscribe(() => {
    //       const a = this.posts.indexOf(post);
    //       this.posts[a].commentsNo++;
    //       this.posts[a].comments.push({comment: form.value.comment, commentator: this.username});
    //       //   this.socket.emit('refresh', {});
    //       // this.postsService.getPosts(this.postsPerPage, this.currentPage);
    //     });
    //   }
    //
    // }
    GroupPageComponent.prototype.acceptRequest = function (id) {
        var _this = this;
        console.log(id);
        this.groupsService.joinGroup(id, this.groupid).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.groupsService.getPosts(_this.groupid);
        });
    };
    GroupPageComponent.prototype.leaveGroup = function (id) {
        console.log(id);
        this.groupsService.leaveGroup(id, this.groupid);
    };
    GroupPageComponent.prototype.onEditGroup = function (form) {
        var _this = this;
        // name: string, description: string, eventdate: Date
        if (form.invalid) {
            return;
        }
        this.groupsService.updateGroup(this.groupid, form.value.groupname, form.value.description).
            subscribe(function () {
            _this.groupsService.getPosts(_this.groupid);
        });
        // this.groupsService.updateGroup(
        //   this.groupid,
        //   this.groupname,
        //   this.gr,
        //   this.form.value.image);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GroupPageComponent.prototype, "groupid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"])
    ], GroupPageComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GroupPageComponent.prototype, "onResize", null);
    GroupPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-page',
            template: __webpack_require__(/*! ./group-page.component.html */ "./src/app/groups/group-page/group-page.component.html"),
            styles: [__webpack_require__(/*! ./group-page.component.css */ "./src/app/groups/group-page/group-page.component.css")]
        }),
        __metadata("design:paramtypes", [_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"], _events_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], GroupPageComponent);
    return GroupPageComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups.service.ts":
/*!******************************************!*\
  !*** ./src/app/groups/groups.service.ts ***!
  \******************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEUURL = 'https://comsatsconnectbackend.herokuapp.com';
// const BASEUURL = 'http://localhost:3000';
var GroupsService = /** @class */ (function () {
    function GroupsService(http, router) {
        this.http = http;
        this.router = router;
        this.username = '';
        this.groups = [];
        this.posts = [];
        this.groupsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    GroupsService.prototype.getPosts = function (id) {
        var _this = this;
        console.log('inservicee' + id);
        this.http.get(BASEUURL + "/api/groups/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return { posts: postData.posts.map(function (post) {
                    return {
                        title: post.title,
                        content: post.content,
                        username: post.username,
                        creator: post.creator,
                        likes: post.likes,
                        likedBy: post.likedBy,
                        dislikedBy: post.dislikedBy,
                        commentsNo: post.commentsNo,
                        comments: post.comments,
                        dislikes: post.dislikes,
                        profileimg: post.profileimg,
                        id: post._id,
                        createdAt: post.createdAt,
                        imagePath: post.imagePath
                    };
                }), groupcreatorid: postData.groupcreatorid, groupmembers: postData.groupmembers, groupname: postData.groupname,
                groupcreator: postData.groupcreator,
                groupdescription: postData.description, grouprequests: postData.grouprequests };
        }))
            .subscribe(function (transformedGroupPost) {
            _this.posts = transformedGroupPost.posts;
            _this.postsUpdated.next({
                posts: _this.posts.slice(),
                groupcreatorid: transformedGroupPost.groupcreatorid,
                groupmembers: transformedGroupPost.groupmembers,
                grouprequests: transformedGroupPost.grouprequests,
                groupname: transformedGroupPost.groupname,
                description: transformedGroupPost.groupdescription,
                groupcreator: transformedGroupPost.groupcreator
            });
        }
        // , error => {
        //   console.log('error');
        //   this.router.navigate(['/grouplist']).then();
        // }
        );
    };
    GroupsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    GroupsService.prototype.getGroups = function (groupsPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pagesize=" + groupsPerPage + "&page=" + currentPage; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/groups" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (groupData) {
            return { groups: groupData.groups.map(function (group) {
                    return {
                        groupname: group.groupname,
                        description: group.description,
                        id: group._id,
                        username: group.username,
                        creator: group.groupcreator,
                        grouprequests: group.grouprequests,
                        grouprequestsid: group.grouprequestsid,
                        groupmembers: group.groupmembers,
                        groupmembersid: group.groupmembersid,
                        category: group.category,
                    };
                }), maxGroups: groupData.maxGroups };
        })) // change rterieving data
            .subscribe(function (transformedGroupData) {
            _this.groups = transformedGroupData.groups;
            _this.groupsUpdated.next({
                groups: _this.groups.slice(),
                groupCount: transformedGroupData.maxGroups
            });
        }); // subscribe is to liosten
    };
    GroupsService.prototype.getJoinedGroups = function () {
        var _this = this;
        this.http
            .get(BASEUURL + "/api/groups/joinedgroups")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (groupData) {
            return { groups: groupData.groups.map(function (group) {
                    return {
                        groupname: group.groupname,
                        // description: group.description,
                        id: group._id,
                    };
                }), maxGroups: groupData.maxGroups };
        })) // change rterieving data
            .subscribe(function (transformedGroupData) {
            _this.groups = transformedGroupData.groups;
            _this.groupsUpdated.next({
                groups: _this.groups.slice(),
                groupCount: transformedGroupData.maxGroups
            });
        }); // subscribe is to liosten
    };
    GroupsService.prototype.deletePost = function (groupId, postId) {
        var queryParams = "?groupid=" + groupId + "&postid=" + postId;
        return this.http
            .delete(BASEUURL + "/api/groups/delete" + queryParams);
    };
    GroupsService.prototype.getGroupUpdateListener = function () {
        return this.groupsUpdated.asObservable();
    };
    GroupsService.prototype.addGroup = function (groupname, category, description, username) {
        var _this = this;
        return this.http
            .post(BASEUURL + "/api/groups", { groupname: groupname, description: description, category: category, username: username })
            .subscribe(function (responseData) {
            _this.router.navigate(['/grouplist']);
        });
    };
    GroupsService.prototype.updateGroup = function (id, groupname, description) {
        return this.http.put(BASEUURL + "/api/groups/" + id, { groupname: groupname, description: description });
    };
    GroupsService.prototype.addPost = function (id, title, content, image) {
        var postData = new FormData();
        postData.append('title', title);
        postData.append('content', content);
        postData.append('image', image, title);
        // postData.append('username', localStorage.getItem('username'));
        // postData.append('profileimg', profileimg);
        console.log(postData);
        return this.http
            .put(BASEUURL + "/api/groups/addgroupPost/" + id, postData);
        // .subscribe( responseData  => {
        //   this.router.navigate(['/grouplist']);
        // });
    };
    GroupsService.prototype.joinGroup = function (userid, groupid) {
        var groupData = {
            groupid: groupid,
            userid: userid
        };
        // @ts-ignore
        return this.http
            .put(BASEUURL + "/api/groups/adduser/" + groupid, groupData);
    };
    GroupsService.prototype.requestGroup = function (id) {
        // return this.http.put( 'http://localhost:3000/api/posts/dislikePost/' + id);
        // @ts-ignore
        return this.http
            .put(BASEUURL + "/api/groups/requestuser/" + id);
    };
    GroupsService.prototype.likePost = function (postid, groupid) {
        var groupData = {
            groupid: groupid,
            postid: postid
        };
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/groups/likegrouppost/" + groupid, groupData);
    };
    //
    GroupsService.prototype.dislikePost = function (postid, groupid) {
        var groupData = {
            groupid: groupid,
            postid: postid
        };
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/groups/dislikegrouppost/" + groupid, groupData);
    };
    GroupsService.prototype.addComment = function (postid, groupid, comment) {
        var groupData = {
            groupid: groupid,
            postid: postid,
            comment: comment
        };
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/groups/commentgrouppost/" + groupid, groupData);
    };
    GroupsService.prototype.leaveGroup = function (userid, groupid) {
        var _this = this;
        var groupData = {
            groupid: groupid,
            userid: userid
        };
        // @ts-ignore
        return this.http
            .put(BASEUURL + "/api/groups/leavegroup/" + groupid, groupData)
            .subscribe(function (responseData) {
            _this.router.navigate(['/grouplist']);
        });
    };
    GroupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GroupsService);
    return GroupsService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\n  list-style:none ;\n  padding: 0;\n  margin:0;\n}\na{\n  text-decoration: none;\n  color: white;\n\n}\n.spacer{\n  flex: 1 1 auto;\n}\nul{\n  display: flex;\n}\n* {\n  font-family: Roboto;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <!--<ul>-->\n    <!--<li ><img-->\n      <!--class=\"example-header-image-post\"-->\n      <!--[src]=\"'https://res.cloudinary.com/da6znvkjz/image/upload/v1555697890/ComsatsSocial/logo_ayv0eq.jpg'\"-->\n      <!--style=\"-->\n         <!--margin-right: 30px;-->\n    <!--width: 100px;-->\n    <!--height: 64px;\" ></li>-->\n  <!--</ul>-->\n  <ul>\n    <li *ngIf=\"userIsAuthenticated\">\n\n    <a mat-button routerLink=\"/messages\" routerLinkActive=\"mat-accent\">Home</a>\n\n    </li>\n    <li *ngIf=\"userIsAuthenticated\">\n\n    <a  mat-button routerLink=\"/grouplist\" routerLinkActive=\"mat-accent\">Groups</a>\n\n\n    </li>\n    <li *ngIf=\"userIsAuthenticated\" style=\"margin-right: 50px;\">\n\n    <a  mat-button routerLink=\"/eventlist\" routerLinkActive=\"mat-accent\">Events</a>\n\n\n    </li>\n\n    <li *ngIf=\"userIsAuthenticated\" style=\"width:400px;\" >\n      <section style=\"color: black; position: absolute !important;\n\n        /*top: -100px !important;*/\n         z-index: 10;\" >\n        <div >\n          <input style=\" color: black !important; background: white; width: 300px;\" matInput [formControl]=\"queryField\" type=\"text\" placeholder=\"search...\" />\n        </div>\n        <ul style=\" display: block;\nbackground: white;\">\n        <li *ngFor=\"let result of results; index as i\"  (click)=\"queryField.setValue('')\" >\n          <a style=\"text-decoration: none; color: black ; padding: 8px; margin-bottom: 5px; margin-top:3px;\" [routerLink]=\"['/user', result._id]\" >{{ result.username}}</a>\n          <mat-divider *ngIf=\"i < results.length - 1\"></mat-divider>\n        </li>\n        <!--<span class=\"tags\" *ngFor='let genre of result?.genres | slice:0:6'>{{genre}}</span>-->\n        </ul>\n\n      </section>\n\n    </li>\n  </ul>\n  <span class=\"spacer\"></span>\n  <ul>\n    <!--<li *ngIf=\"userIsAuthenticated\">-->\n      <!--<a routerLink=\"/messages\">{{username}}</a>-->\n    <!--</li>-->\n    <li *ngIf=\"userIsAuthenticated\">\n      <a mat-button routerLink=\"/archives\">Archives</a>\n    </li>\n    <li *ngIf=\"userIsAuthenticated\">\n      <a mat-button routerLink=\"/create\" routerLinkActive=\"mat-accent\">New Post</a>\n    </li>\n    <li *ngIf=\"!userIsAuthenticated\">\n      <a mat-button routerLink=\"/login\" routerLinkActive=\"mat-accent\">Login</a>\n    </li>\n    <li *ngIf=\"!userIsAuthenticated\">\n      <a mat-button routerLink=\"/signup\" routerLinkActive=\"mat-accent\">Signup</a>\n    </li>\n    <li *ngIf=\"userIsAuthenticated\">\n\n      <button mat-button [matMenuTriggerFor]=\"appMenu\">Options</button>\n      <mat-menu #appMenu=\"matMenu\" yPosition=\"below\">\n        <button mat-menu-item [matMenuTriggerFor]=\"createmenu\">Create</button>\n        <button mat-menu-item [routerLink]=\"['/profile']\">Profile</button>\n\n        <button mat-menu-item [routerLink]=\"['/recommendations']\">Recommendations</button>\n        <button mat-menu-item (click)=\"onLogout()\" >Logout</button>\n      </mat-menu>\n\n      <mat-menu #createmenu=\"matMenu\">\n        <button mat-menu-item [routerLink]=\"['/groupcreate']\" >Group</button>\n        <button mat-menu-item [routerLink]=\"['/eventcreate']\">Event</button>\n      </mat-menu>\n\n    </li>\n\n  </ul>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.service */ "./src/app/header/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_searchService, authService) {
        this._searchService = _searchService;
        this.authService = authService;
        this.userIsAuthenticated = false;
        this.username = 'nothing';
        this.results = [];
        this.queryField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryField.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (query) { return (_this._searchService.search(query)); }))
            .subscribe(function (userData) {
            _this.results = userData.users;
            console.log(_this.results);
        }, function (error) {
            _this.results = null;
        }
        // result => {
        // if (result.status === 400) {
        //   return;
        // } else {
        // console.log(result.valueOf());
        // this.results = result.toString();
        // }
        // }
        );
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.username = localStorage.getItem('username');
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.username = _this.authService.getName();
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.username = null;
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/header/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASEUURL = 'https://comsatsconnectbackend.herokuapp.com';
var SearchService = /** @class */ (function () {
    // clientID = 'PAST YOUR CLIENT ID';
    // baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientID + '&q=';
    function SearchService(_http) {
        this._http = _http;
    }
    SearchService.prototype.search = function (queryString) {
        // const _URL = ;
        // + queryString;
        var queryParams = "?user=" + queryString;
        return this._http.get(BASEUURL + "/api/user/" + queryParams);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASEUURL = 'https://comsatsconnectbackend.herokuapp.com/api/chat';
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.SendMessage = function (senderId, receiverId, receiverName, message) {
        return this.http
            .post(BASEUURL + "/chat-messages/" + senderId + "/" + receiverId, {
            receiverId: receiverId,
            receiverName: receiverName,
            message: message
        });
    };
    MessageService.prototype.GetAllMessage = function (senderId, receiverId) {
        return this.http
            .get(BASEUURL + "/chat-messages/" + senderId + "/" + receiverId);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar-footer{\r\n  overflow: visible !important;\r\n}\r\n.bar-footer textarea {\r\n  resize: none;\r\n  height: 25px;\r\n}\r\n.message {\r\n  font-size: 16px;\r\n}\r\n.message-detail {\r\n  white-space: nowrap;\r\n  font-size:14px;\r\n}\r\n.message-wrapper{\r\n  position: relative;\r\n}\r\n.clearfloat{\r\n  float: none !important;\r\n}\r\n.chat-bubble{\r\n  border-radius: 10px;\r\n  display: inline-block;\r\n  padding: 10px 18px;\r\n  position: relative;\r\n  margin: 10px;\r\n  max-width: 80%;\r\n}\r\n.chat-bubble:before {\r\n  content: '\\00a0';\r\n  display: block;\r\n  height: 16px;\r\n  width: 9px;\r\n  position: absolute;\r\n  bottom: -7.5px;\r\n}\r\n.chat-bubble.left {\r\n  background: #f1f0f0;\r\n  float: left;\r\n  margin-left: 7px;\r\n}\r\n/*.chat-bubble.left:before {*/\r\n/*background: #f1f0f0;*/\r\n/*left: 10px;*/\r\n/*z-index: -1;*/\r\n/*border-radius: 10px;*/\r\n/*-webkit-transform: rotate(70deg) skew(5deg);*/\r\n/*transform: rotate(70deg) skew(5deg);*/\r\n/*}*/\r\n.chat-bubble.right {\r\n  background: #64b5f6;\r\n  color: #fff;\r\n  float: right;\r\n  margin-right: 7px;\r\n}\r\n/*.chat-bubble.right:before {*/\r\n/*background: #64b5f6;*/\r\n/*right: 10px;*/\r\n/*z-index: -1;*/\r\n/*border-radius: 10px;*/\r\n/*-webkit-transform: rotate(118deg) skew(-5deg);*/\r\n/*transform: rotate(118deg) skew(-5deg);*/\r\n/*}*/\r\n.chat-bubble.right a.autolinker {\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n.rowDiv{\r\n  background: #ffffff !important;\r\n  height: 61vh !important;\r\n  max-height: 62vh !important;\r\n  overflow-y: scroll !important;\r\n  top: 0px;\r\n  margin-top: -20px !important;\r\n}\r\n.footerDiv{\r\n  height: 38px;\r\n  bottom: 0px !important;\r\n}\r\n.input-field{\r\n  height: 38px;\r\n}\r\n.inputBox {\r\n   color:white;\r\n }\r\n.input-field{\r\n   top: -9px !important;\r\n }\r\n.inputRow{\r\n   margin: 0px 10px 0px 10px !important;\r\n }\r\n.isOnline{\r\n   color: white;\r\n   margin-top: -5px !important;\r\n   padding: 0px !important;\r\n }\r\n"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"row\">\n      <mat-card style=\"width: 100%;\">\n        <div  style=\"background: #64b5f6 !important;\">\n<div class=\"col s12 imgCol\" style=\"color: black !important; font-size: 20px;\">\n  <span>{{receivername}}</span>\n  <!--<br/>-->\n  <!--<button mat-button [routerLink]=\"['/videochatstart']\"><mat-icon>video_call</mat-icon></button>-->\n  <!--<br/>-->\n  <!--<a mat-button [routerLink]=\"['/videochat']\">accept call</a>-->\n</div>\n          <div class=\"row\">\n            <div class=\"col s10 nameCol\" style=\"color: black !important;\">\n              <span>{{receivername}}</span>\n            </div>\n          </div>\n        </div>\n        <mat-card-content >\n          <div class=\"col s12 rowDiv\" ngx-auto-scroll lock-y-offset=\"10\" observe-attributes>\n            <div class=\"row\">\n              <div class=\"col s12\">\n                <div class=\"message-wrapper\" *ngFor=\"let message of messagesArray\">\n                  <div class=\"left\" *ngIf=\"message.senderId != userId\">\n                    <div class=\"chat-bubble left slide-left\">\n                      <div class=\"message\"> {{message.body}}</div>\n\n                    </div>\n                    <div class=\"clearfloat\"></div>\n\n                  </div>\n                  <div class=\"right\" *ngIf=\"message.senderId == userId\">\n                    <div class=\"chat-bubble right slide-right\">\n                      <div class=\"message\"> {{message.body}} </div>\n\n                    </div>\n\n                  </div>\n                  <div class=\"clearfloat\"></div>\n                  <!--<div class=\"card-footer\" style=\"\"></div>-->\n                  <br/>\n                  <br/>\n                  <br/>\n                  <br/>\n                </div>\n                <div class=\"left\" *ngIf=\"typing\">\n                  <div class=\"chat-bubble left slide-left\">\n                    <div class=\"message\"> is typing...</div>\n\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s12\" style=\"margin: 0px;\">\n            <div class=\"row\">\n              <mat-card style=\"height: 90px; width: 100% !important;\">\n                <mat-card-content>\n                <div class=\"inputRow\">\n                  <form (ngSubmit)=\"SendMessage()\">\n                    <div class=\"input-field inputField col s12\" >\n<textarea name=\"message\"\n          [(ngModel)]=\"message\"\n          (keypress)=\"IsTyping()\"\n          class=\"inputBox\"\nstyle=\" height: 30px !important;\n    margin-bottom: 5px !important;\n    width: 100% !important;\ncolor: black !important;\">\n\n</textarea>\n                    </div>\n                    <div class=\"input-field col s12\">\n                      <button mat-button><mat-icon>send</mat-icon></button>\n                    </div>\n                  </form>\n                </div>\n                </mat-card-content>\n              </mat-card>\n\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../groups/groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events/events.service */ "./src/app/events/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MessageComponent = /** @class */ (function () {
    function MessageComponent(authService, messageService, route, postsService, groupsService, eventsService) {
        this.authService = authService;
        this.messageService = messageService;
        this.route = route;
        this.postsService = postsService;
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.messagesArray = [];
        this.receivername = 'abbas';
        this.userIsAuthenticated = false;
        // abc = '#init';
        this.typing = false;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()('https://comsatsconnectbackend.herokuapp.com');
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
        // this.abc = decodeURIComponent(this.abc);
        //  this.abc = encodeURIComponent(this.abc);
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('userId')) {
                _this.receiverId = paramMap.get('userId');
                console.log(_this.receiverId);
                _this.GetAllMessages(_this.receiverId);
            }
        });
        this.socket.on('refreshpage', function () {
            console.log('socket done');
            _this.route.paramMap.subscribe(function (paramMap) {
                if (paramMap.has('userId')) {
                    _this.receiverId = paramMap.get('userId');
                    console.log(_this.receiverId);
                    _this.GetAllMessages(_this.receiverId);
                }
            });
            _this.GetAllMessages(_this.receiverId);
        });
        this.socket.on('is_typing', function (data) {
            if (data.sender === _this.receiverId) {
                _this.typing = true;
            }
        });
        this.socket.on('has_stopped_typing', function (data) {
            if (data.sender === _this.receiverId) {
                _this.typing = false;
            }
        });
    };
    MessageComponent.prototype.ngAfterViewInit = function () {
        var params = {
            room1: this.userId,
            room2: this.receiverId,
        };
        this.socket.emit('join chat', params);
    };
    MessageComponent.prototype.IsTyping = function () {
        var _this = this;
        console.log('Typing a message');
        this.socket.emit('start_typing', {
            sender: this.userId,
            receiver: this.receiverId
        });
        if (this.typingMessage) {
            clearTimeout(this.typingMessage);
        }
        this.typingMessage = setTimeout(function () {
            _this.socket.emit('stop_typing', {
                sender: _this.userId,
                receiver: _this.receiverId
            });
        }, 500);
    };
    MessageComponent.prototype.SendMessage = function () {
        var _this = this;
        if (this.message === '') {
            return;
        }
        this.messageService.SendMessage(this.userId, this.receiverId, this.receivername, this.message)
            .subscribe(function (data) {
            console.log(data);
            _this.socket.emit('refresh', {});
            _this.message = '';
        });
    };
    MessageComponent.prototype.GetAllMessages = function (recevierId) {
        var _this = this;
        this.userId = this.authService.getUserId();
        this.messageService.GetAllMessage(this.userId, recevierId)
            .subscribe(function (data) {
            _this.messagesArray = data.messages.message;
            console.log(_this.messagesArray);
            _this.receivername = data.usernamechat;
            console.log(_this.receivername);
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _posts_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_6__["GroupsService"], _events_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/posts/advertisepost/advertisepost/advertisepost.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/posts/advertisepost/advertisepost/advertisepost.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  padding-left: 20px;\r\n  width: 20%;\r\n}\r\nmat-drawer-content{\r\n  /*background-color: beige;*/\r\n  /*width:80%;*/\r\n  height: 850px;\r\n}\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.image-preview{\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n.image-preview img{\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/posts/advertisepost/advertisepost/advertisepost.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/posts/advertisepost/advertisepost/advertisepost.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer-content>\n    <mat-card style=\"margin-left: 5px; margin-right: 60px;\">\n      <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n      <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n\n        <mat-form-field>\n          <input\n            matInput\n            type=\"text\"\n            formControlName=\"title\"\n            placeholder=\"Post Title\"\n          >\n          <mat-error *ngIf=\"form.get('title').invalid\">Please enter a post title.</mat-error>\n        </mat-form-field>\n        <div>\n          <button mat-stroked-button type=\"button\" (click)=\"filepicker.click()\" >Add Image</button>\n          <input type=\"file\" #filepicker (change)=\"onImagePicked($event)\">\n        </div>\n        <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n          <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n        </div>\n        <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        formControlName=\"content\"\n        placeholder=\"Post Content\"\n      ></textarea>\n          <mat-error *ngIf=\"form.get('content').invalid\">Please enter a post title.</mat-error>\n        </mat-form-field>\n        <br/>\n\n        <button\n          mat-raised-button\n          color=\"accent\"\n          type=\"submit\">Save Post</button>\n      </form>\n    </mat-card>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/posts/advertisepost/advertisepost/advertisepost.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/posts/advertisepost/advertisepost/advertisepost.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdvertisepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisepostComponent", function() { return AdvertisepostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/posts/advertisepost/advertisepost/mime-type.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdvertisepostComponent = /** @class */ (function () {
    function AdvertisepostComponent(postsService, route) {
        this.postsService = postsService;
        this.route = route;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](window.innerWidth);
        this.isLoading = false;
        this.groups = [];
        this.events = [];
        this.mode = 'create';
    }
    AdvertisepostComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__["mimeType"]]
            }),
            cname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
        });
    };
    AdvertisepostComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    AdvertisepostComponent.prototype.onSavePost = function () {
        // console.log(this.form.value.title, this.form.value.content,  this.form.value.cname);
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        //  this.postsService.addAdvertisementPost(this.form.value.title, this.form.value.content, this.form.value.image,
        // 'General');
        this.form.reset();
    };
    AdvertisepostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertisepost',
            template: __webpack_require__(/*! ./advertisepost.component.html */ "./src/app/posts/advertisepost/advertisepost/advertisepost.component.html"),
            styles: [__webpack_require__(/*! ./advertisepost.component.css */ "./src/app/posts/advertisepost/advertisepost/advertisepost.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AdvertisepostComponent);
    return AdvertisepostComponent;
}());



/***/ }),

/***/ "./src/app/posts/advertisepost/advertisepost/mime-type.validator.ts":
/*!**************************************************************************!*\
  !*** ./src/app/posts/advertisepost/advertisepost/mime-type.validator.ts ***!
  \**************************************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = '';
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/posts/archivedposts/archivedposts.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/posts/archivedposts/archivedposts.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\n\r\n/*@media only screen and (max-width: 1000px) {*/\r\n\r\n/*mat-drawer-content{*/\r\n\r\n/*margin-left: 0px !important;*/\r\n\r\n/*width: 50% !important;*/\r\n\r\n/*height: 860px;*/\r\n\r\n/*}*/\r\n\r\n/*}*/\r\n\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  width: 20%;\r\n  position: absolute;\r\n}\r\n\r\nmat-drawer-content{\r\n  margin: auto !important;\r\n  width: 50% !important;\r\n  height: 860px;\r\n}\r\n\r\n:host ::ng-deep.mat-paginator .mat-paginator-container{\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n/*:host {*/\r\n\r\n/*display: block;*/\r\n\r\n/*margin-top: 1rem;*/\r\n\r\n/*}*/\r\n\r\n.info-text {\r\n  text-align: center;\r\n}\r\n\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n\r\n.commentspanel {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\nul{\r\n  list-style:none ;\r\n  padding: 0;\r\n  margin:0;\r\n}\r\n\r\n.commentspanel li {\r\n  float: left;\r\n}\r\n\r\n.example-card {\r\n  max-width: 100% !important;\r\n  margin: 4px;\r\n}\r\n\r\n.example-header-image {\r\n\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-image{\r\n  width:20%;\r\n}\r\n\r\n.post-image{\r\n  margin: 7px;\r\n  width: 100%;\r\n}\r\n\r\n.post-image img{\r\n  width:50%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\n\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n\r\n.example-header-image {\r\n  display: inline-block;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n\r\n.example-header-image-post {\r\n  display: inline-block;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n\r\n.positive {\r\n  color : blue;\r\n}\r\n\r\n.negative {\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/posts/archivedposts/archivedposts.component.html":
/*!******************************************************************!*\
  !*** ./src/app/posts/archivedposts/archivedposts.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\">\n    <mat-list style=\"\n      margin-top: 11px !important;\">\n      <ul style=\"list-style:none; padding: 4px; font-family: Bahnschrift; margin-top: 0px; !important;\">\n        <li>\n          <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let group of groups\" style=\"padding: 5px; \">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/grouppage', group.id]\">{{ group.groupname}}</a>\n        </li>\n        <li *ngIf=\"groups.length < 1\" style=\"padding: 5px; color: gray;\">\n          Following No Groups\n        </li>\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none; \" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n\n  <mat-drawer-content>\n\n<mat-card id=\"container\" class=\"example-card\">\n  <mat-card-header>\n    <ul style=\"list-style: none; display: flex;\">\n      <li>\n        <img class=\"example-header-image\"\n             [src]=\"profileimg\" >\n      </li>\n      <li>\n        <mat-card-title>Hello {{username}}</mat-card-title>\n        <mat-card-subtitle>Having a Good Day</mat-card-subtitle>\n      </li>\n    </ul>\n  </mat-card-header>\n</mat-card>\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n<mat-card class=\"example-card\" *ngFor=\"let post of posts\">\n  <mat-card-header>\n    <ul style=\"list-style: none; display: flex;\">\n      <li>\n        <img [hidden]=\"!post.profileimg\"\n             class=\"example-header-image-post\"\n             [src]=\"post.profileimg\" style=\"margin-right: 30px;\" >\n      </li>\n      <li>\n        <mat-card-title *ngIf=\"!post.creator\"><strong>Advertisement<br/><p style=\"color: grey;\">{{post.username}}</p></strong></mat-card-title>\n        <mat-card-title *ngIf=\"post.creator\"><a style=\"text-decoration: none; color: black;\" [routerLink]=\"['/user', post.creator]\"><strong>{{post.username}}</strong></a></mat-card-title>\n\n\n        <mat-card-subtitle>\n          <strong>\n            {{ post.title }}\n          </strong>\n        </mat-card-subtitle>\n      </li>\n    </ul>\n  </mat-card-header>\n  <br/>\n  <img mat-card-image [hidden]=\"!post.imagePath\" [src]=\"post.imagePath\" [alt]=\"post.title\">\n  <!--</div>-->\n\n  <mat-card-content>\n    <p style=\"font-size: 26px !important;\">{{ post.content }}</p>\n    <strong>Date: </strong>{{ post.createdAt | date:'MMM dd, yyyy' }}\n  </mat-card-content>\n\n  <button mat-icon-button  (click)=\"likePost(post.id,post)\" >\n    <mat-icon *ngIf=\"post.likedBy.includes(userId)\" color=\"primary\" >thumb_up</mat-icon>\n    <mat-icon *ngIf=\"!post.likedBy.includes(userId)\"  >thumb_up</mat-icon>\n    {{post.likes}}\n  </button>\n\n\n\n\n  <button mat-icon-button (click)=\"dislikePost(post.id)\" >\n    <mat-icon *ngIf=\"post.dislikedBy.includes(userId)\" color=\"primary\" >thumb_down</mat-icon>\n    <mat-icon *ngIf=\"!post.dislikedBy.includes(userId)\"  >thumb_down</mat-icon>\n    {{ post.dislikes }}\n  </button>\n\n  <br/>\n\n  <mat-accordion class=\"example-headers-align\" >\n    <mat-expansion-panel  [class.mat-expansion-panel]=\"false\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n\n          <mat-icon >comment</mat-icon>\n          {{ post.commentsNo }}\n\n        </mat-panel-title>\n\n      </mat-expansion-panel-header>\n\n      <ul class=\"commentspanel\">\n        <form (submit)=\"addComment(post, commentForm)\" #commentForm=\"ngForm\" >\n          <li >\n            <mat-form-field style=\"width:700px; !important; \" >\n              <input  matInput\n                      type=\"text\"\n                      placeholder=\"Add a Comment\"\n                      ngModel\n                      #commentInput=\"ngModel\"\n                      required\n                      name=\"comment\"\n                      comment>\n              <!--matInput-->\n              <!--type=\"text\"-->\n              <!--placeholder=\"new name\"-->\n              <!--ngModel-->\n              <!--#groupnameInput=\"ngModel\"-->\n              <!--required-->\n              <!--name=\"groupname\"-->\n              <!--groupname-->\n              <mat-error *ngIf=\"commentInput.invalid\">Please enter a comment.</mat-error>\n\n            </mat-form-field>\n          </li>\n          <li>\n            <button mat-raised-button color=\"primary\"\n                    mat-raised-button\n                    type=\"submit\">\n              <mat-icon >send</mat-icon>\n            </button>\n          </li>\n        </form>\n      </ul>\n\n      <mat-list style=\"list-style: none;\">\n        <mat-list-item *ngFor=\"let comment of post.comments\" style=\"margin:0;\">\n          <strong>{{comment.commentator}}: &nbsp; </strong>\n\n          <p style=\"margin-bottom: 0px !important;\">\n            {{comment.comment}}\n          </p>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n\n      </mat-list>\n\n\n\n\n\n\n\n    </mat-expansion-panel>\n\n\n\n\n\n\n  </mat-accordion>\n\n\n  <mat-card-actions *ngIf=\"userIsAuthenticated\">\n    <button mat-button  color=\"warn\" (click)=\"onDelete(post.id)\">REMOVE</button>\n    <!--<a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>-->\n\n  </mat-card-actions>\n</mat-card>\n\n<mat-paginator style=\"background-color: #FAFAFA;\" [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"\n               *ngIf=\"posts.length > 0\"></mat-paginator>\n\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No posts archived yet!</p>\n  </mat-drawer-content>\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\" position=\"end\">\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift;\">\n        <mat-card class=\"example-card\">\n          <strong> <mat-icon>alarm</mat-icon> Notifcations</strong>\n        </mat-card>\n        <mat-card class=\"example-card\"*ngFor=\"let notification of notifications\">\n          <mat-card-header >\n            <ul style=\"list-style: none; display: flex;\">\n              <li>\n                <img *ngIf=\"notification.senderimage\"\n                     class=\"example-header-image-post\"\n                     [src]=\"notification.senderimage\" style=\"margin-right: 10px;\" >\n              </li>\n              <li>\n                <ul  style=\"list-style: none;\">\n                  <li>\n                    {{notification.message}}\n                  </li>\n                  <li>\n                    <mat-card-subtitle>{{TimeFromNow(notification.created)}}</mat-card-subtitle>\n                  </li>\n                </ul>\n\n              </li>\n            </ul>\n\n          </mat-card-header>\n        </mat-card>\n\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/posts/archivedposts/archivedposts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/posts/archivedposts/archivedposts.component.ts ***!
  \****************************************************************/
/*! exports provided: ArchivedpostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedpostsComponent", function() { return ArchivedpostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../groups/groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ArchivedpostsComponent = /** @class */ (function () {
    function ArchivedpostsComponent(postsService, authService, groupsService, eventsService) {
        this.postsService = postsService;
        this.authService = authService;
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](window.innerWidth);
        this.friends = ['Shahid Mehmood', 'Moiz Khalid', 'Zara Khan', 'Ehtesham', 'Mahad Amir'];
        this.posts = [];
        this.groups = [];
        this.events = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 5;
        this.currentPage = 1;
        this.newComment = [];
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
        this.notifications = [];
    }
    ArchivedpostsComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    ArchivedpostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        this.isLoading = true;
        this.postsService.getarchivePosts(this.postsPerPage, this.currentPage);
        this.userId = this.authService.getUserId();
        // this.username = this.authService.getName();
        console.log(localStorage.getItem('profileimg'));
        this.profileimg = localStorage.getItem('profileimg');
        this.username = localStorage.getItem('username');
        this.postsSub = this.postsService.getarchivePostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            // this.username = this.authService.getName();
            _this.posts = postData.posts;
            console.log(_this.posts);
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
        this.postsService.getNotifications();
        this.notificationSub = this.postsService.getNotificationUpdateListener()
            .subscribe(function (notificationData) {
            _this.notifications = notificationData.notifications;
            console.log(_this.notifications);
        });
        console.log(this.groupsService.getJoinedGroups());
        this.groupsSub = this.groupsService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        console.log(this.eventsService.getJoinedEvents());
        this.eventsSub = this.eventsService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
    };
    ArchivedpostsComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        this.postsService.getarchivePosts(this.postsPerPage, this.currentPage);
        document.querySelector('#container').scrollIntoView();
    };
    ArchivedpostsComponent.prototype.likePost = function (id) {
        var _this = this;
        this.postsService.likePost(id).subscribe(function () {
            _this.postsService.getarchivePosts(_this.postsPerPage, _this.currentPage);
        });
    };
    // console.log(this.posts.indexOf(post));
    // this.posts[this.posts.indexOf(post)].likes++;
    // if (this.posts[this.posts.indexOf(post)].dislikes === 0 ) {
    //
    //         } else {
    //   this.posts[this.posts.indexOf(post)].dislikes--;
    // }
    // });
    ArchivedpostsComponent.prototype.addComment = function (post, form) {
        var _this = this;
        console.log(post.id + '\n' + form.value.comment);
        if (form.invalid) {
            return;
        }
        else {
            this.postsService.addComment(post.id, form.value.comment).subscribe(function () {
                var a = _this.posts.indexOf(post);
                _this.posts[a].commentsNo++;
                _this.posts[a].comments.push({ comment: form.value.comment, commentator: _this.username });
                //   this.socket.emit('refresh', {});
                // this.postsService.getPosts(this.postsPerPage, this.currentPage);
            });
        }
    };
    ArchivedpostsComponent.prototype.dislikePost = function (id) {
        var _this = this;
        this.postsService.dislikePost(id).subscribe(function () {
            _this.postsService.getarchivePosts(_this.postsPerPage, _this.currentPage);
        });
    };
    ArchivedpostsComponent.prototype.TimeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_7__(time).fromNow();
    };
    ArchivedpostsComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.isLoading = true;
        this.postsService.removearchivePost(postId).subscribe(function () {
            _this.postsService.getarchivePosts(_this.postsPerPage, _this.currentPage);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDrawer"])
    ], ArchivedpostsComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ArchivedpostsComponent.prototype, "onResize", null);
    ArchivedpostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archivedposts',
            template: __webpack_require__(/*! ./archivedposts.component.html */ "./src/app/posts/archivedposts/archivedposts.component.html"),
            styles: [__webpack_require__(/*! ./archivedposts.component.css */ "./src/app/posts/archivedposts/archivedposts.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"], _events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]])
    ], ArchivedpostsComponent);
    return ArchivedpostsComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/mime-type.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-create/mime-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = '';
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 100%;\n}\nmat-drawer {\n  /*background-color: lightblue;*/\n  /*border: 1px solid #555;*/\n  padding-left: 20px;\n  width: 20%;\n}\nmat-drawer-content{\n  /*background-color: beige;*/\n  /*width:80%;*/\n  height: 850px;\n}\nmat-form-field,\ntextarea {\n  width: 100%;\n}\nmat-spinner{\n  margin:auto;\n}\ninput[type=\"file\"]{\n  visibility: hidden;\n}\n.image-preview{\n  height: 5rem;\n  margin: 1rem 0;\n}\n.image-preview img{\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\">\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"list-style:none; padding: 4px; font-family: Bahnschrift; margin-top:0px !important;\">\n        <li>\n          <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let group of groups\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none; \" [routerLink]=\"['/grouppage', group.id]\">{{ group.groupname}}</a>\n        </li>\n        <li *ngIf=\"groups.length < 1\" style=\"padding: 5px; color: gray;\">\n          Following No Groups\n        </li>\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none; \" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n<mat-card style=\"margin-left: 5px; margin-right: 60px;\">\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        formControlName=\"title\"\n        placeholder=\"Post Title\"\n       >\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <div>\n      <button mat-stroked-button type=\"button\" (click)=\"filepicker.click()\" >Add Image</button>\n      <input type=\"file\" #filepicker (change)=\"onImagePicked($event)\">\n    </div>\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n    </div>\n    <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        formControlName=\"content\"\n        placeholder=\"Post Content\"\n        ></textarea>\n      <mat-error *ngIf=\"form.get('content').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n<br/>\n    <mat-form-field>\n      <mat-select\n        matNativeControl\n        placeholder=\"Category\"\n        formControlName = \"cname\">\n\n        <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n          {{category}}\n        </mat-option>\n\n      </mat-select>\n      <mat-error *ngIf=\"form.get('cname').invalid\">Please choose a Category</mat-error>\n\n    </mat-form-field>\n\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\">Save Post</button>\n  </form>\n</mat-card>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../groups/groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postsService, route, groupsService, eventsService) {
        this.postsService = postsService;
        this.route = route;
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](window.innerWidth);
        this.isLoading = false;
        this.groups = [];
        this.events = [];
        this.mode = 'create';
        this.categories = ['General', localStorage.getItem('department')];
        this.socketHost = 'https://comsatsconnectbackend.herokuapp.com';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8___default()(this.socketHost);
    }
    PostCreateComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        console.log(this.groupsService.getJoinedGroups());
        this.groupsSub = this.groupsService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        console.log(this.eventsService.getJoinedEvents());
        this.eventsSub = this.eventsService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__["mimeType"]]
            }),
            cname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('postId')) {
                _this.mode = 'edit';
                _this.postId = paramMap.get('postId');
                _this.isLoading = true;
                _this.postsService.getPost(_this.postId)
                    .subscribe(function (postData) {
                    _this.isLoading = false;
                    // @ts-ignore
                    _this.post = {
                        id: postData._id,
                        title: postData.title,
                        content: postData.content,
                        username: postData.username,
                        category: postData.category,
                        creator: postData.creator,
                        imagePath: postData.imagePath,
                    };
                    _this.form.setValue({
                        'title': _this.post.title,
                        'content': _this.post.content,
                        'image': _this.post.imagePath
                    });
                });
            }
            else {
                _this.mode = 'create';
                _this.postId = null;
            }
        });
    };
    PostCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PostCreateComponent.prototype.onSavePost = function () {
        // console.log(this.form.value.title, this.form.value.content,  this.form.value.cname);
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image, this.form.value.cname);
            // this.socket.emit('refresh', {});
        }
        else {
            this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
        }
        this.form.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"])
    ], PostCreateComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PostCreateComponent.prototype, "onResize", null);
    PostCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_6__["GroupsService"], _events_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 100%;\n}\n\n/*@media only screen and (max-width: 1000px) {*/\n\n/*mat-drawer-content{*/\n\n/*margin-left: 0px !important;*/\n\n/*width: 50% !important;*/\n\n/*height: 860px;*/\n\n/*}*/\n\n/*}*/\n\nmat-drawer {\n  /*background-color: lightblue;*/\n  /*border: 1px solid #555;*/\n  padding: 10px;\n  padding-left: 20px;\n  width: 20%;\n  position: absolute;\n}\n\nmat-drawer-content{\n  margin: auto !important;\n  width: 50% !important;\n    height: 860px;\n}\n\n:host ::ng-deep.mat-paginator .mat-paginator-container{\n  justify-content: flex-start !important;\n}\n\n/*:host {*/\n\n/*display: block;*/\n\n/*margin-top: 1rem;*/\n\n/*}*/\n\n.info-text {\n  text-align: center;\n}\n\nmat-spinner{\n  margin:auto;\n}\n\n.commentspanel {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n\n}\n\nul{\n  list-style:none ;\n  padding: 0;\n  margin:0;\n}\n\n.commentspanel li {\n  float: left;\n}\n\n.example-card {\n  max-width: 100% !important;\n  margin: 4px;\n}\n\n.example-header-image {\n\n  background-size: cover;\n}\n\nmat-card-image{\n  width:20%;\n}\n\n.post-image{\n  margin: 7px;\n  width: 100%;\n}\n\n.post-image img{\n  width:50%;\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\n}\n\nmat-expansion-panel-header{\n  padding: 1%;\n}\n\n::ng-deep .mat-input-wrapper{\n  width:400px !important;\n}\n\n.example-header-image {\n   display: inline-block;\n   width: 150px;\n   height: 150px;\n   border-radius: 50%;\n   -o-object-fit: cover;\n      object-fit: cover;\n   background-size: cover;\n }\n\n.example-header-image-post {\n  display: inline-block;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background-size: cover;\n}\n\n.positive {\n  color : blue;\n}\n\n.negative {\n  color: black;\n}\n"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\">\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift;\">\n        <li>\n          <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let group of groups\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/grouppage', group.id]\">{{ group.groupname}}</a>\n        </li>\n        <li *ngIf=\"groups.length < 1\" style=\"padding: 5px; color: gray;\">\n          Following No Groups\n        </li>\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none; \" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content  >\n\n\n<mat-card class=\"example-card\" id=\"container\">\n  <mat-card-header >\n    <ul style=\"list-style: none; display: flex;\">\n      <li>\n        <img\n\n          class=\"example-header-image\"\n             [src]=\"profileimg\" >\n        <!--<img-->\n\n          <!--class=\"example-header-image\"-->\n          <!--src=\"data:image/jpeg;base64,{{profileimg}}\" >-->\n      </li>\n      <li>\n        <mat-card-title>Hello {{username}}</mat-card-title>\n        <mat-card-subtitle>Having a Good Day?</mat-card-subtitle>\n      </li>\n    </ul>\n  </mat-card-header>\n</mat-card>\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mat-card class=\"example-card\" *ngFor=\"let post of posts\">\n  <mat-card-header>\n    <ul style=\"list-style: none; display: flex;\">\n      <li>\n        <img\n          [hidden]=\"!post.profileimg\"\n          class=\"example-header-image-post\"\n             [src]=\"post.profileimg\" style=\"margin-right: 30px;\" >\n      </li>\n      <li>\n        <mat-card-title *ngIf=\"!post.creator\"><strong>Advertisement<br/><p style=\"color: grey;\">{{post.username}}</p></strong></mat-card-title>\n        <mat-card-title *ngIf=\"post.creator\"><a style=\"text-decoration: none; color: black;\" [routerLink]=\"['/user', post.creator]\"><strong>{{post.username}}</strong></a></mat-card-title>\n\n\n        <mat-card-subtitle>\n          <strong>\n          {{ post.title }}\n          </strong>\n        </mat-card-subtitle>\n      </li>\n    </ul>\n  </mat-card-header>\n  <br/>\n  <!--<div class=\"post-image\">-->\n  <img [hidden]=\"!post.imagePath\" [src]=\"post.imagePath\" [alt]=\"post.title\" mat-card-image>\n  <!--</div>-->\n  <!--[src]=\"post.imagePath\" [alt]=\"post.title\"-->\n  <mat-card-content>\n    <p style=\"font-size: 26px !important;\">{{ post.content }}</p>\n    <strong>Date: </strong>{{ post.createdAt | date:'MMM dd, yyyy' }}\n  </mat-card-content>\n\n  <button mat-icon-button  (click)=\"likePost(post.id,post)\" >\n    <mat-icon *ngIf=\"post.likedBy.includes(userId)\" color=\"primary\" >thumb_up</mat-icon>\n    <mat-icon *ngIf=\"!post.likedBy.includes(userId)\"  >thumb_up</mat-icon>\n    {{ post.likes }}\n  </button>\n\n\n\n\n  <button mat-icon-button (click)=\"dislikePost(post.id)\" >\n    <mat-icon *ngIf=\"post.dislikedBy.includes(userId)\" color=\"primary\" >thumb_down</mat-icon>\n    <mat-icon *ngIf=\"!post.dislikedBy.includes(userId)\"  >thumb_down</mat-icon>\n    {{ post.dislikes }}\n  </button>\n\n  <br/>\n\n  <mat-accordion class=\"example-headers-align\" >\n    <mat-expansion-panel  [class.mat-expansion-panel]=\"false\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n\n          <mat-icon >comment</mat-icon>\n          {{ post.commentsNo }}\n\n        </mat-panel-title>\n\n      </mat-expansion-panel-header>\n\n      <ul class=\"commentspanel\">\n        <form (submit)=\"addComment(post, commentForm)\" #commentForm=\"ngForm\" >\n        <li >\n          <mat-form-field style=\"width:700px; !important; \" >\n            <input  matInput\n                    type=\"text\"\n                    placeholder=\"Add a Comment\"\n                    ngModel\n                    #commentInput=\"ngModel\"\n                    required\n                    name=\"comment\"\n                    comment>\n            <!--matInput-->\n            <!--type=\"text\"-->\n            <!--placeholder=\"new name\"-->\n            <!--ngModel-->\n            <!--#groupnameInput=\"ngModel\"-->\n            <!--required-->\n            <!--name=\"groupname\"-->\n            <!--groupname-->\n            <mat-error *ngIf=\"commentInput.invalid\">Please enter a comment.</mat-error>\n\n          </mat-form-field>\n        </li>\n        <li>\n          <button mat-raised-button color=\"primary\"\n                  mat-raised-button\n                  type=\"submit\">\n            <mat-icon >send</mat-icon>\n          </button>\n        </li>\n        </form>\n      </ul>\n\n      <mat-list style=\"list-style: none;\">\n        <mat-list-item *ngFor=\"let comment of post.comments\" style=\"margin:0;\">\n          <strong>{{comment.commentator}}: &nbsp; </strong>\n\n          <p style=\"margin-bottom: 0px !important;\">\n          {{comment.comment}}\n          </p>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n\n      </mat-list>\n\n      <!--<mat-card class=\"example-card\" style=\"width:80% !important;\" *ngFor=\"let comment of post.comments\">-->\n\n\n        <!--<mat-card-content>-->\n          <!--<strong>{{comment.commentator}}</strong>-->\n          <!--<br/>-->\n          <!--<p>-->\n            <!--{{comment.comment}}-->\n          <!--</p>-->\n        <!--</mat-card-content>-->\n\n      <!--</mat-card>-->\n\n\n\n\n\n\n\n    </mat-expansion-panel>\n\n\n\n\n\n\n  </mat-accordion>\n\n  <mat-card-actions *ngIf=\"userId != post.creator\">\n    <button mat-button  color=\"warn\" (click)=\"onArchive(post.id)\">SAVE</button>\n    <mat-accordion class=\"example-headers-align\" >\n      <mat-expansion-panel  [class.mat-expansion-panel]=\"false\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\nReport\n\n          </mat-panel-title>\n\n        </mat-expansion-panel-header>\n\n        <ul class=\"commentspanel\">\n\n          <form (submit)=\"addReport(reportForm, post.title, post.content, post.username, post.creator, post.id)\" #reportForm=\"ngForm\" >\n          <li >\n            <mat-form-field style=\"width:700px; !important; \" >\n              <input  matInput\n                      type=\"text\"\n                      placeholder=\"Add Reason\"\n                      ngModel\n                      #reasonInput=\"ngModel\"\n                      required\n                      name=\"reason\"\n                      reason>\n              <!--matInput-->\n              <!--type=\"text\"-->\n              <!--placeholder=\"new name\"-->\n              <!--ngModel-->\n              <!--#groupnameInput=\"ngModel\"-->\n              <!--required-->\n              <!--name=\"groupname\"-->\n              <!--groupname-->\n              <mat-error *ngIf=\"reasonInput.invalid\">Please enter a reason.</mat-error>\n\n            </mat-form-field>\n          </li>\n          <li>\n            <button mat-raised-button color=\"primary\"\n                    mat-raised-button\n                    type=\"submit\">\n              <mat-icon >send</mat-icon>\n            </button>\n            <!--<button (click)=\"addReport(post.title, post.content, post.username,-->\n            <!--post.creator, post.id, reasonInput.value)\">-->\n              <!--<mat-icon >send</mat-icon>-->\n            <!--</button>-->\n          </li>\n          </form>\n        </ul>\n\n\n      </mat-expansion-panel>\n\n\n\n\n\n\n    </mat-accordion>\n  </mat-card-actions>\n  <mat-card-actions *ngIf=\"userIsAuthenticated && userId == post.creator\">\n    <button mat-button  color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>\n    <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\n\n  </mat-card-actions>\n</mat-card>\n\n<mat-paginator style=\"background-color: #FAFAFA;\" [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\"  (page)=\"onChangedPage($event)\"\n               *ngIf=\"posts.length > 0\"></mat-paginator>\n\n<p  class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No posts added yet!</p>\n  </mat-drawer-content>\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\" position=\"end\">\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift;\">\n        <mat-card class=\"example-card\">\n          <strong> <mat-icon>alarm</mat-icon> Notifcations</strong>\n        </mat-card>\n        <mat-card class=\"example-card\"*ngFor=\"let notification of notifications\">\n          <mat-card-header >\n            <ul style=\"list-style: none; display: flex;\">\n              <li>\n              <img *ngIf=\"notification.senderimage\"\n              class=\"example-header-image-post\"\n              [src]=\"notification.senderimage\" style=\"margin-right: 10px;\" >\n              </li>\n              <li>\n                <ul  style=\"list-style: none;\">\n                  <li>\n                    {{notification.message}}\n                  </li>\n                  <li>\n                  <mat-card-subtitle>{{TimeFromNow(notification.created)}}</mat-card-subtitle>\n                  </li>\n                </ul>\n\n              </li>\n            </ul>\n\n          </mat-card-header>\n        </mat-card>\n\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../groups/groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsService, authService, groupsService, eventsService) {
        this.postsService = postsService;
        this.authService = authService;
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](window.innerWidth);
        this.notifications = [];
        this.posts = [];
        this.groups = [];
        this.events = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 5;
        this.currentPage = 1;
        this.newComment = [];
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()('https://comsatsconnectbackend.herokuapp.com');
    }
    PostListComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        this.isLoading = true;
        this.postsService.getPosts(this.postsPerPage, this.currentPage);
        this.userId = this.authService.getUserId();
        // this.username = this.authService.getName();
        console.log('profileimg' + localStorage.getItem('profileimg'));
        this.profileimg = localStorage.getItem('profileimg');
        // const profileimg1 = localStorage.getItem('profileimg');
        // // @ts-ignore
        // this.profileimg = profileimg1.toString('base64');
        this.username = localStorage.getItem('username');
        this.postsSub = this.postsService.getPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            // this.username = this.authService.getName();
            _this.posts = postData.posts;
            console.log(_this.posts);
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
        this.postsService.getNotifications();
        this.notificationSub = this.postsService.getNotificationUpdateListener()
            .subscribe(function (notificationData) {
            _this.notifications = notificationData.notifications;
            console.log(_this.notifications);
        });
        console.log(this.groupsService.getJoinedGroups());
        this.groupsSub = this.groupsService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        console.log(this.eventsService.getJoinedEvents());
        this.eventsSub = this.eventsService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
        this.socket.on('refreshpage', function (data) {
            _this.postsService.getNotifications();
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
            // this.groupsService.getJoinedGroups();
        });
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    };
    PostListComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.isLoading = true;
        this.postsService.deletePost(postId).subscribe(function () {
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
        });
    };
    PostListComponent.prototype.TimeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_7__(time).fromNow();
    };
    PostListComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        this.postsService.getPosts(this.postsPerPage, this.currentPage);
        document.querySelector('#container').scrollIntoView();
    };
    PostListComponent.prototype.likePost = function (id) {
        var _this = this;
        this.postsService.likePost(id).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
        });
    };
    PostListComponent.prototype.addComment = function (post, form) {
        var _this = this;
        console.log(post.id + '\n' + form.value.comment);
        if (form.invalid) {
            return;
        }
        else {
            this.postsService.addComment(post.id, form.value.comment).subscribe(function () {
                var a = _this.posts.indexOf(post);
                _this.posts[a].commentsNo++;
                _this.posts[a].comments.push({ comment: form.value.comment, commentator: _this.username });
                // this.socket.emit('refresh', {});
                // this.postsService.getPosts(this.postsPerPage, this.currentPage);
            });
        }
    };
    PostListComponent.prototype.addReport = function (form, title, content, username, creatorid, postid) {
        var _this = this;
        console.log(title + '\n' + content + '\n' + username + '\n' + creatorid
            + '\n' + postid + '\n' + form.value.reason);
        if (form.invalid) {
            return;
        }
        else {
            this.postsService.reportPost(title, content, username, creatorid, postid, form.value.reason).subscribe(function () {
                _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
            });
        }
    };
    PostListComponent.prototype.onArchive = function (id) {
        var _this = this;
        console.log(id);
        this.postsService.archivepost(id).subscribe(function () {
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
        });
    };
    PostListComponent.prototype.dislikePost = function (id) {
        var _this = this;
        this.postsService.dislikePost(id).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDrawer"])
    ], PostListComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PostListComponent.prototype, "onResize", null);
    PostListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"], _events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEUURL = 'https://comsatsconnectbackend.herokuapp.com';
var PostsService = /** @class */ (function () {
    function PostsService(http, router) {
        this.http = http;
        this.router = router;
        this.notifications = [];
        this.notificationUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.suggestionposts = [];
        this.suggestionpostsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.archivedposts = [];
        this.archivedpostsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.advertisements = [];
        this.advertisementsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userposts = [];
        this.userpostsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PostsService.prototype.getadvertiserPosts = function (advertiserid) {
        var _this = this;
        // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/advertise/" + advertiserid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return { advertisements: postData.posts.map(function (post) {
                    return {
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        username: post.username,
                        adcreator: post.adcreator,
                        approved: post.approved,
                        createdAt: post.createdAt,
                        imagePath: post.imagePath
                    };
                }), maxPosts: postData.maxPosts };
        })) // change rterieving data
            .subscribe(function (transformedAdvertisementData) {
            _this.advertisements = transformedAdvertisementData.advertisements;
            _this.advertisementsUpdated.next({
                advertisements: _this.advertisements.slice(),
                advertisementCount: transformedAdvertisementData.maxPosts
            });
        }); // subscribe is to liosten
    };
    PostsService.prototype.getadvertisementPostUpdateListener = function () {
        return this.advertisementsUpdated.asObservable();
    };
    PostsService.prototype.getuserPosts = function (userid) {
        var _this = this;
        // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/posts/user/" + userid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return { posts: postData.posts.map(function (post) {
                    return {
                        profileimg: post.profileimg,
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        username: post.username,
                        creator: post.creator,
                        likes: post.likes,
                        likedBy: post.likedBy,
                        dislikedBy: post.dislikedBy,
                        category: post.category,
                        commentsNo: post.commentsNo,
                        comments: post.comments,
                        dislikes: post.dislikes,
                        createdAt: post.createdAt,
                        imagePath: post.imagePath
                    };
                }), usern: postData.usern, friends: postData.friends, requests: postData.requests, maxPosts: postData.maxPosts };
        })) // change rterieving data
            .subscribe(function (transformedPostData) {
            _this.userposts = transformedPostData.posts;
            _this.userpostsUpdated.next({
                posts: _this.userposts.slice(),
                usern: transformedPostData.usern,
                friends: transformedPostData.friends,
                requests: transformedPostData.requests,
                postCount: transformedPostData.maxPosts
            });
        }); // subscribe is to liosten
    };
    PostsService.prototype.getuserPostUpdateListener = function () {
        return this.userpostsUpdated.asObservable();
    };
    PostsService.prototype.getPosts = function (postsPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pagesize=" + postsPerPage + "&page=" + currentPage; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/posts" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return { posts: postData.posts.map(function (post) {
                    return {
                        profileimg: post.profileimg,
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        username: post.username,
                        creator: post.creator,
                        likes: post.likes,
                        likedBy: post.likedBy,
                        dislikedBy: post.dislikedBy,
                        category: post.category,
                        commentsNo: post.commentsNo,
                        comments: post.comments,
                        dislikes: post.dislikes,
                        createdAt: post.createdAt,
                        imagePath: post.imagePath
                    };
                }), maxPosts: postData.maxPosts };
        })) // change rterieving data
            .subscribe(function (transformedPostData) {
            _this.posts = transformedPostData.posts;
            _this.postsUpdated.next({
                posts: _this.posts.slice(),
                postCount: transformedPostData.maxPosts
            });
        }); // subscribe is to liosten
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.getSuggestionPosts = function () {
        var _this = this;
        this.http
            .get(BASEUURL + "/api/posts/recommendations")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return { posts: postData.posts.map(function (post) {
                    return {
                        profileimg: post.profileimg,
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        username: post.username,
                        creator: post.creator,
                        likes: post.likes,
                        likedBy: post.likedBy,
                        dislikedBy: post.dislikedBy,
                        category: post.category,
                        commentsNo: post.commentsNo,
                        comments: post.comments,
                        dislikes: post.dislikes,
                        createdAt: post.createdAt,
                        imagePath: post.imagePath
                    };
                }), maxPosts: postData.maxPosts };
        })) // change rterieving data
            .subscribe(function (transformedPostData) {
            _this.suggestionposts = transformedPostData.posts;
            _this.suggestionpostsUpdated.next({
                posts: _this.suggestionposts.slice(),
                postCount: transformedPostData.maxPosts
            });
        }); // subscribe is to liosten
    };
    PostsService.prototype.getSuggestionPostUpdateListener = function () {
        return this.suggestionpostsUpdated.asObservable();
    };
    PostsService.prototype.getNotifications = function () {
        var _this = this;
        this.http
            .get(BASEUURL + "/api/user/notifications")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (notificationData) {
            return { notifications: notificationData.notifications.map(function (notification) {
                    return {
                        created: notification.created,
                        sendername: notification.sendername,
                        message: notification.message,
                        senderimage: notification.senderimage,
                    };
                }), maxNotifications: notificationData.maxNotifictaions };
        })) // change rterieving data
            .subscribe(function (transformedNotifictaionData) {
            _this.notifications = transformedNotifictaionData.notifications;
            _this.notificationUpdated.next({
                notifications: _this.notifications.slice(),
                notificationCount: transformedNotifictaionData.maxNotifications
            });
        }); // subscribe is to liosten
    };
    PostsService.prototype.getNotificationUpdateListener = function () {
        return this.notificationUpdated.asObservable();
    };
    PostsService.prototype.addPost = function (title, content, image, category) {
        var _this = this;
        var postData = new FormData();
        postData.append('title', title);
        postData.append('content', content);
        postData.append('image', image, title);
        postData.append('category', category);
        // postData.append('username', localStorage.getItem('username'));
        // postData.append('profileimg', profileimg);
        console.log(postData);
        this.http
            .post(BASEUURL + "/api/posts", postData)
            .subscribe(function (responseData) {
            _this.router.navigate(['/messages']);
        });
    };
    PostsService.prototype.addAdvertisement = function (advertiserid, advertisername, title, content, image) {
        var postData = new FormData();
        postData.append('title', title);
        postData.append('content', content);
        postData.append('image', image, title);
        postData.append('username', advertisername);
        // postData.append('username', localStorage.getItem('username'));
        // postData.append('profileimg', profileimg);
        console.log(postData);
        return this.http
            .post(BASEUURL + "/api/advertise/advertise/" + advertiserid, postData);
        // .subscribe( responseData  => {
        //   this.router.navigate(['/grouplist']);
        // });
    };
    // addAdvertisementPost(title: string, content: string , image: File, category: string) {
    //   const postData =  new FormData();
    //   postData.append('title', title);
    //   postData.append('content', content);
    //   postData.append('image', image, title);
    //   postData.append( 'category', category);
    //   // postData.append('username', localStorage.getItem('username'));
    //   // postData.append('profileimg', profileimg);
    //   console.log(postData);
    //   this.http
    //     .post<{ message: string, post: Post }>(
    //       'http://localhost:3000/api/posts/advert',
    //       postData)
    //     .subscribe( responseData  => {
    //       this.router.navigate(['/login']);
    //     });
    // }
    PostsService.prototype.reportPost = function (title, content, username, creator, postid, reason) {
        var postData = new FormData();
        postData.append('title', title);
        postData.append('content', content);
        postData.append('username', username);
        postData.append('creator', creator);
        postData.append('postid', postid);
        // postData.append( 'reportedby', localStorage.getItem('userId'));
        postData.append('reason', reason);
        // postData.append('username', localStorage.getItem('username'));
        // postData.append('profileimg', profileimg);
        console.log(postData);
        return this.http
            .post(BASEUURL + "/api/posts/report", { title: title, content: content, username: username, creator: creator, postid: postid, reason: reason });
        // .subscribe( responseData  => {
        //   this.router.navigate(['/messages']);
        // });
    };
    PostsService.prototype.getPost = function (id) {
        return this.http.get(BASEUURL + "/api/posts/" + id);
    };
    PostsService.prototype.updatePost = function (id, title, content, image) {
        var _this = this;
        var postData;
        if (typeof (image) === 'object') {
            postData = new FormData();
            postData.append('id', id);
            postData.append('title', title);
            postData.append('content', content);
            postData.append('username', localStorage.getItem('username'));
            postData.append('image', image, title);
        }
        else {
            postData = {
                id: id,
                title: title,
                content: content,
                category: null,
                creator: null,
                likes: null,
                likedBy: null,
                profileimg: null,
                dislikedBy: null,
                dislikes: null,
                comments: null,
                commentsNo: null,
                createdAt: null,
                username: localStorage.getItem('username'),
                imagePath: image
            };
        }
        this.http.put(BASEUURL + "/api/posts/" + id, postData)
            .subscribe(function (response) {
            _this.router.navigate(['/messages']);
        });
    };
    PostsService.prototype.deletePost = function (postId) {
        return this.http
            .delete(BASEUURL + "/api/posts/" + postId);
    };
    // postComment(id, comment) {
    //   const postData = {
    //     id: id,
    //     comment: comment
    //   };
    //   return this.http.post('http://localhost:3000/api/posts/comment/' + id, postData);
    // }
    PostsService.prototype.likePost = function (id) {
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/posts/likePost/" + id);
    };
    PostsService.prototype.dislikePost = function (id) {
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/posts/dislikePost/" + id);
    };
    PostsService.prototype.addComment = function (id, comment) {
        var postdata = {
            id: id,
            comment: comment
        };
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/posts/comment/" + id, postdata);
    };
    PostsService.prototype.archivepost = function (id) {
        // @ts-ignore
        return this.http.put(BASEUURL + "/api/posts/archivePost/" + id);
    };
    PostsService.prototype.removearchivePost = function (postId) {
        return this.http
            .delete(BASEUURL + "/api/posts/archives/" + postId);
    };
    PostsService.prototype.getarchivePosts = function (postsPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pagesize=" + postsPerPage + "&page=" + currentPage; // `` backtips are for dynamically adding values into strings
        this.http
            .get(BASEUURL + "/api/posts/archives" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return { posts: postData.posts.map(function (post) {
                    return {
                        profileimg: post.profileimg,
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        username: post.username,
                        creator: post.creator,
                        likes: post.likes,
                        likedBy: post.likedBy,
                        dislikedBy: post.dislikedBy,
                        category: post.category,
                        commentsNo: post.commentsNo,
                        comments: post.comments,
                        dislikes: post.dislikes,
                        createdAt: post.createdAt,
                        imagePath: post.imagePath
                    };
                }), maxPosts: postData.maxPosts };
        })) // change rterieving data
            .subscribe(function (transformedPostData) {
            _this.archivedposts = transformedPostData.posts;
            _this.archivedpostsUpdated.next({
                posts: _this.archivedposts.slice(),
                postCount: transformedPostData.maxPosts
            });
        }); // subscribe is to liosten
    };
    PostsService.prototype.getarchivePostUpdateListener = function () {
        return this.archivedpostsUpdated.asObservable();
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/posts/suugestionsposts/suugestionsposts.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/posts/suugestionsposts/suugestionsposts.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\n\r\n/*@media only screen and (max-width: 1000px) {*/\r\n\r\n/*mat-drawer-content{*/\r\n\r\n/*margin-left: 0px !important;*/\r\n\r\n/*width: 50% !important;*/\r\n\r\n/*height: 860px;*/\r\n\r\n/*}*/\r\n\r\n/*}*/\r\n\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  width: 20%;\r\n  position: absolute;\r\n  visibility: visible !important;\r\n  -webkit-transform: none !important;\r\n          transform: none !important;\r\n}\r\n\r\nmat-drawer-content{\r\n  margin: auto !important;\r\n  width: 50% !important;\r\n  height: 860px;\r\n}\r\n\r\n:host ::ng-deep.mat-paginator .mat-paginator-container{\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n/*:host {*/\r\n\r\n/*display: block;*/\r\n\r\n/*margin-top: 1rem;*/\r\n\r\n/*}*/\r\n\r\n.info-text {\r\n  text-align: center;\r\n}\r\n\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n\r\n.commentspanel {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\nul{\r\n  list-style:none ;\r\n  padding: 0;\r\n  margin:0;\r\n}\r\n\r\n.commentspanel li {\r\n  float: left;\r\n}\r\n\r\n.example-card {\r\n  max-width: 100% !important;\r\n  margin: 4px;\r\n}\r\n\r\n.example-header-image {\r\n\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-image{\r\n  width:20%;\r\n}\r\n\r\n.post-image{\r\n  margin: 7px;\r\n  width: 100%;\r\n}\r\n\r\n.post-image img{\r\n  width:50%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\n\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n\r\n.example-header-image {\r\n  display: inline-block;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n\r\n.example-header-image-post {\r\n  display: inline-block;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n\r\n.positive {\r\n  color : blue;\r\n}\r\n\r\n.negative {\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/posts/suugestionsposts/suugestionsposts.component.html":
/*!************************************************************************!*\
  !*** ./src/app/posts/suugestionsposts/suugestionsposts.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\">\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift;\">\n        <li>\n          <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let group of groups\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none;\" [routerLink]=\"['/grouppage', group.id]\">{{ group.groupname}}</a>\n        </li>\n        <li *ngIf=\"groups.length < 1\" style=\"padding: 5px; color: gray;\">\n          Following No Groups\n        </li>\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none; \" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content  >\n\n\n    <mat-card class=\"example-card\" id=\"container\">\n      <mat-card-header >\n        <ul style=\"list-style: none; display: flex;\">\n          <li>\n            <img\n\n              class=\"example-header-image\"\n              [src]=\"profileimg\" >\n            <!--<img-->\n\n            <!--class=\"example-header-image\"-->\n            <!--src=\"data:image/jpeg;base64,{{profileimg}}\" >-->\n          </li>\n          <li>\n            <mat-card-title>Hello {{username}}</mat-card-title>\n            <mat-card-subtitle>Having a Good Day?</mat-card-subtitle>\n          </li>\n        </ul>\n      </mat-card-header>\n    </mat-card>\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n    <mat-card class=\"example-card\" *ngFor=\"let post of posts  \"\n              [hidden]=\"post.creator == userId\">\n      <mat-card-header>\n        <ul style=\"list-style: none; display: flex;\">\n          <li>\n            <img\n              [hidden]=\"!post.profileimg\"\n              class=\"example-header-image-post\"\n              [src]=\"post.profileimg\" style=\"margin-right: 30px;\" >\n          </li>\n          <li>\n            <mat-card-title *ngIf=\"!post.creator\"><strong>Advertisement<br/><p style=\"color: grey;\">{{post.username}}</p></strong></mat-card-title>\n            <mat-card-title *ngIf=\"post.creator\"><a style=\"text-decoration: none; color: black;\" [routerLink]=\"['/user', post.creator]\"><strong>{{post.username}}</strong></a></mat-card-title>\n\n\n            <mat-card-subtitle>\n              <strong>\n                {{ post.title }}\n              </strong>\n            </mat-card-subtitle>\n          </li>\n        </ul>\n      </mat-card-header>\n      <br/>\n      <!--<div class=\"post-image\">-->\n      <img [hidden]=\"!post.imagePath\" [src]=\"post.imagePath\" [alt]=\"post.title\" mat-card-image>\n      <!--</div>-->\n      <!--[src]=\"post.imagePath\" [alt]=\"post.title\"-->\n      <mat-card-content>\n        <p style=\"font-size: 26px !important;\">{{ post.content }}</p>\n        <strong>Date: </strong>{{ post.createdAt | date:'MMM dd, yyyy' }}\n      </mat-card-content>\n\n      <button mat-icon-button  (click)=\"likePost(post.id,post)\" >\n        <mat-icon *ngIf=\"post.likedBy.includes(userId)\" color=\"primary\" >thumb_up</mat-icon>\n        <mat-icon *ngIf=\"!post.likedBy.includes(userId)\"  >thumb_up</mat-icon>\n        {{ post.likes }}\n      </button>\n\n\n\n\n      <button mat-icon-button (click)=\"dislikePost(post.id)\" >\n        <mat-icon *ngIf=\"post.dislikedBy.includes(userId)\" color=\"primary\" >thumb_down</mat-icon>\n        <mat-icon *ngIf=\"!post.dislikedBy.includes(userId)\"  >thumb_down</mat-icon>\n        {{ post.dislikes }}\n      </button>\n\n      <br/>\n\n      <mat-accordion class=\"example-headers-align\" >\n        <mat-expansion-panel  [class.mat-expansion-panel]=\"false\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n\n              <mat-icon >comment</mat-icon>\n              {{ post.commentsNo }}\n\n            </mat-panel-title>\n\n          </mat-expansion-panel-header>\n\n          <ul class=\"commentspanel\">\n            <form (submit)=\"addComment(post, commentForm)\" #commentForm=\"ngForm\" >\n              <li >\n                <mat-form-field style=\"width:700px; !important; \" >\n                  <input  matInput\n                          type=\"text\"\n                          placeholder=\"Add a Comment\"\n                          ngModel\n                          #commentInput=\"ngModel\"\n                          required\n                          name=\"comment\"\n                          comment>\n                  <!--matInput-->\n                  <!--type=\"text\"-->\n                  <!--placeholder=\"new name\"-->\n                  <!--ngModel-->\n                  <!--#groupnameInput=\"ngModel\"-->\n                  <!--required-->\n                  <!--name=\"groupname\"-->\n                  <!--groupname-->\n                  <mat-error *ngIf=\"commentInput.invalid\">Please enter a comment.</mat-error>\n\n                </mat-form-field>\n              </li>\n              <li>\n                <button mat-raised-button color=\"primary\"\n                        mat-raised-button\n                        type=\"submit\">\n                  <mat-icon >send</mat-icon>\n                </button>\n              </li>\n            </form>\n          </ul>\n\n          <mat-list style=\"list-style: none;\">\n            <mat-list-item *ngFor=\"let comment of post.comments\" style=\"margin:0;\">\n              <strong>{{comment.commentator}}: &nbsp; </strong>\n\n              <p style=\"margin-bottom: 0px !important;\">\n                {{comment.comment}}\n              </p>\n              <mat-divider></mat-divider>\n            </mat-list-item>\n\n          </mat-list>\n\n          <!--<mat-card class=\"example-card\" style=\"width:80% !important;\" *ngFor=\"let comment of post.comments\">-->\n\n\n          <!--<mat-card-content>-->\n          <!--<strong>{{comment.commentator}}</strong>-->\n          <!--<br/>-->\n          <!--<p>-->\n          <!--{{comment.comment}}-->\n          <!--</p>-->\n          <!--</mat-card-content>-->\n\n          <!--</mat-card>-->\n\n\n\n\n\n\n\n        </mat-expansion-panel>\n\n\n\n\n\n\n      </mat-accordion>\n\n      <mat-card-actions *ngIf=\"userId != post.creator\">\n        <!--<button mat-button  color=\"warn\" (click)=\"onArchive(post.id)\">SAVE</button>-->\n        <mat-accordion class=\"example-headers-align\" >\n          <mat-expansion-panel  [class.mat-expansion-panel]=\"false\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Report\n\n              </mat-panel-title>\n\n            </mat-expansion-panel-header>\n\n            <ul class=\"commentspanel\">\n\n\n            </ul>\n\n\n          </mat-expansion-panel>\n\n\n\n\n\n\n        </mat-accordion>\n      </mat-card-actions>\n      <!--<mat-card-actions *ngIf=\"userIsAuthenticated && userId == post.creator\">-->\n        <!--&lt;!&ndash;<button mat-button  color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>&ndash;&gt;-->\n        <!--&lt;!&ndash;<a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>&ndash;&gt;-->\n\n      <!--</mat-card-actions>-->\n    </mat-card>\n\n    <!--<mat-paginator style=\"background-color: #FAFAFA;\" [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\"  (page)=\"onChangedPage($event)\"-->\n                   <!--*ngIf=\"posts.length > 0\"></mat-paginator>-->\n\n    <p  class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No recommendations yet!</p>\n  </mat-drawer-content>\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\" position=\"end\">\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift;\">\n        <mat-card class=\"example-card\">\n          <strong> <mat-icon>alarm</mat-icon> Notifcations</strong>\n        </mat-card>\n        <mat-card class=\"example-card\"*ngFor=\"let notification of notifications\">\n          <mat-card-header >\n            <ul style=\"list-style: none; display: flex;\">\n              <li>\n                <img *ngIf=\"notification.senderimage\"\n                     class=\"example-header-image-post\"\n                     [src]=\"notification.senderimage\" style=\"margin-right: 10px;\" >\n              </li>\n              <li>\n                <ul  style=\"list-style: none;\">\n                  <li>\n                    {{notification.message}}\n                  </li>\n                  <li>\n                    <mat-card-subtitle>{{TimeFromNow(notification.created)}}</mat-card-subtitle>\n                  </li>\n                </ul>\n\n              </li>\n            </ul>\n\n          </mat-card-header>\n        </mat-card>\n\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/posts/suugestionsposts/suugestionsposts.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/posts/suugestionsposts/suugestionsposts.component.ts ***!
  \**********************************************************************/
/*! exports provided: SuugestionspostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuugestionspostsComponent", function() { return SuugestionspostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../groups/groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SuugestionspostsComponent = /** @class */ (function () {
    function SuugestionspostsComponent(postsService, authService, groupsService, eventsService) {
        this.postsService = postsService;
        this.authService = authService;
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](window.innerWidth);
        this.notifications = [];
        this.posts = [];
        this.groups = [];
        this.events = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 5;
        this.currentPage = 1;
        this.newComment = [];
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
    }
    SuugestionspostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        this.isLoading = true;
        this.postsService.getSuggestionPosts();
        this.userId = this.authService.getUserId();
        // this.username = this.authService.getName();
        console.log('profileimg' + localStorage.getItem('profileimg'));
        this.profileimg = localStorage.getItem('profileimg');
        // const profileimg1 = localStorage.getItem('profileimg');
        // // @ts-ignore
        // this.profileimg = profileimg1.toString('base64');
        this.username = localStorage.getItem('username');
        this.postsSub = this.postsService.getSuggestionPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            // this.username = this.authService.getName();
            _this.posts = postData.posts;
            console.log(_this.posts);
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
        this.postsService.getNotifications();
        this.notificationSub = this.postsService.getNotificationUpdateListener()
            .subscribe(function (notificationData) {
            _this.notifications = notificationData.notifications;
            console.log(_this.notifications);
        });
        console.log(this.groupsService.getJoinedGroups());
        this.groupsSub = this.groupsService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        console.log(this.eventsService.getJoinedEvents());
        this.eventsSub = this.eventsService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
        this.socket.on('refreshpage', function (data) {
            _this.postsService.getNotifications();
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
            // this.groupsService.getJoinedGroups();
        });
    };
    SuugestionspostsComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    };
    SuugestionspostsComponent.prototype.TimeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(time).fromNow();
    };
    SuugestionspostsComponent.prototype.likePost = function (id) {
        var _this = this;
        this.postsService.likePost(id).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.postsService.getSuggestionPosts();
        });
    };
    SuugestionspostsComponent.prototype.addComment = function (post, form) {
        var _this = this;
        console.log(post.id + '\n' + form.value.comment);
        if (form.invalid) {
            return;
        }
        else {
            this.postsService.addComment(post.id, form.value.comment).subscribe(function () {
                var a = _this.posts.indexOf(post);
                _this.posts[a].commentsNo++;
                _this.posts[a].comments.push({ comment: form.value.comment, commentator: _this.username });
                // this.socket.emit('refresh', {});
                // this.postsService.getPosts(this.postsPerPage, this.currentPage);
            });
        }
    };
    SuugestionspostsComponent.prototype.dislikePost = function (id) {
        var _this = this;
        this.postsService.dislikePost(id).subscribe(function () {
            _this.socket.emit('refresh', {});
            _this.postsService.getSuggestionPosts();
        });
    };
    SuugestionspostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suugestionsposts',
            template: __webpack_require__(/*! ./suugestionsposts.component.html */ "./src/app/posts/suugestionsposts/suugestionsposts.component.html"),
            styles: [__webpack_require__(/*! ./suugestionsposts.component.css */ "./src/app/posts/suugestionsposts/suugestionsposts.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"], _events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]])
    ], SuugestionspostsComponent);
    return SuugestionspostsComponent;
}());



/***/ }),

/***/ "./src/app/posts/userspage/userspage/userspage.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/posts/userspage/userspage/userspage.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n}\r\n\r\n/*@media only screen and (max-width: 1000px) {*/\r\n\r\n/*mat-drawer-content{*/\r\n\r\n/*margin-left: 0px !important;*/\r\n\r\n/*width: 50% !important;*/\r\n\r\n/*height: 860px;*/\r\n\r\n/*}*/\r\n\r\n/*}*/\r\n\r\nmat-drawer {\r\n  /*background-color: lightblue;*/\r\n  /*border: 1px solid #555;*/\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  width: 20%;\r\n  position: absolute;\r\n}\r\n\r\nmat-drawer-content{\r\n  margin: auto !important;\r\n  width: 50% !important;\r\n  height: 860px;\r\n}\r\n\r\n:host ::ng-deep.mat-paginator .mat-paginator-container{\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n/*:host {*/\r\n\r\n/*display: block;*/\r\n\r\n/*margin-top: 1rem;*/\r\n\r\n/*}*/\r\n\r\n.info-text {\r\n  text-align: center;\r\n}\r\n\r\nmat-spinner{\r\n  margin:auto;\r\n}\r\n\r\n.commentspanel {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\nul{\r\n  list-style:none ;\r\n  padding: 0;\r\n  margin:0;\r\n}\r\n\r\n.commentspanel li {\r\n  float: left;\r\n}\r\n\r\n.example-card {\r\n  max-width: 100% !important;\r\n  margin: 4px;\r\n}\r\n\r\n.example-header-image {\r\n\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-image{\r\n  width:20%;\r\n}\r\n\r\n.post-image{\r\n  margin: 7px;\r\n  width: 100%;\r\n}\r\n\r\n.post-image img{\r\n  width:50%;\r\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);\r\n}\r\n\r\nmat-expansion-panel-header{\r\n  padding: 1%;\r\n}\r\n\r\n::ng-deep .mat-input-wrapper{\r\n  width:400px !important;\r\n}\r\n\r\n.example-header-image {\r\n  display: inline-block;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n\r\n.example-header-image-post {\r\n  display: inline-block;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background-size: cover;\r\n}\r\n\r\n.positive {\r\n  color : blue;\r\n}\r\n\r\n.negative {\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/posts/userspage/userspage/userspage.component.html":
/*!********************************************************************!*\
  !*** ./src/app/posts/userspage/userspage/userspage.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\">\n    <mat-list style=\"\n      margin-top: 11px !important;\">\n      <ul style=\"list-style:none; padding: 4px; font-family: Bahnschrift; margin-top: 0px; !important;\">\n        <li>\n          <strong> Joined Groups </strong>\n        </li>\n        <li *ngFor=\"let group of groups\" style=\"padding: 5px; \">\n          <a style=\"text-decoration: none; color: grey ;\" [routerLink]=\"['/grouppage', group.id]\">{{ group.groupname}}</a>\n        </li>\n        <li *ngIf=\"groups.length < 1\" style=\"padding: 5px; color: gray;\">\n          Following No Groups\n        </li>\n        <br/>\n        <li>\n          <strong> Joined Events </strong>\n        </li>\n        <li *ngFor=\"let event of events\" style=\"padding: 5px;\">\n          <a style=\"text-decoration: none; color: grey ;\" [routerLink]=\"['/eventpage', event.id]\">{{ event.eventname}}</a>\n        </li>\n        <li *ngIf=\"events.length<1\" style=\"padding: 5px; color: gray;\">\n          No events joined\n        </li>\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n\n  <mat-drawer-content>\n\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <ul style=\"list-style: none; display: block;\">\n          <li>\n            <strong>{{usern}}</strong>\n            <br/>\n          </li>\n          <li *ngIf=\"userid != ownid && !friends.includes(ownid) && !requests.includes(ownid)\">\n            <button mat-raised-button color=\"primary\" (click)=\"addFriend(userid)\"> Add Friend</button>\n          </li>\n          <li *ngIf=\"userid != ownid && requests.includes(ownid) && !friends.includes(ownid)\">\n            <label>Request sent !</label>\n          </li>\n          <li *ngIf=\"userid != ownid && friends.includes(ownid) && !requests.includes(ownid) \">\n                       <label style=\"color: green; font-weight: bold;\">Friends</label>\n          </li>\n          <li *ngIf=\"userid != ownid && friends.includes(ownid)\">\n            <a mat-raised-button style=\"text-decoration: none; \" [routerLink]=\"['/chat', userid]\">\n              <strong>Chat</strong>\n            </a>\n\n          </li>\n          <!--<li>-->\n            <!--<img class=\"example-header-image\"-->\n                 <!--[src]=\"profileimg\" >-->\n          <!--</li>-->\n          <!--<li>-->\n            <!--<mat-card-title>Hello {{username}}</mat-card-title>-->\n            <!--<mat-card-subtitle>Having a Good Day</mat-card-subtitle>-->\n          <!--</li>-->\n        </ul>\n      </mat-card-header>\n    </mat-card>\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n    <mat-card class=\"example-card\" *ngFor=\"let post of posts\">\n      <mat-card-header>\n        <ul style=\"list-style: none; display: flex;\">\n          <li>\n            <img class=\"example-header-image-post\"\n                 [src]=\"post.profileimg\" style=\"margin-right: 30px;\" >\n          </li>\n          <li>\n            <!--<mat-card-title *ngIf=\"!post.creator\"><strong>Advertisement<br/><p style=\"color: grey;\">{{post.username}}</p></strong></mat-card-title>-->\n            <mat-card-title ><strong>{{post.username}}</strong></mat-card-title>\n\n\n            <mat-card-subtitle>\n              <strong>\n                {{ post.title }}\n              </strong>\n            </mat-card-subtitle>\n          </li>\n        </ul>\n      </mat-card-header>\n      <br/>\n      <!--<div class=\"post-image\">-->\n      <img mat-card-image [hidden]=\"!post.imagePath\" [src]=\"post.imagePath\" [alt]=\"post.title\">\n      <!--</div>-->\n\n      <mat-card-content>\n        <p style=\"font-size: 26px !important;\">{{ post.content }}</p>\n        <strong>Date: </strong>{{ post.createdAt | date:'MMM dd, yyyy' }}\n      </mat-card-content>\n\n      <button mat-icon-button  (click)=\"likePost(post.id,post)\" >\n        <mat-icon *ngIf=\"post.likedBy.includes(ownid)\" color=\"primary\" >thumb_up</mat-icon>\n        <mat-icon *ngIf=\"!post.likedBy.includes(ownid)\"  >thumb_up</mat-icon>\n        {{post.likes}}\n      </button>\n\n\n\n\n      <button mat-icon-button (click)=\"dislikePost(post.id)\" >\n        <mat-icon *ngIf=\"post.dislikedBy.includes(ownid)\" color=\"primary\" >thumb_down</mat-icon>\n        <mat-icon *ngIf=\"!post.dislikedBy.includes(ownid)\"  >thumb_down</mat-icon>\n        {{ post.dislikes }}\n      </button>\n\n      <br/>\n\n      <mat-accordion class=\"example-headers-align\" >\n        <mat-expansion-panel  [class.mat-expansion-panel]=\"false\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n\n              <mat-icon >comment</mat-icon>\n              {{ post.commentsNo }}\n\n            </mat-panel-title>\n\n          </mat-expansion-panel-header>\n\n          <ul class=\"commentspanel\">\n            <form (submit)=\"addComment(post, commentForm)\" #commentForm=\"ngForm\" >\n              <li >\n                <mat-form-field style=\"width:700px; !important; \" >\n                  <input  matInput\n                          type=\"text\"\n                          placeholder=\"Add a Comment\"\n                          ngModel\n                          #commentInput=\"ngModel\"\n                          required\n                          name=\"comment\"\n                          comment>\n                  <!--matInput-->\n                  <!--type=\"text\"-->\n                  <!--placeholder=\"new name\"-->\n                  <!--ngModel-->\n                  <!--#groupnameInput=\"ngModel\"-->\n                  <!--required-->\n                  <!--name=\"groupname\"-->\n                  <!--groupname-->\n                  <mat-error *ngIf=\"commentInput.invalid\">Please enter a comment.</mat-error>\n\n                </mat-form-field>\n              </li>\n              <li>\n                <button mat-raised-button color=\"primary\"\n                        mat-raised-button\n                        type=\"submit\">\n                  <mat-icon >send</mat-icon>\n                </button>\n              </li>\n            </form>\n          </ul>\n\n          <mat-list style=\"list-style: none;\">\n            <mat-list-item *ngFor=\"let comment of post.comments\" style=\"margin:0;\">\n              <strong>{{comment.commentator}}: &nbsp; </strong>\n\n              <p style=\"margin-bottom: 0px !important;\">\n                {{comment.comment}}\n              </p>\n              <mat-divider></mat-divider>\n            </mat-list-item>\n\n          </mat-list>\n\n\n\n\n\n\n\n        </mat-expansion-panel>\n\n\n\n\n\n\n      </mat-accordion>\n\n\n      <!--<mat-card-actions *ngIf=\"userIsAuthenticated\">-->\n        <!--<button mat-button  color=\"warn\" (click)=\"onDelete(post.id)\">REMOVE</button>-->\n        <!--&lt;!&ndash;<a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>&ndash;&gt;-->\n\n      <!--</mat-card-actions>-->\n    </mat-card>\n\n    <!--<mat-paginator style=\"background-color: #FAFAFA;\" [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"-->\n                   <!--*ngIf=\"posts.length > 0\"></mat-paginator>-->\n\n    <p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No posts yet!</p>\n  </mat-drawer-content>\n  <mat-drawer mode=\"side\" [opened]=\"screenWidth> 1000\" position=\"end\">\n    <mat-list style=\"\n      margin-top: 11px !important;\"\n    >\n      <ul style=\"padding: 4px; font-family: Bahnschrift;\">\n        <mat-card class=\"example-card\">\n          <strong> <mat-icon>alarm</mat-icon> Notifcations</strong>\n        </mat-card>\n        <mat-card class=\"example-card\"*ngFor=\"let notification of notifications\">\n          <mat-card-header >\n            <ul style=\"list-style: none; display: flex;\">\n              <li>\n                <img *ngIf=\"notification.senderimage\"\n                     class=\"example-header-image-post\"\n                     [src]=\"notification.senderimage\" style=\"margin-right: 10px;\" >\n              </li>\n              <li>\n                <ul  style=\"list-style: none;\">\n                  <li>\n                    {{notification.message}}\n                  </li>\n                  <li>\n                    <mat-card-subtitle>{{TimeFromNow(notification.created)}}</mat-card-subtitle>\n                  </li>\n                </ul>\n\n              </li>\n            </ul>\n\n          </mat-card-header>\n        </mat-card>\n\n\n      </ul>\n\n    </mat-list>\n  </mat-drawer>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/posts/userspage/userspage/userspage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/posts/userspage/userspage/userspage.component.ts ***!
  \******************************************************************/
/*! exports provided: UserspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserspageComponent", function() { return UserspageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../groups/groups.service */ "./src/app/groups/groups.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserspageComponent = /** @class */ (function () {
    function UserspageComponent(postsService, authService, groupsService, eventsService, route) {
        this.postsService = postsService;
        this.authService = authService;
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.route = route;
        this.screenWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](window.innerWidth);
        this.friendsList = ['Shahid Mehmood', 'Moiz Khalid', 'Zara Khan', 'Ehtesham', 'Mahad Amir'];
        this.posts = [];
        this.groups = [];
        this.events = [];
        this.isLoading = false;
        this.friends = [];
        this.requests = [];
        this.totalPosts = 0;
        this.postsPerPage = 5;
        this.currentPage = 1;
        this.newComment = [];
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
        this.notifications = [];
    }
    UserspageComponent.prototype.onResize = function (event) {
        this.screenWidth$.next(event.target.innerWidth);
    };
    UserspageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenWidth$.subscribe(function (width) {
            _this.screenWidth = width;
        });
        this.isLoading = true;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('userId')) {
                _this.userid = paramMap.get('userId');
                console.log(_this.userid);
                _this.getPosts();
            }
        });
        this.postsService.getuserPosts(this.userid);
        this.ownid = this.authService.getUserId();
        // this.username = this.authService.getName();
        console.log(localStorage.getItem('profileimg'));
        this.profileimg = localStorage.getItem('profileimg');
        this.username = localStorage.getItem('username');
        this.postsSub = this.postsService.getuserPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            // this.username = this.authService.getName();
            _this.usern = postData.usern,
                _this.posts = postData.posts;
            _this.friends = postData.friends;
            _this.requests = postData.requests;
            console.log(_this.posts);
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.ownid = _this.authService.getUserId();
        });
        this.postsService.getNotifications();
        this.notificationSub = this.postsService.getNotificationUpdateListener()
            .subscribe(function (notificationData) {
            _this.notifications = notificationData.notifications;
            console.log(_this.notifications);
        });
        console.log(this.groupsService.getJoinedGroups());
        this.groupsSub = this.groupsService.getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.groups = groupData.groups;
            console.log(_this.groups);
        });
        console.log(this.eventsService.getJoinedEvents());
        this.eventsSub = this.eventsService.getEventUpdateListener()
            .subscribe(function (eventData) {
            _this.isLoading = false;
            _this.events = eventData.events;
            console.log(_this.events);
        });
    };
    // onChangedPage(pageData: PageEvent) {
    //   this.isLoading = true;
    //   this.currentPage = pageData.pageIndex + 1;
    //   this.postsPerPage = pageData.pageSize;
    //   this.postsService.getPosts(this.postsPerPage, this.currentPage );
    // }
    UserspageComponent.prototype.likePost = function (id) {
        var _this = this;
        this.postsService.likePost(id).subscribe(function () {
            _this.postsService.getuserPosts(_this.userid);
        });
    };
    UserspageComponent.prototype.getPosts = function () {
        this.postsService.getuserPosts(this.userid);
    };
    // console.log(this.posts.indexOf(post));
    // this.posts[this.posts.indexOf(post)].likes++;
    // if (this.posts[this.posts.indexOf(post)].dislikes === 0 ) {
    //
    //         } else {
    //   this.posts[this.posts.indexOf(post)].dislikes--;
    // }
    // });
    UserspageComponent.prototype.addComment = function (post, form) {
        var _this = this;
        console.log(post.id + '\n' + form.value.comment);
        if (form.invalid) {
            return;
        }
        else {
            this.postsService.addComment(post.id, form.value.comment).subscribe(function () {
                var a = _this.posts.indexOf(post);
                _this.posts[a].commentsNo++;
                _this.posts[a].comments.push({ comment: form.value.comment, commentator: _this.username });
                //   this.socket.emit('refresh', {});
                // this.postsService.getPosts(this.postsPerPage, this.currentPage);
            });
        }
    };
    UserspageComponent.prototype.TimeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(time).fromNow();
    };
    UserspageComponent.prototype.dislikePost = function (id) {
        var _this = this;
        this.postsService.dislikePost(id).subscribe(function () {
            _this.postsService.getuserPosts(_this.userid);
        });
    };
    UserspageComponent.prototype.addFriend = function (userID) {
        var _this = this;
        this.authService.requestFriend(userID).subscribe(function () {
            _this.postsService.getuserPosts(_this.userid);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserspageComponent.prototype, "userid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mat-drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"])
    ], UserspageComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserspageComponent.prototype, "onResize", null);
    UserspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userspage',
            template: __webpack_require__(/*! ./userspage.component.html */ "./src/app/posts/userspage/userspage/userspage.component.html"),
            styles: [__webpack_require__(/*! ./userspage.component.css */ "./src/app/posts/userspage/userspage/userspage.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _groups_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"], _events_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], UserspageComponent);
    return UserspageComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar/sidebar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sidebar/sidebar/sidebar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n  height: 1080px;\r\n\r\n}\r\nmat-drawer {\r\n  background-color: lightblue;\r\n  border: 1px solid #555;\r\n  width: 20%;\r\n}\r\nmat-drawer-content{\r\n  background-color: beige;\r\n  width:80%;\r\n}\r\nul{\r\n  list-style:none ;\r\n  padding: 0;\r\n  margin:0;\r\n}\r\na{\r\n  text-decoration: none;\r\n  color: white;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar/sidebar.component.html":
/*!********************************************************!*\
  !*** ./src/app/sidebar/sidebar/sidebar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar/sidebar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sidebar/sidebar/sidebar.component.ts ***!
  \******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/videochat/videochat.component.css":
/*!***************************************************!*\
  !*** ./src/app/videochat/videochat.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/videochat/videochat.component.html":
/*!****************************************************!*\
  !*** ./src/app/videochat/videochat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<textarea rows=\"4\" cols=\"50\"  style=\"width:500px ;height:500px  \" [(ngModel)]=\"targetpeer\"></textarea>-->\n<!--<textarea id=\"key\"> </textarea>-->\n<!--&lt;!&ndash; <input type=\"text\" [(ngModel)]=\"enteredTitle\"> &ndash;&gt;-->\n<!--<button (click)=\"connect()\">Connect</button>-->\n<!--<button (click)=\"message()\">Send Message</button>-->\n<!--<video #myvideo></video>-->\n\n\n\n\n\n\n\n<!-- <textarea rows=\"4\" cols=\"50\"  style=\"width:500px ;height:500px  \" [(ngModel)]=\"targetpeer\"></textarea>\n<textarea id=\"key\" style=\"width:500px ;height:500px\"  > </textarea>\n<!-- <input type=\"text\" [(ngModel)]=\"enteredTitle\"> -->\n<!-- <button (click)=\"connect()\">Connect</button> -->\n<!-- <button (click)=\"message()\">Send Message</button> -->\n<!-- <video #myvideo></video> -->\n\n\n<html lang=\"en\">\n<head>\n\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n</head>\n<body>\n<p><b>Follow the steps if you are initiating the call:</b></p><br/>\n<p>Step 1: If your iniate the video call, send the token with the label \"type\":\"offer\" to your video buddy</p>\n<p>Step 2: Enter the token received as answer with the label \"type\":\"answer\" and press the 'Connect' button</p>\n<p>Step 3:Press the Connect button</p>\n<textarea id=\"key\"   > </textarea>\n<br/>\n<p><b>Follow the steps if you receiving the call:</b></p><br/>\n<p>Step 1: If your receivng the video call, copy the token with the label \"type\":\"offer\" and past it in the text box </p>\n<p>Step 2: Press the Connect button</p>\n<p>Step 3: After receing the token with the label \"type\":\"answer\", send it to your video buddy</p>\n<textarea [(ngModel)]=\"targetpeer\" placeholder=\"Place the Offer token here..\"></textarea>\n<br/>\n<br/>\n\n<!-- <input type=\"text\" [(ngModel)]=\"enteredTitle\"> -->\n<button  (click)=\"connect()\">Connect</button>\n<!-- <button (click)=\"message()\">Send Message</button> -->\n<br/>\n<video width=\"800\" height=\"800\" #myvideo></video>\n\n\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/videochat/videochat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/videochat/videochat.component.ts ***!
  \**************************************************/
/*! exports provided: VideochatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideochatComponent", function() { return VideochatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideochatComponent = /** @class */ (function () {
    function VideochatComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        this.enteredTitle = '';
        this.title = 'app works!';
        this.n = navigator;
    }
    VideochatComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(location.hash);
        var video = this.myVideo.nativeElement;
        var peerx;
        this.n.getUserMedia = (this.n.getUserMedia || this.n.webkitGetUserMedia || this.n.mozGetUserMedia || this.n.msGetUserMedia);
        this.n.getUserMedia({ video: true, audio: true }, function (stream) {
            peerx = new SimplePeer({
                initiator: location.hash === '#/videochatstart',
                trickle: false,
                stream: stream
            });
            peerx.on('signal', function (data) {
                alert(JSON.stringify(data));
                console.log(JSON.stringify(data));
                document.getElementById('key').value = JSON.stringify(data);
                this.targetpeer = data;
            });
            peerx.on('data', function (data) {
                console.log('Recieved message:' + data);
            });
            peerx.on('stream', function (stream) {
                //video.src =window.URL.createObjectURL(stream);
                video.srcObject = stream;
                video.play();
            });
        }, function (err) {
            console.log('Failed to get stream', err);
        });
        setTimeout(function () {
            _this.peer = peerx;
            console.log(_this.peer);
        }, 5000);
    };
    VideochatComponent.prototype.connect = function () {
        //alert(this.targetpeer);
        this.peer.signal(JSON.parse(this.targetpeer));
    };
    VideochatComponent.prototype.message = function () {
        this.peer.send('Hello world');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myvideo'),
        __metadata("design:type", Object)
    ], VideochatComponent.prototype, "myVideo", void 0);
    VideochatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videochat',
            template: __webpack_require__(/*! ./videochat.component.html */ "./src/app/videochat/videochat.component.html"),
            styles: [__webpack_require__(/*! ./videochat.component.css */ "./src/app/videochat/videochat.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], VideochatComponent);
    return VideochatComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
///<reference path="./typings.d.ts"/>





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
window.global = window;
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Comsats_Social\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map