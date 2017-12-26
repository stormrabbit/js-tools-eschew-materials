'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execPlus = exports.execCommands = undefined;

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var exec = _child_process2.default.exec;


/**
 * @description 处理命令数组，并把结果输出到控制台
 * @param {*} cmdStrArr 
 */
var execCommands = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cmdStrArr) {
    var i, sdout;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!cmdStrArr || !(cmdStrArr instanceof Array)) {
              console.log(_chalk2.default.red('只能接收数组做参数！'));
              process.exit();
            }
            _context.prev = 1;
            i = 0;

          case 3:
            if (!(i < cmdStrArr.length)) {
              _context.next = 12;
              break;
            }

            console.log('==>', execPlus);
            _context.next = 7;
            return execPlus(cmdStrArr[i]);

          case 7:
            sdout = _context.sent;

            console.log(_chalk2.default.white(sdout));

          case 9:
            i++;
            _context.next = 3;
            break;

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](1);

            console.log(_chalk2.default.red(_context.t0));

          case 17:
            _context.prev = 17;

            process.exit();
            return _context.finish(17);

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 14, 17, 20]]);
  }));

  return function execCommands(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @description 用 promise 对象包装 exec ，方便用 co 函数的 yield 进行处理
 * @param {*} cmdStr 需要执行的命令行代码
 * @returns Promise<exec>
 */
var execPlus = function execPlus(cmdStr) {
  return new Promise(function (reslove, reject) {
    exec(cmdStr, function (err, stout, sterr) {
      if (err) {
        reject(err);
      }
      if (!!sterr && !!sterr.length) {
        reject(sterr);
      }
      reslove(stout);
    });
  });
};

exports.execCommands = execCommands;
exports.execPlus = execPlus;