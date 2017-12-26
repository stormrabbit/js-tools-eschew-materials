"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @description 单例模式的 logger 对象，用于输出日志
 * @method m 带有 ==> 标记的 console.log
 * @method i console.info
 * @method w console.warn
 * @method e console.error
 * @method d console.d
 */
var Loggers = function () {
  var instantiated = void 0;
  init = function init() {
    var debugMode = 0;
    setDebugMode = function setDebugMode(flag) {
      debugMode = flag;
    };
    i = function i(str) {
      if (!!debugMode) {
        console.info(str);
      }
    };
    e = function e(str) {
      if (!!debugMode) {
        console.error(str);
      }
    };

    d = function d(str) {
      if (!!debugMode) {
        console.debug(str);
      }
    };

    w = function w(str) {
      if (!!debugMode) {
        console.warn(str);
      }
    };

    m = function m(str) {
      if (!!debugMode) {
        console.log(str + "===>", str);
      }
    };
    return _defineProperty({
      setDebugMode: setDebugMode,
      m: m,
      w: w,
      i: i,
      e: e
    }, "m", m);
  };

  return {
    getInstance: function getInstance() {
      if (!instantiated) {
        instantiated = init();
      }
      return instantiated;
    }
  };
}();

module.exports = Loggers.getInstance();