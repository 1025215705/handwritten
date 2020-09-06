//什么是防抖和节流？有什么区别？如何实现？
//防抖：高频率的触发某个事件， 如果在n秒再次被触发， 则重新计算
function debounce(fn: any) {
    let timeOut: any; //定时器
    return function () {
        if (timeOut) {
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(function (this: any) {
            fn.apply(this)
        }, 500);
    }
}
function sayHi() {
    console.log('防抖成功');
}
window.addEventListener('scroll', debounce(sayHi));


//节流： 高频率的触发某个事件下， 稀释掉频率
function throttle(fn: any) {
    let canRun = true;
    return function () {
        if (!canRun) {
            return
        } else {
            canRun = false;
            setTimeout(function (this: any) {
                fn.apply(this);
                canRun = true;
            }, 500)
        }
    }
}
window.addEventListener('resize', throttle(sayHi));