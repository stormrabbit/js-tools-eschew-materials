
/**
 * @description 检测是否为汉字
 * @param {*} str 检测的字符串 
 */
const matchChinese = (str) => {
  const reg = /^[\u4e00-\u9fa5]+$/;
  if (checkStr(str)) {
    return reg.test(str);
  }
  return false;

}

/**
 * @description 提取字符串中的汉字，如果非字符串或没有中文则返回空数组
 * @param {*} str 需要检测的字符串 
 * @returns {Array}
 */
const pickChinese = (str) => {
  const reg = /[\u4e00-\u9fa5]/g;
  if (checkStr(str)) {
    return str.match(reg) || [];
  }
  return [];
}

/**
 * @description 检测字符串是否为纯英文
 * @param {*} str 
 */
const matchEnglish = (str) => {
  const reg = /^[a-zA-Z]+$/;
  if (checkStr(str)) {
    return reg.test(str);
  }
  return false;
}
/**
 * @description 提取字符串中的英文
 * @param {*} str 
 * @returns {Array}
 */
const pickEnglish = (str) => {
  const reg = /[a-zA-z]/g;
  if(checkStr(str)) {
    return str.match(reg) || [];
  }
  return [];
}
/**
 * @description 检测变量是否是数字
 * @param {*} str 需要检测的字符串 
 * @returns {boolean}
 */
const matchNumber = (str) => {
  const reg = /^[0-9]*$/;
  if (checkStr(str)) {
    return reg.test(str);
  }
  return typeof str === 'number';
}

/**
 * @description 提取字符串中的数字，如果没有或者非字符串返回空数组
 * @param {*} str 需要提取的字符串
 * @returns {Array}
 */
const pickNumber = (str) => {
  const reg = /[0-9]/g;
  if (checkStr(str)) {
    return str.match(reg) || [];
  }
  return [];
}

/**
 * @description 变量是否符合手机号码
 * @param {*} str 
 * @returns {boolean}
 */
const matchMobilPhone = (str) => {
  if (typeof str === 'number' || checkStr(str)) {
    const reg = /^(\+86)?1[3|4|5|7|8]\d{9}$/;
    return reg.test(str+'');
  }
  return false;
}

/**
 * @description 是否符合邮箱地址
 * @param {*} str 
 */
const matchMail = (str) => {
  if(checkStr(str)) {
    const reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    return reg.test(str)
  }
  return fasle;
}

const matchHttp = (str) => {
  if(checkStr(str)) {
    const reg = new RegExp('[a-zA-z]+://[^s]*');
    return reg.test(str);
  }
  return fasle;
}

/**
 * @description 去前后空格
 * @param {*} str 
 * @returns {string} 如果是字符串则去掉前后空格，如果是非字符串则直接返回
 */
const trim = (str) => {
  if (checkStr(str)) {
    const reg = /^\s+|\s+$/g;
    return str.replace(reg, '');
  }
  return str;
}
const checkStr = (str) => {
  return typeof str === 'string';
}

module.exports = {
  matchChinese,
  pickChinese,
  matchNumber,
  pickNumber,
  matchEnglish,
  pickEnglish,
  matchMobilPhone,
  matchMail,
  matchHttp,
  trim
};