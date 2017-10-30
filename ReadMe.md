# eschew-materials 施法免材

>**施法免材** ，车 1 级法师卡的时候我必选的专长之一（另一个是精通先攻），效果是施放法术的时候可以无视少于 1 金币的材料。虽然 DND 的电子游戏都自带此专长导致它很没存在感，但是跑团的时候遇到喜欢给 PC 出难题的 DM 时还是挺有用的（我就被不怀好意的坑过）。

一直以来，写代码的过程中总是用到一些公共方法，比如`读写文件`、`日期格式转换`、`首字母大小写`。但是因为懒而且特别懒，一直没有想到过要把它们整理下来。总是需要的时候就去网上先找先用，用完扭头就扔掉了。然后下次再用到的时候还是要去找，复制粘贴修改一番再弄回来。

挺没效率的。

最近终于~~觉醒了中二的法师之魂~~有了程序员的自觉，而且在写代码的时候总是被一些基础的东西牵扯精力是件很烦人的事情。因此决定整理自己的公共方法库，以便以后开发的时候随时调用。


## 工具类：

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

- `txtTools` : 字符串处理工具

1. head2LowerCase : 首字母小写
2. head2UpperCase : 首字母大写
3. formatDate : 日期转字符串
>使用需要依赖 co 函数模块。

### 使用

- 使用 `npm install eschew-materials --save`

- 查看源码 `git clone https://github.com/stormrabbit/spell-book-powerword.git`

- 运行测试 `npm test` 

### Change log

- 1.0.0

1. 初始化项目
2. 编写 readme

- 1.0.1

1. 修正由 spell-fs 拷贝代码时忘记修改方法名的错误。
2. 修改 test 方法，增加所有工具类的检测。

- 1.0.2
1. 增加了 txtTool 工具类，专门处理字符串进行处理

- 1.0.3
1. 修复因复制粘贴代码引起的 bug，以后应该加强测试
#### author

[@龙骑将杨影枫](https://github.com/stormrabbit)