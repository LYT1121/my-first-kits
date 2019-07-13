var kits = {};
// 获取一个固定的时间
// 时间的函数封装
/* kits.fun3 = function () {
    var date = new Date();
    var year = date.getFullYear(); //年
    var month = date.getMonth() + 1; //月
    var day = date.getDate(); //日
    var hour = date.getHours(); //时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var month = month < 10 ? '0' + month : month;
    var day = day < 10 ? '0' + day : day;
    var hour = hour < 10 ? '0' + hour : hour;
    var minute = minute < 10 ? '0' + minute : minute;
    var second = second < 10 ? '0' + second : second;
    var time = '当前的时间是：' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    return time;
} */
kits.zero = function (number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}
kits.fun2 = function () {
    var date = new Date();
    var year = date.getFullYear(); //年
    var month = date.getMonth() + 1; //月
    var day = date.getDate(); //日
    var hour = date.getHours(); //时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    month = zero(month);
    day = zero(day);
    hour = zero(hour);
    minute = zero(minute);
    second = zero(second);
    var time = '当前的时间是：' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    return time;
}


// 随机整数
kits.randomInt = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}

// 封装的是一个可以生成唯一id的方法
kits.prinaryKey = function () {
    // 我们通过时间蹉+大范围的随机数来生成id
    let now = Date.now();//得到的是1970年到现在的毫秒数
    // 为了防止在1毫秒之内生成的id有多个，再次加上一个大范围的随机数
    let r = kits.randomInt(100000, 999999);
    // 把两个得到的结果，拼接起来
    return now + '' + r;
}


// 十六进制随机颜色获取方法一
// 十六进制 # 0、1、2、3、4、5、6、7、8、9、A、B、C、D、E、F
// 把所有数字存到一个数组里面，然后让其循环6次得到一个结果就好
// 随机索引，取出字符
kits.integercolor = function () {
    var integer = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = '#';
    for (var i = 0; i < 6; i++) {
        var intcolor = Math.floor(Math.random() * integer.length);
        color += integer[intcolor];
    }
    return color;
}

// console.log(integercolor());
// 获取元素，注册事件
// 在事件的处理程序里面实现随机颜色
/* var btn = document.getElementById('rdColor');
btn.onclick = function(){
    document.body.style.backgroundColor = integercolor();
} */


// 十六进制随机颜色获取方法二
// 随机0-15之间的整数，转换为16进制数字，再拼接为 颜色格式
// 转换为16进制数字 NumberObject.toString(radix)
// 返回值 数字的字符串表示。例如，当 radix 为 2 时，NumberObject 会被转换为二进制值表示的字符串。
kits.integercolor1 = function () {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        var number = Math.floor(Math.random() * 16);
        color += number.toString(16);
    }
    return color;
}
// 获取元素，注册事件
/* var btn = document.getElementById('rdColor');
btn.onclick = function () {
    document.body.style.backgroundColor = integercolor1();
} */


// rgba随机颜色获取
// 方法一
//封装一个可以获取随机区间的随机整数  函数
kits.integer = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + 1);
}
// 封装一个可以获取随机区间的随机小数  函数 
// toFixed() 方法會使用定點小數表示法（fixed-point notation）來格式化數字
/* 语法：numObj.toFixed();       // Returns '12346'
    numObj.toFixed(1);      // Returns '12345.7' */
kits.integer1 = function () {
    var int1 = Math.random();
    return (int1.toFixed(1));
}
// 封装一个可以获得随机整数的函数
kits.randomcolor = function () {
    var r = integer(0, 255);
    var g = integer(0, 255);
    var b = integer(0, 255);
    // 因为a是透明色，取值在[0,1）
    var a = integer1(0, 1);
    // 拼接成rgba颜色
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
// alert(randomcolor());



// 方法二
// 封装一个可以获取随机区间的整数
kits.int = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}
// 封装一个可以获取随机浮点数的函数
kits.int1 = function () {
    return Math.floor(Math.random() * 10) / 10;
}
// 封装一个可以获得随机整数的函数 rgba取值
kits.intcolor = function () {
    var r = int(0, 255);
    var g = int(0, 255);
    var b = int(0, 255);
    var a = int1(0, 1);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
// alert(intcolor());


// 用于把很多重复使用的代码，进行封装，到时候直接使用
/**
  * @description 读取存储在localStorage里面的数组的
  * @param {string} key 存储数据使用的键
  * @return {Array} 返回一个数组，如果不存在，返回空数组
  */
function loadData(key) {
    var str = localStorage.getItem(key);
    var arr = JSON.parse(str);
    if (!arr) {
        arr = [];
    }
    return arr;
}

/**
 * @description 用于将数组存储到localStorage里面的方法
 * @param {string} key 存储使用的键
 * @param {Array} arr 要存储的数组数据
 * @return {undefined}
 */
function saveData(key, arr) {
    var json = JSON.stringify(arr);
    localStorage.setItem(key, json);
}

// 封装计算购物车里面的商品总量的代码
function total(){
    // 加载所有的数据
    var arr = loadData('shopCart');
    // 计算总件数
    var total = 0;
    arr.forEach(function(e){
      total += e.number;
    });
    return total;
  }
