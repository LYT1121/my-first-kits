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
kits.loadData = function (key) {
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
kits.saveData = function (key, arr) {
    var json = JSON.stringify(arr);
    localStorage.setItem(key, json);
}

// 封装计算购物车里面的商品总量的代码
kits.total = function () {
    // 加载所有的数据
    var arr = loadData('shopCart');
    // 计算总件数
    var total = 0;
    arr.forEach(function (e) {
        total += e.number;
    });
    return total;
}


/**
 * @author lyt //1121024033@qq.com
 * @date 2019/7/19
 * @description  一个可以生成唯一id(尽可能)的方法
 * @param {string} cleckall 全选框的id名称
 * @param {string} clecktd 下面复选框的选择器名
 * @return {undefined}
 */
//全选与反选
kits.cleckAll = function (cleckall, clecktd) {
    //1.声明变量存储获取的全选框和单个选框
    let cleckAll = document.querySelector(cleckall);
    let cleckTd = document.querySelectorAll(clecktd);
    //2.全选框绑定点击事件
    cleckAll.onclick = function () {
        //3.声明变量存储全选框的checked值
        let cleckAll1 = cleckAll.checked;
        //4.循环遍历单个复选框
        for (let i = 0; i < cleckTd.length; i++) {
            //5.判断全选框为选中时，下面单个复选框全部选中，否则全部不选中
            if (cleckAll1 === true) {
                cleckTd[i].checked = true;
            } else {
                cleckTd[i].checked = false;
            }
        }
    }
    //6.循环给所有单个复选框绑定点击事件
    for (let i = 0; i < cleckTd.length; i++) {
        cleckTd[i].onclick = function () {
            //7.使用反证法，假设全选框是选中状态
            let flag = true;
            //8.循环单个复选框的次数来判断单个复选框是否选中
            for (let j = 0; j < cleckTd.length; j++) {
                //9.循环至有一个未选择的时候改变全选框的选中状态为不选中
                if (cleckTd[j].checked == false) {
                    flag = false;
                    break;
                }
            }
            //10.改变全选框的状态
            cleckAll.checked = flag;
        }
    }
}


/**
 * @author lyt //1121024033@qq.com
 * @date 2019/7/20
 * @description  封装发布订阅模式 行为型模式——>观察者模式(定义一对多的关系，让多个观察者对象同时监听某一个主题对象)
 * @param {string} key 存储使用的键
 * @param {string} fn 自定义函数
 * @return {false}
 */

class SubscriptionPublishing_Model {
    constructor() {
        this.clientEvent = [];
    }
    add(key, fn) {
        //如果事件源对象键名不为空，表示已存有，否则用空数组赋值
        this.clientEvent[key] = this.clientEvent[key] || [];
        this.clientEvent[key].push(fn)
    }
    trigger(key) {
        // 根据key找到clientEvent数组里面的函数，然后一一调用
        if (this.clientEvent[key]) {
            this.clientEvent[key].forEach(e => {
                e();
            });
        } else {
            return false
        }
    }
}


/**
 * @author lyt //1121024033@qq.com
 * @date 2019/7/24
 * @description  封装发布状态模式—— 使用不同的状态来代替判断以达到程序的可拓展性的最大优化——使用状态代替if-else
 * @param {string} dom 要判断的元素
 * @param {string} fn 自定义函数
 *  @param {string} arr 存储自定义函数规则的数组
 * @return {msg} 信息提示
 */
// 方法1(不完整)
// 把所有的验证策略，封装到对象里面——调用的时候从对象身上通过键的方式获取
let strategies = {
    // 非空判断
    isNonEmpty:function(val,msg){
        if(val.trim().length === 0){
            return msg;
        }
    },
    // 字符长度判断
    minLength:function(val,len,msg){
        if(val.trim().length<len){
            return msg;
        }
    },
    // 验证手机号码格式
    isMobile:function(val,msg){
        // 验证是否是手机号码需要用到正则表达式
        if(!/(^1[3|5|7|8][0-9]{9}$)/.text(val)){
            return msg;
        }
    }
}
// 面向对象的封装 ： 抽象出类(构造函数),new 实例对象，调用实例对象去做事情
// 写一个构造函数——有一个对象，它有一个方法，可以为我们向这个数组里面添加函数
function Validator(){
    // 有一个数组
    this.validateFuncs = [];
}
// 给构造函数的原型添加一个方法，让其可以添加一个新的函数进去
// 变量为要判断的元素和规则数组
Validator.prototype.add = function(dom,arr){
    // 遍历数组，往this.validateFuncs 里添加新的验证方法
    for(let i=0; i<arr.length; i++){
        // 声明一个变量存储对象
        let fn = function(){
            // 声明一个变量获取到数组里面的一个个规则对象
            let rule = arr[i];
            // 声明一个变量存储规则对象中函数名=属性值，使用冒号分割出来的数组
            let params = rule.fnName.split(':');//例如：[minLength，8]
            // 声明一个变量用来存储刚刚分割出来的数组的第一个参数
            let fnName = params.shift();// fnName里面可能会包含参数
            // 把判断的元素的内容放到数组的第一位
            params.unshift(dom.value);//[dom.vlaue,8]
            // 把判断的元素的提示信息部分放在数组的后面
            params.push(rule.errMsg);// [dom.value,8,rule.errMsg];
             // 采用apply的方式调用函数
             // 函数名.apply(新this,[参数1，参数2，参数3])
             return strategies[fnName].apply(dom,params);
            //  例如:// return strategies.isNonEmpty(form.password.value,'密码不能为空');
        }
        this.validateFuncs.push(fn);
    }
}
// 开始验证的方法
// 需要一个可以把数组里面的每个函数都执行的方法
Validator.prototype.start = function(){
    for (let i = 0; i < this.validateFuncs.length; i++) {
        let msg = this.validateFuncs[i]();
        if (msg) {
          return msg;
        }
      }
}

// 参考别人的封装
/* class State_Model {
    constructor() {
        //策略函数数组，用于声明策略
        this.strategies = {};
        //将要进行判断的策略函数数组
        this.validateFuncs = [];
        (function () {
            this.init();
        }).call(this)
    }
    //添加状态模式
    add(dom, rules) {
        // console.log(this.strategies)
        let _this = this;
        rules.forEach(e => {
            let fn = function () {
                let props = e.validateFunName.split(":");
                let funcName = props.shift();
                props.push(e.errMsg);
                return (_this.strategies[funcName]).apply(this, [dom.value, ...props]);
            }
            _this.validateFuncs.push(fn);
        });
    }
    //添加策略对象
    addStrategies(strategy) {
        this.strategies = strategy;
    }
    //策略判断（核心）
    validate() {
        if (this.validateFuncs) {
            this.validateFuncs.forEach(e => {
                //如果返回不为undefined则执行返回errMsg内容操作
                let msg = e();
                // console.log(msg)
                if (msg) {
                    // console.log(msg)
                    return msg;
                }
            });
        }
    }
    //初始化测试
    init() {
        this.addStrategies({
            //用于判断输入数据是否为空
            isNonEmpty: function (val, errMsg) {
                    if (val === '') {
                        return errMsg;
                    }
                }
                //用于判断输入数据长度是否符合要求
                ,
            minLength: function (val, len, errMsg) {
                    if (val.length < len) {
                        return errMsg;
                    }
                }
                //用于判断手机号码是否合法
                ,
            isPhone: function (val, errMsg) {
                if (!(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/).test(val)) {
                    return errMsg;
                }
            }
        });
    }
} */






/**
 * @author lyt //1121024033@qq.com
 * @date 2019/7/20
 * @description  封装递归函数，把数组转换成为树形结构
 * @param {string} arr 就是从服务器获取回来的菜单数组
 * @param {string} fjid 就是子级菜单的父级的id
 * @return {数组}
 */

kits.fn = function (arr, fjid) {
    //  定义一个空数组
    let temp = [];
    //  遍历从服务器获取回来的数组，判断父级
    arr.forEach(e => {
        // 判断当前遍历的id是父级的id
        if (e.ID === fjid) {
            // 怎么是其父级id，把元素放到数组里
            temp.push(e);
            // 继续构建子级
            e.child = fn(arr, e.id);
        }
    });
    return temp;
}

/**
 * @author lyt //1121024033@qq.com
 * @date 2019/7/21
 * @description 封装ajax的步骤
 * @param {object || null} options 对象 对象里面有四个键
 * @example options{
 *    type 请求方式
 *    url 请求地址
 *    data 请求回到服务器的数据 键=值&键=值格式
 *    callback 回调函数  请求成功后函数里面写逻辑
 * }
 */
//  1.不一定所有的请求都带参数 - 默认值
// 2.多个参数传递按照一定的顺序就比较复杂 - 使用无序传参 - 对象传参
kits.ajax = function (options) {
    options = options || {};
    options.type = options.type || 'get';//'post'
    options.url = options.url || '';
    // 回调函数可以不写这，请求成功后直接加也可以
    options.callback = options.callback || function (res) {
        console.log('你的回调函数没给，我们不建议这样干');
        console.log(res);
    };
    options.data = options.data || '';
    // 创建一个ajax实例
    let xhr = new XMLHttpRequest();
    // 如果是get请求，直接用？连接把数据拼接在url后面
    if (options.type === 'get') {
        // 例如：网址？username=小小
        options.url += '?' + options.data;
    }
    // 准备打开请求地址，用实例的open方法  open(请求方法，请求地址)
    xhr.open(options.type, options.url);
    // 如果是post请求，把数据放在send的里面，在之前还得设置请求头
    if (options.type === 'post') {
        // 先设置请求头
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // 发送post请求  实例的send方法, send(可以发送数据)
        xhr.send(options.data);
    } else {
        // 发送get发送的请求
        xhr.send();
    }
    // 监听通信的状态  onreadyStateChange事件
    xhr.onreadystatechange = function () {
        // 在通信状态处理函数内判断【readyState】和【status】是否是成功状态
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 请求成功——写逻辑——因为逻辑未定，所以可以用一个回调函数
            // 通过实例的 responseText 获取响应的数据
            options.callback(xhr.responseText); //options.callback();
        }
    }
}


