const {
  logger,
  fsTools,
  cmdTools,
  cryptoTools
} = require('../index');
const co = require('co');

co(function* () {
  try {
    const readMe = yield fsTools.readFilePlus(__dirname + '/../ReadMe.md');
    console.log(readMe);
    const currentPath = process.cwd();
    yield fsTools.writeFilePlus(`${__dirname}/test.txt`, 'hello, world');
    yield fsTools.insertFilePlus(`${__dirname}/test.txt`, '\r\nhello kitty', 'world')

    console.log('fsTools 运行正常');
    const test1 = { a: 'a', b: 'b', c: 'c', d: 'd' };
    console.log('encode==>\n', cryptoTools.urlParamsEncode(test1));
    console.log('decode==>:\n', cryptoTools.urlParamsDecode(cryptoTools.urlParamsEncode(test1)));
    console.log('cryptoTools 运行正常');
    // cmdTools.execCommands(['test', 'test2']);
    // const exeResult = yield fsTools.readFilePlus(readMe);
    // console.log(logger)
    logger.setDebugMode(1);
    logger.m('hello, world');
    console.log('logger 运行正常')
    // logger.m('test')
    // console.log(exeResult);
  } catch (error) {
    console.log('运行错误：', error);
  } finally {
    process.exit()
  }
})

// const test1 = {a: 'a', b: 'b', c:'c', d:'d'};
// console.log('encode==>\n', urlParamsTools.urlParamsEncode(test1));
// console.log('decode==>:\n', urlParamsTools.urlParamsDecode(urlParamsTools.urlParamsEncode(test1)));
// logger.setDebugMode(1);
// logger.setDebugMode(0);
// logger.i('我去你妹')
// logger.setDebugMode(1);
// logger.m('呵呵大');