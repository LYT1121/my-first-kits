kits.zero方法

用来获取当前月-日 时:分:秒个位数前+0

调用方式：kits.zero();—配合kits.fun2方法使用

kits.fun2方法

用来获取当前日期和时间，以年-月-日  时:分:秒的格式来返回值

调用方式：kits.fun2();





kits.randomInt方法

用来获取随机整数[n,m],调用时在函数添加两个实参。

调用方式：kits.randomInt(数字1，数字2)；





kits.prinaryKey方法

用来获取生成唯一ID—通过时间戳+大范围的随机数来生成id

调用方式：kits.prinaryKey();





kits.integercolor方法

用来获取十六进制随机颜色—方法一

调用方式：kits.integercolor();

kits.integercolor1方法

用来获取十六进制随机颜色—方法二

调用方式：kits.integercolor1();





kits.integer方法

封装一个可以获取随机区间的随机整数

调用方式：kits.integer();





kits.randomcolor方法

用来获取rgba随机颜色

调用方式：kits.randomcolor();





kits.int1方法

获取随机浮点数

调用方式：kits.int1();





*kits.*loadData方法

读取存储在localStorage里面的数组的

调用方式：*function* loadData(*提取的键*)

*kits.saveData方法

数组存储到localStorage里面

调用方式：*function* saveData(*存取的键*, *数组)





kits.total方法

计算购物车里面的商品总量

调用方式：*function* total();





kits.cleckAll方法

调用函数，并在有全选框的地方使用方法中的id和class即可使用此方法

调用方式：kits.cleckAll(全选框id，复选框选择器)；





封装发布订阅模式

用class关键字封装，定义一对多的关系，让多个观察者对象同时监听某一个主题对象

调用方式：let 变量名 = new SubscriptionPublishing_Model ({参数：值/可以不写});

​                   变量名.trigger();



封装递归函数，把数组转换成为树形结构

多用于无限多级菜单

调用方式：fn(服务器获取的数据结构，初始id)



ajax步骤封装

调用方式：ajax({

​      data : 'userName=123',

​      callback : function(res){console.log(res); },

​      type: 'get',

​      url : 'http://127.0.0.1:8080/isUserNameExist'  });

或者：ajax({

​        url: 'http://127.0.0.1:8080/getCodeWithoutPhone',

​        callback: *function* (*res*) {

​            *console*.log(res);

​            *console*.log('这是我们自己的回调');}

​    });