# sop-tools-eschew-materials 施法免材

## 说明

开发过程中用到了一些公共方法，封装成组件以方便调用。

>使用需要依赖 co 函数模块。

目前包括：

- `fsTools` : 用 promise 对象封装了 fs 的一些异步调用，方便使用 co 模块进行操作

1. `readFilePlus` :  promise 对象封装的 fs.readFile
2. `writeFilePlus` : promise 对象封装的 fs.writeFile
3. `insertFilePlus` : promise 对象封装后的组合函数，主要用于在文件的某段话之后插入另一段话

- `cmdTools` : 用 promise 对象封装了 exec，方便异步调用

1. `execPlus` : promise 对象封装后的 exec ，可以执行命令行语句并输出
2. `execCommands` : 使用 `execPlus` 处理多条命令行语句

- `cryptoTools` :  加密以及解密工具

1. `base64encode` : base64 加密 
2. `base64decode` : base64 解密

- `logger` : 单例，用于调试的时候查看日志

1. `setDebugMode` 1 开启 0 关闭
2. `w` console.warn
3. `i` console.info
4. `d` console.debug
5. `e` console.error
6. `m` console.log('==>', str) 


### Change log

- 1.0.0

1. 初始化项目
2. 编写 readme

#### author

@欧阳夏昱 wb-yg310472