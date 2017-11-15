/**
 * @description 对象转数组，如果不是对象则返回原值
 * @param {*} object 
 */
const obj2arr = (object) => {
  try {
    return Object.keys(object).reduce( (pre, cur) => {
      pre.push({[cur]: object[cur]});
      return pre;
    }, [])
  } catch (err) {
    return object;
  }
}

/**
 * @description 数组转对象
 * @param {*} arr 
 */
const arr2obj = (arr) => {
  try {
    const entries = function () {
      try {
        if (!this || typeof this!== 'object') {
          return [];
        } else {
          return Object.keys(this).reduce( (pre, cur)=> {
            pre.push([cur, this[cur]]);
            return pre;
          }, []);
        }        
      } catch (error) {
        return []
      }
    }
    
    return arr.reduce( (pre, cur, curIndex)=> {
      if(typeof cur === 'object') {
        for( let [key, value] of entries.call(cur) ){
          pre[key] = value
        }
      } else {
        pre[curIndex] = cur;
      }
      return pre;
    }, {})
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = {
  obj2arr,
  arr2obj
}