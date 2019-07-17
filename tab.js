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