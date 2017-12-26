
/**
 * @description 单例模式的 logger 对象，用于输出日志
 * @method m 带有 ==> 标记的 console.log
 * @method i console.info
 * @method w console.warn
 * @method e console.error
 * @method d console.d
 */
const Loggers = (function () {
  let instantiated;
  init = () => {
    let debugMode = 0;
    setDebugMode = (flag) => {
      debugMode = flag;
    }
    i = (str) => {
      if (!!debugMode) {
        console.info(str);
      }
    }
    e = (str) => {
      if (!!debugMode) {
        console.error(str);
      }
    }

    d = (str) => {
      if (!!debugMode) {
        console.debug(str);
      }
    }

    w = (str) => {
      if (!!debugMode) {
        console.warn(str);
      }
    }

    m = (str) => {
      if (!!debugMode) {
        console.log(`${str}===>`, str);
      }
    }
    return {
      setDebugMode,
      m,
      w,
      i,
      e,
      m
    };
  }

  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = init();
      }
      return instantiated;
    }
  };
})();



module.exports = Loggers.getInstance();