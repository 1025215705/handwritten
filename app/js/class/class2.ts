console.log("class2");
['1', '2', '3'].map(parseInt);
console.log(['1', '2', '3'].map(parseInt));
//['1', '2', '3'].map(parseInt) 这道题主要是考map 和 parseInt 方法
//map
// array.map(callback,[ thisObject]);
// callback的参数也类似：

// [].map(function(value, index, array) {
//     // ...
// });

let data = [1, 2, 3, 4];
let arrayOfSquares = data.map(function (item) {
  return item * item;
});

console.log(arrayOfSquares); // 1, 4, 9, 16

//parseInt 的用法
parseInt('123',5);
console.log(parseInt('123',5));
//将"123"看作5进制的数，返回十进制数 38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
//parseInt('3'2);// 3不能看作2进制的数

//参考网址链接
//https://blog.csdn.net/weixin_41910848/article/details/88538962
//https://www.cnblogs.com/xuan52rock/p/4460949.html

