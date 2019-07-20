/**
 * 使用面向对象的方式封装实现tab栏的切换
 */
class Tab {
    // options必须是一个对象或者不传，目的为了省略传参和无序传参
    constructor(options) {
        options = options || {};
        // 分别给不同的参数设置默认值
        this.navSelector = options.navSelector || '.nav>li';
        this.contentSelector = options.contentSelector || '.content';
        this.type = options.type || 'mouseover';
        this.navClass = options.navClass || 'active';
        this.contentClass = options.contentClass || 'show';
    }
    // tab栏的方法：需要让对象调用到这些方法才能实现效果
    addEvent() {
        let _this = this;
        // 获取对应的元素(也可以封装起来)
        let lis = document.querySelectorAll(this.navSelector);
        let contents = document.querySelectorAll(this.contentSelector);
        // 注册事件
        lis.forEach((e, i) => {
            e.addEventListener(this.type, function () {
                // 处理tab栏的逻辑
                // 排他的设置li的类名
                _this.changeNavStyle(lis, this);
                // 根据this的索引找到对应的div
                _this.changeContentStyle(contents,contents[i]);
            })
        })
    }
    // 修改分类的样式的方法
    // 此时这个函数内缺少lis,让其当参数传递进来 和新的li
    changeNavStyle(lis, newli) {
        lis.forEach(e => {
            // 让所有变的普通
            e.classList.remove(this.navClass);
        })
        // 让当前变的特殊
        newli.classList.add(this.navClass);
    }

    // 修改内容的样式和方法
    changeContentStyle(contents,currentContent){
        contents.forEach(e=>{
            // 让其他的内容隐藏(默认)
            e.classList.remove(this.contentClass);
        })
        // 让当前对应的显示
        currentContent.classList.add(this.contentClass);
    }
}
/**
 * @author cwq //1121024033@qq.com
 * @date 2019/7/20
 * @description 封装的一个自动切换tab栏方法
 */
//创建一个自定义构造函数并使用extends继承上一个tab函数的属性和方法
class autoTab extends Tab {
    constructor(options) {
      //在autoTab构造函数的最前面调用Tab
      super(options);
      options = options || {};
      //新增动态的定时器时间属性和tabli个数
      this.time = options.time || 1000;
      this.num = options.num || 2;
    }
    autoPaly() {
      //定义一个变量表示当前tab是第几个
      let index = 0;
      //获取定时器id
      let intervalId = setInterval(() => {
        //获取tab栏li元素和对应单块内容元素
        let lis = document.querySelectorAll(this.navSelector);
        let contents = document.querySelectorAll(this.contentSelector);
        //当前tab为最后一个时将index改为0
        index == this.num ? index = 0 : index++;
        //调用tab排他加特殊样式方法
        this.changeNavStyle(lis, lis[index])
        //调用对应内容块排他加特殊样式方法
        this.changeContentStyle(contents, contents[index])
  
      }, this.time);
      //调用停止自动切换方法将定时器id传入方法
      this.stopPaly(intervalId);
    }
    //tab排他加特殊样式方法
    changeNavStyle(lis, currentLi) {
      //遍历伪数组将所有tab样式变一致
      lis.forEach(e => {
        e.classList.remove(this.navClass);
      })
      //
      currentLi.classList.add(this.navClass);
    }
    // 修改内容的样式的方法
    changeContentStyle(contents, currentContent) {
      contents.forEach(e => {
        e.classList.remove(this.contentClass);
      })
      // 把对应div显示
      currentContent.classList.add(this.contentClass);
    }
    //停止自动切换方法
    stopPaly(Id) {
      //闭包存储实例对象的this
      let _this = this;
      //获取tab栏li元素和对应单块内容元素
      let lis = document.querySelectorAll(this.navSelector);
      let contents = document.querySelectorAll(this.contentSelector);
      //遍历tab栏元素
      lis.forEach((e, i) => {
        //设置所有tab的自定义id
        e.setAttribute('data-id', i);
        //给所有tab绑定事件
        e.addEventListener(this.type, function () {
          //清除停止定时器
          clearInterval(Id);
          //获取当前触发的tab存储
          let eq = this.getAttribute('data-id');
          //调用tab排他加特殊样式方法并将当前tab索引传参，改变当前对应的tab
          _this.changeNavStyle(lis, lis[eq]);
          //调用修改内容的样式的方法并将当前tab索引传参，改变当前对应的内容
          _this.changeContentStyle(contents, contents[eq]);
        });
        //给所有tab注册鼠标离开事件
        e.addEventListener('mouseout', function () {
          //重新调用自动切换方法
          _this.autoPaly();
        });
      });
    }
  }