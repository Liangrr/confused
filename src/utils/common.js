
const common = {
  // 洗牌算法，参数：数组，返回：一个打乱顺序的数组
  shuffle (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1))
      var itemAtIndex = arr[randomIndex]

      arr[randomIndex] = arr[i]
      arr[i] = itemAtIndex
    }
    return arr
  },
  // 节流函数,一般用在搜索。参数：回调函数，时间
  throttle (fn, interval = 300) {
    let timer = null
    let firstTime = true
    return function (...args) {
      if (firstTime) {
        // 第一次加载
        fn.apply(this, args)
        return
      }
      if (timer) {
        // 定时器正在执行中，跳过
        return
      }
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        fn.apply(this, args)
      }, interval)
    }
  }
}
export default common
