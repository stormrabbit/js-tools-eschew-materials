const fs = require('fs');
const co = require('co');


/**
 * @description 用 promise 对象包装 fs.readFile
 * @param {*} fileName 
 * @returns Promise 对象 
 */
const readFilePlus = (fileName) => {
  return new Promise((reslove, reject) => {
    fs.readFile(fileName, { flag: 'r+', encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err);
      }
      reslove(data);
    })
  })
}

/**
 * @description 用 promise 对象包装 fs.writeFile
 * @param {*} fileName  写入的文件名
 * @param {*} filledTxt 写入的 txt
 * @param {*} isAppend 是否是追加
 */
const writeFilePlus = (fileName, filledTxt, isAppend) => {
  return new Promise((reslove, reject) => {
    fs.writeFile(fileName, new Buffer(filledTxt), !!isAppend ? { flag: 'a' } : {}, err => {
      if (err) {
        reject(err);
      }
      reslove(0);
    })
  })
}

/**
 * @description 在 appendTxt 参数后添加新字符串 filledTxt
 * @param {*} fileName 文件名
 * @param {*} filledTxt  需要追加的文字
 * @param {*} appendTxt  在某段文字后追加，找不到就在结尾追加
 */
const insertFilePlus = (fileName, filledTxt, appendTxt) => {
  return new Promise((reslove, reject) => {
    try {
      co(function* () {
        const fileData = yield readFilePlus(fileName);
        let substringIndex = -1;
        if (!!appendTxt && !!appendTxt.length) {
          substringIndex = (fileData.indexOf(appendTxt) === -1) ? -1: fileData.indexOf(appendTxt) + appendTxt.length;
        }
        substringIndex = (substringIndex === -1 ? fileData.length : substringIndex);
        const preTxt = fileData.substring(0, substringIndex);
        const postTxt = fileData.substring(substringIndex);
        const rewriteTxt = preTxt + filledTxt + postTxt;
        const result = writeFilePlus(fileName, rewriteTxt);
        reslove(result);
      });
    } catch (error) {
      reject(error);
    }

  })
}

module.exports = { readFilePlus, writeFilePlus, insertFilePlus };

