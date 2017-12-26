'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @description 对象转数组，如果不是对象则返回原值
 * @param {*} object 
 */
var obj2arr = function obj2arr(object) {
  try {
    return Object.keys(object).reduce(function (pre, cur) {
      pre.push(_defineProperty({}, cur, object[cur]));
      return pre;
    }, []);
  } catch (err) {
    return object;
  }
};

/**
 * @description 数组转对象
 * @param {*} arr 
 */
var arr2obj = function arr2obj(arr) {
  try {
    var entries = function entries() {
      var _this = this;

      try {
        if (!this || _typeof(this) !== 'object') {
          return [];
        } else {
          return Object.keys(this).reduce(function (pre, cur) {
            pre.push([cur, _this[cur]]);
            return pre;
          }, []);
        }
      } catch (error) {
        return [];
      }
    };

    return arr.reduce(function (pre, cur, curIndex) {
      if ((typeof cur === 'undefined' ? 'undefined' : _typeof(cur)) === 'object') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = entries.call(cur)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            pre[key] = value;
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
      } else {
        pre[curIndex] = cur;
      }
      return pre;
    }, {});
  } catch (error) {
    console.log(error);
    return [];
  }
};

exports.obj2arr = obj2arr;
exports.arr2obj = arr2obj;