/**
 * 老师封装的ajax函数
 * @param {object} options 
 * @example {
    *  type : 请求方式 ，可以是get或者post
    *  url : 请求的地址
    *  data : 携带回服务器的数据
    *  callback : 请求成功的回调函数
    * }
    */
kits.ajax = function (options) {
    options = options || {};
    var type = options.type || 'get';
    var url = options.url || '';
    var data = options.data || {};
    var callback = options.callback || null;
    // 因为type别人在使用的时候，可能会写出不一样的大小写，统一在里面转换为小写
    type = type.toLowerCase();
    // 因为我们要求别人是以键值对的形式把数据传入，帮忙把对象转换为固定格式
    // 键=值&键=值
    var temp = [];
    for (var key in data) {
        temp.push(`${key}=${data[key]}`);
    }
    data = temp.join('&');

    // 1 创建异步对象
    var xhr = new XMLHttpRequest();
    // 2 告诉他去哪里获取数据
    // 判断一下是否是get请求，如果是，就这样传递数据
    if (type === 'get') {
        xhr.open(type, url + '?' + data);
        // 3 把他派出去
        xhr.send();
    } else {
        xhr.open(type, url);
        // 如果是post请求，还要设置请求头
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        // 3 把他派出去
        xhr.send(data);
    }
    // 4 时刻关注办事的进度
    xhr.onreadystatechange = function () {
        // 4 是请求完成响应回到浏览器，并且把响应报文解析完毕的状态
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 在这里处理服务器返回数据之后的逻辑
            callback && callback(xhr.responseText);
        }
    }
}



