// 开发过程中，会积累一些公共的代码，建立一个公共代码页面
// 用一个入口函数
$(()=>{
    // 每个页面右上角都有一个加入购物车，计算购物车里面的商品总数
    // 读取本地数据里面的商品信息，计算出一个总数，修改购物车总的商品数量
    // 根据键从本地存储数据中提取字符串
    let arr = kits.loadArray('shopCarts');
    // 直接计算出总的商品数量
    let total = 0;
    arr.forEach(element => {
        total += element.number
    });
    // 修改到右上角的购物车里面
    $('.count').text(total);
})