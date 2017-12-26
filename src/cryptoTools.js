const base64encodechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const base64decodechars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

const base64encode = (str) => {
    let out;
    let i;
    let c1, c2, c3;
    const len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64encodechars.charAt(c1 >> 2);
            out += base64encodechars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64encodechars.charAt(c1 >> 2);
            out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
            out += base64encodechars.charAt((c2 & 0xf) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64encodechars.charAt(c1 >> 2);
        out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
        out += base64encodechars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
        out += base64encodechars.charAt(c3 & 0x3f);
    }
    return out;
}

const base64decode = (str) => {
    let c1;
    let c2;
    let c3;
    let c4;
    let i;
    let out;
    const len = str.length;

    i = 0;
    out = "";
    while (i < len) {

        do {
            c1 = base64decodechars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1)
            break;

        do {
            c2 = base64decodechars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = base64decodechars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = base64decodechars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}   

/**
 * @description 将请求参数用 base64 加密并用 encodeURIComponent 处理后得到一个字符串。方便保存页面的快照状态。
 * @param {*} paramsObj 需要拼接的参数对象
 */
const urlParamsEncode = paramsObj => {
    // 1. 拿到对象转成 json 字符串
    const paramsObjStr = JSON.stringify(paramsObj);
    // 2. 使用 base64 加密字符串
    const baseStr = base64encode(paramsObjStr);
    // 3. 返回用 encodeURIComponent 转义后的字符串
    return encodeURIComponent(baseStr)
}

/**
 * @description 将加密的参数转换成对象，方便后续操作。
 * @param {*} paramsObjStrEncode 从链接中取到的参数值
 */
const urlParamsDecode = paramsObjStrEncode =>{
    // 1. 拿到字符串先用 decodeURIComponent 转义
    const paramsObjStr = decodeURIComponent(paramsObjStrEncode);
    // 2. 转义完用 base64 解密成 json 字符串
    const baseStr = base64decode(paramsObjStr);
    // 3. 用 json 转成对象并返回
    return JSON.parse(baseStr);
}

export {base64decode, base64encode, urlParamsDecode, urlParamsEncode};