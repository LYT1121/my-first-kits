var kits = {};
// 获取一个固定的时间
// 时间的函数封装
kits.fun4 = function () {
    var date = new Date();
    var year = date.getFullYear(); //年
    var month = date.getMonth() + 1; //月
    var day = date.getDate(); //日
    var hour = date.getHours(); //时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    //调用上一个函数
    month = fun3(month);
    day = fun3(day);
    hour = fun3(hour);
    minute = fun3(minute);
    second = fun3(second);
    var time = '当前的时间是：' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    alert(time);
    return time;
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
kits.int = function(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}
// 封装一个可以获取随机浮点数的函数
kits.int1 = function() {
    return Math.floor(Math.random() * 10) / 10;
}
// 封装一个可以获得随机整数的函数 rgba取值
kits.intcolor = function() {
    var r = int(0, 255);
    var g = int(0, 255);
    var b = int(0, 255);
    var a = int1(0, 1);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
// alert(intcolor());  