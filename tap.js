/**
 * @author （作者） 谁写的
 * @borrows (引入)
 * @callback (回调函数)
 * @class （分类）
 * @date （日期）
 * @description 功能是什么 - 封装好的移动端的单击操作
 * @param { 类型 - element } element 
 */

//  函数的目的：给元素添加单次触摸事件
function tap(element,callback) { //function tap(element.fn){
    // 创建变量，用于触摸开始的时间和结束的时间，计算时间差(驼峰命名)
    let startTime, endTime;
    // 创建变量，用于触摸开始的位置和结束的位置，计算坐标差
    let startX,startY, endX,endY;
    // 给元素添加触摸事件(移动端用addEventListener)
    element.addEventListener('touchstart',function(event){
        // 判断如果触摸点超过一个，直接退出
        if(event.touchs.length > 1){
            return;
        }
        // 创建一个时间对象，用于记录触摸开始的时间
        startTime = new Date();
        // 获取触摸开始的坐标值(client/page获取)
        startX = event.touchs[0].clientX;
        startY = event.touchs[0].clientY;
    })
    // 给元素添加 触摸结束事件
    element.addEventListener('touchend',function(event){
        // 判断如果触摸点超过一个，直接退出 (改变的触摸点超过一个)
        if(event.changedTouches.length > 1){
            return;
        }
        // 创建一个时间对象，用于记录触摸结束时间
        endTime = new Date();
        // 计算时间差，设定一个值（超过300ms），也退出函数
        if(ennTime - startTime > 300){
            return;
        }
        // 获取触摸结束的坐标值（client/page获取）使用改变的触摸点 changedTouches
        endX = event.changedTouches[0].clientX;
        endY = event.changedTouches[0].clientY;
        // 计算坐标差，设定一个值（超过5px），就退出
        // 用Math.abs 内置函数来计算绝对值，绝对是正数
        if(Math.abs(startX-endX)>5 || Math.abs(startY-endY)>5){
            return;
        }
        // 如果已经是一个单击操作了，需要做一些对应的响应 - 如果是封装好的代码里面，需要让别人能做一些什么事情，就让把一个函数传递归来
        callback && callback();//fn();
    })
}