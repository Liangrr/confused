const Mock = require('mockjs')
const Random = Mock.Random

export const dataList = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'sevenDay|5': [Random.date()],
  'sevenDate': [
    [Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50)],
    [Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50)],
    [Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50), Random.int(1, 50)]
  ]
})