// /**
//  * @description: 深度克隆（可克隆函数）
//  * @param : 无
//  * @return: 深度克隆后的对象
//  */
// Object.prototype.deepClone = function () {
//     let target = (this instanceof Array) ? [] : {}
//     for (let key in this) {
//         if (this.hasOwnProperty(key)) {
//             console.log(this[key]);
//             if ((this[key] instanceof Array) || this[key] instanceof Object && !(this[key] instanceof Function)) {
//                 target[key] = this[key].deepClone();
//             } else {
//                 if (this[key] instanceof Function) {
//                     target[key] = (this[key]).bind();
//                 } else {
//                     target[key] = this[key];
//                 }
//             }
//         }
//     }
//     return target;
// }


/**
 * @author lyt //1121024033@qq.com
 * @date 2019-07-24
 * @description 封装一个获取地址栏后面的所有参数并转换为对象的方法
 * @return {object} 返回值是一个转换的对象
 */
kits.getUrlParams = function(){
    // 获取地址栏?后面的所有字符串
    let search = location.search.substr(1);
    // 以&符号将字符串分割成为数组
    let arr = search.split('&');
    // 声明一个空对象
    let prams = {};
    // 遍历刚刚分割的数组
    arr.forEach(e=>{
        // 将数组中的所有值以=号分割为一个一个的字符串，每个键，每个值
        let temp = e.split('=');
        // 声明变量存储键
        let key = temp[0];
        // 声明变量存储值
        let val = temp[1];
        // 对象的键=值，通过遍历填充对象
        prams[key] = val;
    })
    // 函数返回拼接的对象
    return prams;
}