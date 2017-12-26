'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertFilePlus = exports.writeFilePlus = exports.readFilePlus = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * @description 用 promise 对象包装 fs.readFile
 * @param {*} fileName 
 * @returns Promise 对象 
 */
var readFilePlus = function readFilePlus(fileName) {
  return new Promise(function (reslove, reject) {
    _fs2.default.readFile(fileName, { flag: 'r+', encoding: 'utf-8' }, function (err, data) {
      if (err) {
        reject(err);
      }
      reslove(data);
    });
  });
};

/**
 * @description 用 promise 对象包装 fs.writeFile
 * @param {*} fileName  写入的文件名
 * @param {*} filledTxt 写入的 txt
 * @param {*} isAppend 是否是追加
 */
var writeFilePlus = function writeFilePlus(fileName, filledTxt, isAppend) {
  return new Promise(function (reslove, reject) {
    _fs2.default.writeFile(fileName, new Buffer(filledTxt), !!isAppend ? { flag: 'a' } : {}, function (err) {
      if (err) {
        reject(err);
      }
      reslove(0);
    });
  });
};

/**
 * @description 在 appendTxt 参数后添加新字符串 filledTxt
 * @param {*} fileName 文件名
 * @param {*} filledTxt  需要追加的文字
 * @param {*} appendTxt  在某段文字后追加，找不到就在结尾追加
 */
var insertFilePlus = function insertFilePlus(fileName, filledTxt, appendTxt) {
  return new Promise(function (reslove, reject) {
    try {
      var f = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var fileData, substringIndex, preTxt, postTxt, rewriteTxt, result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return readFilePlus(fileName);

                case 2:
                  fileData = _context.sent;
                  substringIndex = -1;

                  if (!!appendTxt && !!appendTxt.length) {
                    substringIndex = fileData.indexOf(appendTxt) === -1 ? -1 : fileData.indexOf(appendTxt) + appendTxt.length;
                  }
                  substringIndex = substringIndex === -1 ? fileData.length : substringIndex;
                  preTxt = fileData.substring(0, substringIndex);
                  postTxt = fileData.substring(substringIndex);
                  rewriteTxt = preTxt + filledTxt + postTxt;
                  result = writeFilePlus(fileName, rewriteTxt);

                  reslove(result);

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, undefined);
        }));

        return function f() {
          return _ref.apply(this, arguments);
        };
      }();
      f();
    } catch (error) {
      reject(error);
    }
  });
};

exports.readFilePlus = readFilePlus;
exports.writeFilePlus = writeFilePlus;
exports.insertFilePlus = insertFilePlus;