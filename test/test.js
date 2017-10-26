const {
  logger,
  fsTools,
  cmdTools,
  cryptoTools
} = require('../index');
const co = require('co');


co(function * () {
  // const readMe = yield fsTools.readFilePlus(__dirname + '/../ReadMe.md');
  // console.log(readMe);
  // cmdTools.execCommands(['test', 'test2']);
  // const exeResult = yield fsTools.readFilePlus(readMe);
  // console.log(logger)
  logger.setDebugMode(1);
  logger.m('fuck');
  // logger.m('test')
  // console.log(exeResult);
})

// const test1 = {a: 'a', b: 'b', c:'c', d:'d'};
// console.log('encode==>\n', urlParamsTools.urlParamsEncode(test1));
// console.log('decode==>:\n', urlParamsTools.urlParamsDecode(urlParamsTools.urlParamsEncode(test1)));
// logger.setDebugMode(1);
// logger.setDebugMode(0);
// logger.i('我去你妹')
// logger.setDebugMode(1);
// logger.m('呵呵大');