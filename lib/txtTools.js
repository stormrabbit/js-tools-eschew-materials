/**
 * @description 字符串首字母转小写
 * @param {*} str 需要转换的字符串
 * @returns 如果是非字符串原样返回，字符串第一个字母转为小写
 */
const head2LowerCase = (str) => {
  if (typeof str === 'string') {
    return str.slice(0, 1).toLowerCase() + str.slice(1);
  }
  return str;
}

/**
 * @description 字符串首字母转大写
 * @param {*} str 
 * @returns 如果是非字符串原样返回，字符串第一个字幕转为大写
 */
const head2UpperCase = (str) => {
  if (typeof str === 'string') {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
  return str;
}

/**
 * @description 日期格式化
 * @param {*} date 需要格式化的日期
 * @param {*} fmt 需要格式化的格式，不写格式为 'yyyy-MM-dd HH:mm:ss.S'
 * @returns 根据 fmt 格式化 
 */
const formatDate = (date, fmt = 'yyyy-MM-dd HH:mm:ss.S') => {
  if (!date) {
    return '';
  }

  let _fmt = fmt.slice(0);
  let __this = new Date();
  if (date !== null) {
    if (Date.parse(date)) {
      __this = date;
    } else {
      try {
        __this = new Date(date);
      } catch (ex) {
        __this = new Date();
      }
    }
  }
  const oo = {
    'M+': __this.getMonth() + 1, // 月份
    'd+': __this.getDate(), // 日
    'D+': __this.getDate(), // 日
    'H+': __this.getHours(), // 小时
    'h+': __this.getHours(), // 小时
    'm+': __this.getMinutes(), // 分
    's+': __this.getSeconds(), // 秒
    'q+': Math.floor((__this.getMonth() + 3) / 3), // 季度
    'S': __this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(_fmt)) {
    /(y+)/.exec(_fmt);
    // const aa = /(y+)/.test(_fmt);
    // if (aa) {
    const fmt1 = _fmt.replace(RegExp.$1, (__this.getFullYear() + '').substr(4 - RegExp.$1.length));
    _fmt = fmt1;
    // }
  }
  for (const kk in oo) {
    if (new RegExp('(' + kk + ')').test(fmt)) {
      _fmt = _fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (oo[kk]) : (('00' + oo[kk]).substr(('' + oo[kk]).length)));
    }
  }
  return _fmt;
}

/**
 * @description 解析URL地址
 * @method __ParseURL
 * @param {string} url 完整的URL地址
 * @return {object} 自定义的对象
 * @example
 *  用法示例：var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top');
 * myURL.file='index.html'
 * myURL.hash= 'top'
 * myURL.host= 'abc.com'
 * myURL.query= '?id=255&m=hello'
 * myURL.params= Object = { id: 255, m: hello }
 * myURL.path= '/dir/index.html'
 * myURL.segments= Array = ['dir', 'index.html']
 * myURL.port= '8080'
 * yURL.protocol= 'http'
 * myURL.source= 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'
 */
const parseURL = (url) => {
  console.log('document==>', document);
  const ae = document.createElement('a');
  ae.href = url;
  return {
    source: url,
    protocol: ae.protocol.replace(':', ''),
    host: ae.hostname,
    port: ae.port,
    query: ae.search,
    params: (() => {
      const ret = {};
      const seg = ae.search.replace(/^\?/, '').split('&');
      const len = seg.length;
      let ii = 0;
      let ss;
      for (; ii < len; ii++) {
        if (!seg[ii]) {
          continue;
        }
        ss = seg[ii].split('=');
        ret[ss[0]] = ss[1];
      }
      return ret;
    })(),
    file: (ae.pathname.match(/\/([^\/?#]+)$/i) || [''])[1],
    hash: ae.hash.replace('#', ''),
    path: ae.pathname.replace(/^([^\/])/, '/$1'),
    relative: (ae.href.match(/tps?:\/\/[^\/]+(.+)/) || [''])[1],
    segments: ae.pathname.replace(/^\//, '').split('/')
  };
}

module.exports = { head2LowerCase, head2UpperCase, formatDate, parseURL }